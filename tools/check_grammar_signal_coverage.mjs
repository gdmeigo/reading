import {
  candidateTermsForProgressItem,
  gradingSignalsForProgressItems,
  isGrammarLikeProgressItem,
  parseProgressItems,
  readReaderSource,
} from "./grading_rules.mjs";

const reader = readReaderSource();
const progressItems = parseProgressItems(reader);
const signals = new Map(gradingSignalsForProgressItems(progressItems).map((signal) => [signal.id, signal]));
const strict = process.argv.includes("--strict");

const grammarItems = progressItems.filter(isGrammarLikeProgressItem);
const noLocalSignal = grammarItems.filter((item) => !signals.has(item.id));
const noDetectableTerms = noLocalSignal.filter((item) => !candidateTermsForProgressItem(item).length);

console.log(
  `Grammar signal coverage report: ${grammarItems.length} grammar-like Grade item(s), ${signals.size} active signal set(s), ${noLocalSignal.length} item(s) reuse earlier or manual signals.`,
);

if (noDetectableTerms.length) {
  console.log("Grammar-like Grade items without local detectable English terms:");
  console.log(noDetectableTerms.map((item) => `- ${item.id}: ${item.label} (${item.grammar})`).join("\n"));
}

if (strict && noDetectableTerms.length) {
  process.exit(1);
}
