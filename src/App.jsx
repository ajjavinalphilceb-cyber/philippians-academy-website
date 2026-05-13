import logoSrc from './assets/Philippians Logo.jpg';
import heroBanner from './assets/hero banner.png';

const responsiveStyles = `
.hero-content { max-width: 1500px; margin: 0 auto; }
.hero-nav-links a { white-space: nowrap; }
.hero-enroll-button { white-space: nowrap; }
.hero-headline { font-size: 64px; }
.hero-subheadline { font-size: 20px; }
.program-bar { width: calc(100% - 96px); }
.value-grid { gap: 18px; }

@media (max-width: 1060px) {
  .hero-content { padding: 28px 32px 32px; }
  .hero-header { gap: 18px; margin-bottom: 38px; }
  .hero-nav-links { gap: 16px; }
  .hero-nav-links a { display: none; }
  .hero-enroll-button { margin-left: auto; }
  .hero-headline { font-size: 54px; }
  .hero-subheadline { font-size: 18px; max-width: 100%; }
  .program-bar { width: calc(100% - 64px); }
  .program-bar .program-card { flex: 1 1 220px; min-width: 220px; }
}

@media (max-width: 720px) {
  .hero-content { padding: 20px 20px 24px; }
  .hero-header { flex-direction: column; align-items: flex-start; margin-bottom: 28px; }
  .hero-nav-links { width: 100%; justify-content: flex-start; gap: 12px; }
  .hero-nav-links a { display: none; }
  .hero-enroll-button { width: 100%; }
  .hero-headline { font-size: 38px; line-height: 1.05; }
  .hero-subheadline { font-size: 16px; line-height: 1.75; }
  .value-grid { grid-template-columns: 1fr; }
  .program-bar { width: calc(100% - 40px); bottom: 14px; flex-wrap: wrap; }
  .program-bar .program-card { min-width: calc(50% - 8px); }
}
`;

function App() {
  return (
    <main style={page}>
      <style>{responsiveStyles}</style>
      <section style={hero}>
        <div style={heroOverlay} />

        <div style={heroContent} className="hero-content">
          <header style={heroHeader} className="hero-header">
            <div style={brandBlock}>
              <img src={logoSrc} alt="Philippians Academy logo" style={brandLogo} />
              <div>
                <div style={brandName}>Philippians Academy</div>
                <div style={brandAddress}>
                  1316 Haise Street, Moonwalk Village, Parañaque City
                </div>
              </div>
            </div>

            <div style={topNav} className="hero-nav-links">
              <a href="#about" style={navLink}>About Us</a>
              <a href="#academics" style={navLink}>Academics</a>
              <a href="#admissions" style={navLink}>Admissions</a>
              <a href="#student-life" style={navLink}>Student Life</a>
              <a href="#contact" style={navLink}>Contact</a>
              <button style={enrollButton} className="hero-enroll-button">Enroll Now</button>
            </div>
          </header>

          <div style={heroBody}>
            <div style={heroText}>
              <h1 style={headline} className="hero-headline">
                Faith. Excellence.
                <br />
                <span style={headlineAccent}>Purpose.</span>
              </h1>

              <p style={subheadline} className="hero-subheadline">
                Guiding hearts. Developing minds.
                <br />
                Preparing leaders for a greater tomorrow.
              </p>

              <div style={valueGrid}>
                <div style={valueItem}>
                  <div style={valueIcon}>✝</div>
                  <div>
                    <div style={valueTitle}>Christ-Centered Education</div>
                  </div>
                </div>
                <div style={valueItem}>
                  <div style={valueIcon}>📘</div>
                  <div>
                    <div style={valueTitle}>Academic Excellence</div>
                  </div>
                </div>
                <div style={valueItem}>
                  <div style={valueIcon}>🤝</div>
                  <div>
                    <div style={valueTitle}>Values-Driven Community</div>
                  </div>
                </div>
              </div>

              <button style={discoverButton}>Discover More</button>
            </div>
          </div>
        </div>

        <div style={programBar} className="program-bar">
          <div style={programCard} className="program-card">
            <div style={programLabel}>Pre-School</div>
            <div style={programText}>Nurturing early learners</div>
          </div>
          <div style={programCard} className="program-card">
            <div style={programLabel}>Elementary</div>
            <div style={programText}>Building strong foundations</div>
          </div>
          <div style={programCard} className="program-card">
            <div style={programLabel}>Junior High School</div>
            <div style={programText}>Empowering future leaders</div>
          </div>
        </div>
      </section>
    </main>
  );
}

const page = {
  width: '100%',
  minHeight: '100vh',
  fontFamily: 'Inter, Arial, sans-serif',
  color: 'white',
};

