import fs from "node:fs/promises";
import path from "node:path";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const outDir = "outputs/progress-map";
const outXlsx = path.join(outDir, "unified_current_id_story_map.xlsx");
const previewPng = path.join(outDir, "unified_current_id_story_map_preview.png");

const progressRows = [
  ["GDM-1", "GDM", 1, "1", "You / He / She / It", "代名詞", "GDM開始。短い現在形の人物・物語導入。", "book1画像転記"],
  ["GDM-10", "GDM", 2, "10", "This book is", "名詞句", "本やノートを手がかりにした短い謎。", "book1画像転記"],
  ["GDM-22", "GDM", 3, "22", "water / These pens are / them", "名詞・複数", "水・ペンなど具体物を使う観察や小事件。", "book1画像転記"],
  ["GDM-37-4", "GDM", 4, "37-4", "Where", "疑問詞", "場所探しの物語。", "book1画像転記"],
  ["GDM-41-10", "GDM", 5, "41-10", "see まとめ", "NH合流点", "ここまでGDM中心。以降はNHを中心に進める。", "book1画像転記"],
  ["NH1-0-FAMILY", "NH1", 6, "0", "brother / sister / mother / father / 's", "家族・所有", "NH合流直後の人物背景作り。", "NH1画像転記"],
  ["NH1-1-1-V", "NH1", 7, "1-1", "drink / play / watch / speak / study / read", "一般動詞", "日常行動を増やす。", "NH1画像転記"],
  ["NH1-1-3-CAN-Q", "NH1", 8, "1-1-3", "can question", "助動詞", "できる/できないを謎や解決に使う。", "NH1画像転記"],
  ["NH1-1-5-2-DONTBE", "NH1", 9, "1-5-2", "Don't be", "命令文", "注意・励まし・提案を会話に入れる。", "NH1画像転記"],
  ["NH1-1-6-V", "NH1", 10, "1-6", "write", "一般動詞", "手紙、メモ、暗号などの展開。", "NH1画像転記"],
  ["NH1-1-8-3-WHY", "NH1", 11, "1-8-3", "Why", "疑問詞", "理由を問うことで次の展開を作る。", "NH1画像転記"],
  ["NH1-1-10-V", "NH1", 12, "1-10", "travel / visit / listen / spend / stand / feel / get up", "一般動詞", "外出・訪問・気持ちを扱う。", "NH1画像転記"],
  ["NH1-1-11-1-MAYBE", "NH1", 13, "1-11-1", "maybe", "副詞", "推測を入れてミステリー感を作る。", "NH1画像転記"],
  ["NH2-2-1-3-SVOO", "NH2", 14, "2-1-3", "SVOO: show / teach / give", "文型", "誰が誰に何をするかを明確にする。", "NH2画像転記"],
  ["NH2-2-2-4-BECAUSE", "NH2", 15, "2-2-4", "because", "接続詞", "理由を本文の中で説明する。", "NH2画像転記"],
  ["NH2-2-3-1-SHOULD", "NH2", 16, "2-3-1", "should", "助動詞", "助言や判断を話の転機に使う。", "NH2画像転記"],
  ["NH2-2-4-1-HAVE-TO", "NH2", 17, "2-4-1", "have to", "助動詞相当", "しなければならない理由を作る。", "NH2画像転記"],
  ["NH2-2-5-1-HOW-TO", "NH2", 18, "2-5-1", "how to do", "疑問詞 + 不定詞", "方法を知ることが解決につながる話。", "NH2画像転記"],
  ["NH2-2-6-MORE-THAN", "NH2", 19, "2-6", "more than / half", "比較", "数や量の比較を使う。", "NH2画像転記"],
  ["NH2-2-7-2-VOICE", "NH2", 20, "2-7-2", "受け身", "何が誰によって行われたかを説明する。", "NH2画像転記"],
];

