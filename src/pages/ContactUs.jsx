import { Navigation, Send } from 'lucide-react';
import Footer from '../components/Footer.jsx';
import { optimizedImages } from '../assets/optimized-images.js';
import { getVariantForWidth } from '../utils/imageVariants.js';

const heroBanner = optimizedImages['hero banner.png'];

const contactStyles = `
.contact-page { --navy: #08183c; --navy-2: #102a63; --gold: #f2c14e; --gold-deep: #b98416; --ink: #18243d; --muted: #5a667a; background: #ffffff; color: var(--ink); overflow-x: clip; }
.contact-container { width: min(1320px, calc(100% - 48px)); margin: 0 auto; }
.contact-hero { position: relative; width: 100%; height: clamp(380px, 32vw, 420px); max-height: 430px; display: grid; place-items: center; overflow: hidden; color: #ffffff; background-image: url("${getVariantForWidth(heroBanner, 1920)}"); background-size: cover; background-position: center top; background-repeat: no-repeat; text-align: center; }
.contact-hero::before { content: ""; position: absolute; inset: 0; background: linear-gradient(90deg, rgba(8, 24, 60, 0.88), rgba(8, 24, 60, 0.68)), linear-gradient(180deg, rgba(8, 24, 60, 0.24), rgba(8, 24, 60, 0.38)); pointer-events: none; }
.contact-hero-content { position: relative; z-index: 1; width: min(820px, calc(100% - 40px)); max-width: 820px; padding: 0 20px; box-sizing: border-box; transform: translateY(55px); }
.contact-kicker { margin: 0 0 12px; color: var(--gold-deep); font-family: 'Montserrat', 'Poppins', Arial, sans-serif; font-size: 0.78rem; font-weight: 900; letter-spacing: 0.22em; line-height: 1.4; text-transform: uppercase; }
.contact-hero .contact-kicker { display: none; }
.contact-hero h1, .contact-section-heading h2, .contact-cta h2 { margin: 0; font-family: Georgia, 'Times New Roman', serif; font-weight: 700; letter-spacing: 0; line-height: 0.98; }
.contact-hero h1 { max-width: 100%; color: #ffffff; font-size: clamp(2.5rem, 4vw, 4.15rem); line-height: 1; text-shadow: 0 16px 34px rgba(0,0,0,0.28); }
.contact-gold-line { width: 82px; height: 2px; margin: 18px auto 18px; border-radius: 999px; background: linear-gradient(90deg, transparent, var(--gold), transparent); }
.contact-hero p { max-width: 650px; margin: 0 auto; color: var(--gold); font-family: 'Montserrat', 'Poppins', Arial, sans-serif; font-size: clamp(0.68rem, 0.86vw, 0.82rem); font-weight: 900; letter-spacing: 0.22em; line-height: 1.35; text-transform: uppercase; text-shadow: 0 8px 22px rgba(0,0,0,0.28); }
.contact-section { padding: 96px 0; }
.contact-section.soft { background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%); }
.contact-section-heading { max-width: 760px; margin: 0 auto 46px; text-align: center; }
.contact-section-heading h2 { color: var(--navy); font-size: clamp(2.45rem, 4.8vw, 5rem); }
.contact-section-heading p { margin: 18px auto 0; color: var(--muted); font-family: 'Poppins', 'Inter', Arial, sans-serif; font-size: clamp(1rem, 1.25vw, 1.13rem); line-height: 1.78; }
.contact-card-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; }
.contact-card { position: relative; min-width: 0; overflow: hidden; padding: 34px 28px 32px; border: 1px solid rgba(8,24,60,0.08); border-radius: 24px; background: rgba(255,255,255,0.96); box-shadow: 0 18px 48px rgba(8,24,60,0.09); transition: transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease; }
.contact-card::before { content: ""; position: absolute; left: 24px; right: 24px; top: 0; height: 3px; border-radius: 0 0 999px 999px; background: linear-gradient(90deg, transparent, var(--gold), transparent); }
.contact-card:hover { transform: translateY(-7px); border-color: rgba(200,155,60,0.35); box-shadow: 0 30px 70px rgba(7,27,78,0.15); }
.contact-icon { width: 64px; height: 64px; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 24px; border-radius: 999px; color: var(--gold); background: var(--navy); box-shadow: 0 14px 30px rgba(8,24,60,0.16); }
.contact-icon svg { width: 30px; height: 30px; stroke-width: 1.8; }
.contact-card h3 { margin: 0 0 14px; color: var(--navy); font-family: Georgia, 'Times New Roman', serif; font-size: clamp(1.34rem, 1.7vw, 1.72rem); line-height: 1.08; }
.contact-card p, .contact-card a { color: var(--muted); font-family: 'Poppins', 'Inter', Arial, sans-serif; font-size: 0.96rem; line-height: 1.66; }
.contact-card p { margin: 0; }
.contact-card a { text-decoration: none; transition: color 220ms ease; }
.contact-card a:hover { color: var(--gold); }
.form-layout { display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr); gap: clamp(28px, 4vw, 56px); align-items: start; }
.contact-form-card, .contact-form-aside { border: 1px solid rgba(7,27,78,0.08); border-radius: 26px; background: #ffffff; box-shadow: 0 24px 64px rgba(7,27,78,0.12); }
.contact-form-card { padding: clamp(24px, 3vw, 38px); }
.contact-form { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 22px; }
.form-field { display: grid; gap: 9px; min-width: 0; }
.form-field.full { grid-column: 1 / -1; }
.form-field label { color: var(--navy); font-family: 'Montserrat', 'Poppins', Arial, sans-serif; font-size: 0.82rem; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; }
.form-field input, .form-field select, .form-field textarea { width: 100%; box-sizing: border-box; border: 1px solid rgba(7,27,78,0.14); border-radius: 16px; background: #fbfcff; color: var(--ink); font-family: 'Poppins', 'Inter', Arial, sans-serif; font-size: 1rem; line-height: 1.5; outline: none; padding: 15px 16px; transition: border-color 220ms ease, box-shadow 220ms ease, background 220ms ease; }
.form-field textarea { min-height: 160px; resize: vertical; }
.form-field input:focus, .form-field select:focus, .form-field textarea:focus { border-color: var(--gold); background: #ffffff; box-shadow: 0 0 0 4px rgba(200,155,60,0.14); }
.submit-inquiry { display: inline-flex; align-items: center; justify-content: center; gap: 10px; min-height: 54px; justify-self: start; border: 1px solid var(--navy); border-radius: 999px; background: var(--navy); color: #ffffff; padding: 14px 28px; font-family: 'Montserrat', 'Poppins', Arial, sans-serif; font-size: 0.86rem; font-weight: 900; letter-spacing: 0.11em; text-transform: uppercase; cursor: pointer; box-shadow: 0 18px 38px rgba(7,27,78,0.2); transition: transform 220ms ease, background 220ms ease, color 220ms ease, border-color 220ms ease; }
.submit-inquiry:hover { transform: translateY(-3px); border-color: var(--gold); background: var(--gold); color: var(--navy); }
.submit-inquiry svg { width: 18px; height: 18px; }
.contact-form-aside { overflow: hidden; background: linear-gradient(145deg, #061230 0%, var(--navy) 58%, var(--navy-2) 100%); color: #ffffff; padding: clamp(28px, 4vw, 42px); }
.contact-form-aside h3 { margin: 0 0 16px; color: #ffffff; font-family: Georgia, 'Times New Roman', serif; font-size: clamp(1.35rem, 2vw, 2.05rem); line-height: 1.32; }
.contact-form-aside p { margin: 0 0 24px; color: rgba(255,255,255,0.76); font-family: 'Poppins', 'Inter', Arial, sans-serif; font-size: 1rem; line-height: 1.78; }
.inquiry-list { display: grid; gap: 14px; margin: 0; padding: 0; list-style: none; }
.inquiry-list li { position: relative; padding-left: 24px; color: rgba(255,255,255,0.86); font-family: 'Montserrat', 'Poppins', Arial, sans-serif; font-size: 0.92rem; font-weight: 700; line-height: 1.5; }
.inquiry-list li::before { content: ""; position: absolute; left: 0; top: 0.52em; width: 8px; height: 8px; border-radius: 999px; background: var(--gold); box-shadow: 0 0 0 5px rgba(242,193,78,0.14); }
.map-layout { display: grid; grid-template-columns: minmax(0, 1.28fr) minmax(300px, 0.72fr); gap: 28px; align-items: stretch; }
.map-frame { min-height: 470px; overflow: hidden; border: 1px solid rgba(200,155,60,0.34); border-radius: 28px; background: #eef2f7; box-shadow: 0 26px 70px rgba(7,27,78,0.13); }
.map-frame iframe { width: 100%; height: 100%; min-height: 470px; display: block; border: 0; }
.location-card { display: flex; flex-direction: column; justify-content: center; min-width: 0; border-radius: 28px; background: linear-gradient(145deg, #061230 0%, var(--navy) 58%, var(--navy-2) 100%); color: #ffffff; padding: clamp(28px, 4vw, 44px); box-shadow: 0 26px 70px rgba(7,27,78,0.16); }
.location-card .contact-icon { background: rgba(255,255,255,0.08); border: 1px solid rgba(242,193,78,0.26); }
.location-card h3 { margin: 0 0 16px; color: #ffffff; font-family: Georgia, 'Times New Roman', serif; font-size: clamp(1.35rem, 2vw, 2.05rem); line-height: 1.32; }
.location-card p { margin: 0 0 26px; color: rgba(255,255,255,0.78); font-family: 'Poppins', 'Inter', Arial, sans-serif; font-size: 1rem; line-height: 1.78; }
.map-button { display: inline-flex; align-items: center; justify-content: center; gap: 10px; min-height: 52px; width: fit-content; border-radius: 999px; font-family: 'Montserrat', 'Poppins', Arial, sans-serif; font-size: 0.84rem; font-weight: 900; letter-spacing: 0.1em; text-transform: uppercase; text-decoration: none; transition: transform 220ms ease, background 220ms ease, color 220ms ease, border-color 220ms ease; }
.map-button { border: 1px solid var(--gold); background: var(--gold); color: var(--navy); padding: 14px 24px; }
.map-button:hover { transform: translateY(-3px); background: transparent; color: var(--gold); }
.contact-cta { position: relative; overflow: hidden; padding: 104px 24px 110px; background: var(--navy); color: #ffffff; text-align: center; }
.contact-cta::before { content: ""; position: absolute; inset: 0; background: radial-gradient(circle at 50% 0%, rgba(242,193,78,0.2), transparent 36%); pointer-events: none; }
.contact-cta-inner { position: relative; z-index: 1; max-width: 820px; margin: 0 auto; }
.contact-cta h2 { color: #ffffff; font-size: clamp(2.15rem, 4.7vw, 4.8rem); line-height: 1.06; }
.contact-cta p { max-width: 680px; margin: 0 auto 28px; color: rgba(255,255,255,0.8); font-family: 'Poppins', 'Inter', Arial, sans-serif; font-size: clamp(1rem, 1.3vw, 1.14rem); line-height: 1.75; }
.contact-verse { margin: 28px auto 30px; color: #ffffff; font-family: Georgia, 'Times New Roman', serif; font-size: clamp(1.25rem, 2.1vw, 1.75rem); line-height: 1.25; }
.contact-verse span { display: block; margin-top: 12px; color: var(--gold); font-family: 'Montserrat', 'Poppins', Arial, sans-serif; font-size: 0.76rem; font-weight: 900; letter-spacing: 0.22em; text-transform: uppercase; }

@media (max-width: 1020px) {
  .contact-hero { height: 340px; }
  .contact-hero-content { padding: 0 18px; transform: translateY(50px); }
  .contact-card-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .form-layout, .map-layout { grid-template-columns: 1fr; }
  .map-frame, .map-frame iframe { min-height: 390px; }
}

@media (max-width: 680px) {
  .contact-container { width: min(100% - 30px, 1320px); }
  .contact-hero { background-image: url("${getVariantForWidth(heroBanner, 768)}"); }
  .contact-hero { height: 320px; max-height: none; }
  .contact-hero-content { width: min(100% - 30px, 900px); padding: 0 12px; transform: translateY(48px); }
  .contact-hero h1 { font-size: clamp(2rem, 8vw, 2.75rem); line-height: 1; }
  .contact-hero p { font-size: clamp(0.62rem, 1.6vw, 0.74rem); letter-spacing: 0.18em; }
  .contact-section { padding: 70px 0; }
  .contact-card-grid, .contact-form { grid-template-columns: 1fr; }
  .contact-card { padding: 24px; border-radius: 20px; }
  .submit-inquiry, .map-button { width: 100%; }
}

@media (max-width: 576px) {
  .contact-hero { height: 290px; }
  .contact-hero-content { padding: 0 8px; transform: translateY(46px); }
  .contact-hero h1 { font-size: clamp(1.85rem, 9vw, 2.45rem); line-height: 1; }
  .contact-gold-line { width: 70px; margin: 14px auto 14px; }
  .contact-hero p { font-size: 0.56rem; letter-spacing: 0.14em; line-height: 1.45; }
}
`;

