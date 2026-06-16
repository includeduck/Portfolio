import { careerInterests, exploration } from '../data/portfolio'

function InterestsSection() {
  return (
    <section className="page-section section-shell interests-section" aria-labelledby="interests-title">
      <div className="section-heading">
        <p className="eyebrow">Direction</p>
        <h2 id="interests-title">Growing toward deeper systems and product engineering.</h2>
      </div>

      <div className="interest-grid">
        <section className="interest-panel" aria-labelledby="exploring-title">
          <h3 id="exploring-title">Currently exploring</h3>
          <ul>
            {exploration.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="interest-panel" aria-labelledby="roles-title">
          <h3 id="roles-title">Career interests</h3>
          <ul>
            {careerInterests.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  )
}

export default InterestsSection
