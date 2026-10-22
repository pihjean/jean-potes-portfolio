import '../styles/skills.css'

const coreSkills = [
  'Data Entry',
  'File Management',
  'Email Management',
  'Internet Research',
  'Calendar Management',
  'Scheduling',
  'Documentation',
  'Computer System Servicing (NCII)',
  'Detail-Oriented',
  'Organized',
  'Reliable',
]

const toolGroups = [
  {
    label: 'Frontend',
    items: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Next.js',
      'Vue.js',
      'React Native',
      'Flutter',
      'Expo',
    ],
  },
  {
    label: 'Backend & Database',
    items: ['PHP', 'MySQL', 'PostgreSQL', 'Supabase', 'Firebase'],
  },
  { label: 'Programming', items: ['C++', 'C#', 'Python', 'VB.NET'] },
  { label: 'API & Integration', items: ['RESTful APIs', 'Webhooks'] },
  { label: 'Automation', items: ['Zapier', 'n8n'] },
  { label: 'Desktop', items: ['Electron'] },
  { label: 'Version Control', items: ['Git'] },
  {
    label: 'Productivity',
    items: ['Microsoft Excel', 'Microsoft Word', 'Microsoft Teams', 'Google Workspace'],
  },
  { label: 'Design', items: ['Canva', 'Figma'] },
]

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <span className="section-tag">Tools & Services</span>
        <h2 className="section-title">
          TOOLS <span>I USE</span>
        </h2>

        <div className="skills-stack">
          {/* TOP: core skills */}
          <div className="skills-block">
            <h3 className="skills-heading">Core skills</h3>
            <div className="skill-pills">
              {coreSkills.map((s) => (
                <span className="skill-pill skill-pill-outline" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* BOTTOM: tools */}
          <div className="skills-block">
            <h3 className="skills-heading">Tools & technologies</h3>
            <div className="tool-groups">
              {toolGroups.map((g) => (
                <div className="tool-row" key={g.label}>
                  <span className="tool-label">{g.label}</span>
                  <div className="skill-pills">
                    {g.items.map((i) => (
                      <span className="skill-pill" key={i}>
                        {i}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills