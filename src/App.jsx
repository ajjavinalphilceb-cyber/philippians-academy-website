import logoSrc from './assets/Philippians Logo.jpg';

import logoSrc from './assets/Philippians Logo.jpg';

function App() {
  return (
    <main style={page}>
      <section style={hero}>
        <div style={heroOverlay} />

        <div style={heroContent}>
          <header style={heroHeader}>
            <div style={brandBlock}>
              <img src={logoSrc} alt="Philippians Academy logo" style={brandLogo} />
              <div>
                <div style={brandName}>Philippians Academy</div>
                <div style={brandAddress}>
                  1316 Haise Street, Moonwalk Village, Parañaque City
                </div>
              </div>
            </div>

            <div style={topNav}>
              <a href="#about" style={navLink}>About Us</a>
              <a href="#academics" style={navLink}>Academics</a>
              <a href="#admissions" style={navLink}>Admissions</a>
              <a href="#student-life" style={navLink}>Student Life</a>
              <a href="#contact" style={navLink}>Contact</a>
              <button style={enrollButton}>Enroll Now</button>
            </div>
          </header>

          <div style={heroBody}>
            <div style={heroText}>
              <h1 style={headline}>
                Faith. Excellence.
                <br />
                <span style={headlineAccent}>Purpose.</span>
              </h1>

              <p style={subheadline}>
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

        <div style={programBar}>
          <div style={programCard}>
            <div style={programLabel}>Pre-School</div>
            <div style={programText}>Nurturing early learners</div>
          </div>
          <div style={programCard}>
            <div style={programLabel}>Elementary</div>
            <div style={programText}>Building strong foundations</div>
          </div>
          <div style={programCard}>
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
  minHeight: '100vh',
  width: '100%',
  overflow: 'hidden',
  backgroundImage:
    "url('https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=2070&q=80')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const heroOverlay = {
  position: 'absolute',
  inset: 0,
  background:
    'linear-gradient(135deg, rgba(8, 24, 60, 0.92) 0%, rgba(8, 24, 60, 0.65) 30%, rgba(8, 24, 60, 0.24) 100%)',
  pointerEvents: 'none',
};

const heroContent = {
  position: 'relative',
  zIndex: 1,
  width: '100%',
  maxWidth: '1320px',
  padding: '40px 48px 72px',
  boxSizing: 'border-box',
};

const heroHeader = {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: '24px',
  marginBottom: '80px',
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
};

const heroText = {
  maxWidth: '680px',
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
  bottom: '30px',
  width: 'calc(100% - 96px)',
  maxWidth: '1160px',
  display: 'flex',
  justifyContent: 'space-between',
  gap: '18px',
  padding: '18px',
  background: 'rgba(8, 24, 60, 0.84)',
  border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: '30px',
  boxShadow: '0 30px 70px rgba(0,0,0,0.25)',
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
