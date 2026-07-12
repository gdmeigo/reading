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
const TARGET_READING_LEVELS = [3, 7];
const MAX_VISIBLE_CHOICES = 3;

const READING_VARIANTS = [
  { key: "short", level: 3, label: "Short", note: "compact classroom reading" },
  { key: "long", level: 7, label: "Long", note: "fuller story reading" },
];

const PROGRESS_ITEMS = [
  { id: "GDM-1", series: "GDM", label: "You / He / She / It" },
  { id: "GDM-10", series: "GDM", label: "This book is" },
  { id: "GDM-22", series: "GDM", label: "water / These pens are" },
  { id: "GDM-37-4", series: "GDM", label: "Where" },
  { id: "GDM-41-10", series: "GDM", label: "see review / NH bridge point" },
  { id: "NH1-0-FAMILY", series: "NH1", label: "family / 's" },
  { id: "NH1-1-1-V", series: "NH1", label: "drink / play / watch / speak / study / read" },
  { id: "NH1-1-3-CAN-Q", series: "NH1", label: "can question" },
  { id: "NH1-1-5-2-DONTBE", series: "NH1", label: "Don't be" },
  { id: "NH1-1-6-V", series: "NH1", label: "write" },
  { id: "NH1-1-8-3-WHY", series: "NH1", label: "Why" },
  { id: "NH1-1-10-V", series: "NH1", label: "travel / visit / listen / feel" },
  { id: "NH1-1-11-1-MAYBE", series: "NH1", label: "maybe" },
  { id: "NH2-2-1-3-SVOO", series: "NH2", label: "SVOO: show / teach / give" },
  { id: "NH2-2-2-4-BECAUSE", series: "NH2", label: "because" },
  { id: "NH2-2-3-1-SHOULD", series: "NH2", label: "should" },
  { id: "NH2-2-4-1-HAVE-TO", series: "NH2", label: "have to" },
  { id: "NH2-2-5-1-HOW-TO", series: "NH2", label: "how to do" },
  { id: "NH2-2-6-MORE-THAN", series: "NH2", label: "more than / half" },
  { id: "NH2-2-7-2-VOICE", series: "NH2", label: "passive voice" },
];

const CONTENT_ITEMS = [
  { currentId: "GDM-41-10", slug: "graded-story" },
  { currentId: "NH1-1-1-V", slug: "bread-shop" },
  { currentId: "NH1-1-3-CAN-Q", slug: "star-bus" },
  { currentId: "NH1-1-5-2-DONTBE", slug: "wrong-robot" },
  { currentId: "NH1-1-8-3-WHY", slug: "moon-cup" },
  { currentId: "NH1-1-10-V", slug: "bread-shop" },
  { currentId: "NH1-1-11-1-MAYBE", slug: "graded-story" },
  { currentId: "NH2-2-1-3-SVOO", slug: "bread-shop" },
  { currentId: "NH2-2-2-4-BECAUSE", slug: "wrong-robot" },
  { currentId: "NH2-2-3-1-SHOULD", slug: "star-bus" },
  { currentId: "NH2-2-4-1-HAVE-TO", slug: "graded-story" },
  { currentId: "NH2-2-5-1-HOW-TO", slug: "moon-cup" },
  { currentId: "NH2-2-6-MORE-THAN", slug: "bread-shop" },
  { currentId: "NH2-2-7-2-VOICE", slug: "wrong-robot" },
];

