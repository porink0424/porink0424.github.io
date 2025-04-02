'use client'

import { Box, Overlay, Image, Avatar, Title, Text, AspectRatio } from '@mantine/core'
import React from 'react'

function SectionTop() {
  return (
    <>
      <Box className='absolute top-0 left-0 w-full -z-10'>
        <Image src='/sword.jpg' alt='sword' className='w-full object-cover' opacity={0.5} />
        <Overlay
          color='white'
          gradient='linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 1) 100%)'
        />
      </Box>

      <AspectRatio ratio={3 / 2}>
        <Box className='h-full flex justify-between items-center m-auto !flex-col sm:!flex-row'>
          <Avatar
            src='/top.jpg'
            alt="Daichi Kato's Icon"
            className='!w-[100px] !h-[100px] sm:!w-[150px] sm:!h-[150px] mb-2 sm:mb-0 sm:!mr-7'
          />
          <Box>
            <Title order={1} className='!text-2xl sm:!text-5xl text-center sm:text-left'>
              Daichi Kato
            </Title>
            <Text className='!text-sm sm:!text-base text-center sm:text-left'>
              Software Engineer at Preferred Networks, Tokyo
            </Text>
          </Box>
        </Box>
      </AspectRatio>
    </>
  )
}

export default React.memo(SectionTop)
