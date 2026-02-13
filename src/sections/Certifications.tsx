import Section from '../components/Section'

const CERTIFICATIONS = [
  {
    name: 'Recruiting, Hiring, and Onboarding Employees',
    issuer: 'Coursera (University of Minnesota), 2025',
    description: 'End-to-end recruitment process, job posting, candidate sourcing, screening, and interview coordination.',
  },
  {
    name: 'Managing Employee Performance',
    issuer: 'Coursera (University of Minnesota), 2024',
    description: 'KPI- and OKR-based performance management approaches.',
  },
  {
    name: 'Diversity and Inclusion for HR Professionals',
    issuer: 'Coursera (UC Irvine), 2024',
    description: 'DEI principles, bias-reduction, inclusive policy design.',
  },
  {
    name: 'SAP HR + SuccessFactors Training',
    issuer: 'Impress Academy, 2025',
    description: 'Core HR data management, organizational structures, compliance workflows.',
  },
]

const Certifications = () => (
  <Section id="certifications">
    <h2>Certifications</h2>
    <div className="certifications__list">
      {CERTIFICATIONS.map((cert) => (
        <div key={cert.name} className="certifications__card">
          <h3>{cert.name}</h3>
          <p className="certifications__issuer">{cert.issuer}</p>
          <p className="certifications__description">{cert.description}</p>
        </div>
      ))}
    </div>
  </Section>
)

export default Certifications
