import { type ReactNode } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

type Variant = 'fadeUp' | 'fadeIn' | 'slideLeft' | 'scale'

interface AnimateInProps {
  children: ReactNode
  variant?: Variant
  delay?: number
  className?: string
}

const AnimateIn = ({ children, variant = 'fadeUp', delay = 0, className = '' }: AnimateInProps) => {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <div
      ref={ref}
      className={`animate-in animate-in--${variant} ${isVisible ? 'animate-in--visible' : ''} ${className}`.trim()}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default AnimateIn
