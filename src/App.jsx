import { useState } from 'react';
import logoSrc from './assets/Philippians Logo.jpg';
import heroBanner from './assets/hero banner.png';

const responsiveStyles = `
.hero { min-height: 100vh; }
.hero-content { max-width: 1500px; margin: 0 auto; padding: clamp(24px, 3vw, 48px); }
.hero-header { gap: 24px; margin-bottom: 32px; align-items: flex-start; }
.brand-block { gap: 16px; min-width: 0; }
.hero-nav-links { gap: 28px; flex-wrap: nowrap; justify-content: flex-end; align-items: center; }
.hero-nav-links a { white-space: nowrap; }
.mobile-toggle { display: none; }
.mobile-menu { display: none; width: 100%; flex-direction: column; gap: 14px; margin-top: 16px; padding-top: 14px; border-top: 1px solid rgba(255,255,255,0.12); }
.mobile-menu.open { display: flex; }
.mobile-nav-link { display: block; width: 100%; }
.program-bar { width: 100%; max-width: 980px; flex-wrap: wrap; justify-content: center; }
.program-bar .program-card { min-width: 220px; flex: 1 1 220px; }
.hero-headline { font-size: clamp(3.5rem, 5vw, 5.5rem); line-height: 1.02; max-width: 11ch; }
.hero-subheadline { font-size: clamp(1rem, 1.5vw, 1.15rem); line-height: 1.9; max-width: 620px; }
.value-grid { gap: 18px; }

/* New sections responsive styles */
.about-preview { padding: 80px 0; background: #ffffff; }
.about-preview .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
.about-preview .image-card { background: #f8f9fa; border-radius: 20px; overflow: hidden; height: 400px; }
.about-preview .text-content h2 { font-size: clamp(2rem, 3vw, 2.5rem); color: #08183c; margin-bottom: 20px; }
.about-preview .text-content p { font-size: 1.1rem; line-height: 1.7; color: #6b7280; margin-bottom: 30px; }
.about-preview .learn-more-btn { background: #f2c14e; color: #08183c; padding: 14px 28px; border-radius: 50px; font-weight: 700; border: none; cursor: pointer; }

.why-choose-us { padding: 80px 0; background: #f8f9fa; }
.why-choose-us .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
.why-choose-us h2 { text-align: center; font-size: clamp(2rem, 3vw, 2.5rem); color: #08183c; margin-bottom: 60px; }
.why-choose-us .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; }
.why-choose-us .feature-card { background: #ffffff; padding: 40px 30px; border-radius: 20px; text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.1); transition: transform 0.3s ease; }
.why-choose-us .feature-card:hover { transform: translateY(-5px); }
.why-choose-us .feature-icon { font-size: 3rem; margin-bottom: 20px; }
.why-choose-us .feature-title { font-size: 1.25rem; font-weight: 700; color: #08183c; margin-bottom: 15px; }
.why-choose-us .feature-desc { color: #6b7280; line-height: 1.6; }

.academic-programs { padding: 80px 0; background: #ffffff; }
.academic-programs .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
.academic-programs h2 { text-align: center; font-size: clamp(2rem, 3vw, 2.5rem); color: #08183c; margin-bottom: 60px; }
.academic-programs .programs-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
.academic-programs .program-card { background: #f8f9fa; padding: 40px 30px; border-radius: 20px; text-align: center; }
.academic-programs .program-title { font-size: 1.5rem; font-weight: 800; color: #08183c; margin-bottom: 15px; }
.academic-programs .program-desc { color: #6b7280; line-height: 1.6; }

.student-life { padding: 80px 0; background: #f8f9fa; }
.student-life .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
.student-life h2 { text-align: center; font-size: clamp(2rem, 3vw, 2.5rem); color: #08183c; margin-bottom: 60px; }
.student-life .gallery-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; }
.student-life .gallery-item { position: relative; border-radius: 15px; overflow: hidden; height: 250px; }
.student-life .gallery-item img { width: 100%; height: 100%; object-fit: cover; }
.student-life .gallery-overlay { position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,0,0,0.7), transparent); padding: 20px; }
.student-life .gallery-label { color: white; font-weight: 600; }

.admissions-cta { padding: 80px 0; background: #08183c; color: white; text-align: center; }
.admissions-cta .container { max-width: 800px; margin: 0 auto; padding: 0 20px; }
.admissions-cta h2 { font-size: clamp(2.5rem, 4vw, 3rem); margin-bottom: 20px; }
.admissions-cta p { font-size: 1.2rem; line-height: 1.7; margin-bottom: 40px; opacity: 0.9; }
.admissions-cta .enroll-btn { background: #f2c14e; color: #08183c; padding: 16px 32px; border-radius: 50px; font-weight: 700; border: none; cursor: pointer; font-size: 1.1rem; }

.testimonials { padding: 80px 0; background: #ffffff; }
.testimonials .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
.testimonials h2 { text-align: center; font-size: clamp(2rem, 3vw, 2.5rem); color: #08183c; margin-bottom: 60px; }
.testimonials .testimonials-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
.testimonials .testimonial-card { background: #f8f9fa; padding: 30px; border-radius: 20px; }
.testimonials .testimonial-quote { font-style: italic; color: #6b7280; line-height: 1.6; margin-bottom: 20px; }
.testimonials .testimonial-author { font-weight: 600; color: #08183c; }

.news-events { padding: 80px 0; background: #f8f9fa; }
.news-events .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
.news-events h2 { text-align: center; font-size: clamp(2rem, 3vw, 2.5rem); color: #08183c; margin-bottom: 60px; }
.news-events .news-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
.news-events .news-card { background: #ffffff; padding: 30px; border-radius: 20px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
.news-events .news-date { color: #f2c14e; font-weight: 600; margin-bottom: 10px; }
.news-events .news-title { font-size: 1.25rem; font-weight: 700; color: #08183c; margin-bottom: 15px; }
.news-events .news-excerpt { color: #6b7280; line-height: 1.6; }

.footer { background: #08183c; color: white; padding: 60px 0 30px; }
.footer .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 40px; }
.footer .footer-logo { width: 60px; height: 60px; border-radius: 50%; margin-bottom: 20px; }
.footer h3 { color: #f2c14e; margin-bottom: 20px; }
.footer ul { list-style: none; padding: 0; }
.footer li { margin-bottom: 10px; }
.footer a { color: rgba(255,255,255,0.8); text-decoration: none; }
.footer .social-icons { display: flex; gap: 15px; margin-top: 20px; }
.footer .social-icon { width: 40px; height: 40px; background: rgba(255,255,255,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; text-decoration: none; }
.footer .copyright { text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.6); }

@media (max-width: 1200px) {
  .hero-content { padding: clamp(24px, 3vw, 42px); }
  .hero-headline { max-width: 12ch; }
}

@media (max-width: 992px) {
  .hero-header { width: 100%; }
  .hero-nav-links { display: none; }
  .mobile-toggle { display: inline-flex; }
  .brand-block { width: 100%; flex-wrap: wrap; align-items: flex-start; }
  .brand-text { min-width: 0; width: calc(100% - 64px); }
  .program-bar { position: static !important; transform: none !important; left: auto !important; bottom: auto !important; margin: 0 auto; padding: 16px; }
  .program-bar .program-card { width: 100% !important; min-width: auto !important; }
  .about-preview .container { grid-template-columns: 1fr; gap: 40px; }
  .why-choose-us .features-grid { grid-template-columns: 1fr; }
  .academic-programs .programs-grid { grid-template-columns: 1fr; }
  .student-life .gallery-grid { grid-template-columns: repeat(2, 1fr); }
  .testimonials .testimonials-grid { grid-template-columns: 1fr; }
  .news-events .news-grid { grid-template-columns: 1fr; }
  .footer .container { grid-template-columns: 1fr; text-align: center; }
}

@media (max-width: 768px) {
  .hero-content { padding: 24px 20px 28px; }
  .hero-header { flex-direction: column; align-items: stretch; }
  .brand-block { flex-direction: column; align-items: flex-start; }
  .hero-headline { font-size: clamp(2.75rem, 8vw, 4.2rem); }
  .hero-subheadline { font-size: clamp(0.95rem, 2.5vw, 1.05rem); }
  .value-grid { grid-template-columns: 1fr; }
  .program-bar { gap: 14px; }
  .about-preview { padding: 60px 0; }
  .why-choose-us { padding: 60px 0; }
  .academic-programs { padding: 60px 0; }
  .student-life { padding: 60px 0; }
  .admissions-cta { padding: 60px 0; }
  .testimonials { padding: 60px 0; }
  .news-events { padding: 60px 0; }
  .student-life .gallery-grid { grid-template-columns: 1fr; }
}

@media (max-width: 576px) {
  .hero-content { padding: 20px 18px 24px; }
  .hero-header { gap: 16px; }
  .hero-headline { font-size: clamp(2.4rem, 9vw, 3.5rem); }
  .hero-subheadline { font-size: 0.95rem; }
  .value-item { padding: 14px 16px; }
  .program-bar { padding: 14px; }
  .program-bar .program-card { width: 100% !important; }
  .about-preview .container { padding: 0 15px; }
  .why-choose-us .container { padding: 0 15px; }
  .academic-programs .container { padding: 0 15px; }
  .student-life .container { padding: 0 15px; }
  .admissions-cta .container { padding: 0 15px; }
  .testimonials .container { padding: 0 15px; }
  .news-events .container { padding: 0 15px; }
  .footer .container { padding: 0 15px; }
}
`;

