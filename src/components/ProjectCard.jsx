function ProjectCard({ project, featured = false }) {
  return (
    <article className={featured ? 'project-card project-card--featured' : 'project-card'}>
      <div className="project-card__meta">
        <span>{project.category}</span>
        {featured ? <span>Featured</span> : null}
      </div>

      <div className="project-card__body">
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
      </div>

      <ul className="project-highlights" aria-label={`${project.title} highlights`}>
        {project.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

      <ul className="stack-list" aria-label={`${project.title} technology stack`}>
        {project.stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <a
        className="repo-link"
        href={project.repoUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`View ${project.title} repository`}
      >
        View repository
      </a>
    </article>
  )
}

export default ProjectCard
