import { ActionIcon, Group, Image } from '@mantine/core'
import { LINK } from '../_constants/link'

export default function SnsIcons() {
  return (
    <Group gap={12}>
      {[
        {
          link: LINK.GITHUB,
          src: '/github.png',
          alt: 'github icon',
        },
        {
          link: LINK.QIITA,
          src: '/qiita.png',
          alt: 'qiita icon',
        },
        {
          link: LINK.TWITTER,
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
