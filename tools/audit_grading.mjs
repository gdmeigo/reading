import fs from "node:fs";
import path from "node:path";
import {
  WORKBOOK_BUILDER_PATH,
  contentTextPath,
  parseContentItems,
  parseProgressItems,
  progressIndexMap,
  readReaderSource,
  requiredIdForText,
} from "./grading_rules.mjs";

const args = new Set(process.argv.slice(2));
const shouldWrite = args.has("--write");
const shouldJson = args.has("--json");

const rootDir = process.cwd();
const readerPath = path.join(rootDir, "assets/reader.js");
const workbookBuilderPath = path.join(rootDir, WORKBOOK_BUILDER_PATH);
const readerSource = readReaderSource(rootDir);
const progressItems = parseProgressItems(readerSource);
const contentItems = parseContentItems(readerSource);
const byId = progressIndexMap(progressItems);

const findings = [];
const updates = [];

for (const item of contentItems) {
  const textPath = contentTextPath(item);
  const absoluteTextPath = path.join(rootDir, textPath);
  const currentIndex = byId.get(item.id);

  if (!Number.isInteger(currentIndex)) {
    findings.push({
      type: "unknown-id",
      item,
      textPath,
      message: `Unknown content ID: ${item.id}`,
    });
    continue;
  }

  if (!fs.existsSync(absoluteTextPath)) {
    findings.push({
      type: "missing-text",
      item,
      textPath,
      message: `Missing text file: ${textPath}`,
    });
    continue;
  }

  const text = fs.readFileSync(absoluteTextPath, "utf8");
  const required = requiredIdForText(text, progressItems);

  if (!required.id) {
    findings.push({
      type: "no-required-id",
      item,
      textPath,
      message: `Could not infer required ID for ${textPath}`,
    });
    continue;
  }

  if (required.id !== item.id) {
    updates.push({ ...item, textPath, requiredId: required.id, requiredIndex: required.index, currentIndex });
  }

  if (required.index > currentIndex) {
    const reasons = summarizeReasons(required.matches);
    findings.push({
      type: "too-early",
      item,
      textPath,
      requiredId: required.id,
      reasons,
      message: `${textPath}: ${item.id} is too early; requires ${required.id} (${reasons.join("; ")})`,
    });
  }
}

if (shouldWrite && updates.length) {
  writeUpdates(updates);
}

if (shouldJson) {
  console.log(JSON.stringify({ findings, updates }, null, 2));
} else if (findings.length) {
  console.error(`Grading audit found ${findings.length} issue(s).`);
  for (const finding of findings) {
    console.error(`- ${finding.message}`);
  }
  if (!shouldWrite && updates.length) {
    console.error("\nRun `node tools/audit_grading.mjs --write` to update content IDs to the inferred minimum IDs.");
  }
} else {
  console.log(`Grading audit passed for ${contentItems.length} content item(s).`);
  const laterThanNeeded = updates.filter((item) => item.currentIndex > item.requiredIndex);
  if (laterThanNeeded.length) {
    console.log(
      `${laterThanNeeded.length} content item(s) are assigned to a later ID than the inferred minimum. Run \`node tools/audit_grading.mjs --write\` to synchronize all IDs.`,
    );
  }
}

if (findings.length && !shouldWrite) {
  process.exit(1);
}

function summarizeReasons(matches) {
  const seen = new Set();
  const reasons = [];
  for (const match of matches) {
    const key = `${match.name}:${match.match.toLowerCase()}`;
    if (seen.has(key)) continue;
    seen.add(key);
    reasons.push(`${match.name} -> "${match.match}"`);
  }
  return reasons.slice(0, 4);
}

function writeUpdates(contentUpdates) {
  const updateByKey = new Map(
    contentUpdates.map((item) => [`${item.slug}|${item.level}|${item.variant}|${item.id}`, item.requiredId]),
  );

  const updatedReader = fs.readFileSync(readerPath, "utf8").replace(
    /\{ id: "([^"]+)", variant: "([^"]+)", level: (\d+), slug: "([^"]+)" \}/g,
    (full, id, variant, level, slug) => {
      const requiredId = updateByKey.get(`${slug}|${Number(level)}|${variant}|${id}`);
      if (!requiredId) return full;
      return `{ id: "${requiredId}", variant: "${variant}", level: ${level}, slug: "${slug}" }`;
    },
  );
  fs.writeFileSync(readerPath, updatedReader, "utf8");

  if (!fs.existsSync(workbookBuilderPath)) return;

  const updateByWorkbookText = new Map(contentUpdates.map((item) => [item.textPath, item.requiredId]));
  const updatedWorkbookBuilder = fs.readFileSync(workbookBuilderPath, "utf8").replace(
    /\["([^"]+)", "([^"]+)", "([^"]+)", "([^"]+)", "([^"]+)", "(lessons\/[^"]+\/level-\d+\.txt)"\]/g,
    (full, id, length, genre, title, slug, textPath) => {
      const requiredId = updateByWorkbookText.get(textPath);
      if (!requiredId) return full;
      return `["${requiredId}", "${length}", "${genre}", "${title}", "${slug}", "${textPath}"]`;
    },
  );
  fs.writeFileSync(workbookBuilderPath, updatedWorkbookBuilder, "utf8");
}
