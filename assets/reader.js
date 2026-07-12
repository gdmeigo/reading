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
  { slug: "red-pin", title: "The Red Pin", genre: "Mystery", levels: [3] },
  { slug: "book-under-hat", title: "The Book Under the Hat", genre: "Comedy", levels: [3] },
  { slug: "water-pen-trick", title: "The Water Pen Trick", genre: "Mystery", levels: [3] },
  { slug: "where-is-the-bell", title: "Where Is the Bell?", genre: "Mystery", levels: [3] },
  { slug: "rina-brother", title: "Rina's Brother", genre: "Human Drama", levels: [3] },
  { slug: "window-note", title: "The Window Note", genre: "Mystery", levels: [3] },
  { slug: "rainy-club-map", title: "The Rainy Club Map", genre: "Human Drama", levels: [7] },
  { slug: "can-clock-sing", title: "Can the Clock Sing?", genre: "Fantasy", levels: [7] },
  { slug: "dont-be-a-hero", title: "Don't Be a Hero", genre: "Human Drama", levels: [7] },
  { slug: "gift-lesson", title: "The Gift Lesson", genre: "Comedy", levels: [7] },
  { slug: "red-pin-parade", title: "The Red Pin Parade", genre: "Comedy", levels: [7] },
  { slug: "old-book-signal", title: "The Old Book Signal", genre: "Mystery", levels: [7] },
  { slug: "pens-in-water", title: "The Pens in the Water", genre: "Mystery", levels: [7] },
  { slug: "map-under-stage", title: "The Map Under the Stage", genre: "Mystery", levels: [7] },
  { slug: "door-under-stage", title: "The Door Under the Stage", genre: "Mystery", levels: [7] },
  { slug: "family-photo-day", title: "Family Photo Day", genre: "Human Drama", levels: [7] },
  { slug: "letter-under-door", title: "The Letter Under the Door", genre: "Mystery", levels: [7] },
  { slug: "why-lights-blink", title: "Why the Lights Blink", genre: "SF", levels: [7] },
  { slug: "because-of-soup", title: "Because of the Soup", genre: "Comedy", levels: [7] },
  { slug: "open-the-box", title: "How to Open the Box", genre: "Mystery", levels: [7] },
  { slug: "more-than-half", title: "More Than Half", genre: "Human Drama", levels: [7] },
  { slug: "travel-ticket", title: "The Travel Ticket", genre: "Human Drama", levels: [3] },
  { slug: "maybe-window", title: "Maybe at the Window", genre: "Mystery", levels: [3] },
  { slug: "should-sign", title: "The Should Sign", genre: "Comedy", levels: [3] },
  { slug: "have-to-key", title: "The Have-To Key", genre: "Mystery", levels: [3] },
  { slug: "passive-poster", title: "The Poster Was Moved", genre: "Mystery", levels: [3] },
  { slug: "drink-read-race", title: "The Drink and Read Race", genre: "Comedy", levels: [3] },
  { slug: "can-lantern", title: "Can the Lantern Fly?", genre: "Fantasy", levels: [3] },
  { slug: "dont-be-late", title: "Don't Be Late", genre: "Human Drama", levels: [3] },
  { slug: "show-me-the-seat", title: "Show Me the Seat", genre: "Comedy", levels: [7] },
];

