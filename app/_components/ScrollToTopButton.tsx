'use client'

import { Box, ActionIcon } from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'
import React, { useMemo } from 'react'
import { ArrowBigTop } from 'tabler-icons-react'

function ScrollToTop() {
  const [scroll, scrollTo] = useWindowScroll()

  return useMemo(() => {
    if (scroll.y === 0) return null
    return (
      <Box
        className='fixed bottom-6 right-6 z-50'
        component='button'
        onClick={() => {
          scrollTo({ y: 0 })
        }}
      >
        <ActionIcon variant='gradient' size='xl' gradient={{ from: 'blue', to: 'cyan', deg: 90 }}>
          <ArrowBigTop />
        </ActionIcon>
      </Box>
    )
  }, [scroll, scrollTo])
}

export default React.memo(ScrollToTop)
