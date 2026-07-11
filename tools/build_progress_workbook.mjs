import fs from "node:fs/promises";
import path from "node:path";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const outDir = "outputs/progress-map";
const outXlsx = path.join(outDir, "gdm_nh1_progress_story_generation_map.xlsx");
const previewPng = path.join(outDir, "gdm_nh1_progress_story_generation_map_preview.png");

const gdmRows = [
  ["GDM-1", "1", "You / He / She / It", "代名詞", "人物の正体や視点を作る。短い会話の芯にする。", "画像転記"],
  ["GDM-4-1", "4-1", "is / here / there", "be動詞・場所", "物や人がどこにいるかを示す。", "画像転記"],
  ["GDM-4-2", "4-2", "am / are", "be動詞", "自己紹介、複数人物の場面に使う。", "画像転記"],
  ["GDM-4-3", "4-3", "We / They / You", "代名詞", "グループ行動や誤解を作る。", "画像転記"],
  ["GDM-4-7", "4-7", "ワーク: 4コマ漫画、ビンゴ", "活動", "4コマの起承転結で教材化する。", "画像転記"],
  ["GDM-8-1", "8-1", "This / That", "指示語", "近い物と遠い物の取り違えを作る。", "画像転記"],
  ["GDM-8-2A", "8-2", "his / her", "所有", "持ち主の誤解を作る。", "画像転記"],
  ["GDM-8-2B", "8-2", "my / your (his / her の前に)", "所有", "手紙、落とし物、交換に使う。", "画像転記"],
  ["GDM-8-3", "8-3", "my / your (his / her 学習済み)", "所有", "所有語を組み合わせる。", "画像転記"],
  ["GDM-8-4", "8-4", "a man / a woman / a", "冠詞・人物", "初登場人物を出す。", "画像転記"],
  ["GDM-10", "10", "This book is", "名詞句", "本やノートをきっかけに謎を置く。", "画像転記"],
  ["GDM-10-2", "10-2", "My / Your / His / Her book is here", "所有・場所", "本の持ち主を追う物語にする。", "画像転記"],
  ["GDM-11-1", "11-1", "in / on 1回目 (1文)", "前置詞", "隠された物を探す。", "画像転記"],
  ["GDM-11-2", "11-2", "in / on 2回目 (in拡張)", "前置詞", "箱、机、袋などの中を使う。", "画像転記"],
  ["GDM-11-3", "11-3", "in / on 3,4回目 / the 導入", "冠詞・前置詞", "指さない the を使い、場所を自然にする。", "画像転記"],
  ["GDM-11-4", "11-4", "in / on 5回目 (on拡張)", "前置詞", "上にある物の違和感を使う。", "画像転記"],
  ["GDM-11-5", "11-5", "in / on 6回目 (a の次の the)", "冠詞", "初登場後に同じ物を追う。", "画像転記"],
  ["GDM-11-6", "11-6", "in / on 7回目 2文で", "文連結", "2文で状況と変化を描く。", "画像転記"],
  ["GDM-11-7", "11-7", "2文、1文混合", "文量調整", "リズムのある短い段落にする。", "画像転記"],
  ["GDM-12", "12", "リスニングテスト", "確認", "本文生成では復習扱い。", "画像転記"],
  ["GDM-13-1", "13-1", "These / Those", "指示語・複数", "複数の物の取り違えに使う。", "画像転記"],
  ["GDM-13-2A", "13-2", "These / Those / They", "指示語・代名詞", "同じ物を They で受ける。", "画像転記"],
  ["GDM-13-2B", "13-2", "right / left", "方向", "左右の合図、地図、座席を使う。", "画像転記"],
  ["GDM-13-3", "13-3", "These / Those / This / That まとめ", "指示語", "遠近と単複の整理回にする。", "画像転記"],
  ["GDM-14-1", "14-1", "off", "動作", "取れる、外れる、消えるなどの転に使う。", "画像転記"],
  ["GDM-14-2", "14-2", "taking / took", "動詞 take", "誰かが取った謎を作る。", "画像転記"],
  ["GDM-14-3", "14-3", "will take", "未来", "次に何を取るか予告する。", "画像転記"],
  ["GDM-14-4", "14-4", "take まとめ / They are あり", "復習", "複数人物の行動にする。", "画像転記"],
  ["GDM-15-1", "15-1", "putting / put", "動詞 put", "置き場所の違和感を作る。", "画像転記"],
  ["GDM-15-2", "15-2", "will put", "未来", "置く場所をめぐる計画にする。", "画像転記"],
  ["GDM-15-3", "15-3", "take / put まとめ", "復習", "移動する物を追う。", "画像転記"],
  ["GDM-15-4", "15-4", "put it on (身につける)", "句動詞", "帽子、上着、名札などで人物を区別する。", "画像転記"],
  ["GDM-15-5", "15-5", "was", "過去 be", "過去の位置と現在の位置を比べる。", "画像転記"],
  ["GDM-15-6", "15-6", "take / put 絵を見て自由英作文", "活動", "絵を手がかりに短い物語を書く。", "画像転記"],
  ["GDM-17", "17", "men / women", "複数名詞", "大人の登場人物を増やす。", "画像転記"],
  ["GDM-18A", "18", "Aki's / Meg's", "所有格", "名前付き人物の持ち物で話を動かす。", "画像転記"],
  ["GDM-18B", "18", "the man's", "所有格", "知らない人物の持ち物にする。", "画像転記"],
  ["GDM-19-1", "19-1", "giving / gave", "動詞 give", "手渡し、贈り物、返却に使う。", "画像転記"],
  ["GDM-19-2", "19-2", "will give / him / her", "未来・目的語", "誰に渡すかを焦点にする。", "画像転記"],
  ["GDM-19-3", "19-3", "give まとめ", "復習", "渡し間違いを解決する。", "画像転記"],
  ["GDM-20", "20", "夏休み homework (here, there, take, put, give)", "総合", "宿題や学校の小事件に向く。", "画像転記"],
  ["GDM-21", "21", "(them were)", "代名詞・過去", "複数の物の過去状態を扱う。", "画像転記"],
  ["GDM-22", "22", "water / These pens are / them", "名詞・複数", "水やペンを使う実験・いたずらに使う。", "画像転記"],
  ["GDM-23", "23", "and", "接続詞", "2つの行動や性質をつなぐ。", "画像転記"],
  ["GDM-24", "24", "an (its の前にやる)", "冠詞", "母音始まりの名詞を扱う。", "画像転記"],
  ["GDM-25", "25", "its / arm / foot / leg", "所有・体", "ロボット、人形、ポスターの描写に使う。", "画像転記"],
  ["GDM-26", "26", "open / shut", "形容詞・動詞", "扉や箱を使う謎にする。", "画像転記"],
  ["GDM-26-2", "26-2", "put (書く)", "動詞 put", "書く、置くの意味を整理する。", "画像転記"],
  ["GDM-27-1", "27-1", "its - a leg of", "部分", "物の一部を描写する。", "画像転記"],
  ["GDM-27-2", "27-2", "legs of / the legs of", "部分・冠詞", "複数部分を扱う。", "画像転記"],
  ["GDM-27-3", "27-3", "of 成功", "of", "所有・部分関係に使う。", "画像転記"],
  ["GDM-28", "28", "take / put / give / them まとめ", "総合", "小道具を移動させる話にする。", "画像転記"],
  ["GDM-29-1", "29-1", "at / will go / going", "移動", "目的地へ向かう展開を作る。", "画像転記"],
  ["GDM-29-2", "29-2", "went", "過去 go", "行った先で発見する話にする。", "画像転記"],
  ["GDM-29-3", "29-3", "go / take / put / give まとめ", "総合", "移動先で物を渡す。", "画像転記"],
  ["GDM-29-3B", "29-3", "前置詞まとめ at / in / on", "前置詞", "場所描写を増やす。", "画像転記"],
  ["GDM-30", "30", "コミュニケーションゲーム", "活動", "会話中心の読解に使う。", "画像転記"],
  ["GDM-30-1", "30-1", "What", "疑問詞", "物の正体を問う。", "画像転記"],
  ["GDM-30-2", "30-2", "Yes / No / Is this", "疑問文", "確認の会話を入れる。", "画像転記"],
  ["GDM-30-3", "30-3", "Are these", "疑問文・複数", "複数物の確認を入れる。", "画像転記"],
  ["GDM-30-4", "30-4", "Q書く練習", "活動", "問いを作る練習回。", "画像転記"],
  ["GDM-30-5", "30-5", "Q所有格", "疑問文・所有", "持ち主を問う。", "画像転記"],
  ["GDM-30-6", "30-6", "be V Q ワーク", "疑問文", "行動を問う下準備。", "画像転記"],
  ["GDM-35-1", "35-1", "What time", "時刻", "待ち合わせや時間制限を作る。", "画像転記"],
  ["GDM-35-2", "35-2", "will be", "未来 be", "未来の状態を予告する。", "画像転記"],
  ["GDM-36", "36", "from", "前置詞", "出どころ、差出人、出発点を示す。", "画像転記"],
  ["GDM-37", "37", "a / the / The (There is / There are)", "存在文", "目の前の発見を描く。", "画像転記"],
  ["GDM-37-1", "37-1", "a thing / person", "名詞", "未知の物・人を出す。", "画像転記"],
  ["GDM-37-2A", "37-2", "(by)", "前置詞", "近くにある物、人の位置に使う。", "画像転記"],
  ["GDM-37-2B", "37-2", "There is / There are", "存在文", "発見場面を作る。", "画像転記"],
  ["GDM-37-3A", "37-3", "with", "前置詞", "特徴や持ち物を描く。", "画像転記"],
  ["GDM-37-3B", "37-3", "will be with", "未来・with", "一緒にいる予定を作る。", "画像転記"],
  ["GDM-37-4", "37-4", "Where", "疑問詞", "場所探しの物語にする。", "画像転記"],
  ["GDM-37-4B", "37-4", "Where と What の整理", "疑問詞", "場所と物の質問を整理する。", "画像転記"],
  ["GDM-37-5", "37-5", "but", "接続詞", "予想外の転換を作る。", "画像転記"],
  ["GDM-37-6", "37-6", "together", "副詞", "協力して解決する話にする。", "画像転記"],
  ["GDM-37-7", "37-7", "again", "副詞", "もう一度試す、やり直す展開にする。", "画像転記"],
  ["GDM-40", "40", "one / the other", "代名詞", "2つの選択肢、片方だけ違う話にする。", "画像転記"],
  ["GDM-40-1", "40-1", "our / their", "所有", "チームや家族の持ち物にする。", "画像転記"],
  ["GDM-41-1", "41-1", "see / do not see", "知覚・否定", "見える/見えないの謎を作る。", "画像転記"],
  ["GDM-41-2", "41-2", "sees / does not see", "三単現・否定", "人物ごとに見え方が違う話にする。", "画像転記"],
  ["GDM-41-3", "41-3", "see / sees まとめ", "復習", "視点差を整理する。", "画像転記"],
  ["GDM-41-4", "41-4", "see Question", "疑問文", "何が見えるか問う。", "画像転記"],
  ["GDM-41-5", "41-5", "sees Question", "三単現疑問", "特定人物が見るものを問う。", "画像転記"],
  ["GDM-41-6", "41-6", "do / does / see Q に答える", "疑問応答", "beVと混同しない練習。", "画像転記"],
  ["GDM-41-7", "41-7", "saw / did not see", "過去・否定", "昨日見た/見なかったを使う。", "画像転記"],
  ["GDM-41-8", "41-8", "did Question", "過去疑問", "過去の目撃情報を聞く。", "画像転記"],
  ["GDM-41-9", "41-9", "will see", "未来", "これから見えるものを予告する。", "画像転記"],
  ["GDM-41-10", "41-10", "see まとめ", "NH1併用開始目安", "ここまでをGDM基礎の一区切りとし、NH1を混ぜ始める。", "画像転記"],
  ["GDM-42-1", "42-1", "has / have", "所有", "人物の持ち物、手がかりに使う。", "画像転記"],
  ["GDM-42-2A", "42-2", "do not / does not 混ざったもの", "否定", "人物ごとの否定を整理する。", "画像転記"],
  ["GDM-42-2B", "42-2", "has / have Question", "疑問文", "誰が持っているか問う。", "画像転記"],
  ["GDM-42-2C", "42-2", "混ざったもの", "復習", "be, do, have の混在に注意。", "画像転記"],
  ["GDM-42-3", "42-3", "have game", "活動", "持ち物探しゲーム型にする。", "画像転記"],
  ["GDM-42-4", "42-4", "say", "発話", "証言やメッセージを出す。", "画像転記"],
  ["GDM-42-5", "42-5", "have(Q) / do / does 復習", "復習", "疑問文の整理回。", "画像転記"],
  ["GDM-42-6", "42-6", "like 要考察", "動詞 like", "好みを物語の動機にする。", "画像転記"],
  ["GDM-44", "44", "between / under / over", "前置詞", "位置関係の謎を増やす。", "画像転記"],
  ["GDM-44-3", "44-3", "between the other two hats", "前置詞", "3つの帽子などを使う。", "画像転記"],
  ["GDM-44-4", "44-4", "play 要ワーク", "動詞 play", "遊び・演奏・試合を扱う。", "画像転記"],
  ["GDM-44-5", "44-5", "一般時制 every / play / go", "一般現在", "日常習慣にする。", "画像転記"],
  ["GDM-45-1", "45-1", "中学前の整理: 日本語と英語の語順の違い", "語順", "文作りの確認回。", "画像転記"],
  ["GDM-45-2", "45-2", "中学前の整理: beV Q", "疑問文", "be動詞疑問文の確認。", "画像転記"],
  ["GDM-45-3", "45-3", "part", "名詞", "部分・役割を扱う。", "画像転記"],
  ["GDM-45-3B", "45-3", "中学前の整理: do / does Q", "疑問文", "一般動詞疑問文の確認。", "画像転記"],
  ["GDM-45-4", "45-4", "絵を見て文章を書く", "活動", "小6最後の授業想定。", "画像転記"],
  ["GDM-46", "46", "before / after", "接続詞", "順番や時間差で起承転結を作る。", "画像転記"],
  ["GDM-46-2", "46-2", "before SV", "接続詞", "行動の前後を文で示す。", "画像転記"],
  ["GDM-46-4", "46-4", "take it from", "句動詞", "どこから取ったかを示す。", "画像転記"],
  ["GDM-47-1", "47-1", "have no", "否定", "持っていないことを手がかりにする。", "画像転記"],
  ["GDM-47-2A", "47-2", "Then 未来", "接続副詞", "次の展開をつなぐ。", "画像転記"],
  ["GDM-47-2B", "47-2", "had", "過去 have", "前に持っていた物を追う。", "画像転記"],
  ["GDM-47-3", "47-3", "us", "代名詞", "仲間への行動にする。", "画像転記"],
  ["GDM-47-4", "47-4", "has in it / on it", "位置・所有", "箱や袋の中身を描く。", "画像転記"],
  ["GDM-47-5", "47-5", "one of them", "代名詞", "複数の中の1つを選ぶ。", "画像転記"],
  ["GDM-48", "48", "Which", "疑問詞", "どちらか選ぶ謎にする。", "画像転記"],
  ["GDM-48-2", "48-2", "one of the windows", "部分", "複数の窓・扉などから選ぶ。", "画像転記"],
  ["GDM-49-1", "49-1", "which(rel.) 子供大人共通", "関係代名詞", "物を説明する節を入れる。", "画像転記"],
  ["GDM-49-10", "49-10", "後 The which(rel.) 美作文", "関係代名詞", "少し長い説明文にする。", "画像転記"],
  ["GDM-49-2", "49-2", "all", "数量", "全員・全部の誤解を作る。", "画像転記"],
  ["GDM-49-3", "49-3", "no A or B", "否定", "AもBもない状況を作る。", "画像転記"],
  ["GDM-49-4", "49-4", "A or B(Q)", "選択疑問", "二択の会話を作る。", "画像転記"],
  ["GDM-50", "50", "This part of", "部分", "一部だけ違う物を扱う。", "画像転記"],
  ["GDM-50B", "50", "which(rel.) 主語につく", "関係代名詞", "主語を説明する節にする。", "画像転記"],
  ["GDM-51", "51", "chest of drawers / on his knees", "名詞句", "家具・姿勢を描く。", "画像転記"],
  ["GDM-52", "52", "絵を見て文章を書く", "活動", "描写力を上げる回。", "画像転記"],
  ["GDM-58-1", "58-1", "Who(Q)", "疑問詞", "誰がしたかを問う。", "画像転記"],
  ["GDM-58-2A", "58-2", "give a hint / push / lock / who / come", "動詞", "謎解き、鍵、ヒントに使う。", "画像転記"],
  ["GDM-58-2B", "58-2", "other keys / another", "代名詞", "鍵の取り違えに使う。", "画像転記"],
  ["GDM-58-83", "58-83", "WhoからMany, will do, clothingまで", "総合", "人物と服装を使う。", "画像転記"],
  ["GDM-60-1", "60-1", "come", "動詞", "誰かが来る展開にする。", "画像転記"],
  ["GDM-60-2", "60-2", "into / out of / through", "前置詞", "出入りや通過を描く。", "画像転記"],
  ["GDM-61", "61", "one another / the other two hats", "代名詞", "互いの関係や3者の関係を扱う。", "画像転記"],
  ["GDM-64A", "64", "did question (give, put, go)", "過去疑問", "過去の行動を聞く。", "画像転記"],
  ["GDM-64B", "64", "When(Q), after SV", "疑問詞・接続詞", "いつ起きたかを問う。", "画像転記"],
  ["GDM-66", "66", "take it in / go with 物", "句動詞", "物を持って行く、同行する。", "画像転記"],
  ["GDM-69", "69", "Here is Mary", "提示", "人物の登場を自然にする。", "画像転記"],
  ["GDM-70", "70", "get", "動詞", "手に入れる、到着するを扱う。", "画像転記"],
  ["GDM-70-2", "70-2", "go with 物 / in my hand", "前置詞句", "手に持った物を描く。", "画像転記"],
  ["GDM-72A", "72", "when(rel.)", "関係副詞", "時を説明する文へ広げる。", "画像転記"],
  ["GDM-72-3", "72-3", "what(rel.)", "関係詞", "内容を説明する。", "画像転記"],
  ["GDM-72-4", "72-4", "命令文 See, Don't", "命令文", "注意、指示、禁止を入れる。", "画像転記"],
  ["GDM-75-1", "75-1", "過去進行形 was doing", "過去進行", "その時していたことを描く。", "画像転記"],
  ["GDM-75-2", "75-2", "go up / down", "動詞句", "階段、エレベーター、坂に使う。", "画像転記"],
  ["GDM-75-3", "75-3", "go after", "動詞句", "追いかける展開にする。", "画像転記"],
  ["GDM-75-4", "75-4", "take it up / take it down", "句動詞", "上げ下ろしする物に使う。", "画像転記"],
  ["GDM-77-1", "77-1", "Is she taking, putting (進行形Q)", "進行形疑問", "今している動作を問う。", "画像転記"],
  ["GDM-77-2", "77-2", "What is she doing? (進行形Q)", "進行形疑問", "見た場面を質問する。", "画像転記"],
  ["GDM-77-3", "77-3", "knives", "複数名詞", "道具や料理の場面に使う。", "画像転記"],
  ["GDM-78A", "78", "do / did / do homework / do kendo", "動詞 do", "活動や部活を扱う。", "画像転記"],
  ["GDM-78B", "78", "take to (+ plate of soup, knives, What will you do)", "動詞句", "食事や道具を運ぶ。", "画像転記"],
  ["GDM-79A", "79", "Nobody / new old clothing", "代名詞・形容詞", "誰もいない、服装の違いに使う。", "画像転記"],
  ["GDM-79B", "79", "take their soup", "所有・動詞", "食事を取る/運ぶ話にする。", "画像転記"],
  ["GDM-80A", "80", "What will you do / Will Q", "未来疑問", "次の行動を選ぶ。", "画像転記"],
  ["GDM-80-2", "80-2", "a plate of soup", "名詞句", "食卓の小事件に使う。", "画像転記"],
  ["GDM-81", "81", "was / will you do / plate of soup / Party / take to", "総合", "パーティー場面に向く。", "画像転記"],
  ["GDM-82", "82", "before / after, When(Q)", "接続詞", "未出来の要考察項目。", "画像転記"],
  ["GDM-82B", "82", "up / down", "副詞", "上下移動を扱う。", "画像転記"],
  ["GDM-83A", "83", "nothing / something", "代名詞", "何もない/何かあるの意外性を作る。", "画像転記"],
  ["GDM-83B", "83", "Then 過去", "接続副詞", "過去の出来事をつなぐ。", "画像転記"],
  ["GDM-84", "84", "front / back", "位置", "表裏・前後の取り違えを作る。", "画像転記"],
  ["GDM-91", "91", "make / make from", "動詞 make", "工作や変化に使う。", "画像転記"],
  ["GDM-91-1", "91-1", "some / get (一般時制)", "数量・動詞", "少し手に入れる展開にする。", "画像転記"],
  ["GDM-91-2", "91-2", "一般時制 (get以外の動画), skin", "一般現在", "自然・生き物の描写に使う。", "画像転記"],
  ["GDM-92", "92", "plant", "名詞・動詞", "植物や栽培の話にする。", "画像転記"],
  ["GDM-93-1", "93-1", "make(SVOC), make it green, make it go", "SVOC", "変化や動作を起こす。", "画像転記"],
  ["GDM-93-1-2", "93-1-2", "make(SVOC)", "SVOC", "目的語の状態変化を使う。", "画像転記"],
  ["GDM-93-2", "93-2", "boiling / steam / heat / flame / give off", "科学語彙", "実験・観察の話に使える。", "画像転記"],
  ["GDM-94", "94", "solid / a liquid / ice", "科学語彙", "状態変化の話に使える。", "画像転記"],
  ["GDM-94-2", "94-2", "breath / it goes ou", "動作・観察", "息や空気の観察に使う。", "画像転記"],
  ["GDM-95", "95", "go (一般時制)", "一般現在", "日常の移動を描く。", "画像転記"],
  ["GDM-96-1", "96-1", "keep", "動詞", "状態を保つ、持ち続ける。", "画像転記"],
  ["GDM-96-2", "96-2", "keep (SVOC)", "SVOC", "何かをある状態に保つ。", "画像転記"],
  ["GDM-97-1", "97-1", "measure / measuring / cm long", "測定", "長さを測る話にする。", "画像転記"],
  ["GDM-97-2", "97-2", "instrument / for measuring / time / heat", "道具", "測定器具を扱う。", "画像転記"],
  ["GDM-98A", "98", "thin / thick / keep O out of", "形容詞・句動詞", "入れない、遮る話にする。", "画像転記"],
  ["GDM-98-1", "98-1", "work yard / thin thick / keep out", "名詞句", "作業場や庭を描く。", "画像転記"],
  ["GDM-98-2", "98-2", "good / bad, having a drink of", "形容詞・分詞", "飲み物を持つ人物を描く。", "画像転記"],
  ["GDM-99", "99", "bread / meat / make from", "食べ物", "材料から作る話にする。", "画像転記"],
  ["GDM-100", "100", "hard / soft / crushing", "形容詞・動名詞", "手触りや変化を描く。", "画像転記"],
  ["GDM-102", "102", "crushing with", "道具", "何でつぶすかを描く。", "画像転記"],
  ["GDM-103", "103", "teeth / tooth / high low / tasting", "身体・感覚", "味や歯を使う話にする。", "画像転記"],
  ["GDM-103-2", "103-2", "tasting", "感覚", "味見の場面を使う。", "画像転記"],
  ["GDM-105", "105", "ready / taste", "形容詞・感覚", "準備完了と味を扱う。", "画像転記"],
  ["GDM-106", "106", "different / the same", "比較", "同じ/違うに気づく話にする。", "画像転記"],
  ["GDM-108", "108", "family", "名詞", "家族の物語に使う。", "画像転記"],
  ["GDM-110", "110", "clear / thick", "形容詞", "透明度や濃さを描く。", "画像転記"],
  ["GDM-111", "111", "who(rel.)", "関係代名詞", "人を説明する節に広げる。", "画像転記"],
  ["GDM-111-2", "111-2", "which(rel.)", "関係代名詞", "物を説明する節を復習する。", "画像転記"],
  ["GDM-113-118", "113,115,117,118", "まとめワーク", "総合", "既習事項の総まとめ。", "画像転記"],
  ["GDM-198", "198", "関係代名詞問題", "総合", "高めの文法確認。", "画像転記"],
  ["GDM-A", "a", "by / in / on が終わればいつでも", "追加", "前置詞の復習に挿入可能。", "画像転記"],
  ["GDM-B", "b", "for (78 a cup of tea の後)", "追加", "目的・対象を示す。", "画像転記"],
  ["GDM-C", "c", "skating-swimming", "追加", "活動名・動名詞に使う。", "画像転記"],
  ["GDM-D", "d", "walkin-running", "追加", "活動名・動名詞に使う。", "画像転記"],
];

