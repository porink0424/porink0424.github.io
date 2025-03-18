import { LANGUAGES } from '../_constants/language'
import { LINK } from '../_constants/link'

export const SECTION_RESEARCH = {
  interest: {
    [LANGUAGES.EN]: [
      {
        title: 'Emergent Communication',
        contents: [
          'I am researching "Emergent Communication" field, where I analyze artificially generated languages by having agents composed of neural networks talk to each other.',
        ],
      },
    ],
    [LANGUAGES.JP]: [
      {
        title: '言語創発',
        contents: [
          'ニューラルネットワークで構成されたエージェント同士に会話させ、人工的に発生させた言語を解析する「創発言語」の分野を研究しています。',
        ],
      },
    ],
  },
  publications: {
    [LANGUAGES.EN]: [
      {
        title: 'International Conference (Refereed)',
        contents: [
          `**Daichi Kato**, Ryo Ueda, Jason Naradowsky, Yusuke Miyao.\n"Emergent Communication with Stack-Based Agents"\nCogSci2024. [(paper)](${LINK.COGSCI_2024_PAPER})`,
        ],
      },
      {
        title: 'Domestic Conference (Non-refereed)',
        contents: [
          `**Daichi Kato**, Ryo Ueda, Yusuke Miyao.\n「メッセージの階層構造を把握するための parsing action がランダムではないのはなぜか？」\nNLP2025. [(paper)](${LINK.NLP_2025_PAPER}) [(Committee Award)](${LINK.NLP_2025_COMMITTEE_AWARD})`,
          `Masatoshi Otake, **Daichi Kato**, Yuto Nozaki, Satoshi Hirooka, Yusuke Miyao, Asako Kanezaki.\n"Construction of a Video Translation Dataset with Added Character Personality and Interpersonal Relationship Information"\nJSAI2024. [(paper)](${LINK.JSAI_2024_PAPER})`,
          `**Daichi Kato**, Ryo Ueda, Yusuke Miyao.\n「RL-SPINNを用いた創発言語の汎化性能の評価」\nNLP2024. [(paper)](${LINK.NLP_2024_PAPER})`,
          `**Daichi Kato**, Ryo Ueda, Yusuke Miyao.\n"Creole Simplicity and Compositionality of the Languages Arising in a Plain Emergent Language Contact Model"\nJSAI2023. [(paper)](${LINK.JSAI_2023_PAPER})`,
          `**Daichi Kato**, Ryo Ueda, Yusuke Miyao.\n「簡素なモデルでの創発言語の接触によるクレオール単純化の再現」\nNLP2023. [(paper)](${LINK.NLP_2023_PAPER})`,
        ],
      },
    ],
    [LANGUAGES.JP]: [
      {
        title: '国際学会 (査読あり)',
        contents: [
          `**Daichi Kato**, Ryo Ueda, Jason Naradowsky, Yusuke Miyao.\n"Emergent Communication with Stack-Based Agents"\nCogSci2024. [(paper)](${LINK.COGSCI_2024_PAPER})`,
        ],
      },
      {
        title: '国内学会 (査読なし)',
        contents: [
          `**加藤大地**, 上田亮, 宮尾祐介.\n「メッセージの階層構造を把握するための parsing action がランダムではないのはなぜか？」\n言語処理学会第31回年次大会(NLP2025). [(paper)](${LINK.NLP_2025_PAPER}) [(委員特別賞)](${LINK.NLP_2025_COMMITTEE_AWARD})`,
          `大嶽 匡俊, **加藤大地**, 野崎 雄斗, 廣岡 聖司, 宮尾 祐介, 金崎 朝子.\n「キャラクターの性格と人間関係情報を付加した映像翻訳データセットの構築」\n人工知能学会第38回全国大会(JSAI2024). [(paper)](${LINK.JSAI_2024_PAPER})`,
          `**加藤大地**, 上田亮, 宮尾祐介.\n「RL-SPINNを用いた創発言語の汎化性能の評価」\n言語処理学会第30回年次大会(NLP2024). [(paper)](${LINK.NLP_2024_PAPER})`,
          `**加藤大地**, 上田亮, 宮尾祐介.\n「簡素な創発言語接触モデルで生じる言語のクレオール単純性と構成性」\n人工知能学会第37回全国大会(JSAI2023). [(paper)](${LINK.JSAI_2023_PAPER})`,
          `**加藤大地**, 上田亮, 宮尾祐介.\n「簡素なモデルでの創発言語の接触によるクレオール単純化の再現」\n言語処理学会第29回年次大会(NLP2023). [(paper)](${LINK.NLP_2023_PAPER})`,
        ],
      },
    ],
  },
} as const
