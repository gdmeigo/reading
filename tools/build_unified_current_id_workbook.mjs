import fs from "node:fs/promises";
import path from "node:path";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const outDir = "outputs/progress-map";
const outXlsx = path.join(outDir, "unified_current_id_story_map.xlsx");
const previewPng = path.join(outDir, "unified_current_id_story_map_preview.png");

const progressRows = [
  ["GDM-1", "GDM", "1", "1", "You / He / She / It", "代名詞", "人物の正体や視点を作る。短い会話の芯にする。", "画像転記"],
  ["GDM-4-1", "GDM", "2", "4-1", "is / here / there", "be動詞・場所", "物や人がどこにいるかを示す。", "画像転記"],
  ["GDM-4-2", "GDM", "3", "4-2", "am / are", "be動詞", "自己紹介、複数人物の場面に使う。", "画像転記"],
  ["GDM-4-3", "GDM", "4", "4-3", "We / They / You", "代名詞", "グループ行動や誤解を作る。", "画像転記"],
  ["GDM-8-1", "GDM", "5", "8-1", "This / That", "指示語", "近い物と遠い物の取り違えを作る。", "画像転記"],
  ["GDM-8-2A", "GDM", "6", "8-2", "his / her", "所有", "持ち主の誤解を作る。", "画像転記"],
  ["GDM-8-2B", "GDM", "7", "8-2", "my / your (his / her の前に)", "所有", "手紙、落とし物、交換に使う。", "画像転記"],
  ["GDM-8-3", "GDM", "8", "8-3", "my / your (his / her 学習済み)", "所有", "所有語を組み合わせる。", "画像転記"],
  ["GDM-8-4", "GDM", "9", "8-4", "a man / a woman / a", "冠詞・人物", "初登場人物を出す。", "画像転記"],
  ["GDM-10", "GDM", "10", "10", "This book is", "名詞句", "本やノートをきっかけに謎を置く。", "画像転記"],
  ["GDM-10-2", "GDM", "11", "10-2", "My / Your / His / Her book is here", "所有・場所", "本の持ち主を追う物語にする。", "画像転記"],
  ["GDM-11-1", "GDM", "12", "11-1", "in / on 1回目 (1文)", "前置詞", "隠された物を探す。", "画像転記"],
  ["GDM-11-2", "GDM", "13", "11-2", "in / on 2回目 (in拡張)", "前置詞", "箱、机、袋などの中を使う。", "画像転記"],
  ["GDM-11-3", "GDM", "14", "11-3", "in / on 3,4回目 / the 導入", "冠詞・前置詞", "指さない the を使い、場所を自然にする。", "画像転記"],
  ["GDM-11-4", "GDM", "15", "11-4", "in / on 5回目 (on拡張)", "前置詞", "上にある物の違和感を使う。", "画像転記"],
  ["GDM-11-5", "GDM", "16", "11-5", "in / on 6回目 (a の次の the)", "冠詞", "初登場後に同じ物を追う。", "画像転記"],
  ["GDM-11-6", "GDM", "17", "11-6", "in / on 7回目 2文で", "文連結", "2文で状況と変化を描く。", "画像転記"],
  ["GDM-13-1", "GDM", "18", "13-1", "These / Those", "指示語・複数", "複数の物の取り違えに使う。", "画像転記"],
  ["GDM-13-2A", "GDM", "19", "13-2", "These / Those / They", "指示語・代名詞", "同じ物を They で受ける。", "画像転記"],
  ["GDM-13-2B", "GDM", "20", "13-2", "right / left", "方向", "左右の合図、地図、座席を使う。", "画像転記"],
  ["GDM-14-1", "GDM", "21", "14-1", "off", "動作", "取れる、外れる、消えるなどの転に使う。", "画像転記"],
  ["GDM-14-2", "GDM", "22", "14-2", "taking / took", "動詞 take", "誰かが取った謎を作る。", "画像転記"],
  ["GDM-14-3", "GDM", "23", "14-3", "will take", "未来", "次に何を取るか予告する。", "画像転記"],
  ["GDM-15-1", "GDM", "24", "15-1", "putting / put", "動詞 put", "置き場所の違和感を作る。", "画像転記"],
  ["GDM-15-2", "GDM", "25", "15-2", "will put", "未来", "置く場所をめぐる計画にする。", "画像転記"],
  ["GDM-15-4", "GDM", "26", "15-4", "put it on (身につける)", "句動詞", "帽子、上着、名札などで人物を区別する。", "画像転記"],
  ["GDM-15-5", "GDM", "27", "15-5", "was", "過去 be", "過去の位置と現在の位置を比べる。", "画像転記"],
  ["GDM-17", "GDM", "28", "17", "men / women", "複数名詞", "大人の登場人物を増やす。", "画像転記"],
  ["GDM-18A", "GDM", "29", "18", "Aki's / Meg's", "所有格", "名前付き人物の持ち物で話を動かす。", "画像転記"],
  ["GDM-18B", "GDM", "30", "18", "the man's", "所有格", "知らない人物の持ち物にする。", "画像転記"],
  ["GDM-19-1", "GDM", "31", "19-1", "giving / gave", "動詞 give", "手渡し、贈り物、返却に使う。", "画像転記"],
  ["GDM-19-2", "GDM", "32", "19-2", "will give / him / her", "未来・目的語", "誰に渡すかを焦点にする。", "画像転記"],
  ["GDM-21", "GDM", "33", "21", "(them were)", "代名詞・過去", "複数の物の過去状態を扱う。", "画像転記"],
  ["GDM-22", "GDM", "34", "22", "water / These pens are / them", "名詞・複数", "水やペンを使う実験・いたずらに使う。", "画像転記"],
  ["GDM-23", "GDM", "35", "23", "and", "接続詞", "2つの行動や性質をつなぐ。", "画像転記"],
  ["GDM-24", "GDM", "36", "24", "an (its の前にやる)", "冠詞", "母音始まりの名詞を扱う。", "画像転記"],
  ["GDM-25", "GDM", "37", "25", "its / arm / foot / leg", "所有・体", "ロボット、人形、ポスターの描写に使う。", "画像転記"],
  ["GDM-26", "GDM", "38", "26", "open / shut", "形容詞・動詞", "扉や箱を使う謎にする。", "画像転記"],
  ["GDM-26-2", "GDM", "39", "26-2", "put (書く)", "動詞 put", "書く、置くの意味を整理する。", "画像転記"],
  ["GDM-27-1", "GDM", "40", "27-1", "its - a leg of", "部分", "物の一部を描写する。", "画像転記"],
  ["GDM-27-2", "GDM", "41", "27-2", "legs of / the legs of", "部分・冠詞", "複数部分を扱う。", "画像転記"],
  ["GDM-29-1", "GDM", "42", "29-1", "at / will go / going", "移動", "目的地へ向かう展開を作る。", "画像転記"],
  ["GDM-29-2", "GDM", "43", "29-2", "went", "過去 go", "行った先で発見する話にする。", "画像転記"],
  ["GDM-30-1", "GDM", "44", "30-1", "What", "疑問詞", "物の正体を問う。", "画像転記"],
  ["GDM-30-2", "GDM", "45", "30-2", "Yes / No / Is this", "疑問文", "確認の会話を入れる。", "画像転記"],
  ["GDM-30-3", "GDM", "46", "30-3", "Are these", "疑問文・複数", "複数物の確認を入れる。", "画像転記"],
  ["GDM-30-5", "GDM", "47", "30-5", "Q所有格", "疑問文・所有", "持ち主を問う。", "画像転記"],
  ["GDM-35-1", "GDM", "48", "35-1", "What time", "時刻", "待ち合わせや時間制限を作る。", "画像転記"],
  ["GDM-35-2", "GDM", "49", "35-2", "will be", "未来 be", "未来の状態を予告する。", "画像転記"],
  ["GDM-36", "GDM", "50", "36", "from", "前置詞", "出どころ、差出人、出発点を示す。", "画像転記"],
  ["GDM-37", "GDM", "51", "37", "a / the / The (There is / There are)", "存在文", "目の前の発見を描く。", "画像転記"],
  ["GDM-37-1", "GDM", "52", "37-1", "a thing / person", "名詞", "未知の物・人を出す。", "画像転記"],
  ["GDM-37-2A", "GDM", "53", "37-2", "(by)", "前置詞", "近くにある物、人の位置に使う。", "画像転記"],
  ["GDM-37-2B", "GDM", "54", "37-2", "There is / There are", "存在文", "発見場面を作る。", "画像転記"],
  ["GDM-37-3A", "GDM", "55", "37-3", "with", "前置詞", "特徴や持ち物を描く。", "画像転記"],
  ["GDM-37-3B", "GDM", "56", "37-3", "will be with", "未来・with", "一緒にいる予定を作る。", "画像転記"],
  ["GDM-37-4", "GDM", "57", "37-4", "Where", "疑問詞", "場所探しの物語にする。", "画像転記"],
  ["GDM-37-4B", "GDM", "58", "37-4", "Where と What の整理", "疑問詞", "場所と物の質問を整理する。", "画像転記"],
  ["GDM-37-5", "GDM", "59", "37-5", "but", "接続詞", "予想外の転換を作る。", "画像転記"],
  ["GDM-37-6", "GDM", "60", "37-6", "together", "副詞", "協力して解決する話にする。", "画像転記"],
  ["GDM-37-7", "GDM", "61", "37-7", "again", "副詞", "もう一度試す、やり直す展開にする。", "画像転記"],
  ["GDM-40", "GDM", "62", "40", "one / the other", "代名詞", "2つの選択肢、片方だけ違う話にする。", "画像転記"],
  ["GDM-40-1", "GDM", "63", "40-1", "our / their", "所有", "チームや家族の持ち物にする。", "画像転記"],
  ["GDM-41-1", "GDM", "64", "41-1", "see / do not see", "知覚・否定", "見える/見えないの謎を作る。", "画像転記"],
  ["GDM-41-2", "GDM", "65", "41-2", "sees / does not see", "三単現・否定", "人物ごとに見え方が違う話にする。", "画像転記"],
  ["GDM-41-4", "GDM", "66", "41-4", "see Question", "疑問文", "何が見えるか問う。", "画像転記"],
  ["GDM-41-5", "GDM", "67", "41-5", "sees Question", "三単現疑問", "特定人物が見るものを問う。", "画像転記"],
  ["GDM-41-6", "GDM", "68", "41-6", "do / does / see Q に答える", "疑問応答", "beVと混同しない練習。", "画像転記"],
  ["GDM-41-7", "GDM", "69", "41-7", "saw / did not see", "過去・否定", "昨日見た/見なかったを使う。", "画像転記"],
  ["GDM-41-8", "GDM", "70", "41-8", "did Question", "過去疑問", "過去の目撃情報を聞く。", "画像転記"],
  ["GDM-41-9", "GDM", "71", "41-9", "will see", "未来", "これから見えるものを予告する。", "画像転記"],
  ["GDM-41-10", "GDM", "72", "41-10", "see まとめ", "NH1併用開始目安", "ここまでをGDM基礎の一区切りとし、NH1を混ぜ始める。", "画像転記"],
  ["NH1-0-FAMILY", "NH1", "73", "0", "中1 's / brother / sister / mother / father", "所有・家族", "家族関係と所有で人物背景を作る。", "画像転記"],
  ["NH1-1-MAY-I", "NH1", "74", "1", "May I", "許可", "お願い、許可、丁寧な会話を入れる。", "画像転記"],
  ["NH1-1-WILL-Q", "NH1", "75", "1", "Will question", "未来疑問", "次の展開を問う。", "画像転記"],
  ["NH1-1-1-V", "NH1", "76", "1-1", "drink / play / watch / speak / study / read", "一般動詞", "日常行動の幅を増やす。", "画像転記"],
  ["NH1-1-1-BEV-Q", "NH1", "77", "1-1", "be動詞 Question", "疑問文", "人物・状態を問う。", "画像転記"],
  ["NH1-1-1-CALL-IT", "NH1", "78", "1-1-2", "Call it", "表現", "物や作戦の名前をつける。", "画像転記"],
  ["NH1-1-3-CAN-Q", "NH1", "79", "1-1-3", "can(Q)", "助動詞", "できる/できないを物語の鍵にする。", "画像転記"],
  ["NH1-1-2-V", "NH1", "80", "1-2", "walk / have(eat)", "一般動詞", "移動・食事の場面を足す。", "画像転記"],
  ["NH1-1-2-FOR", "NH1", "81", "1-2-2", "for", "前置詞", "目的や相手を示す。", "画像転記"],
  ["NH1-1-2-BEV2", "NH1", "82", "1-2-2", "be動詞 2", "文法整理", "be動詞の復習。", "画像転記"],
  ["NH1-1-3-V", "NH1", "83", "1-3", "practice / bring", "一般動詞", "練習、持参、準備に使う。", "画像転記"],
  ["NH1-1-3-1-BEFORE", "NH1", "84", "1-3-1", "before (concert)", "接続詞", "イベント前の行動を描く。", "画像転記"],
  ["NH1-1-3-1-PRESENT", "NH1", "85", "1-3-1", "一般時制", "文法", "普段することを説明する。", "画像転記"],
  ["NH1-1-3-2-WANT", "NH1", "86", "1-3-2", "want to do / be", "不定詞", "目的や願いを物語の動機にする。", "画像転記"],
  ["NH1-1-3-2-PRESENT2", "NH1", "87", "1-3-2", "一般時制 2", "文法", "三人称などを整理する。", "画像転記"],
  ["NH1-1-3-2-HOW-MANY", "NH1", "88", "1-3-2", "How many", "疑問詞", "数の謎や確認に使う。", "画像転記"],
  ["NH1-1-3-3-BRING", "NH1", "89", "1-3-3", "bring(V)", "一般動詞", "必要な物を持ってくる展開にする。", "画像転記"],
  ["NH1-1-4-1-ENJOY", "NH1", "90", "1-4-1", "enjoy yourself", "表現", "楽しい結末やイベントに使う。", "画像転記"],
  ["NH1-1-4-1-DONT", "NH1", "91", "1-4-1", "命令 / Don't (Unit4)", "命令文", "禁止や注意を出す。", "画像転記"],
  ["NH1-1-4-1-BE", "NH1", "92", "1-4-1", "命令: Be で始まる文", "命令文", "Be careful などの指示に使う。", "画像転記"],
  ["NH1-1-4-1-GLASS", "NH1", "93", "1-4-1A", "a glass of water (Unit4)", "名詞句", "飲み物、小道具に使う。", "画像転記"],
  ["NH1-1-4-2-DURING", "NH1", "94", "1-4-2", "during", "前置詞", "授業中、試合中などに使う。", "画像転記"],
  ["NH1-1-4-2-AFTER", "NH1", "95", "1-4-2", "after (second period)", "前置詞", "何かの後に起きる展開にする。", "画像転記"],
  ["NH1-1-4-2-SOME", "NH1", "96", "1-4-2", "some / any / many (Unit4)", "数量", "数や量の情報を加える。", "画像転記"],
  ["NH1-1-5-V", "NH1", "97", "1-5", "jog / need / eat / enjoy", "一般動詞", "健康、食事、楽しさを出す。", "画像転記"],
  ["NH1-1-5-WRONG", "NH1", "98", "1-5", "What's wrong", "会話", "困りごとから話を始める。", "画像転記"],
  ["NH1-1-5-2-DONTBE", "NH1", "99", "1-5-2", "Don't be", "命令文", "励ましや注意に使う。", "画像転記"],
  ["NH1-1-5-2-LETS", "NH1", "100", "1-5-2", "Let's", "提案", "協力して行動する展開にする。", "画像転記"],
  ["NH1-1-5-2-SOMETHING", "NH1", "101", "1-5-2", "something / nothing", "代名詞", "何かある/何もないの意外性を作る。", "画像転記"],
  ["NH1-1-5-2-HOW", "NH1", "102", "1-5-2", "How (どのように) (Unit5)", "疑問詞", "方法を問う。", "画像転記"],
  ["NH1-1-6-V", "NH1", "103", "1-6", "write", "一般動詞", "手紙、メモ、暗号に使う。", "画像転記"],
  ["NH1-1-6-2-ABOUT", "NH1", "104", "1-6-2", "about (Unit3)", "前置詞", "何についてかを示す。", "画像転記"],
  ["NH1-1-6-2-ONE", "NH1", "105", "1-6-2", "one 支柱語", "代名詞", "同種の物を受ける。", "画像転記"],
  ["NH1-1-6-3-ANYONE", "NH1", "106", "1-6-3", "anyone", "代名詞", "誰か/誰もを使う。", "画像転記"],
  ["NH1-1-7-V", "NH1", "107", "1-7", "know / make / buy", "一般動詞", "知る、作る、買うを使う。", "画像転記"],
  ["NH1-1-7-3-WHOSE", "NH1", "108", "1-7-3", "Whose (Unit8)", "疑問詞", "持ち主探しに使う。", "画像転記"],
  ["NH1-1-8-V", "NH1", "109", "1-8", "talk / think about / decorate / prepare", "一般動詞", "相談、準備、飾り付けに使う。", "画像転記"],
  ["NH1-1-8-3-WHY", "NH1", "110", "1-8-3", "Why", "疑問詞", "理由を問う。", "画像転記"],
  ["NH1-1-8-3-EXCLAMATION", "NH1", "111", "1-8-3", "感嘆文 What a cute bag", "感嘆文", "驚きや喜びを出す。", "画像転記"],
  ["NH1-1-8-3-QUICKLY", "NH1", "112", "1-8-3", "quickly", "副詞", "動作の速さで緊張感を出す。", "画像転記"],
  ["NH1-1-9-V", "NH1", "113", "1-9", "wait / get / build / understand / collect", "一般動詞", "待つ、集める、理解する展開に使う。", "画像転記"],
  ["NH1-1-9-1-AS", "NH1", "114", "1-9-1", "as (a doctor)", "前置詞", "役割や身分を示す。", "画像転記"],
  ["NH1-1-9-1-AM-NOT-SURE", "NH1", "115", "1-9-1", "I am not sure about", "表現", "不確かさを出し、次を読ませる。", "画像転記"],
  ["NH1-1-9-3-LOOK-HAPPY", "NH1", "116", "1-9-3", "They look happy", "連結動詞", "表情や状態を描く。", "画像転記"],
  ["NH1-1-10-V", "NH1", "117", "1-10", "travel / visit / listen / spend / stand / feel / get up", "一般動詞", "外出、訪問、経験の話に使う。", "画像転記"],
  ["NH1-1-10-1-FULL-OF", "NH1", "118", "1-10-1", "full of", "形容詞句", "物がいっぱいの場面に使う。", "画像転記"],
  ["NH1-1-10-3-GET-UP", "NH1", "119", "1-10-3", "get up (early)", "句動詞", "朝の始まりを描く。", "画像転記"],
  ["NH1-1-10-3-HOW-NICE", "NH1", "120", "1-10-3", "How nice! (Unit8)", "感嘆文", "明るい反応やハッピーエンドに使う。", "画像転記"],
  ["NH1-1-11-V", "NH1", "121", "1-11", "join / hope / set up / pick up / look for / bring back / beat", "一般動詞", "参加、探す、取り戻す展開に使う。", "画像転記"],
  ["NH1-1-11-DID-Q", "NH1", "122", "1-11", "Did Q", "過去疑問", "過去の出来事を確認する。", "画像転記"],
  ["NH1-1-11-1-AGAINST", "NH1", "123", "1-11-1", "against", "前置詞", "試合、反対、接触の表現に使う。", "画像転記"],
  ["NH1-1-11-1-MAYBE", "NH1", "124", "1-11-1", "maybe", "副詞", "推測を入れてミステリー感を出す。", "画像転記"],
  ["NH2-2-1-3-SVOO", "NH2", "125", "2-1-3", "SVOO: show / teach / give", "文型", "誰が誰に何をするかを明確にする。", "legacy NH2 milestone"],
  ["NH2-2-2-4-BECAUSE", "NH2", "126", "2-2-4", "because", "接続詞", "理由を本文の中で説明する。", "legacy NH2 milestone"],
  ["NH2-2-3-1-SHOULD", "NH2", "127", "2-3-1", "should", "助動詞", "助言や判断を話の転機に使う。", "legacy NH2 milestone"],
  ["NH2-2-4-1-HAVE-TO", "NH2", "128", "2-4-1", "have to", "助動詞相当", "しなければならない理由を作る。", "legacy NH2 milestone"],
  ["NH2-2-5-1-HOW-TO", "NH2", "129", "2-5-1", "how to do", "疑問詞 + 不定詞", "方法を知ることが解決につながる話。", "legacy NH2 milestone"],
  ["NH2-2-6-MORE-THAN", "NH2", "130", "2-6", "more than / half", "比較", "数や量の比較を使う。", "legacy NH2 milestone"],
  ["NH2-2-7-2-VOICE", "NH2", "131", "2-7-2", "passive voice", "受け身", "何が誰によって行われたかを説明する。", "legacy NH2 milestone"],
  ["GDM-42-1", "GDM", "132", "42-1", "has / have", "所有", "人物の持ち物、手がかりに使う。", "画像転記"],
  ["GDM-42-2A", "GDM", "133", "42-2", "do not / does not 混ざったもの", "否定", "人物ごとの否定を整理する。", "画像転記"],
  ["GDM-42-2B", "GDM", "134", "42-2", "has / have Question", "疑問文", "誰が持っているか問う。", "画像転記"],
  ["GDM-42-4", "GDM", "135", "42-4", "say", "発話", "証言やメッセージを出す。", "画像転記"],
  ["GDM-42-6", "GDM", "136", "42-6", "like 要考察", "動詞 like", "好みを物語の動機にする。", "画像転記"],
  ["GDM-44", "GDM", "137", "44", "between / under / over", "前置詞", "位置関係の謎を増やす。", "画像転記"],
  ["GDM-44-3", "GDM", "138", "44-3", "between the other two hats", "前置詞", "3つの帽子などを使う。", "画像転記"],
  ["GDM-44-5", "GDM", "139", "44-5", "一般時制 every / play / go", "一般現在", "日常習慣にする。", "画像転記"],
  ["GDM-45-1", "GDM", "140", "45-1", "中学前の整理: 日本語と英語の語順の違い", "語順", "文作りの確認回。", "画像転記"],
  ["GDM-45-2", "GDM", "141", "45-2", "中学前の整理: beV Q", "疑問文", "be動詞疑問文の確認。", "画像転記"],
  ["GDM-45-3", "GDM", "142", "45-3", "part", "名詞", "部分・役割を扱う。", "画像転記"],
  ["GDM-45-3B", "GDM", "143", "45-3", "中学前の整理: do / does Q", "疑問文", "一般動詞疑問文の確認。", "画像転記"],
  ["GDM-46", "GDM", "144", "46", "before / after", "接続詞", "順番や時間差で起承転結を作る。", "画像転記"],
  ["GDM-46-2", "GDM", "145", "46-2", "before SV", "接続詞", "行動の前後を文で示す。", "画像転記"],
  ["GDM-46-4", "GDM", "146", "46-4", "take it from", "句動詞", "どこから取ったかを示す。", "画像転記"],
  ["GDM-47-1", "GDM", "147", "47-1", "have no", "否定", "持っていないことを手がかりにする。", "画像転記"],
  ["GDM-47-2A", "GDM", "148", "47-2", "Then 未来", "接続副詞", "次の展開をつなぐ。", "画像転記"],
  ["GDM-47-2B", "GDM", "149", "47-2", "had", "過去 have", "前に持っていた物を追う。", "画像転記"],
  ["GDM-47-3", "GDM", "150", "47-3", "us", "代名詞", "仲間への行動にする。", "画像転記"],
  ["GDM-47-4", "GDM", "151", "47-4", "has in it / on it", "位置・所有", "箱や袋の中身を描く。", "画像転記"],
  ["GDM-47-5", "GDM", "152", "47-5", "one of them", "代名詞", "複数の中の1つを選ぶ。", "画像転記"],
  ["GDM-48", "GDM", "153", "48", "Which", "疑問詞", "どちらか選ぶ謎にする。", "画像転記"],
  ["GDM-48-2", "GDM", "154", "48-2", "one of the windows", "部分", "複数の窓・扉などから選ぶ。", "画像転記"],
  ["GDM-49-1", "GDM", "155", "49-1", "which(rel.) 子供大人共通", "関係代名詞", "物を説明する節を入れる。", "画像転記"],
  ["GDM-49-10", "GDM", "156", "49-10", "後 The which(rel.) 美作文", "関係代名詞", "少し長い説明文にする。", "画像転記"],
  ["GDM-49-2", "GDM", "157", "49-2", "all", "数量", "全員・全部の誤解を作る。", "画像転記"],
  ["GDM-49-3", "GDM", "158", "49-3", "no A or B", "否定", "AもBもない状況を作る。", "画像転記"],
  ["GDM-49-4", "GDM", "159", "49-4", "A or B(Q)", "選択疑問", "二択の会話を作る。", "画像転記"],
  ["GDM-50", "GDM", "160", "50", "This part of", "部分", "一部だけ違う物を扱う。", "画像転記"],
  ["GDM-50B", "GDM", "161", "50", "which(rel.) 主語につく", "関係代名詞", "主語を説明する節にする。", "画像転記"],
  ["GDM-51", "GDM", "162", "51", "chest of drawers / on his knees", "名詞句", "家具・姿勢を描く。", "画像転記"],
  ["GDM-58-1", "GDM", "163", "58-1", "Who(Q)", "疑問詞", "誰がしたかを問う。", "画像転記"],
  ["GDM-58-2A", "GDM", "164", "58-2", "give a hint / push / lock / who / come", "動詞", "謎解き、鍵、ヒントに使う。", "画像転記"],
  ["GDM-58-2B", "GDM", "165", "58-2", "other keys / another", "代名詞", "鍵の取り違えに使う。", "画像転記"],
  ["GDM-60-1", "GDM", "166", "60-1", "come", "動詞", "誰かが来る展開にする。", "画像転記"],
  ["GDM-60-2", "GDM", "167", "60-2", "into / out of / through", "前置詞", "出入りや通過を描く。", "画像転記"],
  ["GDM-61", "GDM", "168", "61", "one another / the other two hats", "代名詞", "互いの関係や3者の関係を扱う。", "画像転記"],
  ["GDM-64A", "GDM", "169", "64", "did question (give, put, go)", "過去疑問", "過去の行動を聞く。", "画像転記"],
  ["GDM-64B", "GDM", "170", "64", "When(Q), after SV", "疑問詞・接続詞", "いつ起きたかを問う。", "画像転記"],
  ["GDM-66", "GDM", "171", "66", "take it in / go with 物", "句動詞", "物を持って行く、同行する。", "画像転記"],
  ["GDM-69", "GDM", "172", "69", "Here is Mary", "提示", "人物の登場を自然にする。", "画像転記"],
  ["GDM-70", "GDM", "173", "70", "get", "動詞", "手に入れる、到着するを扱う。", "画像転記"],
  ["GDM-70-2", "GDM", "174", "70-2", "go with 物 / in my hand", "前置詞句", "手に持った物を描く。", "画像転記"],
  ["GDM-72A", "GDM", "175", "72", "when(rel.)", "関係副詞", "時を説明する文へ広げる。", "画像転記"],
  ["GDM-72-3", "GDM", "176", "72-3", "what(rel.)", "関係詞", "内容を説明する。", "画像転記"],
  ["GDM-72-4", "GDM", "177", "72-4", "命令文 See, Don't", "命令文", "注意、指示、禁止を入れる。", "画像転記"],
  ["GDM-75-1", "GDM", "178", "75-1", "過去進行形 was doing", "過去進行", "その時していたことを描く。", "画像転記"],
  ["GDM-75-2", "GDM", "179", "75-2", "go up / down", "動詞句", "階段、エレベーター、坂に使う。", "画像転記"],
  ["GDM-75-3", "GDM", "180", "75-3", "go after", "動詞句", "追いかける展開にする。", "画像転記"],
  ["GDM-75-4", "GDM", "181", "75-4", "take it up / take it down", "句動詞", "上げ下ろしする物に使う。", "画像転記"],
  ["GDM-77-1", "GDM", "182", "77-1", "Is she taking, putting (進行形Q)", "進行形疑問", "今している動作を問う。", "画像転記"],
  ["GDM-77-2", "GDM", "183", "77-2", "What is she doing? (進行形Q)", "進行形疑問", "見た場面を質問する。", "画像転記"],
  ["GDM-77-3", "GDM", "184", "77-3", "knives", "複数名詞", "道具や料理の場面に使う。", "画像転記"],
  ["GDM-78B", "GDM", "185", "78", "take to (+ plate of soup, knives, What will you do)", "動詞句", "食事や道具を運ぶ。", "画像転記"],
  ["GDM-79A", "GDM", "186", "79", "Nobody / new old clothing", "代名詞・形容詞", "誰もいない、服装の違いに使う。", "画像転記"],
  ["GDM-79B", "GDM", "187", "79", "take their soup", "所有・動詞", "食事を取る/運ぶ話にする。", "画像転記"],
  ["GDM-80A", "GDM", "188", "80", "What will you do / Will Q", "未来疑問", "次の行動を選ぶ。", "画像転記"],
  ["GDM-80-2", "GDM", "189", "80-2", "a plate of soup", "名詞句", "食卓の小事件に使う。", "画像転記"],
  ["GDM-82", "GDM", "190", "82", "before / after, When(Q)", "接続詞", "未出来の要考察項目。", "画像転記"],
  ["GDM-82B", "GDM", "191", "82", "up / down", "副詞", "上下移動を扱う。", "画像転記"],
  ["GDM-83A", "GDM", "192", "83", "nothing / something", "代名詞", "何もない/何かあるの意外性を作る。", "画像転記"],
  ["GDM-83B", "GDM", "193", "83", "Then 過去", "接続副詞", "過去の出来事をつなぐ。", "画像転記"],
  ["GDM-84", "GDM", "194", "84", "front / back", "位置", "表裏・前後の取り違えを作る。", "画像転記"],
  ["GDM-91", "GDM", "195", "91", "make / make from", "動詞 make", "工作や変化に使う。", "画像転記"],
  ["GDM-91-1", "GDM", "196", "91-1", "some / get (一般時制)", "数量・動詞", "少し手に入れる展開にする。", "画像転記"],
  ["GDM-91-2", "GDM", "197", "91-2", "一般時制 (get以外の動画), skin", "一般現在", "自然・生き物の描写に使う。", "画像転記"],
  ["GDM-92", "GDM", "198", "92", "plant", "名詞・動詞", "植物や栽培の話にする。", "画像転記"],
  ["GDM-93-1", "GDM", "199", "93-1", "make(SVOC), make it green, make it go", "SVOC", "変化や動作を起こす。", "画像転記"],
  ["GDM-93-1-2", "GDM", "200", "93-1-2", "make(SVOC)", "SVOC", "目的語の状態変化を使う。", "画像転記"],
  ["GDM-93-2", "GDM", "201", "93-2", "boiling / steam / heat / flame / give off", "科学語彙", "実験・観察の話に使える。", "画像転記"],
  ["GDM-94", "GDM", "202", "94", "solid / a liquid / ice", "科学語彙", "状態変化の話に使える。", "画像転記"],
  ["GDM-94-2", "GDM", "203", "94-2", "breath / it goes ou", "動作・観察", "息や空気の観察に使う。", "画像転記"],
  ["GDM-95", "GDM", "204", "95", "go (一般時制)", "一般現在", "日常の移動を描く。", "画像転記"],
  ["GDM-96-1", "GDM", "205", "96-1", "keep", "動詞", "状態を保つ、持ち続ける。", "画像転記"],
  ["GDM-96-2", "GDM", "206", "96-2", "keep (SVOC)", "SVOC", "何かをある状態に保つ。", "画像転記"],
  ["GDM-97-1", "GDM", "207", "97-1", "measure / measuring / cm long", "測定", "長さを測る話にする。", "画像転記"],
  ["GDM-97-2", "GDM", "208", "97-2", "instrument / for measuring / time / heat", "道具", "測定器具を扱う。", "画像転記"],
  ["GDM-98A", "GDM", "209", "98", "thin / thick / keep O out of", "形容詞・句動詞", "入れない、遮る話にする。", "画像転記"],
  ["GDM-98-1", "GDM", "210", "98-1", "work yard / thin thick / keep out", "名詞句", "作業場や庭を描く。", "画像転記"],
  ["GDM-98-2", "GDM", "211", "98-2", "good / bad, having a drink of", "形容詞・分詞", "飲み物を持つ人物を描く。", "画像転記"],
  ["GDM-99", "GDM", "212", "99", "bread / meat / make from", "食べ物", "材料から作る話にする。", "画像転記"],
  ["GDM-100", "GDM", "213", "100", "hard / soft / crushing", "形容詞・動名詞", "手触りや変化を描く。", "画像転記"],
  ["GDM-102", "GDM", "214", "102", "crushing with", "道具", "何でつぶすかを描く。", "画像転記"],
  ["GDM-103", "GDM", "215", "103", "teeth / tooth / high low / tasting", "身体・感覚", "味や歯を使う話にする。", "画像転記"],
  ["GDM-103-2", "GDM", "216", "103-2", "tasting", "感覚", "味見の場面を使う。", "画像転記"],
  ["GDM-105", "GDM", "217", "105", "ready / taste", "形容詞・感覚", "準備完了と味を扱う。", "画像転記"],
  ["GDM-106", "GDM", "218", "106", "different / the same", "比較", "同じ/違うに気づく話にする。", "画像転記"],
  ["GDM-108", "GDM", "219", "108", "family", "名詞", "家族の物語に使う。", "画像転記"],
  ["GDM-110", "GDM", "220", "110", "clear / thick", "形容詞", "透明度や濃さを描く。", "画像転記"],
  ["GDM-111", "GDM", "221", "111", "who(rel.)", "関係代名詞", "人を説明する節に広げる。", "画像転記"],
  ["GDM-111-2", "GDM", "222", "111-2", "which(rel.)", "関係代名詞", "物を説明する節を復習する。", "画像転記"],
  ["GDM-A", "GDM", "223", "a", "by / in / on が終わればいつでも", "追加", "前置詞の復習に挿入可能。", "画像転記"],
  ["GDM-B", "GDM", "224", "b", "for (78 a cup of tea の後)", "追加", "目的・対象を示す。", "画像転記"],
  ["GDM-C", "GDM", "225", "c", "skating-swimming", "追加", "活動名・動名詞に使う。", "画像転記"],
  ["GDM-D", "GDM", "226", "d", "walkin-running", "追加", "活動名・動名詞に使う。", "画像転記"],
];

