import Image from 'next/image'

import type { IProjectPreview } from '@/features/projects'
import { DynamicRoutes } from '@/shared/navigation'

interface Props {
  project: IProjectPreview
  style?: React.CSSProperties
}

export const ProjectPreview = ({ project, style }: Props) => {
  if (project.title === 'NDA') {
    return (
      <div
        style={style}
        className="relative group rounded-lg border border-border min-h-[200px]"
      >
        <div className="flex items-center justify-center bg-black w-full h-full rounded-lg">
          <span className="text-5xl font-medium text-primary">NDA</span>
        </div>
        <div className="absolute top-0 left-0 w-full h-full hidden group-hover:flex flex-col items-center justify-center bg-accent text-black text-center space-y-2 rounded-lg p-12 font-medium">
          <h2 className="text-xl">{project.title}</h2>
          <span className="text-sm">{project.description}</span>
        </div>
      </div>
    )
  }

  return (
    <a
      style={style}
      href={DynamicRoutes.PROJECT_DETAILS(project.id)}
      key={project.id}
      className="relative group rounded-lg border border-border min-h-[200px]"
    >
      {project.coverImg && (
        <div
          style={{ backgroundImage: `url(${project.coverImg})` }}
          className="w-full h-full bg-cover bg-center rounded-lg"
        />
      )}
      <div className="absolute top-0 left-0 w-full h-full hidden group-hover:flex flex-col items-center justify-center bg-accent text-black text-center space-y-2 rounded-lg p-12 font-medium">
        <h2 className="text-xl">{project.title}</h2>
        <span className="text-sm">{project.description}</span>
      </div>
    </a>
  )
}
