
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
                    questionSentence: '異状死と認めた場合、いつまでに所轄警察署に届 け出なければならないか。',
                    choices: ['直ちに', '12時間以内', '24時間以内', '1週間以内', '翌月の10日まで'],
                    answer: '24時間以内',
            },{
                detailInfo: '4/26 (2)',
                questionSentence: '異状死体に該当しないのはどれか。',
                choices: ['農薬中毒によると思われる死体', '他傷後の続発症によると思われる死体', '異型輸血によると思われる死体', '処方された薬の誤嚥によると思われる死体', '肺癌患者の喀血によると思われる死体'],
                answer: '肺癌患者の喀血によると思われる死体',
            },{
                detailInfo: '4/26 (3)',
                questionSentence: '69歳の男性。一人暮らし。肺癌の末期で在宅療養中であり、週3回の往診を受けていた。往診担当医が午後5時に患者宅に行くと、寝室のベッド上で仰臥位のまま死亡していた。外傷はなく、肺癌で死亡したと判断された。直腸温30.0°C。室温22.0°C。紫赤色の死斑を背面に認め、指圧で容易に消退する。硬直を全身の各関節に認めるが、四肢関節の硬直は軽度である。死亡推定時刻として適切なのはどれか。',
                choices: ['前日の午前9時頃', '前日の午後3時頃', '前日の午後9時頃', '当日の午前3時頃', '当日の午前9時頃'],
                answer: '当日の午前9時頃',
            },{
                detailInfo: '4/26 (4)',
                questionSentence: '5月某日の午前10時に頭しているのを発見され、すぐに布団に寝かされた死体、警察へは翌朝通報され、午前10時に検視を行った。体温は室温と同じ20°C硬直は全身の関節で強く、死斑は背中に濃く出ている、下肢の皮膚に死斑の名残りの溢血点が見られる。腹部の腐敗変色は見られない、適切な死亡推定時刻はどれか。',
                choices: ['検視の前日の午前10時頃', '検視の前日の午前4時頃', '検視の前々日の午後10時頃', '検視の前々日の午前10時頃', '検視の3日前の午前10時頃'],
                answer: '検視の前々日の午後10時頃',
            },{
                detailInfo: '4/26 (5)',
                questionSentence: '死亡時刻を推定するのに役立つ所見はどれか, 2つ選べ。',
                choices: ['死斑の色調', '死体硬直の程度', '角膜混濁の程度', '瞳孔の大きさ', '腋窩温'],
                answer: '死斑の色調、死体硬直の程度',
            },
        ],}
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
