import type { Metadata } from 'next'
import './globals.css'
import '@mantine/core/styles.css'
import { AppShell, AppShellMain, ColorSchemeScript, MantineProvider } from '@mantine/core'
import Header from './_components/Header'
import Footer from './_components/Footer'

export const metadata: Metadata = {
  title: 'Daichi Kato',
  description: "Daichi Kato's personal website",
}

function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell header={{ height: 60 }} padding='md'>
      <Header />
      <AppShellMain className='bg-white shadow-md'>{children}</AppShellMain>
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
      <body>
        <MantineProvider>
          <PageLayout>{children}</PageLayout>
        </MantineProvider>
      </body>
    </html>
  )
}