function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <main style={page}>
      <style>{responsiveStyles}</style>
      <section style={hero}>
        <div style={heroOverlay} />

        <div style={heroContent} className="hero-content">
          <header style={heroHeader} className="hero-header">
            <div style={brandBlock} className="brand-block">
              <img src={logoSrc} alt="Philippians Academy logo" style={brandLogo} />
              <div style={brandText} className="brand-text">
                <div style={brandName}>Philippians Academy</div>
                <div style={brandAddress}>
                  1316 Haise Street, Moonwalk Village, Parañaque City
                </div>
              </div>
            </div>

            <div style={navArea}>
              <div style={topNav} className="hero-nav-links">
                <a href="#about" style={navLink}>About Us</a>
                <a href="#academics" style={navLink}>Academics</a>
                <a href="#admissions" style={navLink}>Admissions</a>
                <a href="#student-life" style={navLink}>Student Life</a>
                <a href="#contact" style={navLink}>Contact</a>
                <button style={enrollButton} className="hero-enroll-button">Enroll Now</button>
              </div>
              <button
                type="button"
                style={menuButton}
                className="mobile-toggle"
                aria-expanded={mobileNavOpen}
                aria-label="Open navigation menu"
                onClick={() => setMobileNavOpen((open) => !open)}
              >
                ☰
              </button>
            </div>
          </header>

          <div style={mobileMenu} className={`mobile-menu${mobileNavOpen ? ' open' : ''}`}>
            <a href="#about" style={navLink} className="mobile-nav-link" onClick={() => setMobileNavOpen(false)}>About Us</a>
            <a href="#academics" style={navLink} className="mobile-nav-link" onClick={() => setMobileNavOpen(false)}>Academics</a>
            <a href="#admissions" style={navLink} className="mobile-nav-link" onClick={() => setMobileNavOpen(false)}>Admissions</a>
            <a href="#student-life" style={navLink} className="mobile-nav-link" onClick={() => setMobileNavOpen(false)}>Student Life</a>
            <a href="#contact" style={navLink} className="mobile-nav-link" onClick={() => setMobileNavOpen(false)}>Contact</a>
            <button style={enrollButton} onClick={() => setMobileNavOpen(false)}>Enroll Now</button>
          </div>

          <div style={heroBody} className="hero-body">
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

      {/* About Preview Section */}
      <section className="about-preview">
        <div className="container">
          <div className="image-card">
            <img src={heroBanner} alt="Academy building" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="text-content">
            <h2>About Philippians Academy</h2>
            <p>Philippians Academy is committed to providing a Christ-centered education that nurtures the whole child—spiritually, academically, and socially. Our mission is to guide hearts, develop minds, and prepare leaders for a greater tomorrow through faith-based learning and values formation.</p>
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <h2>Why Choose Philippians Academy?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">✝</div>
              <h3 className="feature-title">Christ-Centered Education</h3>
              <p className="feature-desc">Faith-based learning integrated into every aspect of our curriculum.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📘</div>
              <h3 className="feature-title">Academic Excellence</h3>
              <p className="feature-desc">Rigorous academic programs designed to challenge and inspire students.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3 className="feature-title">Values Formation</h3>
              <p className="feature-desc">Character development through service, leadership, and community involvement.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3 className="feature-title">Safe Learning Environment</h3>
              <p className="feature-desc">Secure campus with dedicated staff ensuring student safety and well-being.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Programs Section */}
      <section className="academic-programs">
        <div className="container">
          <h2>Academic Programs</h2>
          <div className="programs-grid">
            <div className="program-card">
              <h3 className="program-title">Preschool</h3>
              <p className="program-desc">Nurturing early learners with play-based activities and foundational skills in a loving environment.</p>
            </div>
            <div className="program-card">
              <h3 className="program-title">Elementary</h3>
              <p className="program-desc">Building strong academic foundations while fostering creativity, curiosity, and social skills.</p>
            </div>
            <div className="program-card">
              <h3 className="program-title">Junior High School</h3>
              <p className="program-desc">Empowering future leaders with advanced academics, leadership training, and character development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Life Section */}
      <section className="student-life">
        <div className="container">
          <h2>Student Life</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src={heroBanner} alt="Classroom activity" />
              <div className="gallery-overlay">
                <div className="gallery-label">Classroom Learning</div>
              </div>
            </div>
            <div className="gallery-item">
              <img src={heroBanner} alt="Sports activity" />
              <div className="gallery-overlay">
                <div className="gallery-label">Sports & Recreation</div>
              </div>
            </div>
            <div className="gallery-item">
              <img src={heroBanner} alt="Arts and crafts" />
              <div className="gallery-overlay">
                <div className="gallery-label">Arts & Creativity</div>
              </div>
            </div>
            <div className="gallery-item">
              <img src={heroBanner} alt="Community service" />
              <div className="gallery-overlay">
                <div className="gallery-label">Community Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions CTA Section */}
      <section className="admissions-cta">
        <div className="container">
          <h2>Join Our Community</h2>
          <p>Take the first step towards a transformative educational experience. Enroll your child today and become part of the Philippians Academy family.</p>
          <button className="enroll-btn">Enroll Now</button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2>What Parents Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-quote">"Philippians Academy has been a blessing for our family. The Christ-centered approach and excellent academics have helped our child grow both spiritually and intellectually."</p>
              <div className="testimonial-author">- Maria Santos, Parent</div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-quote">"The teachers are dedicated and caring. Our son has developed strong values and leadership skills that will serve him well in the future."</p>
              <div className="testimonial-author">- John Reyes, Parent</div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-quote">"As a graduate, I can attest to the quality education and character formation I received. Philippians Academy truly prepares students for life."</p>
              <div className="testimonial-author">- Anna Cruz, Alumni</div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="news-events">
        <div className="container">
          <h2>News & Events</h2>
          <div className="news-grid">
            <div className="news-card">
              <div className="news-date">March 15, 2024</div>
              <h3 className="news-title">Annual Science Fair Winners</h3>
              <p className="news-excerpt">Congratulations to our Junior High students who excelled in this year's science fair, showcasing innovative projects and critical thinking skills.</p>
            </div>
            <div className="news-card">
              <div className="news-date">February 28, 2024</div>
              <h3 className="news-title">Community Service Day</h3>
              <p className="news-excerpt">Students participated in a day of service, helping local communities and learning the importance of giving back.</p>
            </div>
            <div className="news-card">
              <div className="news-date">January 20, 2024</div>
              <h3 className="news-title">New STEM Program Launch</h3>
              <p className="news-excerpt">We're excited to announce the launch of our enhanced STEM program, designed to inspire the next generation of innovators.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div>
            <img src={logoSrc} alt="Philippians Academy logo" className="footer-logo" />
            <p>Guiding hearts. Developing minds. Preparing leaders for a greater tomorrow.</p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#academics">Academics</a></li>
              <li><a href="#admissions">Admissions</a></li>
              <li><a href="#student-life">Student Life</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3>Contact Info</h3>
            <p>1316 Haise Street<br />Moonwalk Village, Parañaque City</p>
            <p>Phone: (02) 123-4567<br />Email: info@philippiansacademy.edu.ph</p>
          </div>
          <div>
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#" className="social-icon">📘</a>
              <a href="#" className="social-icon">🐦</a>
              <a href="#" className="social-icon">📷</a>
              <a href="#" className="social-icon">🎥</a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2024 Philippians Academy. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

