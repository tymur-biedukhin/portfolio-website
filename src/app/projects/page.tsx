import { ProjectPreview, previews as previewsMock } from '@/features/projects'
import { useIsMobile } from '@/shared/lib/use-is-mobile'

const middle = Math.ceil(previewsMock.length / 2)

export default function () {
  const isMobile = useIsMobile()

  const previews = isMobile
    ? previewsMock.filter((mock) => mock.title !== 'NDA')
    : previewsMock

  return (
    <>
      <h1 className="text-6xl font-medium text-primary">Projects</h1>
      <div className="grid sm:grid-cols-2 gap-6 pt-16">
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
