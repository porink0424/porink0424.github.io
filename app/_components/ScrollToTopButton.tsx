'use client'

import { ActionIcon } from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'
import React, { useMemo } from 'react'
import { ArrowBigTop } from 'tabler-icons-react'

function ScrollToTop() {
  const [scroll, scrollTo] = useWindowScroll()

  return useMemo(() => {
    if (scroll.y === 0) return null
    return (
      <ActionIcon
        variant='filled'
        size='xl'
        color='blue'
        className='!fixed bottom-6 right-6 z-50'
        onClick={() => {
          scrollTo({ y: 0 })
        }}
      >
        <ArrowBigTop />
      </ActionIcon>
    )
  }, [scroll, scrollTo])
}

export default React.memo(ScrollToTop)
