import { projects } from '../data/portfolio'
import ProjectCard from './ProjectCard'

function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured)
  const supportingProjects = projects.filter((project) => !project.featured)

  return (
    <section className="page-section section-shell" id="projects" aria-labelledby="projects-title">
      <div className="section-heading">
        <p className="eyebrow">Featured projects</p>
        <h2 id="projects-title">Systems with real architecture behind them.</h2>
        <p>
          A selection of systems spanning ASP.NET Core, Spring Boot, React, SQL Server,
          JavaFX, C++, and compiler architecture.
        </p>
      </div>

      <div className="featured-projects">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} featured />
        ))}
      </div>

      <div className="supporting-projects" aria-label="Additional projects">
        {supportingProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
