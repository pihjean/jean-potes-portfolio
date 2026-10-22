import SmartImage from './SmartImage'
import '../styles/uiux.css'

const designs = [
  {
    image: '/uiux/asd-learning-tool',
    title: 'Learning Interactive Tool for Teaching Children with Autism Spectrum Disorder',
    link: 'https://www.figma.com/design/O33whT8NHKaLrDlaShk5hu/Untitled?t=TsgR176J5uyF5BHe-1/',
  },
  {
    image: '/uiux/mjdc-system',
    title: 'MJDC Vaccine and Wound Care Center Management System',
    link: 'https://www.figma.com/design/o0fkF9rff8y3dbdH0HRa3W/SAD?t=TsgR176J5uyF5BHe-1/',
  },
  {
    image: '/uiux/linease-co',
    title: 'LinEase Co.',
    link: 'https://www.figma.com/design/eNG1hkGnmir7oJT1P0R1WA/Untitled?t=mX9iawXKUCHEm1Du-1/',
  },
  {
    image: '/uiux/eclat-skincare',
    title: 'Eclat Skincare',
    link: 'https://www.figma.com/design/BzWD6SuzpeYpEPUVjjHpwP/Untitled?t=mX9iawXKUCHEm1Du-1/',
  },
]

const ads = [
  {
    image: '/graphic/product-focused',
    concept: 'Product-focused',
  },
  {
    image: '/graphic/benefits',
    concept: 'Benefits',
  },
  {
    image: '/graphic/before-after',
    concept: 'Before & After',
  },
]

function Uiux() {
  return (
    <section id="uiux" className="section">
      <div className="container">
        {/* ===== UI/UX ===== */}
        <span className="section-tag">UI/UX</span>
        <h2 className="section-title">
          UI/UX <span>DESIGNS</span>
        </h2>

        <div className="uiux-grid">
          {designs.map((d) => (
            <article className="card uiux-card" key={d.title}>
              <div className="uiux-thumb">
                <SmartImage base={d.image} alt={d.title} loading="lazy" />
              </div>

              <div className="uiux-body">
                <span className="uiux-category">UI/UX Design</span>
                <h3 className="uiux-title">{d.title}</h3>

                {/* Figma tag at arrow, magkatapat sa baba */}
                <div className="uiux-footer">
                  <span className="uiux-tag">Figma</span>

                  <a
                    href={d.link}
                    target="_blank"
                    rel="noreferrer"
                    className="uiux-arrow"
                    aria-label={`Open ${d.title} in Figma`}
                  >
                    ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ===== GRAPHIC DESIGN ===== */}
        <div className="graphic">
          <span className="section-tag">Graphic Design</span>
          <h2 className="section-title">
            STATIC <span>ADS</span>
          </h2>

          <div className="graphic-grid">
            {ads.map((a) => (
              <figure className="card graphic-card" key={a.concept}>
                <div className="graphic-thumb">
                  <SmartImage
                    base={a.image}
                    alt={`${a.concept} static ad`}
                    loading="lazy"
                  />
                </div>

                <figcaption className="graphic-caption">
                  <span className="graphic-concept">{a.concept}</span>
                  <span className="graphic-tool">Canva</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Uiux