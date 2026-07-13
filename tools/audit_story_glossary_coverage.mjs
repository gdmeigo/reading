import fs from "node:fs";
import path from "node:path";

const reader = fs.readFileSync("assets/reader.js", "utf8");
const a1Words = new Set(
  fs.readFileSync("data/source-vocabulary/cefr/oxford3000_a1_words.txt", "utf8")
    .split(/\r?\n/)
    .map((word) => word.trim().toLowerCase())
    .filter(Boolean),
);

const glossaryTerms = new Set();
for (const match of reader.matchAll(/terms:\s*\[([^\]]+)\]/g)) {
  for (const term of match[1].matchAll(/"([^"]+)"/g)) {
    glossaryTerms.add(term[1].toLowerCase());
  }
}

const introducedWords = new Set();
for (const match of reader.matchAll(/\{\s*id:\s*"[^"]+",\s*series:\s*"[^"]+",\s*label:\s*"([^"]+)"/g)) {
  for (const word of match[1].toLowerCase().match(/[a-z]+(?:'[a-z]+)?/g) || []) {
    introducedWords.add(word);
  }
}

const properNames = new Set([
  "aki", "daiki", "emi", "hachi", "hanako", "jaio", "ken", "kenta", "kumi", "mai", "mika",
  "ms", "nana", "nao", "rina", "sato", "shota", "suneta", "taro", "yui",
]);

const commonForms = new Map([
  ["ate", "eat"],
  ["began", "begin"],
  ["brought", "bring"],
  ["came", "come"],
  ["did", "do"],
  ["does", "do"],
  ["done", "do"],
  ["dropped", "drop"],
  ["fell", "fall"],
  ["felt", "feel"],
  ["found", "find"],
  ["gave", "give"],
  ["gone", "go"],
  ["got", "get"],
  ["had", "have"],
  ["heard", "hear"],
  ["held", "hold"],
  ["kept", "keep"],
  ["knew", "know"],
  ["left", "leave"],
  ["lit", "light"],
  ["lost", "lose"],
  ["made", "make"],
  ["met", "meet"],
  ["moved", "move"],
  ["paid", "pay"],
  ["put", "put"],
  ["ran", "run"],
  ["said", "say"],
  ["sat", "sit"],
  ["saw", "see"],
  ["sent", "send"],
  ["slept", "sleep"],
  ["spoke", "speak"],
  ["stood", "stand"],
  ["taught", "teach"],
  ["thought", "think"],
  ["told", "tell"],
  ["took", "take"],
  ["tried", "try"],
  ["was", "be"],
  ["went", "go"],
  ["were", "be"],
  ["won", "win"],
  ["wore", "wear"],
  ["wrote", "write"],
]);

const allowed = (word) => {
  const lower = word.toLowerCase();
  if (a1Words.has(lower) || glossaryTerms.has(lower) || introducedWords.has(lower) || properNames.has(lower)) return true;
  if (commonForms.has(lower)) return allowed(commonForms.get(lower));
  if (lower.endsWith("'s")) return allowed(lower.slice(0, -2));
  if (lower.endsWith("ies") && allowed(`${lower.slice(0, -3)}y`)) return true;
  if (lower.endsWith("es") && allowed(lower.slice(0, -2))) return true;
  if (lower.endsWith("s") && allowed(lower.slice(0, -1))) return true;
  if (lower.endsWith("ing") && allowed(lower.slice(0, -3))) return true;
  if (lower.endsWith("ed") && allowed(lower.slice(0, -2))) return true;
  return false;
};

const txtFiles = fs.readdirSync("lessons", { recursive: true })
  .filter((file) => file.endsWith(".txt"))
  .map((file) => path.join("lessons", file));

const unknown = new Map();
for (const file of txtFiles) {
  const text = fs.readFileSync(file, "utf8");
  for (const match of text.matchAll(/[A-Za-z]+(?:'[A-Za-z]+)?/g)) {
    const word = match[0].toLowerCase();
    if (allowed(word)) continue;
    if (!unknown.has(word)) unknown.set(word, new Set());
    unknown.get(word).add(file);
  }
}

const rows = [...unknown.entries()]
  .sort((a, b) => b[1].size - a[1].size || a[0].localeCompare(b[0]));

if (rows.length) {
  console.log("Story glossary review candidates:");
  for (const [word, files] of rows) {
    console.log(`${word}\t${files.size}\t${[...files].slice(0, 5).join(", ")}`);
  }
  if (process.argv.includes("--strict")) process.exitCode = 1;
} else {
  console.log("Story glossary coverage check passed.");
}
