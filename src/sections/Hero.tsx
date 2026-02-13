import Section from '../components/Section'
import { useLanguage } from '../contexts/LanguageContext'

const Hero = () => {
  const { t } = useLanguage()

  return (
    <header className="hero">
      <Section className="hero__inner">
        <div className="hero__content">
          <div className="hero__image-wrapper">
            <img
              src={`${import.meta.env.BASE_URL}images/experience.jpg`}
              alt="Melih Değirmenci - HR Professional"
              className="hero__image"
            />
          </div>
          <div className="hero__text">
            <h1>Melih Değirmenci</h1>
            <p className="hero__title">{t.hero.title}</p>
            <p className="hero__tagline">{t.hero.tagline}</p>
            <div className="hero__cta">
              <a href="tel:+905059902671" className="btn btn--primary">+90 505 990 26 71</a>
              <a href={`${import.meta.env.BASE_URL}cv.pdf`} download className="btn btn--outline">{t.nav.downloadCv}</a>
              <a href="#contact" className="btn btn--outline">{t.hero.getInTouch}</a>
            </div>
            <p className="hero__location">📍 {t.hero.location}</p>
          </div>
        </div>
      </Section>
    </header>
  )
}

export default Hero
