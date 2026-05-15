import { useEffect, useState } from 'react';
import logoSrc from './assets/Philippians Logo.jpg';
import heroBanner from './assets/hero banner.png';
import kindergartenImage from './assets/Kindergarten.png';
import gradeSchoolImage from './assets/Grade School.png';
import juniorHighImage from './assets/Junior High School.png';
import seniorHighImage from './assets/Senior High School.png';
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
.hero { min-height: 680px; max-height: 720px; }
.hero-content { max-width: 1500px; margin: 0 auto; padding: clamp(132px, 14vw, 176px) clamp(24px, 3vw, 48px) clamp(72px, 8vw, 112px); }
.site-nav { padding: clamp(18px, 2vw, 28px) clamp(24px, 3vw, 48px); }
.hero-header { gap: 24px; align-items: center; }
.brand-block { gap: 16px; min-width: 0; }
.hero-nav-links { display: flex; gap: 28px; flex-wrap: nowrap; justify-content: flex-end; align-items: center; }
.hero-nav-links a { white-space: nowrap; }
.mobile-toggle { display: none; }
.mobile-menu { display: none; width: 100%; flex-direction: column; gap: 12px; margin-top: 16px; padding-top: 0; border-top: 1px solid rgba(255,255,255,0.12); }
.mobile-nav-link { display: block; width: 100%; }
.hero-headline { font-size: clamp(3.5rem, 5vw, 5.5rem); line-height: 1.02; max-width: 11ch; }
.hero-subheadline { font-size: clamp(1rem, 1.5vw, 1.15rem); line-height: 1.9; max-width: 620px; }
.whats-new-section, .academic-programs, .uniform-collection, .admissions-cta, .footer { scroll-margin-top: 110px; }

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

