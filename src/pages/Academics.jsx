import { Link, Navigate, useParams } from 'react-router-dom';
import { BookOpenCheck, Cross, HandHeart, MonitorCheck, ShieldCheck } from 'lucide-react';
import Footer from '../components/Footer.jsx';
import OptimizedImage from '../components/OptimizedImage.jsx';
import { optimizedImages } from '../assets/optimized-images.js';
import { getVariantForWidth } from '../utils/imageVariants.js';

const heroBanner = optimizedImages['hero banner.png'];
const kindergartenImage = optimizedImages['Early Learning Kindergarten.png'];
const gradeSchoolImage = optimizedImages['Elementary.jpg'];
const juniorHighImage = optimizedImages['Junior High School.png'];
const personalityDevelopmentImage = optimizedImages['Personality Development.png'];

const academicsStyles = `
.academics-page { --navy: #08183c; --navy-soft: #102a63; --gold: #f2c14e; --gold-deep: #b98416; --ink: #18243d; --muted: #5a667a; background: #ffffff; color: var(--ink); overflow-x: clip; }
.academics-container { width: min(1320px, calc(100% - 48px)); margin: 0 auto; }
.academics-eyebrow { color: var(--gold-deep); font-family: 'Montserrat', 'Poppins', Arial, sans-serif; font-size: 0.78rem; font-weight: 900; letter-spacing: 0.22em; line-height: 1.4; text-transform: uppercase; }
.academics-title { color: var(--navy); font-family: Georgia, 'Times New Roman', serif; font-size: clamp(2.45rem, 4.8vw, 5rem); line-height: 0.98; letter-spacing: 0; margin: 0; }
.academics-copy { color: var(--muted); font-family: 'Poppins', 'Inter', Arial, sans-serif; font-size: clamp(1rem, 1.25vw, 1.13rem); line-height: 1.78; margin: 0; }
.academics-gold-line { width: 82px; height: 2px; margin: 18px auto 18px; border-radius: 999px; background: linear-gradient(90deg, transparent, var(--gold), transparent); }
.academics-hero { position: relative; width: 100%; height: clamp(380px, 32vw, 420px); max-height: 430px; display: grid; place-items: center; overflow: hidden; color: #ffffff; background-image: url("${getVariantForWidth(heroBanner, 1920)}"); background-size: cover; background-position: center top; background-repeat: no-repeat; text-align: center; }
.academics-hero::before { content: ""; position: absolute; inset: 0; background: linear-gradient(90deg, rgba(8, 24, 60, 0.88), rgba(8, 24, 60, 0.68)), linear-gradient(180deg, rgba(8, 24, 60, 0.24), rgba(8, 24, 60, 0.38)); pointer-events: none; }
.academics-hero-content { position: relative; z-index: 1; width: min(820px, calc(100% - 40px)); max-width: 820px; padding: 0 20px; box-sizing: border-box; transform: translateY(55px); }
.academics-hero h1 { margin: 0; color: #ffffff; font-family: Georgia, 'Times New Roman', serif; font-size: clamp(2.5rem, 4vw, 4.15rem); font-weight: 700; line-height: 1; letter-spacing: 0; text-shadow: 0 16px 34px rgba(0, 0, 0, 0.28); }
.academics-hero p { max-width: 650px; margin: 0 auto; color: var(--gold); font-family: 'Montserrat', 'Poppins', Arial, sans-serif; font-size: clamp(0.68rem, 0.86vw, 0.82rem); font-weight: 900; letter-spacing: 0.22em; line-height: 1.35; text-transform: uppercase; text-shadow: 0 8px 22px rgba(0, 0, 0, 0.28); }
.academics-hero.kindergarten-detail-hero { height: clamp(450px, 36vw, 520px); max-height: 540px; }
.academics-hero .program-hero-intro { max-width: 890px; margin: 22px auto 0; color: rgba(255,255,255,0.84); font-family: 'Poppins', 'Inter', Arial, sans-serif; font-size: clamp(0.98rem, 1.2vw, 1.14rem); font-weight: 400; letter-spacing: 0; line-height: 1.72; text-transform: none; text-shadow: 0 10px 24px rgba(0,0,0,0.24); }
.programs-editorial { padding: 110px 0 98px; background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%); }
.program-stack { display: grid; gap: 86px; }
.program-row { display: grid; grid-template-columns: minmax(0, 0.92fr) minmax(360px, 1.08fr); gap: clamp(36px, 5vw, 76px); align-items: center; }
.program-row.reverse { grid-template-columns: minmax(360px, 1.08fr) minmax(0, 0.92fr); }
.program-row.reverse .program-image { order: 2; }
.program-row.reverse .program-copy { order: 1; }
.program-image { position: relative; display: flex; min-height: 0; padding: 12px; border-radius: 30px; overflow: hidden; box-shadow: 0 30px 78px rgba(8,24,60,0.17); background: #ffffff; border: 1px solid rgba(8,24,60,0.08); }
.program-image img { width: 100%; height: auto; min-height: 0; aspect-ratio: 16 / 11; display: block; object-fit: cover; object-position: center; border-radius: 22px; background: #eef2f7; transition: filter 240ms ease; }
.program-row:hover .program-image img { filter: saturate(1.04); }
.program-copy { max-width: 680px; min-width: 0; }
.program-copy .academics-eyebrow { display: block; margin-bottom: 14px; }
.program-copy h2 { margin: 0 0 20px; color: var(--navy); font-family: Georgia, 'Times New Roman', serif; font-size: clamp(2.45rem, 4.8vw, 5rem); line-height: 0.98; font-weight: 700; letter-spacing: 0; }
.program-copy p { margin: 0; color: var(--muted); font-family: 'Poppins', 'Inter', Arial, sans-serif; font-size: clamp(1rem, 1.25vw, 1.13rem); line-height: 1.78; }
.program-link { display: inline-flex; align-items: center; gap: 10px; margin-top: 24px; color: var(--navy); font-family: 'Montserrat', 'Poppins', Arial, sans-serif; font-size: 0.82rem; font-weight: 900; letter-spacing: 0.1em; text-decoration: none; text-transform: uppercase; transition: color 220ms ease, transform 220ms ease; }
.program-link::after { content: ""; width: 42px; height: 2px; border-radius: 999px; background: var(--gold-deep); transition: width 220ms ease; }
.program-link:hover { color: var(--gold-deep); transform: translateY(-2px); }
.program-link:hover::after { width: 62px; }
.learning-approach { padding: 98px 0 106px; background: linear-gradient(180deg, #fffaf0 0%, #ffffff 52%, #f8fafc 100%); }
.approach-header { max-width: 820px; margin: 0 auto 46px; text-align: center; }
.approach-header .academics-title { margin: 14px 0 18px; }
.approach-strip { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 22px; align-items: stretch; }
.approach-item { position: relative; min-width: 0; overflow: hidden; padding: 30px 22px 28px; border-radius: 24px; text-align: center; background: rgba(255,255,255,0.96); border: 1px solid rgba(8,24,60,0.08); box-shadow: 0 18px 48px rgba(8,24,60,0.09); transition: transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease; }
.approach-item::before, .detail-highlight::before { content: ""; position: absolute; left: 24px; right: 24px; top: 0; height: 3px; border-radius: 0 0 999px 999px; background: linear-gradient(90deg, transparent, var(--gold), transparent); }
.approach-item:hover, .detail-highlight:hover { transform: translateY(-7px); border-color: rgba(242,193,78,0.48); box-shadow: 0 30px 68px rgba(8,24,60,0.14); }
.approach-icon { width: 58px; aspect-ratio: 1; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 20px; border-radius: 999px; color: var(--gold); background: var(--navy); box-shadow: 0 14px 30px rgba(8,24,60,0.16); }
.approach-icon svg { width: 28px; height: 28px; stroke-width: 1.8; }
.approach-item h3 { margin: 0; color: var(--navy); font-family: Georgia, 'Times New Roman', serif; font-size: clamp(1.14rem, 1.45vw, 1.38rem); line-height: 1.12; }
.student-development { padding: 110px 0 96px; background: #ffffff; }
.development-grid { display: grid; grid-template-columns: minmax(0, 0.92fr) minmax(360px, 1.08fr); gap: clamp(36px, 5vw, 76px); align-items: center; }
.development-image { position: relative; display: flex; min-height: 0; overflow: hidden; border-radius: 30px; box-shadow: 0 30px 78px rgba(8,24,60,0.17); background: #ffffff; border: 1px solid rgba(8,24,60,0.08); padding: 12px; }
.development-image img { width: 100%; height: auto; aspect-ratio: 16 / 11; display: block; object-fit: cover; object-position: center; border-radius: 22px; }
.development-copy { max-width: 680px; }
.development-copy .academics-title { margin: 14px 0 22px; }
.development-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 13px 24px; margin: 30px 0 0; padding: 0; list-style: none; }
.development-list li { position: relative; padding-left: 22px; color: var(--navy); font-family: 'Montserrat', 'Poppins', Arial, sans-serif; font-weight: 800; line-height: 1.45; }
.development-list li::before { content: ""; position: absolute; left: 0; top: 0.62em; width: 8px; height: 8px; border-radius: 999px; background: var(--gold); box-shadow: 0 0 0 4px rgba(242,193,78,0.14); }
.academics-cta { position: relative; overflow: hidden; padding: 104px 0 110px; background: var(--navy); color: #ffffff; text-align: center; }
.academics-cta::before { content: ""; position: absolute; inset: 0; background-image: linear-gradient(135deg, rgba(8,24,60,0.96), rgba(8,24,60,0.74)), url("${getVariantForWidth(juniorHighImage, 1920)}"); background-size: cover; background-position: center; filter: saturate(0.96); pointer-events: none; }
.academics-cta::after { content: ""; position: absolute; inset: 0; background: radial-gradient(circle at 50% 0%, rgba(242,193,78,0.22), transparent 38%); pointer-events: none; }
.academics-cta .academics-container { position: relative; z-index: 1; max-width: 860px; }
.academics-cta h2 { color: #ffffff; font-family: Georgia, 'Times New Roman', serif; font-size: clamp(2.15rem, 4.7vw, 4.8rem); line-height: 1.06; margin: 0 0 22px; }
.academics-cta p { max-width: 680px; margin: 0 auto 30px; color: rgba(255,255,255,0.84); font-family: 'Poppins', 'Inter', Arial, sans-serif; font-size: clamp(1rem, 1.35vw, 1.16rem); line-height: 1.72; }
.admission-cta { display: inline-flex; align-items: center; justify-content: center; min-height: 52px; padding: 14px 26px; border-radius: 999px; border: 1px solid var(--gold); background: var(--gold); color: var(--navy); font-family: 'Montserrat', 'Poppins', Arial, sans-serif; font-size: 0.82rem; font-weight: 950; letter-spacing: 0.1em; text-transform: uppercase; text-decoration: none; box-shadow: 0 18px 38px rgba(0,0,0,0.22); transition: transform 220ms ease, background 220ms ease, color 220ms ease; }
.admission-cta:hover { transform: translateY(-3px); background: transparent; color: var(--gold); }
.program-detail-page { --navy: #08183c; --navy-soft: #102a63; --gold: #f2c14e; --gold-deep: #b98416; --ink: #18243d; --muted: #5a667a; min-height: 100vh; background: #ffffff; color: var(--ink); overflow-x: clip; }
.program-detail-shell { width: min(1320px, calc(100% - 48px)); margin: 0 auto; padding: 110px 0 96px; }
.program-detail-card { display: grid; grid-template-columns: minmax(0, 0.92fr) minmax(360px, 1.08fr); gap: clamp(36px, 5vw, 76px); align-items: center; }
.program-detail-image { position: relative; display: flex; min-width: 0; min-height: 0; padding: 12px; border-radius: 30px; overflow: hidden; background: #ffffff; border: 1px solid rgba(8,24,60,0.08); box-shadow: 0 30px 78px rgba(8,24,60,0.17); }
.program-detail-image img { width: 100%; height: auto; min-height: 0; aspect-ratio: 16 / 11; display: block; object-fit: cover; object-position: center; border-radius: 22px; background: #eef2f7; transition: filter 240ms ease; }
.program-detail-card:hover .program-detail-image img { filter: saturate(1.04); }
.program-detail-copy { min-width: 0; max-width: 680px; }
.program-detail-copy .academics-title { margin: 14px 0 20px; }
.program-detail-copy .academics-copy + .academics-copy { margin-top: 18px; }
.detail-highlights { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 22px; margin-top: 54px; }
.detail-highlight { position: relative; min-width: 0; overflow: hidden; padding: 34px 28px 32px; border-radius: 24px; background: rgba(255,255,255,0.96); border: 1px solid rgba(8,24,60,0.08); box-shadow: 0 18px 48px rgba(8,24,60,0.09); transition: transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease; }
.detail-highlight h3 { margin: 0 0 14px; color: var(--navy); font-family: Georgia, 'Times New Roman', serif; font-size: clamp(1.34rem, 1.7vw, 1.72rem); line-height: 1.08; }
.detail-highlight p { margin: 0; color: var(--muted); font-size: 0.96rem; line-height: 1.66; }
.kindergarten-editorial { display: block; }
.kindergarten-editorial-grid { display: grid; grid-template-columns: minmax(0, 0.94fr) minmax(390px, 1.06fr); gap: clamp(34px, 5vw, 72px); align-items: stretch; }
.kindergarten-image-card { position: relative; min-width: 0; overflow: hidden; border-radius: 30px; border: 1px solid rgba(242,193,78,0.62); background: #ffffff; box-shadow: 0 30px 78px rgba(8,24,60,0.17); }
.kindergarten-image-card img { width: 100%; height: 100%; min-height: 620px; display: block; object-fit: cover; object-position: center; background: #eef2f7; }
.kindergarten-image-overlay { position: absolute; left: 0; right: 0; bottom: 0; padding: clamp(22px, 3vw, 32px); color: #ffffff; background: linear-gradient(180deg, rgba(8,24,60,0), rgba(8,24,60,0.94) 34%, rgba(8,24,60,0.98)); }
.kindergarten-image-overlay p { max-width: 520px; margin: 0; color: #ffffff; font-family: Georgia, 'Times New Roman', serif; font-size: clamp(1.35rem, 2.2vw, 2.15rem); line-height: 1.14; }
.kindergarten-card-stack { display: grid; gap: 18px; align-content: center; min-width: 0; }
.kindergarten-card { position: relative; display: grid; grid-template-columns: 52px 1fr; gap: 18px; min-width: 0; padding: 24px 26px; border-radius: 22px; background: #ffffff; border: 1px solid rgba(8,24,60,0.08); box-shadow: 0 18px 48px rgba(8,24,60,0.09); overflow: hidden; transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease; }
.kindergarten-card::before { content: ""; position: absolute; inset: 0 auto 0 0; width: 4px; background: linear-gradient(180deg, var(--gold), rgba(242,193,78,0.22)); }
.kindergarten-card:hover { transform: translateY(-4px); border-color: rgba(242,193,78,0.44); box-shadow: 0 26px 62px rgba(8,24,60,0.13); }
.kindergarten-card-icon { width: 52px; aspect-ratio: 1; display: inline-flex; align-items: center; justify-content: center; border-radius: 999px; color: var(--gold); background: rgba(242,193,78,0.12); border: 1px solid rgba(242,193,78,0.42); font-family: 'Montserrat', 'Poppins', Arial, sans-serif; font-size: 0.78rem; font-weight: 950; letter-spacing: 0.08em; }
.kindergarten-card-body { min-width: 0; }
.kindergarten-card h3 { margin: 0 0 8px; color: var(--navy); font-family: Georgia, 'Times New Roman', serif; font-size: clamp(1.22rem, 1.5vw, 1.5rem); line-height: 1.12; }
.kindergarten-card p { margin: 0; color: var(--muted); font-family: 'Poppins', 'Inter', Arial, sans-serif; font-size: 0.96rem; line-height: 1.66; }

@media (max-width: 1080px) {
  .academics-hero { height: 340px; }
  .academics-hero-content { padding: 0 18px; transform: translateY(50px); }
  .program-row, .program-row.reverse, .development-grid, .program-detail-card { grid-template-columns: 1fr; }
  .kindergarten-editorial-grid { grid-template-columns: 1fr; }
  .program-row.reverse .program-image, .program-row.reverse .program-copy { order: initial; }
  .program-copy, .development-copy, .program-detail-copy { max-width: 100%; }
  .approach-strip { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .detail-highlights { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .kindergarten-image-card img { min-height: 460px; }
}

@media (max-width: 760px) {
  .academics-container, .program-detail-shell { width: min(100% - 30px, 1320px); }
  .academics-hero { height: 320px; max-height: none; background-image: url("${getVariantForWidth(heroBanner, 768)}"); }
  .academics-hero.kindergarten-detail-hero { height: 430px; }
  .academics-cta::before { background-image: linear-gradient(135deg, rgba(8,24,60,0.96), rgba(8,24,60,0.74)), url("${getVariantForWidth(juniorHighImage, 768)}"); }
  .academics-hero-content { width: min(100% - 30px, 900px); padding: 0 12px; transform: translateY(48px); }
  .academics-hero h1 { font-size: clamp(2rem, 8vw, 2.75rem); line-height: 1; }
  .academics-hero p { font-size: clamp(0.62rem, 1.6vw, 0.74rem); letter-spacing: 0.18em; }
  .academics-hero .program-hero-intro { max-width: 62ch; margin-top: 18px; font-size: 0.95rem; letter-spacing: 0; line-height: 1.62; }
  .programs-editorial, .student-development, .learning-approach, .academics-cta, .program-detail-shell { padding-top: 70px; padding-bottom: 70px; }
  .kindergarten-editorial { gap: 38px; }
  .kindergarten-editorial-grid { gap: 28px; }
  .kindergarten-image-card { border-radius: 22px; }
  .kindergarten-image-card img { min-height: 340px; }
  .kindergarten-card { grid-template-columns: 46px 1fr; gap: 14px; padding: 22px 20px; border-radius: 20px; }
  .kindergarten-card-icon { width: 46px; }
  .program-stack { gap: 64px; }
  .program-image, .development-image, .program-detail-image { border-radius: 22px; padding: 10px; }
  .program-image img, .development-image img, .program-detail-image img { border-radius: 18px; }
  .approach-strip, .development-list, .detail-highlights { grid-template-columns: 1fr; }
  .admission-cta { width: 100%; }
}

@media (max-width: 576px) {
  .academics-hero { height: 290px; }
  .academics-hero.kindergarten-detail-hero { height: 430px; }
  .academics-hero-content { padding: 0 8px; transform: translateY(46px); }
  .academics-hero h1 { font-size: clamp(1.85rem, 9vw, 2.45rem); line-height: 1; }
  .academics-gold-line { width: 70px; margin: 14px auto 14px; }
  .academics-hero p { font-size: 0.56rem; letter-spacing: 0.14em; line-height: 1.45; }
  .academics-hero .program-hero-intro { font-size: 0.9rem; line-height: 1.58; }
  .program-copy h2, .program-detail-copy .academics-title { font-size: clamp(2.1rem, 10vw, 3rem); }
  .kindergarten-image-card img { min-height: 300px; }
  .kindergarten-image-overlay { padding: 22px 18px; }
  .kindergarten-image-overlay p { font-size: 1.22rem; }
  .kindergarten-card { grid-template-columns: 1fr; }
}
`;

