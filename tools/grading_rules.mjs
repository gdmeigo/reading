import fs from "node:fs";
import path from "node:path";

export const READER_PATH = "assets/reader.js";
export const WORKBOOK_BUILDER_PATH = "tools/build_unified_current_id_workbook.mjs";

export const GRADING_SIGNALS = [
  {
    id: "GDM-1",
    name: "basic pronouns",
    patterns: [/\b(?:you|he|she|it)\b/gi],
  },
  {
    id: "GDM-10",
    name: "this book is",
    patterns: [/\bthis\s+book\s+is\b/gi],
  },
  {
    id: "GDM-22",
    name: "water / plural demonstratives / them",
    patterns: [/\bwater\b/gi, /\bthese\s+\w+s\s+(?:are|were)\b/gi, /\bthose\s+\w+s\s+(?:are|were)\b/gi, /\bthem\b/gi],
  },
  {
    id: "GDM-37-4",
    name: "where question",
    patterns: [/\bwhere\b/gi],
  },
  {
    id: "GDM-41-10",
    name: "see review / do question bridge",
    patterns: [
      /\bsee(?:s|ing)?\b/gi,
      /\bsaw\b/gi,
      /\bdo(?:es|ne)?\b/gi,
      /\bdid\b/gi,
      /\bwill\s+see\b/gi,
    ],
  },
  {
    id: "NH1-0-FAMILY",
    name: "family nouns / possessive 's",
    patterns: [/\b(?:brother|sister|mother|father|grandfather|grandmother|family)\b/gi, /\b[A-Z][a-z]+['\u2019]s\b/g],
  },
  {
    id: "NH1-1-1-V",
    name: "drink / play / watch / speak / study / read",
    patterns: [
      /\b(?:drink|drinks|drank|play|plays|played|watch|watches|watched|speak|speaks|spoke|study|studies|studied|read|reads|reading)\b/gi,
    ],
  },
  {
    id: "NH1-1-2-V",
    name: "walk / have / has / eat",
    patterns: [/\b(?:walk|walks|walked|walking|have|has|eat|eats|ate|eating)\b/gi],
  },
  {
    id: "NH1-1-3-CAN-Q",
    name: "can question",
    patterns: [/\bcan\b[^.?!]*\?/gi],
  },
  {
    id: "NH1-1-5-2-DONTBE",
    name: "Don't be",
    patterns: [/\bdon['\u2019]t\s+be\b/gi],
  },
  {
    id: "NH1-1-6-V",
    name: "write",
    patterns: [/\b(?:write|writes|wrote|written|writing)\b/gi],
  },
  {
    id: "NH1-1-7-V",
    name: "know / make / buy",
    patterns: [/\b(?:know|knows|knew|make|makes|made|buy|buys|bought|making|buying)\b/gi],
  },
  {
    id: "NH1-1-8-3-WHY",
    name: "why question",
    patterns: [/\bwhy\b/gi],
  },
  {
    id: "NH1-1-10-V",
    name: "travel / visit / listen / spend / stand / feel / get up",
    patterns: [
      /\b(?:travel|travels|traveled|traveling|visit|visits|visited|listen|listens|listened|spend|spends|spent|stand|stands|stood|feel|feels|felt)\b/gi,
      /\bget\s+up\b/gi,
      /\bgot\s+up\b/gi,
    ],
  },
  {
    id: "NH1-1-11-1-MAYBE",
    name: "maybe",
    patterns: [/\bmaybe\b/gi],
  },
  {
    id: "NH2-2-1-3-SVOO",
    name: "show / teach / give",
    patterns: [/\b(?:show|shows|showed|teach|teaches|taught|give|gives|gave|given|giving)\b/gi],
  },
  {
    id: "NH2-2-2-4-BECAUSE",
    name: "because",
    patterns: [/\bbecause\b/gi],
  },
  {
    id: "NH2-2-3-1-SHOULD",
    name: "should",
    patterns: [/\bshould\b/gi],
  },
  {
    id: "NH2-2-4-1-HAVE-TO",
    name: "have to",
    patterns: [/\b(?:have|has|had)\s+to\b/gi],
  },
  {
    id: "NH2-2-5-1-HOW-TO",
    name: "how to do",
    patterns: [/\bhow\s+to\b/gi],
  },
  {
    id: "NH2-2-6-MORE-THAN",
    name: "more than / half",
    patterns: [/\bmore\s+than\b/gi, /\bhalf\b/gi],
  },
  {
    id: "NH2-2-7-2-VOICE",
    name: "passive voice",
    patterns: [
      /\b(?:am|are|is|was|were|be|been)\s+(?:moved|washed|cut|made|written|opened|closed|locked|found|seen|given|shown|sent|called|built|left|taken)\b/gi,
      /\b(?:was|were)\s+\w+(?:ed|en)\s+by\b/gi,
    ],
  },
];

const GRAMMAR_CATEGORY_KEYWORDS = [
  "代名詞",
  "be動詞",
  "所有",
  "冠詞",
  "前置詞",
  "指示語",
  "未来",
  "過去",
  "疑問",
  "否定",
  "接続詞",
  "接続副詞",
  "助動詞",
  "命令",
  "不定詞",
  "数量",
  "比較",
  "受け身",
  "関係",
  "SVOC",
  "進行",
  "文型",
  "存在文",
  "目的語",
  "部分",
  "提案",
  "許可",
];

const TERM_BLOCKLIST = new Set([
  "q",
  "v",
  "sv",
  "unit",
  "question",
  "book",
  "thing",
  "person",
  "concert",
  "period",
]);

const QUESTION_TERMS = new Set([
  "do",
  "does",
  "did",
  "will",
  "can",
  "may",
  "is",
  "are",
  "was",
  "were",
  "has",
  "have",
  "what",
  "where",
  "when",
  "which",
  "who",
  "whose",
  "how",
]);

export function readReaderSource(rootDir = process.cwd()) {
  return fs.readFileSync(path.join(rootDir, READER_PATH), "utf8");
}

export function parseProgressItems(readerSource) {
  return [
    ...readerSource.matchAll(
      /\{\s*id:\s*"([^"]+)",\s*series:\s*"([^"]+)",\s*label:\s*"([^"]+)"(?:,\s*words:\s*"([^"]*)",\s*grammar:\s*"([^"]*)",\s*targets:\s*"([^"]*)")?/g,
    ),
  ].map((match) => ({
    id: match[1],
    series: match[2],
    label: match[3],
    words: match[4] || "",
    grammar: match[5] || "",
    targets: match[6] || "",
  }));
}

export function parseContentItems(readerSource) {
  return [...readerSource.matchAll(/\{ id: "([^"]+)", variant: "([^"]+)", level: (\d+), slug: "([^"]+)" \}/g)].map((match) => ({
    id: match[1],
    variant: match[2],
    level: Number(match[3]),
    slug: match[4],
  }));
}

export function progressIndexMap(progressItems) {
  return new Map(progressItems.map((item, index) => [item.id, index]));
}

export function resetPattern(pattern) {
  pattern.lastIndex = 0;
  return pattern;
}

export function gradingSignalsForProgressItems(progressItems) {
  const manualIds = new Set(GRADING_SIGNALS.map((signal) => signal.id));
  const firstTermIndex = new Map();
  const signals = [];

  for (const signal of GRADING_SIGNALS) {
    for (const term of candidateTermsFromText(signal.name)) {
      firstTermIndex.set(term.toLowerCase(), -1);
    }
  }

  for (const [index, item] of progressItems.entries()) {
    if (manualIds.has(item.id)) continue;
    if (!isGrammarLikeProgressItem(item)) continue;

    const terms = candidateTermsForProgressItem(item).filter((term) => {
      const key = term.toLowerCase();
      if (firstTermIndex.has(key)) return false;
      firstTermIndex.set(key, index);
      return true;
    });
    const patterns = [...specialPatternsForProgressItem(item), ...terms.flatMap((term) => patternsForTerm(term, item))];
    if (!patterns.length) continue;

    signals.push({
      id: item.id,
      name: `auto grammar: ${item.label}`,
      patterns,
    });
  }

  return [...GRADING_SIGNALS, ...signals];
}

export function isGrammarLikeProgressItem(item) {
  const source = [item.grammar, item.label].filter(Boolean).join(" ");
  return GRAMMAR_CATEGORY_KEYWORDS.some((keyword) => source.includes(keyword));
}

export function candidateTermsForProgressItem(item) {
  const source = [item.targets, item.words, item.label].filter(Boolean).join(" / ");
  const questionLike = /\b(?:question|q)\b|疑問/i.test([item.label, item.grammar].join(" "));
  const quantityLike = /数量/.test(item.grammar);
  const relationLike = /関係/.test(item.grammar);
  const terms = [];
  for (const rawPart of source.split(/[\/,\u3001\u30fb]|(?:\s+-\s+)/)) {
    const normalized = rawPart
      .replace(/\([^A-Za-z?']*?\)/g, " ")
      .replace(/\brel\b/gi, " ")
      .replace(/\bUnit\s*\d+\b/gi, " ")
      .replace(/[^A-Za-z?'\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    if (!normalized) continue;
    const words = normalized.split(/\s+/).filter((word) => !TERM_BLOCKLIST.has(word.toLowerCase()));
    if (!words.length) continue;
    const term = words.join(" ").trim();
    if (term) terms.push(term);
  }
  return [...new Set(terms)].filter((term) => {
    const lower = term.toLowerCase();
    if (questionLike) return QUESTION_TERMS.has(lower);
    if (quantityLike) return /^(?:some|any|many|much|all|half|more than|one|two|three|four|five|six|seven|eight|nine|ten)$/.test(lower);
    if (relationLike) return /^(?:who|which|when|what|that)$/.test(lower);
    return true;
  });
}

function candidateTermsFromText(text) {
  return text
    .split(/[\/,]|(?:\s+-\s+)/)
    .map((part) =>
      part
        .replace(/\([^A-Za-z?']*?\)/g, " ")
        .replace(/\b(?:question|nouns?|review|bridge|point|basic|voice|forms?)\b/gi, " ")
        .replace(/[^A-Za-z?'\s]/g, " ")
        .replace(/\s+/g, " ")
        .trim(),
    )
    .filter(Boolean);
}

function specialPatternsForProgressItem(item) {
  if (item.id === "GDM-30-5") {
    return [/\b(?:my|your|his|her|our|their|[A-Z][a-z]+['\u2019]s)\b[^.?!]*\?/g];
  }
  return [];
}

function patternsForTerm(term, item) {
  const lower = term.toLowerCase();
  const source = `${item.label} ${item.grammar}`;
  const questionLike = /\b(?:question|q)\b|疑問/i.test(source);
  const patterns = [];

  if (questionLike && !QUESTION_TERMS.has(lower)) return [];

  if (questionLike && QUESTION_TERMS.has(lower)) {
    patterns.push(new RegExp(`\\b${escapeRegex(lower)}\\b[^.?!]*\\?`, "gi"));
  }

  if (lower === "don't") {
    patterns.push(/\bdon['\u2019]t\b/gi);
  } else if (lower === "let's") {
    patterns.push(/\blet['\u2019]s\b/gi);
  } else if (/命令/.test(source) && lower === "be") {
    patterns.push(/^Be\b/gim);
  } else if (lower === "be") {
    patterns.push(/\b(?:am|are|is|was|were|be|been|being)\b/gi);
  } else if (lower === "present") {
    return [];
  } else {
    patterns.push(new RegExp(`\\b${escapeRegex(lower).replace(/\\ /g, "\\s+")}\\b`, "gi"));
  }

  return patterns;
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function collectMatches(text, progressItems) {
  const byId = progressIndexMap(progressItems);

  return gradingSignalsForProgressItems(progressItems).flatMap((signal) =>
    signal.patterns.flatMap((pattern) => {
      const matches = [...text.matchAll(resetPattern(pattern))].slice(0, 5);
      return matches.map((match) => ({
        id: signal.id,
        index: byId.get(signal.id),
        name: signal.name,
        match: compactMatch(match[0]),
      }));
    }),
  ).filter((match) => Number.isInteger(match.index));
}

export function requiredIdForText(text, progressItems) {
  const matches = collectMatches(text, progressItems);
  const maxIndex = matches.reduce((max, match) => Math.max(max, match.index), 0);
  return {
    id: progressItems[maxIndex]?.id,
    index: maxIndex,
    matches: matches.filter((match) => match.index === maxIndex),
    allMatches: matches,
  };
}

export function compactMatch(value) {
  return value.replace(/\s+/g, " ").trim();
}

export function contentTextPath(item) {
  return `lessons/${item.slug}/level-${item.level}.txt`;
}