const DEFAULT_STORY_LEVELS = [1, 2, 3, 4, 5, 6];
const TARGET_READING_LEVELS = [3, 7];
const MAX_VISIBLE_CHOICES = 3;
const INDEX_SELECTION_STORAGE_KEY = "reading.indexSelection.v1";

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
  { id: "GDM-1", variant: "short", level: 3, slug: "red-pin" },
  { id: "GDM-10", variant: "short", level: 3, slug: "book-under-hat" },
  { id: "GDM-22", variant: "short", level: 3, slug: "water-pen-trick" },
  { id: "GDM-37-4", variant: "short", level: 3, slug: "where-is-the-bell" },
  { id: "GDM-41-10", variant: "short", level: 3, slug: "graded-story" },
  { id: "NH1-0-FAMILY", variant: "short", level: 3, slug: "rina-brother" },
  { id: "NH1-1-1-V", variant: "short", level: 3, slug: "bread-shop" },
  { id: "NH1-1-1-V", variant: "long", level: 7, slug: "rainy-club-map" },
  { id: "NH1-1-3-CAN-Q", variant: "short", level: 3, slug: "star-bus" },
  { id: "NH1-1-3-CAN-Q", variant: "long", level: 7, slug: "can-clock-sing" },
  { id: "NH1-1-5-2-DONTBE", variant: "short", level: 3, slug: "wrong-robot" },
  { id: "NH1-1-5-2-DONTBE", variant: "long", level: 7, slug: "dont-be-a-hero" },
  { id: "NH1-1-6-V", variant: "short", level: 3, slug: "window-note" },
  { id: "NH1-1-8-3-WHY", variant: "short", level: 3, slug: "moon-cup" },
  { id: "NH1-1-10-V", variant: "long", level: 7, slug: "rainy-club-map" },
  { id: "NH1-1-11-1-MAYBE", variant: "long", level: 7, slug: "can-clock-sing" },
  { id: "NH2-2-1-3-SVOO", variant: "short", level: 3, slug: "bread-shop" },
  { id: "NH2-2-1-3-SVOO", variant: "long", level: 7, slug: "gift-lesson" },
  { id: "NH2-2-2-4-BECAUSE", variant: "short", level: 3, slug: "wrong-robot" },
  { id: "NH2-2-3-1-SHOULD", variant: "long", level: 7, slug: "dont-be-a-hero" },
  { id: "NH2-2-4-1-HAVE-TO", variant: "long", level: 7, slug: "gift-lesson" },
  { id: "NH2-2-5-1-HOW-TO", variant: "short", level: 3, slug: "moon-cup" },
  { id: "NH2-2-6-MORE-THAN", variant: "short", level: 3, slug: "bread-shop" },
  { id: "NH2-2-7-2-VOICE", variant: "long", level: 7, slug: "gift-lesson" },
  { id: "GDM-1", variant: "long", level: 7, slug: "red-pin-parade" },
  { id: "GDM-10", variant: "long", level: 7, slug: "old-book-signal" },
  { id: "GDM-22", variant: "long", level: 7, slug: "pens-in-water" },
  { id: "GDM-37-4", variant: "long", level: 7, slug: "map-under-stage" },
  { id: "GDM-41-10", variant: "long", level: 7, slug: "door-under-stage" },
  { id: "NH1-0-FAMILY", variant: "long", level: 7, slug: "family-photo-day" },
  { id: "NH1-1-6-V", variant: "long", level: 7, slug: "letter-under-door" },
  { id: "NH1-1-8-3-WHY", variant: "long", level: 7, slug: "why-lights-blink" },
  { id: "NH2-2-2-4-BECAUSE", variant: "long", level: 7, slug: "because-of-soup" },
  { id: "NH2-2-5-1-HOW-TO", variant: "long", level: 7, slug: "open-the-box" },
  { id: "NH2-2-6-MORE-THAN", variant: "long", level: 7, slug: "more-than-half" },
  { id: "NH1-1-10-V", variant: "short", level: 3, slug: "travel-ticket" },
  { id: "NH1-1-11-1-MAYBE", variant: "short", level: 3, slug: "maybe-window" },
  { id: "NH2-2-3-1-SHOULD", variant: "short", level: 3, slug: "should-sign" },
  { id: "NH2-2-4-1-HAVE-TO", variant: "short", level: 3, slug: "have-to-key" },
  { id: "NH2-2-7-2-VOICE", variant: "short", level: 3, slug: "passive-poster" },
  { id: "NH1-1-1-V", variant: "short", level: 3, slug: "drink-read-race" },
  { id: "NH1-1-3-CAN-Q", variant: "short", level: 3, slug: "can-lantern" },
  { id: "NH1-1-5-2-DONTBE", variant: "short", level: 3, slug: "dont-be-late" },
  { id: "NH2-2-1-3-SVOO", variant: "long", level: 7, slug: "show-me-the-seat" },
];

