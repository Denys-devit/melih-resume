import Section from '../components/Section'
import { useLanguage } from '../contexts/LanguageContext'

const Skills = () => {
  const { t } = useLanguage()

  return (
    <Section id="skills">
      <h2>{t.skills.title}</h2>
      <ul className="skills__list">
        {t.skills.items.map((skill) => (
          <li key={skill} className="skills__item">{skill}</li>
        ))}
      </ul>
    </Section>
  )
}

export default Skills
