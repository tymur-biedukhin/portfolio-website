import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'

import { Routes } from '@/shared/navigation'
import github from '@/shared/assets/github.svg'
import linkedin from '@/shared/assets/linkedin.svg'

import './globals.css'

export const metadata: Metadata = {
  title: 'Tymur Biedukhin | Front-End Engineer & Web3 Builder',
  description:
    'Discover the portfolio of Tymur Biedukhin, a front-end developer specializing in cutting-edge web solutions with experience in Web3 and blockchain. Explore innovative projects and software engineering expertise.',
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
        <div className="min-h-screen bg-black text-[#bbb] antialiased">
          <header className="w-full fixed top-0 p-12 flex justify-between items-center font-semibold">
            <div className="group">
              <p className="group-hover:hidden">
                Tymur <span className="text-white">Biedukhin</span>
              </p>
              <p className="hidden group-hover:block">
                <a
                  href="https://cv.djinni.co/cd/6bcfed365a6d6f4c0dbc8bfa30b1c7/CV-BIedukhin.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download <span className="text-white">CV</span>
                </a>
              </p>
            </div>
            <nav>
              <ul className="flex gap-2">
                <li>
                  <Link
                    className="inline-flex items-center w-full px-4 h-10"
                    href={Routes.HOME}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="inline-flex items-center w-full px-4 h-10"
                    href={Routes.WORKS}
                  >
                    Works
                  </Link>
                </li>
                <li>
                  <Link
                    className="inline-flex items-center w-full px-4 h-10"
                    href={Routes.CONTACT}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
          <main> {children}</main>
          <footer className="w-full fixed bottom-0 p-12 flex">
            <div className="flex flex-col gap-0.5 text-sm leading-7">
              <span>Email: bedumur@gmail.com</span>
              <span>Telegram: @biedukhin</span>
            </div>
          </footer>
          <div className="fixed bottom-12 right-12 flex flex-col items-center justify-center gap-6 text-sm">
            <div className="mb-24 rotate-90 after:absolute after:right-[-72px] after:top-1/2 after:w-12 after:h-px after:bg-[#bbb]">
              <span>Follow me</span>
            </div>
            <a
              href="https://github.com/tymur-biedukhin"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={github} alt="Github" width={20} height={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/tymur-biedukhin-19b408167/"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={linkedin} alt="Linkedin" width={20} height={20} />
            </a>
          </div>
        </div>
      </body>
    </html>
  )
}
