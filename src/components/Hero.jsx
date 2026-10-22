import profile from '../assets/images/profile.jpg'
import '../styles/hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <h1 className="hero-title">HI! I'M PRINCESS JEAN POTES</h1>

          <h2 className="hero-roles">
            <span>WEB DEVELOPER</span>
            <span className="role-divider">|</span>
            <span>IT SUPPORT</span>
            <span className="role-divider">|</span>
            <span>ADMINISTRATIVE SUPPORT</span>
          </h2>

          <p className="hero-desc">
            IT graduate with experience in web development, HR-related
            systems, administrative support, and IoT. I build practical
            digital solutions and support teams with accuracy, organization,
            and care.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Get in Touch →
            </a>
            <a href="#projects" className="btn btn-outline">
              View My Work
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-lines"></div>
          <div className="hero-orb orb-1"></div>
          <div className="hero-orb orb-2"></div>

          <img
            src={profile}
            alt="Princess Jean Potes"
            className="hero-photo"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero