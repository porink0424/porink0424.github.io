'use client'

import {
  AppShellHeader,
  Image,
  Box,
  UnstyledButton,
  Text,
  Group,
  Divider,
  Menu,
  MenuTarget,
  MenuDropdown,
  MenuLabel,
  MenuItem,
} from '@mantine/core'
import { useAtom, useAtomValue } from 'jotai'
import { Language as LanguageIcon } from 'tabler-icons-react'
import { activeSectionAtom, languageAtom } from '../_stores/atoms'
import { LANGUAGES_DISPLAY, Language } from '../_constants/language'

export default function Header() {
  const activeSection = useAtomValue(activeSectionAtom)
  const [language, setLanguage] = useAtom(languageAtom)

  return (
    <AppShellHeader withBorder={false} className='!bg-transparent flex items-center justify-center'>
      <Box className='w-[97%] h-[60px] bg-gray-50 border border-[black] rounded-full flex items-center justify-between'>
        <Group gap={8} align='center' className='ml-4'>
          <Box component='a' href='#'>
            <Image
              w={48}
              h={48}
              src='/icon.png'
              alt='icon'
              className='!rounded-full border border-gray'
            />
          </Box>

          <Menu
            shadow='md'
            width={120}
            transitionProps={{ transition: 'rotate-right', duration: 150 }}
          >
            <MenuTarget>
              <UnstyledButton className='!bg-gray-200 flex items-center justify-around !py-[2px] !pl-3 !pr-4 !mr-4 rounded-full'>
                <LanguageIcon width={20} height={20} className='mr-1' />
                <Text fw={600} size='xs' mr={10}>
                  {LANGUAGES_DISPLAY[language]}
                </Text>
                <Box className='inline-block w-[8px] h-[8px] -translate-y-0.5 rotate-45 border-black border-b border-r' />
              </UnstyledButton>
            </MenuTarget>

            <MenuDropdown>
              <MenuLabel>Language</MenuLabel>
              {Object.entries(LANGUAGES_DISPLAY).map(([languageKey, languageDisplay]) => (
                <MenuItem
                  key={languageKey}
                  onClick={() => {
                    setLanguage(languageKey as Language)
                  }}
                >
                  {languageDisplay}
                </MenuItem>
              ))}
            </MenuDropdown>
          </Menu>
        </Group>

        <Group gap={0} align='center' className='mr-8 h-[46px]'>
          {['About', 'Experiences', 'Research', 'Hobby'].map((text, index) => (
            <Group gap={0} h='100%' key={text}>
              {index > 0 && <Divider h='100%' orientation='vertical' />}
              <Text
                fw={500}
                size='sm'
                component='a'
                c={activeSection !== index ? 'dimmed' : ''}
                href={`#${text}`}
                className={`h-full !px-2 flex items-center transition-[background-color,color] duration-[0.3s] hover:bg-gray-200 ${
                  activeSection === index ? 'bg-gray-200' : ''
                }`}
              >
                {text}
              </Text>
            </Group>
          ))}
        </Group>
      </Box>
    </AppShellHeader>
  )
}
