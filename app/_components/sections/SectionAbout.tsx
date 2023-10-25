import { Language } from '@/app/_constants/language'
import { SECTION_ABOUT } from '@/app/_contents/SectionAbout'
import { Text, Title, Stack, List, ListItem, Timeline, TimelineItem, Box } from '@mantine/core'
import React from 'react'
import SnsIcons from '../SnsIcons'

type Props = {
  language: Language
  sectionRef: React.RefObject<HTMLDivElement>
}

function SectionAbout({ language, sectionRef }: Props) {
  return (
    <Stack gap={48} ref={sectionRef} id='About'>
      <Title order={1} className='!text-5xl'>
        About
      </Title>

      <Stack gap={20}>
        <Title order={2} className='!text-3xl'>
          Profile
        </Title>

        <List withPadding className='list-disc'>
          {SECTION_ABOUT.profile[language].map((text, index) => (
            <ListItem key={index}>{text}</ListItem>
          ))}
        </List>

        <Box className='ml-4'>
          <SnsIcons />
        </Box>
      </Stack>

      <Stack gap={20}>
        <Title order={2} className='!text-3xl'>
          History
        </Title>

        <Timeline active={100} lineWidth={4} bulletSize={24} className='ml-4'>
          {SECTION_ABOUT.history[language].map(({ title, period }, index) => (
            <TimelineItem key={index} title={title}>
              <Text size='sm'>{period}</Text>
            </TimelineItem>
          ))}
        </Timeline>
      </Stack>

      <Stack gap={20}>
        <Title order={2} className='!text-3xl'>
          Skills
        </Title>

        {SECTION_ABOUT.skills[language].map(({ title, items }, index) => (
          <List key={index} withPadding>
            <ListItem icon={SECTION_ABOUT.skills.icons[index]}>
              <Text fw={600} size='lg'>
                {title}
              </Text>
            </ListItem>
            <List withPadding className='!ml-7'>
              {items.map((item, itemIndex) => (
                <ListItem key={itemIndex}>{item}</ListItem>
              ))}
            </List>
          </List>
        ))}
      </Stack>
    </Stack>
  )
}

export default React.memo(SectionAbout)
