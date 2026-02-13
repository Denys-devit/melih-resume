import { useState, useEffect } from 'react'
import GB from 'country-flag-icons/react/3x2/GB'
import TR from 'country-flag-icons/react/3x2/TR'
import { FiMoon, FiSun } from 'react-icons/fi'
import { useLanguage } from '../contexts/LanguageContext'
import { useTheme } from '../contexts/ThemeContext'

const NAV_KEYS = [
  { href: '#about', key: 'about' as const },
  { href: '#skills', key: 'skills' as const },
  { href: '#experience', key: 'experience' as const },
  { href: '#education', key: 'education' as const },
  { href: '#certifications', key: 'certifications' as const },
  { href: '#gallery', key: 'gallery' as const },
  { href: '#contact', key: 'contact' as const },
]

const Nav = () => {
  const { locale, setLocale, t } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('nav-menu-open', menuOpen)
    return () => document.body.classList.remove('nav-menu-open')
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="nav">
      <div className="nav__inner">
        <a href="#" className="nav__logo" onClick={closeMenu}>MD</a>
        <div className="nav__right">
          <ul className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
          {NAV_KEYS.map(({ href, key }) => (
            <li key={href}>
              <a href={href} onClick={closeMenu}>{t.nav[key]}</a>
            </li>
          ))}
          <li>
            <a href={`${import.meta.env.BASE_URL}cv.pdf`} download className="nav__cv" onClick={closeMenu}>{t.nav.downloadCv}</a>
          </li>
          </ul>
          <div className="nav__actions">
            <button
              type="button"
              className="nav__lang-toggle"
              onClick={() => setLocale(locale === 'en' ? 'tr' : 'en')}
              aria-label={locale === 'en' ? 'Türkçe\'ye geç' : 'Switch to English'}
              title={locale === 'en' ? 'Türkçe' : 'English'}
            >
              {locale === 'en' ? (
                <>
                  <GB className="nav__flag" title="English" />
                  <span>EN</span>
                </>
              ) : (
                <>
                  <TR className="nav__flag" title="Türkçe" />
                  <span>TR</span>
                </>
              )}
            </button>
            <button
              type="button"
              className="nav__theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            >
              {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            <button
              type="button"
              className={`nav__hamburger ${menuOpen ? 'nav__hamburger--open' : ''}`}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
