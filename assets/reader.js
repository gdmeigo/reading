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
const FEEDBACK_ISSUE_URL = "https://github.com/gdmeigo/reading/issues/new";
const FEEDBACK_THANKS_TEXT = "Thank you for the feedback. We will review it.";
const CEFR_A1_WORDS = new Set((window.CEFR_A1_WORDS || []).map((word) => word.toLowerCase()));

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
  { id: "NH1-1-7-V", series: "NH1", label: "know / make / buy" },
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

let CONTENT_ITEMS = [
  { id: "GDM-41-10", variant: "short", level: 3, slug: "red-pin" },
  { id: "NH1-1-1-V", variant: "short", level: 3, slug: "book-under-hat" },
  { id: "NH1-1-7-V", variant: "short", level: 3, slug: "water-pen-trick" },
  { id: "NH1-1-6-V", variant: "short", level: 3, slug: "where-is-the-bell" },
  { id: "NH1-1-3-CAN-Q", variant: "short", level: 3, slug: "graded-story" },
  { id: "NH2-2-1-3-SVOO", variant: "short", level: 3, slug: "rina-brother" },
  { id: "NH2-2-6-MORE-THAN", variant: "short", level: 3, slug: "bread-shop" },
  { id: "NH2-2-1-3-SVOO", variant: "long", level: 7, slug: "rainy-club-map" },
  { id: "NH1-1-3-CAN-Q", variant: "short", level: 3, slug: "star-bus" },
  { id: "NH2-2-3-1-SHOULD", variant: "long", level: 7, slug: "can-clock-sing" },
  { id: "NH2-2-4-1-HAVE-TO", variant: "long", level: 7, slug: "principal-dance" },
  { id: "NH2-2-2-4-BECAUSE", variant: "short", level: 3, slug: "wrong-robot" },
  { id: "NH2-2-3-1-SHOULD", variant: "long", level: 7, slug: "dont-be-a-hero" },
  { id: "NH2-2-1-3-SVOO", variant: "short", level: 3, slug: "window-note" },
  { id: "NH2-2-5-1-HOW-TO", variant: "short", level: 3, slug: "moon-cup" },
  { id: "NH2-2-1-3-SVOO", variant: "long", level: 7, slug: "rainy-club-map" },
  { id: "NH2-2-3-1-SHOULD", variant: "long", level: 7, slug: "can-clock-sing" },
  { id: "NH2-2-6-MORE-THAN", variant: "short", level: 3, slug: "bread-shop" },
  { id: "NH2-2-7-2-VOICE", variant: "long", level: 7, slug: "gift-lesson" },
  { id: "NH2-2-2-4-BECAUSE", variant: "short", level: 3, slug: "wrong-robot" },
  { id: "NH2-2-4-1-HAVE-TO", variant: "long", level: 7, slug: "hat-said-no" },
  { id: "NH2-2-3-1-SHOULD", variant: "long", level: 7, slug: "dont-be-a-hero" },
  { id: "NH2-2-7-2-VOICE", variant: "long", level: 7, slug: "gift-lesson" },
  { id: "NH2-2-5-1-HOW-TO", variant: "short", level: 3, slug: "moon-cup" },
  { id: "NH2-2-5-1-HOW-TO", variant: "long", level: 7, slug: "dice-gate" },
  { id: "NH2-2-6-MORE-THAN", variant: "short", level: 3, slug: "bread-shop" },
  { id: "NH2-2-7-2-VOICE", variant: "long", level: 7, slug: "gift-lesson" },
  { id: "NH2-2-7-2-VOICE", variant: "long", level: 7, slug: "cake-was-moved" },
  { id: "NH2-2-1-3-SVOO", variant: "long", level: 7, slug: "red-pin-parade" },
  { id: "NH2-2-1-3-SVOO", variant: "long", level: 7, slug: "old-book-signal" },
  { id: "NH2-2-1-3-SVOO", variant: "long", level: 7, slug: "pens-in-water" },
  { id: "NH2-2-1-3-SVOO", variant: "long", level: 7, slug: "map-under-stage" },
  { id: "NH2-2-1-3-SVOO", variant: "long", level: 7, slug: "door-under-stage" },
  { id: "NH1-1-10-V", variant: "long", level: 7, slug: "family-photo-day" },
  { id: "NH1-1-11-1-MAYBE", variant: "long", level: 7, slug: "letter-under-door" },
  { id: "NH2-2-2-4-BECAUSE", variant: "long", level: 7, slug: "why-lights-blink" },
  { id: "NH2-2-2-4-BECAUSE", variant: "long", level: 7, slug: "because-of-soup" },
  { id: "NH2-2-5-1-HOW-TO", variant: "long", level: 7, slug: "open-the-box" },
  { id: "NH2-2-7-2-VOICE", variant: "long", level: 7, slug: "more-than-half" },
  { id: "NH2-2-1-3-SVOO", variant: "short", level: 3, slug: "travel-ticket" },
  { id: "NH2-2-7-2-VOICE", variant: "short", level: 3, slug: "maybe-window" },
  { id: "NH2-2-3-1-SHOULD", variant: "short", level: 3, slug: "should-sign" },
  { id: "NH2-2-7-2-VOICE", variant: "short", level: 3, slug: "have-to-key" },
  { id: "NH2-2-7-2-VOICE", variant: "short", level: 3, slug: "passive-poster" },
  { id: "NH1-1-7-V", variant: "short", level: 3, slug: "drink-read-race" },
  { id: "NH1-1-11-1-MAYBE", variant: "short", level: 3, slug: "can-lantern" },
  { id: "NH2-2-1-3-SVOO", variant: "short", level: 3, slug: "dont-be-late" },
  { id: "NH2-2-5-1-HOW-TO", variant: "long", level: 7, slug: "show-me-the-seat" },
  { id: "NH1-1-11-1-MAYBE", variant: "short", level: 3, slug: "signal-under-water" },
  { id: "NH2-2-1-3-SVOO", variant: "short", level: 3, slug: "orbit-note" },
  { id: "NH1-1-11-1-MAYBE", variant: "short", level: 3, slug: "why-moon-robot" },
  { id: "NH1-1-11-1-MAYBE", variant: "short", level: 3, slug: "maybe-mars-window" },
  { id: "NH2-2-7-2-VOICE", variant: "long", level: 7, slug: "station-was-moved" },
  { id: "NH1-1-11-1-MAYBE", variant: "long", level: 7, slug: "where-the-roof-door" },
  { id: "NH2-2-1-3-SVOO", variant: "long", level: 7, slug: "traveling-shadow-ticket" },
  { id: "NH2-2-7-2-VOICE", variant: "long", level: 7, slug: "because-the-wall-listened" },
  { id: "NH2-2-7-2-VOICE", variant: "long", level: 7, slug: "how-to-read-the-stone" },
  { id: "NH2-2-6-MORE-THAN", variant: "long", level: 7, slug: "more-than-one-moon" },
  { id: "NH2-2-7-2-VOICE", variant: "very-long", level: 8, slug: "locked-umbrella-room" },
  { id: "NH2-2-7-2-VOICE", variant: "very-long", level: 8, slug: "last-seat-table" },
  { id: "NH2-2-7-2-VOICE", variant: "very-long", level: 8, slug: "library-moved" },
  { id: "NH2-2-7-2-VOICE", variant: "very-long", level: 8, slug: "moon-lantern-path" },
  { id: "NH2-2-7-2-VOICE", variant: "very-long", level: 8, slug: "folded-map-race" },
  { id: "NH2-2-7-2-VOICE", variant: "very-long", level: 8, slug: "jaio-pudding-case" },
  { id: "NH2-2-7-2-VOICE", variant: "short", level: 3, slug: "another-door-opens" },
  { id: "NH2-2-2-4-BECAUSE", variant: "short", level: 3, slug: "echo-on-the-moon" },
  { id: "NH1-1-6-V", variant: "short", level: 3, slug: "inside-the-kite" },
  { id: "NH2-2-3-1-SHOULD", variant: "short", level: 3, slug: "jiro-quiet-joke" },
  { id: "NH2-2-5-1-HOW-TO", variant: "short", level: 3, slug: "kaito-key-map" },
  { id: "NH2-2-1-3-SVOO", variant: "short", level: 3, slug: "noa-night-door" },
  { id: "NH2-2-3-1-SHOULD", variant: "short", level: 3, slug: "under-red-desk" },
  { id: "NH2-2-7-2-VOICE", variant: "short", level: 3, slug: "voices-in-wall" },
  { id: "NH2-2-6-MORE-THAN", variant: "short", level: 3, slug: "x-marks-lunch-box" },
  { id: "NH1-1-11-1-MAYBE", variant: "short", level: 3, slug: "yuna-thank-you-note" },
  { id: "NH2-2-4-1-HAVE-TO", variant: "short", level: 3, slug: "zero-at-station" },
  { id: "NH1-1-7-V", variant: "short", level: 3, slug: "green-glass-signal" },
  { id: "NH2-2-2-4-BECAUSE", variant: "short", level: 3, slug: "lost-library-card" },
  { id: "NH2-2-3-1-SHOULD", variant: "short", level: 3, slug: "open-on-monday" },
  { id: "NH1-1-7-V", variant: "short", level: 3, slug: "paper-star-plan" },
  { id: "NH2-2-3-1-SHOULD", variant: "short", level: 3, slug: "quiet-question" },
];

