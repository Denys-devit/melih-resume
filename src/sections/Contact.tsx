import Section from '../components/Section'
import { useLanguage } from '../contexts/LanguageContext'

const Contact = () => {
  const { t } = useLanguage()

  return (
    <Section id="contact" className="contact">
      <h2>{t.contact.title}</h2>
      <div className="contact__content">
        <a href="tel:+905059902671" className="contact__link">📞 +90 505 990 26 71</a>
        <p className="contact__location">📍 {t.contact.location}</p>
        <p className="contact__note">{t.contact.note}</p>
      </div>
    </Section>
  )
}

export default Contact