const programs = [
  {
    slug: 'kindergarten',
    label: 'Early Learning',
    title: 'Kindergarten',
    detailTitle: 'Kindergarten Program',
    image: kindergartenImage,
    alt: 'Kindergarten learners at Philippians Academy',
    overview:
      'A joyful early learning environment where young learners develop literacy, numeracy, creativity, social skills, and Christ-centered values.',
    description:
      'Our Kindergarten Program provides a nurturing and joyful learning environment where young learners begin their academic journey with confidence. Through play-based learning, early literacy, numeracy, creativity, social development, and Christian values formation, children are guided to grow emotionally, socially, spiritually, and intellectually.',
    editorialIntro:
      'The Kindergarten Program of Philippians Academy of Parañaque Inc. provides young learners with a strong academic and Christ-centered foundation, nurturing their intellectual, emotional, social, spiritual, and creative growth during their most important developmental years.',
    imageOverlay:
      'Nurturing young hearts and minds. Building a Christ-centered future.',
    editorialCards: [
      {
        title: 'Holistic & Christ-Centered Foundation',
        text: 'Built on progressive early childhood education and values-based learning, the program nurtures each child’s intellectual, emotional, social, spiritual, and creative growth.',
      },
      {
        title: 'Balanced Learning Experiences',
        text: 'Children grow through guided instruction, interactive exploration, and play-based activities in literacy, numeracy, science, music, movement, arts, communication, and practical life skills.',
      },
      {
        title: 'Building Skills for Life',
        text: 'Learners develop routines, discipline, responsibility, study habits, critical thinking, creativity, collaboration, and communication for lifelong learning.',
      },
      {
        title: 'Personalized Teacher Guidance',
        text: 'Teachers provide patience, attention, and support according to each child’s pace and learning style, encouraging understanding, exploration, and meaningful connections.',
      },
      {
        title: 'Values & Character Formation',
        text: 'Christian values are integrated into everyday learning, helping children grow as compassionate, respectful, God-centered individuals.',
      },
    ],
    highlights: [
      ['Joyful Foundations', 'Play-based learning helps young children discover, participate, and grow with confidence.'],
      ['Early Skills', 'Literacy, numeracy, creativity, and communication are introduced through meaningful activities.'],
      ['Christian Formation', 'Children are guided with faith, kindness, respect, and Christ-centered values.'],
    ],
  },
  {
    slug: 'elementary',
    label: 'Foundational Education',
    title: 'Elementary',
    detailTitle: 'Elementary Program',
    hideDetailEyebrow: true,
    hideDetailTitle: true,
    image: gradeSchoolImage,
    alt: 'Elementary students at Philippians Academy',
    overview:
      'A strong academic foundation focused on communication, mathematics, science, discipline, confidence, and character development.',
    description: [
      'A strong academic foundation designed to develop communication skills, critical thinking, creativity, discipline, confidence, and Christian character in young learners.',
      'The Elementary Program of Philippians Academy of Parañaque Inc. provides students with a well-balanced and Christ-centered learning experience that strengthens both academic excellence and personal growth. Using a holistic and learner-focused approach, the program nurtures students intellectually, socially, emotionally, spiritually, and morally during their formative years.',
      'Our curriculum integrates literacy, mathematics, science, social studies, communication, technology, arts, music, and practical life skills through engaging and meaningful learning experiences. Students are encouraged to actively participate, collaborate, explore ideas, and develop confidence in expressing themselves while building a deeper understanding of the world around them.',
    ],
    reverse: true,
    highlights: [
      ['Academic Foundation', 'Core subjects are strengthened through guided, engaging, and purposeful learning.'],
      ['Thinking Skills', 'Students practice communication, creativity, problem-solving, and critical thinking.'],
      ['Character Growth', 'Responsibility, discipline, confidence, and Christian values are formed daily.'],
    ],
  },
  {
    slug: 'junior-high-school',
    label: 'Academic Development',
    title: 'Junior High School',
    detailTitle: 'Junior High School Program',
    hideDetailEyebrow: true,
    hideDetailTitle: true,
    image: juniorHighImage,
    alt: 'Junior High School students at Philippians Academy',
    overview:
      'A structured learning experience that develops critical thinking, collaboration, leadership, communication, and readiness for higher academic challenges.',
    description: [
      'The Junior High School Program of Philippians Academy of Parañaque Inc. offers a Christ-centered and holistic educational experience for students in Grades 7 to 10, helping learners develop academic excellence, leadership, discipline, confidence, and strong moral values as they prepare for higher education and future careers.',
      'Designed in alignment with the standards of the Department of Education, the program provides students with a balanced and engaging curriculum that strengthens foundational knowledge while developing critical thinking, creativity, collaboration, and communication skills. Learners are guided through meaningful and practical learning experiences that encourage them to apply knowledge confidently in both academic and real-life situations.',
      'The school promotes experiential and student-centered learning where learners are encouraged to participate actively, explore ideas, and discover their unique strengths and talents.',
    ],
    highlights: [
      ['Academic Readiness', 'Students build stronger analytical skills for higher learning and real-life application.'],
      ['Leadership Practice', 'Learners are encouraged to collaborate, serve, communicate, and lead responsibly.'],
      ['Faith and Discipline', 'Christian values guide students toward excellence, integrity, and purpose.'],
    ],
  },
];

