import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BookOpenCheck,
  CheckCircle2,
  Cross,
  HandHeart,
  ShieldCheck,
  UserCheck,
} from 'lucide-react';
import Footer from '../components/Footer.jsx';
import heroBanner from '../assets/hero banner.png';
import gradeSchoolImage from '../assets/Grade School.png';
import juniorHighImage from '../assets/Junior High School.png';
import seniorHighImage from '../assets/Senior High School.png';
import personalityDevelopmentImage from '../assets/Personality Development.png?version=20260515-refresh';
import roboticsAiImage from '../assets/Robotics AI.png?version=20260515-refresh';
import multimediaImage from '../assets/Multi Media.png?version=20260515-refresh';

const aboutStyles = `
.about-page { --navy: #08183c; --navy-soft: #102a63; --gold: #f2c14e; --gold-deep: #b98416; --ink: #18243d; --muted: #5a667a; position: relative; background: #ffffff; color: var(--ink); }
.about-container { width: min(1320px, calc(100% - 48px)); margin: 0 auto; }
.about-eyebrow { color: var(--gold-deep); font-size: 0.78rem; font-weight: 900; letter-spacing: 0.22em; line-height: 1.4; text-transform: uppercase; }
.about-title { color: var(--navy); font-family: Georgia, 'Times New Roman', serif; font-size: clamp(2.45rem, 4.8vw, 5rem); line-height: 0.98; letter-spacing: 0; margin: 0; }
.about-copy { color: var(--muted); font-size: clamp(1rem, 1.25vw, 1.13rem); line-height: 1.78; margin: 0; }
.gold-divider { width: 72px; height: 2px; border-radius: 999px; background: linear-gradient(90deg, transparent, var(--gold), transparent); }
.about-hero { position: relative; min-height: 680px; max-height: 720px; width: 100%; display: flex; align-items: center; justify-content: center; overflow: hidden; color: #ffffff; background-image: url("${heroBanner}"); background-size: cover; background-position: center top; background-repeat: no-repeat; }
.about-hero::before { content: ""; position: absolute; inset: 0; background: linear-gradient(90deg, rgba(8, 24, 60, 0.96) 0%, rgba(8, 24, 60, 0.72) 28%, rgba(8, 24, 60, 0.18) 58%, rgba(8, 24, 60, 0.04) 84%, transparent 100%); pointer-events: none; }
.about-hero::after { display: none; }
.about-hero-gold { display: none; }
.about-hero .about-container { position: relative; z-index: 1; width: 100%; max-width: 1500px; padding: clamp(132px, 14vw, 176px) clamp(24px, 3vw, 48px) clamp(72px, 8vw, 112px); box-sizing: border-box; }
.about-hero-kicker { display: none; }
.about-hero h1 { max-width: 760px; color: #ffffff; font-family: Inter, Arial, sans-serif; font-size: clamp(3.5rem, 5vw, 5.5rem); font-weight: 900; line-height: 1.02; letter-spacing: 0; margin: 0 0 28px; }
.about-hero h1 span { color: var(--gold); }
.about-hero p { max-width: 620px; color: rgba(255,255,255,0.88); font-size: clamp(1rem, 1.5vw, 1.15rem); line-height: 1.9; margin: 0; }
.about-hero-actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 28px; }
.about-btn { display: inline-flex; align-items: center; justify-content: center; min-height: 52px; padding: 14px 26px; border-radius: 999px; border: 1px solid rgba(242,193,78,0.82); font-size: 0.82rem; font-weight: 900; letter-spacing: 0.1em; text-transform: uppercase; text-decoration: none; transition: transform 230ms ease, background 230ms ease, color 230ms ease, box-shadow 230ms ease; }
.about-btn.primary { background: linear-gradient(135deg, var(--gold), #d99a21); color: var(--navy); box-shadow: 0 18px 38px rgba(0,0,0,0.24); }
.about-btn.secondary { background: rgba(255,255,255,0.08); color: #ffffff; backdrop-filter: blur(14px); }
.about-btn:hover { transform: translateY(-3px); box-shadow: 0 22px 46px rgba(0,0,0,0.22); }
.about-hero .about-btn { min-height: auto; padding: 16px 30px; border: none; font-size: 16px; font-weight: 700; letter-spacing: 0; text-transform: none; box-shadow: 0 16px 30px rgba(0,0,0,0.2); }
.about-hero .about-btn.primary { background: var(--gold); color: #111827; }
.about-hero .about-btn.secondary { border: 1px solid rgba(255,255,255,0.42); background: rgba(255,255,255,0.08); color: #ffffff; }
.story-section { position: relative; padding: 110px 0 96px; background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%); }
.story-grid { display: grid; grid-template-columns: minmax(0, 0.92fr) minmax(360px, 1.08fr); gap: clamp(36px, 5vw, 76px); align-items: center; }
.story-media { position: relative; min-height: 620px; border-radius: 30px; overflow: hidden; box-shadow: 0 30px 78px rgba(8,24,60,0.17); background: #eef2f7; }
.story-media img { width: 100%; height: 100%; min-height: 620px; display: block; object-fit: cover; transition: transform 640ms ease; }
.story-media:hover img { transform: scale(1.035); }
.story-media::before { content: ""; position: absolute; inset: 0; z-index: 1; background: linear-gradient(180deg, rgba(8,24,60,0) 46%, rgba(8,24,60,0.66)); pointer-events: none; }
.story-media::after { content: ""; position: absolute; left: 0; top: 0; bottom: 0; z-index: 2; width: 9px; background: linear-gradient(180deg, var(--gold), var(--navy)); }
.story-media-badge { position: absolute; left: 30px; right: 30px; bottom: 28px; z-index: 3; color: #ffffff; font-family: Georgia, 'Times New Roman', serif; font-size: clamp(1.55rem, 2.5vw, 2.55rem); line-height: 1.12; }
.story-copy { max-width: 680px; }
.story-copy .about-title { margin: 14px 0 20px; }
.story-copy .gold-divider { margin: 0 0 26px; }
.story-copy .about-copy + .about-copy { margin-top: 18px; }
.verse-note { margin-top: 28px; padding: 22px 24px; border-left: 3px solid var(--gold); border-radius: 0 18px 18px 0; background: #ffffff; box-shadow: 0 18px 42px rgba(8,24,60,0.08); color: var(--navy); font-weight: 750; line-height: 1.62; }
.mission-vision { padding: 96px 0; background: #ffffff; }
.mv-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 26px; }
.mv-card { position: relative; min-width: 0; overflow: hidden; padding: 42px; border-radius: 26px; background: linear-gradient(145deg, var(--navy), #102c68); color: #ffffff; border: 1px solid rgba(242,193,78,0.24); box-shadow: 0 24px 60px rgba(8,24,60,0.18); }
.mv-card::before { content: ""; position: absolute; inset: 0; background: radial-gradient(circle at 82% 14%, rgba(242,193,78,0.2), transparent 32%); pointer-events: none; }
.mv-card > * { position: relative; z-index: 1; }
.mv-icon { width: 70px; aspect-ratio: 1; display: inline-flex; align-items: center; justify-content: center; border-radius: 999px; margin-bottom: 26px; color: var(--gold); background: rgba(255,255,255,0.08); border: 1px solid rgba(242,193,78,0.34); box-shadow: inset 0 1px 0 rgba(255,255,255,0.1); }
.mv-icon svg { width: 33px; height: 33px; stroke-width: 1.7; }
.mv-card h2 { color: var(--gold); font-size: 0.86rem; font-weight: 950; letter-spacing: 0.22em; text-transform: uppercase; margin: 0 0 16px; }
.mv-card p { color: rgba(255,255,255,0.86); font-family: Georgia, 'Times New Roman', serif; font-size: clamp(1.35rem, 2vw, 2.05rem); line-height: 1.32; margin: 0; }
.values-section { position: relative; padding: 98px 0 106px; background: linear-gradient(180deg, #fffaf0 0%, #ffffff 52%, #f8fafc 100%); overflow: hidden; }
.values-header { max-width: 800px; margin: 0 auto 46px; text-align: center; }
.values-header .about-title { margin: 14px 0 18px; }
.values-header .gold-divider { margin: 0 auto; }
.values-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 22px; }
.value-card, .choice-card, .campus-preview-card { position: relative; min-width: 0; background: rgba(255,255,255,0.96); border: 1px solid rgba(8,24,60,0.08); box-shadow: 0 18px 48px rgba(8,24,60,0.09); transition: transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease; }
.value-card { overflow: hidden; padding: 34px 28px 32px; border-radius: 24px; }
.value-card::before, .choice-card::before, .campus-preview-card::before { content: ""; position: absolute; left: 24px; right: 24px; top: 0; height: 3px; border-radius: 0 0 999px 999px; background: linear-gradient(90deg, transparent, var(--gold), transparent); }
.value-card:hover, .choice-card:hover, .campus-preview-card:hover { transform: translateY(-7px); border-color: rgba(242,193,78,0.48); box-shadow: 0 30px 68px rgba(8,24,60,0.14); }
.value-icon, .choice-icon { width: 64px; aspect-ratio: 1; display: inline-flex; align-items: center; justify-content: center; border-radius: 999px; color: var(--gold); background: var(--navy); margin-bottom: 24px; box-shadow: 0 14px 30px rgba(8,24,60,0.16); }
.value-icon svg, .choice-icon svg { width: 30px; height: 30px; stroke-width: 1.8; }
.value-card h3, .choice-card h3, .campus-preview-card h3 { color: var(--navy); font-family: Georgia, 'Times New Roman', serif; font-size: clamp(1.34rem, 1.7vw, 1.72rem); line-height: 1.08; margin: 0 0 14px; }
.value-card p, .choice-card p, .campus-preview-card p { color: var(--muted); font-size: 0.96rem; line-height: 1.66; margin: 0; }
.campus-preview { padding: 102px 0; background: #ffffff; }
.section-split-header { display: grid; grid-template-columns: minmax(0, 0.82fr) minmax(320px, 0.72fr); gap: 36px; align-items: end; margin-bottom: 42px; }
.section-split-header .about-title { margin-top: 14px; }
.campus-preview-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 22px; }
.campus-preview-card { display: grid; grid-template-rows: auto 1fr; overflow: hidden; border-radius: 22px; }
.campus-preview-image { aspect-ratio: 16 / 10; overflow: hidden; background: #eef2f7; }
.campus-preview-image img { width: 100%; height: 100%; display: block; object-fit: cover; transition: transform 520ms ease; }
.campus-preview-card:hover img { transform: scale(1.035); }
.campus-preview-body { padding: 25px 24px 28px; }
.campus-action { margin-top: 34px; text-align: center; }
.choices-section { padding: 96px 0 104px; background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%); }
.choices-header { max-width: 820px; margin: 0 auto 42px; text-align: center; }
.choices-header .about-title { margin: 14px 0 18px; }
.choices-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 22px; }
.choice-card { overflow: hidden; padding: 30px 26px 28px; border-radius: 24px; }
.choice-icon { width: 58px; margin-bottom: 20px; }
.scripture-about-cta { position: relative; overflow: hidden; padding: 104px 0 110px; color: #ffffff; text-align: center; background: var(--navy); }
.scripture-about-cta::before { content: ""; position: absolute; inset: 0; background-image: linear-gradient(135deg, rgba(8,24,60,0.96), rgba(8,24,60,0.74)), url("${seniorHighImage}"); background-size: cover; background-position: center; filter: saturate(0.96); }
.scripture-about-cta::after { content: ""; position: absolute; inset: 0; background: radial-gradient(circle at 50% 0%, rgba(242,193,78,0.22), transparent 38%); pointer-events: none; }
.scripture-about-cta .about-container { position: relative; z-index: 1; max-width: 980px; }
.scripture-about-cta .gold-divider { margin: 0 auto 26px; width: 96px; }
.scripture-about-cta h2 { color: #ffffff; font-family: Georgia, 'Times New Roman', serif; font-size: clamp(2.15rem, 4.7vw, 4.8rem); line-height: 1.06; margin: 0 0 22px; }
.scripture-about-cta p { color: var(--gold); font-size: 0.82rem; font-weight: 950; letter-spacing: 0.24em; text-transform: uppercase; margin: 0 0 32px; }

@media (max-width: 1080px) {
  .story-grid, .section-split-header { grid-template-columns: 1fr; }
  .values-grid, .choices-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .campus-preview-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 760px) {
  .about-container { width: min(100% - 30px, 1320px); }
  .about-hero { min-height: auto; max-height: none; }
  .about-hero .about-container { padding: 172px 20px 56px; }
  .about-hero h1 { font-size: clamp(2.75rem, 8vw, 4.2rem); }
  .mv-card { padding: 28px 22px; border-radius: 22px; }
  .story-section, .mission-vision, .values-section, .campus-preview, .choices-section, .scripture-about-cta { padding: 70px 0; }
  .story-media, .story-media img { min-height: 360px; border-radius: 22px; }
  .mv-grid, .values-grid, .choices-grid, .campus-preview-grid { grid-template-columns: 1fr; }
  .about-btn { width: 100%; }
  .campus-action .about-btn, .scripture-about-cta .about-btn { width: auto; }
}

@media (max-width: 576px) {
  .about-hero .about-container { padding: 188px 18px 48px; }
  .about-hero h1 { font-size: clamp(2.4rem, 9vw, 3.5rem); }
  .about-hero p { font-size: 0.95rem; }
}

@media (prefers-reduced-motion: reduce) {
  .value-card, .choice-card, .campus-preview-card, .story-media img, .campus-preview-image img, .about-btn { transition: none; }
}
`;