const mapsQuery = 'Philippians Academy of Paranaque Inc., 1316 Haise St. corner Borman St., Moonwalk, Paranaque City';
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`;
const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(mapsQuery)}&output=embed`;

function ContactUs() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <style>{contactStyles}</style>
      <main className="contact-page">
        <section className="contact-hero" aria-labelledby="contact-title">
          <div className="contact-hero-content">
            <p className="contact-kicker">We&rsquo;d Love to Hear from You</p>
            <h1 id="contact-title">Contact Us</h1>
            <div className="contact-gold-line" />
            <p>We&rsquo;d Love to Hear from You</p>
          </div>
        </section>

        <section className="contact-section soft" id="contact-form">
          <div className="contact-container">
            <div className="contact-section-heading">
              <p className="contact-kicker">Inquiries</p>
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and our team will get back to you as soon as possible.</p>
            </div>

            <div className="form-layout">
              <div className="contact-form-card">
                {/* TODO: Connect this UI-only inquiry form to the school's email/backend sending service. */}
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-field">
                    <label htmlFor="fullName">Full Name</label>
                    <input id="fullName" name="fullName" type="text" autoComplete="name" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Email Address</label>
                    <input id="email" name="email" type="email" autoComplete="email" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="contactNumber">Contact Number</label>
                    <input id="contactNumber" name="contactNumber" type="tel" autoComplete="tel" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="inquiryType">Inquiry Type</label>
                    <select id="inquiryType" name="inquiryType" defaultValue="Admissions" required>
                      <option>Admissions</option>
                      <option>Tuition and Fees</option>
                      <option>Academic Programs</option>
                      <option>Campus Visit</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div className="form-field full">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" required />
                  </div>
                  <button className="submit-inquiry" type="submit">
                    Submit Inquiry
                    <Send aria-hidden="true" />
                  </button>
                </form>
              </div>

              <aside className="contact-form-aside">
                <h3>How can we help?</h3>
                <p>Our team can guide you through admissions, school programs, tuition concerns, visit schedules, and general school inquiries.</p>
                <ul className="inquiry-list">
                  <li>Admissions and enrollment questions</li>
                  <li>Campus visit coordination</li>
                  <li>Program and grade level inquiries</li>
                  <li>Parent and student concerns</li>
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <section className="contact-section" id="how-to-get-here">
          <div className="contact-container">
            <div className="contact-section-heading">
              <p className="contact-kicker">Visit Us</p>
              <h2>How to Get Here</h2>
              <p>Visit Philippians Academy and discover a nurturing environment for faith-centered learning.</p>
            </div>

            <div className="map-layout">
              <div className="map-frame">
                <iframe
                  title="Philippians Academy location map"
                  src={mapsEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <aside className="location-card">
                <div className="contact-icon">
                  <Navigation aria-hidden="true" />
                </div>
                <h3>Visit Our Campus</h3>
                <p>Philippians Academy of Parañaque Inc.<br />1316 Haise St. cor. Borman St., Moonwalk, Parañaque City</p>
                <a className="map-button" href={mapsUrl} target="_blank" rel="noreferrer">
                  Open in Google Maps
                </a>
              </aside>
            </div>
          </div>
        </section>

        <section className="contact-cta">
          <div className="contact-cta-inner">
            <h2>Ready to Begin Your Philippians Journey?</h2>
            <div className="contact-gold-line" />
            <p>We welcome families who desire Christ-centered education, academic excellence, and strong character formation for their children.</p>
            <div className="contact-verse">
              &ldquo;I can do all things through Christ who strengthens me.&rdquo;
              <span>Philippians 4:13</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ContactUs;
