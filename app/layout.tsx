import type { Metadata } from 'next'
import './globals.css'
import '@mantine/core/styles.css'
import { AppShell, AppShellMain, Box, ColorSchemeScript, MantineProvider } from '@mantine/core'
import { Noto_Sans_JP } from 'next/font/google'
import Header from './_components/Header'
import Footer from './_components/Footer'
import Providers from './providers'

const notojp = Noto_Sans_JP({
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Daichi Kato',
  description: "Daichi Kato's personal website",
}

function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell header={{ height: 80 }}>
      <Header />
      <AppShellMain className='bg-white shadow-xl z-10 relative'>
        <Box maw={720} mx='auto'>
          {children}
        </Box>
      </AppShellMain>
      <Footer />
    </AppShell>
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <head>
        <meta charSet='utf-8' />
        <ColorSchemeScript />
      </head>
      <head>
        <meta property='og:site_name' content="Daichi Kato's Portfolio" />
        <meta property='og:title' content="Daichi Kato's Portfolio" />
        <meta property='og:url' content='https://porink0424.github.io/portfolio/' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='https://porink0424.github.io/portfolio/og-image.png' />
        <meta name='twitter:card' content='summary_large_image' />
      </head>
      <body className={notojp.className}>
        <Providers>
          <MantineProvider>
            <PageLayout>{children}</PageLayout>
          </MantineProvider>
        </Providers>
      </body>
    </html>
  )
}
