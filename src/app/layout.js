
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/Header'
import SessionProviderWrapper from '@/components/shared/SessionProviderWrapper'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Yojana Connect',
}

export default function RootLayout({
  children,
}) {
  return (

    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SessionProviderWrapper>
          <Header />
          {children}
        </SessionProviderWrapper>
      </body>
    </html>
  )
}