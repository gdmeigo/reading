const STORIES = [
  {
    slug: "graded-story",
    title: "The Little Door",
    genre: "Mystery",
    levels: [1, 2, 3, 4, 5, 6, 7],
    levelTitles: {
      3: "The Little Door, Part 1",
      7: "The Little Door, Part 2",
    },
  },
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
  { slug: "another-door-opens", title: "Another Door Opens", genre: "Mystery", levels: [3] },
  { slug: "echo-on-the-moon", title: "Echo on the Moon", genre: "SF", levels: [3] },
  { slug: "inside-the-kite", title: "Inside the Kite", genre: "Human Drama", levels: [3] },
  { slug: "jiro-quiet-joke", title: "Jiro's Quiet Joke", genre: "Comedy", levels: [3] },
  { slug: "kaito-key-map", title: "Kaito's Key Map", genre: "Adventure", levels: [3] },
  { slug: "noa-night-door", title: "Noa and the Night Door", genre: "Fantasy / Adventure", genres: ["Fantasy", "Adventure"], levels: [3] },
  { slug: "under-red-desk", title: "Under the Red Desk", genre: "Mystery", levels: [3] },
  { slug: "voices-in-wall", title: "Voices in the Wall", genre: "Mystery", levels: [3] },
  { slug: "x-marks-lunch-box", title: "X Marks the Lunch Box", genre: "Adventure", levels: [3] },
  { slug: "yuna-thank-you-note", title: "Yuna's Thank-You Note", genre: "Human Drama", levels: [3] },
  { slug: "zero-at-station", title: "Zero at the Station", genre: "SF", levels: [3] },
  { slug: "green-glass-signal", title: "Green Glass Signal", genre: "SF", levels: [3] },
  { slug: "lost-library-card", title: "Lost Library Card", genre: "Human Drama", levels: [3] },
  { slug: "open-on-monday", title: "Open on Monday", genre: "Comedy", levels: [3] },
  { slug: "paper-star-plan", title: "Paper Star Plan", genre: "Fantasy", levels: [3] },
  { slug: "quiet-question", title: "Quiet Question", genre: "Mystery", levels: [3] },
];

const DEFAULT_STORY_LEVELS = [1, 2, 3, 4, 5, 6];
const TARGET_READING_LEVELS = [3, 7, 8];
const MAX_VISIBLE_CHOICES = 3;
const INDEX_SELECTION_STORAGE_KEY = "reading.indexSelection.v1";
const CUSTOM_GRADES_STORAGE_KEY = "reading.customGrades.v1";
const CUSTOM_GRADES_SCHEMA_VERSION = 4;
const FEEDBACK_ISSUE_URL = "https://github.com/gdmeigo/reading/issues/new";
const FEEDBACK_THANKS_TEXT = "Thank you for the feedback. We will review it.";
const CEFR_A1_WORDS = new Set((window.CEFR_A1_WORDS || []).map((word) => word.toLowerCase()));

const GRAMMAR_AUDIT_TOKENS = {
  S: "(?:I|you|he|she|it|we|they|this|that|these|those|[A-Z][a-z]+|the\\s+[A-Za-z']+|a\\s+[A-Za-z']+)",
  V: "(?:[A-Za-z']+)",
  O: "(?:me|you|him|her|it|us|them|this|that|these|those|[A-Z][a-z]+|the\\s+[A-Za-z']+|a\\s+[A-Za-z']+|[A-Za-z']+)",
  C: "(?:here|there|open|shut|happy|ready|good|bad|big|small|new|old|red|green|different|the\\s+same|[A-Za-z']+)",
  BE: "(?:am|are|is|was|were|be|been|being)",
  DO: "(?:do|does|did)",
  SEE: "(?:see|sees|saw)",
  VING: "(?:[A-Za-z']+ing)",
};

const SUPPRESSED_DETECTION_TERM_IDS = new Set(["GDM-41-6", "GDM-45-3B", "GDM-49-3", "GDM-49-4", "NH1-1-11-DID-Q"]);

const BUILT_IN_AUDIT_PATTERNS = {
  "GDM-1": ["/\\b(?:you|he|she|it)\\b/"],
  "GDM-10": ["/\\bthis\\s+book\\s+is\\b/"],
  "GDM-11-1": ["/\\b(?:in|on)\\b/"],
  "GDM-11-3": ["/\\bthe\\b/"],
  "GDM-18A": ["/\\b[A-Z][a-z]+['\\u2019]s\\b/"],
  "GDM-18B": ["/\\bthe\\s+man['\\u2019]s\\b/"],
  "GDM-22": ["/\\bwater\\b/", "/\\bthese\\s+\\w+s\\s+(?:are|were)\\b/", "/\\bthose\\s+\\w+s\\s+(?:are|were)\\b/", "/\\bthem\\b/"],
  "GDM-30-2": ["/\\b(?:is|are|am|was|were)\\b[^.?!]*\\?/"],
  "GDM-30-3": ["/\\bare\\s+these\\b[^.?!]*\\?/"],
  "GDM-30-5": ["/\\b(?:my|your|his|her|our|their|[A-Z][a-z]+['\\u2019]s)\\b[^.?!]*\\?/"],
  "GDM-37-4": ["/\\bwhere\\b/"],
  "GDM-41-4": ["/\\b(?:what|where|who|which)\\s+do\\s+{S}\\s+see\\b[^.?!]*\\?/", "/\\bdo\\s+{S}\\s+see\\b[^.?!]*\\?/"],
  "GDM-41-5": ["/\\b(?:what|where|who|which)\\s+does\\s+{S}\\s+see\\b[^.?!]*\\?/", "/\\bdoes\\s+{S}\\s+see\\b[^.?!]*\\?/"],
  "GDM-41-8": ["/\\bdid\\s+{S}\\s+see\\b[^.?!]*\\?/"],
  "GDM-45-2": ["/\\b(?:is|are|am|was|were)\\b[^.?!]*\\?/"],
  "GDM-49-3": ["/\\bno\\s+{O}\\s+or\\s+{O}\\b/"],
  "GDM-49-4": ["/\\b(?:is|are|am|was|were|do|does|did|can|will|would|should)\\b[^.?!]*\\b{O}\\s+or\\s+{O}\\b[^.?!]*\\?/"],
  "GDM-64A": ["/\\bdid\\s+{S}\\s+(?:give|put|go)\\b[^.?!]*\\?/"],
  "GDM-77-1": ["/\\b(?:is|are|am|was|were)\\s+\\w+ing\\b[^.?!]*\\?/"],
  "GDM-77-2": ["/\\bwhat\\s+(?:is|are|am|was|were)\\s+\\w+\\s+doing\\b[^.?!]*\\?/"],
  "NH1-0-FAMILY": ["/\\b(?:brother|sister|mother|father|grandfather|grandmother|family)\\b/"],
  "NH1-1-1-BEV-Q": ["/\\b(?:is|are|am|was|were)\\b[^.?!]*\\?/"],
  "NH1-1-1-V": ["/\\b(?:drink|drinks|drank|play|plays|played|watch|watches|watched|speak|speaks|spoke|study|studies|studied|read|reads|reading)\\b/"],
  "NH1-1-2-V": ["/\\b(?:walk|walks|walked|walking|have|has|eat|eats|ate|eating)\\b/"],
  "NH1-1-3-CAN-Q": ["/\\bcan\\b[^.?!]*\\?/"],
  "NH1-1-3-2-HOW-MANY": ["/\\bhow\\s+many\\b/"],
  "NH1-1-4-1-DONT": ["/\\bdon['\\u2019]t\\b/"],
  "NH1-1-4-1-BE": ["/^Be\\b/m"],
  "NH1-1-8-3-EXCLAMATION": ["/\\bWhat\\s+a\\s+\\w+/"],
  "NH1-1-5-2-DONTBE": ["/\\bdon['\\u2019]t\\s+be\\b/"],
  "NH1-1-6-V": ["/\\b(?:write|writes|wrote|written|writing)\\b/"],
  "NH1-1-7-V": ["/\\b(?:know|knows|knew|make|makes|made|buy|buys|bought|making|buying)\\b/"],
  "NH1-1-8-3-WHY": ["/\\bwhy\\b/"],
  "NH1-1-10-V": ["/\\b(?:travel|travels|traveled|traveling|visit|visits|visited|listen|listens|listened|spend|spends|spent|stand|stands|stood|feel|feels|felt)\\b/", "/\\bget\\s+up\\b/", "/\\bgot\\s+up\\b/"],
  "NH1-1-11-1-MAYBE": ["/\\bmaybe\\b/"],
  "NH2-2-1-3-SVOO": ["/\\b(?:show|shows|showed|teach|teaches|taught|give|gives|gave|given|giving)\\b/"],
  "NH2-2-2-4-BECAUSE": ["/\\bbecause\\b/"],
  "NH2-2-3-1-SHOULD": ["/\\bshould\\b/"],
  "NH2-2-4-1-HAVE-TO": ["/\\b(?:have|has|had)\\s+to\\b/"],
  "NH2-2-5-1-HOW-TO": ["/\\bhow\\s+to\\b/"],
  "NH2-2-6-MORE-THAN": ["/\\bmore\\s+than\\b/", "/\\bhalf\\b/"],
  "NH2-2-7-2-VOICE": ["/\\b(?:am|are|is|was|were|be|been)\\s+(?:moved|washed|cut|made|written|opened|closed|locked|found|seen|given|shown|sent|called|built|left|taken)\\b/", "/\\b(?:was|were)\\s+\\w+(?:ed|en)\\s+by\\b/"],
};

const READING_VARIANTS = [
  { key: "short", level: 3, label: "Short", note: "compact classroom reading" },
  { key: "long", level: 7, label: "Long", note: "fuller story reading" },
  { key: "very-long", level: 8, label: "Very Long", note: "extended classroom reading" },
];

