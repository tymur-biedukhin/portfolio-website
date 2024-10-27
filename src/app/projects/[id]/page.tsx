'use client'

import { useParams, redirect } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { details, itemsCount } from '@/features/projects'
import { DynamicRoutes, Routes } from '@/shared/navigation'

const getPrev = (current: string) => {
  const num = Number.parseInt(current)

  return num - 1 < 1 ? itemsCount : num - 1
}

const getNext = (current: string) => {
  const num = Number.parseInt(current)

  return num + 1 > itemsCount ? 1 : num + 1
}

export default function () {
  const params: { id: string } = useParams()

  const project = details[params.id as keyof typeof details]

  if (!project) redirect(Routes.PROJECTS)

  return (
    <div>
      <span>{project.title}</span>
      <Link
        href={DynamicRoutes.PROJECT_DETAILS(getPrev(params.id))}
        className="flex items-center gap-1.5 hover:text-primary"
      >
        <ArrowLeft size={16} /> <span>Prev</span>
      </Link>
      <Link
        href={DynamicRoutes.PROJECT_DETAILS(getNext(params.id))}
        className="flex items-center gap-1.5 hover:text-primary"
      >
        <span>Next</span> <ArrowRight size={16} />
      </Link>
    </div>
  )
}
