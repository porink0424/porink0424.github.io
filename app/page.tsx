'use client'

import { Box, Space } from '@mantine/core'
import useScrollSpy from 'react-use-scrollspy'
import { useEffect, useRef } from 'react'
import { useViewportSize } from '@mantine/hooks'
import { useAtom, useSetAtom } from 'jotai'
import { useSearchParams } from 'next/navigation'
import SectionTop from './_components/sections/SectionTop'
import { activeSectionAtom, languageAtom } from './_stores/atoms'
import SectionAbout from './_components/sections/SectionAbout'
import SectionExperiences from './_components/sections/SectionExperiences'
import SectionResearch from './_components/sections/SectionResearch'
import SectionHobby from './_components/sections/SectionHobby'
import ScrollToTopButton from './_components/ScrollToTopButton'
import { LANGUAGES, Language } from './_constants/language'
import { PARAMS } from './_constants/params'

export default function Home() {
  const { height } = useViewportSize()
  const setActiveSection = useSetAtom(activeSectionAtom)
  const [language, setLanguage] = useAtom(languageAtom)
  const searchParams = useSearchParams()

  useEffect(() => {
    if (searchParams.has(PARAMS.LANG)) {
      const lang = searchParams.get(PARAMS.LANG)
      if (Object.values(LANGUAGES).includes(lang as Language)) {
        setLanguage(lang as Language)
      }
    }
  }, [searchParams, setLanguage])

  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ]
  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -height / 2,
  })

  useEffect(() => {
    if (activeSection === undefined) return
    setActiveSection(activeSection)
  }, [activeSection, setActiveSection])

  return (
    <>
      <Box maw={720} className='!mx-[2%] md:!mx-auto'>
        <SectionTop />
        <Space h={60} />
        <SectionAbout sectionRef={sectionRefs[0]} language={language} />
        <Space h={100} />
        <SectionExperiences sectionRef={sectionRefs[1]} language={language} />
        <Space h={100} />
        <SectionResearch sectionRef={sectionRefs[2]} language={language} />
        <Space h={100} />
        <SectionHobby sectionRef={sectionRefs[3]} language={language} />
        <Space h={100} />
      </Box>
      <ScrollToTopButton />
    </>
  )
}
