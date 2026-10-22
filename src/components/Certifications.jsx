import '../styles/certifications.css'

const certs = [
  {
    title: 'Computer Systems Servicing NC II',
    issuer: 'TESDA',
    year: '2022',
  },
  {
    title: 'Philippines Civil Service Professional Eligibility',
    issuer: 'Civil Service Commission',
    year: '2026',
  },
]

function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <span className="section-tag">Certificates</span>
        <h2 className="section-title">
          MY <span>CERTIFICATIONS</span>
        </h2>

        <div className="cert-grid">
          {certs.map((c) => (
            <article className="card cert-card" key={c.title}>
              <div className="cert-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="9" r="6" />
                  <path d="M8.5 14.5 7 22l5-3 5 3-1.5-7.5" />
                </svg>
              </div>

              <div className="cert-body">
                <span className="cert-category">Certification</span>
                <h3 className="cert-title">{c.title}</h3>

                <div className="cert-meta">
                  <span className="cert-issuer">{c.issuer}</span>
                  <span className="cert-year">{c.year}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications