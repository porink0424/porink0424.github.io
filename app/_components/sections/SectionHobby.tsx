import { Language } from '@/app/_constants/language'
import { SECTION_HOBBY } from '@/app/_contents/SectionHobby'
import { parseText } from '@/app/_utils/parseText'
import {
  Title,
  Stack,
  Accordion,
  AccordionItem,
  AccordionControl,
  AccordionPanel,
} from '@mantine/core'
import React from 'react'

type Props = {
  language: Language
  sectionRef: React.RefObject<HTMLDivElement>
}

function SectionHobby({ language, sectionRef }: Props) {
  return (
    <Stack gap={48} ref={sectionRef} id='Hobby'>
      <Title order={1} className='!text-5xl'>
        Hobby
      </Title>

      <Accordion multiple className='px-4'>
        {SECTION_HOBBY.main[language].map(({ title, content }, index) => (
          <AccordionItem key={index} value={title}>
            <AccordionControl
              icon={SECTION_HOBBY.main.icons[index]}
              classNames={{
                icon: 'text-3xl',
              }}
            >
              {title}
            </AccordionControl>
            <AccordionPanel>{parseText(content)}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Stack>
  )
}

export default React.memo(SectionHobby)
