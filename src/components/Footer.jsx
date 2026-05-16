import logoSrc from '../assets/Philippians Logo.jpg';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div>
          <img src={logoSrc} alt="Philippians Academy logo" className="footer-logo" />
          <p>Guiding hearts. Developing minds. Preparing leaders for a greater tomorrow.</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/#about">About Us</a></li>
            <li><a href="/#academics">Academics</a></li>
            <li><a href="/admissions">Admissions</a></li>
            <li><a href="/school-events">School Events</a></li>
            <li><a href="/campus-life">Campus Life</a></li>
            <li><a href="/#contact">Contact</a></li>
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
            <a href="#" className="social-icon">F</a>
            <a href="#" className="social-icon">X</a>
            <a href="#" className="social-icon">IG</a>
            <a href="#" className="social-icon">YT</a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 Philippians Academy. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