const approaches = [
  ['Christ-Centered Values Formation', Cross],
  ['Academic Excellence', BookOpenCheck],
  ['Positive Learning Environment', ShieldCheck],
  ['Technology-Enhanced Learning', MonitorCheck],
  ['Leadership & Character Development', HandHeart],
];

const developmentPoints = [
  'Communication skills',
  'Confidence',
  'Creativity',
  'Discipline',
  'Collaboration',
  'Service and leadership',
];

function Academics() {
  return (
    <>
      <style>{academicsStyles}</style>
      <section className="academics-page">
        <section className="academics-hero" aria-labelledby="academics-title">
          <div className="academics-hero-content">
            <h1 id="academics-title">Academics</h1>
            <div className="academics-gold-line" />
            <p>Purposeful learning pathways that nurture faith, character, academic excellence, and leadership.</p>
          </div>
        </section>

        <section className="programs-editorial" aria-label="Academic Programs">
          <div className="academics-container program-stack">
            {programs.map((program) => (
              <article id={program.slug} className={`program-row${program.reverse ? ' reverse' : ''}`} key={program.slug}>
                <div className="program-image">
                  <OptimizedImage
                    image={program.image}
                    alt={program.alt}
                    sizes="(max-width: 980px) 100vw, 50vw"
                  />
                </div>
                <div className="program-copy">
                  <span className="academics-eyebrow">{program.label}</span>
                  <h2>{program.title}</h2>
                  <p>{program.overview}</p>
                  <Link className="program-link" to={`/academics/${program.slug}`}>
                    Explore Program
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="learning-approach">
          <div className="academics-container">
            <div className="approach-header">
              <p className="academics-eyebrow">Learning Approach</p>
              <h2 className="academics-title">Formation for the whole learner.</h2>
              <div className="academics-gold-line" />
            </div>
            <div className="approach-strip">
              {approaches.map(([label, Icon]) => (
                <article className="approach-item" key={label}>
                  <div className="approach-icon">
                    <Icon aria-hidden="true" />
                  </div>
                  <h3>{label}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="student-development">
          <div className="academics-container development-grid">
            <div className="development-image">
              <OptimizedImage
                image={personalityDevelopmentImage}
                alt="Philippians Academy student development experience"
                sizes="(max-width: 980px) 100vw, 50vw"
              />
            </div>
            <div className="development-copy">
              <p className="academics-eyebrow">Student Development</p>
              <h2 className="academics-title">Growing confident, disciplined, and purpose-driven learners.</h2>
              <p className="academics-copy">
                At Philippians Academy, students are guided to grow beyond academics through experiences that strengthen communication, confidence, creativity, discipline, collaboration, service, and leadership.
              </p>
              <ul className="development-list">
                {developmentPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="academics-cta">
          <div className="academics-container">
            <h2>Explore Your Child&apos;s Learning Journey</h2>
            <div className="academics-gold-line" />
            <p>Philippians Academy is committed to helping every learner grow with faith, excellence, and purpose.</p>
            <Link className="admission-cta" to="/admissions">Apply for Admission</Link>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}

function KindergartenEditorialDetail({ program }) {
  return (
    <div className="kindergarten-editorial">
      <div className="kindergarten-editorial-grid">
        <figure className="kindergarten-image-card">
          <OptimizedImage
            image={program.image}
            alt={program.alt}
            sizes="(max-width: 1080px) 100vw, 48vw"
          />
          <figcaption className="kindergarten-image-overlay">
            <p>{program.imageOverlay}</p>
          </figcaption>
        </figure>

        <div className="kindergarten-card-stack">
          {program.editorialCards.map((card, index) => (
            <article className="kindergarten-card" key={card.title}>
              <div className="kindergarten-card-icon" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="kindergarten-card-body">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export function AcademicProgramDetail() {
  const { programSlug } = useParams();
  const program = programs.find((item) => item.slug === programSlug);

  if (!program) {
    return <Navigate to="/academics" replace />;
  }

  return (
    <>
      <style>{academicsStyles}</style>
      <section className="program-detail-page">
        <section className={`academics-hero${program.editorialIntro ? ' kindergarten-detail-hero' : ''}`} aria-labelledby="program-detail-title">
          <div className="academics-hero-content">
            <h1 id="program-detail-title">{program.detailTitle}</h1>
            <div className="academics-gold-line" />
            {program.editorialIntro ? (
              <p className="program-hero-intro">{program.editorialIntro}</p>
            ) : (
              <p>{program.label}</p>
            )}
          </div>
        </section>

        <section className="program-detail-shell" aria-label={`${program.title} details`}>
          {program.editorialCards ? (
            <KindergartenEditorialDetail program={program} />
          ) : (
            <>
              <article className="program-detail-card">
                <div className="program-detail-image">
                  <OptimizedImage
                    image={program.image}
                    alt={program.alt}
                    sizes="(max-width: 980px) 100vw, 50vw"
                  />
                </div>
                <div className="program-detail-copy">
                  {!program.hideDetailEyebrow && <p className="academics-eyebrow">{program.title}</p>}
                  {!program.hideDetailTitle && <h2 className="academics-title">{program.detailTitle}</h2>}
                  {Array.isArray(program.description) ? (
                    program.description.map((paragraph) => (
                      <p className="academics-copy" key={paragraph}>{paragraph}</p>
                    ))
                  ) : (
                    <p className="academics-copy">{program.description}</p>
                  )}
                </div>
              </article>

              <div className="detail-highlights" aria-label={`${program.title} highlights`}>
                {program.highlights.map(([title, description]) => (
                  <article className="detail-highlight" key={title}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </article>
                ))}
              </div>
            </>
          )}
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Academics;
