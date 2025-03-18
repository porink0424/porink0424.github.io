'use client'

import { Box, Flex, Space, Stack, Text } from '@mantine/core'
import { useElementSize } from '@mantine/hooks'
import React, { useMemo } from 'react'
import SnsIcons from './SnsIcons'

function Footer() {
  const { ref, height } = useElementSize()

  return useMemo(
    () => (
      <>
        <Box ref={ref} w='100%' pos='fixed' bottom={0} className='bg-gray-200'>
          <Stack align='center' py={120}>
            <Flex className='flex-col sm:flex-row items-center gap-2 sm:gap-12 mb-4'>
              {['About', 'Experiences', 'Research', 'Hobby'].map((text, index) => (
                <Text fw={600} component='a' href={`#${text}`} size='lg' key={index}>
                  {text}
                </Text>
              ))}
            </Flex>

            <Box mb={32}>
              <SnsIcons />
            </Box>

            <Text size='sm' className='text-center'>
              © Copyright 2023-2025 Daichi Kato.
            </Text>
          </Stack>
        </Box>
        <Space h={height} />
      </>
    ),
    [height, ref],
  )
}

export default React.memo(Footer)
