import { Link, Navigate, useParams } from 'react-router-dom';
import { BookOpenCheck, Cross, HandHeart, ShieldCheck, UserCheck } from 'lucide-react';
import Footer from '../components/Footer.jsx';
import heroBanner from '../assets/hero banner.png';
import kindergartenImage from '../assets/ACADEMIC PAGE/KINDERGARTEN.png';
import gradeSchoolImage from '../assets/ACADEMIC PAGE/ELEMENTARY.png';
import juniorHighImage from '../assets/ACADEMIC PAGE/JUNIOR HIGH.png';
import seniorHighImage from '../assets/ACADEMIC PAGE/SENIOR HIGH.png';
import personalityDevelopmentImage from '../assets/Personality Development.png?version=20260515-refresh';

const academicsStyles = `
.academics-page { --navy: #08183c; --navy-2: #102a63; --gold: #f2c14e; --gold-deep: #b98416; --ink: #17223a; --muted: #5b6678; background: #ffffff; color: var(--ink); overflow-x: clip; }
.academics-container { width: min(1320px, calc(100% - 48px)); margin: 0 auto; }
.academics-hero { position: relative; height: clamp(380px, 32vw, 420px); max-height: 430px; display: grid; place-items: center; overflow: hidden; color: #ffffff; background-image: url("${heroBanner}"); background-size: cover; background-position: center top; }
.academics-hero::before { content: ""; position: absolute; inset: 0; background: linear-gradient(90deg, rgba(8,24,60,0.78), rgba(8,24,60,0.54)), radial-gradient(circle at 50% 0%, rgba(242,193,78,0.14), transparent 34%); pointer-events: none; }
.academics-hero-content { position: relative; z-index: 1; max-width: 820px; padding: 0 20px; text-align: center; transform: translateY(52px); }
.academics-hero h1 { margin: 0; color: #ffffff; font-family: Georgia, 'Times New Roman', serif; font-size: clamp(2.5rem, 4vw, 4.15rem); line-height: 1; font-weight: 700; letter-spacing: 0; text-shadow: 0 16px 34px rgba(0,0,0,0.28); }
.academics-gold-line { width: 82px; height: 2px; margin: 18px auto 18px; border-radius: 999px; background: linear-gradient(90deg, transparent, var(--gold), transparent); }
.academics-hero p { max-width: 650px; margin: 0 auto; color: rgba(255,255,255,0.88); font-size: clamp(0.95rem, 1.2vw, 1.08rem); line-height: 1.6; }
.programs-editorial { padding: 104px 0 94px; background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%); }
.program-stack { display: grid; gap: 86px; }
.program-row { display: grid; grid-template-columns: minmax(0, 1.08fr) minmax(360px, 0.92fr); gap: clamp(34px, 5vw, 72px); align-items: center; }
.program-row.reverse { grid-template-columns: minmax(360px, 0.92fr) minmax(0, 1.08fr); }
.program-row.reverse .program-image { order: 2; }
.program-row.reverse .program-copy { order: 1; }
.program-image { position: relative; min-height: 430px; overflow: hidden; border-radius: 26px; background: #eef2f7; box-shadow: 0 26px 70px rgba(8,24,60,0.16); }
.program-image::after { content: ""; position: absolute; inset: 0; border: 1px solid rgba(255,255,255,0.34); border-radius: inherit; pointer-events: none; }
.program-image img { width: 100%; height: 100%; min-height: 430px; display: block; object-fit: cover; transition: transform 520ms ease; }
.program-row:hover .program-image img { transform: scale(1.025); }
.program-copy { max-width: 560px; }
.program-label { margin: 0 0 15px; color: var(--gold-deep); font-size: 0.76rem; font-weight: 950; letter-spacing: 0.2em; line-height: 1.4; text-transform: uppercase; }
.program-copy h2 { margin: 0 0 18px; color: var(--navy); font-family: Georgia, 'Times New Roman', serif; font-size: clamp(2.2rem, 3.5vw, 3.7rem); line-height: 1; font-weight: 700; }
.program-copy p { margin: 0 0 25px; color: var(--muted); font-size: clamp(1rem, 1.25vw, 1.1rem); line-height: 1.78; }
.program-description { display: grid; gap: 17px; }
.program-description p { margin: 0; }
.program-row.featured-program { display: block; overflow: hidden; border-radius: 30px; background: #ffffff; border: 1px solid rgba(8,24,60,0.08); box-shadow: 0 30px 86px rgba(8,24,60,0.14); }
.program-row.featured-program .program-image { min-height: 0; height: min(52vw, 620px); border-radius: 0; box-shadow: none; }
.program-row.featured-program .program-image img { min-height: 0; height: 100%; object-position: center; }
.program-row.featured-program .program-copy { max-width: none; padding: clamp(34px, 5vw, 64px); }
.program-row.featured-program .program-copy h2 { font-size: clamp(2.75rem, 5.2vw, 5.6rem); }
.program-row.featured-program .program-description { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px clamp(28px, 4vw, 54px); }
.program-row.featured-program .program-description p { font-size: clamp(1rem, 1.16vw, 1.08rem); line-height: 1.82; }
.learning-approach { padding: 88px 0 92px; background: #ffffff; border-top: 1px solid rgba(8,24,60,0.08); border-bottom: 1px solid rgba(8,24,60,0.08); }
.approach-header { max-width: 820px; margin: 0 auto 44px; text-align: center; }
.section-kicker-academics { margin: 0 0 12px; color: var(--gold-deep); font-size: 0.75rem; font-weight: 950; letter-spacing: 0.2em; text-transform: uppercase; }
.approach-header h2, .development-copy h2, .academics-cta h2 { margin: 0; color: var(--navy); font-family: Georgia, 'Times New Roman', serif; font-size: clamp(2.35rem, 4vw, 4.25rem); line-height: 1; font-weight: 700; }
.approach-strip { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 24px; align-items: start; }
.approach-item { min-width: 0; text-align: center; }
.approach-icon { width: 58px; aspect-ratio: 1; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 18px; border-radius: 999px; color: var(--gold); background: var(--navy); box-shadow: 0 14px 30px rgba(8,24,60,0.14); }
.approach-icon svg { width: 27px; height: 27px; stroke-width: 1.8; }
.approach-item h3 { margin: 0; color: var(--navy); font-size: 1rem; line-height: 1.35; font-weight: 850; }
.student-development { padding: 102px 0; background: linear-gradient(180deg, #fffaf0 0%, #ffffff 48%, #f8fafc 100%); }
.development-grid { display: grid; grid-template-columns: minmax(0, 1.02fr) minmax(360px, 0.98fr); gap: clamp(36px, 5vw, 76px); align-items: center; }
.development-image { position: relative; min-height: 560px; overflow: hidden; border-radius: 28px; box-shadow: 0 28px 72px rgba(8,24,60,0.18); background: #eef2f7; }
.development-image::after { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, transparent 50%, rgba(8,24,60,0.48)); pointer-events: none; }
.development-image img { width: 100%; height: 100%; min-height: 560px; display: block; object-fit: cover; }
.development-copy { max-width: 640px; }
.development-copy h2 { margin: 12px 0 22px; }
.development-copy p { margin: 0; color: var(--muted); font-size: clamp(1rem, 1.28vw, 1.13rem); line-height: 1.82; }
.development-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 13px 24px; margin-top: 30px; padding: 0; list-style: none; }
.development-list li { position: relative; padding-left: 22px; color: var(--navy); font-weight: 800; line-height: 1.45; }
.development-list li::before { content: ""; position: absolute; left: 0; top: 0.62em; width: 8px; height: 8px; border-radius: 999px; background: var(--gold); box-shadow: 0 0 0 4px rgba(242,193,78,0.14); }
.academics-cta { position: relative; overflow: hidden; padding: 94px 0 100px; background: linear-gradient(145deg, #061230 0%, var(--navy) 56%, var(--navy-2) 100%); color: #ffffff; text-align: center; }
.academics-cta::before { content: ""; position: absolute; inset: 0; background: radial-gradient(circle at 50% 0%, rgba(242,193,78,0.2), transparent 38%); pointer-events: none; }
.academics-cta .academics-container { position: relative; z-index: 1; max-width: 860px; }
.academics-cta h2 { color: #ffffff; }
.academics-cta .academics-gold-line { margin-top: 24px; }
.academics-cta p { max-width: 680px; margin: 0 auto 30px; color: rgba(255,255,255,0.82); font-size: clamp(1rem, 1.35vw, 1.16rem); line-height: 1.72; }
.admission-cta { display: inline-flex; align-items: center; justify-content: center; min-height: 52px; padding: 14px 26px; border-radius: 999px; border: 1px solid var(--gold); background: var(--gold); color: var(--navy); font-size: 0.82rem; font-weight: 950; letter-spacing: 0.1em; text-transform: uppercase; text-decoration: none; box-shadow: 0 18px 38px rgba(0,0,0,0.22); transition: transform 220ms ease, background 220ms ease, color 220ms ease; }
.admission-cta:hover { transform: translateY(-3px); background: transparent; color: var(--gold); }
.program-detail-page { --navy: #08183c; --navy-2: #102a63; --gold: #f2c14e; --gold-deep: #b98416; --ink: #17223a; --muted: #5b6678; min-height: 100vh; background: linear-gradient(180deg, #ffffff 0%, #f8fafc 58%, #ffffff 100%); color: var(--ink); }
.program-detail-hero { position: relative; min-height: clamp(330px, 30vw, 410px); display: grid; place-items: center; overflow: hidden; padding: 128px 20px 70px; color: #ffffff; background-image: url("${heroBanner}"); background-size: cover; background-position: center top; text-align: center; }
.program-detail-hero::before { content: ""; position: absolute; inset: 0; background: linear-gradient(90deg, rgba(8,24,60,0.82), rgba(8,24,60,0.58)), radial-gradient(circle at 50% 0%, rgba(242,193,78,0.16), transparent 34%); }
.program-detail-hero-inner { position: relative; z-index: 1; width: min(900px, 100%); }
.program-detail-label { margin: 0 0 14px; color: var(--gold); font-family: 'Montserrat', 'Poppins', Arial, sans-serif; font-size: 0.88rem; font-weight: 800; letter-spacing: 0.28em; line-height: 1.35; text-transform: uppercase; }
.program-detail-hero h1 { margin: 0; color: #ffffff; font-family: 'Cinzel', Georgia, serif; font-size: clamp(2.6rem, 5vw, 5.6rem); line-height: 1; font-weight: 700; letter-spacing: -0.02em; text-shadow: 0 18px 38px rgba(0,0,0,0.3); }
.program-detail-shell { width: min(1220px, calc(100% - 48px)); margin: -48px auto 0; position: relative; z-index: 2; padding-bottom: 96px; }
.program-detail-card { display: grid; grid-template-columns: minmax(0, 0.96fr) minmax(360px, 1.04fr); gap: clamp(32px, 5vw, 64px); align-items: center; padding: clamp(20px, 3vw, 34px); border: 1px solid rgba(8,24,60,0.08); border-radius: 30px; background: #ffffff; box-shadow: 0 30px 86px rgba(8,24,60,0.14); }
.program-detail-image { min-width: 0; overflow: hidden; border-radius: 24px; background: #eef2f7; box-shadow: 0 22px 56px rgba(8,24,60,0.14); }
.program-detail-image img { width: 100%; height: clamp(360px, 40vw, 560px); display: block; object-fit: cover; object-position: center; }
.program-detail-copy { min-width: 0; }
.program-detail-copy h2 { margin: 0 0 18px; color: var(--navy); font-family: 'Cinzel', Georgia, serif; font-size: clamp(2.1rem, 3.6vw, 4rem); line-height: 1.04; font-weight: 700; letter-spacing: -0.02em; }
.program-detail-copy p { margin: 0; color: var(--muted); font-family: 'Poppins', 'Inter', Arial, sans-serif; font-size: clamp(1.02rem, 1.25vw, 1.14rem); line-height: 1.9; }
.program-highlights { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; margin-top: 30px; }
.program-highlight-card { min-width: 0; padding: 22px 20px; border: 1px solid rgba(8,24,60,0.08); border-radius: 18px; background: linear-gradient(180deg, #ffffff, #fbfcff); box-shadow: 0 16px 38px rgba(8,24,60,0.08); }
.program-highlight-card h3 { margin: 0 0 10px; color: var(--navy); font-family: 'Cinzel', Georgia, serif; font-size: 1.22rem; line-height: 1.12; }
.program-highlight-card p { margin: 0; color: var(--muted); font-size: 0.94rem; line-height: 1.68; }

@media (max-width: 1080px) {
  .academics-hero { height: 340px; }
  .academics-hero-content { transform: translateY(48px); }
  .program-row, .program-row.reverse, .development-grid { grid-template-columns: 1fr; }
  .program-row.reverse .program-image, .program-row.reverse .program-copy { order: initial; }
  .program-copy, .development-copy { max-width: 100%; }
  .program-row.featured-program .program-description { grid-template-columns: 1fr; }
  .program-detail-card { grid-template-columns: 1fr; }
  .program-highlights { grid-template-columns: 1fr; }
  .approach-strip { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}

@media (max-width: 760px) {
  .academics-container { width: min(100% - 30px, 1320px); }
  .academics-hero { height: 320px; }
  .academics-hero-content { padding: 0 12px; transform: translateY(44px); }
  .academics-hero h1 { font-size: clamp(2rem, 8vw, 2.75rem); }
  .programs-editorial, .student-development, .academics-cta { padding: 70px 0; }
  .learning-approach { padding: 66px 0 70px; }
  .program-stack { gap: 60px; }
  .program-image, .program-image img { min-height: 320px; border-radius: 22px; }
  .program-row.featured-program { border-radius: 24px; }
  .program-row.featured-program .program-image { height: 62vw; min-height: 280px; }
  .program-row.featured-program .program-image img { border-radius: 0; }
  .program-row.featured-program .program-copy { padding: 30px 22px 36px; }
  .development-image, .development-image img { min-height: 360px; border-radius: 22px; }
  .approach-strip { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 28px 20px; }
  .development-list { grid-template-columns: 1fr; }
}

@media (max-width: 520px) {
  .academics-hero { height: 290px; }
  .academics-hero-content { transform: translateY(42px); }
  .academics-hero p { font-size: 0.84rem; line-height: 1.5; }
  .program-image, .program-image img { min-height: 275px; }
  .program-row.featured-program .program-image { height: 68vw; min-height: 230px; }
  .approach-strip { grid-template-columns: 1fr; text-align: left; }
  .approach-item { display: grid; grid-template-columns: 54px 1fr; gap: 15px; align-items: center; text-align: left; }
  .approach-icon { width: 54px; margin: 0; }
  .admission-cta { width: 100%; }
  .program-detail-shell { width: min(100% - 30px, 1220px); padding-bottom: 70px; }
  .program-detail-card { padding: 16px; border-radius: 24px; }
  .program-detail-image { border-radius: 20px; }
  .program-detail-image img { height: 300px; }
}
`;