const GLOSSARY_NOTES = [
  // introducedFromId means the noun is treated as already known from that ID onward.
  { headword: "arrow", terms: ["arrow", "arrows"], note: "a picture that shows where to go" },
  { headword: "astronomy", terms: ["astronomy"], note: "the study of stars and space" },
  { headword: "backward", terms: ["backward"], note: "to the back; the opposite way" },
  { headword: "balloon", terms: ["balloon", "balloons"], note: "a light thing full of air" },
  { headword: "bathtub", terms: ["bathtub", "bathtubs"], note: "a big bath" },
  { headword: "bell", terms: ["bell", "bells"], note: "a thing that makes a sound" },
  { headword: "bench", terms: ["bench", "benches"], note: "a long thing for people to sit on" },
  { headword: "board", terms: ["board", "boards"], note: "a flat place for writing or showing things" },
  { headword: "bookmark", terms: ["bookmark", "bookmarks"], note: "a small thing that shows a place in a book" },
  { headword: "bow", terms: ["bow", "bows", "bowed"], note: "move your head down to say thank you" },
  { headword: "bottom", terms: ["bottom"], note: "the part under other parts" },
  { headword: "bottle", terms: ["bottle", "bottles"], note: "a small thing that can have water in it" },
  { headword: "brass", terms: ["brass"], note: "a yellow hard thing" },
  { headword: "breath", terms: ["breath"], note: "air from your mouth" },
  { headword: "brave", terms: ["brave"], note: "not afraid; ready to do something hard" },
  { headword: "bucket", terms: ["bucket", "buckets"], note: "a thing for water" },
  { headword: "button", terms: ["button", "buttons"], note: "a small thing you use on a machine" },
  { headword: "calligraphy", terms: ["calligraphy"], note: "beautiful writing with a pen" },
  { headword: "candy", terms: ["candy"], note: "food with sugar" },
  { headword: "ceiling", terms: ["ceiling"], note: "the high part in a room" },
  { headword: "circle", terms: ["circle", "circles"], note: "a line that goes around" },
  { headword: "clue", terms: ["clue", "clues"], note: "a thing that helps you find the answer" },
  { headword: "coin", terms: ["coin", "coins"], note: "small money" },
  { headword: "committee", terms: ["committee"], note: "a group that does a special job" },
  { headword: "cookie", terms: ["cookie", "cookies"], note: "small food with sugar" },
  { headword: "conversation", terms: ["conversation", "conversations"], note: "talk with someone" },
  { headword: "crown", terms: ["crown", "crowns"], note: "a head thing for a special person" },
  { headword: "confused", terms: ["confused"], note: "not understanding well" },
  { headword: "crooked", terms: ["crooked"], note: "not in a right line" },
  { headword: "curtain", terms: ["curtain", "curtains"], note: "a thing by a window" },
  { headword: "danger", terms: ["danger"], note: "a bad thing can happen" },
  { headword: "detective", terms: ["detective", "detectives"], note: "a person who finds out what happened" },
  { headword: "die", terms: ["die", "dice"], note: "a small game thing with numbers" },
  { headword: "directions", terms: ["direction", "directions"], note: "words that tell where or how to go" },
  { headword: "disk", terms: ["disk", "disks"], note: "a small flat thing" },
  { headword: "drum", terms: ["drum", "drums"], note: "a music thing you play with hands" },
  { headword: "duty", terms: ["duty"], note: "work you have to do" },
  { headword: "echo", terms: ["echo", "echoes"], note: "a sound that comes back" },
  { headword: "empty", terms: ["empty"], note: "with nothing in it" },
  { headword: "embarrassed", terms: ["embarrassed"], note: "feeling bad because others see a mistake" },
  { headword: "engineer", terms: ["engineer", "engineers"], note: "a person who makes machines" },
  { headword: "entrance", terms: ["entrance"], note: "a place where you go in" },
  { headword: "fence", terms: ["fence", "fences"], note: "a wall outside" },
  { headword: "flashlight", terms: ["flashlight", "flashlights"], note: "a small light you can carry" },
  { headword: "fog", terms: ["fog"], note: "white air that makes it hard to see" },
  { headword: "footprint", terms: ["footprint", "footprints"], note: "a picture from a foot" },
  { headword: "forest", terms: ["forest", "forests"], note: "a place with many trees" },
  { headword: "fountain", terms: ["fountain"], note: "a place where water comes up" },
  { headword: "gate", terms: ["gate", "gates"], note: "a place you can open and close" },
  { headword: "gold", terms: ["gold"], note: "a yellow thing like money" },
  { headword: "grass", terms: ["grass"], note: "small green plants outside" },
  { headword: "grandfather", terms: ["grandfather"], note: "an old man in your family" },
  { headword: "glove", terms: ["glove", "gloves"], note: "something you wear on your hand" },
  { headword: "goal", terms: ["goal", "goals"], note: "a place to send a ball in a game" },
  { headword: "guard", terms: ["guard", "guards"], note: "a person who watches a place" },
  { headword: "hall", terms: ["hall", "halls"], note: "a long place in a building" },
  { headword: "handle", terms: ["handle", "handles"], note: "the part you use to open or carry something" },
  { headword: "haunted", terms: ["haunted"], note: "with a bad story feeling" },
  { headword: "hill", terms: ["hill", "hills"], note: "a small high place of land" },
  { headword: "hole", terms: ["hole", "holes"], note: "an open place in something" },
  { headword: "impossible", terms: ["impossible"], note: "not possible; you cannot do it" },
  { headword: "invitation", terms: ["invitation"], note: "a message asking someone to come" },
  { headword: "kindness", terms: ["kindness"], note: "being good to others" },
  { headword: "knife", terms: ["knife", "knives"], note: "a thing to cut food" },
  { headword: "kite", terms: ["kite", "kites"], note: "a paper thing that goes up outside" },
  { headword: "lantern", terms: ["lantern", "lanterns"], note: "a light you can carry" },
  { headword: "librarian", terms: ["librarian", "librarians"], note: "a person who works in a library" },
  { headword: "library", terms: ["library", "libraries"], note: "a place with many books" },
  { headword: "magic", terms: ["magic"], note: "something not real in a story" },
  { headword: "mark", terms: ["mark", "marks"], note: "a small picture or line" },
  { headword: "map", terms: ["map", "maps"], note: "a picture that shows places" },
  { headword: "marker", terms: ["marker", "markers"], note: "a pen for big writing" },
  { headword: "math", terms: ["math"], note: "school work with numbers" },
  { headword: "mayor", terms: ["mayor"], note: "the head person of a town or city" },
  { headword: "metal", terms: ["metal"], note: "a hard thing like money" },
  { headword: "midnight", terms: ["midnight"], note: "twelve o'clock at night" },
  { headword: "mirror", terms: ["mirror", "mirrors"], note: "glass that shows your face or a room" },
  { headword: "mop", terms: ["mop", "mops"], note: "a thing to clean a floor" },
  { headword: "moon", terms: ["moon", "moons"], note: "the night light we see outside" },
  { headword: "mystery", terms: ["mystery", "mysteries"], note: "a question in a story" },
  { headword: "narrow", terms: ["narrow"], note: "not big across" },
  { headword: "nod", terms: ["nod", "nods", "nodded"], note: "move your head up and down to say yes" },
  { headword: "notebook", terms: ["notebook", "notebooks"], note: "a book for writing notes" },
  { headword: "orbit", terms: ["orbit"], note: "the way one thing goes around another in space" },
  { headword: "packet", terms: ["packet", "packets"], note: "a small paper bag" },
  { headword: "parade", terms: ["parade", "parades"], note: "many people walking for a special day" },
  { headword: "platform", terms: ["platform", "platforms"], note: "a high flat place at a station" },
  { headword: "plate", terms: ["plate", "plates"], note: "a thing for food" },
  { headword: "pocket", terms: ["pocket", "pockets"], note: "a small place in clothes or a bag" },
  { headword: "polite", terms: ["polite"], note: "kind and nice in how you speak or do things" },
  { headword: "pointer", terms: ["pointer", "pointers"], note: "a thing that shows where to look" },
  { headword: "poster", terms: ["poster", "posters"], note: "a large paper on a wall" },
  { headword: "prize", terms: ["prize", "prizes"], note: "something you get when you win" },
  { headword: "principal", terms: ["principal", "principals"], note: "the head teacher of a school" },
  { headword: "purpose", terms: ["purpose"], note: "the reason for doing something" },
  { headword: "pudding", terms: ["pudding"], note: "food with milk and sugar" },
  { headword: "pump", terms: ["pump", "pumps"], note: "a thing that moves air or water" },
  { headword: "recipe", terms: ["recipe", "recipes"], note: "words that tell how to cook food" },
  { headword: "recorder", terms: ["recorder", "recorders"], note: "a small music thing you play with your mouth" },
  { headword: "radio", terms: ["radio", "radios"], note: "a thing that sends sound" },
  { headword: "robot", terms: ["robot", "robots"], note: "a machine that can do work" },
  { headword: "ribbon", terms: ["ribbon", "ribbons"], note: "a long small thing for a present or hair" },
  { headword: "rival", terms: ["rival", "rivals"], note: "someone you try to win with" },
  { headword: "rocket", terms: ["rocket", "rockets"], note: "a machine that goes into space" },
  { headword: "roll", terms: ["roll", "rolls"], note: "small bread" },
  { headword: "rope", terms: ["rope", "ropes"], note: "a long strong line" },
  { headword: "roof", terms: ["roof", "roofs"], note: "the high part of a building" },
  { headword: "round", terms: ["round"], note: "like a ball" },
  { headword: "ruler", terms: ["ruler", "rulers"], note: "a thing to see how long something is" },
  { headword: "satellite", terms: ["satellite", "satellites"], note: "a machine that moves around a world" },
  { headword: "sauce", terms: ["sauce", "sauces"], note: "food like water on food" },
  { headword: "screen", terms: ["screen", "screens"], note: "a place on a computer that shows things" },
  { headword: "scissors", terms: ["scissors"], note: "a thing to cut paper" },
  { headword: "secret", terms: ["secret", "secrets"], note: "something only a few people know" },
  { headword: "shadow", terms: ["shadow", "shadows"], note: "a dark place from light" },
  { headword: "shine", terms: ["shine", "shines", "shining", "shone"], note: "to make light" },
  { headword: "sharp", terms: ["sharp"], note: "can cut well" },
  { headword: "shelf", terms: ["shelf", "shelves"], note: "a flat place on a wall for things" },
  { headword: "shrine", terms: ["shrine", "shrines"], note: "a special place" },
  { headword: "signal", terms: ["signal", "signals"], note: "a light, sound, or picture that sends a message" },
  { headword: "sign", terms: ["sign", "signs"], note: "words or a picture that tell something" },
  { headword: "silver", terms: ["silver"], note: "a light color" },
  { headword: "sky", terms: ["sky"], note: "the high place over us outside" },
  { headword: "soft", terms: ["soft"], note: "not hard" },
  { headword: "soldier", terms: ["soldier", "soldiers"], note: "a person with a country job" },
  { headword: "spaceship", terms: ["spaceship", "spaceships"], note: "a machine for space" },
  { headword: "square", terms: ["square", "squares"], note: "a picture with four same lines" },
  { headword: "stairs", terms: ["stair", "stairs"], note: "things you walk up or down" },
  { headword: "stage", terms: ["stage", "stages"], note: "a place where people play music or speak" },
  { headword: "station", terms: ["station", "stations"], note: "a place where trains or buses stop" },
  { headword: "statue", terms: ["statue", "statues"], note: "a hard thing that looks like a person or animal" },
  { headword: "stone", terms: ["stone", "stones"], note: "a small hard thing from outside" },
  { headword: "storage", terms: ["storage"], note: "a place for keeping things" },
  { headword: "strange", terms: ["strange"], note: "not like other things" },
  { headword: "strawberry", terms: ["strawberry", "strawberries"], note: "a small red fruit" },
  { headword: "string", terms: ["string", "strings"], note: "a long small line for things" },
  { headword: "sunset", terms: ["sunset", "sunsets"], note: "the time when the sun goes down" },
  { headword: "sword", terms: ["sword", "swords"], note: "a long thing in an old story" },
  { headword: "tape", terms: ["tape"], note: "a thing that can put paper on a wall" },
  { headword: "tank", terms: ["tank", "tanks"], note: "a big thing with water in it" },
  { headword: "temporary", terms: ["temporary"], note: "for a short time only" },
  { headword: "thin", terms: ["thin"], note: "not big across" },
  { headword: "ticket", terms: ["ticket", "tickets"], note: "a small paper for a train, bus, or event" },
  { headword: "tiny", terms: ["tiny"], note: "very small" },
  { headword: "treasure", terms: ["treasure"], note: "something very special" },
  { headword: "trick", terms: ["trick", "tricks"], note: "something to make people think wrong" },
  { headword: "umbrella", terms: ["umbrella", "umbrellas"], note: "a thing used in rain" },
  { headword: "volunteer", terms: ["volunteer", "volunteers"], note: "a person who helps without money" },
  { headword: "warning", terms: ["warning", "warnings"], note: "words or pictures that tell you about a bad thing" },
  { headword: "wet", terms: ["wet"], note: "with water on it" },
  { headword: "wheel", terms: ["wheel", "wheels"], note: "a thing on a car or bus" },
  { headword: "whistle", terms: ["whistle", "whistles"], note: "a small thing that makes a big sound" },
  { headword: "whisper", terms: ["whisper", "whispers", "whispered"], note: "say words with a very small voice" },
  { headword: "wind", terms: ["wind"], note: "air that moves outside" },
];

