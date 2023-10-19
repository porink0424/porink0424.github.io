import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Daichi Kato',
  description: "Daichi Kato's personal website",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body>{children}</body>
    </html>
  )
}