const hero = {
  position: 'relative',
  height: '100vh',
  width: '100%',
  overflow: 'hidden',
  backgroundImage: `url(${heroBanner})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center top',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const heroOverlay = {
  position: 'absolute',
  inset: 0,
  background:
    'linear-gradient(90deg, rgba(8, 24, 60, 0.96) 0%, rgba(8, 24, 60, 0.72) 28%, rgba(8, 24, 60, 0.18) 58%, rgba(8, 24, 60, 0.04) 84%, transparent 100%)',
  pointerEvents: 'none',
};

const heroContent = {
  position: 'relative',
  zIndex: 1,
  width: '100%',
  maxWidth: '1500px',
  padding: '32px 48px 36px',
  boxSizing: 'border-box',
};

const heroHeader = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '24px',
  marginBottom: '38px',
  flexWrap: 'wrap',
};

const brandBlock = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  minWidth: '280px',
};

const brandLogo = {
  width: '48px',
  height: '48px',
  objectFit: 'cover',
  borderRadius: '999px',
  border: '2px solid rgba(255,255,255,0.18)',
  boxShadow: '0 12px 35px rgba(0, 0, 0, 0.22)',
};

const brandName = {
  fontSize: '18px',
  fontWeight: 800,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'white',
};

const brandAddress = {
  marginTop: '6px',
  fontSize: '14px',
  color: 'rgba(255,255,255,0.82)',
  lineHeight: 1.6,
};

const topNav = {
  display: 'flex',
  alignItems: 'center',
  gap: '28px',
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
};

const navLink = {
  fontSize: '14px',
  fontWeight: 600,
  color: 'rgba(255,255,255,0.92)',
  textDecoration: 'none',
};

const enrollButton = {
  background: 'rgba(242, 193, 78, 0.95)',
  color: 'rgb(17, 24, 39)',
  border: 'none',
  padding: '14px 28px',
  borderRadius: '999px',
  fontWeight: 700,
  cursor: 'pointer',
  boxShadow: '0 14px 30px rgba(0,0,0,0.18)',
};

const heroBody = {
  display: 'flex',
  width: '100%',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  minHeight: 'calc(100vh - 170px)',
};

const heroText = {
  maxWidth: '680px',
  marginTop: '0',
};

const headline = {
  fontSize: '72px',
  lineHeight: '0.95',
  fontWeight: 900,
  margin: 0,
  color: 'white',
};

const headlineAccent = {
  color: 'rgb(242, 193, 78)',
};

const subheadline = {
  marginTop: '28px',
  marginBottom: '40px',
  fontSize: '20px',
  lineHeight: 1.8,
  maxWidth: '520px',
  color: 'rgba(255,255,255,0.88)',
};

const valueGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  gap: '18px',
  marginBottom: '40px',
};

const valueItem = {
  display: 'flex',
  alignItems: 'center',
  gap: '14px',
  padding: '18px 20px',
  background: 'rgba(255,255,255,0.08)',
  border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: '20px',
  backdropFilter: 'blur(12px)',
};

const valueIcon = {
  minWidth: '44px',
  minHeight: '44px',
  borderRadius: '14px',
  background: 'rgba(242, 193, 78, 0.15)',
  color: 'rgb(242, 193, 78)',
  display: 'grid',
  placeItems: 'center',
  fontSize: '18px',
};

const valueTitle = {
  fontSize: '15px',
  fontWeight: 700,
  color: 'white',
};

const discoverButton = {
  background: 'rgb(242, 193, 78)',
  color: 'rgb(17, 24, 39)',
  border: 'none',
  padding: '16px 30px',
  borderRadius: '999px',
  fontSize: '16px',
  fontWeight: 700,
  cursor: 'pointer',
  boxShadow: '0 16px 30px rgba(0,0,0,0.2)',
};

const programBar = {
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  bottom: '18px',
  width: 'calc(100% - 96px)',
  maxWidth: '980px',
  display: 'flex',
  justifyContent: 'center',
  gap: '16px',
  padding: '16px',
  background: 'rgba(8, 24, 60, 0.78)',
  border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: '26px',
  boxShadow: '0 26px 60px rgba(0,0,0,0.2)',
  backdropFilter: 'blur(18px)',
};

const programCard = {
  flex: '1',
  minWidth: '160px',
  padding: '22px 24px',
  borderRadius: '24px',
  background: 'rgba(255,255,255,0.06)',
};

const programLabel = {
  fontSize: '15px',
  fontWeight: 800,
  color: 'white',
  marginBottom: '8px',
};

const programText = {
  fontSize: '14px',
  color: 'rgba(255,255,255,0.78)',
  lineHeight: 1.7,
};

export default App;