const LEVELS = [
  {
    level: 1,
    id: "GDM-41-10",
    stage: "Assumed grading: legacy very short archive. Present sentences, be/have/see/open/go, this/it, basic prepositions, simple nouns.",
  },
  {
    level: 2,
    id: "GDM-41-10",
    stage: "Assumed grading: legacy short archive. Longer present sequences, basic questions, says/asks, not/no, repeated nouns.",
  },
  {
    level: 3,
    id: "NH1-1-5-2-DONTBE",
    stage: "Assumed grading: Short. Compact reading of about 120-180 words, simple paragraphs, clear four-part story movement, basic past forms, simple dialogue, and one visible target expression from the selected ID.",
  },
  {
    level: 4,
    id: "NH1-1-6-V",
    stage: "Assumed grading: legacy middle archive. There was/were, before/after, careful observation, simple reveal.",
  },
  {
    level: 5,
    id: "NH1-1-8-3-WHY",
    stage: "Assumed grading: legacy middle archive. Fuller scenes, reason links, more characters, clearer resolution.",
  },
  {
    level: 6,
    id: "NH1-1-11-1-MAYBE",
    stage: "Assumed grading: legacy long archive. Longer paragraphs, callbacks, multi-scene resolution, richer ending.",
  },
  {
    level: 7,
    id: "NH2-2-7-2-VOICE",
    stage: "Assumed grading: Long. Fuller reading of about 300-450 words, multiple paragraphs, richer setting and motive, clearer suspense or emotional turn, and natural use of the selected ID target item while avoiding structures not yet introduced.",
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

function previousProgressItems(id, count = 10) {
  const index = progressIndex(id);
  if (index < 0) return [];
  return PROGRESS_ITEMS.slice(Math.max(0, index - count + 1), index + 1);
}

function progressScopeItems(id, count = 10) {
  if (id === "all") return PROGRESS_ITEMS;
  return previousProgressItems(id, count);
}

function variantByKey(key) {
  return READING_VARIANTS.find((variant) => variant.key === key);
}

function variantChoice(key) {
  if (key === "all") {
    return { key: "all", label: "All", note: "short and long readings" };
  }
  return variantByKey(key);
}

function variantByLevel(level) {
  return READING_VARIANTS.find((variant) => variant.level === Number(level));
}

function levelLabel(level) {
  const variant = variantByLevel(level);
  return variant ? variant.label : "Archive";
}

function storyContentItem(story, id) {
  return CONTENT_ITEMS.find((item) => item.slug === story.slug && item.id === id);
}

function readingInfo(baseInfo, requestedId) {
  const item = requestedId ? progressItem(requestedId) : null;
  if (!item) return baseInfo;
  return {
    ...baseInfo,
    id: item.id,
    stage: `${baseInfo.stage} Selected ID: ${item.id} (${item.label}).`,
  };
}

function levelStageText(info) {
  return `${info.stage} ID: ${info.id}.`;
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
  const params = new URLSearchParams(window.location.search);
  const requestedId = params.get("id");

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
    const contentItem = requestedId ? CONTENT_ITEMS.find((item) => item.id === requestedId && item.slug === story.slug) : null;
    const contentLevel = contentItem?.level || info.level;
    const text = await loadText(`${basePath}/level-${contentLevel}.txt`);
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
  const currentInput = root.querySelector("[data-id]");
  const variantInput = root.querySelector("[data-reading-variant]");
  const genreInput = root.querySelector("[data-genre]");
  const container = root.querySelector("[data-id-results]");
  const selectedId = currentInput.value.trim();
  const variant = variantChoice(variantInput.value);
  const genre = genreInput.value;
  const recentItems = progressScopeItems(selectedId, 10);
  const recentIds = new Set(recentItems.map((item) => item.id));

  container.textContent = "";

  if (!recentItems.length || !variant) {
    appendParagraph(container, "Choose a valid ID and reading length.", "error");
    return;
  }

  const summary = document.createElement("p");
  summary.className = "note";
  const idText = selectedId === "all" ? "All IDs" : `ID: ${selectedId}`;
  const scopeText = selectedId === "all" ? "all content IDs" : "content attached to this ID and nearby previous IDs";
  summary.textContent = `${idText}. Showing up to ${MAX_VISIBLE_CHOICES} choices from ${scopeText}. Length: ${variant.label} (${variant.note}).`;
  container.appendChild(summary);

  const list = document.createElement("div");
  list.className = "choice-grid";
  const storyChoices = CONTENT_ITEMS.filter((item) => recentIds.has(item.id) && (variant.key === "all" || item.variant === variant.key))
    .map((item) => ({ item, story: storyBySlug(item.slug) }))
    .filter(({ story, item }) => story && storySupportsLevel(story, item.level))
    .filter(({ story }) => genre === "all" || story.genre.toLowerCase() === genre)
    .sort((a, b) => progressIndex(a.item.id) - progressIndex(b.item.id))
    .slice(-MAX_VISIBLE_CHOICES)
    .reverse();

  if (!storyChoices.length) {
    appendParagraph(container, "No stories match this genre and length near this ID yet.", "note");
    return;
  }

  storyChoices.forEach(({ item, story }) => {
    const progress = progressItem(item.id);
    const itemVariant = variantByKey(item.variant);
    const card = document.createElement("section");
    card.className = "lesson choice-card";
    const heading = document.createElement("h3");
    heading.textContent = story.title;
    const genreText = document.createElement("p");
    genreText.className = "note";
    genreText.textContent = `${story.genre} / ${item.id}${progress ? ` / ${progress.label}` : ""}`;
    const link = document.createElement("a");
    link.href = `lessons/${story.slug}/index.html?level=${item.level}&id=${encodeURIComponent(item.id)}`;
    link.textContent = `Open ${itemVariant ? itemVariant.label : variant.label}`;
    card.appendChild(heading);
    card.appendChild(genreText);
    card.appendChild(link);
    list.appendChild(card);
  });
  container.appendChild(list);
}

function saveIndexSelection(root) {
  const selection = {
    id: root.querySelector("[data-id]")?.value || "",
    variant: root.querySelector("[data-reading-variant]")?.value || "",
    genre: root.querySelector("[data-genre]")?.value || "",
  };
  try {
    localStorage.setItem(INDEX_SELECTION_STORAGE_KEY, JSON.stringify(selection));
  } catch {
    // Selection persistence is a convenience; reading should still work without storage.
  }
}

function restoreIndexSelection(root) {
  let selection = null;
  try {
    selection = JSON.parse(localStorage.getItem(INDEX_SELECTION_STORAGE_KEY) || "null");
  } catch {
    return;
  }
  if (!selection) return;

  [
    [root.querySelector("[data-id]"), selection.id],
    [root.querySelector("[data-reading-variant]"), selection.variant],
    [root.querySelector("[data-genre]"), selection.genre],
  ].forEach(([input, value]) => {
    if (!input || !value) return;
    if ([...input.options].some((option) => option.value === value)) {
      input.value = value;
    }
  });
}

function bootIndexPage(root) {
  const currentInput = root.querySelector("[data-id]");
  const variantInput = root.querySelector("[data-reading-variant]");
  const genreInput = root.querySelector("[data-genre]");
  const handleChange = () => {
    saveIndexSelection(root);
    renderIndexResults(root);
  };
  restoreIndexSelection(root);
  currentInput.addEventListener("change", handleChange);
  variantInput.addEventListener("change", handleChange);
  genreInput.addEventListener("change", handleChange);
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