const nh1Rows = [
  ["NH1-0-FOLDER", "0", "フォルダ テンプレート", "管理", "教材フォルダの雛形。本文生成では使わない。", "画像転記"],
  ["NH1-0-FAMILY", "0", "中1 's / brother / sister / mother / father", "所有・家族", "家族関係と所有で人物背景を作る。", "画像転記"],
  ["NH1-0-BEV", "0", "中1 beV / 一般Vまとめ", "文法整理", "be動詞と一般動詞を混ぜる準備。", "画像転記"],
  ["NH1-1-MAY-I", "1", "May I", "許可", "お願い、許可、丁寧な会話を入れる。", "画像転記"],
  ["NH1-1-SV", "1", "SVまとめ", "文型", "行動主をはっきりさせる。", "画像転記"],
  ["NH1-1-WILL-Q", "1", "Will question", "未来疑問", "次の展開を問う。", "画像転記"],
  ["NH1-1-1-V", "1-1", "drink / play / watch / speak / study / read", "一般動詞", "日常行動の幅を増やす。", "画像転記"],
  ["NH1-1-1-BEV-Q", "1-1", "be動詞 Question", "疑問文", "人物・状態を問う。", "画像転記"],
  ["NH1-1-1-CALL-IT", "1-1-2", "Call it", "表現", "物や作戦の名前をつける。", "画像転記"],
  ["NH1-1-3-CAN-Q", "1-1-3", "can(Q)", "助動詞", "できる/できないを物語の鍵にする。", "画像転記"],
  ["NH1-1-2-V", "1-2", "walk / have(eat)", "一般動詞", "移動・食事の場面を足す。", "画像転記"],
  ["NH1-1-2-FOR", "1-2-2", "for", "前置詞", "目的や相手を示す。", "画像転記"],
  ["NH1-1-2-BEV2", "1-2-2", "be動詞 2", "文法整理", "be動詞の復習。", "画像転記"],
  ["NH1-1-3-V", "1-3", "practice / bring", "一般動詞", "練習、持参、準備に使う。", "画像転記"],
  ["NH1-1-3-1-BEFORE", "1-3-1", "before (concert)", "接続詞", "イベント前の行動を描く。", "画像転記"],
  ["NH1-1-3-1-PRESENT", "1-3-1", "一般時制", "文法", "普段することを説明する。", "画像転記"],
  ["NH1-1-3-2-WANT", "1-3-2", "want to do / be", "不定詞", "目的や願いを物語の動機にする。", "画像転記"],
  ["NH1-1-3-2-PRESENT2", "1-3-2", "一般時制 2", "文法", "三人称などを整理する。", "画像転記"],
  ["NH1-1-3-2-HOW-MANY", "1-3-2", "How many", "疑問詞", "数の謎や確認に使う。", "画像転記"],
  ["NH1-1-3-3-BRING", "1-3-3", "bring(V)", "一般動詞", "必要な物を持ってくる展開にする。", "画像転記"],
  ["NH1-1-4-1-ENJOY", "1-4-1", "enjoy yourself", "表現", "楽しい結末やイベントに使う。", "画像転記"],
  ["NH1-1-4-1-DONT", "1-4-1", "命令 / Don't (Unit4)", "命令文", "禁止や注意を出す。", "画像転記"],
  ["NH1-1-4-1-BE", "1-4-1", "命令: Be で始まる文", "命令文", "Be careful などの指示に使う。", "画像転記"],
  ["NH1-1-4-1-GLASS", "1-4-1A", "a glass of water (Unit4)", "名詞句", "飲み物、小道具に使う。", "画像転記"],
  ["NH1-1-4-2-DURING", "1-4-2", "during", "前置詞", "授業中、試合中などに使う。", "画像転記"],
  ["NH1-1-4-2-AFTER", "1-4-2", "after (second period)", "前置詞", "何かの後に起きる展開にする。", "画像転記"],
  ["NH1-1-4-2-SOME", "1-4-2", "some / any / many (Unit4)", "数量", "数や量の情報を加える。", "画像転記"],
  ["NH1-1-5-V", "1-5", "jog / need / eat / enjoy", "一般動詞", "健康、食事、楽しさを出す。", "画像転記"],
  ["NH1-1-5-WRONG", "1-5", "What's wrong", "会話", "困りごとから話を始める。", "画像転記"],
  ["NH1-1-5-2-DONTBE", "1-5-2", "Don't be", "命令文", "励ましや注意に使う。", "画像転記"],
  ["NH1-1-5-2-LETS", "1-5-2", "Let's", "提案", "協力して行動する展開にする。", "画像転記"],
  ["NH1-1-5-2-SOMETHING", "1-5-2", "something / nothing", "代名詞", "何かある/何もないの意外性を作る。", "画像転記"],
  ["NH1-1-5-2-HOW", "1-5-2", "How (どのように) (Unit5)", "疑問詞", "方法を問う。", "画像転記"],
  ["NH1-1-6-V", "1-6", "write", "一般動詞", "手紙、メモ、暗号に使う。", "画像転記"],
  ["NH1-1-6-2-ABOUT", "1-6-2", "about (Unit3)", "前置詞", "何についてかを示す。", "画像転記"],
  ["NH1-1-6-2-ONE", "1-6-2", "one 支柱語", "代名詞", "同種の物を受ける。", "画像転記"],
  ["NH1-1-6-3-ANYONE", "1-6-3", "anyone", "代名詞", "誰か/誰もを使う。", "画像転記"],
  ["NH1-1-7-V", "1-7", "know / make / buy", "一般動詞", "知る、作る、買うを使う。", "画像転記"],
  ["NH1-1-7-3-WHOSE", "1-7-3", "Whose (Unit8)", "疑問詞", "持ち主探しに使う。", "画像転記"],
  ["NH1-1-8-V", "1-8", "talk / think about / decorate / prepare", "一般動詞", "相談、準備、飾り付けに使う。", "画像転記"],
  ["NH1-1-8-3-WHY", "1-8-3", "Why", "疑問詞", "理由を問う。", "画像転記"],
  ["NH1-1-8-3-EXCLAMATION", "1-8-3", "感嘆文 What a cute bag", "感嘆文", "驚きや喜びを出す。", "画像転記"],
  ["NH1-1-8-3-QUICKLY", "1-8-3", "quickly", "副詞", "動作の速さで緊張感を出す。", "画像転記"],
  ["NH1-1-9-V", "1-9", "wait / get / build / understand / collect", "一般動詞", "待つ、集める、理解する展開に使う。", "画像転記"],
  ["NH1-1-9-1-AS", "1-9-1", "as (a doctor)", "前置詞", "役割や身分を示す。", "画像転記"],
  ["NH1-1-9-1-AM-NOT-SURE", "1-9-1", "I am not sure about", "表現", "不確かさを出し、次を読ませる。", "画像転記"],
  ["NH1-1-9-3-LOOK-HAPPY", "1-9-3", "They look happy", "連結動詞", "表情や状態を描く。", "画像転記"],
  ["NH1-1-10-V", "1-10", "travel / visit / listen / spend / stand / feel / get up", "一般動詞", "外出、訪問、経験の話に使う。", "画像転記"],
  ["NH1-1-10-1-FULL-OF", "1-10-1", "full of", "形容詞句", "物がいっぱいの場面に使う。", "画像転記"],
  ["NH1-1-10-3-GET-UP", "1-10-3", "get up (early)", "句動詞", "朝の始まりを描く。", "画像転記"],
  ["NH1-1-10-3-HOW-NICE", "1-10-3", "How nice! (Unit8)", "感嘆文", "明るい反応やハッピーエンドに使う。", "画像転記"],
  ["NH1-1-11-V", "1-11", "join / hope / set up / pick up / look for / bring back / beat", "一般動詞", "参加、探す、取り戻す展開に使う。", "画像転記"],
  ["NH1-1-11-DID-Q", "1-11", "Did Q", "過去疑問", "過去の出来事を確認する。", "画像転記"],
  ["NH1-1-11-1-AGAINST", "1-11-1", "against", "前置詞", "試合、反対、接触の表現に使う。", "画像転記"],
  ["NH1-1-11-1-MAYBE", "1-11-1", "maybe", "副詞", "推測を入れてミステリー感を出す。", "画像転記"],
];

