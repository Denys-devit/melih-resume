import { type ReactNode } from 'react'

interface SectionProps {
  id?: string
  className?: string
  children: ReactNode
}

const Section = ({ id, className = '', children }: SectionProps) => (
  <section id={id} className={`section ${className}`.trim()}>
    <div className="section__inner">{children}</div>
  </section>
)

export default Section
