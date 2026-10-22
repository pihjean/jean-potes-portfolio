import { useState, useEffect, useRef } from 'react'
import SmartImage from './SmartImage'
import '../styles/projects.css'

/*
  folder = pangalan ng folder sa public/projects/
  count  = ilang picture (1, 2, 3, ...)
  Puwedeng .jpg, .png, .jpeg, o .webp ang bawat picture.
*/
const projects = [
  {
    folder: 'asd-learning-tool',
    count: 3,
    category: 'IoT & Web',
    title: 'Learning Interactive Tool for Teaching Children with Autism Spectrum Disorder',
    desc: 'An interactive learning system controlled through an ESP32 device with physical buttons, designed for verbal and non-verbal children with ASD, with progress tracking to see how each child is learning and focusing.',
    stack: ['React', 'JavaScript', 'Firebase'],
    hardware: ['ESP32', 'Breadboard'],
    link: '',
  },
  {
    folder: 'motorwash-app',
    count: 3,
    category: 'IoT & Web',
    title: 'Motorwash App with Vendo Machine',
    desc: 'A web app connected to a coin-operated vendo machine that automatically starts the motorwash once coins are inserted, with a simple interface backed by a Firebase backend.',
    stack: ['React', 'JavaScript', 'Firebase'],
    hardware: ['ESP32', 'Arduino', 'Breadboard'],
    link: '',
  },
  {
    folder: 'mjdc-system',
    count: 3,
    category: 'Web Development',
    title: 'MJDC Vaccine and Wound Care Center Management System',
    desc: 'A website that manages patient records, vaccination and treatment history, and the clinic’s vaccine inventory in one organized system.',
    stack: ['React', 'JavaScript', 'XAMPP'],
    hardware: [],
    link: '',
  },
  {
    folder: 'expense-tracker',
    count: 3,
    category: 'Web Development',
    title: 'Expense Tracker',
    desc: 'A web app for recording and tracking expenses so spending stays organized and easy to review, with data stored in Supabase.',
    stack: ['React', 'JavaScript', 'Supabase'],
    hardware: [],
    link: '',
  },
  {
    folder: '3d-traditional-house',
    count: 5,
    category: '3D Modeling',
    title: '3D Traditional House Modeling',
    desc: 'A 3D model of my family’s house, built in 3ds Max with a focus on capturing the look and character of a traditional house.',
    stack: ['3ds Max'],
    hardware: [],
    link: '',
  },
]

// Ilang card ang nakikita ayon sa lapad ng screen
const getVisible = () => {
  if (typeof window === 'undefined') return 3
  if (window.innerWidth <= 640) return 1
  if (window.innerWidth <= 1000) return 2
  return 3
}

/* ===== Maliit na slider ng mga picture sa loob ng card ===== */
function ProjectImages({ project }) {
  const { folder, count, title } = project
  const [i, setI] = useState(0)

  // Walang extension; si SmartImage ang maghahanap kung jpg, png, atbp.
  const images = Array.from(
    { length: count },
    (_, n) => `/projects/${folder}/${n + 1}`
  )

  const prev = () => setI((v) => (v === 0 ? count - 1 : v - 1))
  const next = () => setI((v) => (v === count - 1 ? 0 : v + 1))

  return (
    <div
      className="project-media"
      /* Huwag madamay ang swipe ng malaking carousel */
      onTouchStart={(e) => e.stopPropagation()}
      onTouchEnd={(e) => e.stopPropagation()}
    >
      <div className="project-thumb">
        <div
          className="thumb-track"
          style={{ transform: `translateX(-${i * 100}%)` }}
        >
          {images.map((base, n) => (
            <SmartImage
              key={base}
              base={base}
              alt={`${title} screenshot ${n + 1}`}
              loading="lazy"
              draggable="false"
            />
          ))}
        </div>

        {count > 1 && (
          <>
            <button
              type="button"
              className="thumb-btn thumb-prev"
              onClick={prev}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              type="button"
              className="thumb-btn thumb-next"
              onClick={next}
              aria-label="Next image"
            >
              ›
            </button>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="thumb-dots">
          {images.map((_, n) => (
            <button
              type="button"
              key={n}
              className={`thumb-dot ${n === i ? 'thumb-dot-active' : ''}`}
              onClick={() => setI(n)}
              aria-label={`Image ${n + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function Projects() {
  const [visible, setVisible] = useState(getVisible)
  const [index, setIndex] = useState(0)
  const touchStart = useRef(null)

  const maxIndex = projects.length - visible
  const dots = Array.from({ length: maxIndex + 1 })

  useEffect(() => {
    const onResize = () => setVisible(getVisible())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    setIndex((i) => Math.min(i, projects.length - visible))
  }, [visible])

  const go = (i) => setIndex(Math.max(0, Math.min(i, maxIndex)))

  const onTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX
  }

  const onTouchEnd = (e) => {
    if (touchStart.current === null) return
    const diff = touchStart.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) go(index + (diff > 0 ? 1 : -1))
    touchStart.current = null
  }

  return (
    <section id="projects" className="section section-band">
      <div className="container">
        <span className="section-tag">Projects</span>
        <h2 className="section-title">
          FEATURED <span>PROJECTS</span>
        </h2>

        <div className="carousel">
          <button
            type="button"
            className="carousel-btn carousel-prev"
            onClick={() => go(index - 1)}
            disabled={index === 0}
            aria-label="Previous project"
          >
            ←
          </button>

          <div
            className="carousel-viewport"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="carousel-track"
              style={{ '--index': index, '--visible': visible }}
            >
              {projects.map((p) => (
                <article className="card project-card" key={p.title}>
                  <ProjectImages project={p} />

                  <div className="project-body">
                    <div className="project-head">
                      <div>
                        <span className="project-category">{p.category}</span>
                        <h3 className="project-title">{p.title}</h3>
                      </div>

                      {p.link && (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noreferrer"
                          className="project-arrow"
                          aria-label={`Open ${p.title}`}
                        >
                          ↗
                        </a>
                      )}
                    </div>

                    <p className="project-desc">{p.desc}</p>

                    <div className="project-tags">
                      {p.stack.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                      {p.hardware.map((t) => (
                        <span className="tag-hardware" key={t}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="carousel-btn carousel-next"
            onClick={() => go(index + 1)}
            disabled={index === maxIndex}
            aria-label="Next project"
          >
            →
          </button>
        </div>

        <div className="carousel-dots" role="tablist" aria-label="Project slides">
          {dots.map((_, i) => (
            <button
              type="button"
              key={i}
              className={`dot ${i === index ? 'dot-active' : ''}`}
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-selected={i === index}
              role="tab"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects