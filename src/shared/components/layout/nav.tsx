'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

import { cn } from '@/shared/lib/style-utils'
import { Routes } from '@/shared/navigation'

const navLinks = [
  { title: 'Home', href: Routes.HOME },
  { title: 'Projects', href: Routes.PROJECTS },
  { title: 'Contact', href: Routes.CONTACT },
]

const isActive = (pathname: string, route: string) => {
  if (route === Routes.HOME) return pathname === route

  return pathname.includes(route)
}

export const Nav = () => {
  const pathname = usePathname()

  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    if (isOpen) setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
  }, [isOpen])

  return (
    <>
      <nav className="max-sm:hidden">
        <ul className="flex gap-2">
          {navLinks.map((link) => (
            <li key={link.title}>
              <Link
                className={cn(
                  'inline-flex items-center w-full px-4 h-10 hover:text-white',
                  isActive(pathname, link.href) &&
                    'text-accent hover:text-accent',
                )}
                href={link.href}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        type="button"
        aria-label="Toggle Menu"
        className="z-20 sm:hidden"
        onClick={() => setOpen((prev) => !prev)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {isOpen && (
        <nav className="absolute z-10 top-0 left-0 pt-24 px-8 bg-black w-full h-screen">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.title}>
                <Link
                  className={cn(
                    'inline-block w-full h-10 py-2 hover:text-white',
                    isActive(pathname, link.href) &&
                      'text-accent hover:text-accent',
                  )}
                  href={link.href}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  )
}
