import '../styles/about.css'

const awards = ['Best in On-the-Job Training (OJT)', 'Best in Capstone']

function About() {
  return (
    <section id="about" className="section section-band">
      <div className="container">
        <div className="about-text">
          <span className="section-tag">About Me</span>

          <h2 className="section-title">
            I'M AVAILABLE FOR <span>WEB DEV, IT SUPPORT</span> & ADMIN ROLES
          </h2>

          <p className="about-desc">
            I'm an Information Technology graduate from the University of
            Camarines Norte with hands-on experience in web development, IT
            support, and administrative work. I build websites and systems,
            develop IoT-based solutions, troubleshoot computer and network
            issues, and manage records and documentation with accuracy.
          </p>

          <p className="about-desc">
            I also design user interfaces and graphics, and I'm comfortable
            working with both software and hardware. I'm detail-oriented,
            organized, and always eager to learn new tools and technologies
            that help me deliver better work.
          </p>
        </div>

        {/* ===== EDUCATION ===== */}
        <div className="about-education">
          <h3 className="about-label">Education</h3>

          <div className="edu-row">
            <div className="edu-main">
              <h4 className="edu-degree">
                Bachelor of Science in Information Technology
              </h4>
              <p className="edu-school">
                University of Camarines Norte · Camarines Norte, Philippines
              </p>
              <p className="edu-date">Graduated: June 26, 2026</p>
            </div>

            <div className="edu-awards">
              <h5 className="awards-label">Academic Awards</h5>
              <div className="award-list">
                {awards.map((a) => (
                  <span className="award-pill" key={a}>
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About