const contentRows = [
  ["GDM-41-10", "Mystery", "The Little Door", "graded-story", "Short", "lessons/graded-story/level-3.txt", "Long", "lessons/graded-story/level-7.txt"],
  ["NH1-1-1-V", "Human Drama", "The Quiet Bread Shop", "bread-shop", "Short", "lessons/bread-shop/level-3.txt", "Long", "lessons/bread-shop/level-7.txt"],
  ["NH1-1-3-CAN-Q", "SF", "The Star Bus", "star-bus", "Short", "lessons/star-bus/level-3.txt", "Long", "lessons/star-bus/level-7.txt"],
  ["NH1-1-5-2-DONTBE", "Comedy", "The Wrong Robot", "wrong-robot", "Short", "lessons/wrong-robot/level-3.txt", "Long", "lessons/wrong-robot/level-7.txt"],
  ["NH1-1-8-3-WHY", "Fantasy", "The Moon Cup", "moon-cup", "Short", "lessons/moon-cup/level-3.txt", "Long", "lessons/moon-cup/level-7.txt"],
  ["NH1-1-10-V", "Human Drama", "The Quiet Bread Shop", "bread-shop", "Short", "lessons/bread-shop/level-3.txt", "Long", "lessons/bread-shop/level-7.txt"],
  ["NH1-1-11-1-MAYBE", "Mystery", "The Little Door", "graded-story", "Short", "lessons/graded-story/level-3.txt", "Long", "lessons/graded-story/level-7.txt"],
  ["NH2-2-1-3-SVOO", "Human Drama", "The Quiet Bread Shop", "bread-shop", "Short", "lessons/bread-shop/level-3.txt", "Long", "lessons/bread-shop/level-7.txt"],
  ["NH2-2-2-4-BECAUSE", "Comedy", "The Wrong Robot", "wrong-robot", "Short", "lessons/wrong-robot/level-3.txt", "Long", "lessons/wrong-robot/level-7.txt"],
  ["NH2-2-3-1-SHOULD", "SF", "The Star Bus", "star-bus", "Short", "lessons/star-bus/level-3.txt", "Long", "lessons/star-bus/level-7.txt"],
  ["NH2-2-4-1-HAVE-TO", "Mystery", "The Little Door", "graded-story", "Short", "lessons/graded-story/level-3.txt", "Long", "lessons/graded-story/level-7.txt"],
  ["NH2-2-5-1-HOW-TO", "Fantasy", "The Moon Cup", "moon-cup", "Short", "lessons/moon-cup/level-3.txt", "Long", "lessons/moon-cup/level-7.txt"],
  ["NH2-2-6-MORE-THAN", "Human Drama", "The Quiet Bread Shop", "bread-shop", "Short", "lessons/bread-shop/level-3.txt", "Long", "lessons/bread-shop/level-7.txt"],
  ["NH2-2-7-2-VOICE", "Comedy", "The Wrong Robot", "wrong-robot", "Short", "lessons/wrong-robot/level-3.txt", "Long", "lessons/wrong-robot/level-7.txt"],
];

function write(sheet, row, col, rows) {
  sheet.getRangeByIndexes(row, col, rows.length, rows[0].length).values = rows;
}

function title(sheet, text, note, cols) {
  const titleRange = sheet.getRangeByIndexes(0, 0, 1, cols);
  titleRange.merge();
  titleRange.values = [[text]];
  titleRange.format.fill.color = "#143642";
  titleRange.format.font.color = "#FFFFFF";
  titleRange.format.font.bold = true;
  titleRange.format.font.size = 16;

  const noteRange = sheet.getRangeByIndexes(1, 0, 1, cols);
  noteRange.merge();
  noteRange.values = [[note]];
  noteRange.format.fill.color = "#EAF3F3";
  noteRange.format.font.color = "#143642";
  noteRange.format.wrapText = true;
}

function style(sheet, usedRange, headerRange, widths) {
  sheet.showGridLines = false;
  sheet.freezePanes.freezeRows(4);
  const used = sheet.getRange(usedRange);
  used.format.font.name = "Yu Gothic";
  used.format.font.size = 10;
  used.format.wrapText = true;
  used.format.verticalAlignment = "top";
  used.format.borders = { preset: "all", style: "thin", color: "#D9E2EC" };
  const header = sheet.getRange(headerRange);
  header.format.fill.color = "#235789";
  header.format.font.color = "#FFFFFF";
  header.format.font.bold = true;
  header.format.horizontalAlignment = "center";
  widths.forEach((width, index) => {
    sheet.getRangeByIndexes(0, index, 1, 1).format.columnWidth = width;
  });
}

const workbook = Workbook.create();

const howTo = workbook.worksheets.add("How_To_Use");
title(howTo, "Unified Current ID 方針", "GDMは41-10までを橋渡しとして使い、その後はNH1、NH2のCurrent IDを一本で指定する。本文量はShortとLongの二段階で選ぶ。", 2);
write(howTo, 3, 0, [
  ["項目", "内容"],
  ["Current ID", "GDMとNHを別々に指定しない。ひとつのCurrent IDだけを指定する。"],
  ["進行順", "GDM-41-10まではGDM中心。その後はNH1、NH2へ進む。"],
  ["候補表示", "サイトでは選択したCurrent ID以下の直近10 IDに紐づくコンテンツを表示する。"],
  ["本文量", "Shortは120〜180語程度。Longは300〜450語程度。UIでは旧段階表記を使わない。"],
  ["注意", "既存本文を新しいID体系へ紐づけ直した表。個別IDの必須語・文法を完全反映する新作本文は今後追加する。"],
]);
style(howTo, "A4:B9", "A4:B4", [24, 110]);

const request = workbook.worksheets.add("Story_Request");
title(request, "Story Request", "本文生成時に使う入力欄。Current IDは1つだけ指定し、LengthでShort/Longを選ぶ。", 4);
write(request, 3, 0, [
  ["項目", "入力例", "選択肢・説明", "生成時の扱い"],
  ["Current ID", "NH1-1-8-3-WHY", "Unified_ProgressのCurrent IDから選ぶ", "このIDまでのGDM/NH項目を使用可"],
  ["Length", "Short", "Short / Long", "Short=120〜180語程度、Long=300〜450語程度"],
  ["Genre", "Mystery", "Mystery / Human Drama / SF / Fantasy / Comedy", "ジャンルの声と展開を変える"],
  ["Target Reader", "中学生", "英語塾向け", "名詞は必要ならリスト外も可"],
  ["Story Shape", "4コマ的な起承転結", "明るい終わり", "次の展開が気になる構成にする"],
]);
style(request, "A4:D10", "A4:D4", [22, 28, 48, 64]);
request.getRange("B5:B10").format.fill.color = "#FFF7D6";

const progress = workbook.worksheets.add("Unified_Progress");
title(progress, "Unified Progress Map", "GDM合流点以降はNHを中心にNH2まで進める、単一Current IDの進行表。", 8);
write(progress, 3, 0, [
  ["Current ID", "Series", "Order", "Source ID", "導入項目", "分類", "物語での使い方", "確認状態"],
  ...progressRows,
]);
style(progress, `A4:H${4 + progressRows.length}`, "A4:H4", [24, 12, 10, 14, 42, 18, 68, 18]);

const content = workbook.worksheets.add("Content_Map");
title(content, "Content Map", "既存本文を新Current IDへ紐づけ、Short/Longの二段階で選べるようにした表。", 8);
write(content, 3, 0, [
  ["Current ID", "Genre", "Title", "Slug", "Short Label", "Short Text", "Long Label", "Long Text"],
  ...contentRows,
]);
style(content, `A4:H${4 + contentRows.length}`, "A4:H4", [24, 18, 30, 20, 14, 40, 14, 40]);

const prompt = workbook.worksheets.add("Prompt_Template");
title(prompt, "Prompt Template", "生成時はCurrent IDを1つだけ使い、本文量をShort/Longで指定する。", 2);
write(prompt, 3, 0, [
  ["項目", "テンプレート"],
  ["生成指示", "Current IDは {Current ID}。GDM-41-10まではGDMを使い、以降はNH1/NH2の進行順に沿って、このIDまでの語彙・文法を使用する。"],
  ["本文量", "{Length} で生成する。Shortは120〜180語程度、Longは300〜450語程度。"],
  ["必須項目", "指定されたCurrent IDそのものの導入語・文法は本文に必ず自然に入れる。"],
  ["物語品質", "4コマ的な起承転結を持たせ、最後は明るく、次の展開が気になる本文にする。"],
  ["出力", "Title / Current ID / Length / Genre / English text / used target items memo"],
]);
style(prompt, "A4:B9", "A4:B4", [24, 120]);

for (const sheet of [howTo, request, progress, content, prompt]) {
  sheet.getUsedRange().format.autofitRows();
}

await fs.mkdir(outDir, { recursive: true });
const xlsx = await SpreadsheetFile.exportXlsx(workbook);
await xlsx.save(outXlsx);

if (process.env.RENDER_PREVIEW === "1") {
  const preview = await workbook.render({ sheetName: "Unified_Progress", autoCrop: "all", scale: 1, format: "png" });
  await fs.writeFile(previewPng, new Uint8Array(await preview.arrayBuffer()));
}

console.log(outXlsx);
