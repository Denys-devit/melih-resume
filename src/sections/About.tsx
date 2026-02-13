import Section from '../components/Section'
import { useLanguage } from '../contexts/LanguageContext'

const About = () => {
  const { t } = useLanguage()

  return (
    <Section id="about">
      <h2>{t.about.title}</h2>
      <div className="about__content">
        <p>{t.about.p1}</p>
        <p>{t.about.p2}</p>
        <p>{t.about.p3}</p>
      </div>
    </Section>
  )
}

export default About