const requestRows = [
  ["Story ID", "ST-001", "教材やHTMLと対応する管理ID"],
  ["Title", "未定", "生成後に調整してよい"],
  ["GDM Current ID", "GDM-41-10", "必須。GDMは最初のIDからここまでを使用可"],
  ["NH1 Current ID", "0", "NH1未開始なら0。開始後は到達済みのNH1進捗IDを指定"],
  ["Target Words", 250, "本文のおおよその語数"],
  ["Target Reader", "中学生英語塾", "読者層"],
  ["Main Characters", "Ken, Yui", "日本人に性別が分かりやすい名前を優先"],
  ["Age Range", "12-15", "話ごとに小学生から大人まで変えてよい"],
  ["Setting", "school / shop / station / festival", "舞台。話ごとに系統を変える"],
  ["Story Shape", "4コマ的な起承転結", "暗すぎず、最後はハッピーにする"],
  ["Noun Policy", "名詞はリスト外でも必要なら可", "ただし動詞・文法は進捗IDに沿う"],
  ["Tone", "次の展開が気になる / 明るい結末", "ミステリー可。救いのある終わりにする"],
  ["Output", "plain text first", "画像は後工程。本文品質を優先"],
];

const howToRows = [
  ["目的", "GDMとNH1を「レベル」ではなく現在到達している進捗IDで指定し、物語本文を生成するための台帳です。"],
  ["基本", "物語生成指定シートで GDM Current ID と NH1 Current ID を指定します。"],
  ["Startの考え方", "GDMは常に最初のIDから開始します。NH1は未開始なら0を指定します。"],
  ["GDM", "GDM-41-10 を一区切りとし、そのあたりから NH1 を併用開始する想定です。"],
  ["NH1", "NH1 Current ID が0ならGDMのみ、NH1-...ならNH1の最初からそのIDまでを併用する想定です。"],
  ["名詞", "ユーザー方針により、名詞は導入リスト外でも自然な物語に必要なら使用可です。"],
  ["品質方針", "4コマ漫画のように起承転結を持たせ、次の展開が気になり、最後は明るく終える本文を優先します。"],
  ["確認状態", "docx内の文字は画像化されていたため、台帳の多くは画像から転記しています。原本更新時は確認状態列を見て補正してください。"],
];