const reveal = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

const revealProps = {
  variants: reveal,
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, amount: 0.22 },
  transition: { duration: 0.72, ease: 'easeOut' },
};

const values = [
  {
    title: 'Faith',
    description: 'Building a strong spiritual foundation centered on Christ.',
    Icon: Cross,
  },
  {
    title: 'Excellence',
    description: 'Encouraging students to achieve their highest potential academically and personally.',
    Icon: BookOpenCheck,
  },
  {
    title: 'Character',
    description: 'Developing integrity, discipline, compassion, and leadership.',
    Icon: ShieldCheck,
  },
  {
    title: 'Service',
    description: 'Instilling a heart for community, kindness, and meaningful contribution.',
    Icon: HandHeart,
  },
];

const campusPreviews = [
  {
    title: 'Student Activities',
    description: 'Spaces for confidence, friendship, discovery, and joyful participation.',
    image: gradeSchoolImage,
  },
  {
    title: 'Recognition Ceremonies',
    description: 'Meaningful moments that honor effort, growth, leadership, and excellence.',
    image: seniorHighImage,
  },
  {
    title: 'Foundation Day',
    description: 'A celebration of community, gratitude, creativity, and school spirit.',
    image: juniorHighImage,
  },
  {
    title: 'Christian Formation',
    description: 'Faith-shaped rhythms that guide students toward wisdom and purpose.',
    image: heroBanner,
  },
  {
    title: 'Academic Programs',
    description: 'Learning pathways that develop strong minds and future-ready skills.',
    image: roboticsAiImage,
  },
  {
    title: 'Community Events',
    description: 'Gatherings that connect families, educators, students, and shared values.',
    image: multimediaImage,
  },
];

