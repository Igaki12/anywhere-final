
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
            }
        ],},{
            groupTag : "周産期医学 出席課題",
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
