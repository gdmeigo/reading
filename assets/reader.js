const STORIES = [
  { slug: "graded-story", title: "The Little Door", genre: "Mystery", levels: [1, 2, 3, 4, 5, 6, 7] },
  { slug: "blue-lunch-box", title: "The Blue Lunch Box", genre: "Human Drama" },
  { slug: "kite-day", title: "The Paper Rocket", genre: "Human Drama" },
  { slug: "night-bus", title: "The Last Bus", genre: "Mystery" },
  { slug: "bread-shop", title: "The Quiet Bread Shop", genre: "Human Drama", levels: [1, 2, 3, 4, 5, 6, 7] },
  { slug: "star-bus", title: "The Star Bus", genre: "SF", levels: [1, 2, 3, 4, 5, 6, 7] },
  { slug: "moon-cup", title: "The Moon Cup", genre: "Fantasy", levels: [1, 2, 3, 4, 5, 6, 7] },
  { slug: "wrong-robot", title: "The Wrong Robot", genre: "Comedy", levels: [1, 2, 3, 4, 5, 6, 7] },
  { slug: "banana-principal", title: "The Banana Principal", genre: "Comedy", levels: [3] },
];

const DEFAULT_STORY_LEVELS = [1, 2, 3, 4, 5, 6];

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
    nh1CurrentId: "NH1-1-5-2",
    stage: "Assumed grading: Level 2 plus basic past forms, said/saw/came/opened/took, did not, simple dialogue. Required target items include come, Don't be, Let's, something/nothing, and How.",
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
  {
    level: 7,
    gdmCurrentId: "GDM-198",
    nh1CurrentId: "NH1-1-11-1-MAYBE",
    stage: "Assumed grading: final GDM and NH1 IDs, longer scenes, stronger genre voice, clear comic or emotional resolution.",
  },
];

function storyBySlug(slug) {
  return STORIES.find((story) => story.slug === slug);
}

function storyLevels(story) {
  return story.levels || DEFAULT_STORY_LEVELS;
}

function storySupportsLevel(story, level) {
  return storyLevels(story).includes(Number(level));
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

function eligibleLevelsByGdm(gdmCurrentId) {
  const gdmCurrent = progressValue(gdmCurrentId, "GDM");
  return LEVELS.filter((info) => gdmCurrent >= progressValue(info.gdmCurrentId, "GDM"));
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

function readingBodyText(text) {
  return textToBlocks(text).slice(1).join("\n\n");
}

async function loadText(path) {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`${response.status} ${path}`);
  }
  return response.text();
}