let PROGRESS_ITEMS = [
  { id: "GDM-1", series: "GDM", label: "You / He / She / It", words: "You / He / She / It", grammar: "代名詞", targets: "You / He / She / It" },
  { id: "GDM-4-1", series: "GDM", label: "is / here / there", words: "is / here / there", grammar: "be動詞・場所", targets: "is / here / there" },
  { id: "GDM-4-2", series: "GDM", label: "am / are", words: "am / are", grammar: "be動詞", targets: "am / are" },
  { id: "GDM-4-3", series: "GDM", label: "We / They / You", words: "We / They / You", grammar: "代名詞", targets: "We / They / You" },
  { id: "GDM-8-1", series: "GDM", label: "This / That", words: "This / That", grammar: "指示語", targets: "This / That" },
  { id: "GDM-8-2A", series: "GDM", label: "his / her", words: "his / her", grammar: "所有", targets: "his / her" },
  { id: "GDM-8-2B", series: "GDM", label: "my / your (his / her の前に)", words: "my / your (his / her の前に)", grammar: "所有", targets: "my / your (his / her の前に)" },
  { id: "GDM-8-3", series: "GDM", label: "my / your (his / her 学習済み)", words: "my / your (his / her 学習済み)", grammar: "所有", targets: "my / your (his / her 学習済み)" },
  { id: "GDM-8-4", series: "GDM", label: "a man / a woman / a", words: "a man / a woman / a", grammar: "冠詞・人物", targets: "a man / a woman / a" },
  { id: "GDM-10", series: "GDM", label: "This book is", words: "This book is", grammar: "名詞句", targets: "This book is" },
  { id: "GDM-10-2", series: "GDM", label: "My / Your / His / Her book is here", words: "My / Your / His / Her book is here", grammar: "所有・場所", targets: "My / Your / His / Her book is here" },
  { id: "GDM-11-1", series: "GDM", label: "in / on 1回目 (1文)", words: "in / on 1回目 (1文)", grammar: "前置詞", targets: "in / on 1回目 (1文)" },
  { id: "GDM-11-2", series: "GDM", label: "in / on 2回目 (in拡張)", words: "in / on 2回目 (in拡張)", grammar: "前置詞", targets: "in / on 2回目 (in拡張)" },
  { id: "GDM-11-3", series: "GDM", label: "in / on 3,4回目 / the 導入", words: "in / on 3,4回目 / the 導入", grammar: "冠詞・前置詞", targets: "in / on 3,4回目 / the 導入" },
  { id: "GDM-11-4", series: "GDM", label: "in / on 5回目 (on拡張)", words: "in / on 5回目 (on拡張)", grammar: "前置詞", targets: "in / on 5回目 (on拡張)" },
  { id: "GDM-11-5", series: "GDM", label: "in / on 6回目 (a の次の the)", words: "in / on 6回目 (a の次の the)", grammar: "冠詞", targets: "in / on 6回目 (a の次の the)" },
  { id: "GDM-11-6", series: "GDM", label: "in / on 7回目 2文で", words: "in / on 7回目 2文で", grammar: "文連結", targets: "in / on 7回目 2文で" },
  { id: "GDM-13-1", series: "GDM", label: "These / Those", words: "These / Those", grammar: "指示語・複数", targets: "These / Those" },
  { id: "GDM-13-2A", series: "GDM", label: "These / Those / They", words: "These / Those / They", grammar: "指示語・代名詞", targets: "These / Those / They" },
  { id: "GDM-13-2B", series: "GDM", label: "right / left", words: "right / left", grammar: "方向", targets: "right / left" },
  { id: "GDM-14-1", series: "GDM", label: "off", words: "off", grammar: "動作", targets: "off" },
  { id: "GDM-14-2", series: "GDM", label: "taking / took", words: "taking / took", grammar: "動詞 take", targets: "taking / took" },
  { id: "GDM-14-3", series: "GDM", label: "will take", words: "will take", grammar: "未来", targets: "will take" },
  { id: "GDM-15-1", series: "GDM", label: "putting / put", words: "putting / put", grammar: "動詞 put", targets: "putting / put" },
  { id: "GDM-15-2", series: "GDM", label: "will put", words: "will put", grammar: "未来", targets: "will put" },
  { id: "GDM-15-4", series: "GDM", label: "put it on (身につける)", words: "put it on (身につける)", grammar: "句動詞", targets: "put it on (身につける)" },
  { id: "GDM-15-5", series: "GDM", label: "was", words: "was", grammar: "過去 be", targets: "was" },
  { id: "GDM-17", series: "GDM", label: "men / women", words: "men / women", grammar: "複数名詞", targets: "men / women" },
  { id: "GDM-18A", series: "GDM", label: "Aki's / Meg's", words: "Aki's / Meg's", grammar: "所有格", targets: "Aki's / Meg's" },
  { id: "GDM-18B", series: "GDM", label: "the man's", words: "the man's", grammar: "所有格", targets: "the man's" },
  { id: "GDM-19-1", series: "GDM", label: "giving / gave", words: "giving / gave", grammar: "動詞 give", targets: "giving / gave" },
  { id: "GDM-19-2", series: "GDM", label: "will give / him / her", words: "will give / him / her", grammar: "未来・目的語", targets: "will give / him / her" },
  { id: "GDM-21", series: "GDM", label: "(them were)", words: "(them were)", grammar: "代名詞・過去", targets: "(them were)" },
  { id: "GDM-22", series: "GDM", label: "water / These pens are / them", words: "water / These pens are / them", grammar: "名詞・複数", targets: "water / These pens are / them" },
  { id: "GDM-23", series: "GDM", label: "and", words: "and", grammar: "接続詞", targets: "and" },
  { id: "GDM-24", series: "GDM", label: "an (its の前にやる)", words: "an (its の前にやる)", grammar: "冠詞", targets: "an (its の前にやる)" },
  { id: "GDM-25", series: "GDM", label: "its / arm / foot / leg", words: "its / arm / foot / leg", grammar: "所有・体", targets: "its / arm / foot / leg" },
  { id: "GDM-26", series: "GDM", label: "open / shut", words: "open / shut", grammar: "形容詞・動詞", targets: "open / shut" },
  { id: "GDM-26-2", series: "GDM", label: "put (書く)", words: "put (書く)", grammar: "動詞 put", targets: "put (書く)" },
  { id: "GDM-27-1", series: "GDM", label: "its - a leg of", words: "its - a leg of", grammar: "部分", targets: "its - a leg of" },
  { id: "GDM-27-2", series: "GDM", label: "legs of / the legs of", words: "legs of / the legs of", grammar: "部分・冠詞", targets: "legs of / the legs of" },
  { id: "GDM-29-1", series: "GDM", label: "at / will go / going", words: "at / will go / going", grammar: "移動", targets: "at / will go / going" },
  { id: "GDM-29-2", series: "GDM", label: "went", words: "went", grammar: "過去 go", targets: "went" },
  { id: "GDM-30-1", series: "GDM", label: "What", words: "What", grammar: "疑問詞", targets: "What" },
  { id: "GDM-30-2", series: "GDM", label: "Yes / No / Is this", words: "Yes / No / Is this", grammar: "疑問文", targets: "Yes / No / Is this" },
  { id: "GDM-30-3", series: "GDM", label: "Are these", words: "Are these", grammar: "疑問文・複数", targets: "Are these" },
  { id: "GDM-30-5", series: "GDM", label: "Q所有格", words: "Q所有格", grammar: "疑問文・所有", targets: "Q所有格" },
  { id: "GDM-35-1", series: "GDM", label: "What time", words: "What time", grammar: "時刻", targets: "What time" },
  { id: "GDM-35-2", series: "GDM", label: "will be", words: "will be", grammar: "未来 be", targets: "will be" },
  { id: "GDM-36", series: "GDM", label: "from", words: "from", grammar: "前置詞", targets: "from" },
  { id: "GDM-37", series: "GDM", label: "a / the / The (There is / There are)", words: "a / the / The (There is / There are)", grammar: "存在文", targets: "a / the / The (There is / There are)" },
  { id: "GDM-37-1", series: "GDM", label: "a thing / person", words: "a thing / person", grammar: "名詞", targets: "a thing / person" },
  { id: "GDM-37-2A", series: "GDM", label: "(by)", words: "(by)", grammar: "前置詞", targets: "(by)" },
  { id: "GDM-37-2B", series: "GDM", label: "There is / There are", words: "There is / There are", grammar: "存在文", targets: "There is / There are" },
  { id: "GDM-37-3A", series: "GDM", label: "with", words: "with", grammar: "前置詞", targets: "with" },
  { id: "GDM-37-3B", series: "GDM", label: "will be with", words: "will be with", grammar: "未来・with", targets: "will be with" },
  { id: "GDM-37-4", series: "GDM", label: "Where", words: "Where", grammar: "疑問詞", targets: "Where" },
  { id: "GDM-37-4B", series: "GDM", label: "Where と What の整理", words: "Where と What の整理", grammar: "疑問詞", targets: "Where と What の整理" },
  { id: "GDM-37-5", series: "GDM", label: "but", words: "but", grammar: "接続詞", targets: "but" },
  { id: "GDM-37-6", series: "GDM", label: "together", words: "together", grammar: "副詞", targets: "together" },
  { id: "GDM-37-7", series: "GDM", label: "again", words: "again", grammar: "副詞", targets: "again" },
  { id: "GDM-40", series: "GDM", label: "one / the other", words: "one / the other", grammar: "代名詞", targets: "one / the other" },
  { id: "GDM-40-1", series: "GDM", label: "our / their", words: "our / their", grammar: "所有", targets: "our / their" },
  { id: "GDM-41-1", series: "GDM", label: "see / do not see", words: "see / do not see", grammar: "知覚・否定", targets: "see / do not see" },
  { id: "GDM-41-2", series: "GDM", label: "sees / does not see", words: "sees / does not see", grammar: "三単現・否定", targets: "sees / does not see" },
  { id: "GDM-41-4", series: "GDM", label: "see Question", words: "see Question", grammar: "疑問文", targets: "see Question" },
  { id: "GDM-41-5", series: "GDM", label: "sees Question", words: "sees Question", grammar: "三単現疑問", targets: "sees Question" },
  { id: "GDM-41-6", series: "GDM", label: "do / does / see Q に答える", words: "do / does / see Q に答える", grammar: "疑問応答", targets: "do / does / see Q に答える" },
  { id: "GDM-41-7", series: "GDM", label: "saw / did not see", words: "saw / did not see", grammar: "過去・否定", targets: "saw / did not see" },
  { id: "GDM-41-8", series: "GDM", label: "did Question", words: "did Question", grammar: "過去疑問", targets: "did Question" },
  { id: "GDM-41-9", series: "GDM", label: "will see", words: "will see", grammar: "未来", targets: "will see" },
  { id: "GDM-41-10", series: "GDM", label: "see まとめ", words: "see まとめ", grammar: "NH1併用開始目安", targets: "see まとめ" },
  { id: "NH1-0-FAMILY", series: "NH1", label: "中1 's / brother / sister / mother / father", words: "中1 's / brother / sister / mother / father", grammar: "所有・家族", targets: "brother / sister / mother / father / grandfather / grandmother / family" },
  { id: "NH1-1-MAY-I", series: "NH1", label: "May I", words: "May I", grammar: "許可", targets: "May I" },
  { id: "NH1-1-WILL-Q", series: "NH1", label: "Will question", words: "Will question", grammar: "未来疑問", targets: "Will question" },
  { id: "NH1-1-1-V", series: "NH1", label: "drink / play / watch / speak / study / read", words: "drink / play / watch / speak / study / read", grammar: "一般動詞", targets: "drink / play / watch / speak / study / read" },
  { id: "NH1-1-1-BEV-Q", series: "NH1", label: "be動詞 Question", words: "be動詞 Question", grammar: "疑問文", targets: "be動詞 Question" },
  { id: "NH1-1-1-CALL-IT", series: "NH1", label: "Call it", words: "Call it", grammar: "表現", targets: "Call it" },
  { id: "NH1-1-3-CAN-Q", series: "NH1", label: "can(Q)", words: "can(Q)", grammar: "助動詞", targets: "can(Q)" },
  { id: "NH1-1-2-V", series: "NH1", label: "walk / have(eat)", words: "walk / have(eat)", grammar: "一般動詞", targets: "walk / have(eat)" },
  { id: "NH1-1-2-FOR", series: "NH1", label: "for", words: "for", grammar: "前置詞", targets: "for" },
  { id: "NH1-1-2-BEV2", series: "NH1", label: "be動詞 2", words: "be動詞 2", grammar: "文法整理", targets: "be動詞 2" },
  { id: "NH1-1-3-V", series: "NH1", label: "practice / bring", words: "practice / bring", grammar: "一般動詞", targets: "practice / bring" },
  { id: "NH1-1-3-1-BEFORE", series: "NH1", label: "before (concert)", words: "before (concert)", grammar: "接続詞", targets: "before (concert)" },
  { id: "NH1-1-3-1-PRESENT", series: "NH1", label: "一般時制", words: "一般時制", grammar: "文法", targets: "一般時制" },
  { id: "NH1-1-3-2-WANT", series: "NH1", label: "want to do / be", words: "want to do / be", grammar: "不定詞", targets: "want to do / be" },
  { id: "NH1-1-3-2-PRESENT2", series: "NH1", label: "一般時制 2", words: "一般時制 2", grammar: "文法", targets: "一般時制 2" },
  { id: "NH1-1-3-2-HOW-MANY", series: "NH1", label: "How many", words: "How many", grammar: "疑問詞", targets: "How many" },
  { id: "NH1-1-3-3-BRING", series: "NH1", label: "bring(V)", words: "bring(V)", grammar: "一般動詞", targets: "bring(V)" },
  { id: "NH1-1-4-1-ENJOY", series: "NH1", label: "enjoy yourself", words: "enjoy yourself", grammar: "表現", targets: "enjoy yourself" },
  { id: "NH1-1-4-1-DONT", series: "NH1", label: "命令 / Don't (Unit4)", words: "命令 / Don't (Unit4)", grammar: "命令文", targets: "Don't" },
  { id: "NH1-1-4-1-BE", series: "NH1", label: "命令: Be で始まる文", words: "命令: Be で始まる文", grammar: "命令文", targets: "命令: Be で始まる文" },
  { id: "NH1-1-4-1-GLASS", series: "NH1", label: "a glass of water (Unit4)", words: "a glass of water (Unit4)", grammar: "名詞句", targets: "a glass of water" },
  { id: "NH1-1-4-2-DURING", series: "NH1", label: "during", words: "during", grammar: "前置詞", targets: "during" },
  { id: "NH1-1-4-2-AFTER", series: "NH1", label: "after (second period)", words: "after (second period)", grammar: "前置詞", targets: "after (second period)" },
  { id: "NH1-1-4-2-SOME", series: "NH1", label: "some / any / many (Unit4)", words: "some / any / many (Unit4)", grammar: "数量", targets: "some / any / many" },
  { id: "NH1-1-5-V", series: "NH1", label: "jog / need / eat / enjoy", words: "jog / need / eat / enjoy", grammar: "一般動詞", targets: "jog / need / eat / enjoy" },
  { id: "NH1-1-5-WRONG", series: "NH1", label: "What's wrong", words: "What's wrong", grammar: "会話", targets: "What's wrong" },
  { id: "NH1-1-5-2-DONTBE", series: "NH1", label: "Don't be", words: "Don't be", grammar: "命令文", targets: "Don't be" },
  { id: "NH1-1-5-2-LETS", series: "NH1", label: "Let's", words: "Let's", grammar: "提案", targets: "Let's" },
  { id: "NH1-1-5-2-SOMETHING", series: "NH1", label: "something / nothing", words: "something / nothing", grammar: "代名詞", targets: "something / nothing" },
  { id: "NH1-1-5-2-HOW", series: "NH1", label: "How (どのように) (Unit5)", words: "How (どのように) (Unit5)", grammar: "疑問詞", targets: "How" },
  { id: "NH1-1-6-V", series: "NH1", label: "write", words: "write", grammar: "一般動詞", targets: "write" },
  { id: "NH1-1-6-2-ABOUT", series: "NH1", label: "about (Unit3)", words: "about (Unit3)", grammar: "前置詞", targets: "about" },
  { id: "NH1-1-6-2-ONE", series: "NH1", label: "one 支柱語", words: "one 支柱語", grammar: "代名詞", targets: "one 支柱語" },
  { id: "NH1-1-6-3-ANYONE", series: "NH1", label: "anyone", words: "anyone", grammar: "代名詞", targets: "anyone" },
  { id: "NH1-1-7-V", series: "NH1", label: "know / make / buy", words: "know / make / buy", grammar: "一般動詞", targets: "know / make / buy" },
  { id: "NH1-1-7-3-WHOSE", series: "NH1", label: "Whose (Unit8)", words: "Whose (Unit8)", grammar: "疑問詞", targets: "Whose" },
  { id: "NH1-1-8-V", series: "NH1", label: "talk / think about / decorate / prepare", words: "talk / think about / decorate / prepare", grammar: "一般動詞", targets: "talk / think about / decorate / prepare" },
  { id: "NH1-1-8-3-WHY", series: "NH1", label: "Why", words: "Why", grammar: "疑問詞", targets: "Why" },
  { id: "NH1-1-8-3-EXCLAMATION", series: "NH1", label: "感嘆文 What a cute bag", words: "感嘆文 What a cute bag", grammar: "感嘆文", targets: "感嘆文 What a cute bag" },
  { id: "NH1-1-8-3-QUICKLY", series: "NH1", label: "quickly", words: "quickly", grammar: "副詞", targets: "quickly" },
  { id: "NH1-1-9-V", series: "NH1", label: "wait / get / build / understand / collect", words: "wait / get / build / understand / collect", grammar: "一般動詞", targets: "wait / get / build / understand / collect" },
  { id: "NH1-1-9-1-AS", series: "NH1", label: "as (a doctor)", words: "as (a doctor)", grammar: "前置詞", targets: "as (a doctor)" },
  { id: "NH1-1-9-1-AM-NOT-SURE", series: "NH1", label: "I am not sure about", words: "I am not sure about", grammar: "表現", targets: "I am not sure about" },
  { id: "NH1-1-9-3-LOOK-HAPPY", series: "NH1", label: "They look happy", words: "They look happy", grammar: "連結動詞", targets: "They look happy" },
  { id: "NH1-1-10-V", series: "NH1", label: "travel / visit / listen / spend / stand / feel / get up", words: "travel / visit / listen / spend / stand / feel / get up", grammar: "一般動詞", targets: "travel / visit / listen / spend / stand / feel / get up" },
  { id: "NH1-1-10-1-FULL-OF", series: "NH1", label: "full of", words: "full of", grammar: "形容詞句", targets: "full of" },
  { id: "NH1-1-10-3-GET-UP", series: "NH1", label: "get up (early)", words: "get up (early)", grammar: "句動詞", targets: "get up (early)" },
  { id: "NH1-1-10-3-HOW-NICE", series: "NH1", label: "How nice! (Unit8)", words: "How nice! (Unit8)", grammar: "感嘆文", targets: "How nice!" },
  { id: "NH1-1-11-V", series: "NH1", label: "join / hope / set up / pick up / look for / bring back / beat", words: "join / hope / set up / pick up / look for / bring back / beat", grammar: "一般動詞", targets: "join / hope / set up / pick up / look for / bring back / beat" },
  { id: "NH1-1-11-DID-Q", series: "NH1", label: "Did Q", words: "Did Q", grammar: "過去疑問", targets: "Did Q" },
  { id: "NH1-1-11-1-AGAINST", series: "NH1", label: "against", words: "against", grammar: "前置詞", targets: "against" },
  { id: "NH1-1-11-1-MAYBE", series: "NH1", label: "maybe", words: "maybe", grammar: "副詞", targets: "maybe" },
  { id: "NH2-2-1-3-SVOO", series: "NH2", label: "SVOO: show / teach / give", words: "SVOO: show / teach / give", grammar: "文型", targets: "SVOO: show / teach / give" },
  { id: "NH2-2-2-4-BECAUSE", series: "NH2", label: "because", words: "because", grammar: "接続詞", targets: "because" },
  { id: "NH2-2-3-1-SHOULD", series: "NH2", label: "should", words: "should", grammar: "助動詞", targets: "should" },
  { id: "NH2-2-4-1-HAVE-TO", series: "NH2", label: "have to", words: "have to", grammar: "助動詞相当", targets: "have to" },
  { id: "NH2-2-5-1-HOW-TO", series: "NH2", label: "how to do", words: "how to do", grammar: "疑問詞 + 不定詞", targets: "how to do" },
  { id: "NH2-2-6-MORE-THAN", series: "NH2", label: "more than / half", words: "more than / half", grammar: "比較", targets: "more than / half" },
  { id: "NH2-2-7-2-VOICE", series: "NH2", label: "passive voice", words: "passive voice", grammar: "受け身", targets: "passive voice" },
  { id: "GDM-42-1", series: "GDM", label: "has / have", words: "has / have", grammar: "所有", targets: "has / have" },
  { id: "GDM-42-2A", series: "GDM", label: "do not / does not 混ざったもの", words: "do not / does not 混ざったもの", grammar: "否定", targets: "do not / does not 混ざったもの" },
  { id: "GDM-42-2B", series: "GDM", label: "has / have Question", words: "has / have Question", grammar: "疑問文", targets: "has / have Question" },
  { id: "GDM-42-4", series: "GDM", label: "say", words: "say", grammar: "発話", targets: "say" },
  { id: "GDM-42-6", series: "GDM", label: "like 要考察", words: "like 要考察", grammar: "動詞 like", targets: "like 要考察" },
  { id: "GDM-44", series: "GDM", label: "between / under / over", words: "between / under / over", grammar: "前置詞", targets: "between / under / over" },
  { id: "GDM-44-3", series: "GDM", label: "between the other two hats", words: "between the other two hats", grammar: "前置詞", targets: "between the other two hats" },
  { id: "GDM-44-5", series: "GDM", label: "一般時制 every / play / go", words: "一般時制 every / play / go", grammar: "一般現在", targets: "一般時制 every / play / go" },
  { id: "GDM-45-1", series: "GDM", label: "中学前の整理: 日本語と英語の語順の違い", words: "中学前の整理: 日本語と英語の語順の違い", grammar: "語順", targets: "中学前の整理: 日本語と英語の語順の違い" },
  { id: "GDM-45-2", series: "GDM", label: "中学前の整理: beV Q", words: "中学前の整理: beV Q", grammar: "疑問文", targets: "中学前の整理: beV Q" },
  { id: "GDM-45-3", series: "GDM", label: "part", words: "part", grammar: "名詞", targets: "part" },
  { id: "GDM-45-3B", series: "GDM", label: "中学前の整理: do / does Q", words: "中学前の整理: do / does Q", grammar: "疑問文", targets: "中学前の整理: do / does Q" },
  { id: "GDM-46", series: "GDM", label: "before / after", words: "before / after", grammar: "接続詞", targets: "before / after" },
  { id: "GDM-46-2", series: "GDM", label: "before SV", words: "before SV", grammar: "接続詞", targets: "before SV" },
  { id: "GDM-46-4", series: "GDM", label: "take it from", words: "take it from", grammar: "句動詞", targets: "take it from" },
  { id: "GDM-47-1", series: "GDM", label: "have no", words: "have no", grammar: "否定", targets: "have no" },
  { id: "GDM-47-2A", series: "GDM", label: "Then 未来", words: "Then 未来", grammar: "接続副詞", targets: "Then 未来" },
  { id: "GDM-47-2B", series: "GDM", label: "had", words: "had", grammar: "過去 have", targets: "had" },
  { id: "GDM-47-3", series: "GDM", label: "us", words: "us", grammar: "代名詞", targets: "us" },
  { id: "GDM-47-4", series: "GDM", label: "has in it / on it", words: "has in it / on it", grammar: "位置・所有", targets: "has in it / on it" },
  { id: "GDM-47-5", series: "GDM", label: "one of them", words: "one of them", grammar: "代名詞", targets: "one of them" },
  { id: "GDM-48", series: "GDM", label: "Which", words: "Which", grammar: "疑問詞", targets: "Which" },
  { id: "GDM-48-2", series: "GDM", label: "one of the windows", words: "one of the windows", grammar: "部分", targets: "one of the windows" },
  { id: "GDM-49-1", series: "GDM", label: "which(rel.) 子供大人共通", words: "which(rel.) 子供大人共通", grammar: "関係代名詞", targets: "which(rel.) 子供大人共通" },
  { id: "GDM-49-10", series: "GDM", label: "後 The which(rel.) 美作文", words: "後 The which(rel.) 美作文", grammar: "関係代名詞", targets: "後 The which(rel.) 美作文" },
  { id: "GDM-49-2", series: "GDM", label: "all", words: "all", grammar: "数量", targets: "all" },
  { id: "GDM-49-3", series: "GDM", label: "no A or B", words: "no A or B", grammar: "否定", targets: "no A or B" },
  { id: "GDM-49-4", series: "GDM", label: "A or B(Q)", words: "A or B(Q)", grammar: "選択疑問", targets: "A or B(Q)" },
  { id: "GDM-50", series: "GDM", label: "This part of", words: "This part of", grammar: "部分", targets: "This part of" },
  { id: "GDM-50B", series: "GDM", label: "which(rel.) 主語につく", words: "which(rel.) 主語につく", grammar: "関係代名詞", targets: "which(rel.) 主語につく" },
  { id: "GDM-51", series: "GDM", label: "chest of drawers / on his knees", words: "chest of drawers / on his knees", grammar: "名詞句", targets: "chest of drawers / on his knees" },
  { id: "GDM-58-1", series: "GDM", label: "Who(Q)", words: "Who(Q)", grammar: "疑問詞", targets: "Who(Q)" },
  { id: "GDM-58-2A", series: "GDM", label: "give a hint / push / lock / who / come", words: "give a hint / push / lock / who / come", grammar: "動詞", targets: "give a hint / push / lock / who / come" },
  { id: "GDM-58-2B", series: "GDM", label: "other keys / another", words: "other keys / another", grammar: "代名詞", targets: "other keys / another" },
  { id: "GDM-60-1", series: "GDM", label: "come", words: "come", grammar: "動詞", targets: "come" },
  { id: "GDM-60-2", series: "GDM", label: "into / out of / through", words: "into / out of / through", grammar: "前置詞", targets: "into / out of / through" },
  { id: "GDM-61", series: "GDM", label: "one another / the other two hats", words: "one another / the other two hats", grammar: "代名詞", targets: "one another / the other two hats" },
  { id: "GDM-64A", series: "GDM", label: "did question (give, put, go)", words: "did question (give, put, go)", grammar: "過去疑問", targets: "did question (give, put, go)" },
  { id: "GDM-64B", series: "GDM", label: "When(Q), after SV", words: "When(Q), after SV", grammar: "疑問詞・接続詞", targets: "When(Q), after SV" },
  { id: "GDM-66", series: "GDM", label: "take it in / go with 物", words: "take it in / go with 物", grammar: "句動詞", targets: "take it in / go with 物" },
  { id: "GDM-69", series: "GDM", label: "Here is Mary", words: "Here is Mary", grammar: "提示", targets: "Here is Mary" },
  { id: "GDM-70", series: "GDM", label: "get", words: "get", grammar: "動詞", targets: "get" },
  { id: "GDM-70-2", series: "GDM", label: "go with 物 / in my hand", words: "go with 物 / in my hand", grammar: "前置詞句", targets: "go with 物 / in my hand" },
  { id: "GDM-72A", series: "GDM", label: "when(rel.)", words: "when(rel.)", grammar: "関係副詞", targets: "when(rel.)" },
  { id: "GDM-72-3", series: "GDM", label: "what(rel.)", words: "what(rel.)", grammar: "関係詞", targets: "what(rel.)" },
  { id: "GDM-72-4", series: "GDM", label: "命令文 See, Don't", words: "命令文 See, Don't", grammar: "命令文", targets: "命令文 See, Don't" },
  { id: "GDM-75-1", series: "GDM", label: "過去進行形 was doing", words: "過去進行形 was doing", grammar: "過去進行", targets: "過去進行形 was doing" },
  { id: "GDM-75-2", series: "GDM", label: "go up / down", words: "go up / down", grammar: "動詞句", targets: "go up / down" },
  { id: "GDM-75-3", series: "GDM", label: "go after", words: "go after", grammar: "動詞句", targets: "go after" },
  { id: "GDM-75-4", series: "GDM", label: "take it up / take it down", words: "take it up / take it down", grammar: "句動詞", targets: "take it up / take it down" },
  { id: "GDM-77-1", series: "GDM", label: "Is she taking, putting (進行形Q)", words: "Is she taking, putting (進行形Q)", grammar: "進行形疑問", targets: "Is she taking, putting (進行形Q)" },
  { id: "GDM-77-2", series: "GDM", label: "What is she doing? (進行形Q)", words: "What is she doing? (進行形Q)", grammar: "進行形疑問", targets: "What is she doing? (進行形Q)" },
  { id: "GDM-77-3", series: "GDM", label: "knives", words: "knives", grammar: "複数名詞", targets: "knives" },
  { id: "GDM-78B", series: "GDM", label: "take to (+ plate of soup, knives, What will you do)", words: "take to (+ plate of soup, knives, What will you do)", grammar: "動詞句", targets: "take to (+ plate of soup, knives, What will you do)" },
  { id: "GDM-79A", series: "GDM", label: "Nobody / new old clothing", words: "Nobody / new old clothing", grammar: "代名詞・形容詞", targets: "Nobody / new old clothing" },
  { id: "GDM-79B", series: "GDM", label: "take their soup", words: "take their soup", grammar: "所有・動詞", targets: "take their soup" },
  { id: "GDM-80A", series: "GDM", label: "What will you do / Will Q", words: "What will you do / Will Q", grammar: "未来疑問", targets: "What will you do / Will Q" },
  { id: "GDM-80-2", series: "GDM", label: "a plate of soup", words: "a plate of soup", grammar: "名詞句", targets: "a plate of soup" },
  { id: "GDM-82", series: "GDM", label: "before / after, When(Q)", words: "before / after, When(Q)", grammar: "接続詞", targets: "before / after, When(Q)" },
  { id: "GDM-82B", series: "GDM", label: "up / down", words: "up / down", grammar: "副詞", targets: "up / down" },
  { id: "GDM-83A", series: "GDM", label: "nothing / something", words: "nothing / something", grammar: "代名詞", targets: "nothing / something" },
  { id: "GDM-83B", series: "GDM", label: "Then 過去", words: "Then 過去", grammar: "接続副詞", targets: "Then 過去" },
  { id: "GDM-84", series: "GDM", label: "front / back", words: "front / back", grammar: "位置", targets: "front / back" },
  { id: "GDM-91", series: "GDM", label: "make / make from", words: "make / make from", grammar: "動詞 make", targets: "make / make from" },
  { id: "GDM-91-1", series: "GDM", label: "some / get (一般時制)", words: "some / get (一般時制)", grammar: "数量・動詞", targets: "some / get (一般時制)" },
  { id: "GDM-91-2", series: "GDM", label: "一般時制 (get以外の動画), skin", words: "一般時制 (get以外の動画), skin", grammar: "一般現在", targets: "一般時制 (get以外の動画), skin" },
  { id: "GDM-92", series: "GDM", label: "plant", words: "plant", grammar: "名詞・動詞", targets: "plant" },
  { id: "GDM-93-1", series: "GDM", label: "make(SVOC), make it green, make it go", words: "make(SVOC), make it green, make it go", grammar: "SVOC", targets: "make(SVOC), make it green, make it go" },
  { id: "GDM-93-1-2", series: "GDM", label: "make(SVOC)", words: "make(SVOC)", grammar: "SVOC", targets: "make(SVOC)" },
  { id: "GDM-93-2", series: "GDM", label: "boiling / steam / heat / flame / give off", words: "boiling / steam / heat / flame / give off", grammar: "科学語彙", targets: "boiling / steam / heat / flame / give off" },
  { id: "GDM-94", series: "GDM", label: "solid / a liquid / ice", words: "solid / a liquid / ice", grammar: "科学語彙", targets: "solid / a liquid / ice" },
  { id: "GDM-94-2", series: "GDM", label: "breath / it goes ou", words: "breath / it goes ou", grammar: "動作・観察", targets: "breath / it goes ou" },
  { id: "GDM-95", series: "GDM", label: "go (一般時制)", words: "go (一般時制)", grammar: "一般現在", targets: "go (一般時制)" },
  { id: "GDM-96-1", series: "GDM", label: "keep", words: "keep", grammar: "動詞", targets: "keep" },
  { id: "GDM-96-2", series: "GDM", label: "keep (SVOC)", words: "keep (SVOC)", grammar: "SVOC", targets: "keep (SVOC)" },
  { id: "GDM-97-1", series: "GDM", label: "measure / measuring / cm long", words: "measure / measuring / cm long", grammar: "測定", targets: "measure / measuring / cm long" },
  { id: "GDM-97-2", series: "GDM", label: "instrument / for measuring / time / heat", words: "instrument / for measuring / time / heat", grammar: "道具", targets: "instrument / for measuring / time / heat" },
  { id: "GDM-98A", series: "GDM", label: "thin / thick / keep O out of", words: "thin / thick / keep O out of", grammar: "形容詞・句動詞", targets: "thin / thick / keep O out of" },
  { id: "GDM-98-1", series: "GDM", label: "work yard / thin thick / keep out", words: "work yard / thin thick / keep out", grammar: "名詞句", targets: "work yard / thin thick / keep out" },
  { id: "GDM-98-2", series: "GDM", label: "good / bad, having a drink of", words: "good / bad, having a drink of", grammar: "形容詞・分詞", targets: "good / bad, having a drink of" },
  { id: "GDM-99", series: "GDM", label: "bread / meat / make from", words: "bread / meat / make from", grammar: "食べ物", targets: "bread / meat / make from" },
  { id: "GDM-100", series: "GDM", label: "hard / soft / crushing", words: "hard / soft / crushing", grammar: "形容詞・動名詞", targets: "hard / soft / crushing" },
  { id: "GDM-102", series: "GDM", label: "crushing with", words: "crushing with", grammar: "道具", targets: "crushing with" },
  { id: "GDM-103", series: "GDM", label: "teeth / tooth / high low / tasting", words: "teeth / tooth / high low / tasting", grammar: "身体・感覚", targets: "teeth / tooth / high low / tasting" },
  { id: "GDM-103-2", series: "GDM", label: "tasting", words: "tasting", grammar: "感覚", targets: "tasting" },
  { id: "GDM-105", series: "GDM", label: "ready / taste", words: "ready / taste", grammar: "形容詞・感覚", targets: "ready / taste" },
  { id: "GDM-106", series: "GDM", label: "different / the same", words: "different / the same", grammar: "比較", targets: "different / the same" },
  { id: "GDM-108", series: "GDM", label: "family", words: "family", grammar: "名詞", targets: "family" },
  { id: "GDM-110", series: "GDM", label: "clear / thick", words: "clear / thick", grammar: "形容詞", targets: "clear / thick" },
  { id: "GDM-111", series: "GDM", label: "who(rel.)", words: "who(rel.)", grammar: "関係代名詞", targets: "who(rel.)" },
  { id: "GDM-111-2", series: "GDM", label: "which(rel.)", words: "which(rel.)", grammar: "関係代名詞", targets: "which(rel.)" },
  { id: "GDM-A", series: "GDM", label: "by / in / on が終わればいつでも", words: "by / in / on が終わればいつでも", grammar: "追加", targets: "by / in / on が終わればいつでも" },
  { id: "GDM-B", series: "GDM", label: "for (78 a cup of tea の後)", words: "for (78 a cup of tea の後)", grammar: "追加", targets: "for (78 a cup of tea の後)" },
  { id: "GDM-C", series: "GDM", label: "skating-swimming", words: "skating-swimming", grammar: "追加", targets: "skating-swimming" },
  { id: "GDM-D", series: "GDM", label: "walkin-running", words: "walkin-running", grammar: "追加", targets: "walkin-running" },
];

