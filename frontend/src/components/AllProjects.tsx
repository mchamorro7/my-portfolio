import { useEffect, useState } from 'react'
import type { ProjectModel } from '@models/index'
import Project from './Project'
import Pagination from './Pagination'
import { getPaginateProjects } from '@utils/index'

interface AllProjectsProps {
  initialProjects: Array<ProjectModel>
}

const limit = 8

export const AllProjects: React.FC<AllProjectsProps> = ({
  initialProjects
}) => {
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [projects, setProjects] = useState(initialProjects);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const projectsResponse = await getPaginateProjects(
          limit,
          (page - 1) * limit
        );
        setProjects(projectsResponse);
      } catch (error) {
        console.log(
          `Error when trying to retrieve projects - Message: ${error}`
        );
      } finally {
        setLoading(false);
      }
    }

    if (page > 1) fetchProjects();
  }, [page])

  return (
    <section className="mb-20">
      {/* TODO: Check the tags styles below when projects are more than eight */}
      {loading ? (
        <p className="text-center text-lg">Loading...</p>
      ) : projects.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((props: ProjectModel) => (
            <Project key={props.title} {...props} />
          ))}
        </div>
      ) : (
        <h2 className="text-center py-20 text-xl">
          No more projects in this page...
        </h2>
      )}
      {initialProjects.length > 8 && (
        <Pagination
          setPage={setPage}
          limit={limit}
          page={page}
          itemsCount={projects.length}
        />
      )}
    </section>
  )
}