const DEFAULT_PROGRESS_ITEMS = PROGRESS_ITEMS.map((item) => ({ ...item }));
const DEFAULT_CONTENT_ITEMS = CONTENT_ITEMS.map((item) => ({ ...item }));

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
  const explicitTerms = normalizeListText([item.words, item.grammar, item.targets].filter(Boolean).join("\n"));
  if (explicitTerms.length) return explicitTerms;
  return String(item.label || "")
    .split(/[\n\r,、;；/]+/)
    .map((term) => term.trim())
    .filter(Boolean);
}

function gradeDetectionTerms(item) {
  const targets = normalizeListText(item.targets);
  return targets.length ? targets : defaultDetectionTerms(item);
}

function termMatchesText(term, text) {
  const trimmed = normalizeHeaderValue(term);
  if (!trimmed) return false;
  if (trimmed.startsWith("/") && trimmed.endsWith("/") && trimmed.length > 2) {
    try {
      return new RegExp(trimmed.slice(1, -1), "i").test(text);
    } catch {
      return false;
    }
  }
  const pattern = /^[a-z][a-z\s'-]*$/i.test(trimmed)
    ? `\\b${escapeRegExp(trimmed).replace(/\\ /g, "\\s+")}\\b`
    : escapeRegExp(trimmed);
  return new RegExp(pattern, "i").test(text);
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
    }))
    .filter((item) => item.id && !seenGrades.has(item.id) && seenGrades.add(item.id));
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
    .map((item, index) => ({ item, index, terms: gradeDetectionTerms(item) }))
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
    savedAt: new Date().toISOString(),
  }));
}

