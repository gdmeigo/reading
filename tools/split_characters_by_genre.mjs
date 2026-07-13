import fs from "node:fs";

const reader = fs.readFileSync("assets/reader.js", "utf8");
const storiesSource = reader.match(/const STORIES = ([\s\S]*?);/)[1];
const STORIES = Function(`return ${storiesSource}`)();

const REPLACEMENTS = {
  Mystery: {
    Yui: "Mika",
    Taro: "Riku",
    Miki: "Mika",
    Mina: "Mika",
    Emi: "Mika",
    Hana: "Mika",
    Ren: "Riku",
    Sota: "Riku",
    Rina: "Mika",
    Jaio: "Riku",
    Suneta: "Ken",
  },
  Fantasy: {
    Ken: "Haru",
    Taro: "Haru",
    Mika: "Mio",
    Miki: "Mio",
    Mina: "Mio",
    Ren: "Haru",
    Daichi: "Haru",
    Emi: "Mio",
    Hana: "Yui",
    Saki: "Mio",
    Rina: "Mio",
    Sota: "Haru",
    Jaio: "Haru",
    Suneta: "Mio",
  },
  SF: {
    Ken: "Sora",
    Yui: "Mina",
    Taro: "Leo",
    Mika: "Mina",
    Miki: "Aiko",
    Ren: "Leo",
    Daichi: "Sora",
    Emi: "Mina",
    Hana: "Mina",
    Saki: "Aiko",
    Rina: "Mina",
    Sota: "Leo",
    Riku: "Leo",
    Jaio: "Leo",
    Suneta: "Sora",
  },
  Comedy: {
    Ken: "Taro",
    Yui: "Hana",
    Mika: "Jiro",
    Miki: "Hana",
    Ren: "Jiro",
    Daichi: "Jiro",
    Emi: "Hana",
    Saki: "Hana",
    Mina: "Hana",
    Rina: "Hana",
    Sota: "Jiro",
  },
  "Human Drama": {
    Ken: "Daichi",
    Yui: "Emi",
    Taro: "Sota",
    Mika: "Aya",
    Miki: "Aya",
    Ren: "Daichi",
    Hana: "Emi",
    Saki: "Aya",
    Mina: "Aya",
    Riku: "Sota",
    Jaio: "Kota",
    Suneta: "Ryo",
  },
  Adventure: {
    Ken: "Kaito",
    Yui: "Nana",
    Taro: "Ren",
    Mika: "Saki",
    Miki: "Miki",
    Hana: "Nana",
    Emi: "Miki",
    Daichi: "Ren",
    Mina: "Saki",
    Rina: "Nana",
    Sota: "Kaito",
    Riku: "Ren",
    Jaio: "Gaku",
    Suneta: "Bunta",
  },
  "Fantasy / Adventure": {
    Ken: "Yuto",
    Yui: "Noa",
    Taro: "Iori",
    Mika: "Noa",
    Miki: "Iori",
    Ren: "Yuto",
    Daichi: "Yuto",
    Emi: "Noa",
    Hana: "Noa",
    Saki: "Iori",
    Mina: "Noa",
    Rina: "Noa",
    Sota: "Yuto",
    Riku: "Yuto",
    Jaio: "Iori",
    Suneta: "Yuto",
  },
};

function replaceNames(text, replacements) {
  let output = text;
  for (const [from, to] of Object.entries(replacements)) {
    output = output.replace(new RegExp(`\\b${from}\\b`, "g"), to);
  }
  return output;
}

const changed = [];

for (const story of STORIES) {
  const replacements = REPLACEMENTS[story.genre];
  if (!replacements) continue;

  for (const level of story.levels || [1, 2, 3, 4, 5, 6]) {
    const path = `lessons/${story.slug}/level-${level}.txt`;
    if (!fs.existsSync(path)) continue;

    const before = fs.readFileSync(path, "utf8");
    const after = replaceNames(before, replacements);
    if (after !== before) {
      fs.writeFileSync(path, after);
      changed.push(path);
    }
  }
}

console.log(changed.join("\n"));
