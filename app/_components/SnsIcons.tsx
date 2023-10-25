import { ActionIcon, Group, Image } from '@mantine/core'

export default function SnsIcons() {
  return (
    <Group gap={12}>
      {[
        {
          link: 'https://github.com/porink0424',
          src: '/github.png',
          alt: 'github icon',
        },
        {
          link: 'https://qiita.com/porink0424',
          src: '/qiita.png',
          alt: 'qiita icon',
        },
        {
          link: 'https://twitter.com/daichi_myg2120',
          src: '/x.png',
          alt: 'x icon',
        },
      ].map(({ link, src, alt }, index) => (
        <ActionIcon key={index} size='lg' variant='transparent' component='a' href={link}>
          <Image src={src} alt={alt} />
        </ActionIcon>
      ))}
    </Group>
  )
}
