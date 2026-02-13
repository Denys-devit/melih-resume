import Section from '../components/Section'

const LANGUAGES = [
  { lang: 'Turkish', level: 'Native' },
  { lang: 'English', level: 'Upper-Intermediate (B2)' },
  { lang: 'German', level: 'Beginner (A1)' },
]

const Languages = () => (
  <Section id="languages">
    <h2>Languages</h2>
    <div className="languages__list">
      {LANGUAGES.map(({ lang, level }) => (
        <div key={lang} className="languages__item">
          <span className="languages__lang">{lang}</span>
          <span className="languages__level">{level}</span>
        </div>
      ))}
    </div>
  </Section>
)

export default Languages
