import { Language } from '@/app/_constants/language'
import { SECTION_RESEARCH } from '@/app/_contents/SectionResearch'
import { parseText } from '@/app/_utils/parseText'
import { Text, Title, Stack } from '@mantine/core'
import React from 'react'

type Props = {
  language: Language
  sectionRef: React.RefObject<HTMLDivElement>
}

function SectionResearch({ language, sectionRef }: Props) {
  return (
    <Stack gap={48} ref={sectionRef} id='Research'>
      <Title order={1} className='!text-5xl'>
        Research
      </Title>

      {[
        {
          subSection: 'Interest',
          data: SECTION_RESEARCH.interest[language],
        },
        {
          subSection: 'Publications',
          data: SECTION_RESEARCH.publications[language],
        },
      ].map(({ subSection, data }, subSectionIndex) => (
        <Stack key={subSectionIndex} gap={20}>
          <Title order={2} className='!text-3xl'>
            {subSection}
          </Title>

          {data.map(({ title, contents }, index) => (
            <Stack key={index} gap={14} className='!ml-6'>
              <Title order={5} className='!text-md'>
                {title}
              </Title>
              {contents.map((content, contentIndex) => (
                <Text key={contentIndex}>{parseText(content)}</Text>
              ))}
            </Stack>
          ))}
        </Stack>
      ))}
    </Stack>
  )
}

export default React.memo(SectionResearch)
