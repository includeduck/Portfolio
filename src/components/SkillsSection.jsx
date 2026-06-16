import { skillGroups } from '../data/portfolio'

function SkillsSection() {
  return (
    <section className="page-section section-shell" id="skills" aria-labelledby="skills-title">
      <div className="section-heading section-heading--split">
        <div>
          <p className="eyebrow">Technical skills</p>
          <h2 id="skills-title">Strong foundations, practical full-stack range.</h2>
        </div>
        <p>
          Strongest in C++, SQL Server, data structures, algorithms, and object-oriented
          design, with practical experience across React, ASP.NET Core, Spring Boot, and
          relational databases.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <section
            className={group.tone === 'primary' ? 'skill-group skill-group--primary' : 'skill-group'}
            key={group.title}
            aria-labelledby={`skill-${group.title.toLowerCase().replaceAll(' ', '-')}`}
          >
            <h3 id={`skill-${group.title.toLowerCase().replaceAll(' ', '-')}`}>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
