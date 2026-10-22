import '../styles/services.css'

/* Minimalist line icons (outline lang, kulay galing sa CSS) */
const Svg = ({ children }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
)

const icons = {
  web: (
    <Svg>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
      <path d="M8 14l-2 2 2 2" />
      <path d="M16 14l2 2-2 2" />
    </Svg>
  ),
  mobile: (
    <Svg>
      <rect x="7" y="2.5" width="10" height="19" rx="2" />
      <path d="M11 18.5h2" />
    </Svg>
  ),
  iot: (
    <Svg>
      <rect x="8" y="8" width="8" height="8" rx="1.5" />
      <path d="M10 8V4M14 8V4M10 20v-4M14 20v-4M8 10H4M8 14H4M20 10h-4M20 14h-4" />
    </Svg>
  ),
  support: (
    <Svg>
      <rect x="3" y="4" width="14" height="10" rx="1.5" />
      <path d="M1.5 18h17" />
      <path d="M21.5 8.5a3 3 0 0 1-4 3.7l-3.2 3.2a1.4 1.4 0 0 0 2 2l3.2-3.2a3 3 0 0 0 3.7-4l-1.8 1.8-1.4-.4-.4-1.4z" />
    </Svg>
  ),
  admin: (
    <Svg>
      <path d="M4 6a2 2 0 0 1 2-2h4l2 2h6a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
      <path d="M8 13h8M8 16h5" />
    </Svg>
  ),
  design: (
    <Svg>
      <path d="M4 20l1-4L16.5 4.5a2.1 2.1 0 0 1 3 3L8 19z" />
      <path d="M14.5 6.5l3 3" />
    </Svg>
  ),
}

const services = [
  {
    icon: icons.web,
    title: 'Web Development',
    desc: 'Functional websites and systems built around user and business requirements.',
    tags: ['React', 'JavaScript', 'PHP', 'MySQL', 'PostgreSQL', 'Firebase', 'Supabase'],
  },
  {
    icon: icons.mobile,
    title: 'Mobile App Development',
    desc: 'Cross-platform mobile apps that run on both Android and iOS.',
    tags: ['React Native', 'Flutter', 'Expo'],
  },
  {
    icon: icons.iot,
    title: 'IoT & Programming',
    desc: 'Software paired with hardware, like my interactive learning tool for children with autism.',
    tags: ['IoT', 'Python', 'C++', 'C#', 'Electron'],
  },
  {
    icon: icons.support,
    title: 'IT Support',
    desc: 'Troubleshooting, system setup, and helping users solve technology problems.',
    tags: ['Troubleshooting', 'System Setup', 'Computer System Servicing NCII'],
  },
  {
    icon: icons.admin,
    title: 'Administrative Support',
    desc: 'Employee records, data entry, documentation, and organized file management.',
    tags: ['Data Entry', 'Records', 'Google Workspace', 'Excel', 'Scheduling'],
  },
  {
    icon: icons.design,
    title: 'UI/UX Design',
    desc: 'Clean, user-friendly interfaces designed before they are built.',
    tags: ['Figma', 'Canva', 'Wireframes', 'Prototypes'],
  },
]

function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <span className="section-tag">What I Do</span>
        <h2 className="section-title">
          SERVICES <span>I CAN PROVIDE</span>
        </h2>

        <div className="services-grid">
          {services.map((s) => (
            <div className="card service-card" key={s.title}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="service-tags">
                {s.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services