import { achievements } from '../data/portfolio'

function AchievementsSection() {
  return (
    <section
      className="page-section achievement-band"
      id="achievements"
      aria-labelledby="achievements-title"
    >
      <div className="section-shell achievement-band__inner">
        <div className="section-heading">
          <p className="eyebrow">Achievements</p>
          <h2 id="achievements-title">Measured progress, not just listed tools.</h2>
        </div>

        <div className="achievement-grid">
          {achievements.map((achievement) => (
            <article className="achievement-card" key={achievement.title}>
              <strong>{achievement.value}</strong>
              <h3>{achievement.title}</h3>
              <p>{achievement.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AchievementsSection
