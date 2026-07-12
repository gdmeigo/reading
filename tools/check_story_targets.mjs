import fs from "node:fs";

const reader = fs.readFileSync("assets/reader.js", "utf8");

const requirements = {
  "GDM-1": /\b(you|he|she|it)\b/i,
  "GDM-10": /this book is/i,
  "GDM-22": /(water[\s\S]*pen|pen[\s\S]*water|these pens are|pens are)/i,
  "GDM-37-4": /\bwhere\b/i,
  "GDM-41-10": /\bsee\b/i,
  "NH1-0-FAMILY": /\b(brother|sister|mother|father)\b|[A-Z][a-z]+'s/i,
  "NH1-1-1-V": /\b(drink|play|watch|speak|study|read)\b/i,
  "NH1-1-3-CAN-Q": /\bcan\b[^.?!]*\?/i,
  "NH1-1-5-2-DONTBE": /don't be/i,
  "NH1-1-6-V": /\b(write|writes|wrote|written)\b/i,
  "NH1-1-8-3-WHY": /\bwhy\b/i,
  "NH1-1-10-V": /\b(travel|visit|listen|feel)\b/i,
  "NH1-1-11-1-MAYBE": /\bmaybe\b/i,
  "NH2-2-1-3-SVOO": /\b(show|shows|showed|teach|teaches|taught|give|gives|gave)\b/i,
  "NH2-2-2-4-BECAUSE": /\bbecause\b/i,
  "NH2-2-3-1-SHOULD": /\bshould\b/i,
  "NH2-2-4-1-HAVE-TO": /\bhave to\b/i,
  "NH2-2-5-1-HOW-TO": /\bhow to\b/i,
  "NH2-2-6-MORE-THAN": /\bmore than\b/i,
  "NH2-2-7-2-VOICE": /\b(was|were)\b[^.?!]*(\bby\b|moved|washed|cut|made|written|opened)/i,
};

const contentItems = [...reader.matchAll(/\{ id: "([^"]+)", variant: "([^"]+)", level: (\d+), slug: "([^"]+)" \}/g)].map((match) => ({
  id: match[1],
  variant: match[2],
  level: match[3],
  slug: match[4],
}));

const failures = [];

for (const item of contentItems) {
  const requirement = requirements[item.id];
  const path = `lessons/${item.slug}/level-${item.level}.txt`;

  if (!requirement) {
    failures.push(`${item.id}: no target requirement defined`);
    continue;
  }

  if (!fs.existsSync(path)) {
    failures.push(`${item.id} ${item.slug}: missing ${path}`);
    continue;
  }

  const text = fs.readFileSync(path, "utf8");
  if (!requirement.test(text)) {
    failures.push(`${item.id} ${item.slug} level-${item.level}: target expression not found`);
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Target expression check passed for ${contentItems.length} content items.`);
