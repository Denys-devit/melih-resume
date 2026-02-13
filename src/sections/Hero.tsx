import Section from '../components/Section'

const Hero = () => (
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
          <p className="hero__title">Human Resources · HR Operations · Recruitment & Onboarding</p>
          <p className="hero__tagline">
            HR Management graduate with hands-on experience supporting HR operations in large-scale industrial environments.
          </p>
          <div className="hero__cta">
            <a href="tel:+905059902671" className="btn btn--primary">+90 505 990 26 71</a>
            <a href={`${import.meta.env.BASE_URL}cv.pdf`} download className="btn btn--outline">Download CV</a>
            <a href="#contact" className="btn btn--outline">Get in Touch</a>
          </div>
          <p className="hero__location">📍 Eskişehir, Türkiye · Open to Relocation</p>
        </div>
      </div>
    </Section>
  </header>
)

export default Hero
