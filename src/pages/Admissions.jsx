import { CheckCircle2, ClipboardList, FileText, Globe2, MessageCircle, UserCheck } from 'lucide-react';
import Footer from '../components/Footer.jsx';

const admissionsPageStyles = `
.admissions-page { position: relative; overflow: hidden; min-height: 100vh; padding: 170px 0 104px; background: linear-gradient(180deg, #ffffff 0%, #f8fafc 52%, #fffaf0 100%); color: #08183c; }
.admissions-page::before { content: ""; position: absolute; left: 50%; top: 110px; width: min(780px, 86vw); aspect-ratio: 1 / 0.42; transform: translateX(-50%); background: radial-gradient(ellipse at center, rgba(242, 193, 78, 0.18), rgba(242, 193, 78, 0)); pointer-events: none; }
.admissions-page .container { position: relative; z-index: 1; max-width: 1360px; margin: 0 auto; padding: 0 24px; }
.admissions-hero { display: grid; grid-template-columns: minmax(0, 0.95fr) minmax(320px, 0.65fr); gap: clamp(30px, 5vw, 72px); align-items: end; margin-bottom: 58px; }
.admissions-label { color: #b98416; font-size: 0.78rem; font-weight: 900; letter-spacing: 0.2em; text-transform: uppercase; margin: 0 0 16px; }
.admissions-hero h1 { color: #08183c; font-family: Georgia, 'Times New Roman', serif; font-size: clamp(2.55rem, 4.35vw, 4.45rem); line-height: 1; margin: 0 0 22px; max-width: 920px; }
.admissions-subtitle { color: #344057; font-size: clamp(1rem, 1.55vw, 1.22rem); line-height: 1.72; max-width: 720px; margin: 0; }
.admissions-hero-panel { border-left: 3px solid #d69b14; padding: 8px 0 8px 26px; }
.admissions-hero-panel h2 { color: #08183c; font-family: Georgia, 'Times New Roman', serif; font-size: clamp(2rem, 3vw, 3.2rem); line-height: 1; margin: 0 0 16px; }
.admissions-hero-panel p { color: #5b6577; font-size: 1rem; line-height: 1.7; margin: 0; }
.requirements-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; align-items: stretch; }
.requirement-block { min-width: 0; padding: 28px; border-radius: 24px; background: rgba(255, 255, 255, 0.96); border: 1px solid rgba(8, 24, 60, 0.08); box-shadow: 0 18px 48px rgba(8, 24, 60, 0.09); }
.requirement-heading { display: flex; align-items: center; gap: 15px; margin-bottom: 20px; padding-bottom: 18px; border-bottom: 1px solid rgba(214, 155, 20, 0.26); }
.requirement-icon { flex: 0 0 auto; width: 54px; aspect-ratio: 1; display: inline-flex; align-items: center; justify-content: center; border-radius: 999px; color: #f2c14e; background: #08183c; box-shadow: 0 12px 28px rgba(8, 24, 60, 0.16); }
.requirement-icon svg { width: 26px; height: 26px; stroke-width: 1.8; }
.requirement-block h3 { color: #08183c; font-size: clamp(1.2rem, 1.8vw, 1.55rem); line-height: 1.2; margin: 0; }
.requirement-list { list-style: none; display: grid; gap: 12px; margin: 0; padding: 0; }
.requirement-list li { display: grid; grid-template-columns: 20px 1fr; gap: 11px; align-items: start; color: #4f5b70; font-size: 0.98rem; line-height: 1.58; }
.requirement-list svg { width: 18px; height: 18px; color: #d69b14; margin-top: 3px; }
.enrollment-process { margin-top: 64px; padding-top: 46px; border-top: 1px solid rgba(214, 155, 20, 0.26); }
.enrollment-process h3 { color: #08183c; font-family: Georgia, 'Times New Roman', serif; font-size: clamp(2rem, 3.4vw, 3.45rem); line-height: 1.02; max-width: 720px; margin: 0 0 30px; }
.enrollment-steps { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 14px; }
.enrollment-step { min-width: 0; min-height: 150px; display: flex; flex-direction: column; justify-content: space-between; padding: 22px 18px; border-radius: 20px; background: #08183c; color: #ffffff; border: 1px solid rgba(242, 193, 78, 0.24); }
.step-number { color: #f2c14e; font-size: 0.73rem; font-weight: 900; letter-spacing: 0.14em; text-transform: uppercase; }
.enrollment-step p { font-family: Georgia, 'Times New Roman', serif; font-size: 1.22rem; line-height: 1.18; margin: 26px 0 0; }
.admissions-final-cta { margin-top: 64px; padding: 46px 44px; border-radius: 28px; background: #08183c; color: #ffffff; text-align: center; overflow: hidden; position: relative; }
.admissions-final-cta::before { content: ""; position: absolute; inset: 0; background: radial-gradient(circle at 50% 0%, rgba(242, 193, 78, 0.18), transparent 42%); pointer-events: none; }
.admissions-final-cta > * { position: relative; z-index: 1; }
.admissions-final-cta svg { width: 34px; height: 34px; color: #f2c14e; margin-bottom: 18px; }
.admissions-final-cta h3 { font-family: Georgia, 'Times New Roman', serif; font-size: clamp(2rem, 3.6vw, 3.8rem); line-height: 1; margin: 0 0 16px; color: #ffffff; }
.admissions-final-cta p { color: rgba(255, 255, 255, 0.82); font-size: clamp(1rem, 1.35vw, 1.14rem); line-height: 1.7; max-width: 680px; margin: 0 auto 28px; }
.admissions-contact-btn { border: 1px solid #f2c14e; border-radius: 999px; background: #f2c14e; color: #08183c; padding: 14px 26px; font-size: 0.9rem; font-weight: 900; letter-spacing: 0.08em; text-transform: uppercase; cursor: pointer; transition: transform 220ms ease, background 220ms ease, color 220ms ease; }
.admissions-contact-btn:hover { transform: translateY(-3px); background: transparent; color: #f2c14e; }

@media (max-width: 992px) {
  .admissions-page { padding-top: 150px; }
  .admissions-hero { grid-template-columns: 1fr; align-items: start; margin-bottom: 44px; }
  .admissions-hero-panel { max-width: 720px; }
  .requirements-grid { grid-template-columns: 1fr; }
  .enrollment-steps { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 768px) {
  .admissions-page { padding: 138px 0 68px; }
  .enrollment-steps { grid-template-columns: 1fr; }
}

@media (max-width: 576px) {
  .admissions-page { padding-top: 132px; }
  .admissions-page .container { padding: 0 15px; }
  .admissions-hero { gap: 24px; margin-bottom: 34px; }
  .admissions-hero-panel { padding-left: 20px; }
  .requirement-block { padding: 24px 20px; border-radius: 20px; }
  .requirement-heading { align-items: flex-start; }
  .requirement-icon { width: 48px; }
  .enrollment-process { margin-top: 46px; padding-top: 36px; }
  .enrollment-step { min-height: 128px; }
  .admissions-final-cta { margin-top: 46px; padding: 36px 22px; border-radius: 22px; }
}
`;

