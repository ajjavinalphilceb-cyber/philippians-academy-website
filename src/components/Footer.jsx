import { Link } from 'react-router-dom';
import logoSrc from '../assets/Philippians Logo.jpg';

function Footer() {
  return (
    <>
      <style>{footerStyles}</style>
      <footer className="footer" id="contact">
        <div className="container">
          <div className="footer-brand-panel">
            <img src={logoSrc} alt="Philippians Academy logo" className="footer-logo" />
            <h2>Philippians Academy</h2>
            <p>Guiding hearts. Developing minds. Preparing leaders for a greater tomorrow through Christ-centered education.</p>
            <Link className="footer-admissions-link" to="/admissions">Admissions</Link>
          </div>

          <div>
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/#academics">Academics</Link></li>
              <li><Link to="/admissions">Admissions</Link></li>
              <li><Link to="/school-events">School Events</Link></li>
              <li><Link to="/campus-life">Campus Life</Link></li>
              <li><a href="/#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3>Admissions &amp; Contact</h3>
            <p>1316 Haise Street<br />Moonwalk Village, Para&ntilde;aque City</p>
            <p>Phone: (02) 123-4567<br />Email: info@philippiansacademy.edu.ph</p>
          </div>

          <div>
            <h3>Follow Us</h3>
            <p>Connect with school updates, admissions announcements, and campus life stories.</p>
            <div className="social-icons">
              <a href="#" className="social-icon">F</a>
              <a href="#" className="social-icon">X</a>
              <a href="#" className="social-icon">IG</a>
              <a href="#" className="social-icon">YT</a>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>&copy; 2026 Philippians Academy. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

const footerStyles = `
.footer {
  position: relative;
  overflow: hidden;
  background: linear-gradient(145deg, #061230 0%, #08183c 52%, #102a63 100%) !important;
  color: #ffffff;
  padding: 68px 0 30px !important;
}

.footer::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 20% 0%, rgba(242, 193, 78, 0.16), transparent 28%), linear-gradient(90deg, rgba(255, 255, 255, 0.045), transparent 42%);
  pointer-events: none;
}

.footer::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 4px;
  background: linear-gradient(90deg, transparent, #f2c14e, transparent);
}

.footer .container {
  position: relative;
  z-index: 1;
  max-width: 1320px !important;
  margin: 0 auto;
  padding: 0 24px !important;
  display: grid;
  grid-template-columns: minmax(260px, 1.25fr) repeat(3, minmax(180px, 0.75fr)) !important;
  gap: clamp(28px, 4vw, 58px) !important;
  align-items: start;
}

.footer-brand-panel {
  max-width: 430px;
}

.footer .footer-logo {
  width: 68px !important;
  height: 68px !important;
  border-radius: 999px;
  margin-bottom: 18px !important;
  border: 2px solid rgba(242, 193, 78, 0.42);
  box-shadow: 0 18px 38px rgba(0, 0, 0, 0.24);
}

.footer h2 {
  color: #ffffff;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(1.8rem, 2.4vw, 2.65rem);
  line-height: 1;
  margin: 0 0 14px;
}

.footer h3 {
  color: #f2c14e !important;
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin: 0 0 20px !important;
}

.footer p {
  color: rgba(255, 255, 255, 0.76);
  font-size: 0.96rem;
  line-height: 1.72;
  margin: 0 0 18px;
}

.footer ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 11px;
}

.footer li {
  margin: 0 !important;
}

.footer a {
  color: rgba(255, 255, 255, 0.82) !important;
  text-decoration: none;
  transition: color 220ms ease, transform 220ms ease;
}

.footer a:hover {
  color: #f2c14e !important;
}

.footer-admissions-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  margin-top: 6px;
  padding: 12px 20px;
  border-radius: 999px;
  border: 1px solid #f2c14e;
  background: #f2c14e;
  color: #08183c !important;
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.2);
}

.footer-admissions-link:hover {
  color: #08183c !important;
  transform: translateY(-2px);
}

.footer .social-icons {
  display: flex;
  flex-wrap: wrap;
  gap: 12px !important;
  margin-top: 18px !important;
}

.footer .social-icon {
  width: 42px !important;
  height: 42px !important;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  border: 1px solid rgba(242, 193, 78, 0.28);
  background: rgba(255, 255, 255, 0.08) !important;
  color: #ffffff !important;
  font-size: 0.78rem;
  font-weight: 900;
}

.footer .social-icon:hover {
  background: #f2c14e !important;
  color: #08183c !important;
  transform: translateY(-2px);
}

.footer .copyright {
  position: relative;
  z-index: 1;
  max-width: 1320px;
  margin: 46px auto 0 !important;
  padding: 22px 24px 0 !important;
  border-top: 1px solid rgba(242, 193, 78, 0.18) !important;
  text-align: center;
}

.footer .copyright p {
  color: rgba(255, 255, 255, 0.58);
  margin: 0;
}

@media (max-width: 980px) {
  .footer .container {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  }
}

@media (max-width: 640px) {
  .footer {
    padding-top: 54px !important;
  }

  .footer .container {
    grid-template-columns: 1fr !important;
    padding: 0 15px !important;
    text-align: left !important;
  }

  .footer .copyright {
    padding-left: 15px !important;
    padding-right: 15px !important;
  }
}
`;

export default Footer;
