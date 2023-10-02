import './styles.css'
import type { ProjectModel } from '@models/index'
import { memo } from 'react'

const Project: React.FC<ProjectModel> = ({
  title,
  description,
  date,
  code,
  thumbnail,
  stack
}) => {
  return (
    <a href={code ?? '#'} target="_blank" aria-label={`Take a look at ${title} project`}>
      <article className="project border border-primary hover:scale-105">
        <div className="p-4">
          <p className="font-title font-regular text-primary text-lg md:text-2xl mb-2">
            {title}
          </p>
          <p className="font-light mb-2">{description}</p>
          <p className="text-xs">{date}</p>
          {stack.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-4">
              {stack.map((tech: string) => (
                <p className="badge px-1 text-primary">{tech}</p>
              ))}
            </div>
          )}
        </div>
      </article>
    </a>
  )
}

export default memo(Project);