const academicProgramDetails = [
  {
    slug: 'kindergarten',
    navTitle: 'Kindergarten',
    label: 'Early Learning',
    title: 'Kindergarten Program',
    description:
      'Our Kindergarten Program provides a nurturing and joyful learning environment where young learners begin their academic journey with confidence. Through play-based learning, early literacy, numeracy, creativity, social development, and Christian values formation, children are guided to grow emotionally, socially, spiritually, and intellectually.',
    image: kindergartenImage,
    alt: 'Kindergarten learners at Philippians Academy',
    highlights: [
      ['Joyful Foundations', 'Play-based learning helps young children discover, participate, and grow with confidence.'],
      ['Early Skills', 'Literacy, numeracy, creativity, and communication are introduced through meaningful activities.'],
      ['Christian Formation', 'Children are guided with faith, kindness, respect, and Christ-centered values.'],
    ],
  },
  {
    slug: 'elementary',
    navTitle: 'Elementary',
    label: 'Foundational Education',
    title: 'Elementary Program',
    description:
      'Our Elementary Program builds a strong foundation in core academic subjects while nurturing curiosity, discipline, creativity, and character. Students are guided through meaningful learning experiences that develop communication skills, critical thinking, responsibility, and Christ-centered values.',
    image: gradeSchoolImage,
    alt: 'Elementary students at Philippians Academy',
    highlights: [
      ['Academic Foundation', 'Core subjects are strengthened through guided, engaging, and purposeful learning.'],
      ['Thinking Skills', 'Students practice communication, creativity, problem-solving, and critical thinking.'],
      ['Character Growth', 'Responsibility, discipline, confidence, and Christian values are formed daily.'],
    ],
  },
  {
    slug: 'junior-high-school',
    navTitle: 'Junior High School',
    label: 'Academic Development',
    title: 'Junior High School Program',
    description:
      'Our Junior High School Program prepares learners for higher academic challenges through a balanced curriculum that strengthens analytical thinking, leadership, collaboration, and personal responsibility. Students are encouraged to grow in faith, excellence, discipline, and service as they develop confidence for the next stage of learning.',
    image: juniorHighImage,
    alt: 'Junior High School students at Philippians Academy',
    highlights: [
      ['Academic Readiness', 'Students build stronger analytical skills for higher learning and real-life application.'],
      ['Leadership Practice', 'Learners are encouraged to collaborate, serve, communicate, and lead responsibly.'],
      ['Faith and Discipline', 'Christian values guide students toward excellence, integrity, and purpose.'],
    ],
  },
  {
    slug: 'senior-high-school',
    navTitle: 'Senior High School',
    label: 'Future Readiness',
    title: 'Senior High School Program',
    description:
      'Our Senior High School Program equips students with the knowledge, skills, values, and confidence needed for college, career pathways, and future leadership. Through academic preparation, personal development, Christian formation, and practical learning experiences, students are guided toward their God-given purpose.',
    image: seniorHighImage,
    alt: 'Senior High School students at Philippians Academy',
    highlights: [
      ['College Preparation', 'Learners strengthen academic foundations for future programs and career pathways.'],
      ['Practical Growth', 'Students develop confidence through communication, leadership, and applied learning.'],
      ['Purposeful Formation', 'Faith and values help students pursue their God-given purpose with excellence.'],
    ],
  },
];

const programs = [
  {
    slug: 'kindergarten',
    label: 'Early Learning',
    title: 'Kindergarten',
    text: [
      'The Kindergarten Program of Philippians Academy of Parañaque Inc. is thoughtfully designed to provide young learners with a strong academic and Christ-centered foundation during their most important developmental years. Built upon progressive early childhood education principles and enriched with values-based learning, the program uses a holistic and multidisciplinary approach that nurtures the intellectual, emotional, social, spiritual, and creative growth of every child.',
      'Our program offers a balanced combination of guided instruction, interactive exploration, and play-based learning experiences that allow children to naturally develop their skills and confidence. Learners are engaged in meaningful activities in literacy, numeracy, science, music and movement, social studies, arts, communication, and practical life skills within a safe, caring, and encouraging environment.',
      'At Philippians Academy, we believe that young children learn best through discovery, participation, and positive experiences. Our curriculum introduces routines, discipline, responsibility, and foundational study habits that help learners become independent, confident, and motivated students. We also develop critical thinking, creativity, problem-solving, collaboration, and communication skills to prepare children for lifelong learning and real-world situations.',
      'Our teachers provide personalized attention, patience, and guidance to ensure that each learner receives the support they need according to their individual pace and learning style. Rather than focusing on rote memorization, we encourage understanding, exploration, and meaningful connections across subjects to help children appreciate learning in a natural and enjoyable way.',
      'Most importantly, our Kindergarten Program integrates Christian values and character formation into everyday learning experiences, helping children grow not only academically, but also spiritually and morally as compassionate, respectful, and God-centered individuals.',
    ],
    image: kindergartenImage,
    alt: 'Kindergarten learners at Philippians Academy',
    featured: true,
  },
  {
    slug: 'elementary',
    label: 'Foundational Education',
    title: 'Elementary',
    text: [
      'A strong academic foundation designed to develop communication skills, critical thinking, creativity, discipline, confidence, and Christian character in young learners.',
      'The Elementary Program of Philippians Academy of Parañaque Inc. provides students with a well-balanced and Christ-centered learning experience that strengthens both academic excellence and personal growth. Using a holistic and learner-focused approach, the program nurtures students intellectually, socially, emotionally, spiritually, and morally during their formative years.',
      'Our curriculum integrates literacy, mathematics, science, social studies, communication, technology, arts, music, and practical life skills through engaging and meaningful learning experiences. Students are encouraged to actively participate, collaborate, explore ideas, and develop confidence in expressing themselves while building a deeper understanding of the world around them.',
      'At Philippians Academy, we believe that learning goes beyond memorization. We guide students to think critically, solve problems creatively, communicate effectively, and apply their knowledge in practical and real-life situations. Through structured routines, study habits, leadership opportunities, and values formation, learners develop responsibility, independence, discipline, and respect for others.',
      'Our teachers provide personalized attention and supportive guidance to help every child reach their full potential according to their individual strengths and learning styles. Most importantly, Christian values and character formation are integrated into daily learning experiences, helping students grow into compassionate, responsible, and God-centered individuals prepared for future academic success and lifelong learning.',
    ],
    image: gradeSchoolImage,
    alt: 'Elementary students at Philippians Academy',
    reverse: true,
  },
  {
    slug: 'junior-high-school',
    label: 'Academic Development',
    title: 'Junior High School',
    text: [
      'The Junior High School Program of Philippians Academy of Parañaque Inc. offers a Christ-centered and holistic educational experience for students in Grades 7 to 10, helping learners develop academic excellence, leadership, discipline, confidence, and strong moral values as they prepare for higher education and future careers.',
      'Designed in alignment with the standards of the Department of Education, the program provides students with a balanced and engaging curriculum that strengthens foundational knowledge while developing critical thinking, creativity, collaboration, and communication skills. Learners are guided through meaningful and practical learning experiences that encourage them to apply knowledge confidently in both academic and real-life situations.',
      'Beyond core subjects such as English, Mathematics, Science, Filipino, and Araling Panlipunan, students are also exposed to technology, research, entrepreneurship, leadership activities, arts, music, and values formation programs that contribute to their overall growth and development. The school promotes experiential and student-centered learning where learners are encouraged to participate actively, explore ideas, and discover their unique strengths and talents.',
      'Philippians Academy also prioritizes character formation and spiritual development by integrating Christian values into daily learning experiences. Students are guided to become responsible, respectful, compassionate, and God-centered individuals who can positively contribute to their families, communities, and society.',
      'To support each learner\'s academic journey, teachers provide personalized attention, mentoring, and continuous guidance according to students\' individual learning needs and abilities. Small class sizes allow for closer teacher-student interaction, creating a supportive and nurturing environment where learners feel encouraged, motivated, and valued.',
      'The school also encourages active parent involvement and open communication between the school and families to ensure the holistic development and well-being of every student.',
      'At Philippians Academy, Junior High School education goes beyond academics - it is a transformative journey that prepares students to become competent, resilient, and faith-driven individuals ready to face the challenges of the future with excellence and integrity.',
    ],
    image: juniorHighImage,
    alt: 'Junior High School students at Philippians Academy',
    featured: true,
  },
  {
    slug: 'senior-high-school',
    label: 'Future Readiness',
    title: 'Senior High School',
    text: [
      'The Senior High School Program of Philippians Academy of Parañaque Inc., managed by Regis Marie College, provides students with a Christ-centered, future-ready, and holistic learning experience designed to prepare learners for college, careers, leadership, and lifelong success.',
      'Aligned with the standards of the Department of Education, the program equips students in Grades 11 and 12 with the academic knowledge, practical skills, and character formation needed to thrive in higher education and the modern world. Through a balanced and student-centered approach, learners are encouraged to become critical thinkers, confident communicators, responsible leaders, and faith-driven individuals.',
      'The curriculum goes beyond traditional classroom instruction by integrating meaningful learning experiences, research-based activities, leadership opportunities, technology integration, and real-world applications across various disciplines. Students are guided to develop independence, collaboration, creativity, and problem-solving skills while strengthening their academic foundations in preparation for their chosen career paths and college programs.',
      'Philippians Academy offers strands that help students discover and pursue their passions, interests, and future goals while nurturing their spiritual, emotional, social, and intellectual growth. Through engaging classroom discussions, project-based learning, presentations, and practical activities, students are encouraged to actively participate and apply their knowledge confidently in real-life situations.',
      'True to the school\'s commitment to personalized education, teachers provide close mentorship, academic guidance, and individualized support to help learners maximize their strengths and continuously improve. Small class sizes allow for stronger teacher-student interaction, creating a nurturing environment where students feel motivated, valued, and supported throughout their academic journey.',
      'Christian values and character formation remain at the heart of the Senior High School Program. Students are continuously guided to lead with integrity, compassion, discipline, humility, and faith while developing a strong sense of responsibility toward their families, communities, and future professions.',
      'At Philippians Academy, Senior High School education is more than preparation for graduation - it is a transformative journey that empowers students to rise with excellence, purpose, competence, and strong Christian values as they pursue their dreams and future aspirations.',
    ],
    image: seniorHighImage,
    alt: 'Senior High School students at Philippians Academy',
    reverse: true,
    featured: true,
  },
];