const promptRows = [
  ["項目", "テンプレート"],
  ["生成指示", "GDMは最初のIDから {GDM Current ID} までを使用する。NH1 Current ID が0ならNH1は使わず、NH1-...ならNH1の最初から {NH1 Current ID} までを併用して、中学生向け英語リーディング本文を作る。"],
  ["語彙制約", "動詞・文法・機能語は指定された到達IDまでを優先する。名詞は自然な物語に必要なら未導入でも使用可。"],
  ["物語制約", "4コマ漫画的に起承転結を作り、謎や違和感で次を読ませ、最後はハッピーにする。"],
  ["人物制約", "日本人に性別が分かりやすい名前を使い、話ごとに年齢・職業・関係性のバリエーションを出す。"],
  ["出力", "タイトル、GDM Current ID、NH1 Current ID、本文、語数、使用した主な導入項目メモを出す。"],
];

const combinedRows = [
  ...gdmRows.map((row, index) => ["GDM", index + 1, ...row, row[0] === "GDM-41-10" ? "NH1併用開始目安" : ""]),
  ...nh1Rows.map((row, index) => ["NH1", index + 1, ...row, "GDM-41-10以降で併用"]),
];

function writeMatrix(sheet, anchor, rows) {
  sheet.getRangeByIndexes(anchor.row, anchor.col, rows.length, rows[0].length).values = rows;
}