const LEVELS = [
  {
    level: 1,
    currentId: "GDM-41-10",
    stage: "Assumed grading: legacy very short archive. Present sentences, be/have/see/open/go, this/it, basic prepositions, simple nouns.",
  },
  {
    level: 2,
    currentId: "GDM-41-10",
    stage: "Assumed grading: legacy short archive. Longer present sequences, basic questions, says/asks, not/no, repeated nouns.",
  },
  {
    level: 3,
    currentId: "NH1-1-5-2-DONTBE",
    stage: "Assumed grading: Short. Compact reading of about 120-180 words, simple paragraphs, clear four-part story movement, basic past forms, simple dialogue, and one visible target expression from the selected Current ID.",
  },
  {
    level: 4,
    currentId: "NH1-1-6-V",
    stage: "Assumed grading: legacy middle archive. There was/were, before/after, careful observation, simple reveal.",
  },
  {
    level: 5,
    currentId: "NH1-1-8-3-WHY",
    stage: "Assumed grading: legacy middle archive. Fuller scenes, reason links, more characters, clearer resolution.",
  },
  {
    level: 6,
    currentId: "NH1-1-11-1-MAYBE",
    stage: "Assumed grading: legacy long archive. Longer paragraphs, callbacks, multi-scene resolution, richer ending.",
  },
  {
    level: 7,
    currentId: "NH2-2-7-2-VOICE",
    stage: "Assumed grading: Long. Fuller reading of about 300-450 words, multiple paragraphs, richer setting and motive, clearer suspense or emotional turn, and natural use of the selected Current ID target item while avoiding structures not yet introduced.",
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

function progressItem(id) {
  return PROGRESS_ITEMS.find((item) => item.id === id);
}

function progressIndex(id) {
  return PROGRESS_ITEMS.findIndex((item) => item.id === id);
}

function previousProgressItems(currentId, count = 10) {
  const index = progressIndex(currentId);
  if (index < 0) return [];
  return PROGRESS_ITEMS.slice(Math.max(0, index - count + 1), index + 1);
}

function variantByKey(key) {
  return READING_VARIANTS.find((variant) => variant.key === key);
}

function variantByLevel(level) {
  return READING_VARIANTS.find((variant) => variant.level === Number(level));
}

function levelLabel(level) {
  const variant = variantByLevel(level);
  return variant ? variant.label : "Archive";
}

function storyContentItem(story, currentId) {
  return CONTENT_ITEMS.find((item) => item.slug === story.slug && item.currentId === currentId);
}

function readingInfo(baseInfo, requestedId) {
  const item = requestedId ? progressItem(requestedId) : null;
  if (!item) return baseInfo;
  return {
    ...baseInfo,
    currentId: item.id,
    stage: `${baseInfo.stage} Selected Current ID: ${item.id} (${item.label}).`,
  };
}

function levelStageText(info) {
  return `${info.stage} Current ID: ${info.currentId}.`;
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
  const requestedId = new URLSearchParams(window.location.search).get("id");

  document.title = requestedLevel ? `${story.title} - ${levelLabel(requestedLevel.level)}` : story.title;
  root.querySelector("h1").textContent = requestedLevel ? `${story.title}: ${levelLabel(requestedLevel.level)}` : story.title;

  const container = root.querySelector("[data-content]");
  container.textContent = "";

  const visibleLevels = requestedLevel
    ? [requestedLevel]
    : LEVELS.filter((info) => TARGET_READING_LEVELS.includes(info.level) && storySupportsLevel(story, info.level));

  for (const info of visibleLevels) {
    if (!storySupportsLevel(story, info.level)) continue;
    const section = document.createElement("section");
    const heading = document.createElement("h2");
    heading.textContent = levelLabel(info.level);
    section.appendChild(heading);
    section.id = `level-${info.level}`;
    const text = await loadText(`${basePath}/level-${info.level}.txt`);
    renderReadingSection(section, text, readingInfo(info, requestedId), `${story.slug}-${levelLabel(info.level).toLowerCase()}.txt`);
    container.appendChild(section);
  }
}

async function renderLevelPage(root) {
  const level = Number(root.dataset.level);
  const info = levelInfo(level);
  const basePath = root.dataset.basePath || "../lessons";
  const label = levelLabel(level);

  document.title = `${label} Readings`;
  root.querySelector("h1").textContent = `${label} Readings`;
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
  const currentInput = root.querySelector("[data-current-id]");
  const variantInput = root.querySelector("[data-reading-variant]");
  const genreInput = root.querySelector("[data-genre]");
  const container = root.querySelector("[data-id-results]");
  const currentId = currentInput.value.trim();
  const variant = variantByKey(variantInput.value);
  const genre = genreInput.value;
  const recentItems = previousProgressItems(currentId, 10);
  const recentIds = new Set(recentItems.map((item) => item.id));

  container.textContent = "";

  if (!recentItems.length || !variant) {
    appendParagraph(container, "Choose a valid Current ID and reading length.", "error");
    return;
  }

  const summary = document.createElement("p");
  summary.className = "note";
  summary.textContent = `Current ID: ${currentId}. Showing up to ${MAX_VISIBLE_CHOICES} choices from content attached to this ID and nearby previous IDs. Length: ${variant.label} (${variant.note}).`;
  container.appendChild(summary);

  const list = document.createElement("div");
  list.className = "choice-grid";
  const storyChoices = CONTENT_ITEMS.filter((item) => recentIds.has(item.currentId))
    .map((item) => ({ item, story: storyBySlug(item.slug) }))
    .filter(({ story }) => story && storySupportsLevel(story, variant.level))
    .filter(({ story }) => genre === "all" || story.genre.toLowerCase() === genre)
    .slice(-MAX_VISIBLE_CHOICES)
    .reverse();

  if (!storyChoices.length) {
    appendParagraph(container, "No stories match this genre and length near the current ID yet.", "note");
    return;
  }

  storyChoices.forEach(({ item, story }) => {
    const progress = progressItem(item.currentId);
    const card = document.createElement("section");
    card.className = "lesson choice-card";
    const heading = document.createElement("h3");
    heading.textContent = story.title;
    const genreText = document.createElement("p");
    genreText.className = "note";
    genreText.textContent = `${story.genre} / ${item.currentId}${progress ? ` / ${progress.label}` : ""}`;
    const link = document.createElement("a");
    link.href = `lessons/${story.slug}/index.html?level=${variant.level}&id=${encodeURIComponent(item.currentId)}`;
    link.textContent = `Open ${variant.label}`;
    card.appendChild(heading);
    card.appendChild(genreText);
    card.appendChild(link);
    list.appendChild(card);
  });
  container.appendChild(list);
}

function bootIndexPage(root) {
  const currentInput = root.querySelector("[data-current-id]");
  const variantInput = root.querySelector("[data-reading-variant]");
  const genreInput = root.querySelector("[data-genre]");
  currentInput.addEventListener("change", () => renderIndexResults(root));
  variantInput.addEventListener("change", () => renderIndexResults(root));
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