let CONTENT_ITEMS = [
  { id: "GDM-47-4", variant: "short", level: 3, slug: "red-pin" },
  { id: "GDM-64B", variant: "short", level: 3, slug: "book-under-hat" },
  { id: "GDM-106", variant: "short", level: 3, slug: "water-pen-trick" },
  { id: "GDM-47-2A", variant: "short", level: 3, slug: "where-is-the-bell" },
  { id: "GDM-47-2A", variant: "short", level: 3, slug: "graded-story" },
  { id: "NH2-2-1-3-SVOO", variant: "short", level: 3, slug: "rina-brother" },
  { id: "GDM-47-2B", variant: "short", level: 3, slug: "bread-shop" },
  { id: "GDM-60-2", variant: "long", level: 7, slug: "rainy-club-map" },
  { id: "GDM-60-2", variant: "short", level: 3, slug: "star-bus" },
  { id: "GDM-64B", variant: "long", level: 7, slug: "can-clock-sing" },
  { id: "GDM-106", variant: "long", level: 7, slug: "principal-dance" },
  { id: "GDM-49-2", variant: "short", level: 3, slug: "wrong-robot" },
  { id: "GDM-60-2", variant: "long", level: 7, slug: "dont-be-a-hero" },
  { id: "GDM-58-1", variant: "short", level: 3, slug: "window-note" },
  { id: "GDM-60-2", variant: "short", level: 3, slug: "moon-cup" },
  { id: "GDM-60-2", variant: "long", level: 7, slug: "rainy-club-map" },
  { id: "GDM-64B", variant: "long", level: 7, slug: "can-clock-sing" },
  { id: "GDM-47-2B", variant: "short", level: 3, slug: "bread-shop" },
  { id: "GDM-60-2", variant: "long", level: 7, slug: "gift-lesson" },
  { id: "GDM-49-2", variant: "short", level: 3, slug: "wrong-robot" },
  { id: "GDM-60-2", variant: "long", level: 7, slug: "hat-said-no" },
  { id: "GDM-60-2", variant: "long", level: 7, slug: "dont-be-a-hero" },
  { id: "GDM-60-2", variant: "long", level: 7, slug: "gift-lesson" },
  { id: "GDM-60-2", variant: "short", level: 3, slug: "moon-cup" },
  { id: "GDM-60-2", variant: "long", level: 7, slug: "dice-gate" },
  { id: "GDM-47-2B", variant: "short", level: 3, slug: "bread-shop" },
  { id: "GDM-60-2", variant: "long", level: 7, slug: "gift-lesson" },
  { id: "GDM-47-4", variant: "long", level: 7, slug: "cake-was-moved" },
  { id: "GDM-49-2", variant: "long", level: 7, slug: "red-pin-parade" },
  { id: "GDM-60-2", variant: "long", level: 7, slug: "old-book-signal" },
  { id: "GDM-58-2B", variant: "long", level: 7, slug: "pens-in-water" },
  { id: "GDM-58-1", variant: "long", level: 7, slug: "map-under-stage" },
  { id: "GDM-46", variant: "long", level: 7, slug: "door-under-stage" },
  { id: "GDM-106", variant: "long", level: 7, slug: "family-photo-day" },
  { id: "GDM-106", variant: "long", level: 7, slug: "letter-under-door" },
  { id: "GDM-106", variant: "long", level: 7, slug: "why-lights-blink" },
  { id: "GDM-48", variant: "long", level: 7, slug: "because-of-soup" },
  { id: "GDM-58-2B", variant: "long", level: 7, slug: "open-the-box" },
  { id: "GDM-47-3", variant: "long", level: 7, slug: "more-than-half" },
  { id: "GDM-47-2A", variant: "short", level: 3, slug: "travel-ticket" },
  { id: "GDM-47-2A", variant: "short", level: 3, slug: "maybe-window" },
  { id: "GDM-58-2B", variant: "short", level: 3, slug: "should-sign" },
  { id: "GDM-47-2A", variant: "short", level: 3, slug: "have-to-key" },
  { id: "NH2-2-7-2-VOICE", variant: "short", level: 3, slug: "passive-poster" },
  { id: "NH1-1-7-V", variant: "short", level: 3, slug: "drink-read-race" },
  { id: "GDM-47-2A", variant: "short", level: 3, slug: "can-lantern" },
  { id: "GDM-47-3", variant: "short", level: 3, slug: "dont-be-late" },
  { id: "GDM-106", variant: "long", level: 7, slug: "show-me-the-seat" },
  { id: "GDM-47-2A", variant: "short", level: 3, slug: "signal-under-water" },
  { id: "GDM-47-2A", variant: "short", level: 3, slug: "orbit-note" },
  { id: "GDM-47-2A", variant: "short", level: 3, slug: "why-moon-robot" },
  { id: "GDM-47-2A", variant: "short", level: 3, slug: "maybe-mars-window" },
  { id: "GDM-60-2", variant: "long", level: 7, slug: "station-was-moved" },
  { id: "GDM-64B", variant: "long", level: 7, slug: "where-the-roof-door" },
  { id: "GDM-106", variant: "long", level: 7, slug: "traveling-shadow-ticket" },
  { id: "GDM-106", variant: "long", level: 7, slug: "because-the-wall-listened" },
  { id: "GDM-58-1", variant: "long", level: 7, slug: "how-to-read-the-stone" },
  { id: "GDM-106", variant: "long", level: 7, slug: "more-than-one-moon" },
  { id: "GDM-60-2", variant: "very-long", level: 8, slug: "locked-umbrella-room" },
  { id: "GDM-79A", variant: "very-long", level: 8, slug: "last-seat-table" },
  { id: "GDM-106", variant: "very-long", level: 8, slug: "library-moved" },
  { id: "GDM-106", variant: "very-long", level: 8, slug: "moon-lantern-path" },
  { id: "GDM-64B", variant: "very-long", level: 8, slug: "folded-map-race" },
  { id: "GDM-106", variant: "very-long", level: 8, slug: "jaio-pudding-case" },
  { id: "GDM-64B", variant: "short", level: 3, slug: "another-door-opens" },
  { id: "GDM-79A", variant: "short", level: 3, slug: "echo-on-the-moon" },
  { id: "GDM-58-1", variant: "short", level: 3, slug: "inside-the-kite" },
  { id: "NH2-2-3-1-SHOULD", variant: "short", level: 3, slug: "jiro-quiet-joke" },
  { id: "GDM-58-2B", variant: "short", level: 3, slug: "kaito-key-map" },
  { id: "GDM-60-2", variant: "short", level: 3, slug: "noa-night-door" },
  { id: "GDM-79A", variant: "short", level: 3, slug: "under-red-desk" },
  { id: "GDM-58-1", variant: "short", level: 3, slug: "voices-in-wall" },
  { id: "GDM-58-2B", variant: "short", level: 3, slug: "x-marks-lunch-box" },
  { id: "GDM-60-2", variant: "short", level: 3, slug: "yuna-thank-you-note" },
  { id: "GDM-47-2A", variant: "short", level: 3, slug: "zero-at-station" },
  { id: "GDM-60-2", variant: "short", level: 3, slug: "green-glass-signal" },
  { id: "GDM-44", variant: "short", level: 3, slug: "lost-library-card" },
  { id: "GDM-58-2B", variant: "short", level: 3, slug: "open-on-monday" },
  { id: "NH1-1-7-V", variant: "short", level: 3, slug: "paper-star-plan" },
  { id: "GDM-106", variant: "short", level: 3, slug: "quiet-question" },
];

