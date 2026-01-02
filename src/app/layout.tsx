import type { Metadata } from 'next'
import { Instrument_Sans, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['100', '400', '500', '600', '700', '800'],
})

const instrumentSans = Instrument_Sans({
  variable: '--font-instrument-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Nerd Signals',
  description:
    'Experience the seamless integration of AI in crypto trading, designed to optimize your investment strategies and enhance your trading outcomes.',
}

export default function RootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params?: { lng?: string } }>) {
  // Keep the document language aligned with the active i18n route (/[lng]).
  const lang = params?.lng ?? 'en'

  return (
    <html lang={lang}>
      <body className={`${inter.variable} ${instrumentSans.variable} antialiased`}>{children}</body>
    </html>
  )
}