function downloadText(filename, text) {
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

function appendTextActions(section, text, filename) {
  const actions = document.createElement("div");
  actions.className = "text-actions";

  const copyButton = document.createElement("button");
  copyButton.type = "button";
  copyButton.textContent = "Copy text";
  copyButton.addEventListener("click", async () => {
    await copyText(text);
    copyButton.textContent = "Copied";
    window.setTimeout(() => {
      copyButton.textContent = "Copy text";
    }, 1200);
  });

  const downloadButton = document.createElement("button");
  downloadButton.type = "button";
  downloadButton.textContent = "Download .txt";
  downloadButton.addEventListener("click", () => downloadText(filename, text));

  actions.appendChild(copyButton);
  actions.appendChild(downloadButton);
  section.appendChild(actions);
}

function renderReadingSection(section, text, info, filename) {
  const bodyText = readingBodyText(text);
  appendTextActions(section, bodyText, filename);
  textToBlocks(text).slice(1).forEach((block) => appendParagraph(section, block));
  appendParagraph(section, levelStageText(info), "stage");
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

  const visibleLevels = requestedLevel ? [requestedLevel] : LEVELS.filter((info) => storySupportsLevel(story, info.level));

  for (const info of visibleLevels) {
    if (!storySupportsLevel(story, info.level)) continue;
    const section = document.createElement("section");
    const heading = document.createElement("h2");
    heading.textContent = `Level ${info.level}`;
    section.appendChild(heading);
    section.id = `level-${info.level}`;
    const text = await loadText(`${basePath}/level-${info.level}.txt`);
    renderReadingSection(section, text, info, `${story.slug}-level-${info.level}.txt`);
    container.appendChild(section);
  }
}

async function renderLevelPage(root) {
  const level = Number(root.dataset.level);
  const info = levelInfo(level);
  const basePath = root.dataset.basePath || "../lessons";

  document.title = `Level ${level} Readings`;
  root.querySelector("h1").textContent = `Level ${level} Readings`;
  root.querySelector("[data-level-stage]")?.remove();

  const container = root.querySelector("[data-content]");
  container.textContent = "";

  for (const story of STORIES.filter((item) => storySupportsLevel(item, level))) {
    const section = document.createElement("section");
    section.id = story.slug;
    const heading = document.createElement("h2");
    heading.textContent = story.title;
    section.appendChild(heading);
    const text = await loadText(`${basePath}/${story.slug}/level-${level}.txt`);
    renderReadingSection(section, text, info, `${story.slug}-level-${level}.txt`);
    container.appendChild(section);
  }
}

function renderIndexResults(root) {
  const gdmInput = root.querySelector("[data-gdm-current]");
  const genreInput = root.querySelector("[data-genre]");
  const container = root.querySelector("[data-id-results]");
  const gdmCurrentId = gdmInput.value.trim();
  const genre = genreInput.value;
  const levels = eligibleLevelsByGdm(gdmCurrentId);

  container.textContent = "";

  if (progressValue(gdmCurrentId, "GDM") < 0) {
    appendParagraph(container, "Use a GDM ID like GDM-41-10 or GDM-60-1.", "error");
    return;
  }

  if (!levels.length) {
    appendParagraph(container, "No current stories match this ID yet.", "note");
    return;
  }

  const currentLevel = levels[levels.length - 1];
  const summary = document.createElement("p");
  summary.className = "note";
  summary.textContent = `Current GDM ID: ${gdmCurrentId}. Recommended reading set: Level ${currentLevel.level}.`;
  container.appendChild(summary);

  const allLink = document.createElement("p");
  const levelLink = document.createElement("a");
  levelLink.href = `levels/level-${currentLevel.level}.html`;
  levelLink.textContent = `Open all Level ${currentLevel.level} stories`;
  allLink.appendChild(levelLink);
  container.appendChild(allLink);

  const list = document.createElement("div");
  list.className = "choice-grid";
  const storyChoices = STORIES.filter((story) => storySupportsLevel(story, currentLevel.level))
    .filter((story) => genre === "all" || story.genre.toLowerCase() === genre);

  if (!storyChoices.length) {
    appendParagraph(container, "No stories match this genre at the current ID yet.", "note");
    return;
  }

  storyChoices.forEach((story) => {
    const card = document.createElement("section");
    card.className = "lesson choice-card";
    const heading = document.createElement("h3");
    heading.textContent = story.title;
    const genreText = document.createElement("p");
    genreText.className = "note";
    genreText.textContent = story.genre;
    const link = document.createElement("a");
    link.href = `lessons/${story.slug}/index.html?level=${currentLevel.level}`;
    link.textContent = `Open Level ${currentLevel.level}`;
    card.appendChild(heading);
    card.appendChild(genreText);
    card.appendChild(link);
    list.appendChild(card);
  });
  container.appendChild(list);
}

function bootIndexPage(root) {
  const gdmInput = root.querySelector("[data-gdm-current]");
  const genreInput = root.querySelector("[data-genre]");
  const form = root.querySelector("[data-id-form]");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    renderIndexResults(root);
  });
  gdmInput.addEventListener("change", () => renderIndexResults(root));
  genreInput.addEventListener("change", () => renderIndexResults(root));
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
