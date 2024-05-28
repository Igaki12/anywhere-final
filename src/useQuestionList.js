import peri2021qS31 from './img/answer/peri2021qS31.png';
import peri2021qS29 from './img/answer/peri2021qS29.png';
import peri2021q28 from './img/answer/peri2021q28.png';
import peri2021q4 from './img/answer/peri2021q4.png';
import peri2021q18_1 from './img/answer/peri2021q18_1.png';
import peri2021q5 from './img/answer/peri2021q5.png';
import peri2021q18_2 from './img/answer/peri2021q18_2.png';
import peri2021q6 from './img/answer/peri2021q6.png';
import peri2021q2 from './img/answer/peri2021q2.png';
import peri2021q1 from './img/answer/peri2021q1.png';
import peri2021q11 from './img/answer/peri2021q11.png';
import peri2021q10 from './img/answer/peri2021q10.png';
import peri2021q38 from './img/answer/peri2021q38.png';
import peri2021q13 from './img/answer/peri2021q13.png';
import peri2021q3_2 from './img/answer/peri2021q3_2.png';
import peri2021q17 from './img/answer/peri2021q17.png';
import peri2021q16 from './img/answer/peri2021q16.png';
import peri2021q3_3 from './img/answer/peri2021q3_3.png';
import peri2021q39_1 from './img/answer/peri2021q39_1.png';
import peri2021q3_1 from './img/answer/peri2021q3_1.png';
import peri2021q14 from './img/answer/peri2021q14.png';
import peri2021q29 from './img/answer/peri2021q29.png';
import peri2021q15 from './img/answer/peri2021q15.png';
import peri2021q39_2 from './img/answer/peri2021q39_2.png';
import peri2021q24 from './img/answer/peri2021q24.png';
import peri2021q30 from './img/answer/peri2021q30.png';
import peri2021q25 from './img/answer/peri2021q25.png';
import peri2021q19 from './img/answer/peri2021q19.png';
import peri2021q33 from './img/answer/peri2021q33.png';
import peri2021q26 from './img/answer/peri2021q26.png';
import peri2021q32 from './img/answer/peri2021q32.png';
import peri2021q36 from './img/answer/peri2021q36.png';
import peri2021q22 from './img/answer/peri2021q22.png';
import peri2021q23 from './img/answer/peri2021q23.png';
import peri2021q37 from './img/answer/peri2021q37.png';
import peri2021q31_1 from './img/answer/peri2021q31_1.png';
import peri2021q35 from './img/answer/peri2021q35.png';
import peri2021q34 from './img/answer/peri2021q34.png';
import peri2021q20 from './img/answer/peri2021q20.png';
import peri2021q31_2 from './img/answer/peri2021q31_2.png';
import peri2021q40 from './img/answer/peri2021q40.png';
import peri2021q8 from './img/answer/peri2021q8.png';
import peri2021q9 from './img/answer/peri2021q9.png';
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

        ],},
    //     {
    //         groupTag: "法医学　出席課題自動生成",
    //         groupContents: [
    //             {
    //                 questionSentence: "異状死と認めた場合、いつまでに所轄警察署に届け出なければならないか。",
    //                 choices: [
    //                     "a. 直ちに",
    //                     "b. 12時間以内",
    //                     "c. 24時間以内",
    //                     "d. 1週間以内",
    //                     "e. 翌月の10日まで"
    //                 ],
    //                 answer: "c",
    //                 commentary: "医師法に基づき、異状死体や異状死産児（妊娠4月以上）は24時間以内に所轄警察署へ届け出ねばならない。したがって正解はcとなる。"
    //             },
    //             {
    //                 questionSentence: "異状死体に該当しないのはどれか。",
    //                 choices: [
    //                     "a. 農薬中毒によると思われる死体",
    //                     "b. 他傷後の続発症によると思われる死体",
    //                     "c. 異型輸血によると思われる死体",
    //                     "d. 処方された薬の誤嚥によると思われる死体",
    //                     "e. 肺癌患者の喀血によると思われる死体"
    //                 ],
    //                 answer: "e",
    //                 commentary: "異状死体:確実に診断された内因性疾患で死亡したと判断される死体以外の死体。つまり病気で死んだと言い切れる人以外全員が対象。肺癌がなければ喀血してなかった。最終的な死因は窒息（外因）だが、肺癌のせいでなってるから異状死体ではない。"
    //             },
    //             {
    //                 questionSentence: "69歳の男性。一人暮らし。肺癌の末期で在宅療養中であり、週3回の往診を受けていた。往診担当医が午後5時に患者宅に行くと、寝室のベッド上で仰臥位のまま死亡していた。外傷はなく、肺癌で死亡したと判断された。直腸温 30.0℃。室温 22.0℃。紫赤色の死斑を背面に認め、指圧で容易に消退する。硬直を全身の各関節に認めるが、四肢関節の硬直は軽度である。死亡推定時刻として適切なのはどれか。",
    //                 choices: [
    //                     "a. 前日の午前9時頃",
    //                     "b. 前日の午後3時頃",
    //                     "c. 前日の午後9時頃",
    //                     "d. 当日の午前3時頃",
    //                     "e. 当日の午前9時頃"
    //                 ],
    //                 answer: "e",
    //                 commentary: "肺癌末期であり在宅療養中の69歳男性。往診時、寝室にて死亡していたが外傷はなく、肺癌で死亡したと判断された。直腸温30.0℃であり、死後７時間前後経過していると推測される。死斑や死後硬直の経過からも、死亡推定時刻として矛盾はしない。"
    //             },
    //             {
    //                 questionSentence: "5月某日の午前10時に縊頸しているのを発見され、すぐに布団に寝かされた死体。警察へは翌朝通報され、午前10時に検視を行った。体温は室温と同じ20℃。硬直は全身の関節で強く、死斑は背中に濃く出ている。下肢の皮膚に死斑の名残りの溢血点が見られる。腹部の腐敗偏食は見られない。適切な死亡推定時刻はどれか。",
    //                 choices: [
    //                     "a. 検視の前日の午前10時頃",
    //                     "b. 検視の前日の午前4時頃",
    //                     "c. 検視の前々日の午後10時頃",
    //                     "d. 検視の前々日の午前10時頃",
    //                     "e. 検視の3日前の午前10時頃"
    //                 ],
    //                 answer: "c",
    //                 commentary: "時間が経ってるので体温で推定はできない。硬直から2日以内くらい。死斑の不完全転移を起こしているので、おろした時点で10−15時間（半日程度）たつ。"
    //             },
    //             {
    //                 questionSentence: "死亡時刻を推定するのに役立つ所見はどれか。2つ選べ。",
    //                 choices: [
    //                     "a. 死斑の色調",
    //                     "b. 死体硬直の程度",
    //                     "c. 角膜混濁の程度",
    //                     "d. 瞳孔の大きさ",
    //                     "e. 腋窩温"
    //                 ],
    //                 answer: "b, c",
    //                 commentary: "死斑は死後30分後から出現し、次第に拡大し、約半日で固定するが、色調は死亡時間との相関はない。死後硬直は死後2～3時間程度で顎関節から出現し、徐々に広がる。角膜は死後次第に混濁し、約2日で瞳孔を透見できなくなる。瞳孔径は死亡により拡大するも、死亡時間との相関はない。腋窩温は環境の影響を強く受けるため、死亡時間の推定には直腸温を用いる。"
    //             },
    //             {
    //                 questionSentence: "鋭器損傷で正しいものはどれか。2つ選べ。",
    //                 choices: [
    //                     "a. 鋭器損傷には、切創、刺創、刺切創がある。",
    //                     "b. 刃物による刺創では、両創角は先鋭である。",
    //                     "c. 創口の大きさは、創口が皮膚割線に対して直角か平行かで異なる。",
    //                     "d. 鋭器損傷では一般に創洞面は平滑である。",
    //                     "e. 刺切創では創縁に表皮剥脱を伴うのが特徴。"
    //                 ],
    //                 answer: "c, d",
    //                 commentary: "鋭器損傷には、切創、刺創、刺切創に加えて割創も含む。刃物による刺創では、峰の部分では鈍となることがある。創口の大きさは、創口が皮膚割線に対して直角か平行かで異なる。鋭器損傷では一般に創洞面は平滑である。刺切創では創縁に表皮剥脱を伴うのが特徴。ただし、柄の部分まで刺した場合は創縁に生じることがある。"
    //             },
    //             {
    //                 questionSentence: "鈍器損傷で正しいものはどれか。2つ選べ。",
    //                 choices: [
    //                     "a. 皮下出血は外力が直接作用した部位にのみ生ずるものである。",
    //                     "b. 刃器では擦過傷や打撲傷は生じない。",
    //                     "c. 挫創の創洞内には結合組織や血管などが架橋状に残存していることが多い。",
    //                     "d. 表皮剥脱は、死後しばらく経過するとより明瞭になる。",
    //                     "e. 裂創は常に外力の直接作用した部位にのみ生ずる損傷である。"
    //                 ],
    //                 answer: "c, d",
    //                 commentary: "皮下出血は外力が直接作用した部位にのみ生ずるものではなく、二重条痕という例外がある。刃器では擦過傷や打撲傷は生じることがある。挫創の創洞内には結合組織や血管などが架橋状に残存していることが多い。表皮剥脱は死後しばらく経過するとより明瞭になる。裂創は外力によって皮膚が過伸展し、その弾性限界を超えたときに生ずるので、通常離れた部位に生ずる。"
    //             },

    // {
    //     questionSentence: "正しいものはどれか。すべて選べ。",
    //     choices: [
    //         "a. 嬰児殺に対して、我が国では殺人罪が適用される。",
    //         "b. 胎齢3か月の胎児の身長は9cm、体重は54gである。",
    //         "c. 一般的な成熟時、妊娠満40週において、指爪は指端を超え、趾爪は趾端に達する。",
    //         "d. 妊娠6か月の胎児には、大腿骨下端部の化骨核は認められない。",
    //         "e. 人工妊娠中絶は産婦人科医であれば実施できる。"
    //     ],
    //     answer: "a, b, c, d",
    //     commentary: "嬰児殺に対して、我が国では殺人罪が適用される。胎齢3か月の胎児の身長は9cm、体重は54gである。一般的な成熟時、妊娠満40週において、指爪は指端を超え、趾爪は趾端に達する。妊娠6か月の胎児には、大腿骨下端部の化骨核は認められない。人工妊娠中絶は指定医師が行う。"
    // },
    // {
    //     questionSentence: "正しいものはどれか。すべて選べ。",
    //     choices: [
    //         "a. 未呼吸児の横隔膜の高さは、既呼吸児のそれと比して高い。",
    //         "b. 既呼吸児の肺は淡紅色であり、スポンジ様で捻髪感を触れる。",
    //         "c. 呼吸細気管支および肺胞の限局性拡大は生産児の所見である。",
    //         "d. 肺浮遊試験部分陽性は呼吸肺とみなす。",
    //         "e. 墜落分娩や仮死状態で分娩された場合でも、肺浮遊試験は必ず陽性となる。"
    //     ],
    //     answer: "a, b, c, d",
    //     commentary: "未呼吸児の横隔膜の高さは、既呼吸児のそれと比して高い。既呼吸児の肺は淡紅色であり、スポンジ様で捻髪感を触れる。呼吸細気管支および肺胞の限局性拡大は生産児の所見である。肺浮遊試験部分陽性は呼吸肺とみなす。墜落分娩や仮死状態で分娩された場合でも、肺浮遊試験は必ず陽性とはならない。"
    // },
    // {
    //     questionSentence: "正しいものはどれか。すべて選べ。",
    //     choices: [
    //         "a. 児童虐待と思われる事例を発見した場合、警察へ届け出なければならない。",
    //         "b. 加害者として最も多いのは、継母である。",
    //         "c. 虐待による頭部損傷として、硬膜外血腫が多い。",
    //         "d. 虐待児では、胸腺が退縮することが多い。",
    //         "e. 最近増えてきている虐待の様態は、心理的虐待である。"
    //     ],
    //     answer: "d, e",
    //     commentary: "児童虐待と思われる事例を発見した場合、警察ではなく児童相談所、福祉事務所へ届け出なければならない。加害者として最も多いのは実母である。虐待による頭部損傷として、硬膜下血腫が多い。虐待児では、胸腺が退縮することが多い。最近増えてきている虐待の様態は、心理的虐待である。"
    // },
    // {
    //     questionSentence: "焼死（体）の概念について正しいものはどれか。すべて選べ。",
    //     choices: [
    //         "a. 焼死とは、火災によって生じた熱傷死のことである。",
    //         "b. 焼死体とは火災によって“焼け死んだもの”をいう。",
    //         "c. 火災発生時にその人が生存していれば死体に焼死の生活反応が見られる。",
    //         "d. 焼死したものには焼死の生活反応と熱損所見とが合併する。",
    //         "e. 焼死体の死因としては内因性疾患を除く全てが想定される。"
    //     ],
    //     answer: "c, d",
    //     commentary: "焼死とは、火災による高熱、一酸化炭素や青酸ガスなどの有毒ガス、酸素欠乏などの諸因子が複合的に作用して死に至ることをいう。焼死体とは火災によって焼けた死体のことであり、故に内因性疾患も含む。火災発生時にその人が生存していれば死体に焼死の生活反応が見られる。焼死したものには焼死の生活反応と熱損所見とが合併する。"
    // }
    //         ]
        // },
        {
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
            groupTag : "周産期まとめ機械翻訳",
            groupContents: [{
                detailInfo: 'chatGPT4oから生成&機械翻訳された問題集',
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
            groupTag : "産科疾患 2022本試験",
            groupContents: [
  {
    questionSentence: "Q1 誤っているものはどれか。一つ選べ。",
    choices: [
      "a) 卵胞数は胎児期が一番多い。",
      "b) 一次卵母細胞は第一減数分裂前期で止まるが、LHサージにより再開する。",
      "c) 一次精母細胞は第一減数分裂、第二減数分裂を経て4つの精子細胞になる。",
      "d) 精子の侵入により二次卵母細胞は第二減数分裂を再開する。",
      "e) 精子が侵入すると、卵子は透明体を硬化させて他の精子の侵入を防ぐ。これを先体反応という。"
    ],
    answer: "e"
  },
  {
    questionSentence: "Q2 性周期について正しいものはどれか。一つ選べ。",
    choices: [
      "a) 月経時に基底膜は剥脱する。",
      "b) 卵胞はプロゲステロンを主に分泌し、黄体はエストロゲンを主に分泌する。",
      "c) エストロゲンによって子宮内膜は脱落膜様変化が起こる。",
      "d) エストラジオールの上昇の後でLHの上昇が起こる。",
      "e) a～dはいずれも誤っている。"
    ],
    answer: "d"
  },
  {
    questionSentence: "Q3 三胚葉と分化する器官の組み合わせで正しいものはどれか。一つ選べ。",
    choices: [
      "a) 外胚葉 ― 心臓",
      "b) 外胚葉 ― 肺",
      "c) 中胚葉 ― 甲状腺",
      "d) 中胚葉 ― 子宮",
      "e) 内胚葉 ― 中枢神経"
    ],
    answer: "d"
  },
  {
    questionSentence: "Q4 胎盤から分泌されるホルモンとして、誤っているものはどれか。一つ選べ。",
    choices: [
      "a) hCG（ヒト絨毛性ゴナドトロピン）",
      "b) hPL（ヒト胎盤性ラクトーゲン）",
      "c) エストロゲン",
      "d) プロゲステロン",
      "e) プロラクチン"
    ],
    answer: "e"
  },
  {
    questionSentence: "Q5 羊水について誤っているものはどれか。一つ選べ。",
    choices: [
      "a) 胎児尿に由来する。",
      "b) 肺胞分泌物に由来する。",
      "c) 妊娠8か月にピークを迎える。",
      "d) 妊娠10か月には1000mlに達する。",
      "e) 羊水はアルカリ性である。"
    ],
    answer: "d"
  },
  {
    questionSentence: "Q6 超音波検査について正しいものはどれか。一つ選べ。",
    choices: [
      "a) 胎生10週で胎児心拍が分かるようになる。",
      "b) 妊娠週数の推定には児頭大横径が最も適している。",
      "c) NT肥厚があれば必ず染色体異常を伴う。",
      "d) 羊水量は羊水インデックスや羊水ポケットにより推定する。",
      "e) "
    ],
    answer: "d"
  },
  {
    questionSentence: "Q7 妊娠悪阻の治療において、輸液投与の際ウェルニッケ脳症の予防のために投与すべきビタミンはどれか。一つ選べ。",
    choices: [
      "a) ビタミンA",
      "b) ビタミンB1",
      "c) ビタミンC",
      "d) ビタミンD",
      "e) ビタミンK"
    ],
    answer: "b"
  },
  {
    questionSentence: "Q8 分娩の3要素として正しいものはどれか。一つ選べ。",
    choices: [
      "a) 適時破水",
      "b) 分娩体位",
      "c) 産道",
      "d) 周辺環境",
      "e) 分娩時間"
    ],
    answer: "c"
  },
  {
    questionSentence: "Q9 次の胎位の中で正常なものはどれか。一つ選べ。",
    choices: [
      "a) 頭位",
      "b) 骨盤位",
      "c) 横位",
      "d) 斜位",
      "e) 足位"
    ],
    answer: "a"
  },
  {
    questionSentence: "Q10 Bishopスコアに含まれないのはどれか。一つ選べ。",
    choices: [
      "a) 頸管展退度",
      "b) 頸管位置",
      "c) 頸管硬度",
      "d) 先進部の位置",
      "e) 子宮収縮"
    ],
    answer: "e"
  },
  {
    questionSentence: "Q11 分娩の経過について、正しいものはどれか。一つ選べ。",
    choices: [
      "a) 分娩の前駆症状に子宮底の上昇がある。",
      "b) 分娩の前駆症状に血性粘液性の膣分泌液がある。",
      "c) 分娩所要時間60時間は正常である。",
      "d) 分娩の経過は胎向に影響される。",
      "e) 分娩の経過は陣痛に左右されない。"
    ],
    answer: "b"
  },
  {
    questionSentence: "Q12 陣痛が有効であると考えられるものはどれか。一つ選べ。",
    choices: [
      "a) 内診所見の進行がある。",
      "b) 5分以内の周期的な子宮収縮がある。",
      "c) 子宮収縮のたびに疼痛がある。",
      "d) 陣痛発作が1分以上持続する。",
      "e) 血性粘液性帯下が出る。"
    ],
    answer: "b"
  },
  {
    questionSentence: "Q13 胎児の状態が良好であることを監視する適切な方法はどれか。二つ選べ。",
    choices: [
      "a) 血液検査",
      "b) MRI",
      "c) 腹部X線検査",
      "d) NST（ノンストレステスト）",
      "e) 超音波検査"
    ],
    answer: "d, e"
  },
  {
    questionSentence: "Q14 妊娠30週の女性の腹部超音波画像が図1に示されている。胎児心拍数の分娩チャートには不規則な子宮収縮が認められる。この女性に投与するのに不適切な薬剤はどれか。二つ選べ。",
    choices: [
      "a) インドメタシン",
      "b) リトドリン塩酸塩",
      "c) 硫酸マグネシウム",
      "d) オキシトシン",
      "e) ベタメタゾン"
    ],
    answer: "a, d"
  },
  {
    questionSentence: "Q15 図2に示す第1回旋異常について、名称と先進部の組み合わせで正しいものはどれか。一つ選べ。",
    choices: [
      "a) ①前頭位 ― 耳",
      "b) ②前頭位 ― 後頭部",
      "c) ②額位 ― 額",
      "d) ③顎位 ― 目",
      "e) ③首位 ― 鼻"
    ],
    answer: "c"
  },
  {
    questionSentence: "Q16 遷延分娩について正しいものはどれか。一つ選べ。",
    choices: [
      "a) 初産婦で15時間以上経過しても分娩に至らないもの。",
      "b) 経産婦で5時間以上経過しても分娩に至らないもの。",
      "c) 無痛分娩は分娩にかかる時間が延長する傾向にある。",
      "d) 胎児のストレスは気にしなくてよい。",
      "e) 母体の疲労は気にしなくてよい。"
    ],
    answer: "c"
  },
  {
    questionSentence: "Q17 38歳、3回経産婦。妊娠39週5日。3,960グラムの女児を出産した。分娩時間は36時間であった。胎盤娩出後より多量の出血を認め、子宮底は臍上2横指で、子宮の硬度は軟であった。もっとも疑わしい疾患はどれか。一つ選べ。",
    choices: [
      "a) 子宮頸管裂傷",
      "b) 会陰裂傷",
      "c) 子宮内反症",
      "d) 弛緩出血",
      "e) 子宮頸管無力症"
    ],
    answer: "d"
  },
  {
    questionSentence: "Q18 問題番号17の症例に対する対処として不適切なものはどれか。一つ選べ。",
    choices: [
      "a) バルーンの使用",
      "b) オキシトシン投与",
      "c) 十分な輸液",
      "d) 子宮収縮抑制剤の投与",
      "e) 子宮底マッサージ"
    ],
    answer: "d"
  },
  {
    questionSentence: "Q19 胎児機能不全を疑ったときに取るべき行動として不適切なものはどれか。一つ選べ。",
    choices: [
      "a) マンパワーの招集",
      "b) 急速遂娩の準備",
      "c) 新生児小児科に連絡",
      "d) NSTの継続",
      "e) 24時間後に再確認"
    ],
    answer: "e"
  },
  {
    questionSentence: "Q20 妊娠高血圧について正しいものはどれか。一つ選べ。",
    choices: [
      "a) 合併症の一つである子癇発作は初産婦に多い。",
      "b) 妊娠高血圧腎症は妊娠初期から発症しやすい。",
      "c) 加重型妊娠高血圧腎症の主症状は性器出血である。",
      "d) 妊娠高血圧腎症は、two step theoryによる胎盤機能不全が原因となる。",
      "e) 血小板は増加することが多い。"
    ],
    answer: "a"
  },
  {
    questionSentence: "Q21 分娩中や分娩後に大量の外出血をきたしにくい疾患はどれか。一つ選べ。",
    choices: [
      "a) 前置胎盤",
      "b) 子宮破裂",
      "c) 子宮内反症",
      "d) 切迫早産",
      "e) 弛緩出血"
    ],
    answer: "d"
  },
  {
    questionSentence: "Q22 28歳、経産婦。妊娠40週の女子を正常分娩。自然剥離の徴候がなかったため臍帯を引っ張り、胎盤を娩出した。直後より下腹部の激痛と多量の出血を認めた。双合診で子宮底を触知せず。もっとも考えられるのはどれか。一つ選べ。",
    choices: [
      "a) 常位胎盤早期剥離",
      "b) 弛緩出血",
      "c) 膣壁裂傷",
      "d) 羊水塞栓",
      "e) 子宮内反症"
    ],
    answer: "e"
  },
  {
    questionSentence: "Q23 羊水過多を起こしやすい疾患はどれか。二つ選べ。",
    choices: [
      "a) 過期妊娠",
      "b) 胎児二分脊椎",
      "c) 胎児食道閉鎖",
      "d) 胎盤機能不全",
      "e) 胎児Potter症候群"
    ],
    answer: "b, c"
  },
  {
    questionSentence: "Q24 染色体異常でもっとも頻度が高いものはどれか。一つ選べ。",
    choices: [
      "a) ダウン症候群（21トリソミー）",
      "b) 13トリソミー",
      "c) 18トリソミー",
      "d) ターナー症候群",
      "e) クラインフェルター症候群"
    ],
    answer: "a"
  },
  {
    questionSentence: "Q25 妊娠32週の前期破水症例について必要でない管理はどれか。一つ選べ。",
    choices: [
      "a) 胎児推定体重測定",
      "b) NST",
      "c) 胎児心エコー検査",
      "d) 母体の入院",
      "e) 頸管分泌物細菌培養"
    ],
    answer: "c"
  },
  {
    questionSentence: "Q26 図3の双胎妊娠について正しいものはどれか。二つ選べ。",
    choices: [
      "a) 臍帯相互巻絡をおこす。",
      "b) 双胎輸血間症候群の頻度が多い。",
      "c) 胎盤は2つである。",
      "d) 二絨毛膜双胎である。",
      "e) 一絨毛膜双胎である。"
    ],
    answer: "b, e"
  },
  {
    questionSentence: "Q27 TORCH症候群に含まれないものはどれか。一つ選べ。",
    choices: [
      "a) 風疹",
      "b) HTLV-1",
      "c) 梅毒",
      "d) サイトメガロウイルス",
      "e) トキソプラズマ"
    ],
    answer: "b"
  },
  {
    questionSentence: "Q28 正常産褥の過程について正しいものはどれか。一つ選べ。",
    choices: [
      "a) 分娩が終了し、母体生理的変化が非妊娠時の状態に戻るまで、約6ヶ月かかる。",
      "b) 産褥期の乳汁分泌は、新生児が吸啜することによって開始される。",
      "c) 初乳は成乳に比べて免疫物質が多い。",
      "d) 産褥性無月経は授乳婦と非授乳婦でその期間はほぼ同じである。",
      "e) 産褥2週間で子宮は非妊娠時の状態に復古する。"
    ],
    answer: "c"
  },
  {
    questionSentence: "Q29 薬物が胎児に与える影響として正しいものはどれか。一つ選べ。",
    choices: [
      "a) 妊娠3週末までの薬物曝露であれば、胎児は形態異常なく生まれてくる。",
      "b) 妊娠4～10週ころの胎児の発生はAll or noneの法則に基づく。",
      "c) 妊娠13週以降は過敏期であり、薬物曝露を特に避けなければならない。",
      "d) ",
      "e) a～dはいずれも誤っている。"
    ],
    answer: "a"
  },
  {
    questionSentence: "Q30 習慣性流産とは、一般に何回以上の連続した自然流産を指すか。一つ選べ。",
    choices: [
      "a) 1回以上",
      "b) 2回以上",
      "c) 3回以上",
      "d) 4回以上",
      "e) 5回以上"
    ],
    answer: "c"
  },
  {
    questionSentence: "Q31 妊娠後期の母体にみられる変化として当てはまらないものはどれか。一つ選べ。",
    choices: [
      "a) 尿管の拡張",
      "b) 乳房の腫大",
      "c) 皮膚の色素沈着",
      "d) 心臓の肥大",
      "e) 基礎代謝の低下"
    ],
    answer: "e"
  },
  {
    questionSentence: "Q32 うっ滞性乳腺炎の治療について誤っているものはどれか。一つ選べ。",
    choices: [
      "a) 乳房マッサージ",
      "b) 授乳継続",
      "c) 漢方薬の内服",
      "d) 排膿・切開",
      "e) クーリング"
    ],
    answer: "d"
  },
  {
    questionSentence: "Q33 わが国の妊産婦死亡率はどれか。一つ選べ。",
    choices: [
      "a) 100人に3.3人",
      "b) 1,000人に3.3人",
      "c) 10,000人に3.3人",
      "d) 100,000人に3.3人",
      "e) 1,000,000人に3.3人"
    ],
    answer: "d"
  },
  {
    questionSentence: "Q34 母体保護法およびリプロダクティブ・ライツについて誤っているものはどれか。二つ選べ。",
    choices: [
      "a) 母体保護法では避妊および人工妊娠中絶に関する事項を規定している。",
      "b) リプロダクティブ・ライツとは、妊娠・出産・中絶など「生殖」に関するすべてのことについて、十分な情報を得られ、自分で決められる権利のことである。",
      "c) アメリカでは、1973年に人工妊娠中絶の規制を違憲とする最高裁判決が出て以降中絶が合憲とされてきたが、最近になって違憲判決が覆され、政治論争の対象になっている。",
      "d) 経口中絶薬にはWHOの承認を得たものがあり、日本を含む80ヶ国以上で使用されている。",
      "e) 胎児に致死的疾患がある場合、母体保護法に基づく中絶が可能である。"
    ],
    answer: "d, e"
  },
  {
    questionSentence: "Q35 次のうち、Apgarスコアの計算に用いられないものはどれか。一つ選べ。",
    choices: [
      "a) 皮膚色",
      "b) 呼吸様運動",
      "c) 分娩時間",
      "d) 心拍数",
      "e) 筋緊張"
    ],
    answer: "c"
  },
  {
    questionSentence: "Q36 新生児蘇生法における初期蘇生として誤っているものはどれか。一つ選べ。",
    choices: [
      "a) 酸素投与",
      "b) 保温",
      "c) 気道開通",
      "d) 体位保持",
      "e) 皮膚乾燥と刺激"
    ],
    answer: "a"
  },
  {
    questionSentence: "Q37 呼吸窮迫症候群を確かめるためのマイクロバブルテストで使用する児の試料はどれか。一つ選べ。",
    choices: [
      "a) 髄液",
      "b) 血液",
      "c) 胃液",
      "d) 尿",
      "e) 便"
    ],
    answer: "c"
  },
  {
    questionSentence: "Q38 重症新生児仮死の診断・検査について、当てはまらないものはどれか。一つ選べ。",
    choices: [
      "a) アプガースコア低値",
      "b) 代謝性アルカローシス",
      "c) CK, Lactate上昇",
      "d) AST, ALT上昇",
      "e) PT, APTT延長"
    ],
    answer: "b"
  },
  {
    questionSentence: "Q39 新生児一過性多呼吸について誤っているものはどれか。一つ選べ。",
    choices: [
      "a) 鼻翼呼吸",
      "b) 吸気性喘鳴",
      "c) 陥没呼吸",
      "d) 呻吟",
      "e) チアノーゼ"
    ],
    answer: "b"
  },
  {
    questionSentence: "Q40 新生児の疾患について、正しいものはどれか。一つ選べ。",
    choices: [
      "a) 陥没呼吸は肺サーファクタントが足りない時に示す症状である。",
      "b) 体重1000g未満で出生した児を極低出生体重児という。",
      "c) 脳室内出血は成熟児に発症しやすい。",
      "d) 壊死性腸炎は腸の血流増加が関与している。",
      "e) すべての新生児は出生後速やかに沐浴させる必要がある。"
    ],
    answer: "a"
  }
]
        },{
            groupTag : "産科疾患2021本試験",
            groupContents: [{
                detailInfo: 'chatGPT4oによる機械生成',
                      questionSentence: "Q1 分娩予定日を決定するのに最も有用な超音波所見はどれか。一つ選べ。",
                      choices: [
                        "a) 妊娠 5 週時の胎嚢の大きさ",
                        "b) 妊娠 9 週時の頭殿長",
                        "c) 妊娠 14 週時の児心拍数",
                        "d) 妊娠 16 週時の児頭大横径",
                        "e) 妊娠 28 週時の胎児推定体重"
                      ],
                      answerImg:[peri2021q1],
                      answer:"b",
                      commentary:"妊娠8-10週前後の超音波検査での胎児の頭殿長（CRL）を測定し、これを基に妊娠週数を推定することが一般的です。"
                    },
                    {
                      questionSentence: "Q2 図 1 で計測しているのはどれか。一つ選べ。",
                      choices: [
                        "a) GS",
                        "b) CRL",
                        "c) BPD",
                        "d) AC",
                        "e) FL"
                      ],
                      answerImg:[peri2021q2],
                      answer:"解答不可能",
                    },
                    {
                      questionSentence: "Q3 妊婦に投与できるものはどれか。一つ選べ。",
                      choices: [
                        "a) アミノグリコシド系抗菌薬",
                        "b) テトラサイクリン系抗菌薬",
                        "c) マクロライド系抗菌薬",
                        "d) ニューキノロン系抗菌薬",
                        "e) ワルファリン"
                      ],
                      answerImg:[peri2021q3_1,peri2021q3_2,peri2021q3_3],
                      answer:"c",
                    },
                    {
                      questionSentence: "Q4 受精から着床までに要する日数として正しいのはどれか。一つ選べ。",
                      choices: [
                        "a) 1 日",
                        "b) 3 日",
                        "c) 7 日",
                        "d) 14 日",
                        "e) 28 日"
                      ],
                      answerImg:[peri2021q4],
                      answer:"c",
                      commentary:"着床には6-7日かかるとされる。"
                    },
                    {
                      questionSentence: "Q5 膣内に射精された精子の寿命として正しいものはどれか。一つ選べ。",
                      choices: [
                        "a) 1 時間",
                        "b) 6 時間",
                        "c) 12 時間",
                        "d) 24 時間",
                        "e) 72 時間"
                      ],
                      answerImg:[peri2021q5],
                      answer:"e",
                      commentary:"膣内に射精された精子は最大72時間生存する。卵子の寿命は24時間程度である。"
                    },
                    {
                      questionSentence: "Q6 正常妊娠後期に起こる変化として正しいものはどれか。一つ選べ。",
                      choices: [
                        "a) 血中クレアチニン濃度の上昇",
                        "b) 血中へモグロビン濃度の上昇",
                        "c) 中性脂肪の低下",
                        "d) 白血球数の減少",
                        "e) 循環血液量の増加"
                      ],
                      answerImg:[peri2021q6],
                      answer:"e",
                      commentary:"妊娠後期には赤血球数や白血球数が増加するが、それ以上に循環血液量が増加するため、ヘモグロビン濃度は低下する。"
                    },
                    {
                      questionSentence: "Q7 妊娠全期間の体重増加で平均的なものはどれか。一つ選べ。",
                      choices: [
                        "a) 3kg",
                        "b) 5kg",
                        "c) 10kg",
                        "d) 20kg",
                        "e) 30kg"
                      ],
                      answer:"c",
                      commentary:"妊娠全期間の体重増加は10-12kgが平均的である。"
                    },
                    {
                      questionSentence: "Q8 胎児循環の中で最も血中酸素分圧が高いものはどれか。一つ選べ。",
                      choices: [
                        "a) 臍帯静脈",
                        "b) 下行大動脈",
                        "c) 上行大動脈",
                        "d) 左心室",
                        "e) 肺静脈"
                      ],
                      answerImg:[peri2021q8],
                      answer:"a",
                      commentary:"胎児循環では、臍帯静脈から酸素が多く含まれた血液が胎児に供給される。"
                    },
                    {
                      questionSentence: "Q9 羊水に関して誤っているものはどれか。一つ選べ。",
                      choices: [
                        "a) 胎児尿に由来する",
                        "b) 肺胞分泌物に由来する",
                        "c) 妊娠 8 ヶ月でピークを迎える",
                        "d) 妊娠 10 ヶ月で 1000mL に達する",
                        "e) "
                      ],
                      answerImg:[peri2021q9],
                      answer:"c",
                      commentary:"羊水量は妊娠 8 ヶ月でピークを迎える。以後は減少する。"
                    },
                    {
                      questionSentence: "Q10 正しい組み合わせはどれか。一つ選べ。",
                      choices: [
                        "a) 外胚葉 - 心臓",
                        "b) 外胚葉 - 肺",
                        "c) 中胚葉 - 甲状腺",
                        "d) 中胚葉 - 子宮",
                        "e) 内胚葉 - 中枢神経"
                      ],
                      answerImg:[peri2021q10],
                      answer:"d",
                      commentary:"子宮の由来はミュラー管であり、中胚葉に由来する。"
                    },
                    {
                      questionSentence: "Q11 胎盤から放出されないホルモンはどれか。一つ選べ。",
                      choices: [
                        "a) hCG",
                        "b) hPL",
                        "c) プロゲステロン",
                        "d) エストロゲン",
                        "e) プロラクチン"
                      ],
                      answerImg:[peri2021q11],
                      answer:"e",
                      commentary:"プロラクチンは脳下垂体から分泌される。"
                    },
                    {
                      questionSentence: "Q12 分娩の三要素に含まれないものはどれか。一つ選べ。",
                      choices: [
                        "a) 臍帯",
                        "b) 陣痛",
                        "c) 軟産道",
                        "d) 羊水",
                        "e) 乳房"
                      ],
                      answer:"e",
                      commentary:"分娩の三要素は娩出力、娩出物、産道である。"
                    },
                    {
                      questionSentence: "Q13 次の胎位の中で正常なものはどれか。一つ選べ。",
                      choices: [
                        "a) 頭位",
                        "b) 骨盤位",
                        "c) 横位",
                        "d) 斜位",
                        "e) 足位"
                      ],
                      answerImg:[peri2021q13],
                      answer:"a",
                      commentary:"胎児の頭が子宮口に向いている状態を頭位という。"
                    },
                    {
                      questionSentence: "Q14 次の胎勢の中で正常なものはどれか。一つ選べ。",
                      choices: [
                        "a) 前頭位",
                        "b) 頭頂位",
                        "c) 後頭位",
                        "d) 額位",
                        "e) 顔位"
                      ],
                      answerImg:[peri2021q14],
                      answer:"c",
                    },
                    {
                      questionSentence: "Q15 妊婦の診断において、胎児の長軸と子宮の長軸の相互関係を示したのはどれか。一つ選べ。",
                      choices: [
                        "a) 胎向",
                        "b) 回旋",
                        "c) 胎位",
                        "d) 胎勢",
                        "e) 分類"
                      ],
                      answerImg:[peri2021q15],
                      answer:"c",
                    },
                    {
                      questionSentence: "Q16 胎児の背中が左側かつ前方を向く場合はどれか。一つ選べ。",
                      choices: [
                        "a) 第 1 胎向一第 1 分類",
                        "b) 第 1 胎向一第 2 分類",
                        "c) 第 1 胎向一第 3 分類",
                        "d) 第 2 胎向一第 1 分類",
                        "e) 第 2 胎向一第 2 分類"
                      ],
                      answerImg:[peri2021q16],
                      answer:"a",
                    },
                    {
                      questionSentence: "Q17 妊娠 10 ヶ月での胎盤の重さはどれか。一つ選べ。",
                      choices: [
                        "a) 500g",
                        "b) 1000g",
                        "c) 1500g",
                        "d) 2000g",
                        "e) 3000g"
                      ],
                      answerImg:[peri2021q17],
                      answer:"a",
                    },
                    {
                      questionSentence: "Q18 妊娠後期の母体にみられる変化として当てはまらないものはどれか。一つ選べ。",
                      choices: [
                        "a) 尿管の拡張",
                        "b) 乳房の腫大",
                        "c) 皮膚の色素沈着",
                        "d) 心臓の肥大",
                        "e) 基礎代謝の低下"
                      ],
                      answerImg:[peri2021q18_1,peri2021q18_2],
                      answer:"e",
                      commentary:"妊娠後期には基礎代謝が増加する。"
                    },
                    {
                      questionSentence: "Q19 BPS に含まれないのはどれか。一つ選べ。",
                      choices: [
                        "a) NST",
                        "b) 呼吸様運動",
                        "c) 羊水量",
                        "d) 胎動",
                        "e) 臍帯動脈血流"
                      ],
                      answerImg:[peri2021q19],
                      answer:"e ",
                    },
                    {
                      questionSentence: "Q20 胎動心電図変動一過性徐脈の原因として正しいものを一つ選べ。",
                      choices: [
                        "a) 児頭圧迫",
                        "b) 胎児感染",
                        "c) 臍帯圧迫",
                        "d) 胎児貧血",
                        "e) 母体低血圧"
                      ],
                      answerImg:[peri2021q20],
                      answer:"c",
                      commentary:"変動一過性徐脈の他に、児頭圧迫による早発一過性徐脈、胎盤からの循環血液量減少による遅発一過性徐脈がある。"
                    },
                    {
                      questionSentence: "Q22 正常分娩において、児頭が固定したときの児頭先進部の位置はどれか。一つ選べ。",
                      choices: [
                        "a) Station -2",
                        "b) Station -1",
                        "c) Station 0",
                        "d) Station +1",
                        "e) Station +2"
                      ],
                      answerImg:[peri2021q22],
                      answer:"c",
                    },
                    {
                      questionSentence: "Q23 正常分娩について正しいものはどれか。一つ選べ。",
                      choices: [
                        "a) 分娩第 1 期は産徴がみられてから子宮口が 3cm 開大するまでである",
                        "b) 分娩第 1 期では陣痛は 60 分間隔でみられる",
                        "c) 分娩第 1 期では児頭は排臨である",
                        "d) 分娩第 2 期では矢状縫合は骨盤横径に一致する",
                        "e) 分娩第 3 期では胎盤が娩出される"
                      ],
                      answerImg:[peri2021q23],
                      answer:"e",
                      commentary:"分娩第 1 期は産徴がみられてから子宮口が 10cm 開大するまでであり、陣痛は１時間に6回以上の頻度でみられる。矢状縫合が骨盤横径に一致するのは分娩第 1 期のことである。"
                    },
                    {
                      questionSentence: "Q24 Bishop スコアに含まれないものはどれか。一つ選べ。",
                      choices: [
                        "a) 子宮頸管の進退度",
                        "b) 子宮口の位置",
                        "c) 子宮頸管の硬度",
                        "d) 児頭の高さ",
                        "e) 子宮収縮の頻度"
                      ],
                      answerImg:[peri2021q24],
                      answer:"e",
                    },
                    {
                      questionSentence: "Q25 間違いはどれか。一つ選べ。",
                      choices: [
                        "a) 先天性風疹症候群の症状は心疾患、難聴、緑内障の 3 つである。",
                        "b) 先天性風疹症候群は妊娠早期であるほど発症の可能性が高くなる(?)",
                        "c) サイトメガロウイルス感染症では衛生教育はしなくてよい (文もっと長い)。",
                        "d) パルボ b19 ウイルスの感染は貧血、 胎児水腫の原因となりうる。",
                        "e) ヘルペスウイルス感染症では産道感染の可能性を考えて帝王切開することがある。"
                      ],
                      answerImg:[peri2021q25],
                      answer:"c",
                      commentary:"先天性風疹症候群は緑内障も白内障も多い。"
                    },
                    {
                      questionSentence: "Q26 妊娠・分娩時に外出血をきたしにくいのはどれか。一つ選べ。",
                      choices: [
                        "a) 前置胎盤",
                        "b) 前期破水",
                        "c) 子宮内反症",
                        "d) 子宮顎管裂傷",
                        "e) 弛緩出血"
                      ],
                      answerImg:[peri2021q26],
                      answer:"a",
                    },
                    {
                      questionSentence: "Q27 妊娠 28 週 3 日、 性器出血で受診。 経膣超音波検査の所見を図 2 に示す。 診断はどれか。一つ選べ。",
                      choices: [
                        "a) 常位胎盤剥離",
                        "b) 異所性妊娠",
                        "c) 前置胎盤",
                        "d) 切迫早産",
                        "e) 羊水過多症"
                      ],
                      answer:"aかc",
                      commentary:"図２が再現されていないため、診断できない。肥厚した胎盤が見られ痛みを伴う場合はaで、胎盤が子宮口に近い場合はcである。"
                    },
                    {
                      questionSentence: "Q28 羊水過多を起こすものはどれか。一つ選べ。",
                      choices: [
                        "a) 過期妊娠",
                        "b) 前期破水",
                        "c) 胎児食道閉鎖",
                        "d) 胎盤機能不全",
                        "e) 胎児 Potter 症候群"
                      ],
                      answerImg:[peri2021q28],
                      answer:"c",
                      commentary:"c以外の選択肢は羊水過少を引き起こす要因である。"
                    },
                    {
                      questionSentence: "Q29 図 3 は妊娠 3 週 1 日の妊婦の経膣超音波所見である。胎児心拍陣痛図にて不規則な子宮収縮を認める。この妊婦に対する治療として不適切なものはどれか。1 つ選べ。",
                      questionImg:[peri2021qS29],
                      choices: [
                        "a) 安静",
                        "b) オキシトシン投与",
                        "c) 塩酸リトドリン投与",
                        "d) 硫酸マグネシウム投与",
                        "e) ベタメタゾン投与"
                      ],
                      answerImg:[peri2021q29],
                      answer:"b",
                      commentary:"ベタメタゾンはステロイドであり、胎児の肺の成熟を促す。"
                    },
                    {
                      questionSentence: "Q30 妊娠 32 週目で前期破水が見られた。 この状況で行う処置として不適切なものを一つ選べ。",
                      choices: [
                        "a) 抗生剤投与",
                        "b) 頸管細菌培養",
                        "c) 帝王切開",
                        "d) ",
                        "e) "
                      ],
                      answerImg:[peri2021q30],
                      answer:"b",
                      commentary:"32週以降になると基本的に帝王切開の適応となる。"
                    },
                    {
                      questionSentence: "Q31 図 4 の双胎妊娠について正しいものはどれか。一つ選べ。",
                      questionImg:[peri2021qS31],
                      choices: [
                        "a) 臍帯相互巻絡が起こりやすい",
                        "b) 双胎間輸血症候群が起こりうる",
                        "c) 性別が異なる。",
                        "d) 胎盤が 2 つある。",
                        "e) 二絨毛膜二羊膜双胎である"
                      ],
                      answerImg:[peri2021q31_1,peri2021q31_2],
                      answer:"b",
                      commentary:"一絨毛膜二羊膜双胎の場合、胎盤が一つである。"
                    },
                    {
                      questionSentence: "Q32 妊娠高血圧について正しいものはどれか。一つ選べ。",
                      choices: [
                        "a) 合併症の一つである子癇は初産婦に多い",
                        "b) 妊娠高血圧腎症は妊娠初期から発症しやすい。",
                        "c) 加速型高血圧腎症の主症状は下腿浮腫である",
                        "d) 巨大児になりやすい。",
                        "e) 血小板は増加することが多い"
                      ],
                      answerImg:[peri2021q32],
                      answer:"a",
                      commentary:"妊娠高血圧症候群は20週以降に発症する。 高血圧に合併するHELLP症候群は血小板減少(LP)を伴う。"
                    },
                    {
                      questionSentence: "Q33 新生児の出生立ち会いで蘇生するときに必要なものはどれか。一つ選べ。",
                      choices: [
                        "a) 冷やしたリネン",
                        "b) 鼻口腔吸引セット",
                        "c) 酸素空気ブレンダー",
                        "d) 聴診器",
                        "e) パルスオキシメーター"
                      ],
                      answerImg:[peri2021q33],
                      answer:"b",
                    },
                    {
                      questionSentence: "Q34 呼吸窮迫症候群を確かめるためのマイクロバブルテストで使用する児の試料はどれか。 一つ選べ。",
                      choices: [
                        "a) 髄液",
                        "b) 血液",
                        "c) 胃液",
                        "d) 尿",
                        "e) 便"
                      ],
                      answerImg:[peri2021q34],
                      answer:"c",
                      commentary:"胃液に含まれる肺サーファクタントを検査する。"
                    },
                    {
                      questionSentence: "Q35 重症新生児仮死に併発しにくいものはどれか。 一つ選べ。",
                      choices: [
                        "a) 急性腎不全",
                        "b) 低酸素性虚血性脳症",
                        "c) 急性胃粘膜病変",
                        "d) 黄疸",
                        "e) 遷延性肺高血圧症"
                      ],
                      answerImg:[peri2021q35],
                      answer:"d",
                      commentary:"肝機能障害は含まれない←酸素濃度低下に強い臓器"
                    },
                    {
                      questionSentence: "Q36 新生児蘇生法における初期蘇生として誤っているものはどれか。一つ選べ。",
                      choices: [
                        "a) 心臓マッサージ",
                        "b) 保湿",
                        "c) 気道開通",
                        "d) 体位保持",
                        "e) 皮膚乾燥と刺激"
                      ],
                      answerImg:[peri2021q36],
                      answer:"e",
                      commentary:"保温なら正解"
                    },
                    {
                      questionSentence: "Q37 新生児一過性多呼吸について誤っているものはどれか。一つ選べ。",
                      choices: [
                        "a) 鼻翼呼吸",
                        "b) 吸気性喘鳴",
                        "c) 陥没呼吸",
                        "d) 呻吟",
                        "e) チアノーゼ"
                      ],
                      answerImg:[peri2021q37],
                      answer:"b",

                    },
                    {
                      questionSentence: "Q38 新生児の不感蒸泄を増す因子として適切でないものはどれか。一つ選べ。",
                      choices: [
                        "a) 在胎日数が少ない",
                        "b) 体重が小さい",
                        "c) 出生後日数が短い",
                        "d) 環境温度が高い",
                        "e) 環境湿度が高い"
                      ],
                      answerImg:[peri2021q38],
                      answer:"d",
                    },
                    {
                      questionSentence: "Q39 児のビタミン K(VK)欠乏症について誤っているのはどれか。一つ選べ。",
                      choices: [
                        "a) 乳児期 VK 欠乏症では、頭蓋内出血の頻度が高い",
                        "b) VK 欠乏症を疑えば、 血液凝固検査で確認後、治療を開始する",
                        "c) PIVKA (protein induced by Vitamin K absence or antagonist)-Ⅱが上昇する",
                        "d) NMTT(N-メチルチオテトラゾール)基を有する抗生剤はリスク因子である",
                        "e) 予防法として、 週一回、出生後 3 ヶ月まで VK シロップを投与する方法がある"
                      ],
                      answerImg:[peri2021q39_1,peri2021q39_2],
                      answer:"c?",
                      commentary:"PIVKA-Ⅱについてのみ記載がないが、一般的にはVK欠乏症の診断に用いられるため、全て正しいとも考えられる。"
                    },
                    {
                      questionSentence: "Q40 母体感染症とその対応について正しいものはどれか。一つ選べ。",
                      choices: [
                        "a) トキソプラズマー胎児輸血",
                        "b) 梅毒一母体へのテトラサイクリン投与",
                        "c) C 型肝炎ウイルスー児へのワクチン投与",
                        "d) HIV-経膣分娩",
                        "e) HTLV-1-児への直接授乳を避ける"
                      ],
                      answerImg:[peri2021q40],
                      answer:"e",
                    }
                  ]                   
        },{
          groupTag : "産科2021本 機械英訳",
          groupContents: [
            {
              questionSentence: "Q1 Which ultrasound finding is most useful for determining the expected date of delivery? Choose one.",
              choices: [
                "a) Size of the gestational sac at 5 weeks of pregnancy",
                "b) Crown-rump length at  9 weeks of pregnancy",
                "c) Fetal heart rate at 14 weeks of pregnancy",
                "d) Biparietal diameter at 16 weeks of pregnancy",
                "e) Estimated fetal weight at 28 weeks of pregnancy"
              ],
              answerImg: [peri2021q1],
              answer: "b",
              commentary: "【問題文原文】分娩予定日を決定するのに最も有用な超音波所見はどれか。一つ選べ。 【選択肢原文】a) 妊娠 5 週時の胎嚢の大きさ, b) 妊娠 9 週時の頭殿長, c) 妊娠 14 週時の児心拍数, d) 妊娠 16 週時の児頭大横径, e) 妊娠 28 週時の胎児推定体重"
            },
            {
              questionSentence: "Q2 Which is being measured in Figure 1? Choose one.",
              choices: [
                "a) GS",
                "b) CRL",
                "c) BPD",
                "d) AC",
                "e) FL"
              ],
              answerImg: [peri2021q2],
              answer: "Cannot be determined",
              commentary: "【問題文原文】図 1 で計測しているのはどれか。一つ選べ。 【選択肢原文】a) GS, b) CRL, c) BPD, d) AC, e) FL"
            },
            {
              questionSentence: "Q3 Which can be administered to a pregnant woman? Choose one.",
              choices: [
                "a) Aminoglycoside antibiotics",
                "b) Tetracycline antibiotics",
                "c) Macrolide antibiotics",
                "d) New quinolone antibiotics",
                "e) Warfarin"
              ],
              answerImg: [peri2021q3_1, peri2021q3_2, peri2021q3_3],
              answer: "c",
              commentary: "【問題文原文】妊婦に投与できるものはどれか。一つ選べ。 【選択肢原文】a) アミノグリコシド系抗菌薬, b) テトラサイクリン系抗菌薬, c) マクロライド系抗菌薬, d) ニューキノロン系抗菌薬, e) ワルファリン"
            },
            {
              questionSentence: "Q4 Which is the correct number of days from fertilization to implantation? Choose one.",
              choices: [
                "a) 1 day",
                "b) 3 days",
                "c) 7 days",
                "d) 14 days",
                "e) 28 days"
              ],
              answerImg: [peri2021q4],
              answer: "c",
              commentary: "【問題文原文】受精から着床までに要する日数として正しいのはどれか。一つ選べ。 【選択肢原文】a) 1 日, b) 3 日, c) 7 日, d) 14 日, e) 28 日"
            },
            {
              questionSentence: "Q5 What is the correct lifespan of sperm ejaculated into the vagina? Choose one.",
              choices: [
                "a) 1 hour",
                "b) 6 hours",
                "c) 12 hours",
                "d) 24 hours",
                "e) 72 hours"
              ],
              answerImg: [peri2021q5],
              answer: "e",
              commentary: "【問題文原文】膣内に射精された精子の寿命として正しいものはどれか。一つ選べ。 【選択肢原文】a) 1 時間, b) 6 時間, c) 12 時間, d) 24 時間, e) 72 時間"
            },
            {
              questionSentence: "Q6 Which of the following changes occurs in the later stages of a normal pregnancy? Choose one.",
              choices: [
                "a) Increase in blood creatinine levels",
                "b) Increase in blood hemoglobin levels",
                "c) Decrease in triglycerides",
                "d) Decrease in white blood cell count",
                "e) Increase in circulating blood volume"
              ],
              answerImg: [peri2021q6],
              answer: "e",
              commentary: "【問題文原文】正常妊娠後期に起こる変化として正しいものはどれか。一つ選べ。 【選択肢原文】a) 血中クレアチニン濃度の上昇, b) 血中ヘモグロビン濃度の上昇, c) 中性脂肪の低下, d) 白血球数の減少, e) 循環血液量の増加"
            },
            {
              questionSentence: "Q7 What is the average weight gain throughout pregnancy? Choose one.",
              choices: [
                "a) 3kg",
                "b) 5kg",
                "c) 10kg",
                "d) 20kg",
                "e) 30kg"
              ],
              answer: "c",
              commentary: "【問題文原文】妊娠全期間の体重増加で平均的なものはどれか。一つ選べ。 【選択肢原文】a) 3kg, b) 5kg, c) 10kg, d) 20kg, e) 30kg"
            },
            {
              questionSentence: "Q8 Which of the following has the highest blood oxygen partial pressure in fetal circulation? Choose one.",
              choices: [
                "a) Umbilical vein",
                "b) Descending aorta",
                "c) Ascending aorta",
                "d) Left ventricle",
                "e) Pulmonary vein"
              ],
              answerImg: [peri2021q8],
              answer: "a",
              commentary: "【問題文原文】胎児循環の中で最も血中酸素分圧が高いものはどれか。一つ選べ。 【選択肢原文】a) 臍帯静脈, b) 下行大動脈, c) 上行大動脈, d) 左心室, e) 肺静脈"
            },
            {
              questionSentence: "Q9 Which of the following statements about amniotic fluid is incorrect? Choose one.",
              choices: [
                "a) It originates from fetal urine",
                "b) It originates from alveolar secretions",
                "c) It peaks at 8 months of pregnancy",
                "d) It reaches 1000 mL at 10 months of pregnancy",
                "e) "
              ],
              answerImg: [peri2021q9],
              answer: "c",
              commentary: "【問題文原文】羊水に関して誤っているものはどれか。一つ選べ。 【選択肢原文】a) 胎児尿に由来する, b) 肺胞分泌物に由来する, c) 妊娠 8 ヶ月でピークを迎える, d) 妊娠 10 ヶ月で 1000mL に達する, e) "
            },
            {
              questionSentence: "Q10 Which is the correct combination? Choose one.",
              choices: [
                "a) Ectoderm - heart",
                "b) Ectoderm - lungs",
                "c) Mesoderm - thyroid",
                "d) Mesoderm - uterus",
                "e) Endoderm - central nervous system"
              ],
              answerImg: [peri2021q10],
              answer: "d",
              commentary: "【問題文原文】正しい組み合わせはどれか。一つ選べ。 【選択肢原文】a) 外胚葉 - 心臓, b) 外胚葉 - 肺, c) 中胚葉 - 甲状腺, d) 中胚葉 - 子宮, e) 内胚葉 - 中枢神経"
            },
            {
              questionSentence: "Q11 Which hormone is not released from the placenta? Choose one.",
              choices: [
                "a) hCG",
                "b) hPL",
                "c) Progesterone",
                "d) Estrogen",
                "e) Prolactin"
              ],
              answerImg: [peri2021q11],
              answer: "e",
              commentary: "【問題文原文】胎盤から放出されないホルモンはどれか。一つ選べ。 【選択肢原文】a) hCG, b) hPL, c) プロゲステロン, d) エストロゲン, e) プロラクチン"
            },
            {
              questionSentence: "Q12 Which of the following is not one of the three elements of childbirth? Choose one.",
              choices: [
                "a) Umbilical cord",
                "b) Labor pain",
                "c) Soft birth canal",
                "d) Amniotic fluid",
                "e) Breast"
              ],
              answer: "e",
              commentary: "【問題文原文】分娩の三要素に含まれないものはどれか。一つ選べ。 【選択肢原文】a) 臍帯, b) 陣痛, c) 軟産道, d) 羊水, e) 乳房"
            },
            {
              questionSentence: "Q13 Which of the following fetal positions is normal? Choose one.",
              choices: [
                "a) Cephalic position",
                "b) Breech position",
                "c) Transverse position",
                "d) Oblique position",
                "e) Footling position"
              ],
              answerImg: [peri2021q13],
              answer: "a",
              commentary: "【問題文原文】次の胎位の中で正常なものはどれか。一つ選べ。 【選択肢原文】a) 頭位, b) 骨盤位, c) 横位, d) 斜位, e) 足位"
            },
            {
              questionSentence: "Q14 Which of the following fetal attitudes is normal? Choose one.",
              choices: [
                "a) Frontal position",
                "b) Parietal position",
                "c) Occipital position",
                "d) Forehead position",
                "e) Facial position"
              ],
              answerImg: [peri2021q14],
              answer: "c",
              commentary: "【問題文原文】次の胎勢の中で正常なものはどれか。一つ選べ。 【選択肢原文】a) 前頭位, b) 頭頂位, c) 後頭位, d) 額位, e) 顔位"
            },
            {
              questionSentence: "Q15 In the diagnosis of pregnancy, which term indicates the relationship between the long axis of the fetus and the long axis of the uterus? Choose one.",
              choices: [
                "a) Fetal lie",
                "b) Rotation",
                "c) Presentation",
                "d) Attitude",
                "e) Classification"
              ],
              answerImg: [peri2021q15],
              answer: "c",
              commentary: "【問題文原文】妊婦の診断において、胎児の長軸と子宮の長軸の相互関係を示したのはどれか。一つ選べ。 【選択肢原文】a) 胎向, b) 回旋, c) 胎位, d) 胎勢, e) 分類"
            },
            {
              questionSentence: "Q16 If the fetal back is on the left side and facing anteriorly, which one is it? Choose one.",
              choices: [
                "a) First fetal lie - first classification",
                "b) First fetal lie - second classification",
                "c) First fetal lie - third classification",
                "d) Second fetal lie - first classification",
                "e) Second fetal lie - second classification"
              ],
              answerImg: [peri2021q16],
              answer: "a",
              commentary: "【問題文原文】胎児の背中が左側かつ前方を向く場合はどれか。一つ選べ。 【選択肢原文】a) 第 1 胎向一第 1 分類, b) 第 1 胎向一第 2 分類, c) 第 1 胎向一第 3 分類, d) 第 2 胎向一第 1 分類, e) 第 2 胎向一第 2 分類"
            },
            {
              questionSentence: "Q17 What is the weight of the placenta at 10 months of pregnancy? Choose one.",
              choices: [
                "a) 500g",
                "b) 1000g",
                "c) 1500g",
                "d) 2000g",
                "e) 3000g"
              ],
              answerImg: [peri2021q17],
              answer: "a",
              commentary: "【問題文原文】妊娠 10 ヶ月での胎盤の重さはどれか。一つ選べ。 【選択肢原文】a) 500g, b) 1000g, c) 1500g, d) 2000g, e) 3000g"
            },
            {
              questionSentence: "Q18 Which of the following is not a change seen in the mother in the later stages of pregnancy? Choose one.",
              choices: [
                "a) Dilatation of the ureters",
                "b) Breast enlargement",
                "c) Skin pigmentation",
                "d) Cardiac hypertrophy",
                "e) Decrease in basal metabolic rate"
              ],
              answerImg: [peri2021q18_1, peri2021q18_2],
              answer: "e",
              commentary: "【問題文原文】妊娠後期の母体にみられる変化として当てはまらないものはどれか。一つ選べ。 【選択肢原文】a) 尿管の拡張, b) 乳房の腫大, c) 皮膚の色素沈着, d) 心臓の肥大, e) 基礎代謝の低下"
            },
            {
              questionSentence: "Q19 Which is not included in the BPS? Choose one.",
              choices: [
                "a) NST",
                "b) Fetal breathing movements",
                "c) Amniotic fluid volume",
                "d) Fetal movements",
                "e) Umbilical artery blood flow"
              ],
              answerImg: [peri2021q19],
              answer: "e",
              commentary: "【問題文原文】BPS に含まれないのはどれか。一つ選べ。 【選択肢原文】a) NST, b) 呼吸様運動, c) 羊水量, d) 胎動, e) 臍帯動脈血流"
            },
            {
              questionSentence: "Q20 What is the correct cause of transient decelerations in fetal heart rate variability? Choose one.",
              choices: [
                "a) Fetal head compression",
                "b) Fetal infection",
                "c) Umbilical cord compression",
                "d) Fetal anemia",
                "e) Maternal hypotension"
              ],
              answerImg: [peri2021q20],
              answer: "c",
              commentary: "【問題文原文】胎動心電図変動一過性徐脈の原因として正しいものを一つ選べ。 【選択肢原文】a) 児頭圧迫, b) 胎児感染, c) 臍帯圧迫, d) 胎児貧血, e) 母体低血圧"
            },
            {
              questionSentence: "Q22 In normal delivery, what is the position of the fetal head when it is fixed? Choose one.",
              choices: [
                "a) Station -2",
                "b) Station -1",
                "c) Station 0",
                "d) Station +1",
                "e) Station +2"
              ],
              answerImg: [peri2021q22],
              answer: "c",
              commentary: "【問題文原文】正常分娩において、児頭が固定したときの児頭先進部の位置はどれか。一つ選べ。 【選択肢原文】a) Station -2, b) Station -1, c) Station 0, d) Station +1, e) Station +2"
            },
            {
              questionSentence: "Q23 Which of the following statements about normal delivery is correct? Choose one.",
              choices: [
                "a) The first stage of labor is from the onset of labor to the dilation of the cervix by 3cm",
                "b) In the first stage of labor, contractions occur at 60-minute intervals",
                "c) In the first stage of labor, the fetal head is at the level of the ischial spines",
                "d) In the second stage of labor, the sagittal suture aligns with the transverse diameter of the pelvis",
                "e) In the third stage of labor, the placenta is delivered"
              ],
              answerImg: [peri2021q23],
              answer: "e",
              commentary: "【問題文原文】正常分娩について正しいものはどれか。一つ選べ。 【選択肢原文】a) 分娩第 1 期は産徴がみられてから子宮口が 3cm 開大するまでである, b) 分娩第 1 期では陣痛は 60 分間隔でみられる, c) 分娩第 1 期では児頭は排臨である, d) 分娩第 2 期では矢状縫合は骨盤横径に一致する, e) 分娩第 3 期では胎盤が娩出される"
            },
            {
              questionSentence: "Q24 Which is not included in the Bishop score? Choose one.",
              choices: [
                "a) Cervical effacement",
                "b) Position of the cervix",
                "c) Consistency of the cervix",
                "d) Station of the fetal head",
                "e) Frequency of uterine contractions"
              ],
              answerImg: [peri2021q24],
              answer: "e",
              commentary: "【問題文原文】Bishop スコアに含まれないものはどれか。一つ選べ。 【選択肢原文】a) 子宮頸管の進退度, b) 子宮口の位置, c) 子宮頸管の硬度, d) 児頭の高さ, e) 子宮収縮の頻度"
            },
            {
              questionSentence: "Q25 Which statement is incorrect? Choose one.",
              choices: [
                "a) Symptoms of congenital rubella syndrome include heart disease, hearing loss, and glaucoma",
                "b) The risk of congenital rubella syndrome increases the earlier in pregnancy the infection occurs",
                "c) Hygiene education is not necessary for cytomegalovirus infection",
                "d) Parvovirus B19 infection can cause anemia and fetal hydrops",
                "e) Caesarean section may be performed for herpes virus infection considering the risk of birth canal infection"
              ],
              answerImg: [peri2021q25],
              answer: "c",
              commentary: "【問題文原文】間違いはどれか。一つ選べ。 【選択肢原文】a) 先天性風疹症候群の症状は心疾患、難聴、緑内障の 3 つである。, b) 先天性風疹症候群は妊娠早期であるほど発症の可能性が高くなる(?), c) サイトメガロウイルス感染症では衛生教育はしなくてよい (文もっと長い)。, d) パルボ b19 ウイルスの感染は貧血、 胎児水腫の原因となりうる。, e) ヘルペスウイルス感染症では産道感染の可能性を考えて帝王切開することがある。"
            },
            {
              questionSentence: "Q26 Which condition is least likely to cause external bleeding during pregnancy and delivery? Choose one.",
              choices: [
                "a) Placenta previa",
                "b) Premature rupture of membranes",
                "c) Uterine inversion",
                "d) Uterine cervix laceration",
                "e) Atonic bleeding"
              ],
              answerImg: [peri2021q26],
              answer: "a",
              commentary: "【問題文原文】妊娠・分娩時に外出血をきたしにくいのはどれか。一つ選べ。 【選択肢原文】a) 前置胎盤, b) 前期破水, c) 子宮内反症, d) 子宮顎管裂傷, e) 弛緩出血"
            },
            {
              questionSentence: "Q27 A 28-week 3-day pregnant woman presents with genital bleeding. Figure 2 shows the findings of a transvaginal ultrasound. What is the diagnosis? Choose one.",
              choices: [
                "a) Placental abruption",
                "b) Ectopic pregnancy",
                "c) Placenta previa",
                "d) Threatened preterm labor",
                "e) Polyhydramnios"
              ],
              answer: "a or c",
              commentary: "【問題文原文】妊娠 28 週 3 日、 性器出血で受診。 経膣超音波検査の所見を図 2 に示す。 診断はどれか。一つ選べ。 【選択肢原文】a) 常位胎盤剥離, b) 異所性妊娠, c) 前置胎盤, d) 切迫早産, e) 羊水過多症"
            },
            {
              questionSentence: "Q28 Which of the following causes polyhydramnios? Choose one.",
              choices: [
                "a) Post-term pregnancy",
                "b) Premature rupture of membranes",
                "c) Fetal esophageal atresia",
                "d) Placental insufficiency",
                "e) Fetal Potter syndrome"
              ],
              answerImg: [peri2021q28],
              answer: "c",
              commentary: "【問題文原文】羊水過多を起こすものはどれか。一つ選べ。 【選択肢原文】a) 過期妊娠, b) 前期破水, c) 胎児食道閉鎖, d) 胎盤機能不全, e) 胎児 Potter 症候群"
            },
            {
              questionSentence: "Q29 Figure 3 shows the transvaginal ultrasound findings of a 3-week 1-day pregnant woman. Irregular uterine contractions are observed in the fetal heart rate tracing. Which treatment is inappropriate for this pregnant woman? Choose one.",
              questionImg: [peri2021qS29],
              choices: [
                "a) Bed rest",
                "b) Oxytocin administration",
                "c) Ritodrine hydrochloride administration",
                "d) Magnesium sulfate administration",
                "e) Betamethasone administration"
              ],
              answerImg: [peri2021q29],
              answer: "b",
              commentary: "【問題文原文】図 3 は妊娠 3 週 1 日の妊婦の経膣超音波所見である。胎児心拍陣痛図にて不規則な子宮収縮を認める。この妊婦に対する治療として不適切なものはどれか。1 つ選べ。 【選択肢原文】a) 安静, b) オキシトシン投与, c) 塩酸リトドリン投与, d) 硫酸マグネシウム投与, e) ベタメタゾン投与"
            },
            {
              questionSentence: "Q30 Premature rupture of membranes is observed at 32 weeks of pregnancy. Which treatment is inappropriate in this situation? Choose one.",
              choices: [
                "a) Antibiotic administration",
                "b) Cervical bacterial culture",
                "c) Caesarean section",
                "d) ",
                "e) "
              ],
              answerImg: [peri2021q30],
              answer: "b",
              commentary: "【問題文原文】妊娠 32 週目で前期破水が見られた。 この状況で行う処置として不適切なものを一つ選べ。 【選択肢原文】a) 抗生剤投与, b) 頸管細菌培養, c) 帝王切開, d) , e) "
            },
            {
              questionSentence: "Q31 Which statement about twin pregnancy in Figure 4 is correct? Choose one.",
              questionImg: [peri2021qS31],
              choices: [
                "a) Cord entanglement is more likely",
                "b) Twin-to-twin transfusion syndrome can occur",
                "c) The sexes are different",
                "d) There are two placentas",
                "e) It is a dichorionic diamniotic twin pregnancy"
              ],
              answerImg: [peri2021q31_1, peri2021q31_2],
              answer: "b",
              commentary: "【問題文原文】図 4 の双胎妊娠について正しいものはどれか。一つ選べ。 【選択肢原文】a) 臍帯相互巻絡が起こりやすい, b) 双胎間輸血症候群が起こりうる, c) 性別が異なる。, d) 胎盤が 2 つある。, e) 二絨毛膜二羊膜双胎である"
            },
            {
              questionSentence: "Q32 Which statement about pregnancy-induced hypertension is correct? Choose one.",
              choices: [
                "a) One of the complications, eclampsia, is more common in primiparas",
                "b) Pregnancy-induced hypertension nephropathy is more likely to occur in early pregnancy",
                "c) The main symptom of accelerated hypertension nephropathy is lower leg edema",
                "d) The fetus tends to be macrosomic",
                "e) Platelets are often increased"
              ],
              answerImg: [peri2021q32],
              answer: "a",
              commentary: "【問題文原文】妊娠高血圧について正しいものはどれか。一つ選べ。 【選択肢原文】a) 合併症の一つである子癇は初産婦に多い, b) 妊娠高血圧腎症は妊娠初期から発症しやすい。, c) 加速型高血圧腎症の主症状は下腿浮腫である, d) 巨大児になりやすい。, e) 血小板は増加することが多い"
            },
            {
              questionSentence: "Q33 What is necessary for neonatal resuscitation at birth? Choose one.",
              choices: [
                "a) Chilled linen",
                "b) Nasal and oral suction set",
                "c) Oxygen air blender",
                "d) Stethoscope",
                "e) Pulse oximeter"
              ],
              answerImg: [peri2021q33],
              answer: "b",
              commentary: "【問題文原文】新生児の出生立ち会いで蘇生するときに必要なものはどれか。一つ選べ。 【選択肢原文】a) 冷やしたリネン, b) 鼻口腔吸引セット, c) 酸素空気ブレンダー, d) 聴診器, e) パルスオキシメーター"
            },
            {
              questionSentence: "Q34 Which sample is used for the microbubble test to confirm respiratory distress syndrome? Choose one.",
              choices: [
                "a) Cerebrospinal fluid",
                "b) Blood",
                "c) Gastric fluid",
                "d) Urine",
                "e) Stool"
              ],
              answerImg: [peri2021q34],
              answer: "c",
              commentary: "【問題文原文】呼吸窮迫症候群を確かめるためのマイクロバブルテストで使用する児の試料はどれか。一つ選べ。 【選択肢原文】a) 髄液, b) 血液, c) 胃液, d) 尿, e) 便"
            },
            {
              questionSentence: "Q35 Which is least likely to be a complication of severe neonatal asphyxia? Choose one.",
              choices: [
                "a) Acute renal failure",
                "b) Hypoxic-ischemic encephalopathy",
                "c) Acute gastric mucosal lesions",
                "d) Jaundice",
                "e) Persistent pulmonary hypertension"
              ],
              answerImg: [peri2021q35],
              answer: "d",
              commentary: "【問題文原文】重症新生児仮死に併発しにくいものはどれか。一つ選べ。 【選択肢原文】a) 急性腎不全, b) 低酸素性虚血性脳症, c) 急性胃粘膜病変, d) 黄疸, e) 遷延性肺高血圧症"
            },
            {
              questionSentence: "Q36 Which of the following is incorrect regarding initial resuscitation in neonatal resuscitation? Choose one.",
              choices: [
                "a) Cardiac massage",
                "b) Moisture retention",
                "c) Airway clearance",
                "d) Position maintenance",
                "e) Drying and stimulation of the skin"
              ],
              answerImg: [peri2021q36],
              answer: "e",
              commentary: "【問題文原文】新生児蘇生法における初期蘇生として誤っているものはどれか。一つ選べ。 【選択肢原文】a) 心臓マッサージ, b) 保湿, c) 気道開通, d) 体位保持, e) 皮膚乾燥と刺激"
            },
            {
              questionSentence: "Q37 Which statement about transient tachypnea of the newborn is incorrect? Choose one.",
              choices: [
                "a) Nasal flaring",
                "b) Inspiratory stridor",
                "c) Retraction",
                "d) Grunting",
                "e) Cyanosis"
              ],
              answerImg: [peri2021q37],
              answer: "b",
              commentary: "【問題文原文】新生児一過性多呼吸について誤っているものはどれか。一つ選べ。 【選択肢原文】a) 鼻翼呼吸, b) 吸気性喘鳴, c) 陥没呼吸, d) 呻吟, e) チアノーゼ"
            },
            {
              questionSentence: "Q38 Which is not a factor that increases insensible water loss in newborns? Choose one.",
              choices: [
                "a) Short gestational age",
                "b) Low birth weight",
                "c) Short postnatal age",
                "d) High environmental temperature",
                "e) High environmental humidity"
              ],
              answerImg: [peri2021q38],
              answer: "d",
              commentary: "【問題文原文】新生児の不感蒸泄を増す因子として適切でないものはどれか。一つ選べ。 【選択肢原文】a) 在胎日数が少ない, b) 体重が小さい, c) 出生後日数が短い, d) 環境温度が高い, e) 環境湿度が高い"
            },
            {
              questionSentence: "Q39 Which statement about vitamin K deficiency in infants is incorrect? Choose one.",
              choices: [
                "a) Intracranial hemorrhage is common in infants with vitamin K deficiency",
                "b) If vitamin K deficiency is suspected, treatment is initiated after confirming with a blood coagulation test",
                "c) PIVKA-II (protein induced by vitamin K absence or antagonist-II) increases",
                "d) Antibiotics with an N-methylthiotetrazole (NMTT) group are a risk factor",
                "e) As a preventive measure, VK syrup is administered once a week until 3 months after birth"
              ],
              answerImg: [peri2021q39_1, peri2021q39_2],
              answer: "c?",
              commentary: "【問題文原文】児のビタミン K(VK)欠乏症について誤っているのはどれか。一つ選べ。 【選択肢原文】a) 乳児期 VK 欠乏症では、頭蓋内出血の頻度が高い, b) VK 欠乏症を疑えば、 血液凝固検査で確認後、治療を開始する, c) PIVKA (protein induced by Vitamin K absence or antagonist)-Ⅱが上昇する, d) NMTT(N-メチルチオテトラゾール)基を有する抗生剤はリスク因子である, e) 予防法として、 週一回、出生後 3 ヶ月まで VK シロップを投与する方法がある"
            },
            {
              questionSentence: "Q40 Which statement about maternal infections and their management is correct? Choose one.",
              choices: [
                "a) Toxoplasmosis - fetal blood transfusion",
                "b) Syphilis - tetracycline administration to the mother",
                "c) Hepatitis C virus - vaccine administration to the infant",
                "d) HIV - vaginal delivery",
                "e) HTLV-1 - avoid direct breastfeeding"
              ],
              answerImg: [peri2021q40],
              answer: "e",
              commentary: "【問題文原文】母体感染症とその対応について正しいものはどれか。一つ選べ。 【選択肢原文】a) トキソプラズマー胎児輸血, b) 梅毒一母体へのテトラサイクリン投与, c) C 型肝炎ウイルスー児へのワクチン投与, d) HIV-経膣分娩, e) HTLV-1-児への直接授乳を避ける"
            }
            ]            
        },{
            groupTag : "腫瘍疾患2022本試験",
            groupContents: [{
                      questionSentence: "Q1 悪性腫瘍の診断・治療に関して正しい組み合わせはどれか。 (複数選択可能)",
                      choices: [
                        "1. 診断には存在診断、質的診断、病期診断があるが、治療に際して病期診断は必ずしも必要としない。",
                        "2. 治療を開始するためには、いかなる状況でも病理組織診断は必須である。",
                        "3. 診療ガイドラインに沿い、キャンサーポードを経て治療法を決定することが推奨される。",
                        "4. 患者の全身状態や合併症も考慮し、総合的に決定する。",
                        "5. 病期や患者の全身状態によって、手術療法、放射線療法、化学療法、免疫療法のいずれかを選んで治療を行う。"
                      ]
                    },
                    {
                      questionSentence: "Q2 悪性腫瘍の治療に関して誤っているのはどれか。",
                      choices: [
                        "a. 治療法の一つである薬物療法には、殺細胞性抗がん剤、分子標的治療薬、免疫チェックポイント阻害剤などが含まれる。",
                        "b. 手術療法、放射線療法、化学療法の全てを同一患者に施行することはない。",
                        "c. 手術療法と放射線療法は局所療法、化学療法は全身療法である。",
                        "d. 固形癌においては、化学療法単独では根治治療とはならない。",
                        "e. 化学療法には放射線療法の増感作用がある。"
                      ]
                    },
                    {
                      questionSentence: "Q3 原発性肺癌に対する放射線治療に関して誤っている組み合わせはどれか。 (複数選択可能)",
                      choices: [
                        "1. 呼吸による腫瘍の動きを抑制するため、通常は呼吸停止下に照射する。",
                        "2. 照射中の体動を抑制するため、基本的に体固定して照射を行う。",
                        "3. 局所進行肺癌では、放射線治療と化学療法の同時併用が望ましい。",
                        "4. 小細胞肺癌では非小細胞肺癌と比べて、線量分割や総線量が異なる。",
                        "5. 照射範囲は腫瘍の組織型によって、ガイドラインで決まった通りに決定する。"
                      ]
                    },
                    {
                      questionSentence: "Q4 原発性肺癌に対する定位放射線治療において、正しい組み合わせはどれか。 (複数選択可能)",
                      choices: [
                        "1. 対象となる病期は3期である。",
                        "2. 手術療法を施行できない全身状態不良患者に対しては、定位放射線治療も施行できない。",
                        "3. 60Gy/30回のような通常の照射法と比較して、1回線量が多く、総線量も多い。",
                        "4. 60Gy/30回のような通常の照射法と比較して、腫瘍の治療効果は高い。",
                        "5. 肺門の腫瘍に対する定位放射線治療では、大血管などに対する重篤な晩期有害事象が危惧される。"
                      ]
                    },
                    {
                      questionSentence: "Q5 がんの外科治療について、正しいのはどれか。",
                      choices: [
                        "a. 癌の進展においてリンパ行性転移は稀である。",
                        "b. 低侵襲手術は癌治療では用いるべきではない。",
                        "c. 根治性は臓器の機能温存よりも優先されるべきである。",
                        "d. 肉眼的よりも顕微鏡的に癌を取り切ることを目標とする。",
                        "e. がんのステージは原発腫瘍、リンパ節転移、神経浸潤の程度で決定される。"
                      ]
                    },
                    {
                      questionSentence: "Q6 がんのリンパ行性転移について、正しいのはどれか。",
                      choices: [
                        "a. 領域リンパ節郭清は根治性とは無関係である。",
                        "b. リンパ節転移と血行性転移は同時にはおこりにくい。",
                        "c. 進行大腸癌において切除腸管はできるだけ長い方がよい。",
                        "d. 領域リンパ節の定義は胃癌、大腸癌、膵癌では共通である。",
                        "e. 乳癌においてセンチネルリンパ節生検は広く用いられている。"
                      ]
                    },
                    {
                      questionSentence: "Q7 Which of the following antibody therapeutic agents has an affinity for PD-1?",
                      choices: [
                        "a. Nivolumab",
                        "b. Bevacizumab",
                        "c. Denosumab",
                        "d. Durvalumab",
                        "e. Necitumumab"
                      ]
                    },
                    {
                      questionSentence: "Q8 分子標的治療薬(キナーゼ阻害剤)についての記述で正しいのはどれか",
                      choices: [
                        "a. ゲフィチニプはエルロチニプと比較し、肝障害の頻度が低い。",
                        "b. クリゾチニプはアレクチニプと比較し、視覚障害を来しやすい。",
                        "c. オシメルチニプはゲフィチニプと比較し、白血球減少の頻度が低い。",
                        "d. オシメルチニプはT790M耐性変異に有効で、58R、ex19欠損変異には無効である。",
                        "e. アレクチニプはROSI遺伝子転座陽性の非小細胞肺癌に有効である。"
                      ]
                    },
                    {
                      questionSentence: "Q9 人口10万人当たりの疾患別死亡率の一位はどれか。正しいものを一つ選べ。",
                      choices: [
                        "a. 老衰",
                        "b. 自殺",
                        "c. 心疾患",
                        "d. 肺炎",
                        "e. 悪性新生物"
                      ]
                    },
                    {
                      questionSentence: "Q10 進行固形がんに対し2019年遺伝子パネル検査が保険承認された。遺伝子パネル検査の説明として誤っているものはどれか。",
                      choices: [
                        "a. 大量の遺伝子情報を解読可能",
                        "b. 高速化",
                        "c. 分子標的薬に繋がる可能性は高い",
                        "d. 遺伝性腫瘍に関連する遺伝子変異を認める可能性がある",
                        "e. 腫瘍組織を用いる"
                      ]
                    },
                    {
                      questionSentence: "Q11 臨床試験においてその薬剤が標的とする遺伝子変異があれば、どのタイプのがん腫でも登録できる試験のことを何というか。正しいものを一つ選べ。",
                      choices: [
                        "a. Phase 1試験",
                        "b. アンブレラ試験",
                        "c. Phase 3試験",
                        "d. 市販後臨床試験",
                        "e. バスケット試験"
                      ]
                    },
                    {
                      questionSentence: "Q12 分子標的薬が承認されている臓器横断的な遺伝子異常はどれか。誤っているものを選べ。",
                      choices: [
                        "a. NTRK融合遺伝子",
                        "b. ROSI融合遺伝子",
                        "c. MSI-H (高頻度マイクロサテライト不安定性)",
                        "d. TMB-High (腫瘍遺伝子変異量高スコア)"
                      ]
                    },
                    {
                      questionSentence: "Q13 次のうち、支持療法ではないものを一つ選べ。",
                      choices: [
                        "a. 口腔ケア",
                        "b. 皮膚ケア",
                        "c. 制吐剤投与",
                        "d. 輸血",
                        "e. 免疫チェックポイント阻害薬投与"
                      ]
                    },
                    {
                      questionSentence: "Q14 次のうち、EGFR抗体による副作用として当てはまらないものはどれか、一つ選べ。",
                      choices: [
                        "a. 挫創様皮疹",
                        "b. 皮膚乾燥",
                        "c. 爪囲炎",
                        "d. 手足症候群",
                        "e. 手指の亀裂"
                      ]
                    },
                    {
                      questionSentence: "Q15 以下の腫瘍の内、一般的に根治的放射線治療の適応とならないものはどれか。",
                      choices: [
                        "a. 前立腺癌",
                        "b. 喉頭癌",
                        "c. 線維肉腫",
                        "d. 子宮頸癌",
                        "e. 肺癌"
                      ]
                    },
                    {
                      questionSentence: "Q16 以下の細胞周期の内、放射線感受性が最も高い組み合わせはどれか。 (複数選択可能)",
                      choices: [
                        "1. M期 (分裂期)",
                        "2. G0期 (静止期)",
                        "3. G1期 (DNA合成準備期)",
                        "4. S期 (DNA合成期)",
                        "5. G2期 (分裂準備期)"
                      ]
                    },
                    {
                      questionSentence: "Q17 慢性骨髄性白血病の治療において、イマチニブが誘導する薬物特異的な阻害作用の標的はどれか。",
                      choices: [
                        "a. リガンド依存性イオンチャネル",
                        "b. MAPキナーゼ",
                        "c. 核内受容体",
                        "d. チロシンキナーゼ",
                        "e. Gタンパク質共役型受容体"
                      ]
                    },
                    {
                      questionSentence: "Q18 Which anti-cancer drug is most effective in the G2 phase of the cell cycle?",
                      choices: [
                        "a. Methotrexate",
                        "b. Paclitaxel",
                        "c. Bleomycin",
                        "d. Cytarabine",
                        "e. Irinotecan"
                      ]
                    },
                    {
                      questionSentence: "Q19 腫瘍免疫を抑制する因子とそれを発現する細胞の組合せについて誤っているものの組み合わせはどれか。 (複数選択可能)",
                      choices: [
                        "1. IFN-γ - M2 (alternatively-activated) macrophages",
                        "2. CD28 - Helper T cells",
                        "3. PD-L1 - Tumor cells",
                        "4. PD-1 - Killer T cells",
                        "5. TGF-β - Regulatory T cells"
                      ]
                    },
                    {
                      questionSentence: "Q20 腫瘍免疫について、誤っているものの組み合わせはどれか。 (複数選択可能)",
                      choices: [
                        "1. がん幹細胞(Cancer stem cell)には自己複製能がある",
                        "2. GVL (Graft versus leukemia)は腫瘍細胞の増殖を促す",
                        "3. ヒトパピローマウイルスは子宮体癌の発癌に関与している",
                        "4. 免疫賦活効果もあるBCGは臨床では膀胱癌の治療としても用いられている",
                        "5. Cancer Immunoediting (がん免疫編集)とはがんに対する免疫監視機構が存在するにも関わらずがんが増殖してしまうという矛盾を説明する仮説である。"
                      ]
                    },
                    {
                      questionSentence: "Q21 がんと危険因子の組み合わせで誤っているのはどれか。",
                      choices: [
                        "a. 肝細胞がん - C型肝炎ウイルス感染症",
                        "b. 食道がん(腺癌) - 肥満症",
                        "c. 子宮内膜がん - 糖尿病",
                        "d. 子宮頸がん - HTLV-1感染症",
                        "e. 腎臓がん - 喫煙"
                      ]
                    },
                    {
                      questionSentence: "Q22 喫煙対策について誤っているのはどれか。",
                      choices: [
                        "a. 保険診療で禁煙治療を受けられる",
                        "b. 新規飲食店には、喫煙可能室を設置できない",
                        "c. 健康増進法は受動喫煙防止について定めている",
                        "d. 喫煙可能室への、未成年従業員の立ち入りは禁止されている",
                        "e. 病院には、必要な措置を取ったうえで、屋内の喫煙場所を設置できる"
                      ]
                    },
                    {
                      questionSentence: "Q23 がん細胞の生物学的特性として適切でないのはどれか。",
                      choices: [
                        "a. 基底膜の破壊能",
                        "b. アポトーシス耐性",
                        "c. 細胞増殖の接触阻害",
                        "d. 細胞間接着機構の減弱",
                        "e. テロメラーゼ活性の獲得"
                      ]
                    },
                    {
                      questionSentence: "Q24 がん細胞の生物学的特性として適切でないのはどれか。",
                      choices: [
                        "a. がんは、不均一な細胞の集団である。",
                        "b. P53遺伝子は、がん抑制遺伝子である。",
                        "c. DNAのメチル化は、癌抑制遺伝子の不活化の原因となる。",
                        "d. がん病巣内は、がんの血管新生によって血流が豊富である。",
                        "e. Epithelial-Mesenchymal Transitionを起こしたがん細胞は、遊走能が亢進している。"
                      ]
                    },
                    {
                      questionSentence: "Q25 以下の文章で誤っているのはどれか。",
                      choices: [
                        "a. 病理診断は医行為であり、検査ではない。",
                        "b. 臨床医が病理診断を依頼する際には、既往歴の記載は必要がない。",
                        "c. 小さな病理検体では、病変の全体像は把握できない。",
                        "d. 病理診断は治療方針の根拠となる。",
                        "e. ホルマリン固定パラフィン包埋組織(FFPE)検体からDNAを抽出することは可能である。"
                      ]
                    },
                    {
                      questionSentence: "Q26 Which gene has the highest frequency of therapeutic target gene abnormalities detected in Japanese lung adenocarcinoma?",
                      choices: [
                        "a. KRAS",
                        "b. BRAF",
                        "c. EGFR",
                        "d. HER2",
                        "e. ROS1"
                      ]
                    },
                    {
                      questionSentence: "Q27 次の中から正しいものを選べ。",
                      choices: [
                        "1. ヒト化抗体は異種抗体に対する免疫反応を低減できる",
                        "2. タイトジャンクションはクラウディンにより構成されている",
                        "3. クラウディンは7回膜貫通型タンパクである",
                        "4. タイトジャンクションは強固な細胞間接着をCa依存性に生じる",
                        "5. タイトジャンクションはバリア機能とフェンス機能を持ち、細胞間微小環境を保つ"
                      ]
                    },
                    {
                      questionSentence: "Q28 次の中から正しいものを選べ。",
                      choices: [
                        "1. 培養細胞を抗Claudin抗体で処理するとADCCにより細胞障害が生じた",
                        "2. ヌードマウスの実験系で抗Claudin抗体を作用させてもADCCは生じない",
                        "3. 腫瘍タイトジャンクションの障害により腫瘍内の増殖因子が流出し増殖が阻害される",
                        "4. 腫瘍タイトジャンクションの障害により腫瘍内への抗癌剤移行が亢進する",
                        "5. 抗体療法では、標的タンパクの発現量と抗体効果は相関しない"
                      ]
                    },
                    {
                      questionSentence: "Q29 緩和ケアについて正しいものを選べ。",
                      choices: [
                        "a. 緩和ケアはがん治療が終わってから開始する。",
                        "b. がん患者だけではなく、その家族にも行うべきである。",
                        "c. トータルペインという概念は、日本の緩和ケアでは提唱されていない。",
                        "d. がん患者の経済的な問題については他の医療者が当たるべきであり、医師は関与せず治療に専念すべきである。",
                        "e. WHOの緩和ケアの定義にはスピリチュアルケアは含まれない。"
                      ]
                    },
                    {
                      questionSentence: "Q30 医療用麻薬に関する記述のうち正しいものを選べ。",
                      choices: [
                        "a. 患者ががん性疼痛を訴えたが、抗がん治療中なので医療用麻薬の使用は控えた。",
                        "b. 患者ががん性疼痛を訴えたが、家族が麻薬の使用を強く非難してきたので、医療用麻薬の使用は控えた。",
                        "c. 患者ががん性疼痛を訴えた時、積極的に医療用麻薬の使用を考慮しなければいけない。",
                        "d. 医療用麻薬を開始した際、それまで使っていたNSAIDsの使用を中止した。",
                        "e. 医療用麻薬の使用は、終末期がん患者に限定しなければいけない。"
                      ]
                    },
                    {
                      questionSentence: "Q31 Which of the following is correct about the course of the dying psychological stage advocated by Kübler Ross?",
                      choices: [
                        "a. depression → denial → bargaining → anger → acceptance",
                        "b. depression → anger → denial → acceptance",
                        "c. denial → depression → bargaining → anger → acceptance",
                        "d. denial → anger → depression → acceptance",
                        "e. anger → depression → denial → acceptance"
                      ]
                    },
                    {
                      questionSentence: "Q32 次のうち正しいのはどれか。",
                      choices: [
                        "1. せん妄は、がんの末期にみられることが多い。",
                        "2. せん妄は、意識障害の範疇には入らない。",
                        "3. がん患者における適応障害で多くみられる精神症状は、幻覚や抑うつである。",
                        "4. がん患者におけるうつ病に対し、基本的には薬物療法を行うべきではない。",
                        "5. がん患者における無気力、傾眠では、うつ病や低活動型せん妄も考慮する。"
                      ]
                    },
                    {
                      questionSentence: "Q33 次の癌疾患やその病態とIVRの組み合わせのうち誤っているものはどれか。",
                      choices: [
                        "a. 肝細胞癌 - 経カテーテル的肝動脈塞栓術(TAE/TACE)",
                        "b. 閉塞性黄疸 - ステント留置",
                        "c. 転移性溶骨性椎体骨腫瘍 - 経皮的セメント注入療法・経皮的椎体形成術",
                        "d. 食道閉塞・高度狭窄 - 経内視鏡的胃瘻造設術",
                        "e. 転移性肝腫瘍 - 経皮的ラジオ波凝固療法"
                      ]
                    },
                    {
                      questionSentence: "Q34 次のうち誤っているものはどれか。",
                      choices: [
                        "a. 持続動注療法を施行する場合にはリザーバーという埋め込み器具を挿入する。",
                        "b. 門脈本幹腫瘍栓では動脈塞栓術は禁忌となる。",
                        "c. 動注療法では病巣部局所の高い薬剤濃度が得られ高い局所効果が得られるが、副作用は多くなる。",
                        "d. 動注化学療法と全身化学療法を併用する場合がある。",
                        "e. IVRはがんに対する緩和治療にも役に立つ。"
                      ]
                    },
                    {
                      questionSentence: "Q35 次のうち、正しい組み合わせはどれか。",
                      choices: [
                        "1. がん研究振興財団作成の「がんの統計'22」によると、女性の癌の中では乳癌が、罹患率も死亡率も最も高い。",
                        "2. 乳房温存療法とは、乳房部分切除術と術後放射線治療を組み合わせた治療のことである。",
                        "3. 病変の進展範囲にかかわらず、非浸潤癌であれば乳房温存療法の適応となる。",
                        "4. 乳癌の術後照射では骨髄抑制によって易感染状態となるため、感染症罹患に対して十分な注意が必要である。",
                        "5. 乳癌の術後照射では重篤な放射線肺臓炎を発症することが多い。"
                      ]
                    },
                    {
                      questionSentence: "Q36 次のうち、正しいものはどれか。",
                      choices: [
                        "a. 日本人の皮膚癌の中で最も多いのは有棘細胞癌である。",
                        "b. 基底細胞癌と有棘細胞癌に対する治療の第一選択は手術である。",
                        "c. 体表から放射線を照射した時に、皮膚表面よりも少し深部に入った所の方が線量が高くなることをビルドアップ効果と言う。",
                        "d. ポーラスを使うことで、皮膚癌細胞の放射線感受性を高めることができる。",
                        "e. 皮膚の悪性腫瘍に対する放射線治療の目的は、緩和目的であることがほとんどである。"
                      ]
                    },
                    {
                      questionSentence: "Q37 次の頭頸部癌のうち、手術ではなく化学放射線治療が第1選択となるものはどれか。",
                      choices: [
                        "a. 甲状腺癌",
                        "b. 耳下腺癌",
                        "c. 上咽頭癌",
                        "d. 中咽頭癌",
                        "e. 下咽頭癌"
                      ]
                    },
                    {
                      questionSentence: "Q38 次の消化器癌のうち、手術よりも根治的化学放射線治療が第1選択となる疾患はどれか。",
                      choices: [
                        "a. 胃癌",
                        "b. 回腸癌",
                        "c. 下行結腸癌",
                        "d. 肛門癌",
                        "e. 下部胆管癌"
                      ]
                    },
                    {
                      questionSentence: "Q39 次のうち、正しいものはどれか。",
                      choices: [
                        "a. 造血器腫瘍の治療のメインは放射線治療である。",
                        "b. 造血器腫瘍は基本的に放射線感受性が低いため、60Gy以上の照射線量が必要なことが多い。",
                        "c. 全身に多発する病変のあるリンパ腫に対する治療として、全身照射は有効である。",
                        "d. 全身に放射線を照射して60日以内に50%の人が死亡するのは4Gyとされている。",
                        "e. 全身照射の場合、問題となる有害事象は急性期のもののみである。"
                      ]
                    },
                    {
                      questionSentence: "Q40 次のうち、誤っている組み合わせはどれか。",
                      choices: [
                        "1. 脳腫瘍のWHO分類では、形態学的分類だけではなく、遺伝子診断も組み合わせた分類となっている。",
                        "2. 膠芽腫(glioblastoma)の病理所見として、壊死巣周囲の核の柵状配列が特徴的な所見である。",
                        "3. 膠芽腫(glioblastoma)の標準治療は手術と術後放射線治療と化学療法を組み合わせた治療である。",
                        "4. 膠芽腫(glioblastoma)に対する放射線治療として、標準的な線量は25Gy/5回である。",
                        "5. 膠芽腫(glioblastoma)の生存期間中央値はおよそ3年である。"
                      ]
                    },
                    {
                      questionSentence: "Q41 Which of the following is the correct combination of parallel organs?",
                      choices: [
                        "a. Liver",
                        "b. Optic nerve",
                        "c. Brain stem",
                        "d. Spinal cord",
                        "e. Lung"
                      ]
                    },
                    {
                      questionSentence: "Q42 次の文章のうち、正しいものはどれか。",
                      choices: [
                        "a. 電子線は体内深部の腫瘍に対する治療で用いられる。",
                        "b. X線は体表面の線量が最大となり、深部にいくほど線量が減少する。",
                        "c. 陽子線はブラッグピークを持つ。",
                        "d. 外部放射線治療ではリニアックで発生させたベータ線とガンマ線で治療が行われる。",
                        "e. 放射線治療では放射線診断よりも低エネルギーのX線を用いる。"
                      ]
                    },
                    {
                      questionSentence: "Q43 子宮頸癌に対する根治的放射線治療を行った。以下の有害事象のうち、最も遅く発現するものはどれか。",
                      choices: [
                        "a. 放射線宿酔",
                        "b. 腸閉塞",
                        "c. 下痢",
                        "d. 皮膚の発赤",
                        "e. 頻尿"
                      ]
                    },
                    {
                      questionSentence: "Q44 以下の放射性同位元素のうち前立腺癌の密封小線源治療に用いられるものはどれか。",
                      choices: [
                        "1. ラジウム223",
                        "2. イットリウム90",
                        "3. ガリウム67",
                        "4. イリジウム192",
                        "5. ヨウ素125"
                      ]
                    },
                    {
                      questionSentence: "Q45 次のうち正しいものはどれか。",
                      choices: [
                        "a. 肉腫は非上皮性の悪性腫瘍である。",
                        "b. 60Gyを水に照射すると1℃以上水温が上昇する。",
                        "c. X線は荷電粒子線なので飛程がある。",
                        "d. 円形細胞肉腫はヘマトキシリン・エオジン染色だけで容易に鑑別できる。",
                        "e. 軟部肉腫は放射線感受性であるため手術を行うことはない。"
                      ]
                    },
                    {
                      questionSentence: "Q46 骨転移に対する緩和照射のスケジュールとして最も適切でないと思われるものはどれか。",
                      choices: [
                        "a. 8Gy / 1回",
                        "b. 20Gy / 5回",
                        "c. 30Gy / 10回",
                        "d. 37.5Gy / 15回",
                        "e. 60Gy / 30回"
                      ]
                    },
                    {
                      questionSentence: "Q47 対象者1000人について、その有病率が1%の疾患に対して、感度80%、特異度80%のスクリーニング検査を実施した場合、正しいものはどれか。",
                      choices: [
                        "1. 疾患があり、検査が陽性を示すのは8人である",
                        "2. 検査が陽性を示すのは198人である",
                        "3. 疾患がなく、検査が陰性を示すのは794人である",
                        "4. 陽性予測値(的中率)は約96.2%である",
                        "5. 陰性予測値(的中率)は約99.7%である"
                      ]
                    },
                    {
                      questionSentence: "Q48 誤っているものはどれか。",
                      choices: [
                        "a. 血清P53抗体は過剰発現したP53蛋白に対する自己抗体である。",
                        "b. PIVKA-IIはワーファリン(ビタミンK拮抗薬)投与患者では高値を示す。",
                        "c. 乳癌組織におけるHER2発現は分子標的治療薬を使用する目安になる。",
                        "d. ほとんどの腫瘍マーカーは、初発のがんの早期発見に有用でない。",
                        "e. 腫瘍マーカーは手術や化学療法の効果判定には用いられない。"
                      ]
                    },
                    {
                      questionSentence: "Q49 誤っているものはどれか。",
                      choices: [
                        "a. 対策型子宮がん検診は20歳から対象となる",
                        "b. 過剰診断はがん検診のデメリットの一つである",
                        "c. 対策型乳がん検診ではマンモグラフィを2年に1回実施する",
                        "d. 健診は特定の病気を発見して早期に治療することを目的としている",
                        "e. 対策型検診は対象となる集団の死亡率を下げることを目的としている"
                      ]
                    },
                    {
                      questionSentence: "Q50 誤っているものはどれか。",
                      choices: [
                        "a. 対策型肺がん検診では低線量CTが行われる",
                        "b. 日本の乳がん検診受診率は欧米に比べて低い",
                        "c. 対策型胃がん検診では胃内視鏡検査が行われる",
                        "d. 心理的な負担はがん検診のデメリットの一つである",
                        "e. 対策型大腸がん検診ではCTコロノスコピーが行われる"
                      ]
                    }
                  ]                  
        },{
            groupTag : "腫瘍疾患2022本試験機械英訳",
            groupContents: [{
                detailInfo: "chatGPT4oによる機械英訳",
                      questionSentence: "Q1 Which of the following combinations regarding the diagnosis and treatment of malignant tumors is correct? (Multiple choices possible)",
                      choices: [
                        "1. Diagnosis includes presence diagnosis, qualitative diagnosis, and staging diagnosis, but staging diagnosis is not always necessary for treatment.",
                        "2. Pathological tissue diagnosis is essential to start treatment in any situation.",
                        "3. It is recommended to decide the treatment method through cancer boards according to clinical guidelines.",
                        "4. Comprehensive decisions should be made considering the patient's general condition and complications.",
                        "5. Depending on the stage and general condition of the patient, choose one of the surgical therapy, radiation therapy, chemotherapy, or immunotherapy for treatment."
                      ]
                    },
                    {
                      questionSentence: "Q2 Which of the following is incorrect regarding the treatment of malignant tumors?",
                      choices: [
                        "a. Drug therapy, which is one of the treatments, includes cytotoxic anti-cancer drugs, molecular targeted therapies, and immune checkpoint inhibitors.",
                        "b. Surgery, radiation therapy, and chemotherapy are never performed on the same patient.",
                        "c. Surgery and radiation therapy are local therapies, while chemotherapy is a systemic therapy.",
                        "d. In solid cancers, chemotherapy alone does not lead to curative treatment.",
                        "e. Chemotherapy has a sensitizing effect on radiation therapy."
                      ]
                    },
                    {
                      questionSentence: "Q3 Which of the following combinations regarding radiation therapy for primary lung cancer is incorrect? (Multiple choices possible)",
                      choices: [
                        "1. To suppress tumor movement due to respiration, irradiation is usually performed under respiratory arrest.",
                        "2. To suppress body movement during irradiation, the body is basically fixed during irradiation.",
                        "3. For locally advanced lung cancer, concurrent use of radiation therapy and chemotherapy is desirable.",
                        "4. For small cell lung cancer, the fractionation and total dose are different compared to non-small cell lung cancer.",
                        "5. The irradiation range is determined according to the guidelines based on the histological type of the tumor."
                      ]
                    },
                    {
                      questionSentence: "Q4 Which of the following combinations regarding stereotactic radiation therapy for primary lung cancer is correct? (Multiple choices possible)",
                      choices: [
                        "1. The target stage is stage 3.",
                        "2. Stereotactic radiation therapy cannot be performed for patients in poor general condition who cannot undergo surgery.",
                        "3. Compared to the usual irradiation method of 60Gy/30 times, the dose per fraction is higher and the total dose is also higher.",
                        "4. Compared to the usual irradiation method of 60Gy/30 times, the therapeutic effect on tumors is higher.",
                        "5. In stereotactic radiation therapy for tumors in the lung hilum, severe late adverse events to large blood vessels are a concern."
                      ]
                    },
                    {
                      questionSentence: "Q5 Which of the following is correct regarding the surgical treatment of cancer?",
                      choices: [
                        "a. Lymphogenous metastasis is rare in cancer progression.",
                        "b. Minimally invasive surgery should not be used in cancer treatment.",
                        "c. Radicality should be prioritized over organ function preservation.",
                        "d. The goal is to remove cancer microscopically rather than macroscopically.",
                        "e. The stage of cancer is determined by the extent of the primary tumor, lymph node metastasis, and neural invasion."
                      ]
                    },
                    {
                      questionSentence: "Q6 Which of the following is correct regarding lymphogenous metastasis of cancer?",
                      choices: [
                        "a. Regional lymph node dissection is unrelated to radicality.",
                        "b. Lymph node metastasis and hematogenous metastasis are unlikely to occur simultaneously.",
                        "c. In advanced colorectal cancer, it is better to remove as much of the affected intestine as possible.",
                        "d. The definition of regional lymph nodes is the same for gastric cancer, colorectal cancer, and pancreatic cancer.",
                        "e. Sentinel lymph node biopsy is widely used in breast cancer."
                      ]
                    },
                    {
                      questionSentence: "Q7 Which of the following antibody therapeutic agents has an affinity for PD-1?",
                      choices: [
                        "a. Nivolumab",
                        "b. Bevacizumab",
                        "c. Denosumab",
                        "d. Durvalumab",
                        "e. Necitumumab"
                      ]
                    },
                    {
                      questionSentence: "Q8 Which of the following statements is correct regarding molecular targeted therapies (kinase inhibitors)?",
                      choices: [
                        "a. Gefitinib has a lower frequency of liver damage compared to erlotinib.",
                        "b. Crizotinib is more likely to cause visual impairment compared to alectinib.",
                        "c. Osimertinib has a lower frequency of leukopenia compared to gefitinib.",
                        "d. Osimertinib is effective against T790M resistance mutations and ineffective against L858R and ex19 deletion mutations.",
                        "e. Alectinib is effective against non-small cell lung cancer with ROS1 gene translocation."
                      ]
                    },
                    {
                      questionSentence: "Q9 Which disease has the highest mortality rate per 100,000 population? Choose one.",
                      choices: [
                        "a. Senility",
                        "b. Suicide",
                        "c. Heart disease",
                        "d. Pneumonia",
                        "e. Malignant neoplasm"
                      ]
                    },
                    {
                      questionSentence: "Q10 Which of the following statements regarding genetic panel testing for advanced solid cancers, approved for insurance in 2019, is incorrect?",
                      choices: [
                        "a. It can decode a large amount of genetic information.",
                        "b. It is fast.",
                        "c. It has a high potential to lead to molecular targeted therapies.",
                        "d. It may detect gene mutations associated with hereditary tumors.",
                        "e. It uses tumor tissue."
                      ]
                    },
                    {
                      questionSentence: "Q11 What is the name of the clinical trial that allows registration of any type of cancer if the drug targets a specific genetic mutation? Choose one.",
                      choices: [
                        "a. Phase 1 trial",
                        "b. Umbrella trial",
                        "c. Phase 3 trial",
                        "d. Post-marketing clinical trial",
                        "e. Basket trial"
                      ]
                    },
                    {
                      questionSentence: "Q12 Which of the following organ-transcending genetic abnormalities approved for molecular targeted drugs is incorrect?",
                      choices: [
                        "a. NTRK fusion gene",
                        "b. ROS1 fusion gene",
                        "c. MSI-H (high-frequency microsatellite instability)",
                        "d. TMB-High (high tumor mutation burden)"
                      ]
                    },
                    {
                      questionSentence: "Q13 Which of the following is not a supportive therapy? Choose one.",
                      choices: [
                        "a. Oral care",
                        "b. Skin care",
                        "c. Administration of antiemetics",
                        "d. Blood transfusion",
                        "e. Administration of immune checkpoint inhibitors"
                      ]
                    },
                    {
                      questionSentence: "Q14 Which of the following is not a side effect of EGFR antibodies? Choose one.",
                      choices: [
                        "a. Acneiform rash",
                        "b. Dry skin",
                        "c. Paronychia",
                        "d. Hand-foot syndrome",
                        "e. Cracks in fingers"
                      ]
                    },
                    {
                      questionSentence: "Q15 Which of the following tumors is generally not indicated for curative radiation therapy?",
                      choices: [
                        "a. Prostate cancer",
                        "b. Laryngeal cancer",
                        "c. Fibrosarcoma",
                        "d. Cervical cancer",
                        "e. Lung cancer"
                      ]
                    },
                    {
                      questionSentence: "Q16 Which of the following combinations of cell cycle phases is most sensitive to radiation? (Multiple choices possible)",
                      choices: [
                        "1. M phase (mitosis)",
                        "2. G0 phase (quiescent phase)",
                        "3. G1 phase (DNA synthesis preparation phase)",
                        "4. S phase (DNA synthesis phase)",
                        "5. G2 phase (pre-mitotic phase)"
                      ]
                    },
                    {
                      questionSentence: "Q17 What is the target of the drug-specific inhibitory effect induced by imatinib in the treatment of chronic myeloid leukemia?",
                      choices: [
                        "a. Ligand-gated ion channel",
                        "b. MAP kinase",
                        "c. Nuclear receptor",
                        "d. Tyrosine kinase",
                        "e. G-protein-coupled receptor"
                      ]
                    },
                    {
                      questionSentence: "Q18 Which anti-cancer drug is most effective in the G2 phase of the cell cycle?",
                      choices: [
                        "a. Methotrexate",
                        "b. Paclitaxel",
                        "c. Bleomycin",
                        "d. Cytarabine",
                        "e. Irinotecan"
                      ]
                    },
                    {
                      questionSentence: "Q19 Which combination of tumor immune-suppressing factors and the cells that express them is incorrect? (Multiple choices possible)",
                      choices: [
                        "1. IFN-γ - M2 (alternatively-activated) macrophages",
                        "2. CD28 - Helper T cells",
                        "3. PD-L1 - Tumor cells",
                        "4. PD-1 - Killer T cells",
                        "5. TGF-β - Regulatory T cells"
                      ]
                    },
                    {
                      questionSentence: "Q20 Which of the following combinations is incorrect regarding tumor immunity? (Multiple choices possible)",
                      choices: [
                        "1. Cancer stem cells have self-replication ability.",
                        "2. GVL (Graft versus leukemia) promotes tumor cell proliferation.",
                        "3. Human papillomavirus is involved in the carcinogenesis of endometrial cancer.",
                        "4. BCG, which also has an immunostimulatory effect, is used clinically for the treatment of bladder cancer.",
                        "5. Cancer Immunoediting is a hypothesis that explains the paradox where cancer grows despite the existence of an immune surveillance mechanism against cancer."
                      ]
                    },
                    {
                      questionSentence: "Q21 Which of the following combinations of cancer and risk factors is incorrect?",
                      choices: [
                        "a. Hepatocellular carcinoma - Hepatitis C virus infection",
                        "b. Esophageal cancer (adenocarcinoma) - Obesity",
                        "c. Endometrial cancer - Diabetes",
                        "d. Cervical cancer - HTLV-1 infection",
                        "e. Kidney cancer - Smoking"
                      ]
                    },
                    {
                      questionSentence: "Q22 Which of the following statements about smoking measures is incorrect?",
                      choices: [
                        "a. Smoking cessation treatment can be received under health insurance.",
                        "b. New restaurants cannot have smoking rooms.",
                        "c. The Health Promotion Act stipulates measures to prevent passive smoking.",
                        "d. Minors are prohibited from entering smoking rooms.",
                        "e. Hospitals can set up indoor smoking areas if necessary measures are taken."
                      ]
                    },
                    {
                      questionSentence: "Q23 Which of the following biological characteristics of cancer cells is incorrect?",
                      choices: [
                        "a. Ability to destroy the basement membrane",
                        "b. Resistance to apoptosis",
                        "c. Contact inhibition of cell proliferation",
                        "d. Weakening of intercellular adhesion mechanisms",
                        "e. Acquisition of telomerase activity"
                      ]
                    },
                    {
                      questionSentence: "Q24 Which of the following biological characteristics of cancer cells is incorrect?",
                      choices: [
                        "a. Cancer is a heterogeneous group of cells.",
                        "b. The p53 gene is a tumor suppressor gene.",
                        "c. DNA methylation causes inactivation of tumor suppressor genes.",
                        "d. The cancerous lesion has abundant blood flow due to cancer angiogenesis.",
                        "e. Cancer cells that have undergone epithelial-mesenchymal transition have increased motility."
                      ]
                    },
                    {
                      questionSentence: "Q25 Which of the following statements is incorrect?",
                      choices: [
                        "a. Pathological diagnosis is a medical act, not a test.",
                        "b. When a clinician requests a pathological diagnosis, there is no need to record the medical history.",
                        "c. Small pathological specimens do not provide an overall picture of the lesion.",
                        "d. Pathological diagnosis is the basis for treatment policy.",
                        "e. DNA can be extracted from formalin-fixed paraffin-embedded (FFPE) tissue specimens."
                      ]
                    },
                    {
                      questionSentence: "Q26 Which gene has the highest frequency of therapeutic target gene abnormalities detected in Japanese lung adenocarcinoma?",
                      choices: [
                        "a. KRAS",
                        "b. BRAF",
                        "c. EGFR",
                        "d. HER2",
                        "e. ROS1"
                      ]
                    },
                    {
                      questionSentence: "Q27 Which of the following is correct? (Multiple choices possible)",
                      choices: [
                        "1. Humanized antibodies can reduce immune reactions to xenogeneic antibodies.",
                        "2. Tight junctions are composed of claudins.",
                        "3. Claudins are seven-pass transmembrane proteins.",
                        "4. Tight junctions create strong cell-cell adhesion in a calcium-dependent manner.",
                        "5. Tight junctions have barrier and fence functions, maintaining the microenvironment between cells."
                      ]
                    },
                    {
                      questionSentence: "Q28 Which of the following is correct? (Multiple choices possible)",
                      choices: [
                        "1. Treating cultured cells with anti-claudin antibodies causes cell damage via ADCC.",
                        "2. ADCC does not occur when anti-claudin antibodies are applied in a nude mouse experimental system.",
                        "3. Disruption of tumor tight junctions causes leakage of growth factors within the tumor, inhibiting proliferation.",
                        "4. Disruption of tumor tight junctions enhances the transfer of anticancer drugs into the tumor.",
                        "5. In antibody therapy, the expression level of the target protein does not correlate with the efficacy of the antibody."
                      ]
                    },
                    {
                      questionSentence: "Q29 Which of the following statements is correct about palliative care?",
                      choices: [
                        "a. Palliative care starts after cancer treatment is finished.",
                        "b. Palliative care should be provided not only to cancer patients but also to their families.",
                        "c. The concept of total pain is not advocated in Japanese palliative care.",
                        "d. Financial issues of cancer patients should be handled by other healthcare professionals, and doctors should focus on treatment.",
                        "e. WHO's definition of palliative care does not include spiritual care."
                      ]
                    },
                    {
                      questionSentence: "Q30 Which of the following statements about medical narcotics is correct?",
                      choices: [
                        "a. A patient complained of cancer pain, but the use of medical narcotics was refrained because the patient was undergoing anti-cancer treatment.",
                        "b. A patient complained of cancer pain, but the use of medical narcotics was refrained because the family strongly objected to their use.",
                        "c. When a patient complains of cancer pain, the use of medical narcotics should be actively considered.",
                        "d. When starting medical narcotics, the use of NSAIDs that had been used up to that point was discontinued.",
                        "e. The use of medical narcotics should be limited to terminal cancer patients."
                      ]
                    },
                    {
                      questionSentence: "Q31 Which of the following is correct about the course of the dying psychological stage advocated by Kübler Ross?",
                      choices: [
                        "a. Depression → denial → bargaining → anger → acceptance",
                        "b. Depression → anger → denial → acceptance",
                        "c. Denial → depression → bargaining → anger → acceptance",
                        "d. Denial → anger → depression → acceptance",
                        "e. Anger → depression → denial → acceptance"
                      ]
                    },
                    {
                      questionSentence: "Q32 Which of the following is correct?",
                      choices: [
                        "1. Delirium is often seen in the terminal stages of cancer.",
                        "2. Delirium is not considered a consciousness disorder.",
                        "3. The most common mental symptoms in cancer patients with adjustment disorders are hallucinations and depression.",
                        "4. In principle, drug therapy should not be performed for depression in cancer patients.",
                        "5. Apathy and drowsiness in cancer patients require consideration of depression and hypoactive delirium."
                      ]
                    },
                    {
                      questionSentence: "Q33 Which of the following combinations of cancer diseases or conditions and IVR is incorrect?",
                      choices: [
                        "a. Hepatocellular carcinoma - Transcatheter arterial embolization (TAE/TACE)",
                        "b. Obstructive jaundice - Stent placement",
                        "c. Metastatic osteolytic vertebral tumor - Percutaneous vertebroplasty/kyphoplasty",
                        "d. Esophageal obstruction/severe stenosis - Percutaneous endoscopic gastrostomy",
                        "e. Metastatic liver tumor - Percutaneous radiofrequency ablation"
                      ]
                    },
                    {
                      questionSentence: "Q34 Which of the following is incorrect?",
                      choices: [
                        "a. When performing continuous intra-arterial infusion therapy, an implanted device called a reservoir is inserted.",
                        "b. Arterial embolization is contraindicated for tumor thrombus in the main portal vein.",
                        "c. Intra-arterial infusion therapy achieves high local drug concentration at the lesion site and high local effect but has many side effects.",
                        "d. Intra-arterial chemotherapy is sometimes combined with systemic chemotherapy.",
                        "e. IVR is also useful for palliative treatment of cancer."
                      ]
                    },
                    {
                      questionSentence: "Q35 Which of the following combinations is correct?",
                      choices: [
                        "1. According to the Cancer Research Promotion Foundation's 'Cancer Statistics 22', breast cancer has the highest incidence and mortality among female cancers.",
                        "2. Breast-conserving therapy is a treatment that combines partial mastectomy and postoperative radiation therapy.",
                        "3. Regardless of the extent of the lesion, breast-conserving therapy is indicated for non-invasive cancer.",
                        "4. Postoperative irradiation for breast cancer requires careful attention to infection due to myelosuppression.",
                        "5. Severe radiation pneumonitis is common after postoperative irradiation for breast cancer."
                      ]
                    },
                    {
                      questionSentence: "Q36 Which of the following is correct?",
                      choices: [
                        "a. Squamous cell carcinoma is the most common skin cancer in Japanese people.",
                        "b. Surgery is the first choice of treatment for basal cell carcinoma and squamous cell carcinoma.",
                        "c. The buildup effect refers to the phenomenon where the dose is higher in a slightly deeper part than the skin surface when irradiated from the body surface.",
                        "d. Using bolus can increase the radiation sensitivity of skin cancer cells.",
                        "e. The purpose of radiation therapy for malignant skin tumors is mostly palliative."
                      ]
                    },
                    {
                      questionSentence: "Q37 Which of the following head and neck cancers is treated with chemoradiotherapy as the first choice rather than surgery?",
                      choices: [
                        "a. Thyroid cancer",
                        "b. Parotid gland cancer",
                        "c. Nasopharyngeal cancer",
                        "d. Oropharyngeal cancer",
                        "e. Hypopharyngeal cancer"
                      ]
                    },
                    {
                      questionSentence: "Q38 Which of the following gastrointestinal cancers is treated with definitive chemoradiotherapy as the first choice rather than surgery?",
                      choices: [
                        "a. Gastric cancer",
                        "b. Ileal cancer",
                        "c. Descending colon cancer",
                        "d. Anal cancer",
                        "e. Lower bile duct cancer"
                      ]
                    },
                    {
                      questionSentence: "Q39 Which of the following is correct?",
                      choices: [
                        "a. The main treatment for hematopoietic tumors is radiation therapy.",
                        "b. Hematopoietic tumors generally have low radiation sensitivity, requiring doses of 60Gy or more.",
                        "c. Total body irradiation is effective for treating lymphomas with multiple lesions throughout the body.",
                        "d. It is said that 50% of people die within 60 days if exposed to 4Gy of total body irradiation.",
                        "e. In total body irradiation, only acute adverse events are problematic."
                      ]
                    },
                    {
                      questionSentence: "Q40 Which of the following combinations is incorrect?",
                      choices: [
                        "1. The WHO classification of brain tumors combines morphological classification with genetic diagnosis.",
                        "2. A characteristic pathological finding of glioblastoma is the palisading arrangement of nuclei around necrotic foci.",
                        "3. Standard treatment for glioblastoma combines surgery, postoperative radiation therapy, and chemotherapy.",
                        "4. The standard dose for radiation therapy for glioblastoma is 25Gy/5 fractions.",
                        "5. The median survival time for glioblastoma is about 3 years."
                      ]
                    },
                    {
                      questionSentence: "Q41 Which of the following is the correct combination of parallel organs?",
                      choices: [
                        "a. Liver",
                        "b. Optic nerve",
                        "c. Brain stem",
                        "d. Spinal cord",
                        "e. Lung"
                      ]
                    },
                    {
                      questionSentence: "Q42 Which of the following statements is correct?",
                      choices: [
                        "a. Electron beams are used for the treatment of deep-seated tumors.",
                        "b. X-rays have the highest dose on the body surface and decrease as they go deeper.",
                        "c. Proton beams have a Bragg peak.",
                        "d. External radiation therapy uses beta rays and gamma rays generated by a linear accelerator.",
                        "e. Radiation therapy uses lower energy X-rays than radiation diagnosis."
                      ]
                    },
                    {
                      questionSentence: "Q43 After definitive radiation therapy for cervical cancer, which of the following adverse events appears the latest?",
                      choices: [
                        "a. Radiation sickness",
                        "b. Intestinal obstruction",
                        "c. Diarrhea",
                        "d. Skin redness",
                        "e. Frequent urination"
                      ]
                    },
                    {
                      questionSentence: "Q44 Which of the following radioactive isotopes is used for brachytherapy of prostate cancer?",
                      choices: [
                        "1. Radium-223",
                        "2. Yttrium-90",
                        "3. Gallium-67",
                        "4. Iridium-192",
                        "5. Iodine-125"
                      ]
                    },
                    {
                      questionSentence: "Q45 Which of the following is correct?",
                      choices: [
                        "a. Sarcoma is a malignant tumor of non-epithelial origin.",
                        "b. Irradiating 60Gy to water raises the water temperature by more than 1°C.",
                        "c. X-rays are charged particle beams and have a range.",
                        "d. Round cell sarcoma can be easily distinguished by hematoxylin-eosin staining alone.",
                        "e. Surgery is not performed for soft tissue sarcoma due to its radiosensitivity."
                      ]
                    },
                    {
                      questionSentence: "Q46 Which of the following schedules for palliative irradiation for bone metastases is least appropriate?",
                      choices: [
                        "a. 8Gy / 1 fraction",
                        "b. 20Gy / 5 fractions",
                        "c. 30Gy / 10 fractions",
                        "d. 37.5Gy / 15 fractions",
                        "e. 60Gy / 30 fractions"
                      ]
                    },
                    {
                      questionSentence: "Q47 For a disease with a prevalence of 1% among 1000 people, which of the following is correct when a screening test with 80% sensitivity and 80% specificity is conducted?",
                      choices: [
                        "1. 8 people with the disease will test positive.",
                        "2. 198 people will test positive.",
                        "3. 794 people without the disease will test negative.",
                        "4. The positive predictive value is about 96.2%.",
                        "5. The negative predictive value is about 99.7%."
                      ]
                    },
                    {
                      questionSentence: "Q48 Which of the following is incorrect?",
                      choices: [
                        "a. Serum P53 antibody is an autoantibody against overexpressed P53 protein.",
                        "b. PIVKA-II is elevated in patients administered warfarin (vitamin K antagonist).",
                        "c. HER2 expression in breast cancer tissue is a guideline for the use of molecular targeted therapies.",
                        "d. Most tumor markers are not useful for the early detection of primary cancer.",
                        "e. Tumor markers are not used to assess the effectiveness of surgery or chemotherapy."
                      ]
                    },
                    {
                      questionSentence: "Q49 Which of the following is incorrect?",
                      choices: [
                        "a. Organized cervical cancer screening targets individuals from the age of 20.",
                        "b. Overdiagnosis is one of the drawbacks of cancer screening.",
                        "c. Organized breast cancer screening includes mammography every two years.",
                        "d. Health screenings aim to detect specific diseases early for timely treatment.",
                        "e. Organized screenings aim to reduce mortality in the target population."
                      ]
                    },
                    {
                      questionSentence: "Q50 Which of the following is incorrect?",
                      choices: [
                        "a. Low-dose CT is used for organized lung cancer screening.",
                        "b. The participation rate in breast cancer screening in Japan is lower compared to Western countries.",
                        "c. Endoscopy is performed for organized gastric cancer screening.",
                        "d. Psychological burden is one of the drawbacks of cancer screening.",
                        "e. CT colonoscopy is performed for organized colorectal cancer screening."
                      ]
                    }
                  ]                  
        },
        {
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
