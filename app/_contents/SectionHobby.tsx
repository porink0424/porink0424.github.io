import { LANGUAGES } from '../_constants/language'
import { LINK } from '../_constants/link'

export const SECTION_HOBBY = {
  main: {
    icons: ['🎮', '🪐', '🤾🏻‍♂️', '🍜'],
    [LANGUAGES.EN]: [
      {
        title: 'Games, Anime, Manga',
        content:
          'Games are always a part of my life. I especially like the Dragon Quest series. My favorite is Dragon Quest 11. Also, I recently got addicted to Tetris. Tetris pieces start spinning in my head when I\'m not thinking about anything. My love of Tetris led me to create a Tetris AI, but I have yet to be able to make it better than myself.\n\nAs for anime, I\'m more of a person who watches the same anime repeatedly than someone who cares a lot about different anime. I often get hooked on an anime and read the original work before the anime is finished. My favorite works from the past are "Dragon Ball," "Attack on Titan," and "Assassination Classroom." As for relatively recent(?) works, I like "Dr. STONE" and "Kaguya-sama: Love Is War."',
      },
      {
        title: 'Physics',
        content: `My favorite subject in high school was physics. I was fascinated by the fact that the equations that form the basis for predicting natural phenomena in this world can be expressed in a very concise way using mathematics (e.g., Newton's "equation of motion" and Maxwell's "equation of electromagnetism").\n\nAfter entering university, I continue to read physics books as a hobby and listen to lectures whenever possible. My favorite is "general theory of relativity." When I was an undergraduate, I was a writer for high school and university physics (I was an ["Introduction to Theoretical Physics for High School Students"](${LINK.MANABITIMES_PHYSICS}) founder). I hope to write articles on physics again someday.`,
      },
      {
        title: 'Handball, Soccer',
        content: `I played soccer in junior high school and handball in high school (I participated in the national tournament in high school [(List of participating schools)](${LINK.HANDBALL_LINK})). I like all kinds of ball games, both watching and playing. Japanese soccer has been very exciting recently, with young players performing well. As a fan, I'm pleased about this. I support Vegalta Sendai in the J-League and Brighton & Hove Albion in the Premier League.\n\nRecently, I've been going to the gym as much as possible because I no longer have many opportunities to play sports.`,
      },
      {
        title: 'Going around for ramen',
        content:
          'I like to eat ramen. I especially like Jiro-style ramen. My goal for now is to conquer all the Jiro-style ramen shops in Tokyo.',
      },
    ],
    [LANGUAGES.JP]: [
      {
        title: 'ゲーム・アニメ・漫画',
        content:
          'ゲームは常に自分の人生の一部です。特にドラクエシリーズが好きです。一番好きなのはドラクエ11です。また、最近はテトリスにもハマっています。ぼーっとしていると、頭の中でテトリスが回り始めます。好きが転じて、AIを作るようになりました。AIには早く自分を超えてほしいですが、まだまだ作りこめていません。\n\nアニメについて、色々なアニメを見るというよりは、好きなアニメを何度も見てしまう方です。アニメからハマって、アニメが完結する前に原作を読む、ということをよくやります。昔から好きな作品は「ドラゴンボール」「進撃の巨人」「暗殺教室」、比較的最近(?)の作品では「Dr.STONE」「かぐや様は告らせたい」あたりがお気に入りです。',
      },
      {
        title: '物理学',
        content: `高校時代、一番好きだった科目は物理でした。この世の自然現象の予測の根拠となる式が、数学という道具を使うことで非常に簡潔な形式で表現できる（力学の「運動方程式」、電磁気学の「マクスウェル方程式」など）ことに、すごくロマンを感じていました。\n\n大学に入ってからも、趣味として気長に物理学の本を読んだり、機会があれば講義を聞いたりしています。一般相対性理論が一番好きです。学部の頃は、高校・大学物理のライターをやっていました（[「高校生から味わう理論物理入門」](${LINK.MANABITIMES_PHYSICS})の創設者です）。またいつか再開できたらいいなと思っています。`,
      },
      {
        title: 'ハンドボール・サッカー',
        content: `中学時代にはサッカー、高校時代にはハンドボールをやっていました(高校では全国大会に出場しました [(出場校リスト)](${LINK.HANDBALL_LINK}))。球技全般、見るのもやるのも好きです。日本サッカーは、近年の若手の活躍が目覚ましく、一ファンとして非常に嬉しい限りです。Jリーグではベガルタ仙台を、プレミアリーグではBrighton & Hove Albionを応援しています。\n\n最近はスポーツをする機会も減ってきてしまったので、ジムにできるだけ通うようにしています。`,
      },
      {
        title: 'ラーメン巡り',
        content:
          '一人でラーメンを食べにいくのが好きです。特に二郎系ラーメンをよく食べます。当分の目標は、東京都内の二郎系ラーメン店を全て制覇することです。',
      },
    ],
  },
} as const
