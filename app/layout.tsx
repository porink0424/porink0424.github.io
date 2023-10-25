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
