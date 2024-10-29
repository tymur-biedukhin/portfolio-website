import { ProjectPreview, previews } from '@/features/projects'

const middle = Math.ceil(previews.length / 2)

export default function () {
  return (
    <>
      <h1 className="text-6xl font-medium text-primary">Projects</h1>
      <div className="relative z-10 grid grid-cols-2 gap-6 pt-16">
        <div className="grid gap-6">
          {previews.slice(0, middle).map((project, idx) => (
            <ProjectPreview key={project.id} project={project} />
          ))}
        </div>
        <div className="grid gap-6">
          {previews.slice(middle).map((project, idx) => (
            <ProjectPreview
              key={project.id}
              project={project}
              style={{ height: `${((idx % 2) + 1) * 200}px` }}
            />
          ))}
        </div>
      </div>
    </>
  )
}
