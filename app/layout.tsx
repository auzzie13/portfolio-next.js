import '@radix-ui/themes/styles.css';
import './theme-config.css';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Theme } from '@radix-ui/themes';
import NavBar from './NavBar'
import SideBar from './components/SideBar'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Austin Williams Portfolio',
  description: 'using next.js, tailwind, typescript, prisma to buid portfolio page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body suppressHydrationWarning={true}>
        <Theme>
        <NavBar />
        <main>{children}</main>
        {/* <SideBar /> */}
        </Theme>
      </body>
    </html>
  )
}
