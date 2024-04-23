import { atom } from 'jotai'
import { LANGUAGES, Language } from '../_constants/language'

export const activeSectionAtom = atom(0)
export const languageAtom = atom<Language>(LANGUAGES.EN)
export const menuOpenAtom = atom(false)
