import { BrandCpp, Mist, School, Terminal2 } from 'tabler-icons-react'
import { LANGUAGES } from '../_constants/language'

export const SECTION_ABOUT = {
  profile: {
    [LANGUAGES.EN]: [
      '**Name** : Daichi Kato (加藤 大地)',
      '**Affiliation** : Department of Computer Science, Graduate School of Information Science and Technology, The University of Tokyo, Master 2nd',
      '**Major** : Natural Language Processing (NLP)',
    ],
    [LANGUAGES.JP]: [
      '名前 : 加藤 大地 (Daichi Kato)',
      '所属 : 東京大学 情報理工学系研究科 コンピュータ科学専攻 修士2年',
      '専攻 : 自然言語処理 (NLP)',
    ],
  },
  history: {
    [LANGUAGES.EN]: [
      {
        title: 'Born in Miyagi, Japan',
        period: '2001/02',
      },
      {
        title: 'Sendai Daini High School, Miyagi, Japan',
        period: '2016/04 ~ 2019/03',
      },
      {
        title: 'Department of Information Science, The University of Tokyo, Japan',
        period: '2019/04 ~ 2023/03',
      },
      {
        title:
          'Department of Computer Science, Graduate School of Information Science and Technology, The University of Tokyo, Japan',
        period: '2023/04 ~ Present',
      },
    ],
    [LANGUAGES.JP]: [
      {
        title: '宮城県で生まれる',
        period: '2001/02',
      },
      {
        title: '宮城県 仙台第二高等学校',
        period: '2016/04 ~ 2019/03',
      },
      {
        title: '東京大学 理科一類・理学部情報科学科',
        period: '2019/04 ~ 2023/03',
      },
      {
        title: '東京大学大学院 情報理工学系研究科コンピュータ科学専攻',
        period: '2023/04 ~ 現在',
      },
    ],
  },
  skills: {
    icons: [
      <Terminal2 size={30} />,
      <School size={30} />,
      <BrandCpp size={30} />,
      <Mist size={30} />,
    ],
    [LANGUAGES.EN]: [
      {
        title: 'As a developer,',
        items: [
          'TypeScript & React & Next.js, Vue.js',
          'HTML/CSS',
          'PHP & Laravel',
          'AWS, GCP',
          'Three.js, Phaser',
        ],
      },
      {
        title: 'For research, machine learning, competitive programming, and personal development,',
        items: ['Python & PyTorch', 'Unity (with C#)', 'Flutter, Dart'],
      },
      {
        title: 'For low-layer development and environments that require processing speed,',
        items: ['Rust', 'C, C++', 'OCaml'],
      },
      {
        title: 'MISC:',
        items: ['Applied Information Technology Engineer Examination (2023/06)'],
      },
    ],
    [LANGUAGES.JP]: [
      {
        title: '開発エンジニアとして',
        items: [
          'TypeScript & React & Next.js, Vue.js',
          'HTML/CSS',
          'PHP & Laravel',
          'AWS, GCP',
          'Three.js, Phaser',
        ],
      },
      {
        title: '研究、機械学習、競プロ、趣味の開発で',
        items: ['Python & PyTorch', 'Unity (with C#)', 'Flutter, Dart'],
      },
      {
        title: '低レイヤーな実装、処理速度が求められる環境で',
        items: ['Rust', 'C, C++', 'OCaml'],
      },
      {
        title: 'その他',
        items: ['応用情報技術者試験 (2023/06)'],
      },
    ],
  },
} as const
