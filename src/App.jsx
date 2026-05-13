function App() {
  return (
    <main style={page}>
      <nav style={nav}>
        <div style={brand}>Philippians Academy</div>

        <div style={menu}>
          <span>Home</span>
          <span>About</span>
          <span>Programs</span>
          <span>Admissions</span>
          <button style={navBtn}>Enroll Now</button>
        </div>
      </nav>

      <section style={hero}>
        <div style={overlay}></div>

        <div style={content}>
          <p style={eyebrow}>Preschool • Elementary • Junior High School</p>

          <h1 style={title}>Building Bright Futures Through Faith and Quality Education</h1>

          <p style={subtitle}>
            Philippians Academy of Parañaque provides a caring and modern learning environment where
            students grow academically, socially, and morally.
          </p>

          <div style={buttons}>
            <button style={primaryBtn}>Enroll Now</button>
            <button style={secondaryBtn}>Explore Programs</button>
          </div>
        </div>
      </section>
    </main>
  );
}

const page = {
  width: '100%',
  minHeight: '100vh',
  fontFamily: 'Arial, sans-serif',
};

const nav = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '76px',
  padding: '0 60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: 'rgba(255,255,255,0.95)',
  zIndex: 10,
  boxShadow: '0 2px 20px rgba(0,0,0,0.08)',
};

const brand = {
  fontSize: '22px',
  fontWeight: '800',
  color: 'rgb(14, 27, 77)',
};

const menu = {
  display: 'flex',
  alignItems: 'center',
  gap: '28px',
  fontSize: '15px',
  fontWeight: '600',
  color: 'rgb(31, 41, 55)',
};

const navBtn = {
  background: 'rgb(14, 27, 77)',
  color: 'white',
  border: 'none',
  padding: '12px 22px',
  borderRadius: '999px',
  fontWeight: '700',
  cursor: 'pointer',
};

const hero = {
  minHeight: '100vh',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: '120px 24px 60px',
  backgroundImage:
    "url('https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const overlay = {
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(rgba(14,27,77,0.78), rgba(14,27,77,0.7))',
};

const content = {
  position: 'relative',
  zIndex: 2,
  maxWidth: '950px',
  color: 'white',
};

const eyebrow = {
  fontSize: '16px',
  fontWeight: '700',
  letterSpacing: '1px',
  marginBottom: '18px',
  color: 'rgb(242, 193, 78)',
};

const title = {
  fontSize: '64px',
  lineHeight: '1.08',
  fontWeight: '900',
  marginBottom: '24px',
};

const subtitle = {
  fontSize: '20px',
  lineHeight: '1.7',
  maxWidth: '760px',
  margin: '0 auto 36px',
  color: 'rgba(255,255,255,0.9)',
};

const buttons = {
  display: 'flex',
  justifyContent: 'center',
  gap: '16px',
  flexWrap: 'wrap',
};

const primaryBtn = {
  background: 'rgb(242, 193, 78)',
  color: 'rgb(17, 24, 39)',
  border: 'none',
  padding: '16px 30px',
  borderRadius: '999px',
  fontSize: '16px',
  fontWeight: '800',
  cursor: 'pointer',
};

const secondaryBtn = {
  background: 'transparent',
  color: 'white',
  border: '1px solid rgba(255,255,255,0.7)',
  padding: '16px 30px',
  borderRadius: '999px',
  fontSize: '16px',
  fontWeight: '800',
  cursor: 'pointer',
};

export default App;
