import Section from '../components/Section'
import { useLanguage } from '../contexts/LanguageContext'

const Certifications = () => {
  const { t } = useLanguage()

  return (
    <Section id="certifications">
      <h2>{t.certifications.title}</h2>
      <div className="certifications__list">
        {t.certifications.items.map((cert) => (
          <div key={cert.name} className="certifications__card">
            <h3>{cert.name}</h3>
            <p className="certifications__issuer">{cert.issuer}</p>
            <p className="certifications__description">{cert.description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Certifications
