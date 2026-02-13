import Section from '../components/Section'

const SKILLS = [
  'Recruitment & Onboarding Support',
  'Personnel Files, Documentation & HR Administration',
  'Attendance Tracking (Timesheet) & HR Reporting',
  'SGK Entry/Exit Declarations & E-declaration Systems',
  'HR Systems: SAP HCM / SuccessFactors',
  'MS Office (Excel, Word, PowerPoint)',
  'Teams | Google Workspace | Canva | Zoom',
  'Remote Support Tools',
]

const Skills = () => (
  <Section id="skills">
    <h2>Core Skills</h2>
    <ul className="skills__list">
      {SKILLS.map((skill) => (
        <li key={skill} className="skills__item">{skill}</li>
      ))}
    </ul>
  </Section>
)

export default Skills
