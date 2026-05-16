import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoSrc from '../assets/Philippians Logo.jpg';

const navItems = [
  {
    label: 'Home',
    href: '/',
    isActive: ({ pathname, hash }) => pathname === '/' && (!hash || hash === '#home'),
  },
  {
    label: 'About Us',
    href: '/#about',
    isActive: ({ pathname, hash }) => pathname === '/' && hash === '#about',
  },
  {
    label: 'Admissions',
    href: '/admissions',
    isActive: ({ pathname }) => pathname === '/admissions',
  },
  {
    label: 'Academics',
    href: '/#academics',
    isActive: ({ pathname, hash }) => pathname === '/' && hash === '#academics',
  },
  {
    label: 'School Events',
    href: '/school-events',
    isActive: ({ pathname }) => pathname === '/school-events',
  },
  {
    label: 'Campus Life',
    href: '/campus-life',
    isActive: ({ pathname }) => pathname === '/campus-life',
  },
  {
    label: 'Contact Us',
    href: '/#contact',
    isActive: ({ pathname, hash }) => pathname === '/' && hash === '#contact',
  },
];

function SiteNav() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 20);
    };

    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateScrollState);
    };
  }, []);

  useEffect(() => {
    setMobileNavOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <div className={`site-nav${isScrolled ? ' scrolled' : ''}`}>
      <style>{navStyles}</style>
      <header className="hero-header">
        <Link to="/" className="brand-block" aria-label="Philippians Academy home">
          <img src={logoSrc} alt="Philippians Academy logo" className="brand-logo" />
          <span className="brand-text">
            <span className="brand-name">Philippians Academy</span>
          </span>
        </Link>

        <div className="nav-area">
          <nav className="hero-nav-links" aria-label="Main navigation">
            {navItems.map((item) => {
              const active = item.isActive(location);

              return (
                <Link
                  to={item.href}
                  className={`nav-link${active ? ' active' : ''}`}
                  aria-current={active ? 'page' : undefined}
                  key={item.label}
                >
                  {item.label}
                </Link>
              );
            })}
            <button className="hero-login-button">Login</button>
          </nav>

          <button
            type="button"
            className={`mobile-toggle${mobileNavOpen ? ' open' : ''}`}
            aria-expanded={mobileNavOpen}
            aria-label={mobileNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMobileNavOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <nav className={`mobile-menu${mobileNavOpen ? ' open' : ''}`} aria-label="Mobile navigation">
        {navItems.map((item) => {
          const active = item.isActive(location);

          return (
            <Link
              to={item.href}
              className={`mobile-nav-link${active ? ' active' : ''}`}
              aria-current={active ? 'page' : undefined}
              key={item.label}
            >
              {item.label}
            </Link>
          );
        })}
        <button className="hero-login-button">Login</button>
      </nav>
    </div>
  );
}

const navStyles = `
.site-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  padding: clamp(18px, 2vw, 28px) clamp(24px, 3vw, 48px);
  color: #ffffff;
  background: linear-gradient(180deg, rgba(8, 24, 60, 0.84), rgba(8, 24, 60, 0.68));
  border-bottom: 1px solid rgba(242, 193, 78, 0.22);
  box-shadow: 0 18px 46px rgba(2, 8, 23, 0.2);
  backdrop-filter: blur(18px) saturate(142%);
  -webkit-backdrop-filter: blur(18px) saturate(142%);
  transition: padding 300ms ease, background 300ms ease, box-shadow 300ms ease, border-color 300ms ease;
}

.site-nav::after {
  content: "";
  position: absolute;
  left: clamp(24px, 3vw, 48px);
  right: clamp(24px, 3vw, 48px);
  bottom: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(242, 193, 78, 0.55), transparent);
  opacity: 0.76;
  pointer-events: none;
}

.site-nav.scrolled {
  padding: 12px clamp(22px, 3vw, 44px);
  background: linear-gradient(180deg, rgba(8, 24, 60, 0.94), rgba(8, 24, 60, 0.84));
  border-bottom-color: rgba(242, 193, 78, 0.34);
  box-shadow: 0 22px 54px rgba(2, 8, 23, 0.28);
}

.hero-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
}

.brand-block {
  display: flex;
  align-items: center;
  gap: 18px;
  min-width: 0;
  color: inherit;
  text-decoration: none;
  transition: transform 300ms ease, filter 300ms ease;
}

.brand-block:hover {
  transform: translateY(-1px);
  filter: drop-shadow(0 8px 16px rgba(242, 193, 78, 0.12));
}

.brand-logo {
  width: 52px;
  height: 52px;
  flex: 0 0 auto;
  object-fit: cover;
  border-radius: 999px;
  border: 2px solid rgba(242, 193, 78, 0.35);
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.24), 0 0 0 6px rgba(255, 255, 255, 0.045);
}

.brand-text {
  min-width: 0;
}

.brand-name {
  display: block;
  color: rgba(255, 255, 255, 0.97);
  font-family: 'Cinzel', Georgia, serif;
  font-size: clamp(0.92rem, 1.16vw, 1.1rem);
  font-weight: 700;
  letter-spacing: 0.12em;
  line-height: 1.18;
  text-transform: uppercase;
  text-shadow: 0 1px 10px rgba(242, 193, 78, 0.18);
}

.nav-area {
  display: flex;
  align-items: center;
  gap: 18px;
  flex-shrink: 0;
}

.hero-nav-links {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: clamp(14px, 1.35vw, 24px);
  flex-wrap: nowrap;
}

.nav-link,
.mobile-nav-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.9);
  font-size: clamp(0.72rem, 0.9vw, 0.86rem);
  font-weight: 700;
  letter-spacing: 0.07em;
  line-height: 1.2;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;
  transition: color 300ms ease, transform 300ms ease, text-shadow 300ms ease;
}

.nav-link {
  padding: 10px 0;
}

.nav-link::after,
.mobile-nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 3px;
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(90deg, rgba(242, 193, 78, 0), #f2c14e, rgba(242, 193, 78, 0));
  box-shadow: 0 0 14px rgba(242, 193, 78, 0.28);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 300ms ease;
}

.nav-link:hover,
.nav-link.active,
.mobile-nav-link:hover,
.mobile-nav-link.active {
  color: #f2c14e;
  transform: translateY(-2px);
  text-shadow: 0 0 18px rgba(242, 193, 78, 0.22);
}

.nav-link:hover::after,
.nav-link.active::after,
.mobile-nav-link:hover::after,
.mobile-nav-link.active::after {
  transform: scaleX(1);
}

.hero-login-button {
  border: 1px solid rgba(242, 193, 78, 0.84);
  border-radius: 999px;
  background: linear-gradient(135deg, #f2c14e, #d99a21);
  color: #08183c;
  padding: 13px 28px;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.38);
  cursor: pointer;
  font-weight: 800;
  letter-spacing: 0.03em;
  transition: transform 300ms ease, box-shadow 300ms ease, filter 300ms ease;
}

.hero-login-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 38px rgba(0, 0, 0, 0.24), 0 0 26px rgba(242, 193, 78, 0.2);
  filter: saturate(1.05);
}

.mobile-toggle {
  display: none;
  min-width: 52px;
  min-height: 52px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  padding: 0;
  border: 1px solid rgba(242, 193, 78, 0.34);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: transform 300ms ease, background 300ms ease, box-shadow 300ms ease;
}

.mobile-toggle:hover {
  transform: translateY(-2px);
  background: rgba(242, 193, 78, 0.12);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.18);
}

.mobile-toggle span {
  width: 22px;
  height: 2px;
  border-radius: 999px;
  background: #f2c14e;
  transition: transform 260ms ease, opacity 220ms ease;
}

.mobile-toggle.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.mobile-toggle.open span:nth-child(2) {
  opacity: 0;
}

.mobile-toggle.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.mobile-menu {
  display: none;
  width: 100%;
  max-width: 1500px;
  flex-direction: column;
  gap: 8px;
  margin: 14px auto 0;
  padding: 0;
  border-top: 1px solid rgba(242, 193, 78, 0.18);
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  pointer-events: none;
  transform: translateY(-10px);
  transition: max-height 320ms ease, opacity 240ms ease, transform 260ms ease, padding 260ms ease;
}

.mobile-menu.open {
  max-height: 390px;
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
  padding-top: 16px;
}

.mobile-nav-link {
  width: 100%;
  padding: 12px 4px;
}

.mobile-nav-link::after {
  right: auto;
  width: 52px;
  bottom: 5px;
  transform-origin: left;
}

.mobile-menu .hero-login-button {
  width: 100%;
  margin-top: 8px;
}

@media (max-width: 1180px) {
  .site-nav {
    padding: 16px 20px;
  }

  .site-nav.scrolled {
    padding: 12px 18px;
  }

  .hero-header {
    width: 100%;
    align-items: center;
    flex-wrap: nowrap;
  }

  .hero-nav-links {
    display: none !important;
  }

  .mobile-toggle {
    display: inline-flex !important;
  }

  .mobile-menu {
    display: flex;
    border-radius: 0 0 22px 22px;
    background: linear-gradient(180deg, rgba(8, 24, 60, 0.78), rgba(8, 24, 60, 0.58));
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
  }

  .brand-block {
    flex: 1 1 auto;
    gap: 14px;
  }
}

@media (max-width: 576px) {
  .site-nav {
    padding: 14px 18px;
  }

  .site-nav.scrolled {
    padding: 10px 16px;
  }

  .brand-block {
    gap: 12px;
  }

  .brand-logo {
    width: 48px;
    height: 48px;
  }

  .brand-name {
    font-size: clamp(0.78rem, 3.1vw, 0.95rem);
    letter-spacing: 0.095em;
  }

  .mobile-toggle {
    min-width: 48px;
    min-height: 48px;
    border-radius: 14px;
  }
}
`;

export default SiteNav;