function styleHeader(range) {
  range.format.fill.color = "#17324D";
  range.format.font.color = "#FFFFFF";
  range.format.font.bold = true;
  range.format.horizontalAlignment = "center";
  range.format.verticalAlignment = "center";
}

function styleSheet(sheet, usedAddress, freezeRows = 1) {
  sheet.showGridLines = false;
  sheet.freezePanes.freezeRows(freezeRows);
  const used = sheet.getRange(usedAddress);
  used.format.font.name = "Yu Gothic";
  used.format.font.size = 10;
  used.format.wrapText = true;
  used.format.verticalAlignment = "top";
  used.format.borders = { preset: "all", style: "thin", color: "#D9E2EC" };
}

function addTitle(sheet, title, subtitle, colCount) {
  const titleRange = sheet.getRangeByIndexes(0, 0, 1, colCount);
  titleRange.merge();
  titleRange.values = [[title]];
  titleRange.format.fill.color = "#0F2438";
  titleRange.format.font.color = "#FFFFFF";
  titleRange.format.font.bold = true;
  titleRange.format.font.size = 16;
  titleRange.format.rowHeightPx = 34;
  const subRange = sheet.getRangeByIndexes(1, 0, 1, colCount);
  subRange.merge();
  subRange.values = [[subtitle]];
  subRange.format.fill.color = "#EAF2F8";
  subRange.format.font.color = "#17324D";
  subRange.format.rowHeightPx = 42;
}

