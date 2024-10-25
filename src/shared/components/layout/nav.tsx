'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/shared/lib/style-utils'
import { Routes } from '@/shared/navigation'

const navLinks = [
  { title: 'Home', href: Routes.HOME },
  { title: 'Projects', href: Routes.PROJECTS },
  { title: 'Contact', href: Routes.CONTACT },
]

export const Nav = () => {
  const pathname = usePathname()

  return (
    <nav>
      <ul className="flex gap-2">
        {navLinks.map((link) => (
          <li key={link.title}>
            <Link
              className={cn(
                'inline-flex items-center w-full px-4 h-10 hover:text-white',
                pathname === link.href && 'text-accent hover:text-accent',
              )}
              href={link.href}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
