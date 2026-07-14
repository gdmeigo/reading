import fs from "node:fs";

const reader = fs.readFileSync("assets/reader.js", "utf8");

const progressItems = [...reader.matchAll(/\{ id: "([^"]+)", series: "[^"]+", label: "[^"]+" \}/g)].map((match) => match[1]);
const contentItems = [...reader.matchAll(/\{ id: "([^"]+)", variant: "([^"]+)", level: (\d+), slug: "([^"]+)" \}/g)].map((match) => ({
  id: match[1],
  variant: match[2],
  level: match[3],
  slug: match[4],
}));

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
