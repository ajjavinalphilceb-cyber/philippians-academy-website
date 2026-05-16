import { useEffect } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpenCheck, Cross, HandHeart, ShieldCheck } from 'lucide-react';
import Footer from './components/Footer.jsx';
import SiteNav from './components/SiteNav.jsx';
import About from './pages/About.jsx';
import Admissions from './pages/Admissions.jsx';
import CampusLife from './pages/CampusLife.jsx';
import SchoolEvents from './pages/SchoolEvents.jsx';
import heroBanner from './assets/hero banner.png';
import kindergartenImage from './assets/Kindergarten.png';
import gradeSchoolImage from './assets/Grade School.png';
import juniorHighImage from './assets/Junior High School.png';
import seniorHighImage from './assets/Senior High School.png';
import kindergartenUniformImage from './assets/Kindergarten Uniform.png';
import gradeSchoolUniformImage from './assets/Grade School Uniform.png';
import juniorHighUniformImage from './assets/Junior  High Uniform.png';
import seniorHighUniformImage from './assets/Senior High Uniform.png';
import englishOnlyImage from './assets/English only Policy.png?version=20260515-refresh';
import roboticsAiImage from './assets/Robotics AI.png?version=20260515-refresh';
import webDevelopmentImage from './assets/Web Development.png?version=20260515-refresh';
import multimediaImage from './assets/Multi Media.png?version=20260515-refresh';
import culinaryImage from './assets/Culinary.png?version=20260515-refresh';
import personalityDevelopmentImage from './assets/Personality Development.png?version=20260515-refresh';
import speechDevelopmentImage from './assets/Speech Dev.png?version=20260515-refresh';
import tableMannersImage from './assets/Proper table manner.png?version=20260515-refresh';
import properOutfitImage from './assets/Proper Outfit.png?version=20260515-refresh';
import publicSpeakingImage from './assets/Public Speaking.png?version=20260515-refresh';

