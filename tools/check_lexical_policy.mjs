import fs from "node:fs";
import path from "node:path";

const blockedTerms = [
  { term: "chair", pattern: /\bchairs?\b/i, replacement: "seat" },
];

const reader = fs.readFileSync("assets/reader.js", "utf8");
const earlyPolicyIds = new Set(
  [...reader.matchAll(/\{ id: "(GDM-[^"]+|NH1-[^"]+)", variant: "[^"]+", level: (\d+), slug: "([^"]+)" \}/g)].map((match) => `${match[3]}/level-${match[2]}.txt`),
);
const failures = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
      continue;
    }
    if (!/\.txt$/i.test(entry.name)) continue;
    const normalizedPath = fullPath.replace(/\\/g, "/").replace(/^lessons\//, "");
    if (!earlyPolicyIds.has(normalizedPath)) continue;
    const text = fs.readFileSync(fullPath, "utf8");
    blockedTerms.forEach(({ term, pattern, replacement }) => {
      if (pattern.test(text)) {
        failures.push(`${fullPath}: avoid "${term}"; prefer "${replacement}"`);
      }
    });
  }
}

if (fs.existsSync("lessons")) walk("lessons");

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("Lexical policy check passed.");
