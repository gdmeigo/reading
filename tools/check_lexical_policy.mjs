import fs from "node:fs";
import path from "node:path";

const blockedTerms = [
  { term: "chair", pattern: /\bchairs?\b/i, replacement: "seat" },
];

const roots = ["lessons"];
const failures = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
      continue;
    }
    if (!/\.(txt|html|js|md)$/i.test(entry.name)) continue;
    const text = fs.readFileSync(fullPath, "utf8");
    blockedTerms.forEach(({ term, pattern, replacement }) => {
      if (pattern.test(text)) {
        failures.push(`${fullPath}: avoid "${term}"; prefer "${replacement}"`);
      }
    });
  }
}

roots.forEach((root) => {
  if (fs.existsSync(root)) walk(root);
});

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("Lexical policy check passed.");