function setWidths(sheet, widths) {
  widths.forEach((width, idx) => {
    sheet.getRangeByIndexes(0, idx, 1, 1).format.columnWidth = width;
  });
}

const workbook = Workbook.create();

const howTo = workbook.worksheets.add("How_To_Use");
addTitle(howTo, "GDM / NH1 進捗ID指定 物語生成表", "レベル名ではなく、GDMとNH1それぞれの現在到達IDで本文生成を指定するためのExcelです。", 2);
writeMatrix(howTo, { row: 3, col: 0 }, [["項目", "内容"], ...howToRows]);
styleHeader(howTo.getRange("A4:B4"));
styleSheet(howTo, `A4:B${4 + howToRows.length}`, 4);
setWidths(howTo, [22, 100]);

const request = workbook.worksheets.add("Story_Request");
addTitle(request, "物語生成指定", "B列を書き換えて、GDM/NH1の現在到達IDと物語条件を指定します。", 3);
writeMatrix(request, { row: 3, col: 0 }, [["項目", "入力/指定", "説明"], ...requestRows]);
styleHeader(request.getRange("A4:C4"));
styleSheet(request, `A4:C${4 + requestRows.length}`, 4);
request.getRange(`B5:B${4 + requestRows.length}`).format.fill.color = "#FFF7D6";
setWidths(request, [24, 36, 76]);

