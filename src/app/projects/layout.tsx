import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function ({ children }: Props) {
  return <div className="w-3/5 mx-auto pt-36 pb-20">{children}</div>
}
