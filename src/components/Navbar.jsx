import { useState, useEffect } from 'react'
import '../styles/navbar.css'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'UI/UX', href: '#uiux' },
  { label: 'Certificates', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Lagyan ng background ang navbar kapag nag-scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // I-lock ang scroll ng page kapag bukas ang mobile menu
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#home" className="logo" onClick={close} aria-label="Go to top">
          <span className="logo-mark">PJ</span>
        </a>

        <nav className={`nav-links ${open ? 'nav-open' : ''}`}>
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={close}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Download CV sa loob ng mobile menu */}
          <a
            href="/files/Princess-Jean-Potes-CV.pdf"
            download
            className="btn btn-primary nav-cta nav-cta-mobile"
            onClick={close}
          >
            Download CV
          </a>
        </nav>

        {/* Download CV para sa desktop */}
        <a
          href="/files/Princess-Jean-Potes-CV.pdf"
          download
          className="btn btn-primary nav-cta nav-cta-desktop"
        >
          Download CV
        </a>

        <button
          className={`hamburger ${open ? 'hamburger-open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Navbar