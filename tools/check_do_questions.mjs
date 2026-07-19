import fs from "node:fs";
import { parseContentItems, parseProgressItems, readReaderSource } from "./grading_rules.mjs";

const reader = readReaderSource();

const progressItems = parseProgressItems(reader).map((item) => item.id);
const contentItems = parseContentItems(reader);

const checks = [
  { introId: "GDM-41-4", name: "Do ... see question", pattern: /\bDo\b[^.!?]*\bsee\b[^.!?]*\?/g },
  { introId: "GDM-41-5", name: "Does ... see question", pattern: /\bDoes\b[^.!?]*\bsee\b[^.!?]*\?/g },
  { introId: "GDM-41-8", name: "Did ... see question", pattern: /\bDid\b[^.!?]*\bsee\b[^.!?]*\?/g },
  { introId: "GDM-64A", name: "Did give/put/go question", pattern: /\bDid\b[^.!?]*\b(?:give|put|go)\b[^.!?]*\?/g },
];
const failures = [];

for (const item of contentItems) {
  const itemIndex = progressItems.indexOf(item.id);
  if (itemIndex < 0) continue;

  const path = `lessons/${item.slug}/level-${item.level}.txt`;
  if (!fs.existsSync(path)) continue;

  const text = fs.readFileSync(path, "utf8");
  for (const check of checks) {
    const introIndex = progressItems.indexOf(check.introId);
    if (introIndex < 0 || itemIndex >= introIndex) continue;

    const matches = [...text.matchAll(check.pattern)].map((match) => match[0]);
    if (matches.length) {
      failures.push(`${check.name} intro ID is ${check.introId}; ${item.id} ${item.slug} level-${item.level}: ${matches.join(" / ")}`);
    }
  }
}

if (failures.length) {
  console.error("Do/Does/Did question intro violations:");
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Do/Does/Did question check passed for ${checks.length} intro rule(s).`);
