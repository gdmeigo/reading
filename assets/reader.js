const STORIES = [
  { slug: "graded-story", title: "The Little Door", genre: "Mystery", levels: [1, 2, 3, 4, 5, 6, 7] },
  { slug: "blue-lunch-box", title: "The Blue Lunch Box", genre: "Human Drama" },
  { slug: "kite-day", title: "The Paper Rocket", genre: "Human Drama" },
  { slug: "night-bus", title: "The Last Bus", genre: "Mystery" },
  { slug: "bread-shop", title: "The Quiet Bread Shop", genre: "Human Drama", levels: [1, 2, 3, 4, 5, 6, 7] },
  { slug: "star-bus", title: "The Star Bus", genre: "SF", levels: [1, 2, 3, 4, 5, 6, 7] },
  { slug: "moon-cup", title: "The Moon Cup", genre: "Fantasy", levels: [1, 2, 3, 4, 5, 6, 7] },
  { slug: "silver-stone", title: "The Silver Stone", genre: "Fantasy", levels: [1] },
  { slug: "red-bag-path", title: "The Red Bag Path", genre: "Adventure", levels: [1] },
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
  { slug: "principal-dance", title: "Can the Principal Dance?", genre: "Comedy", levels: [7] },
  { slug: "hat-said-no", title: "Because the Hat Said No", genre: "Comedy", levels: [7] },
  { slug: "cake-was-moved", title: "The Cake Was Moved", genre: "Comedy", levels: [7] },
  { slug: "dice-gate", title: "The Dice Gate", genre: "Fantasy / Adventure", genres: ["Fantasy", "Adventure"], levels: [7] },
  { slug: "red-pin-parade", title: "The Red Pin Parade", genre: "Adventure", levels: [7] },
  { slug: "old-book-signal", title: "The Old Book Signal", genre: "Adventure", levels: [7] },
  { slug: "pens-in-water", title: "The Pens in the Water", genre: "Adventure", levels: [7] },
  { slug: "map-under-stage", title: "The Map Under the Stage", genre: "Adventure", levels: [7] },
  { slug: "door-under-stage", title: "The Door Under the Stage", genre: "Adventure", levels: [7] },
  { slug: "family-photo-day", title: "Family Photo Day", genre: "Adventure", levels: [7] },
  { slug: "letter-under-door", title: "The Letter Under the Door", genre: "Adventure", levels: [7] },
  { slug: "why-lights-blink", title: "Why the Lights Blink", genre: "Adventure", levels: [7] },
  { slug: "because-of-soup", title: "Because of the Soup", genre: "Adventure", levels: [7] },
  { slug: "open-the-box", title: "How to Open the Box", genre: "Adventure", levels: [7] },
  { slug: "more-than-half", title: "More Than Half", genre: "Adventure", levels: [7] },
  { slug: "travel-ticket", title: "The Travel Ticket", genre: "Adventure", levels: [3] },
  { slug: "maybe-window", title: "Maybe at the Window", genre: "Adventure", levels: [3] },
  { slug: "should-sign", title: "The Should Sign", genre: "Adventure", levels: [3] },
  { slug: "have-to-key", title: "The Have-To Key", genre: "Adventure", levels: [3] },
  { slug: "passive-poster", title: "The Poster Was Moved", genre: "Adventure", levels: [3] },
  { slug: "drink-read-race", title: "The Drink and Read Race", genre: "Adventure", levels: [3] },
  { slug: "can-lantern", title: "Can the Lantern Fly?", genre: "Adventure", levels: [3] },
  { slug: "dont-be-late", title: "Don't Be Late", genre: "Adventure", levels: [3] },
  { slug: "show-me-the-seat", title: "Show Me the Seat", genre: "Adventure", levels: [7] },
  { slug: "signal-under-water", title: "The Signal Under Water", genre: "SF", levels: [3] },
  { slug: "orbit-note", title: "The Orbit Note", genre: "SF", levels: [3] },
  { slug: "why-moon-robot", title: "Why the Moon Robot Stops", genre: "SF", levels: [3] },
  { slug: "maybe-mars-window", title: "Maybe at the Mars Window", genre: "SF", levels: [3] },
  { slug: "station-was-moved", title: "The Station Was Moved", genre: "SF", levels: [7] },
  { slug: "where-the-roof-door", title: "Where the Roof Door Opens", genre: "Mystery", levels: [7] },
  { slug: "traveling-shadow-ticket", title: "The Traveling Shadow Ticket", genre: "Mystery", levels: [7] },
  { slug: "because-the-wall-listened", title: "Because the Wall Listened", genre: "Mystery", levels: [7] },
  { slug: "how-to-read-the-stone", title: "How to Read the Stone", genre: "Mystery", levels: [7] },
  { slug: "more-than-one-moon", title: "More Than One Moon", genre: "Mystery", levels: [7] },
  { slug: "locked-umbrella-room", title: "The Locked Umbrella Room", genre: "Mystery", levels: [8] },
  { slug: "last-seat-table", title: "The Last Seat at the Table", genre: "Human Drama", levels: [8] },
  { slug: "library-moved", title: "The Library That Was Moved", genre: "SF", levels: [8] },
  { slug: "moon-lantern-path", title: "The Moon Lantern Path", genre: "Fantasy", levels: [8] },
  { slug: "folded-map-race", title: "The Folded Map Race", genre: "Adventure", levels: [8] },
  { slug: "jaio-pudding-case", title: "The Pudding Case", genre: "Comedy", levels: [8] },
];

