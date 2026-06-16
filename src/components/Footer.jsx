import { profile } from '../data/portfolio'

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="section-shell site-footer__inner">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let us build something understandable.</h2>
          <p>{profile.philosophy}</p>
        </div>

        <address className="footer-links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            {profile.githubLabel}
          </a>
          <span>{profile.location}</span>
        </address>
      </div>
    </footer>
  )
}

export default Footer