const responsiveStyles = `
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700&display=swap');

.hero { min-height: min(820px, 100vh); }
.hero::after { content: ""; position: absolute; inset: auto 0 0 0; z-index: 1; height: 10px; background: linear-gradient(90deg, transparent, rgba(242, 193, 78, 0.9), transparent); box-shadow: 0 -22px 70px rgba(242, 193, 78, 0.16); pointer-events: none; }
.hero-content { position: relative; z-index: 2; width: min(1320px, calc(100% - 48px)); max-width: 1320px; margin: 0 auto; padding: 188px 0 92px; box-sizing: border-box; }
.site-nav { padding: clamp(18px, 2vw, 28px) clamp(24px, 3vw, 48px); }
.hero-header { gap: 24px; align-items: center; }
.brand-block { gap: 16px; min-width: 0; }
.hero-nav-links { display: flex; gap: 28px; flex-wrap: nowrap; justify-content: flex-end; align-items: center; }
.hero-nav-links a { white-space: nowrap; }
.mobile-toggle { display: none; }
.mobile-menu { display: none; width: 100%; flex-direction: column; gap: 12px; margin-top: 16px; padding-top: 0; border-top: 1px solid rgba(255,255,255,0.12); }
.mobile-nav-link { display: block; width: 100%; }
.hero-headline { font-size: clamp(3.05rem, 6.7vw, 7.2rem); line-height: 0.92; max-width: 900px; }
.hero-subheadline { font-size: clamp(1rem, 1.45vw, 1.22rem); line-height: 1.82; max-width: 680px; }
.whats-new-section, .academic-programs, .uniform-collection, .footer { scroll-margin-top: 110px; }

/* New sections responsive styles */
.whats-new-section { position: relative; padding: 92px 0 86px; overflow: hidden; background: linear-gradient(180deg, #f7fbff 0%, #ffffff 48%, #f5f8fc 100%); }
.whats-new-section::before { content: ""; position: absolute; inset: 0; pointer-events: none; background: linear-gradient(135deg, rgba(8, 24, 60, 0.09) 0%, rgba(8, 24, 60, 0) 38%), radial-gradient(circle at 88% 8%, rgba(242, 193, 78, 0.16), transparent 24%); }
.whats-new-section .container { position: relative; z-index: 1; max-width: 1360px; margin: 0 auto; padding: 0 24px; }
.section-kicker { display: flex; align-items: center; justify-content: center; gap: 14px; color: #d69b14; font-size: 0.8rem; font-weight: 850; letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 14px; }
.section-kicker::before, .section-kicker::after { content: ""; width: 54px; height: 1px; background: rgba(214, 155, 20, 0.65); }
.section-heading { max-width: 820px; margin: 0 auto 48px; text-align: center; }
.section-heading h2 { color: #08183c; font-family: Georgia, 'Times New Roman', serif; font-size: clamp(2.6rem, 5vw, 4.9rem); line-height: 0.98; margin: 0 0 20px; }
.section-heading p { color: #23314f; font-size: clamp(1rem, 1.6vw, 1.22rem); line-height: 1.65; margin: 0 auto; max-width: 660px; }
.new-programs-grid { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 20px; align-items: stretch; }
.new-program-card { position: relative; min-width: 0; height: 100%; display: flex; flex-direction: column; align-items: center; text-align: center; padding: 24px 20px 28px; border-radius: 18px; border: 1px solid rgba(8, 24, 60, 0.08); background: #ffffff; box-shadow: 0 18px 44px rgba(8, 24, 60, 0.11); transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease; }
.new-program-card::after { content: ""; position: absolute; left: 50%; bottom: 0; width: 36px; height: 16px; border-radius: 18px 18px 0 0; background: #08183c; transform: translateX(-50%); border-top: 3px solid #f2c14e; }
.new-program-card:hover { transform: translateY(-8px); border-color: rgba(242, 193, 78, 0.5); box-shadow: 0 28px 62px rgba(8, 24, 60, 0.16); }
.new-program-image { width: clamp(96px, 9vw, 132px); aspect-ratio: 1; margin-bottom: 22px; border-radius: 999px; overflow: hidden; }
.new-program-image img { width: 100%; height: 100%; display: block; object-fit: cover; border-radius: 999px; }
.new-program-title { color: #08183c; font-family: Georgia, 'Times New Roman', serif; font-size: clamp(1.25rem, 1.65vw, 1.6rem); line-height: 1.08; margin: 0 0 18px; min-height: 3.25rem; display: flex; align-items: center; justify-content: center; }
.new-program-card .gold-rule { width: 72px; height: 1px; background: rgba(242, 193, 78, 0.72); margin: 0 auto 18px; position: relative; }
.new-program-card .gold-rule::after { content: ""; position: absolute; top: 50%; left: 50%; width: 8px; height: 8px; border-radius: 999px; background: #d69b14; transform: translate(-50%, -50%); }
.new-program-desc { color: #26324e; line-height: 1.62; font-size: 0.94rem; margin: 0; }

.personality-development { padding: 88px 0 94px; overflow: hidden; background: #ffffff; }
.personality-development .container { max-width: 1360px; margin: 0 auto; padding: 0 24px; display: grid; grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr); gap: 54px; align-items: center; }
.personality-copy { min-width: 0; }
.personality-copy .section-kicker { justify-content: flex-start; margin-bottom: 16px; }
.personality-copy .section-kicker::before { display: none; }
.personality-copy .section-kicker::after { width: 82px; }
.personality-copy h2 { color: #08183c; font-family: Georgia, 'Times New Roman', serif; font-size: clamp(2.7rem, 5vw, 5rem); line-height: 0.94; margin: 0 0 18px; }
.personality-subtitle { color: #d69b14; font-size: clamp(1.2rem, 2vw, 1.55rem); line-height: 1.32; font-weight: 750; margin: 0 0 20px; }
.personality-intro { color: #26324e; font-size: 1rem; line-height: 1.72; max-width: 560px; margin: 0 0 28px; }
.personality-features { display: grid; gap: 18px; }
.personality-feature { display: grid; grid-template-columns: 72px 1fr; gap: 18px; align-items: center; min-width: 0; }
.personality-icon { width: 72px; aspect-ratio: 1; border-radius: 999px; padding: 6px; border: 2px solid #f2c14e; background: #08183c; box-shadow: 0 12px 26px rgba(8, 24, 60, 0.16); overflow: hidden; }
.personality-icon img { width: 100%; height: 100%; display: block; object-fit: cover; border-radius: 999px; }
.personality-feature h3 { color: #08183c; font-size: 1.08rem; line-height: 1.25; margin: 0 0 6px; }
.personality-feature p { color: #4f5b70; font-size: 0.95rem; line-height: 1.55; margin: 0; }
.personality-photo { position: relative; min-width: 0; border-radius: 30px; overflow: hidden; min-height: 560px; box-shadow: 0 28px 72px rgba(8, 24, 60, 0.2); border: 1px solid rgba(8, 24, 60, 0.08); }
.personality-photo::before { content: ""; position: absolute; inset: 0; z-index: 1; background: linear-gradient(90deg, rgba(8, 24, 60, 0.22), rgba(8, 24, 60, 0)); pointer-events: none; }
.personality-photo::after { content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 9px; background: linear-gradient(180deg, #f2c14e, #08183c); z-index: 2; }
.personality-photo img { width: 100%; height: 100%; min-height: 560px; display: block; object-fit: cover; }

.uniform-collection { position: relative; overflow: hidden; padding: 92px 0 96px; background: linear-gradient(135deg, #fffdf8 0%, #ffffff 52%, #f7f0df 100%); }
.uniform-collection::before { content: ""; position: absolute; inset: 0; pointer-events: none; background: radial-gradient(circle at 10% 12%, rgba(242, 193, 78, 0.18), transparent 26%), radial-gradient(circle at 92% 86%, rgba(8, 24, 60, 0.08), transparent 27%); }
.uniform-collection .container { position: relative; z-index: 1; max-width: 1360px; margin: 0 auto; padding: 0 24px; }
.uniform-header { max-width: 880px; margin: 0 auto 48px; text-align: center; }
.uniform-header h2 { color: #08183c; font-family: Georgia, 'Times New Roman', serif; font-size: clamp(2.55rem, 4.8vw, 4.9rem); line-height: 0.98; margin: 0 0 20px; }
.uniform-subtext { color: #26324e; font-size: clamp(1rem, 1.45vw, 1.18rem); line-height: 1.72; max-width: 760px; margin: 0 auto; }
.uniform-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 24px; align-items: stretch; }
.uniform-card { min-width: 0; height: 100%; display: flex; flex-direction: column; overflow: hidden; border-radius: 20px; background: #ffffff; border: 1px solid rgba(8, 24, 60, 0.08); box-shadow: 0 18px 46px rgba(8, 24, 60, 0.11); transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease; }
.uniform-card:hover { transform: translateY(-6px); border-color: rgba(242, 193, 78, 0.42); box-shadow: 0 28px 64px rgba(8, 24, 60, 0.16); }
.uniform-card-image { width: 100%; aspect-ratio: 4 / 5; overflow: hidden; background: #f1f3f7; }
.uniform-card-image img { width: 100%; height: 100%; display: block; object-fit: cover; transition: transform 420ms ease; }
.uniform-card:hover .uniform-card-image img { transform: scale(1.035); }
.uniform-card-body { display: flex; flex: 1; flex-direction: column; align-items: center; justify-content: center; min-height: 118px; padding: 24px 18px 26px; text-align: center; }
.uniform-card h3 { color: #08183c; font-family: Georgia, 'Times New Roman', serif; font-size: clamp(1.18rem, 1.45vw, 1.45rem); line-height: 1.18; margin: 0 0 14px; }
.uniform-accent { width: 48px; height: 3px; border-radius: 999px; background: #d69b14; }

.why-choose-us { position: relative; overflow: hidden; padding: 78px 0 84px; background: linear-gradient(180deg, #ffffff 0%, #fffaf0 54%, #f6f8fc 100%); }
.why-choose-us::before { content: ""; position: absolute; left: 50%; top: 28px; width: min(720px, 82vw); aspect-ratio: 1 / 0.42; transform: translateX(-50%); background: radial-gradient(ellipse at center, rgba(242, 193, 78, 0.22), rgba(242, 193, 78, 0)); pointer-events: none; }
.why-choose-us .container { position: relative; z-index: 1; max-width: 1320px; margin: 0 auto; padding: 0 24px; }
.why-header { max-width: 850px; margin: 0 auto 42px; text-align: center; }
.why-tagline { color: #b98416; font-size: 0.78rem; font-weight: 900; letter-spacing: 0.22em; text-transform: uppercase; margin: 0 0 14px; }
.why-choose-us h2 { color: #08183c; font-family: Georgia, 'Times New Roman', serif; font-size: clamp(2.45rem, 4.8vw, 4.65rem); line-height: 0.98; margin: 0 0 18px; }
.why-subtitle { color: #344057; font-size: clamp(1rem, 1.45vw, 1.18rem); line-height: 1.68; max-width: 680px; margin: 0 auto; }
.why-choose-us .features-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 22px; align-items: stretch; }
.why-choose-us .feature-card { position: relative; min-width: 0; height: 100%; display: flex; flex-direction: column; align-items: center; overflow: hidden; padding: 34px 24px 32px; border-radius: 24px; text-align: center; background: rgba(255, 255, 255, 0.94); border: 1px solid rgba(8, 24, 60, 0.08); box-shadow: 0 18px 44px rgba(8, 24, 60, 0.1); transition: transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease; }
.why-choose-us .feature-card::before { content: ""; position: absolute; left: 24px; right: 24px; top: 0; height: 3px; border-radius: 0 0 999px 999px; background: linear-gradient(90deg, transparent, #d69b14, transparent); }
.why-choose-us .feature-card:hover { transform: translateY(-8px); border-color: rgba(242, 193, 78, 0.45); box-shadow: 0 30px 68px rgba(8, 24, 60, 0.16); }
.why-choose-us .feature-icon { width: 76px; aspect-ratio: 1; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 24px; border-radius: 999px; color: #d69b14; background: linear-gradient(145deg, rgba(8, 24, 60, 0.96), #102b65); border: 1px solid rgba(242, 193, 78, 0.46); box-shadow: 0 14px 30px rgba(8, 24, 60, 0.18); }
.why-choose-us .feature-icon svg { width: 34px; height: 34px; stroke-width: 1.8; }
.why-choose-us .feature-title { color: #08183c; font-size: 1.18rem; line-height: 1.22; font-weight: 850; margin: 0 0 13px; }
.why-card-accent { width: 44px; height: 2px; margin: 0 auto 16px; border-radius: 999px; background: #d69b14; }
.why-choose-us .feature-desc { color: #5e6878; font-size: 0.95rem; line-height: 1.65; margin: 0; }

.academic-programs { padding: 96px 0 104px; background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%); overflow: hidden; }
.academic-programs .container { max-width: 1360px; margin: 0 auto; padding: 0 24px; }
.academic-programs h2 { color: #08183c; font-family: Georgia, 'Times New Roman', serif; font-size: clamp(2.65rem, 5vw, 5rem); line-height: 0.98; margin: 0 0 18px; text-align: center; }
.academic-programs .section-intro { max-width: 720px; margin: 0 auto 58px; color: #465268; font-size: clamp(1rem, 1.45vw, 1.16rem); line-height: 1.76; text-align: center; }
.program-stories { display: grid; gap: 74px; }
.program-story { display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr); gap: clamp(30px, 5vw, 70px); align-items: center; }
.program-story.reverse { grid-template-columns: minmax(320px, 0.9fr) minmax(0, 1.1fr); }
.program-story.reverse .program-story-media { order: 2; }
.program-story.reverse .program-story-copy { order: 1; }
.program-story-media { position: relative; min-width: 0; min-height: 420px; overflow: hidden; border-radius: 28px; }
.program-story-media::after { content: ""; position: absolute; inset: 0; border: 1px solid rgba(255, 255, 255, 0.34); border-radius: inherit; pointer-events: none; }
.program-story-media img { width: 100%; height: 100%; min-height: 420px; display: block; object-fit: cover; transition: transform 480ms ease; }
.program-story:hover .program-story-media img { transform: scale(1.035); }
.program-story-copy { min-width: 0; max-width: 540px; }
.program-label { color: #b98416; font-size: 0.78rem; font-weight: 900; letter-spacing: 0.18em; text-transform: uppercase; margin: 0 0 14px; }
.program-story-copy h3 { color: #08183c; font-family: Georgia, 'Times New Roman', serif; font-size: clamp(2rem, 3.4vw, 3.45rem); line-height: 1; margin: 0 0 18px; }
.program-story-copy p { color: #465268; font-size: 1.03rem; line-height: 1.78; margin: 0 0 24px; }
.program-link { display: inline-flex; align-items: center; gap: 10px; color: #08183c; font-size: 0.92rem; font-weight: 850; letter-spacing: 0.08em; text-transform: uppercase; text-decoration: none; }
.program-link::after { content: ""; width: 42px; height: 2px; border-radius: 999px; background: #d69b14; transition: width 220ms ease; }
.program-link:hover::after { width: 62px; }

.student-life { padding: 94px 0 100px; background: #ffffff; overflow: hidden; }
.student-life .container { max-width: 1360px; margin: 0 auto; padding: 0 24px; }
.student-life-header { max-width: 820px; margin: 0 0 48px; }
.student-life h2 { color: #08183c; font-family: Georgia, 'Times New Roman', serif; font-size: clamp(2.55rem, 5vw, 4.8rem); line-height: 0.98; margin: 0 0 18px; }
.student-life-subtitle { color: #465268; font-size: clamp(1rem, 1.45vw, 1.18rem); line-height: 1.72; max-width: 700px; margin: 0; }
.student-life-editorial { display: grid; grid-template-columns: minmax(0, 1.35fr) minmax(300px, 0.75fr); gap: 26px; align-items: stretch; }
.student-life-feature, .student-life-stack figure { position: relative; min-width: 0; overflow: hidden; border-radius: 28px; background: #08183c; }
.student-life-feature { min-height: 610px; }
.student-life-stack { display: grid; gap: 26px; }
.student-life-stack figure { min-height: 292px; margin: 0; }
.student-life-feature img, .student-life-stack img { width: 100%; height: 100%; display: block; object-fit: cover; transition: transform 520ms ease; }
.student-life-feature:hover img, .student-life-stack figure:hover img { transform: scale(1.035); }
.student-life-feature::after { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(8, 24, 60, 0) 42%, rgba(8, 24, 60, 0.72)); pointer-events: none; }
.student-life-mantra { position: absolute; left: 34px; right: 34px; bottom: 30px; z-index: 1; color: #ffffff; font-family: Georgia, 'Times New Roman', serif; font-size: clamp(1.65rem, 3vw, 2.55rem); line-height: 1.1; }
.student-life-mantra span { color: #f2c14e; }

.news-events { position: relative; overflow: hidden; padding: 94px 0 102px; background: #ffffff; }
.news-events .container { max-width: 1320px; margin: 0 auto; padding: 0 24px; }
.news-header { max-width: 780px; margin: 0 auto 48px; text-align: center; }
.news-events h2 { color: #08183c; font-family: Georgia, 'Times New Roman', serif; font-size: clamp(2.45rem, 4.6vw, 4.5rem); line-height: 1; margin: 0 0 18px; }
.news-subtitle { color: #4b5568; font-size: clamp(1rem, 1.35vw, 1.14rem); line-height: 1.72; max-width: 660px; margin: 0 auto; }
.news-grid { display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(360px, 0.95fr); gap: 30px; align-items: start; }
.news-side-stack { display: grid; gap: 24px; }
.news-card { min-width: 0; display: grid; overflow: hidden; border-radius: 18px; background: #ffffff; border: 1px solid rgba(8, 24, 60, 0.1); box-shadow: 0 16px 38px rgba(8, 24, 60, 0.08); transition: transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease; }
.news-card:hover { transform: translateY(-5px); border-color: rgba(214, 155, 20, 0.34); box-shadow: 0 24px 52px rgba(8, 24, 60, 0.12); }
.news-card.featured { grid-template-rows: auto auto; }
.news-side-stack .news-card { grid-template-rows: auto 1fr; min-height: 100%; }
.news-image { position: relative; overflow: hidden; background: #eef2f7; }
.news-card.featured .news-image { aspect-ratio: 16 / 9; max-height: 312px; }
.news-side-stack .news-image { aspect-ratio: 16 / 9; max-height: 190px; }
.news-image img { width: 100%; height: 100%; display: block; object-fit: cover; object-position: center; transition: transform 520ms ease; }
.news-card:hover .news-image img { transform: scale(1.025); }
.news-body { min-width: 0; display: flex; flex: 1; flex-direction: column; padding: 28px; }
.news-card.featured .news-body { padding: 30px 32px 34px; }
.news-meta { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; margin-bottom: 16px; }
.news-date { color: #b98416; font-size: 0.78rem; font-weight: 900; letter-spacing: 0.12em; text-transform: uppercase; }
.news-category { display: inline-flex; align-items: center; min-height: 28px; padding: 5px 11px; border-radius: 999px; color: #08183c; background: rgba(242, 193, 78, 0.14); border: 1px solid rgba(214, 155, 20, 0.24); font-size: 0.72rem; font-weight: 850; letter-spacing: 0.07em; text-transform: uppercase; }
.news-title { color: #08183c; font-family: Georgia, 'Times New Roman', serif; font-size: clamp(1.45rem, 2.4vw, 2.35rem); line-height: 1.08; margin: 0 0 14px; }
.news-side-stack .news-title { font-size: clamp(1.18rem, 1.55vw, 1.52rem); }
.news-divider { width: 46px; height: 2px; border-radius: 999px; background: #d69b14; margin-bottom: 16px; }
.news-excerpt { color: #5b6577; font-size: 0.95rem; line-height: 1.68; margin: 0 0 22px; }
.news-side-stack .news-excerpt { font-size: 0.9rem; line-height: 1.58; }
.news-action { margin-top: auto; align-self: flex-start; color: #08183c; font-size: 0.78rem; font-weight: 900; letter-spacing: 0.1em; text-transform: uppercase; text-decoration: none; border-bottom: 2px solid #d69b14; padding-bottom: 5px; transition: color 220ms ease, transform 220ms ease, border-color 220ms ease; }
.news-action:hover { color: #b98416; border-color: #08183c; transform: translateX(3px); }

.scripture-cta { position: relative; overflow: hidden; padding: 104px 0 108px; background: #08183c; color: #ffffff; text-align: center; }
.scripture-cta::before { content: ""; position: absolute; inset: 0; background: radial-gradient(circle at 50% 0%, rgba(242, 193, 78, 0.2), transparent 36%), linear-gradient(135deg, rgba(255,255,255,0.06), transparent 42%); pointer-events: none; }
.scripture-cta .container { position: relative; z-index: 1; max-width: 980px; margin: 0 auto; padding: 0 24px; }
.scripture-line { width: 86px; height: 3px; border-radius: 999px; background: #f2c14e; margin: 0 auto 30px; }
.scripture-cta h2 { font-family: Georgia, 'Times New Roman', serif; font-size: clamp(2rem, 4.2vw, 4.1rem); line-height: 1.1; margin: 0 0 20px; color: #ffffff; }
.scripture-reference { color: #f2c14e; font-size: 0.82rem; font-weight: 900; letter-spacing: 0.22em; text-transform: uppercase; margin: 0 0 30px; }
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
  .hero-content { padding: 176px 0 86px; }
}

@media (max-width: 992px) {
  .site-nav { padding: 16px 20px; }
  .hero-header { width: 100%; align-items: center; flex-wrap: nowrap; }
  .hero-nav-links { display: none !important; }
  .mobile-toggle { display: inline-flex !important; }
  .mobile-menu { display: flex; max-height: 0; opacity: 0; overflow: hidden; pointer-events: none; transform: translateY(-8px); transition: max-height 240ms ease, opacity 180ms ease, transform 180ms ease, padding-top 180ms ease; }
  .mobile-menu.open { max-height: 380px; opacity: 1; pointer-events: auto; transform: translateY(0); padding-top: 14px; }
  .mobile-menu .mobile-nav-link { padding: 10px 0; }
  .mobile-menu button { width: 100%; margin-top: 4px; }
  .brand-block { width: auto; flex: 1 1 auto; flex-wrap: nowrap; align-items: center; }
  .brand-text { min-width: 0; width: auto; }
  .new-programs-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .personality-development .container { grid-template-columns: 1fr; gap: 44px; }
  .personality-photo { min-height: 440px; }
  .personality-photo img { min-height: 440px; }
  .uniform-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .why-choose-us .features-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .program-story,
  .program-story.reverse { grid-template-columns: 1fr; gap: 28px; }
  .program-story.reverse .program-story-media,
  .program-story.reverse .program-story-copy { order: initial; }
  .program-story-copy { max-width: 100%; }
  .student-life-editorial { grid-template-columns: 1fr; }
  .student-life-feature { min-height: 480px; }
  .student-life-stack { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .student-life-stack figure { min-height: 260px; }
  .news-grid { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); }
  .news-side-stack { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .news-side-stack { grid-column: 1 / -1; }
  .news-side-stack .news-card { min-height: 100%; }
  .news-side-stack .news-image { max-height: none; }
  .footer .container { grid-template-columns: 1fr; text-align: center; }
}

@media (max-width: 768px) {
  .hero-content { width: min(100% - 30px, 1320px); padding: 164px 0 64px; }
  .hero-header { flex-direction: row; align-items: center; }
  .brand-block { flex-direction: row; align-items: center; }
  .hero-headline { font-size: clamp(2.75rem, 13vw, 4.35rem); }
  .hero-subheadline { font-size: clamp(0.95rem, 2.5vw, 1.05rem); }
  .whats-new-section { padding: 68px 0; }
  .personality-development { padding: 66px 0; }
  .uniform-collection { padding: 72px 0; }
  .new-programs-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .section-heading { margin-bottom: 34px; }
  .personality-feature { grid-template-columns: 64px 1fr; gap: 14px; }
  .personality-icon { width: 64px; }
  .uniform-header { margin-bottom: 36px; }
  .why-choose-us { padding: 60px 0; }
  .academic-programs { padding: 60px 0; }
  .student-life { padding: 60px 0; }
  .news-events { padding: 60px 0; }
  .scripture-cta { padding: 76px 0 80px; }
  .news-header { margin-bottom: 34px; }
  .news-grid { grid-template-columns: 1fr; gap: 22px; }
  .news-side-stack { grid-template-columns: 1fr; }
  .news-card.featured .news-image,
  .news-side-stack .news-image { aspect-ratio: 16 / 9; max-height: none; }
  .hero { min-height: auto; height: auto; }
  .program-stories { gap: 54px; }
  .program-story-media,
  .program-story-media img { min-height: 340px; }
  .student-life-feature { min-height: 410px; }
  .student-life-stack { grid-template-columns: 1fr; }
}

@media (max-width: 576px) {
  .hero-content { width: min(100% - 30px, 1320px); padding: 164px 0 60px; }
  .site-nav { padding: 14px 18px; }
  .hero-header { gap: 16px; }
  .hero-headline { font-size: clamp(2.65rem, 13vw, 4rem); }
  .hero-subheadline { font-size: 0.95rem; }
  .whats-new-section .container { padding: 0 15px; }
  .personality-development .container { padding: 0 15px; }
  .uniform-collection .container { padding: 0 15px; }
  .uniform-grid { grid-template-columns: 1fr; gap: 20px; }
  .new-programs-grid { grid-template-columns: 1fr; }
  .new-program-card { padding: 24px 20px 30px; }
  .new-program-title { min-height: auto; }
  .personality-copy .section-kicker { justify-content: center; }
  .personality-copy .section-kicker::after { width: 54px; }
  .personality-copy h2, .personality-subtitle, .personality-intro { text-align: center; }
  .personality-feature { grid-template-columns: 58px 1fr; gap: 13px; }
  .personality-icon { width: 58px; }
  .personality-photo { min-height: 320px; border-radius: 22px; }
  .personality-photo img { min-height: 320px; }
  .uniform-header { text-align: center; }
  .uniform-subtext { font-size: 0.98rem; }
  .uniform-card-body { min-height: 104px; padding: 22px 16px 24px; }
  .why-choose-us .container { padding: 0 15px; }
  .why-header { margin-bottom: 30px; }
  .why-tagline { font-size: 0.7rem; letter-spacing: 0.16em; }
  .why-choose-us .features-grid { grid-template-columns: 1fr; gap: 18px; }
  .why-choose-us .feature-card { padding: 30px 22px 28px; }
  .why-choose-us .feature-icon { width: 68px; margin-bottom: 20px; }
  .academic-programs .container { padding: 0 15px; }
  .program-stories { gap: 44px; }
  .program-story-media,
  .program-story-media img { min-height: 285px; border-radius: 22px; }
  .program-label { font-size: 0.7rem; letter-spacing: 0.14em; }
  .student-life .container { padding: 0 15px; }
  .student-life-header { margin-bottom: 30px; }
  .student-life-feature { min-height: 340px; border-radius: 22px; }
  .student-life-stack figure { min-height: 210px; border-radius: 20px; }
  .student-life-mantra { left: 20px; right: 20px; bottom: 20px; }
  .news-events .container { padding: 0 15px; }
  .news-card { border-radius: 16px; }
  .news-card.featured .news-body,
  .news-body { padding: 24px 20px 26px; }
  .scripture-cta .container { padding: 0 15px; }
  .footer .container { padding: 0 15px; }
}
`;

const whatsNewPrograms = [
  {
    title: 'English Only Policy',
    description: 'Enhancing communication confidence through an immersive English-speaking environment that strengthens fluency, comprehension, and self-expression.',
    image: englishOnlyImage,
    alt: 'English Only Policy icon',
  },
  {
    title: 'Robotics and AI Training',
    description: 'Students explore innovation through hands-on robotics, coding fundamentals, automation, and artificial intelligence learning experiences.',
    image: roboticsAiImage,
    alt: 'Robotics and AI Training icon',
  },
  {
    title: 'Web Development',
    description: 'Introducing modern digital skills including website creation, interface design, coding logic, and interactive web technologies.',
    image: webDevelopmentImage,
    alt: 'Web Development icon',
  },
  {
    title: 'Multimedia and Digital Creations',
    description: 'Empowering creativity through graphic design, video editing, digital storytelling, photography, and multimedia production.',
    image: multimediaImage,
    alt: 'Multimedia and Digital Creations icon',
  },
  {
    title: 'Culinary and Baking Workshops',
    description: 'Developing practical life skills through culinary arts, baking workshops, food preparation, and kitchen creativity.',
    image: culinaryImage,
    alt: 'Culinary and Baking Workshops icon',
  },
];

const personalityFeatures = [
  {
    title: 'Speech Development',
    description: 'Strengthening articulation, confidence, and effective communication skills.',
    image: speechDevelopmentImage,
    alt: 'Speech Development icon',
  },
  {
    title: 'Proper Table Manners and Etiquette',
    description: 'Teaching professionalism, social grace, and respectful behavior in formal settings.',
    image: tableMannersImage,
    alt: 'Proper Table Manners and Etiquette icon',
  },
  {
    title: 'Proper Outfit',
    description: 'Encouraging neatness, confidence, and appropriate presentation.',
    image: properOutfitImage,
    alt: 'Proper Outfit icon',
  },
  {
    title: 'Public Speaking',
    description: 'Building leadership presence through confidence training, presentation skills, and audience communication.',
    image: publicSpeakingImage,
    alt: 'Public Speaking icon',
  },
];

const uniformSlides = [
  {
    title: 'Kindergarten Uniform',
    image: kindergartenUniformImage,
    alt: 'Kindergarten Philippians Academy uniform',
  },
  {
    title: 'Grade School Uniform',
    image: gradeSchoolUniformImage,
    alt: 'Grade School Philippians Academy uniform',
  },
  {
    title: 'Junior High School Uniform',
    image: juniorHighUniformImage,
    alt: 'Junior High Philippians Academy uniform',
  },
  {
    title: 'Senior High School Uniform',
    image: seniorHighUniformImage,
    alt: 'Senior High School Philippians Academy uniform',
  },
];

const homeHeroRevealProps = {
  initial: { opacity: 0, y: 34 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.72, ease: 'easeOut' },
};

function App() {
  const location = useLocation();

  useEffect(() => {
    window.requestAnimationFrame(() => {
      const sectionId = location.hash.slice(1);

      if (sectionId) {
        document.getElementById(sectionId)?.scrollIntoView({ block: 'start' });
        return;
      }

      window.scrollTo({ top: 0 });
    });
  }, [location.pathname, location.hash]);

  return (
    <main style={page}>
      <style>{responsiveStyles}</style>
      <SiteNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/campus-life" element={<CampusLife />} />
        <Route path="/school-events" element={<SchoolEvents />} />
      </Routes>
    </main>
  );
}

function HomePage() {
  return (
    <>
      <section id="home" className="hero" style={hero}>
        <div style={heroOverlay} />

        <div className="hero-content">
          <div style={heroBody} className="hero-body">
            <motion.div style={heroText} {...homeHeroRevealProps}>
              <h1 style={headline} className="hero-headline">
                Nurturing Hearts. <span style={headlineAccent}>Building Futures.</span> Glorifying God.
              </h1>

              <p style={subheadline} className="hero-subheadline">
                Philippians Academy is committed to providing Christ-centered education that develops academic excellence, strong character, leadership, and lifelong faith.
              </p>

              <div style={heroActions}>
                <Link style={discoverButton} to="/admissions">Admissions</Link>
                <a style={secondaryButton} href="#contact">Contact Us</a>
              </div>
            </motion.div>
          </div>
        </div>

      </section>

      {/* What's New Section */}
      <section id="about" className="whats-new-section">
        <div className="container">
          <div className="section-kicker">New at Philippians</div>
          <div className="section-heading">
            <h2>What's New in Philippians?</h2>
            <p>Innovative programs and modern learning opportunities designed for the leaders of tomorrow.</p>
          </div>

          <div className="new-programs-grid">
            {whatsNewPrograms.map((program) => (
              <article className="new-program-card" key={program.title}>
                <div className="new-program-image">
                  <img src={program.image} alt={program.alt} />
                </div>
                <h3 className="new-program-title">{program.title}</h3>
                <div className="gold-rule" />
                <p className="new-program-desc">{program.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Personality Development Section */}
      <section className="personality-development">
        <div className="container">
          <div className="personality-copy">
            <div className="section-kicker">We also have</div>
            <h2>Personality Development</h2>
            <p className="personality-subtitle">Building confidence, character, and leadership.</p>
            <p className="personality-intro">
              At Philippians Academy, education goes beyond academics. We nurture students to become confident, disciplined, and socially prepared individuals through our Personality Development Program.
            </p>

            <div className="personality-features">
              {personalityFeatures.map((feature) => (
                <article className="personality-feature" key={feature.title}>
                  <div className="personality-icon">
                    <img src={feature.image} alt={feature.alt} />
                  </div>
                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="personality-photo">
            <img src={personalityDevelopmentImage} alt="Personality Development program" />
          </div>
        </div>
      </section>

      {/* Uniform Collection Section */}
      <section id="uniforms" className="uniform-collection">
        <div className="container">
          <div className="uniform-header">
            <h2>The New Philippians Uniform</h2>
            <p className="uniform-subtext">
              Designed with sophistication, comfort, confidence, and excellence in mind — reflecting the value and identity of every Philippians student.
            </p>
          </div>

          <div className="uniform-grid">
            {uniformSlides.map((slide) => (
              <article className="uniform-card" key={slide.title}>
                <div className="uniform-card-image">
                  <img src={slide.image} alt={slide.alt} />
                </div>
                <div className="uniform-card-body">
                  <h3>{slide.title}</h3>
                  <div className="uniform-accent" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="scripture-cta">
        <div className="container">
          <div className="scripture-line" />
          <h2>&ldquo;I can do all things through Christ who strengthens me.&rdquo;</h2>
          <div className="scripture-reference">PHILIPPIANS 4:13</div>
        </div>
      </section>

      {/* Academic Programs Section */}
      <section id="academics" className="academic-programs">
        <div className="container">
          <h2>Academic Programs</h2>
          <p className="section-intro">
            Purposeful learning pathways designed to nurture faith, character, academic excellence, and leadership at every stage.
          </p>
          <div className="program-stories">
            <article className="program-story">
              <div className="program-story-media">
                <img src={kindergartenImage} alt="Kindergarten students learning together" />
              </div>
              <div className="program-story-copy">
                <p className="program-label">Early Learning</p>
                <h3>Kindergarten</h3>
                <p>Building joyful foundations through Christ-centered early learning and creativity.</p>
                <a className="program-link" href="/admissions">Learn More</a>
              </div>
            </article>

            <article className="program-story reverse">
              <div className="program-story-media">
                <img src={gradeSchoolImage} alt="Grade School students in an academy setting" />
              </div>
              <div className="program-story-copy">
                <p className="program-label">Foundation Years</p>
                <h3>Grade School</h3>
                <p>Developing discipline, confidence, academic excellence, and lifelong curiosity.</p>
                <a className="program-link" href="/admissions">Learn More</a>
              </div>
            </article>

            <article className="program-story">
              <div className="program-story-media">
                <img src={juniorHighImage} alt="Junior High School students studying" />
              </div>
              <div className="program-story-copy">
                <p className="program-label">Leadership Formation</p>
                <h3>Junior High School</h3>
                <p>Empowering students through leadership, collaboration, and deeper academic growth.</p>
                <a className="program-link" href="/admissions">Learn More</a>
              </div>
            </article>

            <article className="program-story reverse">
              <div className="program-story-media">
                <img src={seniorHighImage} alt="Senior High School students preparing for the future" />
              </div>
              <div className="program-story-copy">
                <p className="program-label">Future Readiness</p>
                <h3>Senior High School</h3>
                <p>Preparing future-ready learners for college, careers, and purposeful leadership.</p>
                <a className="program-link" href="/admissions">Learn More</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <div className="why-header">
            <p className="why-tagline">FAITH &bull; EXCELLENCE &bull; CHARACTER &bull; SERVICE</p>
            <h2>Why Choose Philippians Academy?</h2>
            <p className="why-subtitle">
              Nurturing hearts, building futures, and glorifying God through Christ-centered education.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Cross aria-hidden="true" />
              </div>
              <h3 className="feature-title">Christ-Centered Education</h3>
              <div className="why-card-accent" />
              <p className="feature-desc">Faith-based learning integrated into every aspect of our curriculum to guide students with wisdom and purpose.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <BookOpenCheck aria-hidden="true" />
              </div>
              <h3 className="feature-title">Academic Excellence</h3>
              <div className="why-card-accent" />
              <p className="feature-desc">Rigorous and innovative programs that inspire students to achieve their highest potential.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <HandHeart aria-hidden="true" />
              </div>
              <h3 className="feature-title">Character &amp; Leadership</h3>
              <div className="why-card-accent" />
              <p className="feature-desc">Developing integrity, compassion, leadership, and service through meaningful experiences.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <ShieldCheck aria-hidden="true" />
              </div>
              <h3 className="feature-title">Safe &amp; Supportive Campus</h3>
              <div className="why-card-accent" />
              <p className="feature-desc">A nurturing environment where students grow with confidence, security, and care.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
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
  width: '100%',
  overflow: 'hidden',
  backgroundImage: `url(${heroBanner})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center top',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  color: '#ffffff',
};

const heroOverlay = {
  position: 'absolute',
  inset: 0,
  background:
    'linear-gradient(90deg, rgba(8, 24, 60, 0.96) 0%, rgba(8, 24, 60, 0.78) 38%, rgba(8, 24, 60, 0.36) 68%, rgba(8, 24, 60, 0.16) 100%), radial-gradient(circle at 78% 24%, rgba(242, 193, 78, 0.24), transparent 28%)',
  pointerEvents: 'none',
};

const heroBody = {
  display: 'flex',
  width: '100%',
  justifyContent: 'flex-start',
  alignItems: 'flex-end',
};

const heroText = {
  maxWidth: '900px',
  marginTop: '0',
};

const headline = {
  fontFamily: "Georgia, 'Times New Roman', serif",
  fontSize: 'clamp(3.05rem, 6.7vw, 7.2rem)',
  lineHeight: '0.92',
  fontWeight: 700,
  letterSpacing: 0,
  margin: 0,
  color: 'white',
};

const headlineAccent = {
  color: 'rgb(242, 193, 78)',
};

const subheadline = {
  marginTop: '28px',
  marginBottom: '34px',
  fontSize: 'clamp(1rem, 1.45vw, 1.22rem)',
  lineHeight: 1.82,
  maxWidth: '680px',
  color: 'rgba(255,255,255,0.86)',
};

const heroActions = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '14px',
};

const discoverButton = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '52px',
  background: 'linear-gradient(135deg, rgb(242, 193, 78), #d99a21)',
  color: 'rgb(8, 24, 60)',
  border: '1px solid rgba(242, 193, 78, 0.82)',
  padding: '14px 26px',
  borderRadius: '999px',
  fontSize: '0.82rem',
  fontWeight: 900,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  textDecoration: 'none',
  cursor: 'pointer',
  boxShadow: '0 18px 38px rgba(0,0,0,0.24)',
};

const secondaryButton = {
  ...discoverButton,
  background: 'rgba(255,255,255,0.08)',
  color: '#ffffff',
  backdropFilter: 'blur(14px)',
  WebkitBackdropFilter: 'blur(14px)',
  boxShadow: 'none',
};

export default App;
