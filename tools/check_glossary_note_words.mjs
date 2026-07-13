import fs from "node:fs";

const reader = fs.readFileSync("assets/reader.js", "utf8");
const a1Words = new Set(
  fs.readFileSync("data/source-vocabulary/cefr/oxford3000_a1_words.txt", "utf8")
    .split(/\r?\n/)
    .map((word) => word.trim().toLowerCase())
    .filter(Boolean),
);

const introducedWords = new Set();
for (const match of reader.matchAll(/\{\s*id:\s*"[^"]+",\s*series:\s*"[^"]+",\s*label:\s*"([^"]+)"/g)) {
  for (const word of match[1].toLowerCase().match(/[a-z]+(?:'[a-z]+)?/g) || []) {
    introducedWords.add(word);
  }
}

const allowedWords = new Set([
  ...a1Words,
  ...introducedWords,
  "an",
  "color",
  "cannot",
  "can't",
]);

const normalize = (word) => {
  const lower = word.toLowerCase();
  if (allowedWords.has(lower)) return lower;
  if (lower.endsWith("ies") && allowedWords.has(`${lower.slice(0, -3)}y`)) return `${lower.slice(0, -3)}y`;
  if (lower.endsWith("es") && allowedWords.has(lower.slice(0, -2))) return lower.slice(0, -2);
  if (lower.endsWith("s") && allowedWords.has(lower.slice(0, -1))) return lower.slice(0, -1);
  if (lower.endsWith("ing") && allowedWords.has(lower.slice(0, -3))) return lower.slice(0, -3);
  if (lower.endsWith("ed") && allowedWords.has(lower.slice(0, -2))) return lower.slice(0, -2);
  return lower;
};

let hasError = false;
for (const match of reader.matchAll(/\{\s*headword:\s*"([^"]+)"[\s\S]*?note:\s*"([^"]+)"/g)) {
  const headword = match[1];
  const note = match[2];
  const unknown = [...new Set(note.match(/[a-z]+(?:'[a-z]+)?/gi) || [])]
    .map(normalize)
    .filter((word) => !allowedWords.has(word));
  if (unknown.length) {
    hasError = true;
    console.log(`${headword}: ${unknown.join(", ")} :: ${note}`);
  }
}

if (hasError) {
  process.exitCode = 1;
} else {
  console.log("Glossary note word check passed.");
}