const approaches = [
  ['Christ-Centered Values Formation', Cross],
  ['Academic Excellence', BookOpenCheck],
  ['Positive Learning Environment', ShieldCheck],
  ['Technology-Enhanced Learning', UserCheck],
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

        <section className="programs-editorial">
          <div className="academics-container program-stack">
            {programs.map((program) => (
              <article id={program.slug} className={`program-row${program.reverse ? ' reverse' : ''}${program.featured ? ' featured-program' : ''}`} key={program.title}>
                <div className="program-image">
                  <img src={program.image} alt={program.alt} />
                </div>
                <div className="program-copy">
                  <p className="program-label">{program.label}</p>
                  <h2>{program.title}</h2>
                  <div className="program-description">
                    {(Array.isArray(program.text) ? program.text : [program.text]).map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="learning-approach">
          <div className="academics-container">
            <div className="approach-header">
              <p className="section-kicker-academics">Learning Approach</p>
              <h2>Formation for the whole learner.</h2>
            </div>
            <div className="approach-strip">
              {approaches.map(([label, Icon]) => (
                <div className="approach-item" key={label}>
                  <div className="approach-icon">
                    <Icon aria-hidden="true" />
                  </div>
                  <h3>{label}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="student-development">
          <div className="academics-container development-grid">
            <div className="development-image">
              <img src={personalityDevelopmentImage} alt="Philippians Academy student development experience" />
            </div>
            <div className="development-copy">
              <p className="section-kicker-academics">Student Development</p>
              <h2>Growing confident, disciplined, and purpose-driven learners.</h2>
              <p>
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
            <h2>Explore Your Child&rsquo;s Learning Journey</h2>
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

export function AcademicProgramDetail() {
  const { programSlug } = useParams();
  const program = academicProgramDetails.find((item) => item.slug === programSlug);

  if (!program) {
    return <Navigate to="/academics" replace />;
  }

  return (
    <>
      <style>{academicsStyles}</style>
      <section className="program-detail-page">
        <section className="program-detail-hero" aria-labelledby="program-detail-title">
          <div className="program-detail-hero-inner">
            <p className="program-detail-label">{program.label}</p>
            <h1 id="program-detail-title">{program.title}</h1>
          </div>
        </section>

        <section className="program-detail-shell" aria-label={`${program.navTitle} details`}>
          <article className="program-detail-card">
            <div className="program-detail-image">
              <img src={program.image} alt={program.alt} />
            </div>
            <div className="program-detail-copy">
              <p className="program-detail-label">{program.navTitle}</p>
              <h2>{program.title}</h2>
              <p>{program.description}</p>
            </div>
          </article>

          <div className="program-highlights" aria-label={`${program.navTitle} highlights`}>
            {program.highlights.map(([title, description]) => (
              <article className="program-highlight-card" key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Academics;
