import fs from "node:fs";
import { parseContentItems, parseProgressItems, readReaderSource } from "./grading_rules.mjs";

const reader = readReaderSource();

const progressItems = parseProgressItems(reader).map((item) => item.id);
const contentItems = parseContentItems(reader);

const doQuestionIntroId = "GDM-41-10";
const introIndex = progressItems.indexOf(doQuestionIntroId);
const doQuestionPattern = /\b(?:Do|Does|Did)\b[^.!?]*\?/g;
const failures = [];

for (const item of contentItems) {
  const itemIndex = progressItems.indexOf(item.id);
  if (itemIndex < 0 || itemIndex >= introIndex) continue;

  const path = `lessons/${item.slug}/level-${item.level}.txt`;
  if (!fs.existsSync(path)) continue;

  const text = fs.readFileSync(path, "utf8");
  const matches = [...text.matchAll(doQuestionPattern)].map((match) => match[0]);
  if (matches.length) {
    failures.push(`${item.id} ${item.slug} level-${item.level}: ${matches.join(" / ")}`);
  }
}

if (failures.length) {
  console.error(`Do/Does/Did question intro ID is ${doQuestionIntroId}. Earlier content has violations:`);
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Do/Does/Did question check passed. Intro ID: ${doQuestionIntroId}.`);