const progress = workbook.worksheets.add("Progress_Map");
addTitle(progress, "進捗ID台帳", "GDMとNH1を同じ形式で並べたマスター表です。現在到達IDまでの導入項目を本文生成に使います。", 10);
const progressHeader = ["系列", "順番", "進捗ID", "原ID", "導入項目", "分類", "物語での使い方", "確認状態", "併用メモ", "ソース"];
const progressData = combinedRows.map(([series, order, id, sourceId, item, category, hint, status, bridge]) => [
  series,
  order,
  id,
  sourceId,
  item,
  category,
  hint,
  status,
  bridge,
  series === "GDM" ? "book1_導入項目一覧.docx 画像" : "NH1_導入項目一覧.docx 画像",
]);
writeMatrix(progress, { row: 3, col: 0 }, [progressHeader, ...progressData]);
styleHeader(progress.getRange("A4:J4"));
styleSheet(progress, `A4:J${4 + progressData.length}`, 4);
setWidths(progress, [10, 8, 18, 16, 42, 18, 58, 16, 22, 32]);

const gdm = workbook.worksheets.add("GDM_Book1");
addTitle(gdm, "GDM Book1 導入項目", "EP book1 の導入項目を、物語生成で指定しやすい GDM- 進捗IDに整理しています。", 8);
writeMatrix(gdm, { row: 3, col: 0 }, [["進捗ID", "原ID", "導入項目", "分類", "物語での使い方", "確認状態", "NH1併用", "ソース"], ...gdmRows.map(r => [...r, r[0] === "GDM-41-10" ? "ここからNH1併用開始目安" : "", "book1_導入項目一覧.docx 画像"])]);
styleHeader(gdm.getRange("A4:H4"));
styleSheet(gdm, `A4:H${4 + gdmRows.length}`, 4);
setWidths(gdm, [18, 14, 46, 18, 58, 16, 26, 32]);

