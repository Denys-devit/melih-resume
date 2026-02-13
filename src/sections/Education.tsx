import Section from '../components/Section'
import { useLanguage } from '../contexts/LanguageContext'

const Education = () => {
  const { t } = useLanguage()

  return (
    <Section id="education">
      <h2>{t.education.title}</h2>
      <div className="education__card">
        <h3>{t.education.school}</h3>
        <p className="education__degree">{t.education.degree}</p>
        <p className="education__courses">{t.education.courses}</p>
      </div>
    </Section>
  )
}

export default Education