const page = {
  width: '100%',
  minHeight: '100vh',
  overflowX: 'hidden',
  fontFamily: 'Inter, Arial, sans-serif',
  color: 'white',
};

const hero = {
  position: 'relative',
  minHeight: '100vh',
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
  padding: 'clamp(24px, 3vw, 48px)',
  boxSizing: 'border-box',
};

const heroHeader = {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: '24px',
  marginBottom: '32px',
  flexWrap: 'wrap',
};

const brandBlock = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  minWidth: '280px',
};

const brandText = {
  minWidth: '0',
};

const brandLogo = {
  width: '52px',
  height: '52px',
  objectFit: 'cover',
  borderRadius: '999px',
  border: '2px solid rgba(255,255,255,0.18)',
  boxShadow: '0 12px 35px rgba(0, 0, 0, 0.22)',
};

const brandName = {
  fontSize: 'clamp(0.9rem, 1.2vw, 1.1rem)',
  fontWeight: 800,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'white',
};

const brandAddress = {
  marginTop: '6px',
  fontSize: 'clamp(0.8rem, 1vw, 0.95rem)',
  color: 'rgba(255,255,255,0.82)',
  lineHeight: 1.6,
};

const navArea = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
};

const topNav = {
  display: 'flex',
  alignItems: 'center',
  gap: '24px',
  flexWrap: 'nowrap',
  justifyContent: 'flex-end',
};

const menuButton = {
  minWidth: '52px',
  minHeight: '52px',
  borderRadius: '16px',
  border: '1px solid rgba(255,255,255,0.18)',
  background: 'rgba(255,255,255,0.08)',
  color: 'white',
  fontSize: '1.3rem',
  cursor: 'pointer',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0',
};

const mobileMenu = {
  width: '100%',
  flexDirection: 'column',
  gap: '14px',
  marginTop: '12px',
  paddingTop: '14px',
  borderTop: '1px solid rgba(255,255,255,0.12)',
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
  fontSize: 'clamp(3.5rem, 5vw, 5.5rem)',
  lineHeight: '1.02',
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
  fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
  lineHeight: 1.9,
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
  width: '100%',
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
