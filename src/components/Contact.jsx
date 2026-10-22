import '../styles/contact.css'

const contacts = [
  {
    label: 'Email',
    value: 'princessjeanpotes000@gmail.com',
    href: 'mailto:princessjeanpotes000@gmail.com',
    external: false,
  },
  {
    label: 'Phone',
    value: '+63 906 142 1473',
    href: 'tel:+639061421473',
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/princesss-jean-potes',
    href: 'https://www.linkedin.com/in/princesss-jean-potes-27208a3a5',
    external: true,
  },
  {
    label: 'Facebook',
    value: 'facebook.com/pihjean',
    href: 'https://www.facebook.com/pihjean',
    external: true,
  },
  {
    label: 'GitHub',
    value: 'github.com/pihjean',
    href: 'https://github.com/pihjean',
    external: true,
  },
]

function Contact() {
  return (
    <>
      <section id="contact" className="section section-band">
        <div className="container contact-inner">
          {/* ===== LEFT ===== */}
          <div className="contact-text">
            <span className="section-tag">Contact</span>

            <h2 className="contact-title">
              Let's work <span>together.</span>
            </h2>

            <p className="contact-intro">
              Looking for a web developer, IT support, or administrative
              support? Send me a message and I'll get back to you.
            </p>
          </div>

          {/* ===== RIGHT: contact list ===== */}
          <ul className="contact-list">
            {contacts.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  className="contact-row contact-link"
                  {...(c.external
                    ? { target: '_blank', rel: 'noreferrer' }
                    : {})}
                >
                  <span className="contact-label">{c.label}</span>
                  <span className="contact-value">{c.value}</span>
                  <span className="contact-arrow">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>© 2026 Princess Jean Potes. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Contact