const STORIES = [
  { slug: "graded-story", title: "The Little Door", genre: "Mystery", levels: [1, 2, 3, 4, 5, 6, 7] },
  { slug: "blue-lunch-box", title: "The Blue Lunch Box", genre: "Human Drama" },
  { slug: "kite-day", title: "The Paper Rocket", genre: "Human Drama" },
  { slug: "night-bus", title: "The Last Bus", genre: "Mystery" },
  { slug: "bread-shop", title: "The Quiet Bread Shop", genre: "Human Drama", levels: [1, 2, 3, 4, 5, 6, 7] },
  { slug: "star-bus", title: "The Star Bus", genre: "SF", levels: [1, 2, 3, 4, 5, 6, 7] },
  { slug: "moon-cup", title: "The Moon Cup", genre: "Fantasy", levels: [1, 2, 3, 4, 5, 6, 7] },
  { slug: "wrong-robot", title: "The Wrong Robot", genre: "Comedy", levels: [1, 2, 3, 4, 5, 6, 7] },
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
  {
    level: 7,
    gdmCurrentId: "GDM-198",
    nh1CurrentId: "NH1-1-11-1-MAYBE",
    stage: "Assumed grading: final GDM and NH1 IDs, longer scenes, stronger genre voice, clear comic or emotional resolution.",
  },
];

const NH1_CURRENT_OPTIONS = [
  ["0", "NH1 not started"],
  ["NH1-1-MAY-I", "May I"],
  ["NH1-1-1-V", "drink / play / watch / speak / study / read"],
  ["NH1-1-1-BEV-Q", "be動詞 Question"],
  ["NH1-1-1-CALL-IT", "Call it"],
  ["NH1-1-3-CAN-Q", "can(Q)"],
  ["NH1-1-2-V", "walk / have(eat)"],
  ["NH1-1-2-FOR", "for"],
  ["NH1-1-3-V", "practice / bring"],
  ["NH1-1-3-1-BEFORE", "before (concert)"],
  ["NH1-1-3-2-WANT", "want to do / be"],
  ["NH1-1-3-2-HOW-MANY", "How many"],
  ["NH1-1-4-1-ENJOY", "enjoy yourself"],
  ["NH1-1-4-1-DONT", "命令 / Don't"],
  ["NH1-1-4-1-GLASS", "a glass of water"],
  ["NH1-1-4-2-DURING", "during"],
  ["NH1-1-4-2-SOME", "some / any / many"],
  ["NH1-1-5-V", "jog / need / eat / enjoy"],
  ["NH1-1-5-WRONG", "What's wrong"],
  ["NH1-1-5-2-DONTBE", "Don't be"],
  ["NH1-1-5-2-LETS", "Let's"],
  ["NH1-1-5-2-SOMETHING", "something / nothing"],
  ["NH1-1-5-2-HOW", "How"],
  ["NH1-1-6-V", "write"],
  ["NH1-1-6-2-ABOUT", "about"],
  ["NH1-1-6-2-ONE", "one"],
  ["NH1-1-6-3-ANYONE", "anyone"],
  ["NH1-1-7-V", "know / make / buy"],
  ["NH1-1-7-3-WHOSE", "Whose"],
  ["NH1-1-8-V", "talk / think about / decorate / prepare"],
  ["NH1-1-8-3-WHY", "Why"],
  ["NH1-1-8-3-EXCLAMATION", "What a cute bag"],
  ["NH1-1-8-3-QUICKLY", "quickly"],
  ["NH1-1-9-V", "wait / get / build / understand / collect"],
  ["NH1-1-9-1-AS", "as (a doctor)"],
  ["NH1-1-9-1-AM-NOT-SURE", "I am not sure about"],
  ["NH1-1-9-3-LOOK-HAPPY", "They look happy"],
  ["NH1-1-10-V", "travel / visit / listen / spend / stand / feel / get up"],
  ["NH1-1-10-1-FULL-OF", "full of"],
  ["NH1-1-10-3-GET-UP", "get up (early)"],
  ["NH1-1-10-3-HOW-NICE", "How nice!"],
  ["NH1-1-11-V", "join / hope / set up / pick up / look for / bring back / beat"],
  ["NH1-1-11-DID-Q", "Did Q"],
  ["NH1-1-11-1-AGAINST", "against"],
  ["NH1-1-11-1-MAYBE", "maybe"],
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
  const nh1Input = root.querySelector("[data-nh1-current]");
  const genreInput = root.querySelector("[data-genre]");
  const container = root.querySelector("[data-id-results]");
  const gdmCurrentId = gdmInput.value.trim();
  const nh1CurrentId = nh1Input.value.trim() || "0";
  const genre = genreInput.value;
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
  summary.textContent = `Current IDs: ${gdmCurrentId} / NH1 ${nh1CurrentId}. Recommended reading set: Level ${currentLevel.level} (minimum: ${currentLevel.gdmCurrentId} / NH1 ${currentLevel.nh1CurrentId}).`;
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
  const nh1Input = root.querySelector("[data-nh1-current]");
  const genreInput = root.querySelector("[data-genre]");
  const form = root.querySelector("[data-id-form]");
  if (nh1Input.options.length <= 1) {
    NH1_CURRENT_OPTIONS.slice(1).forEach(([id, label]) => {
      const option = document.createElement("option");
      option.value = id;
      option.textContent = `${id} / ${label}`;
      nh1Input.appendChild(option);
    });
  }
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    renderIndexResults(root);
  });
  gdmInput.addEventListener("change", () => renderIndexResults(root));
  nh1Input.addEventListener("change", () => renderIndexResults(root));
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
