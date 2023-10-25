import { LANGUAGES } from '../_constants/language'

export const SECTION_RESEARCH = {
  interest: {
    [LANGUAGES.EN]: [
      {
        title: 'Emergent Language',
        contents: [
          'I am researching the field of "Emergent Language," where I analyze artificially generated languages by having agents composed of neural networks talk to each other.',
          'I plan to use agents that mimic the way how humans understand languages to create something like the grammatical structure of natural languages in "Emergent Language."',
        ],
      },
    ],
    [LANGUAGES.JP]: [
      {
        title: '創発言語',
        contents: [
          'ニューラルネットワークで構成されたエージェント同士に会話させ、人工的に発生させた言語を解析する「創発言語」の分野を研究しています。',
          '人間の言語理解の仕方を模倣したエージェントを使って、「創発言語」の中に、自然言語の文法構造のようなものを創発させられないか、構想しています。',
        ],
      },
    ],
  },
  publications: {
    [LANGUAGES.EN]: [
      {
        title: 'Domestic Conference (Non-refereed)',
        contents: [
          '**Daichi Kato**, Ryo Ueda, Yusuke Miyao.\n「簡素な創発言語接触モデルで生じる言語のクレオール単純性と構成性」\nJSAI2023. [(paper)](https://www.jstage.jst.go.jp/article/pjsai/JSAI2023/0/JSAI2023_4H2OS6a03/_article/-char/ja)',
          '**Daichi Kato**, Ryo Ueda, Yusuke Miyao.\n「簡素なモデルでの創発言語の接触によるクレオール単純化の再現」\nNLP2023. [(paper)](https://www.anlp.jp/proceedings/annual_meeting/2023/pdf_dir/P9-5.pdf)',
        ],
      },
    ],
    [LANGUAGES.JP]: [
      {
        title: '国内学会 (査読なし)',
        contents: [
          '**加藤大地**, 上田亮, 宮尾祐介.\n「簡素な創発言語接触モデルで生じる言語のクレオール単純性と構成性」\n人工知能学会第37回全国大会(JSAI2023). [(paper)](https://www.jstage.jst.go.jp/article/pjsai/JSAI2023/0/JSAI2023_4H2OS6a03/_article/-char/ja)',
          '**加藤大地**, 上田亮, 宮尾祐介.\n「簡素なモデルでの創発言語の接触によるクレオール単純化の再現」\n言語処理学会第29回年次大会(NLP2023). [(paper)](https://www.anlp.jp/proceedings/annual_meeting/2023/pdf_dir/P9-5.pdf)',
        ],
      },
    ],
  },
} as const
