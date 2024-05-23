import station0 from './img/answer/station0.png';
import normalFetalPosition from './img/answer/normalFetalPosition.png';
import stageOfLabor from './img/answer/stageOfLabor.png';
import ovarianGranulosaCellTumor from './img/answer/ovarianGranulosaCellTumor.png';
import adenomyosis1 from './img/answer/adenomyosis1.png';
import adenomyosis2 from './img/answer/adenomyosis2.png';
import dermoidCystImg from './img/answer/dermoidCystImg.png';
import chocolateCystImg from './img/answer/chocolateCystImg.png';
import MRIT1Img from './img/answer/MRIT1Img.png';
import gynecologyQuestion2 from './img/answer/gynecologyQuestion2.png';
import gynecologyQuestion1 from './img/answer/gynecologyQuestion1.png';

import {
    useState
} from 'react'

// import from './img/answer/.png'

export const useQuestionList = () => {
    const appName = 'anywhere-final'
    const jpName = '3ブロック対策'
    const [questionList, setQuestionList] = useState([
        // ここに問題のリストを記述(選択式の場合は[0]に正解択をいれた配列をつくる)
        {
            groupTag: "法医学 出席課題",
            groupContents: [{
                    detailInfo: '4/26 (1)',
                    questionSentence: '異状死と認めた場合、いつまでに所轄警察署に届け出なければならないか。',
                    choices: ['直ちに', '12時間以内', '24時間以内', '1週間以内', '翌月の10日まで'],
                    answer: '24時間以内',
                    commentary: 'このまま丸覚えしてください。',
            },{
                detailInfo: '4/26 (2)',
                questionSentence: '異状死体に該当しないのはどれか。',
                choices: ['農薬中毒によると思われる死体', '他傷後の続発症によると思われる死体', '異型輸血によると思われる死体', '処方された薬の誤嚥によると思われる死体', '肺癌患者の喀血によると思われる死体'],
                answer: '肺癌患者の喀血によると思われる死体',
                commentary: '病死で、病因がわかっているものだけ異常死体に該当しない。自然死に該当',
            },{
                detailInfo: '4/26 (3)',
                questionSentence: '69歳の男性。一人暮らし。肺癌の末期で在宅療養中であり、週3回の往診を受けていた。往診担当医が午後5時に患者宅に行くと、寝室のベッド上で仰臥位のまま死亡していた。外傷はなく、肺癌で死亡したと判断された。直腸温30.0°C。室温22.0°C。紫赤色の死斑を背面に認め、指圧で容易に消退する。硬直を全身の各関節に認めるが、四肢関節の硬直は軽度である。死亡推定時刻として適切なのはどれか。',
                choices: ['前日の午前9時頃', '前日の午後3時頃', '前日の午後9時頃', '当日の午前3時頃', '当日の午前9時頃'],
                answer: '当日の午前9時頃',
                commentary: '直腸温の単純計算で7時間前。紫斑が容易に消退することなどとも整合する。',
            },{
                detailInfo: '4/26 (4)',
                questionSentence: '5月某日の午前10時に縊頭しているのを発見され、すぐに布団に寝かされた死体、警察へは翌朝通報され、午前10時に検視を行った。体温は室温と同じ20°C硬直は全身の関節で強く、死斑は背中に濃く出ている、下肢の皮膚に死斑の名残りの溢血点が見られる。腹部の腐敗変色は見られない、適切な死亡推定時刻はどれか。',
                choices: ['検視の前日の午前10時頃', '検視の前日の午前4時頃', '検視の前々日の午後10時頃', '検視の前々日の午前10時頃', '検視の3日前の午前10時頃'],
                answer: '検視の前々日の午後10時頃',
                commentary: '正解率5.2%　発見して24時間後に通報された。死後硬直や紫斑が背中に移動していることから判断する。まだ紫斑が移動する段階（死後12時間程度）で遺体が降ろされたと考える。',
            },{
                detailInfo: '4/26 (5)',
                questionSentence: '死亡時刻を推定するのに役立つ所見はどれか, 2つ選べ。',
                choices: ['死斑の色調', '死体硬直の程度', '角膜混濁の程度', '瞳孔の大きさ', '腋窩温'],
                answer: '死体硬直の程度、角膜混濁の程度',
                commentary: '角膜混濁は12時間程度までなら綺麗。紫斑の消退は推定材料にはなるが、色調からは推定することができない。',
            },{
                detailInfo: '5/14 (1)',
                questionSentence: '鋭器損傷で正しいものはどれか。2つ選べ。',
                choices: ['鋭器損傷には、刺創、切創、刺切創がある', '刃器による刺創では、両創角は尖鋭である', '創口の大きさは、創口が皮膚割線に対して直角か平行かで異なる', '鋭器損傷では、一般に創洞面は平滑である', '刺切創では、創縁に表皮剥脱を伴うのが特徴である'],
                answer: '3,4',
                commentary: '鋭器損傷には割創が含まれる。出刃包丁などの場合は鈍になることがある。一般的には創縁に表皮剥奪を伴わない',
            },{
                detailInfo: '5/14 (2)',
                questionSentence: '鈍器損傷で正しいものはどれか。2つ選べ。',
                choices: ['皮下出血は外力が直接作用した部位にのみ生じるものである', '刃器では打撲傷や擦過傷は生じない', '挫創の創洞内には結合組織や血管などが架橋状に残存していることが多い', '表皮剥脱は死後しばらくするとより明瞭となる', '裂創は通常外力の直接作用した部位に生じる'],
                answer: '3,4',
                commentary: '皮下出血には二重条痕という例外がある。刃物で殴ると打撲傷や擦過傷が生じうる。裂創は皮膚が進展した部分に生じるので誤り。挫創と裂創との区別。',
            },{
                detailInfo: '5/22 (1)',
                questionSentence: '正しいものはどれか。すべて選べ。',
                choices: ['嬰児殺に対して、わが国では殺人罪が適用される', '胎齢3か月の胎児の身長は9cm、体重は54gである', '一般的な成熟児、妊娠満40週において、指爪は指端を越え、趾爪は趾端に達する', '妊娠6か月の胎児には、大腿骨下端部の化骨核は認められない', '人工妊娠中絶は産婦人科医であれば実施できる'],
                answer: '1,2,3,4',
            },{

                detailInfo: '5/22 (2)',
                questionSentence: '正しいものはどれか。すべて選べ。',
                choices: ['未呼吸児の横隔膜の高さは、既呼吸児のそれに比して高い', '既呼吸児の肺は淡紅色であり、スポンジ様で捻髪感を触れる', '呼吸細気管支および肺胞の限局性拡大は生産児の所見である', '肺浮遊試験部分陽性は呼吸肺とみなす', '墜落分娩や仮死状態で分娩された場合でも、肺浮遊試験は必ず陽性となる'],
                answer: '1,2,3,4',
            },{
                detailInfo: '5/22 (3)',
                questionSentence: '正しいものはどれか。すべて選べ。',
                choices: ['児童虐待と思われる事例を発見した場合、警察へ届け出なければならない', '加害者として最も多いのは、継母である', '虐待による頭部損傷として、硬膜外血腫が多い', '虐待児では、胸腺が退縮することが多い', '最近増えてきている虐待の様態は、心理的虐待である'],
                answer: '4,5',
            },

            // [
//     {
//         "question": "異状死と認めた場合、いつまでに所轄警察署に届け出なければならないか。102C4",
//         "choices": [
//             "a. 直ちに",
//             "b. 12時間以内",
//             "c. 24時間以内",
//             "d. 1週間以内",
//             "e. 翌月の10日まで"
//         ],
//         "answer": "c",
//         "commentary": "医師法に基づき、異状死体や異状死産児（妊娠4月以上）は24時間以内に所轄警察署へ届け出ねばならない。したがって正解はｃとなる。"
//     },
//     {
//         "question": "異状死体に該当しないのはどれか。95A68",
//         "choices": [
//             "a. 農薬中毒によると思われる死体",
//             "b. 他傷後の続発症によると思われる死体",
//             "c. 異型輸血によると思われる死体",
//             "d. 処方された薬の誤嚥によると思われる死体",
//             "e. 肺癌患者の喀血によると思われる死体"
//         ],
//         "answer": "e",
//         "commentary": "異状死体:確実に診断された内因性疾患で死亡したと判断される死体以外の死体。つまり病気で死んだと言い切れる人以外全員が対象。e肺癌がなければ喀血してなかった。最終的な死因は窒息（外因）だが、肺癌のせいでなってるから異状死体ではない。"
//     },
//     {
//         "question": "車両運転時の運転者、同乗者の損傷について正しいものはどれか。2つ選べ。",
//         "choices": [
//             "a. 運転者の胸部にハンドルとの衝突痕がなければ胸膜腔内の損傷はないものと考えてよい。",
//             "b. シートベルトにより損傷が生じることはない。",
//             "c. フロントガラス損傷とは、フロントガラスによる切創によるものをいう。",
//             "d. ダッシュボード損傷とは、ダッシュボードにぶつかった下肢の損傷であるが、衝突が大きいと骨盤骨折を起こすことをある。",
//             "e. 運転者は体の前部にハンドルが存在するため、助手席同乗者に比べ、フロントガラスの損傷は受けにくい。"
//         ],
//         "answer": "d e",
//         "commentary": "a. 誤り。ハンドルの痕跡がなくても生じうる。b. 誤り。帯状の皮下出血、表皮剥脱が見られる。c. 誤り。フロントガラスに激突することによる打撲的損傷も含む。d. 正しい。e. 正しい。"
//     },
//     {
//         "question": "轢過損傷について誤っているものはどれか。すべて選べ。",
//         "choices": [
//             "a. 車両に轢過されても新体表面にタイヤマークが認められないことがある。",
//             "b. タイヤマークはもっぱらタイヤ設置部の表皮剥脱として認められる。",
//             "c. 伸展創とは、車両轢過時に皮膚が強く引っ張られ、皮膚及び皮下組織が筋膜から剥離して嚢状の腔を形成し、そこに血液・リンパ液が貯留することを言う。",
//             "d. デコルマンとは、車両轢過部位の高度の筋肉挫滅のことである。",
//             "e. 歴化された死体の発見時の姿勢は轢過前あるいは轢過時の姿勢を示しており、その姿勢から轢過の様子が推定できるので、重要な所見である。"
//         ],
//         "answer": "b c d e",
//         "commentary": "a. 正しい。左右の車輪でまたぐように通過した場合、着衣の表面タイヤ痕がある場合。など例外も存在する。b. 誤り。タイヤの設置部の作用で表皮剥脱、タイヤの溝部に相当して皮内出血、皮下出血が出る。後者のほうが生じやすい。c. 誤り。d. 誤り。"
//     },
//     {
//         "question": "死亡時刻を推定するのに役立つ所見はどれか。2つ選べ。93A44",
//         "choices": [
//             "a. 死斑の色調",
//             "b. 死体硬直の程度",
//             "c. 角膜混濁の程度",
//             "d. 瞳孔の大きさ",
//             "e. 腋窩温"
//         ],
//         "answer": "b c",
//         "commentary": "ａ　死斑は死後30分後から出現し、次第に拡大し、約半日で固定するが、色調は死亡時間との相関はない。ｂ　正しい。死後硬直は死後2～3時間程度で顎関節から出現し、徐々に広がる。ｃ　正しい。角膜は死後次第に混濁し、約2日で瞳孔を透見できなくなる。ｄ　瞳孔径は死亡により拡大するも、死亡時間との相関はない。ｅ　腋窩温は環境の影響を強く受けるため、死亡時間の推定には直腸温を用いる。"
//     },
//     {
//         "question": "鋭器損傷で正しいものはどれか。2つ選べ。",
//         "choices": [
//             "a. 鋭器損傷には、切創、刺創、刺切創がある。",
//             "b. 刃物による刺創では、両創角は先鋭である。",
//             "c. 創口の大きさは、創口が皮膚割線に対して直角か平行かで異なる。",
//             "d. 鋭器損傷では一般に創洞面は平滑である。",
//             "e. 刺切創では創縁に表皮剥脱を伴うのが特徴。"
//         ],
//         "answer": "c d",
//         "commentary": "a. 誤り（△）。この3つに加えて割創も含む。b. 誤り。峰の部分では鈍となることあり。c. 正しい。d. 正しい。e. 誤り。ただし、柄の部分まで刺した場合は創縁に生じること有り。"
//     },
//     {
//         "question": "鈍器損傷で正しいものはどれか。2つ選べ。",
//         "choices": [
//             "a. 皮下出血は外力が直接作用した部位にのみ生ずるものである。",
//             "b. 刃器では擦過傷や打撲傷は生じない。",
//             "c. 挫創の創洞内には結合組織や血管などが架橋状に残存していることが多い。",
//             "d. 表皮剥脱は、死後しばらく経過するとより明瞭になる。",
//             "e. 裂創は常に外力の直接作用した部位にのみ生ずる損傷である。"
//         ],
//         "answer": "c d",
//         "commentary": "a. 誤り。二重条痕という例外あり。b. 誤り。峰部で擦過すれば起こりうる。c. 正しい。鋭器損傷との鑑別点。d. 正しい。表皮欠損部分が乾燥してより目立つようになる。e. 誤り。裂創は外力によって皮膚が過伸展し、その弾性限界を超えたときに生ずるので、通常離れた部位に生ずる。"
//     },
//     {
//         "question": "凍死の発生条件として誤っているのはどれか。96A74",
//         "choices": [
//             "a. 酩酊",
//             "b. 精神疾患",
//             "c. 高齢",
//             "d. 肥満",
//             "e. 血管性障害"
//         ],
//         "answer": "d",
//         "commentary": "正しい選択肢 a,b,c,e。低体温症発症しやすい例。"
//     },
//     {
//         "question": "溺死の診断に最も有用なのはどれか。101A71",
//         "choices": [
//             "a. 外因の有無",
//             "b. 血中塩素濃度",
//             "c. 多量の胸水",
//             "d. 浸漬斑",
//             "e. 魚介類の付着"
//         ],
//         "answer": "b",
//         "commentary": "肺水腫、犬弥（異）唾液流、溢血点（顔面、胸部）、鼻口腔泡沫（ピンク）、副腎髄質出血"
//     },
//     {
//         "question": "シンナー中毒で誤っているのはどれか。101I60",
//         "choices": [
//             "a. 成人男性のシンナー嗅ぎによる中毒死が多い。",
//             "b. 急性中毒では呼吸抑制がみられる。",
//             "c. 急性中毒では血圧上昇がみられる。",
//             "d. 慢性中毒では知能低下がみられる。",
//             "e. 慢性中毒では脳の萎縮がみられる。"
//         ],
//         "answer": "c",
//         "commentary": "急性中毒→血圧低下。"
//     },
//     {
//         "question": "急性一酸化炭素中毒で誤っているのはどれか。97I56",
//         "choices": [
//             "a. 遅発性脳症を生じる。",
//             "b. 心筋障害を生じる。",
//             "c. 血液ガス分析が診断に有用である。",
//             "d. 血中の酸素含量が増加する。",
//             "e. チアノーゼを伴わない赤色の皮膚がみられる。"
//         ],
//         "answer": "d",
//         "commentary": "COは酸素と結びつかず、むしろ酸素運搬能を低下させる。"
//     },
//     {
//         "question": "毒物の中毒症状について誤っているのはどれか。101I59",
//         "choices": [
//             "a. アトロピン ---- 縮瞳",
//             "b. 一酸化炭素 ---- 血中酸素含量の増加",
//             "c. シアン ---- 中枢神経抑制",
//             "d. アルコール ---- 呼吸抑制",
//             "e. アヘン ---- 縮瞳"
//         ],
//         "answer": "a b c",
//         "commentary": "アトロピン→散瞳。一酸化炭素→血中酸素含量減少。シアン→呼吸促進。"
//     }
// ]

        ],},{
            groupTag : "周産期疾患 出席課題",
            groupContents: [{
                detailInfo: '5/07 1限 (1)',
                questionSentence: '正常な胎位はどれか？',
                answer: '頭位',
                answerImg: [normalFetalPosition],
                commentary: '頭位以外の、骨盤位、横位、斜位は異常胎位とされる。',

        },{
            detailInfo: '5/07 1限 (2)',
            questionSentence: '分娩第2期はどの状態を指すか？',
            answer: '子宮口全開大から胎児娩出までの状態',
            answerImg: [stageOfLabor],
            commentary: '子宮口全開大、胎児娩出で区切られる。',
        },{
            detailInfo: '5/07 1限 (3)',
            questionSentence: '児頭の固定とは児頭先進部がどの高さにあることを指すか？',
            answer: 'Station0(坐骨棘に児頭の先進部が達する高さ)',
            answerImg: [station0],
            commentary: '0を基準として、-3~-1は骨盤内、+1~+3は骨盤外。',
        },{
           detailInfo : '5/07 1限 (4)',
              questionSentence : 'Bishopスコアに含まれるのはどれか？',
        },{
            detailInfo: '5/07 2限 (1)',
            questionSentence: '胞状奇胎で血中に増加するものはどれか？',
        },{
            detailInfo: '5/07 2限 (2)',
            questionSentence: '流産は何週未満の妊娠の終了を指すか？',
        },{
            detailInfo: '5/07 2限 (3)',
            questionSentence: '難所性妊娠の部位で最も多いのはどれか？',
        },{
            detailInfo: '5/07 2限 (4)',
            questionSentence: '習慣流産は何回以上の連続した流産を指すか？',
        },{
            detailInfo: '5/21 3限 (1)',
            questionSentence: 'TORCH症候群に含まれる病原体はどれか',
        },{
            detailInfo: '5/21 3限 (2)',
            questionSentence: '先天性風疹症候群の三大症状はどれか',
        },{
            detailInfo: '5/21 3限 (3)',
            questionSentence: '産道感染を起こしにくい病原体はどれか',
        },{
            detailInfo: '5/21 3限 (4)',
            questionSentence: '母体保護法をもつ医師しか行えない処置・手術はどれか',
        }]
    },{
        groupTag : "周産期疾患まとめ問題集",
        groupContents: [{
            detailInfo: 'chatGPT4oから生成された問題集',
                  questionSentence: "Q1 分娩で正常なものはどれか。2つ選べ。",
                  choices: [
                    "A) 妊娠満42週0日の分娩",
                    "B) 子宮口全開大時の破水",
                    "C) 後方後頭位分娩",
                    "D) 分娩所要時間32時間",
                    "E) 分娩時出血量400ml"
                  ],
                  answer: "B, E",
                  commentary: "A) 妊娠満42週0日の分娩 → 37週0日～41週6日までが正期産\nB) 子宮口全開大時の破水 → 分娩第1～2期にかけての破水が適時破水\nC) 後方後頭位分娩 → 前方後頭位分娩が正常分娩\nD) 分娩所要時間32時間 → 遷延分娩（正常の約2倍の時間）\nE) 分娩時出血量400ml → 分娩時の出血は500ml以内が正常"
                },
                {
                  questionSentence: "Q2 ヒト受精卵で正しいものはどれか",
                  choices: [
                    "A) 受精卵は受精後2日で子宮内膜に着床する",
                    "B) 受精卵は増殖期子宮内膜に着床する",
                    "C) 受精卵は桑実胚期に子宮内膜に着床する",
                    "D) 胞胚は着床のため透明体から脱出する",
                    "E) 子宮内膜で受精する。"
                  ],
                  answer: "D",
                  commentary: "A) 受精卵は受精後2日で子宮内膜に着床する → 6～7日で着床\nB) 受精卵は増殖期子宮内膜に着床する → 分泌期内膜に着床\nC) 受精卵は桑実胚期に子宮内膜に着床する → 胚盤胞で着床\nD) 胞胚は着床のため透明体から脱出する → 正しい\nE) 子宮内膜で受精する → 卵管膨大部で受精する"
                },
                {
                  questionSentence: "Q3 卵膜の構成について母体側から胎児側の順で正しいものはどれか。1つ選べ。",
                  choices: [
                    "A) 絨毛膜→羊膜→脱落膜",
                    "B) 絨毛膜→脱落膜→羊膜",
                    "C) 脱落膜→絨毛膜→羊膜",
                    "D) 脱落膜→羊膜→絨毛膜",
                    "E) 羊膜→絨毛膜→脱落膜"
                  ],
                  answer: "C",
                  commentary: "脱落膜→絨毛膜→羊膜の順序が正しい。"
                },
                {
                  questionSentence: "Q4 妊娠中の超音波検査所見について正しいものはどれか。1つ選べ。",
                  choices: [
                    "A) 妊娠3週で胎嚢を認める",
                    "B) 妊娠4週で胎芽の心拍動を確認できる",
                    "C) 妊娠9週の胎児心拍数は160～180/分である",
                    "D) 妊娠10週に児頭大横径（BPD）で分娩予定日を修正する",
                    "E) 妊娠22週で胎児の推定体重は1,000g程度である"
                  ],
                  answer: "C",
                  commentary: "A) 妊娠3週で胎嚢を認める → 4週後半～5週前半\nB) 妊娠4週で胎芽の心拍動を確認できる → 6週以降\nC) 妊娠9週の胎児心拍数は160～180/分である → 正しい\nD) 妊娠10週に児頭大横径（BPD）で分娩予定日を修正する → 頭殿長で修正\nE) 妊娠22週で胎児の推定体重は1,000g程度である → 450-500g程度"
                },
                {
                  questionSentence: "Q5 23歳の女性。全身倦怠感を主訴に受診した。まず行う検査はどれか。1つ選べ。",
                  choices: [
                    "A) 血中hCG定量",
                    "B) 動脈血ガス採血",
                    "C) 上部消化管内視鏡検査",
                    "D) 甲状腺機能検査",
                    "E) 尿ケトン体"
                  ],
                  answer: "E",
                  commentary: "尿ケトン体 → 低血糖で尿ケトン陽性となる"
                },
                {
                  questionSentence: "Q6 Q5の患者に対する説明として適切なのはどれか。1つ選べ。",
                  choices: [
                    "A) 「絶食にしたほうがいいです」",
                    "B) 「食事は高タンパク質食にしてください」",
                    "C) 「点滴をします」",
                    "D) 「人工妊娠中絶をします」",
                    "E) 「ビタミンAを積極的に補給してください」"
                  ],
                  answer: "C",
                  commentary: "A) 絶食にしたほうがいいです → 食べたいものを食べられる量だけ食べる\nB) 食事は高タンパク質食にしてください → 炭水化物（ブドウ糖）\nC) 点滴をします → 正しい\nD) 人工妊娠中絶をします → 非常に重症例では認められる\nE) ビタミンAを積極的に補給してください → Wernicke脳症予防にビタミンB1補充を行う"
                },
                {
                  questionSentence: "Q7 この患者のBishop scoreはどれか？",
                  choices: [
                    "A) 5点",
                    "B) 6点",
                    "C) 7点",
                    "D) 8点",
                    "E) 9点"
                  ],
                  answer: "C",
                  commentary: "子宮口3cm開大、展退度50%、児頭下降度SP-2cm、硬さは中等硬、位置は後方の場合のBishop scoreは6点"
                },
                {
                  questionSentence: "Q8 胎児付属物について正しいものはどれか。1つ選べ。",
                  choices: [
                    "A) 羊水は弱酸性である",
                    "B) 臍帯動脈は1本である",
                    "C) 臍帯表面は絨毛膜で覆われる",
                    "D) 羊膜はWharton膠質からなる",
                    "E) 臍帯静脈の血液は胎児側に向かって流れる"
                  ],
                  answer: "E",
                  commentary: "A) 羊水は弱酸性である → アルカリ性（破水の診断にリトマス紙を利用）\nB) 臍帯動脈は1本である → 動脈2本、静脈1本\nC) 臍帯表面は絨毛膜で覆われる → 羊膜で覆われている\nD) 羊膜はWharton膠質からなる → Wharton膠質は臍帯に存在（緩衝材）\nE) 臍帯静脈の血液は胎児側に向かって流れる → 臍帯動脈は胎児から胎盤に向かう"
                },
                {
                  questionSentence: "Q9 糖尿病合併妊娠について誤っているのはどれか。1つ選べ。",
                  choices: [
                    "A) 妊娠中は経口血糖降下薬で管理する",
                    "B) 新生児低血糖に注意する",
                    "C) 分娩後はインスリン必要量が減少する",
                    "D) 羊水過多症の合併頻度が増える",
                    "E) 妊娠初期の血糖コントロールが不良の場合は先天性形態異常の頻度が高くなる"
                  ],
                  answer: "A",
                  commentary: "A) 妊娠中は経口血糖降下薬で管理する → インスリンで管理（胎盤通過性なしのため）\nB) 新生児低血糖に注意する → 分娩後、母体からの糖の流入がなくなるため\nC) 分娩後はインスリン必要量が減少する → 抗インスリン作用のある胎盤からのホルモン（hPLやプロゲステロンなど）がなくなるため\nD) 羊水過多症の合併頻度が増える → 胎児高血糖により尿量増加のため\nE) 妊娠初期の血糖コントロールが不良の場合は先天性形態異常の頻度が高くなる → 正しい"
                },
                {
                  questionSentence: "Q10 25歳の初産婦。妊娠39週6日。陣痛発来のため入院した。正しいのはどれか？",
                  choices: [
                    "A) 破水している",
                    "B) 反屈位である",
                    "C) 過強陣痛である",
                    "D) 分娩第2期である",
                    "E) 児頭は嵌入している"
                  ],
                  answer: "E",
                  commentary: "A) 破水している → 卵膜存在しているので破水は否定的\nB) 反屈位である → 小泉門が先進しているので屈位である\nC) 過強陣痛である → 1分以内の周期なら過強陣痛\nD) 分娩第2期である → 第1期である\nE) 児頭は嵌入している →児頭最大径が骨盤入口を通過した状態 先進部は児頭嵌入でstation 0、児頭固定でstation -2～-1"
                },
                {
                  questionSentence: "Q11 分娩4時間後の出血の誘因として考えられるのはどれか。3つ選べ。",
                  choices: [
                    "A) 母体年齢",
                    "B) 分娩回数",
                    "C) 分娩週数",
                    "D) 児体重",
                    "E) 分娩時間"
                  ],
                  answer: "B, D, E",
                  commentary: "A) 母体年齢 → 関係ない\nB) 分娩回数 → 多産婦ほど弛緩出血のリスクが高い\nC) 分娩週数 → 関係ない\nD) 児体重 → 児が大きいほど弛緩出血のリスクが高い\nE) 分娩時間 → 分娩時間が長いと弛緩出血のリスクが高い"
                },
                {
                  questionSentence: "Q12 最初に行う処置はどれか。1つ選べ。",
                  choices: [
                    "A) 輸血",
                    "B) 子宮全摘術",
                    "C) 抗DIC療法",
                    "D) 子宮内容除去術",
                    "E) 子宮底輪状マッサージ"
                  ],
                  answer: "E",
                  commentary: "A) 輸血 → 現時点では輸血は不要（準備はしてもよいかも）\nB) 子宮全摘術 → 最終手段\nC) 抗DIC療法 → DICはおこしていない\nD) 子宮内容除去術 → 子宮内に遺残物を思わせる所見はない\nE) 子宮底輪状マッサージ → 最初に行う処置として重要"
                },
                {
                  questionSentence: "Q13 適切な対応はどれか。1つ選べ。",
                  choices: [
                    "A) 緊急帝王切開を行う",
                    "B) 子宮頸管縫縮術を行う",
                    "C) 翌日の受診を指示し帰宅させる",
                    "D) オキシトシンの点滴を開始する",
                    "E) マルチウス-グスマンのX線撮影を行う"
                  ],
                  answer: "A",
                  commentary: "緊急帝王切開が適切。"
                },
                {
                  questionSentence: "Q14 最も考えられるのはどれか1つ選べ。",
                  choices: [
                    "A) 前置胎盤",
                    "B) 切迫早産",
                    "C) 絨毛膜羊膜炎",
                    "D) 常位胎盤早期剥離",
                    "E) 子宮破裂"
                  ],
                  answer: "D",
                  commentary: "常位胎盤早期剥離 → 胎盤の超音波所見からもっとも考えられる（原因は妊娠高血圧腎症）"
                },
                {
                  questionSentence: "Q15 適切な処置を1つ選べ。",
                  choices: [
                    "A) ニカルジピン（カルシウム拮抗薬）静注",
                    "B) フロセミド（利尿薬）静注",
                    "C) 塩酸リトドリン点滴静注",
                    "D) ヘパリン静注",
                    "E) 経過観察"
                  ],
                  answer: "A",
                  commentary: "ニカルジピン（カルシウム拮抗薬）静注 → 妊娠高血圧腎症に伴う子癇発作であり、降圧が必要"
                },
                {
                  questionSentence: "Q16 説明として適切なのはどれか。1つ選べ。",
                  choices: [
                    "A) 「羊水を使って検査を行います」",
                    "B) 「検査のため流産する確率は0.3％です」",
                    "C) 「検査で先天性疾患の80％が診断できます」",
                    "D) 「検査の結果が陽性であっても確定診断にはなりません」",
                    "E) 「妊娠16週以降にならないと検査することができません」"
                  ],
                  answer: "D",
                  commentary: "A) 羊水を使って検査を行います → 母体採血\nB) 検査のため流産する確率は0.3％です → 母体採血なので流産はしない\nC) 検査で先天性疾患の80％が診断できます → 染色体異常以外の先天疾患はわからない（半数以上は多因子遺伝）\nD) 検査の結果が陽性であっても確定診断にはなりません → 羊水検査にて確定\nE) 妊娠16週以降にならないと検査することができません → 9～15週まで"
                },
                {
                  questionSentence: "Q17 最も考えられるのはどれか。1つ選べ。",
                  choices: [
                    "A) 虫垂炎",
                    "B) 腎盂腎炎",
                    "C) 絨毛膜羊膜炎",
                    "D) 骨盤腹膜炎",
                    "E) 卵管炎"
                  ],
                  answer: "C",
                  commentary: "絨毛膜羊膜炎 → 絨毛膜羊膜炎から破水を起こしている（混濁羊水あり）"
                },
                {
                  questionSentence: "Q18 この患者で誤っているのはどれか。1つ選べ。",
                  choices: [
                    "A) 重症妊娠高血圧症候群",
                    "B) 胎児胎盤機能不全である",
                    "C) 胎動は減少する",
                    "D) 前期破水が生じやすい",
                    "E) Non-reassuring fetal status（NRFS）"
                  ],
                  answer: "D",
                  commentary: "A) 重症妊娠高血圧症候群 → BP160/110以上で重症\nB) 胎児胎盤機能不全である → 遅発一過性徐脈の所見あり\nC) 胎動は減少する → NRFSでは胎動減少する\nD) 前期破水が生じやすい → 無関係\nE) Non-reassuring fetal status（NRFS） → 遅発一過性徐脈の所見あり"
                },
                {
                  questionSentence: "Q19 Q18の患者に対する対応として正しいものはどれか。1つ選べ。",
                  choices: [
                    "A) 帝王切開術を行う",
                    "B) 利尿剤を投与する",
                    "C) 羊水注入を行う",
                    "D) 副腎皮質ステロイド薬の投与",
                    "E) 経過観察"
                  ],
                  answer: "A",
                  commentary: "帝王切開術を行う → 重症妊娠高血圧腎症であり、NRFSも認める。妊娠の終結が唯一の治療法"
                },
                {
                  questionSentence: "Q20 羊水の少ない方の児によくみられるのはどれか。1つ選べ。",
                  choices: [
                    "A) 貧血",
                    "B) 心拡大",
                    "C) 皮下浮腫",
                    "D) 膀胱の拡張",
                    "E) 巨大児"
                  ],
                  answer: "A",
                  commentary: "貧血 → 供血児に認める"
                },
                {
                  questionSentence: "Q21 分娩時の出血量は1,200mlであった。正しいのはどれか。1つ選べ。",
                  choices: [
                    "A) 分娩の開始は午前0時である",
                    "B) 適時破水である",
                    "C) 分娩第1期は11時間である",
                    "D) 分娩第3期は10分である",
                    "E) 分娩時出血量は正常範囲である。"
                  ],
                  answer: "D",
                  commentary: "A) 分娩の開始は午前0時である → 午前3時が分娩の開始\nB) 適時破水である → 分娩開始前の破水であり非適時破水である\nC) 分娩第1期は11時間である → 7時間である（分娩開始～子宮口全開まで）\nD) 分娩第3期は10分である → 10分である（児娩出後～胎盤娩出まで）\nE) 分娩時出血量は正常範囲である → 500ml以上であり異常（弛緩出血）"
                }
                ]
            },{
            groupTag : "産科まとめ機械翻訳",
            groupContents: [{
                      questionSentence: "Q1 Which of the following is normal for childbirth? Select two.",
                      choices: [
                        "A) Delivery at 42 weeks of pregnancy",
                        "B) Rupture of membranes at full dilation of the cervix",
                        "C) Delivery in posterior occipital position",
                        "D) Delivery duration of 32 hours",
                        "E) Blood loss of 400ml during delivery"
                      ],
                      answer: "B, E",
                      commentary: "A) 妊娠満42週0日の分娩 → 37週0日～41週6日までが正期産\nB) 子宮口全開大時の破水 → 分娩第1～2期にかけての破水が適時破水\nC) 後方後頭位分娩 → 前方後頭位分娩が正常分娩\nD) 分娩所要時間32時間 → 遷延分娩（正常の約2倍の時間）\nE) 分娩時出血量400ml → 分娩時の出血は500ml以内が正常"
                    },
                    {
                      questionSentence: "Q2 Which of the following is correct about human fertilized eggs?",
                      choices: [
                        "A) The fertilized egg implants in the endometrium 2 days after fertilization",
                        "B) The fertilized egg implants in the proliferative phase endometrium",
                        "C) The fertilized egg implants in the endometrium during the morula stage",
                        "D) The blastocyst hatches from the zona pellucida for implantation",
                        "E) Fertilization occurs in the endometrium"
                      ],
                      answer: "D",
                      commentary: "A) 受精卵は受精後2日で子宮内膜に着床する → 6～7日で着床\nB) 受精卵は増殖期子宮内膜に着床する → 分泌期内膜に着床\nC) 受精卵は桑実胚期に子宮内膜に着床する → 胚盤胞で着床\nD) 胞胚は着床のため透明体から脱出する → 正しい\nE) 子宮内膜で受精する → 卵管膨大部で受精する"
                    },
                    {
                      questionSentence: "Q3 Which of the following is the correct sequence of fetal membranes from the maternal side to the fetal side? Select one.",
                      choices: [
                        "A) Chorion → Amnion → Decidua",
                        "B) Chorion → Decidua → Amnion",
                        "C) Decidua → Chorion → Amnion",
                        "D) Decidua → Amnion → Chorion",
                        "E) Amnion → Chorion → Decidua"
                      ],
                      answer: "C",
                      commentary: "脱落膜→絨毛膜→羊膜の順序が正しい。"
                    },
                    {
                      questionSentence: "Q4 Which of the following is correct about ultrasound findings during pregnancy? Select one.",
                      choices: [
                        "A) Gestational sac is visible at 3 weeks of pregnancy",
                        "B) Fetal heartbeat is confirmed at 4 weeks of pregnancy",
                        "C) Fetal heart rate at 9 weeks of pregnancy is 160-180 bpm",
                        "D) Expected delivery date is adjusted based on BPD at 10 weeks of pregnancy",
                        "E) Estimated fetal weight at 22 weeks of pregnancy is about 1,000g"
                      ],
                      answer: "C",
                      commentary: "A) 妊娠3週で胎嚢を認める → 4週後半～5週前半\nB) 妊娠4週で胎芽の心拍動を確認できる → 6週以降\nC) 妊娠9週の胎児心拍数は160～180/分である → 正しい\nD) 妊娠10週に児頭大横径（BPD）で分娩予定日を修正する → 頭殿長で修正\nE) 妊娠22週で胎児の推定体重は1,000g程度である → 450-500g程度"
                    },
                    {
                      questionSentence: "Q5 A 23-year-old woman presented with general fatigue. What is the first test to perform? Select one.",
                      choices: [
                        "A) Quantitative blood hCG",
                        "B) Arterial blood gas analysis",
                        "C) Upper gastrointestinal endoscopy",
                        "D) Thyroid function test",
                        "E) Urine ketone bodies"
                      ],
                      answer: "E",
                      commentary: "尿ケトン体 → 低血糖で尿ケトン陽性となる"
                    },
                    {
                      questionSentence: "Q6 Which of the following is the appropriate explanation for the patient in Q5? Select one.",
                      choices: [
                        "A) \"You should fast.\"",
                        "B) \"Eat a high-protein diet.\"",
                        "C) \"We will administer an IV drip.\"",
                        "D) \"We will perform an induced abortion.\"",
                        "E) \"Actively supplement with vitamin A.\""
                      ],
                      answer: "C",
                      commentary: "A) 絶食にしたほうがいいです → 食べたいものを食べられる量だけ食べる\nB) 食事は高タンパク質食にしてください → 炭水化物（ブドウ糖）\nC) 点滴をします → 正しい\nD) 人工妊娠中絶をします → 非常に重症例では認められる\nE) ビタミンAを積極的に補給してください → Wernicke脳症予防にビタミンB1補充を行う"
                    },
                    {
                      questionSentence: "Q7 What is this patient's Bishop score?",
                      choices: [
                        "A) 5 points",
                        "B) 6 points",
                        "C) 7 points",
                        "D) 8 points",
                        "E) 9 points"
                      ],
                      answer: "C",
                      commentary: "子宮口3cm開大、展退度50%、児頭下降度SP-2cm、硬さは中等硬、位置は後方の場合のBishop scoreは6点"
                    },
                    {
                      questionSentence: "Q8 Which of the following is correct about fetal appendages? Select one.",
                      choices: [
                        "A) Amniotic fluid is slightly acidic",
                        "B) There is one umbilical artery",
                        "C) The surface of the umbilical cord is covered with chorion",
                        "D) The amnion consists of Wharton's jelly",
                        "E) Blood in the umbilical vein flows towards the fetus"
                      ],
                      answer: "E",
                      commentary: "A) 羊水は弱酸性である → アルカリ性（破水の診断にリトマス紙を利用）\nB) 臍帯動脈は1本である → 動脈2本、静脈1本\nC) 臍帯表面は絨毛膜で覆われる → 羊膜で覆われている\nD) 羊膜はWharton膠質からなる → Wharton膠質は臍帯に存在（緩衝材）\nE) 臍帯静脈の血液は胎児側に向かって流れる → 臍帯動脈は胎児から胎盤に向かう"
                    },
                    {
                      questionSentence: "Q9 Which of the following is incorrect about diabetes-complicated pregnancy? Select one.",
                      choices: [
                        "A) Managed with oral hypoglycemic agents during pregnancy",
                        "B) Pay attention to neonatal hypoglycemia",
                        "C) Insulin requirement decreases after delivery",
                        "D) Increased frequency of polyhydramnios",
                        "E) High frequency of congenital malformations if poor glycemic control in early pregnancy"
                      ],
                      answer: "A",
                      commentary: "A) 妊娠中は経口血糖降下薬で管理する → インスリンで管理（胎盤通過性なしのため）\nB) 新生児低血糖に注意する → 分娩後、母体からの糖の流入がなくなるため\nC) 分娩後はインスリン必要量が減少する → 抗インスリン作用のある胎盤からのホルモン（hPLやプロゲステロンなど）がなくなるため\nD) 羊水過多症の合併頻度が増える → 胎児高血糖により尿量増加のため\nE) 妊娠初期の血糖コントロールが不良の場合は先天性形態異常の頻度が高くなる → 正しい"
                    },
                    {
                      questionSentence: "Q10 A 25-year-old primipara was admitted at 39 weeks and 6 days of pregnancy due to labor. Which is correct?",
                      choices: [
                        "A) The membranes have ruptured",
                        "B) The fetus is in deflexion position",
                        "C) There is hypertonic labor",
                        "D) It is in the second stage of labor",
                        "E) The fetal head is engaged"
                      ],
                      answer: "E",
                      commentary: "A) 破水している → 卵膜存在しているので破水は否定的\nB) 反屈位である → 小泉門が先進しているので屈位である\nC) 過強陣痛である → 1分以内の周期なら過強陣痛\nD) 分娩第2期である → 第1期である\nE) 児頭は嵌入している →児頭最大径が骨盤入口を通過した状態 先進部は児頭嵌入でstation 0、児頭固定でstation -2～-1"
                    },
                    {
                      questionSentence: "Q11 What are the possible causes of bleeding 4 hours after delivery? Select three.",
                      choices: [
                        "A) Maternal age",
                        "B) Number of deliveries",
                        "C) Gestational weeks",
                        "D) Fetal weight",
                        "E) Duration of labor"
                      ],
                      answer: "B, D, E",
                      commentary: "A) 母体年齢 → 関係ない\nB) 分娩回数 → 多産婦ほど弛緩出血のリスクが高い\nC) 分娩週数 → 関係ない\nD) 児体重 → 児が大きいほど弛緩出血のリスクが高い\nE) 分娩時間 → 分娩時間が長いと弛緩出血のリスクが高い"
                    },
                    {
                      questionSentence: "Q12 What is the first treatment for the patient in Q11? Select one.",
                      choices: [
                        "A) Blood transfusion",
                        "B) Hysterectomy",
                        "C) Anti-DIC therapy",
                        "D) Uterine curettage",
                        "E) Uterine fundal massage"
                      ],
                      answer: "E",
                      commentary: "A) 輸血 → 現時点では輸血は不要（準備はしてもよいかも）\nB) 子宮全摘術 → 最終手段\nC) 抗DIC療法 → DICはおこしていない\nD) 子宮内容除去術 → 子宮内に遺残物を思わせる所見はない\nE) 子宮底輪状マッサージ → 最初に行う処置として重要"
                    },
                    {
                      questionSentence: "Q13 What is the appropriate response? Select one.",
                      choices: [
                        "A) Perform emergency cesarean section",
                        "B) Perform cervical cerclage",
                        "C) Instruct the patient to come back the next day",
                        "D) Start oxytocin drip",
                        "E) Perform Martius-Gusman X-ray"
                      ],
                      answer: "A",
                      commentary: "緊急帝王切開が適切。"
                    },
                    {
                      questionSentence: "Q14 What is the most likely diagnosis? Select one.",
                      choices: [
                        "A) Placenta previa",
                        "B) Threatened preterm labor",
                        "C) Chorioamnionitis",
                        "D) Abruptio placentae",
                        "E) Uterine rupture"
                      ],
                      answer: "D",
                      commentary: "常位胎盤早期剥離 → 胎盤の超音波所見からもっとも考えられる（原因は妊娠高血圧腎症）"
                    },
                    {
                      questionSentence: "Q15 What is the appropriate treatment? Select one.",
                      choices: [
                        "A) Intravenous nicardipine (calcium channel blocker)",
                        "B) Intravenous furosemide (diuretic)",
                        "C) Intravenous ritodrine hydrochloride",
                        "D) Intravenous heparin",
                        "E) Observation"
                      ],
                      answer: "A",
                      commentary: "ニカルジピン（カルシウム拮抗薬）静注 → 妊娠高血圧腎症に伴う子癇発作であり、降圧が必要"
                    },
                    {
                      questionSentence: "Q16 Which of the following is the appropriate explanation? Select one.",
                      choices: [
                        "A) \"We will use amniotic fluid for the test.\"",
                        "B) \"The risk of miscarriage due to the test is 0.3%.\"",
                        "C) \"The test can diagnose 80% of congenital diseases.\"",
                        "D) \"A positive result does not confirm the diagnosis.\"",
                        "E) \"The test cannot be performed until 16 weeks of pregnancy.\""
                      ],
                      answer: "D",
                      commentary: "A) 羊水を使って検査を行います → 母体採血\nB) 検査のため流産する確率は0.3％です → 母体採血なので流産はしない\nC) 検査で先天性疾患の80％が診断できます → 染色体異常以外の先天疾患はわからない（半数以上は多因子遺伝）\nD) 検査の結果が陽性であっても確定診断にはなりません → 羊水検査にて確定\nE) 妊娠16週以降にならないと検査することができません → 9～15週まで"
                    },
                    {
                      questionSentence: "Q17 What is the most likely diagnosis? Select one.",
                      choices: [
                        "A) Appendicitis",
                        "B) Pyelonephritis",
                        "C) Chorioamnionitis",
                        "D) Pelvic peritonitis",
                        "E) Salpingitis"
                      ],
                      answer: "C",
                      commentary: "絨毛膜羊膜炎 → 絨毛膜羊膜炎から破水を起こしている（混濁羊水あり）"
                    },
                    {
                      questionSentence: "Q18 Which of the following is incorrect about this patient? Select one.",
                      choices: [
                        "A) Severe pregnancy-induced hypertension",
                        "B) Fetal-placental dysfunction",
                        "C) Decreased fetal movement",
                        "D) Increased risk of preterm rupture of membranes",
                        "E) Non-reassuring fetal status (NRFS)"
                      ],
                      answer: "D",
                      commentary: "A) 重症妊娠高血圧症候群 → BP160/110以上で重症\nB) 胎児胎盤機能不全である → 遅発一過性徐脈の所見あり\nC) 胎動は減少する → NRFSでは胎動減少する\nD) 前期破水が生じやすい → 無関係\nE) Non-reassuring fetal status（NRFS） → 遅発一過性徐脈の所見あり"
                    },
                    {
                      questionSentence: "Q19 What is the appropriate response for the patient in Q18? Select one.",
                      choices: [
                        "A) Perform cesarean section",
                        "B) Administer diuretics",
                        "C) Perform amnioinfusion",
                        "D) Administer corticosteroids",
                        "E) Observation"
                      ],
                      answer: "A",
                      commentary: "帝王切開術を行う → 重症妊娠高血圧腎症であり、NRFSも認める。妊娠の終結が唯一の治療法"
                    },
                    {
                      questionSentence: "Q20 Which of the following is often observed in the twin with less amniotic fluid? Select one.",
                      choices: [
                        "A) Anemia",
                        "B) Cardiomegaly",
                        "C) Subcutaneous edema",
                        "D) Bladder enlargement",
                        "E) Macrosomia"
                      ],
                      answer: "A",
                      commentary: "貧血 → 供血児に認める"
                    },
                    {
                      questionSentence: "Q21 The blood loss during delivery was 1,200ml. Which is correct? Select one.",
                      choices: [
                        "A) Labor started at midnight",
                        "B) Timely rupture of membranes",
                        "C) The first stage of labor lasted 11 hours",
                        "D) The third stage of labor lasted 10 minutes",
                        "E) The amount of blood loss during delivery is within normal range."
                      ],
                      answer: "D",
                      commentary: "A) 分娩の開始は午前0時である → 午前3時が分娩の開始\nB) 適時破水である → 分娩開始前の破水であり非適時破水である\nC) 分娩第1期は11時間である → 7時間である（分娩開始～子宮口全開まで）\nD) 分娩第3期は10分である → 10分である（児娩出後～胎盤娩出まで）\nE) 分娩時出血量は正常範囲である → 500ml以上であり異常（弛緩出血）"
                    }
                  ]
                  
        },{
            groupTag : "婦人疾患 課題",
            groupContents: [{
                detailInfo: '5/28課題 (1)',
                questionSentence: '骨盤部単純MRIのT1強調像で高信号を示すのはどれか。2つ選べ。',
                choices: ['膀胱内の尿', '子宮内膜', '石灰化した子宮筋腫', '皮様嚢胞腫の内容', '卵巣チョコレート嚢胞の内容'],
                answer: '皮様嚢胞腫の内容、卵巣チョコレート嚢胞の内容',
                answerImg: [MRIT1Img,dermoidCystImg, chocolateCystImg],
                commentary: 'T1強調像で高信号を示すのは脂肪や血液など。チョコレート嚢胞は古い血液が蓄積したものであるため高信号を示す。皮様嚢胞腫は腫瘍内容に多様の脂肪を含むため高信号を示す。',
            },{
                detailInfo: '5/28課題 (2)',
                questionImg: [gynecologyQuestion1],
                questionSentence: '35歳の女性。月経痛と過多月経を主訴に来院した。月経は周期28日型、整、持続8日間。3年前から月経痛に対して市販の鎮痛薬を服用しているが、6か月前から仕事や日常生活に差し支えるようになったため受診した。内診で子宮は15cmに腫大し硬く、可動性は良好である。付属器は触知しない。血液所見：赤血球340万、Hb9.0g/dL、Ht28%、白血球4,100、血小板23万。骨盤部単純MRIのT2強調矢状断像を示す。診断はどれか。',
                choices: ['子宮筋腫', '子宮体癌', '子宮肉腫', '子宮腺筋症', '子宮内膜増殖症'],
                answer: '子宮腺筋症',
                answerImg: [adenomyosis1, adenomyosis2],
                commentary: '子宮腺筋症と子宮筋腫の鑑別。子宮腺筋症は子宮内膜組織が子宮筋層内で異所性に増殖。周囲に平滑筋の増生を伴う。子宮筋腫は種々の線維成分を伴う平滑筋細胞の増殖。辺縁平滑、境界明瞭。',

            },{
                detailInfo: '5/28課題 (3)',
                questionImg: [gynecologyQuestion2],
                questionSentence: '61歳の女性。3か月前から乳頭緊満感を認め、1か月前から少量の性器出血が持続するため来院した。閉経51歳。腟分泌物は白色、中等量で、子宮腟部に異常を認めない。子宮はやや大きく、左付属器部に手拳大の軟らかい腫瘤を触知する。子宮頸部細胞診クラスI、子宮内膜細胞診陰性。血液所見に異常を認めない。血清生化学所見：FSH 15mIU/mL（基準閉経後30以上）、エストラジオール84pg/mL（基準閉経後20以下）。免疫学所見：CEA 1.5ng/mL（基準5以下）、CA19-9 14U/mL（基準37以下）、CA125 38U/mL（基準35以下）。経腟超音波検査で左付属器腫瘤は大部分充実性で内部に大小の嚢胞を多数認める。骨盤部単純MRIのT1強調像（A）とT2強調像（B）とを別に示す。最も考えられるのはどれか',
                choices: ['卵巣漿液性腺癌', '卵巣顆粒膜細胞腫', '卵巣未分化胚細胞腫', '子宮体癌の卵巣転移', 'Krukenberg腫瘍'],
                answer: '卵巣顆粒膜細胞腫',
                answerImg: [ovarianGranulosaCellTumor],
                commentary: '中央やや右の腫瘤がT1強調像(A)では中信号、T2強調像(B)では高信号を示していて、また多房性である。エストロゲン産生性であると考えられる。',
            },]
    }

    ])
    const showQuestionList = () => {
        return questionList
    }
    return {
        showQuestionList,
        appName,
        jpName,
    }
}  
