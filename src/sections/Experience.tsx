import Section from '../components/Section'
import { useLanguage } from '../contexts/LanguageContext'

const EXPERIENCES = [
  {
    company: 'Kipaş Holding | Kipaş Paper',
    key: 'kipas' as const,
    image: undefined as string | undefined,
  },
  {
    company: 'Hisarlar Machine Factory',
    key: 'hisarlar' as const,
    image: `${import.meta.env.BASE_URL}images/hero.jpg`,
  },
  {
    company: 'Matematik Röntgeni Company',
    key: 'matematik' as const,
    image: undefined as string | undefined,
  },
]

const Experience = () => {
  const { t } = useLanguage()

  return (
    <Section id="experience">
      <h2>{t.experience.title}</h2>
      <div className="experience__list">
        {EXPERIENCES.map(({ company, key, image }) => {
          const exp = t.experience[key]
          return (
            <article key={`${company}-${exp.period}`} className="experience__card">
              {image && (
                <div className="experience__image">
                  <img src={image} alt={company} />
                </div>
              )}
              <div className="experience__content">
                <div className="experience__header">
                  <h3>{exp.role}</h3>
                  <p className="experience__company">{company}</p>
                  <p className="experience__period">{exp.period}</p>
                </div>
                <ul className="experience__points">
                  {exp.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          )
        })}
      </div>
    </Section>
  )
}

export default Experience
