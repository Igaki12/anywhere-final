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

        ],},{
            groupTag : "周産期疾患 出席課題",
            groupContents: [{
                detailInfo: '5/07 1限 (1)',
                questionSentence: '正常な胎位はどれか？',
        },{
            detailInfo: '5/07 1限 (2)',
            questionSentence: '分娩第2期はどの状態を指すか？',
        },{
            detailInfo: '5/07 1限 (3)',
            questionSentence: '児頭の固定とは児頭先進部がどの高さにあることを指すか？',
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
        }]
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
