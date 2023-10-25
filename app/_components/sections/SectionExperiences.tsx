import { Language } from '@/app/_constants/language'
import { SECTION_EXPERIENCES } from '@/app/_contents/SectionExperiences'
import { parseText } from '@/app/_utils/parseText'
import { Text, Title, Stack, Image, SimpleGrid, AspectRatio, Box, Paper } from '@mantine/core'
import React from 'react'

type Props = {
  language: Language
  sectionRef: React.RefObject<HTMLDivElement>
}

function SectionExperiences({ language, sectionRef }: Props) {
  return (
    <Stack gap={48} ref={sectionRef} id='Experiences'>
      <Title order={1} className='!text-5xl'>
        Experiences
      </Title>

      <SimpleGrid cols={2} spacing={8}>
        {SECTION_EXPERIENCES.main[language].map(({ title, content }, index) => (
          <Stack key={index} gap={8}>
            <AspectRatio ratio={16 / 9}>
              <Box
                component='a'
                href={SECTION_EXPERIENCES.main.common[index].link}
                target='_blank'
                rel='noopener noreferrer'
                className='rounded-md overflow-hidden border border-[black] relative'
              >
                <Image
                  src={SECTION_EXPERIENCES.main.common[index].src}
                  alt={SECTION_EXPERIENCES.main.common[index].alt}
                  className='transition-transform duration-[0.5s] ease-[ease] hover:scale-110 min-w-full min-h-full'
                />
                <Box className='absolute bottom-3 !w-[calc(100%-2rem)] text-center bg-white rounded-full text-sm border border-[black] pointer-events-none font-bold'>
                  {title}
                </Box>
              </Box>
            </AspectRatio>
            <Text size='sm'>{content}</Text>
          </Stack>
        ))}
      </SimpleGrid>

      {[
        {
          subSection: 'Internship',
          data: SECTION_EXPERIENCES.internship[language],
        },
        {
          subSection: 'Part-Time Job',
          data: SECTION_EXPERIENCES.partTimeJob[language],
        },
        {
          subSection: 'Personal Projects',
          data: SECTION_EXPERIENCES.personalProjects[language],
        },
        {
          subSection: 'Educational Projects',
          data: SECTION_EXPERIENCES.educationalProjects[language],
        },
        {
          subSection: 'Hackathon Projects',
          data: SECTION_EXPERIENCES.hackathon[language],
        },
      ].map(({ subSection, data }, subSectionIndex) => (
        <Stack key={subSectionIndex} gap={20}>
          <Title order={2} className='!text-3xl'>
            {subSection}
          </Title>
          {data.map(({ title, period, content }, index) => (
            <Paper key={index} shadow='md' p='md' withBorder>
              <Title order={5}>{title}</Title>
              <Text size='sm' c='dimmed' mb={`${content.length > 0 ? 'md' : ''}`}>
                {period}
              </Text>
              <Text>{parseText(content)}</Text>
            </Paper>
          ))}
        </Stack>
      ))}
    </Stack>
  )
}

export default React.memo(SectionExperiences)
