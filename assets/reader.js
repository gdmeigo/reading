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
    gdmCurrentId: "GDM-41-10",
    nh1CurrentId: "0",
    stage: "Assumed grading: very short present sentences, be/have/see/open/go, this/it, basic prepositions, simple nouns.",
  },
  {
    level: 2,
    gdmCurrentId: "GDM-42-4",
    nh1CurrentId: "0",
    stage: "Assumed grading: Level 1 plus longer present sequences, basic questions, says/asks, not/no, repeated nouns.",
  },
  {
    level: 3,
    gdmCurrentId: "GDM-60-1",
    nh1CurrentId: "0",
    stage: "Assumed grading: Level 2 plus basic past forms, said/saw/came/opened/took, did not, simple dialogue.",
  },
  {
    level: 4,
    gdmCurrentId: "GDM-82",
    nh1CurrentId: "0",
    stage: "Assumed grading: Level 3 plus there was/were, before/after, careful observation, simple reveal.",
  },
  {
    level: 5,
    gdmCurrentId: "GDM-83",
    nh1CurrentId: "0",
    stage: "Assumed grading: Level 4 plus fuller scenes, reason links, more characters, clearer resolution.",
  },
  {
    level: 6,
    gdmCurrentId: "GDM-106",
    nh1CurrentId: "0",
    stage: "Assumed grading: Level 5 plus longer paragraphs, callbacks, multi-scene resolution, richer ending.",
  },
];

function storyBySlug(slug) {
  return STORIES.find((story) => story.slug === slug);
}

function levelInfo(level) {
  return LEVELS.find((item) => item.level === Number(level));
}

function levelInfoFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const queryLevel = params.get("level");
  const hashMatch = window.location.hash.match(/^#level-(\d+)$/);
  const level = queryLevel || (hashMatch ? hashMatch[1] : null);
  return level ? levelInfo(level) || null : null;
}

function levelStageText(info) {
  return `${info.stage} Current ID: ${info.gdmCurrentId} / NH1 ${info.nh1CurrentId}.`;
}

function progressValue(id, series) {
  const text = String(id || "").trim().toUpperCase();
  if (!text || text === "0") return 0;
  const prefix = `${series}-`;
  if (!text.startsWith(prefix)) return -1;
  const parts = text
    .slice(prefix.length)
    .split("-")
    .map((part) => {
      const match = part.match(/\d+/);
      return match ? Number(match[0]) : 0;
    });
  while (parts.length < 3) parts.push(0);
  return parts[0] * 10000 + parts[1] * 100 + parts[2];
}

function canReadLevel(info, gdmCurrentId, nh1CurrentId) {
  const gdmCurrent = progressValue(gdmCurrentId, "GDM");
  const nh1Current = progressValue(nh1CurrentId, "NH1");
  const gdmRequired = progressValue(info.gdmCurrentId, "GDM");
  const nh1Required = progressValue(info.nh1CurrentId, "NH1");
  if (gdmCurrent < gdmRequired) return false;
  return nh1Required === 0 || nh1Current >= nh1Required;
}

function eligibleLevels(gdmCurrentId, nh1CurrentId) {
  return LEVELS.filter((info) => canReadLevel(info, gdmCurrentId, nh1CurrentId));
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
  const requestedLevel = levelInfoFromUrl();

  document.title = requestedLevel ? `${story.title} - Level ${requestedLevel.level}` : story.title;
  root.querySelector("h1").textContent = requestedLevel ? `${story.title}: Level ${requestedLevel.level}` : story.title;

  const container = root.querySelector("[data-content]");
  container.textContent = "";

  for (const info of requestedLevel ? [requestedLevel] : LEVELS) {
    const section = document.createElement("section");
    const heading = document.createElement("h2");
    heading.textContent = `Level ${info.level}`;
    section.appendChild(heading);
    section.id = `level-${info.level}`;
    appendParagraph(section, levelStageText(info), "stage");
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
  root.querySelector("[data-level-stage]").textContent = levelStageText(info);

  const container = root.querySelector("[data-content]");
  container.textContent = "";

  for (const story of STORIES) {
    const section = document.createElement("section");
    section.id = story.slug;
    const heading = document.createElement("h2");
    heading.textContent = story.title;
    section.appendChild(heading);
    const text = await loadText(`${basePath}/${story.slug}/level-${level}.txt`);
    renderBlocks(section, text);
    container.appendChild(section);
  }
}

function renderIndexResults(root) {
  const gdmInput = root.querySelector("[data-gdm-current]");
  const nh1Input = root.querySelector("[data-nh1-current]");
  const container = root.querySelector("[data-id-results]");
  const gdmCurrentId = gdmInput.value.trim();
  const nh1CurrentId = nh1Input.value.trim() || "0";
  const levels = eligibleLevels(gdmCurrentId, nh1CurrentId);

  container.textContent = "";

  if (progressValue(gdmCurrentId, "GDM") < 0 || progressValue(nh1CurrentId, "NH1") < 0) {
    appendParagraph(container, "Use IDs like GDM-41-10 and NH1-1-5-2. Use 0 for NH1 before it starts.", "error");
    return;
  }

  if (!levels.length) {
    appendParagraph(container, "No current stories match this ID yet.", "note");
    return;
  }

  const currentLevel = levels[levels.length - 1];
  const summary = document.createElement("p");
  summary.className = "note";
  summary.textContent = `Recommended reading set: Level ${currentLevel.level} (${currentLevel.gdmCurrentId} / NH1 ${currentLevel.nh1CurrentId})`;
  container.appendChild(summary);

  const allLink = document.createElement("p");
  const levelLink = document.createElement("a");
  levelLink.href = `levels/level-${currentLevel.level}.html`;
  levelLink.textContent = `Open all Level ${currentLevel.level} stories`;
  allLink.appendChild(levelLink);
  container.appendChild(allLink);

  const list = document.createElement("div");
  list.className = "choice-grid";
  STORIES.forEach((story) => {
    const card = document.createElement("section");
    card.className = "lesson choice-card";
    const heading = document.createElement("h3");
    heading.textContent = story.title;
    const link = document.createElement("a");
    link.href = `lessons/${story.slug}/index.html?level=${currentLevel.level}`;
    link.textContent = `Open Level ${currentLevel.level}`;
    card.appendChild(heading);
    card.appendChild(link);
    list.appendChild(card);
  });
  container.appendChild(list);
}

function bootIndexPage(root) {
  const gdmInput = root.querySelector("[data-gdm-current]");
  const nh1Input = root.querySelector("[data-nh1-current]");
  const form = root.querySelector("[data-id-form]");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    renderIndexResults(root);
  });
  gdmInput.addEventListener("change", () => renderIndexResults(root));
  nh1Input.addEventListener("change", () => renderIndexResults(root));
  renderIndexResults(root);
}

async function boot() {
  const root = document.querySelector("[data-reader]");
  if (!root) return;

  try {
    if (root.dataset.reader === "index") {
      bootIndexPage(root);
    } else if (root.dataset.reader === "story") {
      await renderStoryPage(root);
    } else if (root.dataset.reader === "level") {
      await renderLevelPage(root);
    }
  } catch (error) {
    const container = root.querySelector("[data-content]") || root.querySelector("[data-id-results]");
    if (!container) return;
    container.innerHTML = "";
    const p = document.createElement("p");
    p.className = "error";
    p.textContent = `Could not load reading text: ${error.message}`;
    container.appendChild(p);
  }
}

boot();