const admissionsRequirementGroups = [
  {
    title: 'Admission Requirements',
    Icon: ClipboardList,
    items: [
      '2 copies of recent 2x2 ID picture',
      'Clear copy of Birth Certificate',
      'Copy of latest Report Card / Form 138',
      'Certificate of Good Moral Character for Grade 1 to Grade 10 applicants',
      'Any previous school records, if applicable',
    ],
  },
  {
    title: 'Registration and Enrollment Requirements',
    Icon: FileText,
    items: [
      'Original Report Card / Form 138',
      'Completed enrollment form',
      'Student information sheet',
      'Parent/guardian valid ID',
      'Payment confirmation or proof of initial enrollment fee, if applicable',
    ],
  },
  {
    title: 'For Transferees',
    Icon: UserCheck,
    items: [
      'Latest Report Card',
      'Certificate of Good Moral Character',
      'Birth Certificate',
      'ESC/QVR documents if applicable',
      'Clearance from previous school, if required',
    ],
  },
  {
    title: 'For Foreign Students, if applicable',
    Icon: Globe2,
    items: [
      'Copy of passport',
      'Copy of valid visa',
      'School records from previous school',
      'Other documents required by Philippine education regulations',
    ],
  },
];

const enrollmentSteps = [
  'Submit Inquiry',
  'Prepare Requirements',
  'Assessment / Interview',
  'Confirmation of Slot',
  'Enrollment and Payment',
];

function Admissions() {
  return (
    <>
      <style>{admissionsPageStyles}</style>
      <section className="admissions-page">
        <div className="container">
          <div className="admissions-hero">
            <div>
              <p className="admissions-label">Admissions</p>
              <h1>Start Your Child&rsquo;s Journey at Philippians Academy</h1>
              <p className="admissions-subtitle">
                We welcome families who seek a nurturing, Christ-centered, and academically supportive learning environment for their children.
              </p>
            </div>
            <div className="admissions-hero-panel">
              <h2>Admissions</h2>
              <p>
                Our admissions team helps families prepare requirements, understand the enrollment process, and move forward with clarity and care.
              </p>
            </div>
          </div>

          <div className="requirements-grid">
            {admissionsRequirementGroups.map(({ title, Icon, items }) => (
              <section className="requirement-block" key={title}>
                <div className="requirement-heading">
                  <div className="requirement-icon">
                    <Icon aria-hidden="true" />
                  </div>
                  <h3>{title}</h3>
                </div>
                <ul className="requirement-list">
                  {items.map((item) => (
                    <li key={item}>
                      <CheckCircle2 aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <div className="enrollment-process">
            <p className="admissions-label">Enrollment Process</p>
            <h3>Simple steps for a guided application experience.</h3>
            <div className="enrollment-steps">
              {enrollmentSteps.map((step, index) => (
                <div className="enrollment-step" key={step}>
                  <span className="step-number">Step {index + 1}</span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="admissions-final-cta">
            <MessageCircle aria-hidden="true" />
            <h3>Ready to Enroll?</h3>
            <p>Our admissions team is ready to assist you with the requirements and enrollment process.</p>
            <button className="admissions-contact-btn">Contact Admissions</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Admissions;
