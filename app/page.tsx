'use client'

import { Box, Space } from '@mantine/core'
import useScrollSpy from 'react-use-scrollspy'
import { useEffect, useRef } from 'react'
import { useViewportSize } from '@mantine/hooks'
import { useAtomValue, useSetAtom } from 'jotai'
import SectionTop from './_components/sections/SectionTop'
import { activeSectionAtom, languageAtom } from './_stores/atoms'
import SectionAbout from './_components/sections/SectionAbout'
import SectionExperiences from './_components/sections/SectionExperiences'
import SectionResearch from './_components/sections/SectionResearch'
import SectionHobby from './_components/sections/SectionHobby'
import ScrollToTopButton from './_components/ScrollToTopButton'

export default function Home() {
  const { height } = useViewportSize()
  const setActiveSection = useSetAtom(activeSectionAtom)
  const language = useAtomValue(languageAtom)

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