const DEFAULT_STORY_LEVELS = [1, 2, 3, 4, 5, 6];
const TARGET_READING_LEVELS = [1, 3, 7, 8];
const MAX_VISIBLE_CHOICES = 3;
const INDEX_SELECTION_STORAGE_KEY = "reading.indexSelection.v1";
const CEFR_A1_WORDS = new Set((window.CEFR_A1_WORDS || []).map((word) => word.toLowerCase()));

const READING_VARIANTS = [
  { key: "very-short", level: 1, label: "Very Short", note: "tiny starter reading" },
  { key: "short", level: 3, label: "Short", note: "compact classroom reading" },
  { key: "long", level: 7, label: "Long", note: "fuller story reading" },
  { key: "very-long", level: 8, label: "Very Long", note: "extended classroom reading" },
];

const GLOSSARY_NOTES = [
  // introducedFromId means the noun is treated as already known from that ID onward.
  { headword: "arrow", terms: ["arrow", "arrows"], note: "a picture that shows where to go" },
  { headword: "astronomy", terms: ["astronomy"], note: "the study of stars and space" },
  { headword: "backward", terms: ["backward"], note: "to the back; the opposite way" },
  { headword: "board", terms: ["board", "boards"], note: "a flat place for writing or showing things" },
  { headword: "bottle", terms: ["bottle", "bottles"], note: "a small thing that can have water in it" },
  { headword: "brass", terms: ["brass"], note: "a yellow hard thing" },
  { headword: "brave", terms: ["brave"], note: "not afraid; ready to do something hard" },
  { headword: "calligraphy", terms: ["calligraphy"], note: "beautiful writing with a pen" },
  { headword: "ceiling", terms: ["ceiling"], note: "the high part in a room" },
  { headword: "committee", terms: ["committee"], note: "a group that does a special job" },
  { headword: "confused", terms: ["confused"], note: "not understanding well" },
  { headword: "crooked", terms: ["crooked"], note: "not in a right line" },
  { headword: "curtain", terms: ["curtain", "curtains"], note: "a thing by a window" },
  { headword: "detective", terms: ["detective", "detectives"], note: "a person who finds out what happened" },
  { headword: "die", terms: ["die", "dice"], note: "a small game thing with numbers" },
  { headword: "directions", terms: ["direction", "directions"], note: "words that tell where or how to go" },
  { headword: "disk", terms: ["disk", "disks"], note: "a small flat thing" },
  { headword: "duty", terms: ["duty"], note: "work you have to do" },
  { headword: "embarrassed", terms: ["embarrassed"], note: "feeling bad because others see a mistake" },
  { headword: "engineer", terms: ["engineer", "engineers"], note: "a person who makes machines" },
  { headword: "entrance", terms: ["entrance"], note: "a place where you go in" },
  { headword: "footprint", terms: ["footprint", "footprints"], note: "a picture from a foot" },
  { headword: "fountain", terms: ["fountain"], note: "a place where water comes up" },
  { headword: "gate", terms: ["gate", "gates"], note: "a place you can open and close" },
  { headword: "glove", terms: ["glove", "gloves"], note: "something you wear on your hand" },
  { headword: "goal", terms: ["goal", "goals"], note: "a place to send a ball in a game" },
  { headword: "guard", terms: ["guard", "guards"], note: "a person who watches a place" },
  { headword: "handle", terms: ["handle", "handles"], note: "the part you use to open or carry something" },
  { headword: "haunted", terms: ["haunted"], note: "with a bad story feeling" },
  { headword: "hill", terms: ["hill", "hills"], note: "a small high place of land" },
  { headword: "impossible", terms: ["impossible"], note: "not possible; you cannot do it" },
  { headword: "invitation", terms: ["invitation"], note: "a message asking someone to come" },
  { headword: "kindness", terms: ["kindness"], note: "being good to others" },
  { headword: "lantern", terms: ["lantern", "lanterns"], note: "a light you can carry" },
  { headword: "library", terms: ["library", "libraries"], note: "a place with many books" },
  { headword: "map", terms: ["map", "maps"], note: "a picture that shows places" },
  { headword: "mayor", terms: ["mayor"], note: "the head person of a town or city" },
  { headword: "midnight", terms: ["midnight"], note: "twelve o'clock at night" },
  { headword: "mirror", terms: ["mirror", "mirrors"], note: "glass that shows your face or a room" },
  { headword: "moon", terms: ["moon", "moons"], note: "the night light we see outside" },
  { headword: "narrow", terms: ["narrow"], note: "not big across" },
  { headword: "notebook", terms: ["notebook", "notebooks"], note: "a book for writing notes" },
  { headword: "orbit", terms: ["orbit"], note: "the way one thing goes around another in space" },
  { headword: "platform", terms: ["platform", "platforms"], note: "a high flat place at a station" },
  { headword: "pocket", terms: ["pocket", "pockets"], note: "a small place in clothes or a bag" },
  { headword: "polite", terms: ["polite"], note: "kind and nice in how you speak or do things" },
  { headword: "poster", terms: ["poster", "posters"], note: "a large paper on a wall" },
  { headword: "prize", terms: ["prize", "prizes"], note: "something you get when you win" },
  { headword: "purpose", terms: ["purpose"], note: "the reason for doing something" },
  { headword: "recipe", terms: ["recipe", "recipes"], note: "words that tell how to cook food" },
  { headword: "ribbon", terms: ["ribbon", "ribbons"], note: "a long small thing for a present or hair" },
  { headword: "rival", terms: ["rival", "rivals"], note: "someone you try to win with" },
  { headword: "robot", terms: ["robot", "robots"], note: "a machine that can do work" },
  { headword: "roof", terms: ["roof", "roofs"], note: "the high part of a building" },
  { headword: "satellite", terms: ["satellite", "satellites"], note: "a machine that moves around a world" },
  { headword: "scissors", terms: ["scissors"], note: "a thing to cut paper" },
  { headword: "secret", terms: ["secret", "secrets"], note: "something only a few people know" },
  { headword: "shadow", terms: ["shadow", "shadows"], note: "a dark place from light" },
  { headword: "sharp", terms: ["sharp"], note: "can cut well" },
  { headword: "shelf", terms: ["shelf", "shelves"], note: "a flat place on a wall for things" },
  { headword: "shrine", terms: ["shrine", "shrines"], note: "a special place" },
  { headword: "signal", terms: ["signal", "signals"], note: "a light, sound, or picture that sends a message" },
  { headword: "soldier", terms: ["soldier", "soldiers"], note: "a person with a country job" },
  { headword: "station", terms: ["station", "stations"], note: "a place where trains or buses stop" },
  { headword: "statue", terms: ["statue", "statues"], note: "a hard thing that looks like a person or animal" },
  { headword: "stone", terms: ["stone", "stones"], note: "a small hard thing from outside" },
  { headword: "storage", terms: ["storage"], note: "a place for keeping things" },
  { headword: "string", terms: ["string", "strings"], note: "a long small line for things" },
  { headword: "temporary", terms: ["temporary"], note: "for a short time only" },
  { headword: "ticket", terms: ["ticket", "tickets"], note: "a small paper for a train, bus, or event" },
  { headword: "treasure", terms: ["treasure"], note: "something very special" },
  { headword: "umbrella", terms: ["umbrella", "umbrellas"], note: "a thing used in rain" },
  { headword: "volunteer", terms: ["volunteer", "volunteers"], note: "a person who helps without money" },
  { headword: "warning", terms: ["warning", "warnings"], note: "words or pictures that tell you about a bad thing" },
  { headword: "whistle", terms: ["whistle", "whistles"], note: "a small thing that makes a big sound" },
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
  { id: "GDM-1", variant: "very-short", level: 1, slug: "graded-story" },
  { id: "GDM-1", variant: "very-short", level: 1, slug: "blue-lunch-box" },
  { id: "GDM-1", variant: "very-short", level: 1, slug: "bread-shop" },
  { id: "GDM-1", variant: "very-short", level: 1, slug: "star-bus" },
  { id: "GDM-1", variant: "very-short", level: 1, slug: "silver-stone" },
  { id: "GDM-1", variant: "very-short", level: 1, slug: "red-bag-path" },
  { id: "GDM-1", variant: "very-short", level: 1, slug: "wrong-robot" },
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
  { id: "NH1-1-3-CAN-Q", variant: "long", level: 7, slug: "principal-dance" },
  { id: "NH1-1-5-2-DONTBE", variant: "short", level: 3, slug: "wrong-robot" },
  { id: "NH1-1-5-2-DONTBE", variant: "long", level: 7, slug: "dont-be-a-hero" },
  { id: "NH1-1-6-V", variant: "short", level: 3, slug: "window-note" },
  { id: "NH1-1-8-3-WHY", variant: "short", level: 3, slug: "moon-cup" },
  { id: "NH1-1-10-V", variant: "long", level: 7, slug: "rainy-club-map" },
  { id: "NH1-1-11-1-MAYBE", variant: "long", level: 7, slug: "can-clock-sing" },
  { id: "NH2-2-1-3-SVOO", variant: "short", level: 3, slug: "bread-shop" },
  { id: "NH2-2-1-3-SVOO", variant: "long", level: 7, slug: "gift-lesson" },
  { id: "NH2-2-2-4-BECAUSE", variant: "short", level: 3, slug: "wrong-robot" },
  { id: "NH2-2-2-4-BECAUSE", variant: "long", level: 7, slug: "hat-said-no" },
  { id: "NH2-2-3-1-SHOULD", variant: "long", level: 7, slug: "dont-be-a-hero" },
  { id: "NH2-2-4-1-HAVE-TO", variant: "long", level: 7, slug: "gift-lesson" },
  { id: "NH2-2-5-1-HOW-TO", variant: "short", level: 3, slug: "moon-cup" },
  { id: "NH2-2-5-1-HOW-TO", variant: "long", level: 7, slug: "dice-gate" },
  { id: "NH2-2-6-MORE-THAN", variant: "short", level: 3, slug: "bread-shop" },
  { id: "NH2-2-7-2-VOICE", variant: "long", level: 7, slug: "gift-lesson" },
  { id: "NH2-2-7-2-VOICE", variant: "long", level: 7, slug: "cake-was-moved" },
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
  { id: "GDM-22", variant: "short", level: 3, slug: "signal-under-water" },
  { id: "NH1-1-6-V", variant: "short", level: 3, slug: "orbit-note" },
  { id: "NH1-1-8-3-WHY", variant: "short", level: 3, slug: "why-moon-robot" },
  { id: "NH1-1-11-1-MAYBE", variant: "short", level: 3, slug: "maybe-mars-window" },
  { id: "NH2-2-7-2-VOICE", variant: "long", level: 7, slug: "station-was-moved" },
  { id: "GDM-37-4", variant: "long", level: 7, slug: "where-the-roof-door" },
  { id: "NH1-1-10-V", variant: "long", level: 7, slug: "traveling-shadow-ticket" },
  { id: "NH2-2-2-4-BECAUSE", variant: "long", level: 7, slug: "because-the-wall-listened" },
  { id: "NH2-2-5-1-HOW-TO", variant: "long", level: 7, slug: "how-to-read-the-stone" },
  { id: "NH2-2-6-MORE-THAN", variant: "long", level: 7, slug: "more-than-one-moon" },
  { id: "NH2-2-7-2-VOICE", variant: "very-long", level: 8, slug: "locked-umbrella-room" },
  { id: "NH2-2-7-2-VOICE", variant: "very-long", level: 8, slug: "last-seat-table" },
  { id: "NH2-2-7-2-VOICE", variant: "very-long", level: 8, slug: "library-moved" },
  { id: "NH2-2-7-2-VOICE", variant: "very-long", level: 8, slug: "moon-lantern-path" },
  { id: "NH2-2-7-2-VOICE", variant: "very-long", level: 8, slug: "folded-map-race" },
  { id: "NH2-2-7-2-VOICE", variant: "very-long", level: 8, slug: "jaio-pudding-case" },
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
  {
    level: 8,
    id: "NH2-2-7-2-VOICE",
    stage: "Assumed grading: Very Long. Extended reading of about 650-900 words, multiple scenes, stronger character arcs, clear comedy or mystery turns, and natural review of the selected ID target item.",
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

function storyGenres(story) {
  return story.genres || story.genre.split("/").map((genre) => genre.trim());
}

function storyGenreLabel(story) {
  return storyGenres(story).join(" / ");
}

function storyMatchesGenre(story, genre) {
  return genre === "all" || storyGenres(story).some((item) => item.toLowerCase() === genre);
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

function uniqueStoryVariantChoices(choices) {
  const byStoryVariant = new Map();
  choices.forEach((choice) => {
    byStoryVariant.set(`${choice.item.slug}:${choice.item.variant}`, choice);
  });
  return Array.from(byStoryVariant.values())
    .sort((a, b) => progressIndex(a.item.id) - progressIndex(b.item.id));
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

function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function glossaryPattern(terms) {
  return new RegExp(`\\b(${terms.map(escapeRegExp).join("|")})\\b`, "i");
}

function glossaryTermIsCefrA1(term) {
  const normalized = term.toLowerCase();
  if (CEFR_A1_WORDS.has(normalized)) return true;
  if (normalized.endsWith("ies") && CEFR_A1_WORDS.has(`${normalized.slice(0, -3)}y`)) return true;
  if (normalized.endsWith("es") && CEFR_A1_WORDS.has(normalized.slice(0, -2))) return true;
  return normalized.endsWith("s") && CEFR_A1_WORDS.has(normalized.slice(0, -1));
}

function glossaryMatchIndex(text, terms) {
  return terms
    .filter((term) => !glossaryTermIsCefrA1(term))
    .map((term) => text.search(glossaryPattern([term])))
    .filter((index) => index >= 0)
    .sort((a, b) => a - b)[0] ?? -1;
}

function glossaryEntryIsNewForId(entry, id) {
  if (!entry.introducedFromId) return true;
  const currentIndex = progressIndex(id);
  const introducedIndex = progressIndex(entry.introducedFromId);
  if (currentIndex < 0 || introducedIndex < 0) return true;
  return currentIndex < introducedIndex;
}

function glossaryNotesForText(text, id) {
  return GLOSSARY_NOTES.filter((entry) => glossaryEntryIsNewForId(entry, id))
    .map((entry) => ({
    ...entry,
    index: glossaryMatchIndex(text, entry.terms),
  }))
    .filter((entry) => entry.index >= 0)
    .sort((a, b) => a.index - b.index || a.headword.localeCompare(b.headword, "en"));
}

function textWithFootnotes(text, notes) {
  if (!notes.length) return text;
  const lines = notes.map((entry) => `${entry.headword}: ${entry.note}`);
  return `${text}\n\nFootnotes\n${lines.join("\n")}`;
}

function appendFootnotes(section, notes) {
  if (!notes.length) return;

  const aside = document.createElement("aside");
  aside.className = "footnotes";

  const heading = document.createElement("h3");
  heading.textContent = "Footnotes";
  aside.appendChild(heading);

  const list = document.createElement("ol");
  notes.forEach((entry) => {
    const item = document.createElement("li");
    const term = document.createElement("strong");
    term.textContent = entry.headword;
    item.appendChild(term);
    item.append(`: ${entry.note}`);
    list.appendChild(item);
  });

  aside.appendChild(list);
  section.appendChild(aside);
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
  const notes = glossaryNotesForText(bodyText, info.id);
  appendTextActions(section, textWithFootnotes(bodyText, notes), filename);
  textToBlocks(text).slice(1).forEach((block) => appendParagraph(section, block));
  appendFootnotes(section, notes);
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
  const limitText = selectedId === "all" ? "Showing all matching choices" : `Showing up to ${MAX_VISIBLE_CHOICES} choices`;
  summary.textContent = `${idText}. ${limitText} from ${scopeText}. Length: ${variant.label} (${variant.note}).`;
  container.appendChild(summary);

  const list = document.createElement("div");
  list.className = "choice-grid";
  const matchingChoices = CONTENT_ITEMS.filter((item) => recentIds.has(item.id) && (variant.key === "all" || item.variant === variant.key))
    .map((item) => ({ item, story: storyBySlug(item.slug) }))
    .filter(({ story, item }) => story && storySupportsLevel(story, item.level))
    .filter(({ story }) => storyMatchesGenre(story, genre))
    .sort((a, b) => progressIndex(a.item.id) - progressIndex(b.item.id));
  const uniqueChoices = uniqueStoryVariantChoices(matchingChoices);
  const storyChoices = selectedId === "all" ? uniqueChoices : uniqueChoices.slice(-MAX_VISIBLE_CHOICES).reverse();

  if (!storyChoices.length) {
    const emptyText =
      selectedId === "all"
        ? "No stories match this genre and length yet."
        : "No stories match this genre and length near this ID yet. Choose ID: All to search every story.";
    appendParagraph(container, emptyText, "note");
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
    genreText.textContent = `${storyGenreLabel(story)} / ${item.id}${progress ? ` / ${progress.label}` : ""}`;
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

function storySortTitle(title) {
  return title.toLowerCase();
}

function renderStoryPicker(root) {
  const select = root.querySelector("[data-story-select]");
  const linkContainer = root.querySelector("[data-story-link]");
  if (!select || !linkContainer) return;

  const sortedStories = [...STORIES].sort((a, b) => storySortTitle(a.title).localeCompare(storySortTitle(b.title), "en"));
  select.textContent = "";

  sortedStories.forEach((story) => {
    const option = document.createElement("option");
    option.value = story.slug;
    option.textContent = `${story.title} / ${storyGenreLabel(story)}`;
    select.appendChild(option);
  });

  const renderLink = () => {
    const story = storyBySlug(select.value);
    linkContainer.textContent = "";
    if (!story) return;
    const link = document.createElement("a");
    link.href = `lessons/${story.slug}/index.html`;
    link.textContent = `Open ${story.title}`;
    linkContainer.appendChild(link);
  };

  select.addEventListener("change", renderLink);
  renderLink();
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
  renderStoryPicker(root);
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
