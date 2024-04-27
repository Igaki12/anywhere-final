import {
  useState
} from 'react'

export const useTechnicalTerm = () => {
  const [technicalTerm, setTechnicalTerm] = useState([
    // term[0]が代表名として大きく表示される。
    {
      term: ['フロマン徴候','Froment'],
      explanation: '両手の親指と人差し指で1枚の紙をつまんで引っ張りあったとき、尺骨神経麻痺が疑われる側の親指が曲がるかどうかを確認するものです（尺骨神経が麻痺すると、親指の内転筋力が低下し、つまむ状態を維持することができなくなります。)',
    },{
      term: ['せん妄','delirium'],
      explanation: '急性に起こる意識障害で、注意力の低下、思考の乱れ、感覚過敏、錯乱、幻覚、妄想、興奮、不安、不安定な気分、行動の変化などが特徴です。',
    },{
      term: ['前十字靭帯','ACL','anterior cruciate ligament'],
      explanation: '膝関節の前方に位置し、膝関節の内側にある内側側副靭帯と共に膝関節の安定性を保つ重要な靭帯です。前十字靭帯損傷は、スポーツなどの外傷により起こることが多いです。',
    },{
      term: ['後十字靭帯','PCL','posterior cruciate ligament'],
      explanation: '膝関節の後方に位置し、膝関節の外側にある外側側副靭帯と共に膝関節の安定性を保つ重要な靭帯です。後十字靭帯損傷は、膝関節の前方に強い衝撃を受けた際に起こることが多いです。',
    },{
      term: ['トンプソンテスト','Thompson test'],
      explanation: 'うつ伏せの状態で膝を直角に曲げふくらはぎを強くつまむテストです。アキレス腱断裂を疑う際に行われます。アキレス腱断裂の場合、テストを行っても足が動かないことが確認されます。',
    },{
      term: ['ジャクソンテスト','Jackson test','Jackson head compression test'],
      explanation: '頚部の神経根障害を調べる検査です。 一般的に、Jackson head compression testが、ジャクソンテストと言われています。患者が座位で、頭部を前屈させた状態で、頭部を圧迫すると、頚部の痛みが増強することが確認されます。',
    },{
      term: ['スプリングテスト','Spuling test'],
      explanation: '伏臥位になった患者さんの脊柱を、手掌部や手根部で押圧を加えては離してそのしなり具合を観察する検査法です。脊柱のしなりが異常である場合、椎間板ヘルニアや脊柱管狭窄症などが疑われます。',
    },{
      term: ['抗CCP抗体','anti-CCP antibody','抗サイクリックセチル化ペプチド抗体'],
      explanation: '関節リウマチの滑膜に存在するCCPという抗原を排除しようと形成される自己抗体です。関節リウマチの診断に用いられます。',
    },{
      term: ['PET検査','positron emission tomography-computed tomography','PET'],
      explanation: '放射性同位元素を用いて、体内の代謝活動や血流量を画像化する検査法です。FDG(fluorodeoxyglucose)という放射性フッ素を付加したブドウ糖を体内に投与し、がん細胞や炎症部位に集積することを利用しています。',
    },{
      term: ['シンチグラフィ','scintigraphy'],
      explanation:  '放射性同位元素（ラジオアイソトープ）で標識された薬剤を体内に投与後、放出される放射線を画像化することによって薬剤の分布を調べる検査です。 代表的な検査法に、骨シンチグラフィ:ヒドロキシメチレンジホスホン酸テクネチウム(99mTc)を用いた骨の代謝活動を調べる検査法や、ガリウムシンチグラフィ:ガリウム(67Ga)を用いた炎症部位の検査法があります。',
    },{
      term: ['肉腫','sarcoma'],
      explanation: '軟部組織に発生する悪性腫瘍の総称です。肉腫には、脂肪肉腫、平滑筋肉腫、横紋筋肉腫、線維肉腫、血管肉腫、悪性神経鞘腫などがあります。',
    },{
      term: ['乳児期','infancy'],
      explanation: '生後1か月から1歳までの時期を指します。乳児期は、新生児期から始まり、幼児期に移行する時期です。',
    },{
      term: ['幼児期','early childhood'],
      explanation: '1歳から6歳までの時期を指します。幼児期は、乳児期から始まり、児童期に移行する時期です。',
    },{
      term: ['児童期','childhood'],
      explanation: '6歳から12歳までの時期を指します。児童期は、幼児期から始まり、思春期に移行する時期です。',
    },{
      term: ['思春期','adolescence'],
      explanation: '12歳から18歳までの時期を指します。思春期は、児童期から始まり、青年期に移行する時期です。',
    },{
      term: ['青年期','youth'],
      explanation: '18歳から30歳までの時期を指します。青年期は、思春期から始まり、壮年期に移行する時期です。',
    },{
      term: ['壮年期','middle age'],
      explanation: '30歳から60歳までの時期を指します。壮年期は、青年期から始まり、老年期に移行する時期です。',
    },{
      term: ['老年期','old age'],
      explanation: '60歳以上の時期を指します。老年期は、壮年期から始まり、死期に移行する時期です。',
    },{
      term: ['底屈','plantar flexion','底屈運動'],
      explanation: '足首を下に曲げる動作を指します。底屈運動は、腓腹筋、腓骨筋、長母趾屈筋、短母趾屈筋などの筋肉が関与します。',
    },{
      term: ['背屈','dorsiflexion','背屈運動'],
      explanation: '足首を上に曲げる動作を指します。背屈運動は、前脛骨筋、長母趾伸筋、短母趾伸筋などの筋肉が関与します。',
    },{
      term: ['示指','index finger'],
      explanation: '手の指の中で、親指に続いて2番目に位置する指を指します。',
    },{
      term: ['環指','ring finger'],
      explanation: '手の指の中で、小指に続いて4番目に位置する指を指します。',
    },{
      term: ['リウマチ','rheumatoid arthritis'],
      explanation: '関節リウマチは、関節の炎症を特徴とする自己免疫疾患です。関節リウマチには、関節の炎症、関節の腫れ、関節の痛み、関節の動きの制限、関節の変形などが特徴です。',
    }
        // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
        // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
        // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },


  ])
  const showTechnicalTerm = () => {
    return technicalTerm.filter(
      (value) => value.term && value.term.length > 0,
    )
  }
  return {
    showTechnicalTerm,
  }
}