const DEFAULT_PROGRESS_ITEMS = PROGRESS_ITEMS.map((item) => ({ ...item }));
const DEFAULT_CONTENT_ITEMS = CONTENT_ITEMS.map((item) => ({ ...item }));
const REMOVED_DEFAULT_PROGRESS_IDS = new Set([
  "GDM-4-7",
  "GDM-11-7",
  "GDM-12",
  "GDM-13-3",
  "GDM-14-4",
  "GDM-15-3",
  "GDM-15-6",
  "GDM-19-3",
  "GDM-20",
  "GDM-27-3",
  "GDM-28",
  "GDM-29-3",
  "GDM-29-3B",
  "GDM-30",
  "GDM-30-4",
  "GDM-30-6",
  "GDM-41-3",
  "GDM-42-2C",
  "GDM-42-3",
  "GDM-42-5",
  "GDM-44-4",
  "GDM-45-4",
  "GDM-52",
  "GDM-58-83",
  "GDM-78A",
  "GDM-81",
  "GDM-113-118",
  "GDM-198",
  "NH1-0-FOLDER",
  "NH1-0-BEV",
  "NH1-1-SV",
]);

const LEVELS = [
  {
    level: 2,
    id: "GDM-41-10",
    stage: "Assumed grading: legacy short archive. Longer present sequences, basic questions, says/asks, not/no, repeated nouns.",
  },
  {
    level: 3,
    id: "NH1-1-5-2-DONTBE",
    stage: "Assumed grading: Short. Compact reading of about 120-180 words, simple paragraphs, clear four-part story movement, basic past forms, simple dialogue, and one visible target expression from the selected Grade.",
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
    stage: "Assumed grading: Long. Fuller reading of about 300-450 words, multiple paragraphs, richer setting and motive, clearer suspense or emotional turn, and natural use of the selected Grade target item while avoiding structures not yet introduced.",
  },
  {
    level: 8,
    id: "NH2-2-7-2-VOICE",
    stage: "Assumed grading: Very Long. Extended reading of about 650-900 words, multiple scenes, stronger character arcs, clear comedy or mystery turns, and natural review of the selected Grade target item.",
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

function storyDisplayTitle(story, level) {
  return story.levelTitles?.[Number(level)] || story.title;
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

function levelForVariant(key) {
  return variantByKey(key)?.level || 3;
}

function levelLabel(level) {
  const variant = variantByLevel(level);
  return variant ? variant.label : "Archive";
}

function normalizeHeaderValue(value) {
  return String(value || "").trim();
}

function normalizeGradeId(value) {
  return normalizeHeaderValue(value);
}

function normalizeListText(value) {
  return String(value || "")
    .split(/[\n\r,、;；]+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function defaultDetectionTerms(item) {
  const explicitTerms = detectionTermsFromText([item.words, item.targets].filter(Boolean).join("\n"));
  if (explicitTerms.length) return explicitTerms;
  return detectionTermsFromText(item.label);
}

function gradeDetectionTerms(item) {
  if (SUPPRESSED_DETECTION_TERM_IDS.has(item.id)) return [];
  const targets = detectionTermsFromText(item.targets);
  return targets.length ? targets : defaultDetectionTerms(item);
}

function detectionTermsFromText(value) {
  const seen = new Set();
  return splitDetectionParts(value)
    .map(cleanDetectionTerm)
    .filter((term) => {
      const key = auditTermKey(term);
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .filter(Boolean);
}

function splitDetectionParts(value) {
  const parts = [];
  let current = "";
  let inRegex = false;
  let escaped = false;
  for (const char of String(value || "")) {
    if (inRegex) {
      current += char;
      if (char === "\\" && !escaped) {
        escaped = true;
      } else if (char === "/" && !escaped) {
        parts.push(current);
        current = "";
        inRegex = false;
      } else {
        escaped = false;
      }
      continue;
    }
    if (char === "/" && !current.trim()) {
      current += char;
      inRegex = true;
      continue;
    }
    if (/[\n\r,、;；/]/.test(char)) {
      parts.push(current);
      current = "";
    } else {
      current += char;
    }
  }
  if (current) parts.push(current);
  return parts;
}

function cleanDetectionTerm(value) {
  const text = String(value || "").trim();
  if (text.startsWith("/") && text.endsWith("/") && text.length > 2) return text;
  const cleaned = text
    .replace(/\([^)]*[^\x00-\x7F][^)]*\)/g, " ")
    .replace(/\([^A-Za-z]*?\)/g, " ")
    .replace(/\b(?:Unit|Question|Q|V|SV|SVO|SVOO)\b/gi, " ")
    .replace(/[^A-Za-z?'\s-]/g, " ")
    .replace(/\s+/g, " ")
    .replace(/\b([A-Za-z?']+)(?:\s+\1\b)+/gi, "$1")
    .trim();
  return cleaned === "'s" ? "" : cleaned;
}

function builtInAuditPatterns(item) {
  return BUILT_IN_AUDIT_PATTERNS[item.id] || [];
}

function gradeAuditPatterns(item) {
  return normalizeListText(item.auditPatterns);
}

function termCanAuditText(term) {
  const trimmed = normalizeHeaderValue(term);
  return (trimmed.startsWith("/") && trimmed.endsWith("/") && trimmed.length > 2) || /[A-Za-z]/.test(trimmed);
}

function auditableDetectionTerms(item) {
  return [...gradeDetectionTerms(item), ...builtInAuditPatterns(item), ...gradeAuditPatterns(item)].filter(termCanAuditText);
}

function validateGradeAuditability(progressItems) {
  const failures = progressItems
    .filter((item) => !auditableDetectionTerms(item).length)
    .map((item) => item.id)
    .slice(0, 8);
  if (failures.length) {
    throw new Error(
      `These Grades need English Detection Terms or Audit Patterns for audit: ${failures.join(", ")}. Grammar names are notes; they are not enough for automatic checking.`,
    );
  }
}

function termMatchesText(term, text) {
  const trimmed = normalizeHeaderValue(term);
  if (!trimmed) return false;
  if (trimmed.startsWith("/") && trimmed.endsWith("/") && trimmed.length > 2) {
    try {
      return new RegExp(expandAuditPattern(trimmed.slice(1, -1)), "i").test(text);
    } catch {
      return false;
    }
  }
  const pattern = /^[a-z][a-z\s'-]*$/i.test(trimmed)
    ? `\\b${escapeRegExp(trimmed).replace(/\\ /g, "\\s+")}\\b`
    : escapeRegExp(trimmed);
  return new RegExp(pattern, "i").test(text);
}

function expandAuditPattern(source) {
  return source.replace(/\{(S|V|O|C|BE|DO|SEE|VING)\}/g, (_, token) => GRAMMAR_AUDIT_TOKENS[token]);
}

function auditTermKey(term) {
  return normalizeHeaderValue(term).toLowerCase();
}

function firstOccurrenceAuditableTerms(progressItems, item) {
  const currentIndex = progressItems.indexOf(item);
  const earlierTerms = new Set(
    progressItems
      .slice(0, currentIndex)
      .flatMap(auditableDetectionTerms)
      .map(auditTermKey),
  );
  return auditableDetectionTerms(item).filter((term) => !earlierTerms.has(auditTermKey(term)));
}

function normalizeVariant(value) {
  const normalized = normalizeHeaderValue(value).toLowerCase().replace(/_/g, "-");
  if (normalized.includes("very") && normalized.includes("long")) return "very-long";
  if (normalized === "8") return "very-long";
  if (normalized.includes("long") || normalized === "7") return "long";
  if (normalized.includes("short") || normalized === "3") return "short";
  return normalized;
}

function sheetRows(workbook, sheetName) {
  const sheet = workbook.Sheets[sheetName];
  if (!sheet || !window.XLSX) return [];
  return window.XLSX.utils.sheet_to_json(sheet, { defval: "" });
}

function cell(row, names) {
  const wanted = names.map((name) => name.toLowerCase());
  const key = Object.keys(row).find((item) => wanted.includes(item.toLowerCase().trim()));
  return key ? row[key] : "";
}

function normalizeProgressItems(progressItems) {
  const seenGrades = new Set();
  return progressItems
    .map((item) => ({
      id: normalizeGradeId(item.id),
      series: normalizeHeaderValue(item.series) || "Custom",
      label: normalizeHeaderValue(item.label) || normalizeGradeId(item.id),
      words: normalizeListText(item.words).join(", "),
      grammar: normalizeListText(item.grammar).join(", "),
      targets: normalizeListText(item.targets).join(", "),
      auditPatterns: normalizeListText(item.auditPatterns).join(", "),
    }))
    .filter((item) => item.id && !seenGrades.has(item.id) && seenGrades.add(item.id));
}

function hasAllDefaultProgressItems(progressItems) {
  const gradeIds = new Set(normalizeProgressItems(progressItems).map((item) => item.id));
  return DEFAULT_PROGRESS_ITEMS.every((item) => gradeIds.has(item.id));
}

function mergeWithDefaultProgressItems(progressItems) {
  const customItems = normalizeProgressItems(progressItems);
  const customById = new Map(customItems.map((item) => [item.id, item]));
  const defaultIds = new Set(DEFAULT_PROGRESS_ITEMS.map((item) => item.id));
  const mergedDefaults = DEFAULT_PROGRESS_ITEMS.map((defaultItem) => {
    const customItem = customById.get(defaultItem.id);
    if (!customItem) return { ...defaultItem };
    return {
      ...defaultItem,
      series: customItem.series || defaultItem.series,
      label: customItem.label || defaultItem.label,
      words: customItem.words || defaultItem.words || "",
      grammar: customItem.grammar || defaultItem.grammar || "",
      targets: customItem.targets || defaultItem.targets || "",
      auditPatterns: customItem.auditPatterns || defaultItem.auditPatterns || "",
    };
  });
  const customOnlyItems = customItems.filter((item) => !defaultIds.has(item.id) && !REMOVED_DEFAULT_PROGRESS_IDS.has(item.id));
  return [...mergedDefaults, ...customOnlyItems];
}

function rebuildGradeData(progressItems, contentItems = DEFAULT_CONTENT_ITEMS) {
  const grades = normalizeProgressItems(progressItems);

  if (!grades.length) throw new Error("Grades sheet needs at least one Grade.");

  const gradeIds = new Set(grades.map((item) => item.id));
  const seenContent = new Set();
  const content = contentItems
    .map((item) => {
      const id = normalizeGradeId(item.id);
      const slug = normalizeHeaderValue(item.slug);
      const variant = normalizeVariant(item.variant);
      const level = Number(item.level) || levelForVariant(variant);
      return { id, variant, level, slug };
    })
    .filter((item) => {
      const story = storyBySlug(item.slug);
      const key = `${item.id}:${item.variant}:${item.slug}:${item.level}`;
      return (
        item.id &&
        gradeIds.has(item.id) &&
        variantByKey(item.variant) &&
        story &&
        storySupportsLevel(story, item.level) &&
        !seenContent.has(key) &&
        seenContent.add(key)
      );
    });

  if (!content.length) throw new Error("Could not auto-build Content_Map from lesson text.");

  PROGRESS_ITEMS = grades;
  CONTENT_ITEMS = content;
}

async function textForContentCandidate(story, level) {
  try {
    return await loadText(`lessons/${story.slug}/level-${level}.txt`);
  } catch {
    return "";
  }
}

function requiredGradeForText(text, progressItems) {
  const matches = progressItems
    .map((item, index) => ({ item, index, terms: firstOccurrenceAuditableTerms(progressItems, item) }))
    .filter(({ terms }) => terms.length)
    .filter(({ terms }) => terms.some((term) => termMatchesText(term, text)));
  const maxIndex = matches.reduce((max, match) => Math.max(max, match.index), 0);
  return progressItems[maxIndex]?.id || progressItems[0]?.id;
}

async function autoBuildContentItems(progressItems) {
  const content = [];
  for (const story of STORIES) {
    for (const level of storyLevels(story).filter((item) => TARGET_READING_LEVELS.includes(item))) {
      const text = await textForContentCandidate(story, level);
      if (!text) continue;
      const variant = variantByLevel(level)?.key;
      if (!variant) continue;
      content.push({
        id: requiredGradeForText(text, progressItems),
        variant,
        level,
        slug: story.slug,
      });
    }
  }
  if (!content.length) throw new Error("Could not auto-build Content_Map from lesson text.");
  return content;
}

function saveCustomGradePayload(payload) {
  localStorage.setItem(CUSTOM_GRADES_STORAGE_KEY, JSON.stringify({
    ...payload,
    schemaVersion: CUSTOM_GRADES_SCHEMA_VERSION,
    savedAt: new Date().toISOString(),
  }));
}

function loadCustomGradePayload() {
  try {
    const payload = JSON.parse(localStorage.getItem(CUSTOM_GRADES_STORAGE_KEY) || "null");
    if (!payload?.progressItems || !payload?.contentItems) return null;
    const shouldMergeDefaults =
      payload.schemaVersion !== CUSTOM_GRADES_SCHEMA_VERSION || !hasAllDefaultProgressItems(payload.progressItems);
    const progressItems = shouldMergeDefaults
      ? mergeWithDefaultProgressItems(payload.progressItems)
      : payload.progressItems;
    rebuildGradeData(progressItems, payload.contentItems);
    const loadedPayload = {
      ...payload,
      progressItems: PROGRESS_ITEMS.map((item) => ({ ...item })),
      contentItems: CONTENT_ITEMS.map((item) => ({ ...item })),
      schemaVersion: CUSTOM_GRADES_SCHEMA_VERSION,
    };
    if (shouldMergeDefaults) saveCustomGradePayload(loadedPayload);
    return loadedPayload;
  } catch {
    return null;
  }
}

function resetCustomGrades() {
  localStorage.removeItem(CUSTOM_GRADES_STORAGE_KEY);
  rebuildGradeData(DEFAULT_PROGRESS_ITEMS, DEFAULT_CONTENT_ITEMS);
}

function gradeExportRows() {
  return PROGRESS_ITEMS.map((item, index) => {
    const auditPatterns = gradeAuditPatterns(item).length ? gradeAuditPatterns(item) : builtInAuditPatterns(item);
    return {
      Order: index + 1,
      Grade: item.id,
      Series: item.series,
      Label: item.label,
      "Words / \u5c0e\u5165\u5358\u8a9e": item.words || "",
      "Grammar / \u5c0e\u5165\u6587\u6cd5": item.grammar || "",
      "Detection Terms / \u691c\u51fa\u8a9e\u53e5": firstOccurrenceAuditableTerms(PROGRESS_ITEMS, item)
        .filter((term) => !auditPatterns.includes(term))
        .join(", "),
      "Audit Pattern / \u76e3\u67fb\u30d1\u30bf\u30fc\u30f3": auditPatterns.join(", "),
    };
  });
}

function contentExportRows() {
  return CONTENT_ITEMS.map((item) => {
    const story = storyBySlug(item.slug);
    return {
      "Auto Grade / \u81ea\u52d5\u5224\u5b9aGrade": item.id,
      "Length / \u672c\u6587\u91cf": variantByKey(item.variant)?.label || item.variant,
      Level: item.level,
      "Genre / \u30b8\u30e3\u30f3\u30eb": story ? storyGenreLabel(story) : "",
      "Title / \u30bf\u30a4\u30c8\u30eb": story ? storyDisplayTitle(story, item.level) : "",
      Slug: item.slug,
    };
  });
}
function csvCell(value) {
  const text = String(value ?? "");
  return /[",\n\r]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

function csvLine(values) {
  return values.map(csvCell).join(",");
}

function splitCsvLine(line) {
  const cells = [];
  let cell = "";
  let quoted = false;
  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    if (char === '"' && quoted && line[index + 1] === '"') {
      cell += '"';
      index += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      cells.push(cell);
      cell = "";
    } else {
      cell += char;
    }
  }
  cells.push(cell);
  return cells;
}

function downloadBlob(filename, blob) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function exportGradeCsv() {
  const headers = [
    "Sheet",
    "Order",
    "Grade",
    "Series",
    "Label",
    "Words / \u5c0e\u5165\u5358\u8a9e",
    "Grammar / \u5c0e\u5165\u6587\u6cd5",
    "Detection Terms / \u691c\u51fa\u8a9e\u53e5",
    "Audit Pattern / \u76e3\u67fb\u30d1\u30bf\u30fc\u30f3",
    "Length / \u672c\u6587\u91cf",
    "Level",
    "Genre / \u30b8\u30e3\u30f3\u30eb",
    "Title / \u30bf\u30a4\u30c8\u30eb",
    "Slug",
  ];
  const rows = [
    headers,
    ...gradeExportRows().map((row) => [
      "Grades",
      row.Order,
      row.Grade,
      row.Series,
      row.Label,
      row["Words / \u5c0e\u5165\u5358\u8a9e"],
      row["Grammar / \u5c0e\u5165\u6587\u6cd5"],
      row["Detection Terms / \u691c\u51fa\u8a9e\u53e5"],
      row["Audit Pattern / \u76e3\u67fb\u30d1\u30bf\u30fc\u30f3"],
      "",
      "",
      "",
      "",
      "",
    ]),
    ...contentExportRows().map((row) => [
      "Content_Map",
      "",
      row["Auto Grade / \u81ea\u52d5\u5224\u5b9aGrade"],
      "",
      "",
      "",
      "",
      "",
      "",
      row["Length / \u672c\u6587\u91cf"],
      row.Level,
      row["Genre / \u30b8\u30e3\u30f3\u30eb"],
      row["Title / \u30bf\u30a4\u30c8\u30eb"],
      row.Slug,
    ]),
  ];
  const csv = rows.map(csvLine).join("\r\n");
  downloadBlob("gdm-reading-grade-table.csv", new Blob([csv], { type: "text/csv;charset=utf-8" }));
  return "CSV";
}

function exportGradeWorkbook() {
  if (!window.XLSX) return exportGradeCsv();
  const workbook = window.XLSX.utils.book_new();
  window.XLSX.utils.book_append_sheet(
    workbook,
    window.XLSX.utils.aoa_to_sheet([
      ["\u4f7f\u3044\u65b9"],
      ["Grades\u30b7\u30fc\u30c8\u306eOrder\u3001Grade\u3001Series\u3001Label\u3001\u5c0e\u5165\u5358\u8a9e\u3001\u5c0e\u5165\u6587\u6cd5\u3001\u691c\u51fa\u8a9e\u53e5\u3092\u81ea\u7531\u306b\u7de8\u96c6\u3067\u304d\u307e\u3059\u3002"],
      ["\u5c0e\u5165\u5358\u8a9e\u30fb\u5c0e\u5165\u6587\u6cd5\u30fb\u691c\u51fa\u8a9e\u53e5\u306f\u3001\u30ab\u30f3\u30de\u3001\u8aad\u70b9\u3001\u30bb\u30df\u30b3\u30ed\u30f3\u3001\u6539\u884c\u3067\u8907\u6570\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u6642\u306e\u691c\u51fa\u8a9e\u53e5\u306f\u30ab\u30f3\u30de+\u534a\u89d2\u30b9\u30da\u30fc\u30b9\u3067\u7d71\u4e00\u3057\u307e\u3059\u3002"],
      ["\u691c\u51fa\u8a9e\u53e5\u306f\u672c\u6587\u306eGrade\u81ea\u52d5\u5224\u5b9a\u306b\u4f7f\u3044\u307e\u3059\u3002\u65e5\u672c\u8a9e\u3001Unit\u8868\u8a18\u3001Q/V/SV/SVOO\u306e\u3088\u3046\u306a\u5206\u985e\u8a18\u53f7\u306f\u9664\u304d\u3001\u540c\u3058\u8a9e\u53e5\u3084 on on \u306e\u3088\u3046\u306a\u9023\u7d9a\u91cd\u8907\u306f1\u3064\u306b\u6574\u7406\u3057\u307e\u3059\u3002"],
      ["\u691c\u51fa\u8a9e\u53e5\u306f\u82f1\u8a9e\u672c\u6587\u4e2d\u306e\u5358\u8a9e\u30fb\u8a9e\u53e5\u3068\u5927\u6587\u5b57\u5c0f\u6587\u5b57\u3092\u533a\u5225\u305b\u305a\u7167\u5408\u3057\u307e\u3059\u3002\u82f1\u5b57\u3060\u3051\u306e\u8a9e\u53e5\u306f\u5358\u8a9e\u5883\u754c\u3067\u691c\u51fa\u3057\u3001\u6587\u6cd5\u69cb\u9020\u306e\u5224\u5b9a\u306f\u76e3\u67fb\u30d1\u30bf\u30fc\u30f3\u5217\u306e /pattern/ \u3067\u6307\u5b9a\u3057\u307e\u3059\u3002"],
      ["\u76e3\u67fb\u30d1\u30bf\u30fc\u30f3\u306b\u306f\u3001\u30b5\u30a4\u30c8\u306b\u7d44\u307f\u8fbc\u307e\u308c\u3066\u3044\u308b\u6587\u6cd5\u30c1\u30a7\u30c3\u30af\u306e\u6b63\u898f\u8868\u73fe\u3082\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3055\u308c\u307e\u3059\u3002\u81ea\u7531\u306b\u8ffd\u52a0\u30fb\u5909\u66f4\u3067\u304d\u3001\u30a4\u30f3\u30dd\u30fc\u30c8\u5f8c\u306e\u81ea\u52d5\u5224\u5b9a\u306b\u4f7f\u3044\u307e\u3059\u3002"],
      ["\u76e3\u67fb\u30d1\u30bf\u30fc\u30f3\u306e /pattern/ \u5185\u3067\u306f {S}={\u4e3b\u8a9e}, {V}={\u52d5\u8a5e}, {O}={\u76ee\u7684\u8a9e}, {C}={\u88dc\u8a9e}, {BE}=be\u52d5\u8a5e, {DO}=do/does/did, {SEE}=see/sees/saw, {VING}=ing\u5f62 \u3092\u4f7f\u3048\u307e\u3059\u3002\u4f8b: /\\bdo\\s+{S}\\s+see\\b[^.?!]*\\?/"],
      ["\u6587\u6cd5\u6b04\u306f\u8aac\u660e\u7528\u3067\u3059\u3002\u73fe\u5728\u5b8c\u4e86\u306a\u3069\u306e\u6587\u6cd5\u3092\u76e3\u67fb\u3059\u308b\u306b\u306f\u3001\u691c\u51fa\u8a9e\u53e5\u307e\u305f\u306f\u76e3\u67fb\u30d1\u30bf\u30fc\u30f3\u306b have been, has gone, /\\b(?:have|has)\\s+\\w+(?:ed|en)\\b/ \u306e\u3088\u3046\u306a\u82f1\u8a9e\u8868\u73fe\u307e\u305f\u306f\u6b63\u898f\u8868\u73fe\u3092\u5165\u308c\u3066\u304f\u3060\u3055\u3044\u3002"],
      ["Content_Map\u30b7\u30fc\u30c8\u306f\u78ba\u8a8d\u7528\u3067\u3059\u3002\u30a4\u30f3\u30dd\u30fc\u30c8\u6642\u306b\u7de8\u96c6\u5024\u306f\u4f7f\u308f\u305a\u3001\u672c\u6587\u3092\u8aad\u307f\u76f4\u3057\u3066\u81ea\u52d5\u69cb\u7bc9\u3057\u307e\u3059\u3002"],
      ["\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u305fGrade\u8868\u306f\u3001\u3053\u306e\u30d6\u30e9\u30a6\u30b6\u306b\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002\u30ea\u30bb\u30c3\u30c8\u3059\u308b\u3068\u6a19\u6e96\u8868\u306b\u623b\u308a\u307e\u3059\u3002"],
    ]),
    "How_To_Use",
  );
  window.XLSX.utils.book_append_sheet(workbook, window.XLSX.utils.json_to_sheet(gradeExportRows()), "Grades");
  window.XLSX.utils.book_append_sheet(workbook, window.XLSX.utils.json_to_sheet(contentExportRows()), "Content_Map");
  window.XLSX.writeFile(workbook, "gdm-reading-grade-table.xlsx");
  return "Excel";
}

function parseGradeWorkbook(workbook) {
  const gradeRows = sheetRows(workbook, "Grades").map((row) => ({
    id: cell(row, ["Grade", "ID", "\u30b0\u30ec\u30fc\u30c9"]),
    series: cell(row, ["Series", "\u7cfb\u5217"]),
    label: cell(row, ["Label", "\u8868\u793a\u540d", "\u540d\u524d"]),
    words: cell(row, ["Words", "Introduced Words", "Words / \u5c0e\u5165\u5358\u8a9e", "\u5c0e\u5165\u5358\u8a9e", "\u5358\u8a9e"]),
    grammar: cell(row, ["Grammar", "Introduced Grammar", "Grammar / \u5c0e\u5165\u6587\u6cd5", "\u5c0e\u5165\u6587\u6cd5", "\u6587\u6cd5"]),
    targets: cell(row, ["Detection Terms", "Targets", "Detection Terms / \u691c\u51fa\u8a9e\u53e5", "\u691c\u51fa\u8a9e\u53e5", "\u5224\u5b9a\u8a9e\u53e5"]),
    auditPatterns: cell(row, ["Audit Pattern", "Audit Patterns", "Audit Pattern / \u76e3\u67fb\u30d1\u30bf\u30fc\u30f3", "\u76e3\u67fb\u30d1\u30bf\u30fc\u30f3"]),
  }));
  return { progressItems: gradeRows };
}

function parseGradeCsv(text) {
  const lines = text.replace(/^\uFEFF/, "").split(/\r?\n/).filter((line) => line.trim());
  if (lines.length < 2) throw new Error("CSV file is empty.");
  const headers = splitCsvLine(lines[0]).map((header) => header.trim());
  const rows = lines.slice(1).map((line) => {
    const cells = splitCsvLine(line);
    return Object.fromEntries(headers.map((header, index) => [header, cells[index] || ""]));
  });
  return {
    progressItems: rows
      .filter((row) => normalizeHeaderValue(row.Section || row.Sheet) === "Grades")
      .map((row) => ({
        id: row.Grade || row.ID,
        series: row.Series,
        label: row.Label,
        words: row.Words || row["Words / \u5c0e\u5165\u5358\u8a9e"] || row["Introduced Words"],
        grammar: row.Grammar || row["Grammar / \u5c0e\u5165\u6587\u6cd5"] || row["Introduced Grammar"],
        targets: row.Targets || row["Detection Terms"] || row["Detection Terms / \u691c\u51fa\u8a9e\u53e5"],
        auditPatterns: row["Audit Pattern"] || row["Audit Patterns"] || row["Audit Pattern / \u76e3\u67fb\u30d1\u30bf\u30fc\u30f3"],
      })),
  };
}

async function importGradeWorkbook(file) {
  const isCsv = file.name.toLowerCase().endsWith(".csv");
  if (!window.XLSX && !isCsv) throw new Error("Excel library is not available yet. Import CSV instead.");
  const payload = isCsv
    ? parseGradeCsv(await file.text())
    : parseGradeWorkbook(window.XLSX.read(await file.arrayBuffer(), { type: "array" }));
  const progressItems = normalizeProgressItems(payload.progressItems);
  validateGradeAuditability(progressItems);
  const contentItems = await autoBuildContentItems(progressItems);
  rebuildGradeData(progressItems, contentItems);
  saveCustomGradePayload({
    progressItems: PROGRESS_ITEMS.map((item) => ({ ...item })),
    contentItems: CONTENT_ITEMS.map((item) => ({ ...item })),
  });
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
    stage: `${baseInfo.stage} Selected Grade: ${item.id} (${item.label}).`,
  };
}

function levelStageText(info) {
  return `${info.stage} Grade: ${info.id}.`;
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

function readingFullText(text) {
  return textToBlocks(text).join("\n\n");
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

function feedbackIssueUrl(meta) {
  const title = `[Feedback] ${meta.title}`;
  const pageUrl = window.location.href.split("#")[0];
  const body = [
    "## Content",
    `- Title: ${meta.title}`,
    `- Slug: ${meta.slug}`,
    `- Genre: ${meta.genre}`,
    `- Length: ${meta.length}`,
    `- Level: ${meta.level}`,
    `- Grade: ${meta.id}`,
    `- Page: ${pageUrl}${meta.anchor || ""}`,
    "",
    "## Name (optional)",
    "",
    "## Feedback Type",
    "- [ ] Too difficult",
    "- [ ] Grading / target item issue",
    "- [ ] Vocabulary / footnote issue",
    "- [ ] Story issue",
    "- [ ] Typo or wording",
    "- [ ] Display / copy / download issue",
    "- [ ] Other",
    "",
    "## Comment",
    "",
  ].join("\n");
  const params = new URLSearchParams({ title, body, labels: "feedback" });
  return `${FEEDBACK_ISSUE_URL}?${params.toString()}`;
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

function appendFeedbackAction(section, meta) {
  const actions = section.querySelector(".text-actions");
  if (!actions) return;
  const feedbackLink = document.createElement("a");
  feedbackLink.className = "button-link";
  feedbackLink.href = "#";
  feedbackLink.target = "_blank";
  feedbackLink.rel = "noopener";
  feedbackLink.textContent = "Send feedback";
  feedbackLink.addEventListener("click", (event) => {
    event.preventDefault();
    window.open(feedbackIssueUrl(meta), "_blank", "noopener");
  });
  actions.appendChild(feedbackLink);
  attachFeedbackThanks(feedbackLink, actions);
}

function appendReadingDivider(section) {
  const divider = document.createElement("div");
  divider.className = "reading-divider";
  divider.setAttribute("aria-hidden", "true");
  section.appendChild(divider);
}

function attachFeedbackThanks(link, container) {
  const thanks = document.createElement("span");
  thanks.className = "feedback-thanks";
  thanks.hidden = true;
  thanks.textContent = FEEDBACK_THANKS_TEXT;
  link.addEventListener("click", () => {
    window.setTimeout(() => {
      thanks.hidden = false;
    }, 400);
  });
  container.appendChild(thanks);
}

function renderReadingSection(section, text, info, filename, meta) {
  const bodyText = readingBodyText(text);
  const notes = glossaryNotesForText(bodyText, info.id);
  appendTextActions(section, textWithFootnotes(readingFullText(text), notes), filename);
  appendFeedbackAction(section, meta);
  appendReadingDivider(section);
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

  const pageTitle = requestedLevel ? storyDisplayTitle(story, requestedLevel.level) : story.title;
  document.title = requestedLevel ? pageTitle : story.title;
  root.querySelector("h1").textContent = requestedLevel ? pageTitle : story.title;

  const container = root.querySelector("[data-content]");
  container.textContent = "";

  const visibleLevels = requestedLevel
    ? [requestedLevel]
    : LEVELS.filter((info) => TARGET_READING_LEVELS.includes(info.level) && storySupportsLevel(story, info.level));

  for (const info of visibleLevels) {
    if (!storySupportsLevel(story, info.level)) continue;
    const section = document.createElement("section");
    const sectionTitle = storyDisplayTitle(story, info.level);
    if (sectionTitle !== pageTitle) {
      const heading = document.createElement("h2");
      heading.textContent = sectionTitle;
      section.appendChild(heading);
    }
    section.id = `level-${info.level}`;
    const contentItem = requestedId
      ? CONTENT_ITEMS.find((item) => item.id === requestedId && item.slug === story.slug && item.level === info.level) ||
        CONTENT_ITEMS.find((item) => item.id === requestedId && item.slug === story.slug)
      : null;
    const contentLevel = contentItem?.level || info.level;
    const text = await loadText(`${basePath}/level-${contentLevel}.txt`);
    const itemInfo = readingInfo(info, requestedId);
    renderReadingSection(section, text, itemInfo, `${story.slug}-${levelLabel(info.level).toLowerCase()}.txt`, {
      title: storyDisplayTitle(story, contentLevel),
      slug: story.slug,
      genre: storyGenreLabel(story),
      length: levelLabel(info.level),
      level: contentLevel,
      id: itemInfo.id,
      anchor: `#level-${info.level}`,
    });
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
    heading.textContent = storyDisplayTitle(story, level);
    section.appendChild(heading);
    const text = await loadText(`${basePath}/${story.slug}/level-${level}.txt`);
    renderReadingSection(section, text, info, `${story.slug}-level-${level}.txt`, {
      title: storyDisplayTitle(story, level),
      slug: story.slug,
      genre: storyGenreLabel(story),
      length: levelLabel(level),
      level,
      id: info.id,
      anchor: `#${story.slug}`,
    });
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
    appendParagraph(container, "Choose a valid Grade and reading length.", "error");
    return;
  }

  const summary = document.createElement("p");
  summary.className = "note";
  const idText = selectedId === "all" ? "All Grades" : `Grade: ${selectedId}`;
  const scopeText = selectedId === "all" ? "all content Grades" : "content attached to this Grade and nearby previous Grades";
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
        : "No stories match this genre and length near this Grade yet. Choose Grade: All to search every story.";
    appendParagraph(container, emptyText, "note");
    return;
  }

  storyChoices.forEach(({ item, story }) => {
    const progress = progressItem(item.id);
    const itemVariant = variantByKey(item.variant);
    const card = document.createElement("section");
    card.className = "lesson choice-card";
    const heading = document.createElement("h3");
    heading.textContent = storyDisplayTitle(story, item.level);
    const genreText = document.createElement("p");
    genreText.className = "note";
    genreText.textContent = `${storyGenreLabel(story)} / Grade ${item.id}${progress ? ` / ${progress.label}` : ""}`;
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

function setGradeStatus(root, text, className = "note") {
  const status = root.querySelector("[data-grade-status]");
  if (!status) return;
  status.className = className;
  status.textContent = text;
}

function customGradeIsActive() {
  try {
    return Boolean(localStorage.getItem(CUSTOM_GRADES_STORAGE_KEY));
  } catch {
    return false;
  }
}

function renderGradeOptions(root) {
  const input = root.querySelector("[data-id]");
  if (!input) return;
  const previous = input.value;
  input.textContent = "";

  const allOption = document.createElement("option");
  allOption.value = "all";
  allOption.textContent = "All";
  input.appendChild(allOption);

  PROGRESS_ITEMS.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = `${item.id} / ${item.label}`;
    input.appendChild(option);
  });

  input.value = [...input.options].some((option) => option.value === previous) ? previous : "all";
}

function updateGradeStatus(root) {
  setGradeStatus(
    root,
    customGradeIsActive()
      ? `Custom Grade table is active. ${PROGRESS_ITEMS.length} grades are saved, and ${CONTENT_ITEMS.length} story links were rebuilt automatically in this browser.`
      : "Default Grade table is active.",
  );
}

function setupGradeTools(root) {
  const exportButton = root.querySelector("[data-export-grades]");
  const importInput = root.querySelector("[data-import-grades]");
  const resetButton = root.querySelector("[data-reset-grades]");

  exportButton?.addEventListener("click", () => {
    try {
      const format = exportGradeWorkbook();
      setGradeStatus(root, `Grade ${format} exported. Edit introduced words, grammar, and detection terms in Excel, then import it here.`, "note");
    } catch (error) {
      setGradeStatus(root, `Could not export Grade Excel: ${error.message}`, "error");
    }
  });

  importInput?.addEventListener("change", async () => {
    const file = importInput.files?.[0];
    if (!file) return;
    try {
      await importGradeWorkbook(file);
      renderGradeOptions(root);
      saveIndexSelection(root);
      renderIndexResults(root);
      updateGradeStatus(root);
    } catch (error) {
      setGradeStatus(root, `Could not import Grade Excel: ${error.message}`, "error");
    } finally {
      importInput.value = "";
    }
  });

  resetButton?.addEventListener("click", () => {
    resetCustomGrades();
    renderGradeOptions(root);
    saveIndexSelection(root);
    renderIndexResults(root);
    updateGradeStatus(root);
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
  renderGradeOptions(root);
  restoreIndexSelection(root);
  currentInput.addEventListener("change", handleChange);
  variantInput.addEventListener("change", handleChange);
  genreInput.addEventListener("change", handleChange);
  renderIndexResults(root);
  renderStoryPicker(root);
  setupGradeTools(root);
  updateGradeStatus(root);
  setupSiteFeedbackThanks(root);
}

function setupSiteFeedbackThanks(root) {
  const link = root.querySelector("[data-site-feedback]");
  if (!link || !link.parentElement) return;
  attachFeedbackThanks(link, link.parentElement);
}

async function boot() {
  const root = document.querySelector("[data-reader]");
  if (!root) return;
  loadCustomGradePayload();

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