function loadCustomGradePayload() {
  try {
    const payload = JSON.parse(localStorage.getItem(CUSTOM_GRADES_STORAGE_KEY) || "null");
    if (!payload?.progressItems || !payload?.contentItems) return null;
    rebuildGradeData(payload.progressItems, payload.contentItems);
    return payload;
  } catch {
    return null;
  }
}

function resetCustomGrades() {
  localStorage.removeItem(CUSTOM_GRADES_STORAGE_KEY);
  rebuildGradeData(DEFAULT_PROGRESS_ITEMS, DEFAULT_CONTENT_ITEMS);
}

function gradeExportRows() {
  return PROGRESS_ITEMS.map((item, index) => ({
    Order: index + 1,
    Grade: item.id,
    Series: item.series,
    Label: item.label,
    "Words / \u5c0e\u5165\u5358\u8a9e": item.words || "",
    "Grammar / \u5c0e\u5165\u6587\u6cd5": item.grammar || "",
    "Detection Terms / \u691c\u51fa\u8a9e\u53e5": item.targets || defaultDetectionTerms(item).join(", "),
  }));
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
      ["\u5c0e\u5165\u5358\u8a9e\u30fb\u5c0e\u5165\u6587\u6cd5\u30fb\u691c\u51fa\u8a9e\u53e5\u306f\u3001\u30ab\u30f3\u30de\u3001\u8aad\u70b9\u3001\u30bb\u30df\u30b3\u30ed\u30f3\u3001\u6539\u884c\u3067\u8907\u6570\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002"],
      ["\u691c\u51fa\u8a9e\u53e5\u306f\u672c\u6587\u306eGrade\u81ea\u52d5\u5224\u5b9a\u306b\u4f7f\u3044\u307e\u3059\u3002\u7a7a\u6b04\u306e\u5834\u5408\u306f\u5c0e\u5165\u5358\u8a9e\u30fb\u5c0e\u5165\u6587\u6cd5\u30fbLabel\u3092\u4f7f\u3044\u307e\u3059\u3002\u6b63\u898f\u8868\u73fe\u306f /pattern/ \u306e\u5f62\u3067\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002"],
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
