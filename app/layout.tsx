import type { Metadata } from 'next'
import './globals.css'
import '@mantine/core/styles.css'
import { AppShell, AppShellMain, ColorSchemeScript, MantineProvider } from '@mantine/core'
import Header from './_components/Header'
import Footer from './_components/Footer'
import Providers from './providers'
import Menu from './_components/Menu'

export const metadata: Metadata = {
  title: 'Daichi Kato',
  description: "Daichi Kato's personal website",
}

function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell header={{ height: 80 }}>
      <Header />
      <AppShellMain className='bg-white shadow-xl z-10 relative'>{children}</AppShellMain>
      <Footer />
      <Menu />
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
        <meta property='og:url' content='https://porink0424.github.io/' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='https://porink0424.github.io/og-image.png' />
        <meta name='twitter:card' content='summary_large_image' />
      </head>
      <body>
        <Providers>
          <MantineProvider>
            <PageLayout>{children}</PageLayout>
          </MantineProvider>
        </Providers>
      </body>
    </html>
  )
}
