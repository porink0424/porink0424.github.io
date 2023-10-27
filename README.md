# porink0424-portfolio

## Stacks Summary

- Next.js
- TypeScript
- ESLint & Prettier
  - base: [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- Tailwind CSS
- [Mantine](https://mantine.dev/)
- [tabler-icons-react](https://tabler-icons-react.vercel.app/)
- [Jotai](https://jotai.org/)
- [react-use-scrollspy](https://github.com/Purii/react-use-scrollspy)

## Pre-requirements

```bash
❯ node --version
v20.8.1

❯ yarn --version
1.22.19
```

## Getting Started

Run the development server:

```bash
yarn dev
```

Build the app for production:

```bash
yarn build
```

and, output will be in `./out` directory.

## TODO

- dark mode 追加
- cssの整理
  - importantをなくすなど
- font変更？
- まじめにSSRを考える
  - "use client"をできるだけなくすなど
- SSRとしてのi18n対応
- colorの設定方法を見直す
- mantineの `List` において、`list-disc` を指定したときの横の挙動がおかしい問題がありそう
  - issuesに投げる？
