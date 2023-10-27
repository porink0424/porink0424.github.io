'use client'

import { Box, Stack, Text } from '@mantine/core'
import { useAtom } from 'jotai'
import { useMediaQuery } from '@mantine/hooks'
import React, { useCallback, useMemo } from 'react'
import { menuOpenAtom } from '../_stores/atoms'

function Menu() {
  const [open, setOpen] = useAtom(menuOpenAtom)
  const isMobile = useMediaQuery('(max-width: 768px)')

  const closeMenu = useCallback(() => {
    setOpen(false)
  }, [setOpen])

  return useMemo(() => {
    if (!isMobile || !open) return null
    return (
      <Box w='100vw' h='100vh' className='fixed top-0 left-0 z-20 bg-gray-200'>
        <Stack w='100%' h='100%' justify='center' align='center' gap={20}>
          {['About', 'Experiences', 'Research', 'Hobby'].map((text, index) => (
            <Text
              fw={600}
              component='a'
              href={`#${text}`}
              size='lg'
              key={index}
              onClick={closeMenu}
            >
              {text}
            </Text>
          ))}
        </Stack>
      </Box>
    )
  }, [closeMenu, isMobile, open])
}

export default React.memo(Menu)