const nh1 = workbook.worksheets.add("NH1");
addTitle(nh1, "NH1 導入項目", "NH1 の導入項目を、GDM-41-10以降で併用する NH1- 進捗IDとして整理しています。", 8);
writeMatrix(nh1, { row: 3, col: 0 }, [["進捗ID", "原ID", "導入項目", "分類", "物語での使い方", "確認状態", "併用開始", "ソース"], ...nh1Rows.map(r => [...r, "GDM-41-10以降", "NH1_導入項目一覧.docx 画像"])]);
styleHeader(nh1.getRange("A4:H4"));
styleSheet(nh1, `A4:H${4 + nh1Rows.length}`, 4);
setWidths(nh1, [24, 14, 48, 18, 58, 16, 22, 32]);

const prompt = workbook.worksheets.add("Prompt_Template");
addTitle(prompt, "生成プロンプト骨子", "Story_Request の指定値を見ながら、本文生成時に使う指示文の骨子です。", 2);
writeMatrix(prompt, { row: 3, col: 0 }, promptRows);
styleHeader(prompt.getRange("A4:B4"));
styleSheet(prompt, `A4:B${3 + promptRows.length}`, 4);
setWidths(prompt, [24, 120]);

for (const sheet of [howTo, request, progress, gdm, nh1, prompt]) {
  sheet.getUsedRange().format.autofitRows();
}

await fs.mkdir(outDir, { recursive: true });
const xlsx = await SpreadsheetFile.exportXlsx(workbook);
await xlsx.save(outXlsx);

if (process.env.RENDER_PREVIEW === "1") {
  const preview = await workbook.render({ sheetName: "Story_Request", autoCrop: "all", scale: 1, format: "png" });
  await fs.writeFile(previewPng, new Uint8Array(await preview.arrayBuffer()));
  console.log(previewPng);
}

console.log(outXlsx);
