import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function ({ children }: Props) {
  return (
    <div className="max-sm:w-full relative sm:w-3/5 sm:mx-auto lg:z-10">
      {children}
    </div>
  )
}
