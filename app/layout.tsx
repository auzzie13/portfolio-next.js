import '@radix-ui/themes/styles.css';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Theme } from '@radix-ui/themes';
import NavBar from './NavBar'
import SideBar from './components/SideBar'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en">
      <body className={inter.className}>
        <Theme>
        <NavBar />
        <main>{children}</main>
        <SideBar />
        </Theme>
      </body>
    </html>
  )
}