.uniform-collection { position: relative; overflow: hidden; padding: 94px 0 98px; background: linear-gradient(135deg, #fffdf8 0%, #ffffff 46%, #f6f0df 100%); }
.uniform-collection::before { content: ""; position: absolute; inset: 0; pointer-events: none; background: radial-gradient(circle at 12% 12%, rgba(242, 193, 78, 0.22), transparent 27%), radial-gradient(circle at 88% 76%, rgba(8, 24, 60, 0.1), transparent 28%); }
.uniform-collection::after { content: ""; position: absolute; inset: 20px; border: 1px solid rgba(214, 155, 20, 0.14); border-radius: 34px; pointer-events: none; }
.uniform-collection .container { position: relative; z-index: 1; max-width: 1360px; margin: 0 auto; padding: 0 24px; }
.uniform-header { max-width: 920px; margin: 0 auto 52px; text-align: center; }
.uniform-header h2 { color: #08183c; font-family: Georgia, 'Times New Roman', serif; font-size: clamp(2.75rem, 5.4vw, 5.35rem); line-height: 0.96; margin: 0 0 20px; }
.uniform-subtext { color: #26324e; font-size: clamp(1rem, 1.65vw, 1.22rem); line-height: 1.72; max-width: 780px; margin: 0 auto 18px; }
.uniform-tagline { color: #b98416; font-size: 0.82rem; font-weight: 850; letter-spacing: 0.2em; text-transform: uppercase; margin: 0; }
.uniform-layout { display: grid; grid-template-columns: minmax(0, 1.55fr) minmax(340px, 0.95fr); gap: 42px; align-items: center; }
.uniform-showcase { min-width: 0; border-radius: 30px; padding: 9px; background: linear-gradient(135deg, rgba(242, 193, 78, 0.86), rgba(8, 24, 60, 0.92)); box-shadow: 0 30px 76px rgba(8, 24, 60, 0.18); animation: uniformFloat 6s ease-in-out infinite; }
.uniform-carousel { position: relative; overflow: hidden; border-radius: 24px; background: #08183c; }
.uniform-carousel-track { display: flex; transform: translateX(calc(var(--active-slide) * -100%)); transition: transform 780ms cubic-bezier(0.22, 1, 0.36, 1); }
.uniform-slide { flex: 0 0 100%; position: relative; min-height: 610px; overflow: hidden; }
.uniform-slide img { width: 100%; height: 100%; min-height: 610px; display: block; object-fit: cover; transition: transform 700ms ease, filter 700ms ease; }
.uniform-showcase:hover .uniform-slide img { transform: scale(1.035); filter: saturate(1.04) contrast(1.02); }
.uniform-slide::after { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(8, 24, 60, 0) 42%, rgba(8, 24, 60, 0.7)); pointer-events: none; }
.uniform-slide-caption { position: absolute; left: 28px; right: 28px; bottom: 26px; z-index: 1; display: flex; align-items: flex-end; justify-content: space-between; gap: 18px; color: #ffffff; }
.uniform-slide-caption h3 { font-family: Georgia, 'Times New Roman', serif; font-size: clamp(1.5rem, 2.5vw, 2.35rem); line-height: 1; margin: 0; }
.uniform-slide-caption span { color: #f2c14e; font-size: 0.78rem; font-weight: 850; letter-spacing: 0.16em; text-transform: uppercase; white-space: nowrap; }
.uniform-dots { position: absolute; z-index: 2; top: 24px; right: 24px; display: flex; gap: 9px; }
.uniform-dot { width: 34px; height: 4px; border: 0; border-radius: 999px; background: rgba(255, 255, 255, 0.44); cursor: pointer; transition: width 220ms ease, background 220ms ease; }
.uniform-dot.active { width: 48px; background: #f2c14e; }
.uniform-info { display: grid; gap: 18px; min-width: 0; }
.uniform-card { position: relative; overflow: hidden; padding: 25px 24px 24px; border-radius: 18px; background: rgba(255, 255, 255, 0.86); border: 1px solid rgba(8, 24, 60, 0.08); box-shadow: 0 20px 48px rgba(8, 24, 60, 0.11); backdrop-filter: blur(14px); transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease; }
.uniform-card::before { content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 5px; background: linear-gradient(180deg, #f2c14e, #08183c); }
.uniform-card:hover { transform: translateY(-5px); border-color: rgba(242, 193, 78, 0.38); box-shadow: 0 28px 62px rgba(8, 24, 60, 0.15); }
.uniform-card h3 { color: #08183c; font-family: Georgia, 'Times New Roman', serif; font-size: 1.28rem; line-height: 1.18; margin: 0 0 15px; }
.uniform-card ul { list-style: none; display: grid; gap: 9px; padding: 0; margin: 0; }
.uniform-card li { color: #465268; font-size: 0.95rem; line-height: 1.35; }
.uniform-card li::before { content: ""; display: inline-block; width: 6px; height: 6px; margin-right: 10px; border-radius: 999px; background: #d69b14; vertical-align: 0.12em; }
.uniform-features { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; margin-top: 42px; }
.uniform-badge { display: inline-flex; align-items: center; gap: 9px; padding: 11px 16px; border-radius: 999px; color: #08183c; background: rgba(255, 255, 255, 0.82); border: 1px solid rgba(214, 155, 20, 0.22); box-shadow: 0 12px 28px rgba(8, 24, 60, 0.08); font-size: 0.9rem; font-weight: 750; }
.uniform-badge span { color: #d69b14; }
@keyframes uniformFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.why-choose-us { padding: 80px 0; background: #f8f9fa; }
.why-choose-us .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
.why-choose-us h2 { text-align: center; font-size: clamp(2rem, 3vw, 2.5rem); color: #08183c; margin-bottom: 60px; }
.why-choose-us .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; }
.why-choose-us .feature-card { background: #ffffff; padding: 40px 30px; border-radius: 20px; text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.1); transition: transform 0.3s ease; }
.why-choose-us .feature-card:hover { transform: translateY(-5px); }
.why-choose-us .feature-icon { font-size: 3rem; margin-bottom: 20px; }
.why-choose-us .feature-title { font-size: 1.25rem; font-weight: 700; color: #08183c; margin-bottom: 15px; }
.why-choose-us .feature-desc { color: #6b7280; line-height: 1.6; }

.academic-programs { padding: 90px 0; background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%); }
.academic-programs .container { max-width: 1320px; margin: 0 auto; padding: 0 24px; }
.academic-programs h2 { text-align: center; font-size: clamp(2.25rem, 3.4vw, 3rem); color: #08183c; margin-bottom: 18px; }
.academic-programs .section-intro { max-width: 760px; margin: 0 auto 52px; color: #6b7280; font-size: 1.05rem; line-height: 1.75; text-align: center; }
.academic-programs .programs-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 26px; align-items: stretch; }
.academic-programs .program-card { min-width: 0; height: 100%; display: flex; flex-direction: column; overflow: hidden; background: #ffffff; border: 1px solid rgba(8, 24, 60, 0.08); border-radius: 18px; box-shadow: 0 18px 42px rgba(8, 24, 60, 0.1); transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease; }
.academic-programs .program-card:hover { transform: translateY(-8px); border-color: rgba(242, 193, 78, 0.42); box-shadow: 0 26px 60px rgba(8, 24, 60, 0.16); }
.academic-programs .program-image { aspect-ratio: 4 / 3; width: 100%; overflow: hidden; background: #e5e7eb; border-radius: 18px 18px 0 0; }
.academic-programs .program-image img { width: 100%; height: 100%; object-fit: cover; display: block; border-radius: 18px 18px 0 0; transition: transform 320ms ease; }
.academic-programs .program-card:hover .program-image img { transform: scale(1.045); }
.academic-programs .program-content { display: flex; flex: 1; flex-direction: column; padding: 30px 24px 24px; }
.academic-programs .program-title { font-size: 1.35rem; font-weight: 850; color: #08183c; margin-bottom: 14px; line-height: 1.2; }
.academic-programs .program-desc { color: #5f6878; line-height: 1.72; margin-bottom: 26px; }
.academic-programs .program-action { margin-top: auto; align-self: flex-start; background: #f2c14e; color: #08183c; padding: 13px 22px; border-radius: 999px; font-weight: 800; border: none; cursor: pointer; box-shadow: 0 12px 24px rgba(242, 193, 78, 0.24); }
.academic-programs .program-action:hover { background: rgba(242, 193, 78, 0.92); }

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
  .hero-content { padding: clamp(132px, 14vw, 168px) clamp(24px, 3vw, 42px) clamp(64px, 8vw, 96px); }
  .hero-headline { max-width: 12ch; }
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
  .uniform-layout { grid-template-columns: 1fr; gap: 34px; }
  .uniform-info { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .uniform-card { padding: 23px 20px 22px; }
  .why-choose-us .features-grid { grid-template-columns: 1fr; }
  .academic-programs .programs-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .student-life .gallery-grid { grid-template-columns: repeat(2, 1fr); }
  .testimonials .testimonials-grid { grid-template-columns: 1fr; }
  .news-events .news-grid { grid-template-columns: 1fr; }
  .footer .container { grid-template-columns: 1fr; text-align: center; }
}

@media (max-width: 768px) {
  .hero-content { padding: 172px 20px 56px; }
  .hero-header { flex-direction: row; align-items: center; }
  .brand-block { flex-direction: row; align-items: center; }
  .hero-headline { font-size: clamp(2.75rem, 8vw, 4.2rem); }
  .hero-subheadline { font-size: clamp(0.95rem, 2.5vw, 1.05rem); }
  .whats-new-section { padding: 68px 0; }
  .personality-development { padding: 66px 0; }
  .uniform-collection { padding: 72px 0; }
  .uniform-collection::after { inset: 12px; border-radius: 24px; }
  .new-programs-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .section-heading { margin-bottom: 34px; }
  .personality-feature { grid-template-columns: 64px 1fr; gap: 14px; }
  .personality-icon { width: 64px; }
  .uniform-header { margin-bottom: 36px; }
  .uniform-layout { gap: 30px; }
  .uniform-showcase { padding: 7px; border-radius: 24px; animation: none; }
  .uniform-carousel { overflow-x: auto; scroll-snap-type: x mandatory; border-radius: 18px; }
  .uniform-carousel-track { transform: none !important; }
  .uniform-slide { min-height: 440px; scroll-snap-align: start; }
  .uniform-slide img { min-height: 440px; }
  .uniform-info { grid-template-columns: 1fr; }
  .why-choose-us { padding: 60px 0; }
  .academic-programs { padding: 60px 0; }
  .student-life { padding: 60px 0; }
  .admissions-cta { padding: 60px 0; }
  .testimonials { padding: 60px 0; }
  .news-events { padding: 60px 0; }
  .student-life .gallery-grid { grid-template-columns: 1fr; }
  .hero { min-height: auto; height: auto; }
  .academic-programs .programs-grid { grid-template-columns: 1fr; }
}

@media (max-width: 576px) {
  .hero-content { padding: 188px 18px 48px; }
  .site-nav { padding: 14px 18px; }
  .hero-header { gap: 16px; }
  .hero-headline { font-size: clamp(2.4rem, 9vw, 3.5rem); }
  .hero-subheadline { font-size: 0.95rem; }
  .brand-address { display: none; }
  .whats-new-section .container { padding: 0 15px; }
  .personality-development .container { padding: 0 15px; }
  .uniform-collection .container { padding: 0 15px; }
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
  .uniform-tagline { font-size: 0.72rem; letter-spacing: 0.14em; }
  .uniform-slide { min-height: 350px; }
  .uniform-slide img { min-height: 350px; }
  .uniform-slide-caption { left: 18px; right: 18px; bottom: 18px; display: block; }
  .uniform-slide-caption span { display: block; margin-top: 9px; white-space: normal; }
  .uniform-dots { top: 16px; right: 16px; }
  .uniform-dot { width: 24px; }
  .uniform-dot.active { width: 34px; }
  .uniform-features { gap: 9px; margin-top: 30px; }
  .uniform-badge { padding: 10px 13px; font-size: 0.84rem; }
  .why-choose-us .container { padding: 0 15px; }
  .academic-programs .container { padding: 0 15px; }
  .student-life .container { padding: 0 15px; }
  .admissions-cta .container { padding: 0 15px; }
  .testimonials .container { padding: 0 15px; }
  .news-events .container { padding: 0 15px; }
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
    title: 'High School Couple Uniform',
    label: 'Signature Academic Style',
    image: seniorHighImage,
    alt: 'High school students wearing Philippians Academy uniforms',
  },
  {
    title: 'Preschool Boy',
    label: 'Comfort for Young Learners',
    image: kindergartenImage,
    alt: 'Preschool students wearing Philippians Academy uniforms',
  },
  {
    title: 'Preschool Girl',
    label: 'Classic Child-Friendly Design',
    image: gradeSchoolImage,
    alt: 'Young students wearing Philippians Academy uniforms',
  },
  {
    title: 'Senior High Female Blazer',
    label: 'Premium Formal Identity',
    image: personalityDevelopmentImage,
    alt: 'Philippians Academy student in a premium blazer-inspired uniform',
  },
];

const uniformCards = [
  {
    title: '👦👧 Preschool Collection',
    details: [
      'Comfortable Premium Fabric',
      'Soft & Child-Friendly Materials',
      'Elegant Modern Design',
      'Easy Movement for Kids',
    ],
  },
  {
    title: '🎓 Academic Collection',
    details: [
      'Clean European-inspired Style',
      'Smart Casual Professional Look',
      'Comfortable Daily Wear',
      'Confidence-building Appearance',
    ],
  },
  {
    title: '✨ Premium Senior High Uniform',
    details: [
      'Executive-inspired Blazer Design',
      'Modern Professional Aesthetic',
      'Elegant Formal Identity',
      'International School Standard',
    ],
  },
];

const uniformBadges = [
  ['🛡', 'Elegant'],
  ['👑', 'Premium Quality'],
  ['✨', 'Faith-Based'],
  ['🧵', 'Comfortable Fabric'],
  ['🎓', 'Academic Excellence'],
];

function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeUniformSlide, setActiveUniformSlide] = useState(0);

  useEffect(() => {
    const slideTimer = window.setInterval(() => {
      setActiveUniformSlide((current) => (current + 1) % uniformSlides.length);
    }, 4200);

    return () => window.clearInterval(slideTimer);
  }, []);

  return (
    <main style={page}>
      <style>{responsiveStyles}</style>
      <section id="home" style={hero}>
        <div style={heroOverlay} />

        <div style={siteNav} className="site-nav">
          <header style={heroHeader} className="hero-header">
            <div style={brandBlock} className="brand-block">
              <img src={logoSrc} alt="Philippians Academy logo" style={brandLogo} />
              <div style={brandText} className="brand-text">
                <div style={brandName}>Philippians Academy</div>
                <div style={brandAddress} className="brand-address">
                  1316 Haise Street, Moonwalk Village, Parañaque City
                </div>
              </div>
            </div>

            <div style={navArea}>
              <div style={topNav} className="hero-nav-links">
                <a href="#home" style={navLink}>Home</a>
                <a href="#about" style={navLink}>About Us</a>
                <a href="#admissions" style={navLink}>Admissions</a>
                <a href="#contact" style={navLink}>Contact Us</a>
                <button style={navCtaButton} className="hero-login-button">Login</button>
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
            <a href="#home" style={navLink} className="mobile-nav-link" onClick={() => setMobileNavOpen(false)}>Home</a>
            <a href="#about" style={navLink} className="mobile-nav-link" onClick={() => setMobileNavOpen(false)}>About Us</a>
            <a href="#admissions" style={navLink} className="mobile-nav-link" onClick={() => setMobileNavOpen(false)}>Admissions</a>
            <a href="#contact" style={navLink} className="mobile-nav-link" onClick={() => setMobileNavOpen(false)}>Contact Us</a>
            <button style={navCtaButton} onClick={() => setMobileNavOpen(false)}>Login</button>
          </div>
        </div>

        <div style={heroContent} className="hero-content">
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

              <button style={discoverButton}>Discover More</button>
            </div>
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
            <div className="section-kicker">New Collection</div>
            <h2>The New Philippians Uniform</h2>
            <p className="uniform-subtext">
              Designed with sophistication, comfort, confidence, and excellence in mind — reflecting the values and identity of every Philippians student.
            </p>
            <p className="uniform-tagline">Faith • Excellence • Character • Service</p>
          </div>

          <div className="uniform-layout">
            <div className="uniform-showcase">
              <div className="uniform-carousel">
                <div className="uniform-carousel-track" style={{ '--active-slide': activeUniformSlide }}>
                  {uniformSlides.map((slide) => (
                    <article className="uniform-slide" key={slide.title}>
                      <img src={slide.image} alt={slide.alt} />
                      <div className="uniform-slide-caption">
                        <h3>{slide.title}</h3>
                        <span>{slide.label}</span>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="uniform-dots" aria-label="Uniform collection slides">
                  {uniformSlides.map((slide, index) => (
                    <button
                      type="button"
                      className={`uniform-dot${activeUniformSlide === index ? ' active' : ''}`}
                      key={slide.title}
                      aria-label={`Show ${slide.title}`}
                      onClick={() => setActiveUniformSlide(index)}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="uniform-info">
              {uniformCards.map((card) => (
                <article className="uniform-card" key={card.title}>
                  <h3>{card.title}</h3>
                  <ul>
                    {card.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <div className="uniform-features">
            {uniformBadges.map(([icon, label]) => (
              <div className="uniform-badge" key={label}>
                <span aria-hidden="true">{icon}</span>
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Programs Section */}
      <section id="academics" className="academic-programs">
        <div className="container">
          <h2>Academic Programs</h2>
          <p className="section-intro">
            Purposeful learning pathways designed to nurture faith, character, academic excellence, and leadership at every stage.
          </p>
          <div className="programs-grid">
            <article className="program-card">
              <div className="program-image">
                <img src={kindergartenImage} alt="Kindergarten students learning together" />
              </div>
              <div className="program-content">
                <h3 className="program-title">Kindergarten</h3>
                <p className="program-desc">Our Kindergarten program nurtures young learners through interactive play, creativity, foundational academics, and Christ-centered values in a safe and joyful environment.</p>
                <button className="program-action">Learn More</button>
              </div>
            </article>

            <article className="program-card">
              <div className="program-image">
                <img src={gradeSchoolImage} alt="Grade School students in an academy setting" />
              </div>
              <div className="program-content">
                <h3 className="program-title">Grade School</h3>
                <p className="program-desc">The Grade School department builds strong academic foundations while developing discipline, curiosity, confidence, leadership, and lifelong learning habits.</p>
                <button className="program-action">Learn More</button>
              </div>
            </article>

            <article className="program-card">
              <div className="program-image">
                <img src={juniorHighImage} alt="Junior High School students studying" />
              </div>
              <div className="program-content">
                <h3 className="program-title">Junior High School</h3>
                <p className="program-desc">Our Junior High School program prepares students for advanced learning through academic excellence, character formation, collaboration, and leadership development.</p>
                <button className="program-action">Learn More</button>
              </div>
            </article>

            <article className="program-card">
              <div className="program-image">
                <img src={seniorHighImage} alt="Senior High School students preparing for the future" />
              </div>
              <div className="program-content">
                <h3 className="program-title">Senior High School</h3>
                <p className="program-desc">The Senior High School program equips students for college, careers, and future success through specialized tracks, critical thinking, and values-driven education.</p>
                <button className="program-action">Learn More</button>
              </div>
            </article>
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
  minHeight: '680px',
  maxHeight: '720px',
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
  padding: 'clamp(132px, 14vw, 176px) clamp(24px, 3vw, 48px) clamp(72px, 8vw, 112px)',
  boxSizing: 'border-box',
};

const siteNav = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 50,
  padding: 'clamp(18px, 2vw, 28px) clamp(24px, 3vw, 48px)',
  background: 'rgba(8, 24, 60, 0.72)',
  borderBottom: '1px solid rgba(255,255,255,0.12)',
  boxShadow: '0 16px 40px rgba(0,0,0,0.16)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
};

const heroHeader = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '24px',
  flexWrap: 'wrap',
  width: '100%',
  maxWidth: '1500px',
  margin: '0 auto',
};

const brandBlock = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  minWidth: '0',
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
  flexShrink: 0,
};

const topNav = {
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
  maxWidth: '1500px',
  flexDirection: 'column',
  gap: '14px',
  marginTop: '12px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingTop: '14px',
  borderTop: '1px solid rgba(255,255,255,0.12)',
};

const navLink = {
  fontSize: '14px',
  fontWeight: 600,
  color: 'rgba(255,255,255,0.92)',
  textDecoration: 'none',
};

const navCtaButton = {
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
  marginBottom: '28px',
  fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
  lineHeight: 1.9,
  maxWidth: '520px',
  color: 'rgba(255,255,255,0.88)',
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

export default App;
