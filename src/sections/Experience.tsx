import Section from '../components/Section'

const EXPERIENCES = [
  {
    company: 'Kipaş Holding | Kipaş Paper',
    role: 'Human Resources Intern',
    period: 'Feb 2025 – May 2025',
    points: [
      'Supported recruitment and onboarding processes end-to-end in a 1000+ employee industrial environment',
      'Assisted HR operations: personnel files, documentation, and ERP-based data entry/accuracy',
      'Supported payroll-related tasks: SGK entry/exit declarations, attendance tracking, monthly puantaj follow-up',
      'Gained practical exposure to severance & notice compensation calculation basics under Turkish labor law',
    ],
  },
  {
    company: 'Hisarlar Machine Factory',
    role: 'Human Resources Intern',
    period: 'Jul 2024 – Aug 2024',
    image: `${import.meta.env.BASE_URL}images/hero.jpg`,
    points: [
      'Organized and updated 60+ personnel files, ensuring documentation completeness and proper archiving',
      'Supported recruitment administration through candidate follow-ups, scheduling coordination, and document preparation',
      'Assisted onboarding/orientation processes; coordinated onboarding flow for 30+ interns',
      'Supported HR tracking/reporting tasks, including documentation of employee health status information',
    ],
  },
  {
    company: 'Matematik Röntgeni Company',
    role: 'Technical Support Specialist (Remote)',
    period: 'Jun 2021 – Sep 2021',
    points: [
      'Provided structured support to 500+ users, improving service quality through clear communication and step-by-step guidance',
      'Logged issues, tracked resolutions, and ensured follow-up—strengthening process tracking and documentation discipline',
      'Worked with multiple stakeholders (students/parents), building strong communication, patience, and problem-solving skills',
    ],
  },
]

const Experience = () => (
  <Section id="experience">
    <h2>Work Experience</h2>
    <div className="experience__list">
      {EXPERIENCES.map((exp) => (
        <article key={`${exp.company}-${exp.period}`} className="experience__card">
          {exp.image && (
            <div className="experience__image">
              <img src={exp.image} alt={exp.company} />
            </div>
          )}
          <div className="experience__content">
            <div className="experience__header">
              <h3>{exp.role}</h3>
              <p className="experience__company">{exp.company}</p>
              <p className="experience__period">{exp.period}</p>
            </div>
            <ul className="experience__points">
              {exp.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  </Section>
)

export default Experience
