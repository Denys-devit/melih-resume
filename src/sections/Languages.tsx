import Section from '../components/Section'
import { useLanguage } from '../contexts/LanguageContext'

const Languages = () => {
  const { t } = useLanguage()

  return (
    <Section id="languages">
      <h2>{t.languages.title}</h2>
      <div className="languages__list">
        {t.languages.items.map(({ lang, level }) => (
          <div key={lang} className="languages__item">
            <span className="languages__lang">{lang}</span>
            <span className="languages__level">{level}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Languages
