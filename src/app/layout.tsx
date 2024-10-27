import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Linkedin, Github, Mail, Send } from 'lucide-react'

import { Nav } from '@/shared/components/layout/nav'

import './globals.css'

export const metadata: Metadata = {
  title: 'Tymur Biedukhin | Web Engineer & Web3 Builder',
  description:
    'Discover the portfolio of Tymur Biedukhin, a web engineer specializing in cutting-edge web solutions with experience in Web3 and blockchain. Explore innovative projects and software engineering expertise.',
}

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

interface Props {
  children: ReactNode
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <div className="min-h-screen bg-black text-secondary antialiased">
          <header className="w-full bg-black/70 z-10 fixed top-0 p-12 flex justify-between items-center font-semibold">
            <div className="group min-w-[140px]">
              <p className="group-hover:hidden w-full">
                Tymur <span className="text-white">Biedukhin</span>
              </p>
              <p className="hidden w-full group-hover:block">
                <a
                  href="https://cv.djinni.co/cd/6bcfed365a6d6f4c0dbc8bfa30b1c7/CV-BIedukhin.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block w-full"
                >
                  Download <span className="text-white">CV</span>
                </a>
              </p>
            </div>
            <Nav />
          </header>
          <main> {children}</main>
          <footer className="w-full fixed bottom-0 p-12 flex">
            <div className="flex flex-col gap-0.5 text-sm leading-7">
              <a
                href="mailto:bedumur@gmail.com"
                className="flex gap-1.5 items-center hover:text-white"
              >
                <Mail size={14} /> bedumur@gmail.com
              </a>
              <a
                href="https://telegram.me/biedukhin"
                target="_blank"
                rel="noreferrer"
                className="flex gap-1.5 items-center hover:text-white"
              >
                <Send size={14} /> @biedukhin
              </a>
            </div>
          </footer>
          <div className="fixed bottom-12 right-12 flex flex-col items-center justify-center gap-6 text-sm">
            <div className="mb-24 rotate-90 after:absolute after:right-[-72px] after:top-1/2 after:w-12 after:h-px after:bg-secondary">
              <span>Follow me</span>
            </div>
            <a
              href="https://github.com/tymur-biedukhin"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/tymur-biedukhin-19b408167/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </body>
    </html>
  )
}