const familyChoices = [
  ['Christ-Centered Education', Cross],
  ['Safe & Supportive Environment', ShieldCheck],
  ['Dedicated Educators', UserCheck],
  ['Student Development', HandHeart],
  ['Academic Excellence', BookOpenCheck],
  ['Leadership Formation', CheckCircle2],
];

function About() {
  return (
    <>
      <style>{aboutStyles}</style>
      <section className="about-page">
        <section className="about-hero" aria-labelledby="about-page-title">
          <div className="about-hero-gold" />
          <div className="about-container">
            <div>
              <div className="about-hero-kicker">About Philippians Academy</div>
              <h1 id="about-page-title">
                Faith. Excellence.
                <br />
                <span>Purpose.</span>
              </h1>
              <p>
                Guiding hearts. Developing minds.
                <br />
                Preparing leaders for a greater tomorrow.
              </p>
              <div className="about-hero-actions">
                <a className="about-btn primary" href="#about-story">Discover More</a>
              </div>
            </div>
          </div>
        </section>

        <section className="story-section" id="about-story">
          <div className="about-container story-grid">
            <motion.div className="story-media" {...revealProps}>
              <img src={personalityDevelopmentImage} alt="Philippians Academy students in a warm learning environment" />
              <div className="story-media-badge">A school community where every learner is guided with faith and care.</div>
            </motion.div>

            <motion.div className="story-copy" {...revealProps}>
              <p className="about-eyebrow">Our Story</p>
              <h2 className="about-title">Our Story</h2>
              <div className="gold-divider" />
              <p className="about-copy">
                Philippians Academy of Para&ntilde;aque is a faith-centered educational institution dedicated to shaping students through academic excellence, Christian values, leadership, and meaningful learning experiences. Located in Para&ntilde;aque City, the academy provides a nurturing and supportive environment where students are guided to grow intellectually, spiritually, socially, and emotionally.
              </p>
              <p className="about-copy">
                Inspired by the biblical message of Philippians 4:13, the academy continues to build a community grounded in faith, discipline, integrity, compassion, and service.
              </p>
              <p className="about-copy">
                The school believes that education goes beyond academics. It is about developing future leaders with strong moral character, a heart for service, and the confidence to pursue their God-given purpose.
              </p>
              <div className="verse-note">&ldquo;I can do all things through Christ who strengthens me.&rdquo;</div>
            </motion.div>
          </div>
        </section>

        <section className="mission-vision">
          <div className="about-container mv-grid">
            <motion.article className="mv-card" {...revealProps}>
              <div className="mv-icon"><Cross aria-hidden="true" /></div>
              <h2>Mission</h2>
              <p>To provide quality Christ-centered education that nurtures academic excellence, godly character, leadership, and service through meaningful and transformative learning experiences.</p>
            </motion.article>
            <motion.article className="mv-card" {...revealProps} transition={{ duration: 0.72, ease: 'easeOut', delay: 0.1 }}>
              <div className="mv-icon"><BookOpenCheck aria-hidden="true" /></div>
              <h2>Vision</h2>
              <p>To become a respected Christian educational institution that inspires learners to grow in faith, wisdom, integrity, and excellence as future leaders and responsible citizens.</p>
            </motion.article>
          </div>
        </section>

        <section className="values-section">
          <div className="about-container">
            <motion.div className="values-header" {...revealProps}>
              <p className="about-eyebrow">Faith &bull; Excellence &bull; Character &bull; Service</p>
              <h2 className="about-title">Our Core Values</h2>
              <div className="gold-divider" />
            </motion.div>

            <div className="values-grid">
              {values.map(({ title, description, Icon }, index) => (
                <motion.article className="value-card" key={title} {...revealProps} transition={{ duration: 0.66, ease: 'easeOut', delay: index * 0.06 }}>
                  <div className="value-icon"><Icon aria-hidden="true" /></div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="campus-preview">
          <div className="about-container">
            <motion.div className="section-split-header" {...revealProps}>
              <div>
                <p className="about-eyebrow">Campus Life Preview</p>
                <h2 className="about-title">A Community of Learning and Growth</h2>
              </div>
              <p className="about-copy">
                At Philippians Academy, students experience a vibrant and supportive school community filled with opportunities for learning, creativity, leadership, friendship, and faith formation.
              </p>
            </motion.div>

            <div className="campus-preview-grid">
              {campusPreviews.map((preview, index) => (
                <motion.article className="campus-preview-card" key={preview.title} {...revealProps} transition={{ duration: 0.64, ease: 'easeOut', delay: index * 0.04 }}>
                  <div className="campus-preview-image">
                    <img src={preview.image} alt={`${preview.title} at Philippians Academy`} />
                  </div>
                  <div className="campus-preview-body">
                    <h3>{preview.title}</h3>
                    <p>{preview.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="campus-action">
              <Link className="about-btn primary" to="/campus-life">Explore Campus Life</Link>
            </div>
          </div>
        </section>

        <section className="choices-section">
          <div className="about-container">
            <motion.div className="choices-header" {...revealProps}>
              <p className="about-eyebrow">Why Families Choose Philippians</p>
              <h2 className="about-title">Warmth parents can feel. Excellence students can grow into.</h2>
              <div className="gold-divider" />
            </motion.div>

            <div className="choices-grid">
              {familyChoices.map(([title, Icon], index) => (
                <motion.article className="choice-card" key={title} {...revealProps} transition={{ duration: 0.62, ease: 'easeOut', delay: index * 0.04 }}>
                  <div className="choice-icon"><Icon aria-hidden="true" /></div>
                  <h3>{title}</h3>
                  <p>Designed to help learners grow with confidence, purpose, discipline, and a lasting foundation of faith.</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="scripture-about-cta">
          <div className="about-container">
            <motion.div {...revealProps}>
              <div className="gold-divider" />
              <h2>&ldquo;I can do all things through Christ who strengthens me.&rdquo;</h2>
              <p>Philippians 4:13</p>
              <Link className="about-btn primary" to="/admissions">Apply for Admission</Link>
            </motion.div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default About;
