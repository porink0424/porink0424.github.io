'use client'

import { Box, Group, Space, Stack, Text } from '@mantine/core'
import { useElementSize } from '@mantine/hooks'
import SnsIcons from './SnsIcons'

export default function Footer() {
  const { ref, height } = useElementSize()

  return (
    <>
      <Box ref={ref} w='100%' pos='fixed' bottom={0} className='bg-gray-200'>
        <Stack align='center' py={120}>
          <Group gap={48} mb={16}>
            {['About', 'Experiences', 'Research', 'Hobby'].map((text, index) => (
              <Text fw={600} component='a' href={`#${text}`} size='lg' key={index}>
                {text}
              </Text>
            ))}
          </Group>

          <Box mb={32} ml={16}>
            <SnsIcons />
          </Box>

          <Text size='sm' className='text-center'>
            © Copyright 2023 Daichi Kato.
          </Text>
        </Stack>
      </Box>
      <Space h={height} />
    </>
  )
}
