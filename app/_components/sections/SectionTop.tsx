import { Box, Overlay, Image, Group, Avatar, Title, Text, AspectRatio } from '@mantine/core'

export default function SectionTop() {
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
        <Group gap={28} h='100%' justify='space-between' align='center' m='auto'>
          <Avatar size={150} src='/top.jpg' alt="Daichi Kato's Icon" />
          <Box>
            <Title order={1} className='!text-5xl'>
              Daichi Kato
            </Title>
            <Text size='md'>M1 Student at The University of Tokyo, Japan</Text>
          </Box>
        </Group>
      </AspectRatio>
    </>
  )
}
