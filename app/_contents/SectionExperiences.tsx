import { LANGUAGES } from '../_constants/language'
import { LINK } from '../_constants/link'

export const SECTION_EXPERIENCES = {
  main: {
    common: [
      {
        link: LINK.PFN_BLOG,
        src: '/pfn.jpg',
        alt: 'pfn internship blog',
      },
      {
        link: LINK.METALIFE,
        src: '/metalife.jpg',
        alt: 'metalife',
      },
      {
        link: LINK.REVERSI,
        src: '/reversi.jpg',
        alt: 'reversi',
      },
      {
        link: LINK.PYTRIS,
        src: '/pytris.png',
        alt: 'pytris',
      },
      {
        link: LINK.MANABITIMES,
        src: '/manabitimes.jpg',
        alt: 'manabitimes',
      },
      {
        link: LINK.PYCAML,
        src: '/pycaml.jpg',
        alt: 'pycaml',
      },
    ],
    [LANGUAGES.EN]: [
      {
        title: 'Summer Internship at Preferred Networks Inc.',
        content:
          'During the PFN summer internship, I worked on developing an application to control multiple cameras for 4D Scan.',
      },
      {
        title: '2D Game-like Online Conversation Web Application "MetaLife"',
        content:
          'I have been involved in all phases of the project, including conceptualization, requirements definition, design, implementation, and maintenance.',
      },
      {
        title: 'Reversi AI Scratched in Rust & Three.js',
        content:
          'Logic is implemented in Rust and WebAssembly, and UI in React & Three.js. Quite strong.',
      },
      {
        title: 'Puyo Puyo Tetris AI Scratched in Python "py-tris"',
        content:
          'This AI runs on the application using OS APIs and other tools. It is also capable of playing against humans in the application.',
      },
      {
        title: 'Web Media "Shikaku Times" and "Manabi Times"',
        content:
          'I am responsible for both front and back-end implementation and maintenance of the websites and their CMS.',
      },
      {
        title: 'Compiler for the Subset of OCaml "pycaml"',
        content:
          'This compiler, built using Python and OCaml, incorporates optimizations based on programming language theory.',
      },
    ],
    [LANGUAGES.JP]: [
      {
        title: '株式会社Preferred Networksでのインターン',
        content:
          'PFNの夏季インターンで開発した、4D Scanのための複数台カメラを制御するアプリケーションです。',
      },
      {
        title: '2Dゲーム風オンライン会話Webアプリ「MetaLife」',
        content: '構想、要件定義、設計、実装、保守全てのフェーズに参加しています。',
      },
      {
        title: 'Rust & Three.js で動くリバーシAI',
        content:
          'ロジックの部分がRust and WebAssembly、UIの部分がReact & Three.jsで動く対戦型リバーシAIです。そこそこ強いです。',
      },
      {
        title: 'Pythonで動くぷよぷよテトリスAI「py-tris」',
        content:
          'OSのAPI等も駆使しつつ、実機上で実際に動くAIなので、人間と対戦することもできます。',
      },
      {
        title: 'Webメディア「資格Times」「学びTimes」',
        content: 'メディアサイトのみならず、CMSのフロント・バック両方の実装&保守を行なっています。',
      },
      {
        title: 'OCamlのサブセット言語用コンパイラ「pycaml」',
        content:
          'プログラム言語理論に基づく最適化も実装された、PythonとOCamlによるコンパイラです。',
      },
    ],
  },
  internship: {
    [LANGUAGES.EN]: [
      {
        title: 'Summer Internship at Preferred Networks Inc.',
        period: '2023/08 ~ 2023/09',
        content: `I worked on a project internship for about two months under the theme of "Web Application Development for Computer Vision." [(Blog Post)](${LINK.PFN_BLOG})`,
      },
      {
        title: 'Internship at DeNA Co., Ltd.',
        period: '2023/09',
        content:
          'I participated in a three-day short-term summer internship, working in a team to tackle technical challenges.',
      },
      {
        title: 'ML Engineer at Matsuo Institute Inc.',
        period: '2023/07 ~ 2024/01',
        content: 'I am developing a large language model (LLM).',
      },
      {
        title: 'Full Stack Engineer at Bend Inc.',
        period: '2020/12 ~ Present',
        content: `My primary focus is on front-end development. I am also deeply involved in various tasks, including back-end and server management.\n・Development of the game-like 2D communication web app, "[MetaLife](${LINK.METALIFE})"\n・Running "[Shikaku Times](${LINK.SHIKAKUTIMES})," "[Manabi Times](${LINK.MANABITIMES})"`,
      },
      {
        title: 'Front-End Engineer at teamLab',
        period: '2023/02 ~ 2023/03',
        content:
          'I participated in a two-week short-term internship and joined the front-end development team to work on practical tasks.\n・System replacement of a website\n・Participation in both internal and external meetings\n・Webview implementation for a new app',
      },
      {
        title: 'Infrastructure Engineer at PKSHA Technology Inc.',
        period: '2024/03 ~ 2024/04',
        content: '',
      },
    ],
    [LANGUAGES.JP]: [
      {
        title: '株式会社Preferred Networks 夏季インターン',
        period: '2023/08 ~ 2023/09',
        content: `「コンピュータビジョンのためのウェブアプリケーション開発」というテーマで、約二ヶ月のプロジェクトインターンを行いました[(ブログ記事)](${LINK.PFN_BLOG})。`,
      },
      {
        title: '株式会社ディー・エヌ・エー 夏季短期インターン',
        period: '2023/09',
        content: 'チームを組んで技術課題に挑む、3日間の短期夏季インターンシップに参加しました。',
      },
      {
        title: '株式会社松尾研究所 MLエンジニア',
        period: '2023/07 ~ 2024/01',
        content: '大規模言語モデル (LLM) の開発を行なっています。',
      },
      {
        title: '株式会社ベンド フルスタックエンジニア',
        period: '2020/12 ~ 現在',
        content: `フロントエンドを中心に、バックエンド・サーバー等広く業務に携わっています。\n・ゲームライクな2DコミュニケーションWebアプリ「[MetaLife](${LINK.METALIFE})」の開発\n・「[資格Times](${LINK.SHIKAKUTIMES})」「[学びTimes](${LINK.MANABITIMES})」の運用`,
      },
      {
        title: 'チームラボ株式会社 フロントエンドエンジニア',
        period: '2023/02 ~ 2023/03',
        content:
          '2週間の短期インターンに参加し、フロントエンドサイドの開発チームに参加して、実務に取り組みました。\n・Webサイトのシステムリプレース\n・内部・外部のミーティング参加\n・新規アプリのWebView実装',
      },
      {
        title: '株式会社 PKSHA Technology インフラエンジニア',
        period: '2024/03 ~ 2024/04',
        content: '',
      },
    ],
  },
  partTimeJob: {
    [LANGUAGES.EN]: [
      {
        title: 'Part-time engineer at Preferred Networks Inc.',
        period: '2024/02 ~ Present',
        content: `I am involved in the development of [Optuna](${LINK.OPTIUNA}) and [Optuna-Dashboard](${LINK.OPTUNA_DASHBOARD}).`,
      },
      {
        title: 'Part-time job at Cygames Inc.',
        period: '2021/08 ~ 2024/02',
        content: '',
      },
    ],
    [LANGUAGES.JP]: [
      {
        title: '株式会社Preferred Networks パートタイムエンジニア',
        period: '2024/02 ~ 現在',
        content: `[Optuna](${LINK.OPTIUNA}), [Optuna-Dashboard](${LINK.OPTUNA_DASHBOARD})の開発に携わっています。`,
      },
      {
        title: '株式会社Cygames アルバイト',
        period: '2021/08 ~ 2024/02',
        content: '',
      },
    ],
  },
  personalProjects: {
    [LANGUAGES.EN]: [
      {
        title:
          'Development of an automatic dubbing system that retains the original essence of Japanese anime',
        period: '',
        content: `I am developing a system that can automatically generate a dubbed version of an anime that retains the original essence of the Japanese version. This project has been adopted by the [Kakusei Project](${LINK.KAKUSEI}) of AIST and [TODAI TO TEXAS](${LINK.TTT}) of the University of Tokyo.`,
      },
      {
        title: 'Puyo Puyo Tetris AI',
        period: '',
        content: `I created an AI that runs in the "Puyo Puyo Tetris" game with my university classmates. It works as follows: Information extraction by reading memory → Movement decision by rule-based algorithm → Input via a virtual controller. [(Source Code)](${LINK.PYTRIS})`,
      },
      {
        title: 'Reversi AI',
        period: '',
        content: `Logic is implemented in Rust and WebAssembly, and UI in React & Three.js. Although I am a beginner in Reversi, I looked for established tactics, rules of thumb, etc., and realized them as a bot. You can play the DEMO [here](${LINK.REVERSI_DEMO}). [(Source Code)](${LINK.REVERSI})`,
      },
      {
        title: 'Mini-Compiler for the subset language of C-lang (WIP)',
        period: '',
        content: `Along with Rui Ueyama's article, I am implementing a compiler in Rust that compiles a subset language of C-lang into a RISC-V-based assembly. [(Source Code)](${LINK.DCC})`,
      },
    ],
    [LANGUAGES.JP]: [
      {
        title: '日本語版の世界観を崩さないアニメの自動吹き替えシステムの開発',
        period: '',
        content: `大学の学科同期と一緒に、日本語版の世界観をそのまま引き継いだ翻訳版アニメを、自動で生成できるシステムの開発を行っています。本プロジェクトは、産総研の [「覚醒」プロジェクト](${LINK.KAKUSEI})、東京大学の [TODAI TO TEXAS](${LINK.TTT}) に採択されています。`,
      },
      {
        title: 'ぷよぷよテトリスAI',
        period: '',
        content: `大学の同期と、ゲームソフト「ぷよぷよテトリス」内で動く、AIを作成しました。メモリ読み込みによる情報抽出→ルールベースのアルゴリズムによる動きの決定→仮想コントローラーから入力という流れで動きます。[(ソースコード)](${LINK.PYTRIS})`,
      },
      {
        title: 'リバーシAI',
        period: '',
        content: `ロジックの部分がRust and WebAssembly、UIの部分がReact & Three.jsで動く対戦型リバーシAIです。自分はオセロ初心者ですが、定石や経験則等を調べて、Botとして実現しました。[こちらのページ](${LINK.REVERSI_DEMO})でDEMOをいじることができます。[(ソースコード)](${LINK.REVERSI})`,
      },
      {
        title: 'C言語のサブセット用のミニコンパイラ (WIP)',
        period: '',
        content: `Rui Ueyamaさんの記事に沿って、C言語のサブセット言語をRISC-Vベースのアセンブリにコンパイルするコンパイラを、Rustで実装中です。[(ソースコード)](${LINK.DCC})`,
      },
    ],
  },
  educationalProjects: {
    [LANGUAGES.EN]: [
      {
        title: '100 Program Alumni Mentor (5th period)',
        period: '2024/01 ~ 2024/03',
        content: `I was a finalist in the 1st period of [100 Program](${LINK.HUNDRED_PROGRAM}) and worked as an alumni mentor in the 5th period.`,
      },
      {
        title: 'Teaching Assistant for "Complexity Theory Exercise"',
        period: '2023/10 ~ 2024/01',
        content: '',
      },
      {
        title: 'Compiler for the subset language of OCaml',
        period: '',
        content: `In the "CPU Experiment," in which a team of four people creates a CPU architecture to run a given program, in my role as a compiler developer, I built a compiler for the subset language of OCaml. I implemented this in Python and OCaml. [(Source Code)](${LINK.PYCAML})`,
      },
    ],
    [LANGUAGES.JP]: [
      {
        title: '100 Program アラムナイ・メンター',
        period: '2024/01 ~ 2024/03',
        content: `[100 Program](${LINK.HUNDRED_PROGRAM})の1期ファイナリストであり、5期ではアラムナイ・メンターとして活動しました。`,
      },
      {
        title: '計算量理論演習のTA',
        period: '2023/10 ~ 2024/01',
        content: '',
      },
      {
        title: 'OCamlのサブセット用のコンパイラ',
        period: '',
        content: `チーム4人で課題プログラムを動かすCPUアーキテクチャを作る「CPU実験」の中で、コンパイラ係として、OCamlのサブセット言語のコンパイラを作成しました。PythonとOCamlで実装しました。[(ソースコード)](${LINK.PYCAML})`,
      },
    ],
  },
  hackathon: {
    [LANGUAGES.EN]: [
      {
        title:
          "The 18th Symposium of Young Researcher Association for NLP Studies (YANS) 2023 (Excellence Award & Jury's Special Award Winner)",
        period: '2023/08',
        content: `At YANS2023, we participated in a hackathon to develop a web application using the OpenAI API. We won two awards, the Excellence Award and the Jury's Special Award. [(link)](${LINK.YANS_2023_LINK})`,
      },
      {
        title: 'Benesse EdTech Hackathon (Audience Award Winner)',
        period: '2023/07',
        content: `With the theme of "an app that promotes next-generation learning for children," we consistently experienced from planning to development in two days. We used Flutter to develop this app. We won the Audience Award as voted by the participants. [(Source Code)](${LINK.BENESSE})`,
      },
    ],
    [LANGUAGES.JP]: [
      {
        title: 'NLP若手の会(YANS)2023ハッカソン（優秀賞・審査員特別賞）',
        period: '2023/08',
        content: `YANS2023において、OpenAI APIを利用したWebアプリを開発するハッカソンに参加しました。優秀賞、審査員特別賞の二冠を達成しました。[(リンク)](${LINK.YANS_2023_LINK})`,
      },
      {
        title: 'ベネッセEdTechハッカソン（オーディエンス賞）',
        period: '2023/07',
        content: `『中高生にとって、次世代の学習を促進するようなアプリ』をテーマに、Flutterを用いて「企画」から「開発」まで2日間で行いました。参加者の投票により、オーディエンス賞を受賞しました。[(ソースコード)](${LINK.BENESSE})`,
      },
    ],
  },
} as const
