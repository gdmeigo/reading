const STORIES = [
  { slug: "graded-story", title: "The Little Door" },
  { slug: "blue-lunch-box", title: "The Blue Lunch Box" },
  { slug: "kite-day", title: "The Paper Rocket" },
  { slug: "night-bus", title: "The Last Bus" },
  { slug: "bread-shop", title: "The Quiet Bread Shop" },
];

const LEVELS = [
  {
    level: 1,
    stage: "Assumed grading: very short present sentences, be/have/see/open/go, this/it, basic prepositions, simple nouns.",
  },
  {
    level: 2,
    stage: "Assumed grading: Level 1 plus longer present sequences, basic questions, says/asks, not/no, repeated nouns.",
  },
  {
    level: 3,
    stage: "Assumed grading: Level 2 plus basic past forms, said/saw/came/opened/took, did not, simple dialogue.",
  },
  {
    level: 4,
    stage: "Assumed grading: Level 3 plus there was/were, before/after, careful observation, simple reveal.",
  },
  {
    level: 5,
    stage: "Assumed grading: Level 4 plus fuller scenes, reason links, more characters, clearer resolution.",
  },
  {
    level: 6,
    stage: "Assumed grading: Level 5 plus longer paragraphs, callbacks, multi-scene resolution, richer ending.",
  },
];

function storyBySlug(slug) {
  return STORIES.find((story) => story.slug === slug);
}

function levelInfo(level) {
  return LEVELS.find((item) => item.level === Number(level));
}

function textToBlocks(text) {
  return text
    .replace(/\r\n/g, "\n")
    .trim()
    .split(/\n\s*\n/)
    .map((block) => block.replace(/\n/g, " ").trim())
    .filter(Boolean);
}

function appendParagraph(parent, text, className) {
  const p = document.createElement("p");
  if (className) p.className = className;
  p.textContent = text;
  parent.appendChild(p);
}

async function loadText(path) {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`${response.status} ${path}`);
  }
  return response.text();
}

function renderBlocks(section, text) {
  const blocks = textToBlocks(text);
  blocks.slice(1).forEach((block) => appendParagraph(section, block));
}

async function renderStoryPage(root) {
  const slug = root.dataset.story;
  const story = storyBySlug(slug);
  const basePath = root.dataset.basePath || ".";

  document.title = story.title;
  root.querySelector("h1").textContent = story.title;

  const container = root.querySelector("[data-content]");
  container.textContent = "";

  for (const info of LEVELS) {
    const section = document.createElement("section");
    const heading = document.createElement("h2");
    heading.textContent = `Level ${info.level}`;
    section.appendChild(heading);
    appendParagraph(section, info.stage, "stage");
    const text = await loadText(`${basePath}/level-${info.level}.txt`);
    renderBlocks(section, text);
    container.appendChild(section);
  }
}

async function renderLevelPage(root) {
  const level = Number(root.dataset.level);
  const info = levelInfo(level);
  const basePath = root.dataset.basePath || "../lessons";

  document.title = `Level ${level} Readings`;
  root.querySelector("h1").textContent = `Level ${level} Readings`;
  root.querySelector("[data-level-stage]").textContent = info.stage;

  const container = root.querySelector("[data-content]");
  container.textContent = "";

  for (const story of STORIES) {
    const section = document.createElement("section");
    const heading = document.createElement("h2");
    heading.textContent = story.title;
    section.appendChild(heading);
    const text = await loadText(`${basePath}/${story.slug}/level-${level}.txt`);
    renderBlocks(section, text);
    container.appendChild(section);
  }
}

async function boot() {
  const root = document.querySelector("[data-reader]");
  if (!root) return;

  try {
    if (root.dataset.reader === "story") {
      await renderStoryPage(root);
    } else if (root.dataset.reader === "level") {
      await renderLevelPage(root);
    }
  } catch (error) {
    const container = root.querySelector("[data-content]");
    container.innerHTML = "";
    const p = document.createElement("p");
    p.className = "error";
    p.textContent = `Could not load reading text: ${error.message}`;
    container.appendChild(p);
  }
}

boot();
