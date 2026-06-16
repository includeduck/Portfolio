import heroImage from '../assets/hero.png'
import { focusAreas, metrics, profile, projectSignals } from '../data/portfolio'

function Hero() {
  return (
    <section className="hero-section section-shell" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">{profile.education}</p>
        <h1 id="hero-title">{profile.name}</h1>
        <p className="hero-title">{profile.title}</p>
        <p className="hero-summary">{profile.summary}</p>
        <p className="hero-detail">{profile.detail}</p>

        <div className="hero-actions" aria-label="Primary actions">
          <a className="button button--primary" href="#projects">
            View projects
          </a>
          <a className="button button--secondary" href={`mailto:${profile.email}`}>
            Contact
          </a>
          <a className="button button--ghost" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>

      <aside className="hero-panel" aria-label="Portfolio focus summary">
        <div className="hero-panel__media" aria-hidden="true">
          <img src={heroImage} alt="" />
        </div>
        <div className="hero-panel__content">
          <p className="panel-label">Systems profile</p>
          <ul className="signal-list">
            {projectSignals.map((signal) => (
              <li key={signal.label}>
                <span>{signal.label}</span>
                <strong>{signal.value}</strong>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <div className="metric-grid" aria-label="Portfolio metrics">
        {metrics.map((metric) => (
          <div className="metric" key={metric.value}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </div>

      <div className="focus-strip" aria-label="Technical focus areas">
        {focusAreas.map((area) => (
          <span key={area}>{area}</span>
        ))}
      </div>
    </section>
  )
}

export default Hero
