import '../styles/experience.css'

const experiences = [
  {
    date: 'February 2026 – May 2026',
    category: 'System Development',
    title: 'Intern, System Developer / Administrative Support',
    company: 'Human Resource Management Office, LGU Santa Elena',
    location: 'Santa Elena, Camarines Norte',
    points: [
      'Developed an offline database system for the Human Resource Management Office.',
      'Designed modules for managing employee records and HR information.',
      'Encoded and entered employee data into the developed system.',
      'Tested and debugged the system to ensure proper functionality and reliability.',
      'Assisted in organizing and updating employee records.',
    ],
  },
  {
    date: 'October 2024 – November 2025',
    category: 'Web Development',
    title: 'Freelance Web Developer',
    company: 'Freelance',
    location: 'Camarines Norte',
    projects: [
      {
        name: 'Parish Appointment System',
        date: 'Nov 2024 – Nov 2025',
        points: [
          'Built an online appointment booking system with date and time selection.',
          'Implemented appointment status tracking (pending, approved).',
          'Developed a secretary panel for managing schedules and parish records.',
        ],
      },
      {
        name: 'Senior High School Management System',
        date: 'Oct 2024 – Nov 2025',
        points: [
          'Developed modules for student records, subjects, and grade management.',
          'Implemented role-based access for administrators, teachers, parents and students.',
          'Designed dashboards to display academic data clearly and efficiently.',
        ],
      },
    ],
  },
]

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <span className="section-tag">Experience</span>
        <h2 className="section-title">
          WORK <span>EXPERIENCE</span>
        </h2>

        <div className="exp-list">
          {experiences.map((e) => (
            <article className="exp-item" key={e.title}>
              <div className="exp-meta">
                <p className="exp-date">{e.date}</p>
                <p className="exp-category">{e.category}</p>
              </div>

              <div className="exp-body">
                <h3 className="exp-title">{e.title}</h3>
                <p className="exp-company">{e.company}</p>
                <p className="exp-location">{e.location}</p>

                {/* Intern: diretsong bullet points */}
                {e.points && (
                  <ul className="exp-points">
                    {e.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                )}

                {/* Freelance: magkasunod na projects sa ilalim ng iisang title */}
                {e.projects &&
                  e.projects.map((proj) => (
                    <div className="exp-project" key={proj.name}>
                      <div className="exp-project-head">
                        <h4>{proj.name}</h4>
                        <span>{proj.date}</span>
                      </div>

                      <ul className="exp-points">
                        {proj.points.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience