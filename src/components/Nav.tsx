const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]

const Nav = () => (
  <nav className="nav">
    <div className="nav__inner">
      <a href="#" className="nav__logo">MD</a>
      <ul className="nav__links">
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}>
            <a href={href}>{label}</a>
          </li>
        ))}
        <li>
          <a href={`${import.meta.env.BASE_URL}cv.pdf`} download className="nav__cv">Download CV</a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Nav
