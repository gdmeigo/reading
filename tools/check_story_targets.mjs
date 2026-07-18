import fs from "node:fs";
import {
  contentTextPath,
  gradingSignalsForProgressItems,
  parseContentItems,
  parseProgressItems,
  readReaderSource,
  resetPattern,
} from "./grading_rules.mjs";

const reader = readReaderSource();
const progressItems = parseProgressItems(reader);
const contentItems = parseContentItems(reader);
const requirements = new Map(gradingSignalsForProgressItems(progressItems).map((signal) => [signal.id, signal]));

const failures = [];

for (const item of contentItems) {
  const requirement = requirements.get(item.id);
  const path = contentTextPath(item);

  if (!requirement) {
    failures.push(`${item.id}: no target requirement defined`);
    continue;
  }

  if (!fs.existsSync(path)) {
    failures.push(`${item.id} ${item.slug}: missing ${path}`);
    continue;
  }

  const text = fs.readFileSync(path, "utf8");
  if (!requirement.patterns.some((pattern) => resetPattern(pattern).test(text))) {
    failures.push(`${item.id} ${item.slug} level-${item.level}: target expression not found`);
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Target expression check passed for ${contentItems.length} content items.`);
