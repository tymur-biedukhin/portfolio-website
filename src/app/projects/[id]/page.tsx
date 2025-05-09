import { use } from 'react'
import { redirect } from 'next/navigation'
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'

import { details, ImageCarousel, itemsCount } from '@/features/projects'
import { DynamicRoutes, Routes } from '@/shared/navigation'

const getPrev = (current: string) => {
  const next = Number.parseInt(current) - 1

  return next < 1 ? itemsCount - 1 : next
}

const getNext = (current: string) => {
  const next = Number.parseInt(current) + 1

  return next > itemsCount - 1 ? 1 : next
}

interface Props {
  params: Promise<{ id: string }>
}

export default function ({ params }: Props) {
  const p = use(params)

  const project = details[p.id as keyof typeof details]

  if (!project) redirect(Routes.PROJECTS)

  return (
    <div className="space-y-16">
      <div className="max-sm:gap-6 max-sm:flex-col-reverse flex items-center justify-between">
        <h1 className="text-6xl font-medium text-primary">{project.title}</h1>
        <div className="max-sm:w-full max-sm:justify-between flex gap-6 items-center">
          <Link
            href={DynamicRoutes.PROJECT_DETAILS(getPrev(p.id))}
            className="flex items-center gap-1.5 hover:text-primary"
          >
            <ArrowLeft size={20} />
          </Link>
          <Link
            href={DynamicRoutes.PROJECT_DETAILS(getNext(p.id))}
            className="flex items-center gap-1.5 hover:text-primary"
          >
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
      <div className="flex gap-12">
        <section className="flex-1 space-y-8">
          <ImageCarousel title={project.title} images={project.images} />

          <h2 className="font-medium text-2xl text-primary">Description</h2>
          <div className="space-y-4">
            <p>{project.description}</p>
            <div className="flex flex-wrap items-center gap-2">
              {project.techStack?.map((tech) => (
                <span
                  key={tech}
                  className="inline-block px-2 py-1 rounded-2xl border border-accent text-accent text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
        <section className="max-lg:hidden min-w-[120px] space-y-8">
          <h2 className="font-medium text-2xl text-primary">Details</h2>
          <div className="space-y-6">
            <div className="flex flex-col gap-1">
              <span className="font-medium text-primary">Project status</span>
              <span className="text-sm">{project.status}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-medium text-primary">Domain</span>
              <span className="text-sm">{project.domain}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-medium text-primary">Company</span>
              {project.companyLink ? (
                <a
                  href={project.companyLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-sm hover:text-primary"
                >
                  {project.company} <ExternalLink size={14} />
                </a>
              ) : (
                <span className="text-sm">{project.company}</span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-medium text-primary">
                Contract duration
              </span>
              <span className="text-sm">{project.duration}</span>
            </div>
            {project.link && (
              <div className="flex flex-col gap-1">
                <span className="font-medium text-primary">Project link</span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-sm hover:text-primary"
                >
                  Live <ExternalLink size={14} />
                </a>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