const contentRows = [
  ["GDM-41-10", "Short", "Mystery", "The Red Pin", "red-pin", "lessons/red-pin/level-3.txt"],
  ["NH1-1-1-V", "Short", "Comedy", "The Book Under the Hat", "book-under-hat", "lessons/book-under-hat/level-3.txt"],
  ["NH1-1-7-V", "Short", "Mystery", "The Water Pen Trick", "water-pen-trick", "lessons/water-pen-trick/level-3.txt"],
  ["NH1-1-6-V", "Short", "Mystery", "Where Is the Bell?", "where-is-the-bell", "lessons/where-is-the-bell/level-3.txt"],
  ["NH1-1-3-CAN-Q", "Short", "Mystery", "The Little Door, Part 1", "graded-story", "lessons/graded-story/level-3.txt"],
  ["NH2-2-1-3-SVOO", "Short", "Human Drama", "Rina's Brother", "rina-brother", "lessons/rina-brother/level-3.txt"],
  ["NH2-2-6-MORE-THAN", "Short", "Human Drama", "The Quiet Bread Shop", "bread-shop", "lessons/bread-shop/level-3.txt"],
  ["NH2-2-1-3-SVOO", "Long", "Human Drama", "The Rainy Club Map", "rainy-club-map", "lessons/rainy-club-map/level-7.txt"],
  ["NH1-1-3-CAN-Q", "Short", "SF", "The Star Bus", "star-bus", "lessons/star-bus/level-3.txt"],
  ["NH2-2-3-1-SHOULD", "Long", "Fantasy", "Can the Clock Sing?", "can-clock-sing", "lessons/can-clock-sing/level-7.txt"],
  ["NH2-2-4-1-HAVE-TO", "Long", "Comedy", "Can the Principal Dance?", "principal-dance", "lessons/principal-dance/level-7.txt"],
  ["NH2-2-2-4-BECAUSE", "Short", "Comedy", "The Wrong Robot", "wrong-robot", "lessons/wrong-robot/level-3.txt"],
  ["NH2-2-3-1-SHOULD", "Long", "Human Drama", "Don't Be a Hero", "dont-be-a-hero", "lessons/dont-be-a-hero/level-7.txt"],
  ["NH2-2-1-3-SVOO", "Short", "Mystery", "The Window Note", "window-note", "lessons/window-note/level-3.txt"],
  ["NH2-2-5-1-HOW-TO", "Short", "Fantasy", "The Moon Cup", "moon-cup", "lessons/moon-cup/level-3.txt"],
  ["NH2-2-1-3-SVOO", "Long", "Human Drama", "The Rainy Club Map", "rainy-club-map", "lessons/rainy-club-map/level-7.txt"],
  ["NH2-2-3-1-SHOULD", "Long", "Fantasy", "Can the Clock Sing?", "can-clock-sing", "lessons/can-clock-sing/level-7.txt"],
  ["NH2-2-6-MORE-THAN", "Short", "Human Drama", "The Quiet Bread Shop", "bread-shop", "lessons/bread-shop/level-3.txt"],
  ["NH2-2-7-2-VOICE", "Long", "Comedy", "The Gift Lesson", "gift-lesson", "lessons/gift-lesson/level-7.txt"],
  ["NH2-2-2-4-BECAUSE", "Short", "Comedy", "The Wrong Robot", "wrong-robot", "lessons/wrong-robot/level-3.txt"],
  ["NH2-2-4-1-HAVE-TO", "Long", "Comedy", "Because the Hat Said No", "hat-said-no", "lessons/hat-said-no/level-7.txt"],
  ["NH2-2-3-1-SHOULD", "Long", "Human Drama", "Don't Be a Hero", "dont-be-a-hero", "lessons/dont-be-a-hero/level-7.txt"],
  ["NH2-2-7-2-VOICE", "Long", "Comedy", "The Gift Lesson", "gift-lesson", "lessons/gift-lesson/level-7.txt"],
  ["NH2-2-5-1-HOW-TO", "Short", "Fantasy", "The Moon Cup", "moon-cup", "lessons/moon-cup/level-3.txt"],
  ["NH2-2-5-1-HOW-TO", "Long", "Fantasy / Adventure", "The Dice Gate", "dice-gate", "lessons/dice-gate/level-7.txt"],
  ["NH2-2-6-MORE-THAN", "Short", "Human Drama", "The Quiet Bread Shop", "bread-shop", "lessons/bread-shop/level-3.txt"],
  ["NH2-2-7-2-VOICE", "Long", "Comedy", "The Gift Lesson", "gift-lesson", "lessons/gift-lesson/level-7.txt"],
  ["NH2-2-7-2-VOICE", "Long", "Comedy", "The Cake Was Moved", "cake-was-moved", "lessons/cake-was-moved/level-7.txt"],
  ["NH2-2-1-3-SVOO", "Long", "Adventure", "The Red Pin Parade", "red-pin-parade", "lessons/red-pin-parade/level-7.txt"],
  ["NH2-2-1-3-SVOO", "Long", "Adventure", "The Old Book Signal", "old-book-signal", "lessons/old-book-signal/level-7.txt"],
  ["NH2-2-1-3-SVOO", "Long", "Adventure", "The Pens in the Water", "pens-in-water", "lessons/pens-in-water/level-7.txt"],
  ["NH2-2-1-3-SVOO", "Long", "Adventure", "The Map Under the Stage", "map-under-stage", "lessons/map-under-stage/level-7.txt"],
  ["NH2-2-1-3-SVOO", "Long", "Adventure", "The Door Under the Stage", "door-under-stage", "lessons/door-under-stage/level-7.txt"],
  ["NH1-1-10-V", "Long", "Adventure", "Family Photo Day", "family-photo-day", "lessons/family-photo-day/level-7.txt"],
  ["NH1-1-11-1-MAYBE", "Long", "Adventure", "The Letter Under the Door", "letter-under-door", "lessons/letter-under-door/level-7.txt"],
  ["NH2-2-2-4-BECAUSE", "Long", "Adventure", "Why the Lights Blink", "why-lights-blink", "lessons/why-lights-blink/level-7.txt"],
  ["NH2-2-2-4-BECAUSE", "Long", "Adventure", "Because of the Soup", "because-of-soup", "lessons/because-of-soup/level-7.txt"],
  ["NH2-2-5-1-HOW-TO", "Long", "Adventure", "How to Open the Box", "open-the-box", "lessons/open-the-box/level-7.txt"],
  ["NH2-2-7-2-VOICE", "Long", "Adventure", "More Than Half", "more-than-half", "lessons/more-than-half/level-7.txt"],
  ["NH2-2-1-3-SVOO", "Short", "Adventure", "The Travel Ticket", "travel-ticket", "lessons/travel-ticket/level-3.txt"],
  ["NH2-2-7-2-VOICE", "Short", "Adventure", "Maybe at the Window", "maybe-window", "lessons/maybe-window/level-3.txt"],
  ["NH2-2-3-1-SHOULD", "Short", "Adventure", "The Should Sign", "should-sign", "lessons/should-sign/level-3.txt"],
  ["NH2-2-7-2-VOICE", "Short", "Adventure", "The Have-To Key", "have-to-key", "lessons/have-to-key/level-3.txt"],
  ["NH2-2-7-2-VOICE", "Short", "Adventure", "The Poster Was Moved", "passive-poster", "lessons/passive-poster/level-3.txt"],
  ["NH1-1-7-V", "Short", "Adventure", "The Drink and Read Race", "drink-read-race", "lessons/drink-read-race/level-3.txt"],
  ["NH1-1-11-1-MAYBE", "Short", "Adventure", "Can the Lantern Fly?", "can-lantern", "lessons/can-lantern/level-3.txt"],
  ["NH2-2-1-3-SVOO", "Short", "Adventure", "Don't Be Late", "dont-be-late", "lessons/dont-be-late/level-3.txt"],
  ["NH2-2-5-1-HOW-TO", "Long", "Adventure", "Show Me the Seat", "show-me-the-seat", "lessons/show-me-the-seat/level-7.txt"],
  ["NH1-1-11-1-MAYBE", "Short", "SF", "The Signal Under Water", "signal-under-water", "lessons/signal-under-water/level-3.txt"],
  ["NH2-2-1-3-SVOO", "Short", "SF", "The Orbit Note", "orbit-note", "lessons/orbit-note/level-3.txt"],
  ["NH1-1-11-1-MAYBE", "Short", "SF", "Why the Moon Robot Stops", "why-moon-robot", "lessons/why-moon-robot/level-3.txt"],
  ["NH1-1-11-1-MAYBE", "Short", "SF", "Maybe at the Mars Window", "maybe-mars-window", "lessons/maybe-mars-window/level-3.txt"],
  ["NH2-2-7-2-VOICE", "Long", "SF", "The Station Was Moved", "station-was-moved", "lessons/station-was-moved/level-7.txt"],
  ["NH1-1-11-1-MAYBE", "Long", "Mystery", "Where the Roof Door Opens", "where-the-roof-door", "lessons/where-the-roof-door/level-7.txt"],
  ["NH2-2-1-3-SVOO", "Long", "Mystery", "The Traveling Shadow Ticket", "traveling-shadow-ticket", "lessons/traveling-shadow-ticket/level-7.txt"],
  ["NH2-2-7-2-VOICE", "Long", "Mystery", "Because the Wall Listened", "because-the-wall-listened", "lessons/because-the-wall-listened/level-7.txt"],
  ["NH2-2-7-2-VOICE", "Long", "Mystery", "How to Read the Stone", "how-to-read-the-stone", "lessons/how-to-read-the-stone/level-7.txt"],
  ["NH2-2-6-MORE-THAN", "Long", "Mystery", "More Than One Moon", "more-than-one-moon", "lessons/more-than-one-moon/level-7.txt"],
  ["NH2-2-7-2-VOICE", "Very Long", "Mystery", "The Locked Umbrella Room", "locked-umbrella-room", "lessons/locked-umbrella-room/level-8.txt"],
  ["NH2-2-7-2-VOICE", "Very Long", "Human Drama", "The Last Seat at the Table", "last-seat-table", "lessons/last-seat-table/level-8.txt"],
  ["NH2-2-7-2-VOICE", "Very Long", "SF", "The Library That Was Moved", "library-moved", "lessons/library-moved/level-8.txt"],
  ["NH2-2-7-2-VOICE", "Very Long", "Fantasy", "The Moon Lantern Path", "moon-lantern-path", "lessons/moon-lantern-path/level-8.txt"],
  ["NH2-2-7-2-VOICE", "Very Long", "Adventure", "The Folded Map Race", "folded-map-race", "lessons/folded-map-race/level-8.txt"],
  ["NH2-2-7-2-VOICE", "Very Long", "Comedy", "The Pudding Case", "jaio-pudding-case", "lessons/jaio-pudding-case/level-8.txt"],
  ["NH2-2-7-2-VOICE", "Short", "Mystery", "Another Door Opens", "another-door-opens", "lessons/another-door-opens/level-3.txt"],
  ["NH2-2-2-4-BECAUSE", "Short", "SF", "Echo on the Moon", "echo-on-the-moon", "lessons/echo-on-the-moon/level-3.txt"],
  ["NH1-1-6-V", "Short", "Human Drama", "Inside the Kite", "inside-the-kite", "lessons/inside-the-kite/level-3.txt"],
  ["NH2-2-3-1-SHOULD", "Short", "Comedy", "Jiro's Quiet Joke", "jiro-quiet-joke", "lessons/jiro-quiet-joke/level-3.txt"],
  ["NH2-2-5-1-HOW-TO", "Short", "Adventure", "Kaito's Key Map", "kaito-key-map", "lessons/kaito-key-map/level-3.txt"],
  ["NH2-2-1-3-SVOO", "Short", "Fantasy / Adventure", "Noa and the Night Door", "noa-night-door", "lessons/noa-night-door/level-3.txt"],
  ["NH2-2-3-1-SHOULD", "Short", "Mystery", "Under the Red Desk", "under-red-desk", "lessons/under-red-desk/level-3.txt"],
  ["NH2-2-7-2-VOICE", "Short", "Mystery", "Voices in the Wall", "voices-in-wall", "lessons/voices-in-wall/level-3.txt"],
  ["NH2-2-6-MORE-THAN", "Short", "Adventure", "X Marks the Lunch Box", "x-marks-lunch-box", "lessons/x-marks-lunch-box/level-3.txt"],
  ["NH1-1-11-1-MAYBE", "Short", "Human Drama", "Yuna's Thank-You Note", "yuna-thank-you-note", "lessons/yuna-thank-you-note/level-3.txt"],
  ["NH2-2-4-1-HAVE-TO", "Short", "SF", "Zero at the Station", "zero-at-station", "lessons/zero-at-station/level-3.txt"],
  ["NH1-1-7-V", "Short", "SF", "Green Glass Signal", "green-glass-signal", "lessons/green-glass-signal/level-3.txt"],
  ["NH2-2-2-4-BECAUSE", "Short", "Human Drama", "Lost Library Card", "lost-library-card", "lessons/lost-library-card/level-3.txt"],
  ["NH2-2-3-1-SHOULD", "Short", "Comedy", "Open on Monday", "open-on-monday", "lessons/open-on-monday/level-3.txt"],
  ["NH1-1-7-V", "Short", "Fantasy", "Paper Star Plan", "paper-star-plan", "lessons/paper-star-plan/level-3.txt"],
  ["NH2-2-3-1-SHOULD", "Short", "Mystery", "Quiet Question", "quiet-question", "lessons/quiet-question/level-3.txt"],
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
title(howTo, "Unified Grade 方針", "GDMは41-10までを橋渡しとして使い、その後はNH1、NH2のGradeを一本で指定する。本文量はShort / Long / Very Longから選ぶ。", 2);
write(howTo, 3, 0, [
  ["項目", "内容"],
  ["Grade", "GDMとNHを別々に指定しない。ひとつのGradeだけを指定する。"],
  ["進行順", "GDM-41-10まではGDM中心。その後はNH1、NH2へ進む。"],
  ["候補表示", "サイトでは選択したGrade以下の近いGradeに紐づくコンテンツを最大3件まで表示する。"],
  ["本文量", "Shortは120〜180語程度。Longは300〜450語程度。Very Longは650〜900語程度。UIでは旧段階表記を使わない。"],
  ["注意", "各Lengthは別Gradeへ紐づける。個別Gradeの必須語・文法を完全反映する新作本文は今後追加する。"],
]);
style(howTo, "A4:B9", "A4:B4", [24, 110]);

const request = workbook.worksheets.add("Story_Request");
title(request, "Story Request", "本文生成時に使う入力欄。Gradeは1つだけ指定し、Lengthで本文量を選ぶ。", 4);
write(request, 3, 0, [
  ["項目", "入力例", "選択肢・説明", "生成時の扱い"],
  ["Grade", "NH1-1-8-3-WHY", "Unified_ProgressのGradeから選ぶ", "このGradeまでのGDM/NH項目を使用可"],
  ["Length", "Short", "Short / Long / Very Long", "Short=120〜180語程度、Long=300〜450語程度、Very Long=650〜900語程度"],
  ["Genre", "Mystery", "Mystery / Human Drama / SF / Fantasy / Comedy", "ジャンルの声と展開を変える"],
  ["Target Reader", "中学生", "英語塾向け", "名詞は必要ならリスト外も可"],
  ["Story Shape", "4コマ的な起承転結", "明るい終わり", "次の展開が気になる構成にする"],
]);
style(request, "A4:D10", "A4:D4", [22, 28, 48, 64]);
request.getRange("B5:B10").format.fill.color = "#FFF7D6";

const progress = workbook.worksheets.add("Unified_Progress");
title(progress, "Unified Progress Map", "GDM合流点以降はNHを中心にNH2まで進める、単一Gradeの進行表。", 8);
write(progress, 3, 0, [
  ["Grade", "Series", "Order", "Source ID", "導入項目", "分類", "物語での使い方", "確認状態"],
  ...progressRows,
]);
style(progress, `A4:H${4 + progressRows.length}`, "A4:H4", [24, 12, 10, 14, 42, 18, 68, 18]);

const content = workbook.worksheets.add("Content_Map");
title(content, "Content Map", "既存本文をGradeへ紐づけ、Length別に選べるようにした表。LengthごとにGradeで管理する。", 6);
write(content, 3, 0, [
  ["Grade", "Length", "Genre", "Title", "Slug", "Text"],
  ...contentRows,
]);
style(content, `A4:F${4 + contentRows.length}`, "A4:F4", [24, 14, 18, 30, 20, 44]);

const prompt = workbook.worksheets.add("Prompt_Template");
title(prompt, "Prompt Template", "生成時はGradeを1つだけ使い、本文量をLengthで指定する。", 2);
write(prompt, 3, 0, [
  ["項目", "テンプレート"],
  ["生成指示", "Gradeは {Grade}。GDM-41-10まではGDMを使い、以降はNH1/NH2の進行順に沿って、このGradeまでの語彙・文法を使用する。"],
  ["本文量", "{Length} で生成する。Shortは120〜180語程度、Longは300〜450語程度、Very Longは650〜900語程度。"],
  ["必須項目", "指定されたGradeそのものの導入語・文法は本文に必ず自然に入れる。"],
  ["物語品質", "4コマ的な起承転結を持たせ、最後は明るく、次の展開が気になる本文にする。"],
  ["出力", "Title / Grade / Length / Genre / English text / used target items memo"],
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
