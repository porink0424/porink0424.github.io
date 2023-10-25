export type Language = (typeof LANGUAGES)[keyof typeof LANGUAGES]

export const LANGUAGES = {
  EN: 'en',
  JP: 'jp',
} as const

export const LANGUAGES_DISPLAY = {
  [LANGUAGES.EN]: 'English',
  [LANGUAGES.JP]: '日本語',
} as const
