import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import heroBanner from '../assets/hero banner.png';
import friendshipDayImage from '../assets/Friendship Day 2026/Friendship Day 2026.png';
import friendshipDayGallery1 from '../assets/Friendship Day 2026/fd 2.png';
import friendshipDayGallery2 from '../assets/Friendship Day 2026/fd3.png';
import friendshipDayGallery3 from '../assets/Friendship Day 2026/fd4.png';
import promotionalTalkImage from '../assets/Promotional Talk for Grade 6/4344.png';
import promotionalTalkGallery0 from '../assets/Promotional Talk for Grade 6/111.png';
import promotionalTalkGallery1 from '../assets/Promotional Talk for Grade 6/222.png';
import promotionalTalkGallery2 from '../assets/Promotional Talk for Grade 6/333.png';
import promotionalTalkGallery3 from '../assets/Promotional Talk for Grade 6/555.png';
import enrollmentCampaignImage from '../assets/ENROLLMENT  CAMPAIGN.jpg';
import recognitionCeremonyImage from '../assets/RECOGNITION CEREMONY/feature photo.jpg';
import recognitionCeremonyGallery1 from '../assets/RECOGNITION CEREMONY/featured photo.jpg';
import recognitionCeremonyGallery2 from '../assets/RECOGNITION CEREMONY/rc 10.jpg';
import recognitionCeremonyGallery3 from '../assets/RECOGNITION CEREMONY/rc1.jpg';
import recognitionCeremonyGallery4 from '../assets/RECOGNITION CEREMONY/rc2.jpg';
import recognitionCeremonyGallery5 from '../assets/RECOGNITION CEREMONY/rc3.jpg';
import recognitionCeremonyGallery6 from '../assets/RECOGNITION CEREMONY/rc5.jpg';
import recognitionCeremonyGallery7 from '../assets/RECOGNITION CEREMONY/rc6.jpg';
import recognitionCeremonyGallery8 from '../assets/RECOGNITION CEREMONY/rc8.jpg';
import recognitionCeremonyGallery9 from '../assets/RECOGNITION CEREMONY/rc9.jpg';
import recognitionCeremonyGallery10 from '../assets/RECOGNITION CEREMONY/Recognition Ceremonies 31.jpg';
import recognitionCeremonyGallery11 from '../assets/RECOGNITION CEREMONY/Recognition Ceremonies 33.jpg';

const schoolEventsStyles = `
.news-events-page {
  --navy: #08183c;
  --navy-deep: #061230;
  --navy-soft: #102a63;
  --gold: #f2c14e;
  --gold-deep: #b98416;
  --ink: #18243d;
  --muted: #5a667a;
  --date-muted: #7a8194;
  --heading-font: Georgia, 'Times New Roman', serif;
  --body-font: Arial, sans-serif;
  --ui-font: Arial, sans-serif;
  min-height: 100vh;
  overflow-x: hidden;
  background:
    linear-gradient(180deg, #fffaf0 0%, #ffffff 38%, #f8fafc 100%);
  color: var(--ink);
}

.news-events-page .news-container {
  min-width: 0;
  width: min(1320px, calc(100% - 48px));
  margin: 0 auto;
}

.news-events-page h1,
.news-events-page h2,
.news-events-page h3,
.news-events-page p,
.news-events-page a,
.news-events-page span {
  max-width: 100%;
}

.news-hero {
  position: relative;
  width: 100%;
  height: clamp(380px, 32vw, 420px);
  max-height: 430px;
  display: grid;
  place-items: center;
  overflow: hidden;
  color: #ffffff;
  background-image: url("${heroBanner}");
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
}

.news-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(8, 24, 60, 0.88), rgba(8, 24, 60, 0.68)),
    linear-gradient(180deg, rgba(8, 24, 60, 0.24), rgba(8, 24, 60, 0.38));
  pointer-events: none;
}

.news-hero::after {
  display: none;
}

.news-hero-content {
  position: relative;
  z-index: 1;
  width: min(820px, calc(100% - 40px));
  max-width: 820px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
  text-align: center;
  transform: translateY(55px);
}

.news-header {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.news-tagline {
  max-width: 650px;
  margin: 0 auto;
  color: var(--gold);
  font-size: clamp(0.68rem, 0.86vw, 0.82rem);
  font-weight: 900;
  letter-spacing: 0.22em;
  line-height: 1.35;
  text-transform: uppercase;
  text-shadow: 0 8px 22px rgba(0, 0, 0, 0.28);
}

.news-header h1 {
  margin: 0;
  color: #ffffff;
  font-family: var(--heading-font);
  font-size: clamp(2.5rem, 4vw, 4.15rem);
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0;
  text-wrap: balance;
  text-shadow: 0 16px 34px rgba(0, 0, 0, 0.28);
}

.news-subtitle {
  max-width: 650px;
  margin: 16px auto 0;
  color: var(--gold);
  font-size: clamp(0.68rem, 0.86vw, 0.82rem);
  font-weight: 900;
  letter-spacing: 0.22em;
  line-height: 1.35;
  text-transform: uppercase;
  text-shadow: 0 8px 22px rgba(0, 0, 0, 0.28);
}

.news-gold-divider {
  width: 82px;
  height: 2px;
  margin: 18px auto 18px;
  border-radius: 999px;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
}

.news-editorial {
  position: relative;
  padding: 58px 0 110px;
}

.featured-story {
  position: relative;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  min-height: clamp(390px, 42vw, 520px);
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: 28px;
  background: var(--navy);
  box-shadow: 0 34px 96px rgba(8, 24, 60, 0.26);
  isolation: isolate;
}

.featured-story::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -2;
  background-image: url("${recognitionCeremonyImage}");
  background-size: cover;
  background-position: center 18%;
  background-repeat: no-repeat;
  transition: transform 700ms ease;
}

.featured-story::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    linear-gradient(180deg, rgba(8, 24, 60, 0.28) 0%, rgba(8, 24, 60, 0.76) 70%, rgba(6, 18, 48, 0.96) 100%),
    linear-gradient(90deg, rgba(6, 18, 48, 0.96), rgba(8, 24, 60, 0.58) 58%, rgba(8, 24, 60, 0.62));
}

.featured-story:hover::before {
  transform: scale(1.02);
}

.featured-content {
  width: min(600px, 56%);
  max-width: 100%;
  min-width: 0;
  box-sizing: border-box;
  padding: clamp(28px, 4.6vw, 56px);
}

.featured-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 34px;
  border: 1px solid rgba(242, 193, 78, 0.42);
  background: rgba(242, 193, 78, 0.16);
  color: var(--gold);
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.22em;
  line-height: 1.4;
  text-transform: uppercase;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  text-wrap: balance;
}

.featured-badge {
  margin-bottom: 22px;
  padding: 8px 14px;
  border-radius: 999px;
}

.featured-content h2 {
  max-width: 560px;
  margin: 0 0 18px;
  color: #ffffff;
  font-family: var(--heading-font);
  font-size: clamp(2rem, 3.35vw, 3.45rem);
  font-weight: 700;
  line-height: 0.98;
  letter-spacing: 0;
  overflow-wrap: anywhere;
  text-wrap: balance;
  text-shadow: 0 18px 38px rgba(0, 0, 0, 0.34);
}

.featured-content p {
  max-width: 540px;
  margin: 0 0 34px;
  color: rgba(255, 255, 255, 0.84);
  font-size: clamp(1rem, 1.25vw, 1.13rem);
  line-height: 1.78;
}

.premium-button {
  max-width: 100%;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 13px 22px;
  border: 1px solid var(--navy);
  border-radius: 999px;
  background: var(--navy);
  color: #ffffff;
  font-size: 0.82rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  text-decoration: none;
  text-transform: uppercase;
  box-shadow: 0 18px 36px rgba(8, 24, 60, 0.18);
  transition: transform 240ms ease, background 240ms ease, border-color 240ms ease, color 240ms ease, box-shadow 240ms ease;
}

.premium-button.gold {
  border-color: var(--gold);
  background: linear-gradient(135deg, var(--gold), #d99a21);
  color: var(--navy);
  box-shadow: 0 22px 42px rgba(0, 0, 0, 0.24);
}

.premium-button:hover {
  transform: translateY(-3px);
  border-color: var(--gold);
  background: var(--gold);
  color: var(--navy);
  box-shadow: 0 24px 48px rgba(8, 24, 60, 0.24);
}

.news-grid-section {
  padding-top: 74px;
}

.news-section-heading {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 28px;
  align-items: end;
  margin-bottom: 34px;
}

.news-section-heading h2 {
  margin: 10px 0 0;
  color: var(--navy);
  font-family: var(--heading-font);
  font-size: clamp(2.45rem, 4.8vw, 5rem);
  font-weight: 700;
  line-height: 0.98;
  letter-spacing: 0;
  overflow-wrap: anywhere;
  text-wrap: balance;
}

.news-section-heading .news-tagline {
  margin-bottom: 0;
  color: var(--gold-deep);
  text-shadow: none;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 26px;
  align-items: stretch;
}

.news-card {
  min-width: 0;
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(8, 24, 60, 0.08);
  box-shadow: 0 18px 46px rgba(8, 24, 60, 0.1);
  transition: transform 260ms ease, box-shadow 260ms ease, border-color 260ms ease;
}

.news-card:hover {
  transform: translateY(-10px);
  border-color: rgba(242, 193, 78, 0.48);
  box-shadow: 0 34px 80px rgba(8, 24, 60, 0.18);
}

.news-card-image {
  position: relative;
  margin: 14px 14px 0;
  overflow: hidden;
  border-radius: 18px;
  aspect-ratio: 16 / 11;
  background: #eef2f7;
}

.news-card-image img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform 620ms ease;
}

#recognition-moving-up-2026 .news-card-image img {
  object-fit: cover;
  object-position: center 16%;
}

.news-card:hover .news-card-image img {
  transform: scale(1.065);
}

.news-card-body {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 26px 26px 28px;
}

.news-card-date {
  margin: 0 0 14px;
  color: var(--date-muted);
  font-size: 0.78rem;
  font-weight: 950;
  letter-spacing: 0.2em;
  line-height: 1.4;
  text-transform: uppercase;
}

.news-card h3 {
  margin: 0 0 18px;
  color: var(--navy);
  font-family: var(--heading-font);
  font-size: clamp(1.34rem, 1.7vw, 1.72rem);
  font-weight: 700;
  line-height: 1.08;
  letter-spacing: 0;
  overflow-wrap: anywhere;
  text-wrap: balance;
}

.news-card-subtitle {
  margin: -2px 0 18px;
  color: var(--muted);
  font-size: 0.96rem;
  line-height: 1.66;
}

.news-card-accent {
  width: 58px;
  height: 2px;
  margin: 0 0 18px;
  border-radius: 999px;
  background: var(--gold);
}

.news-card-body > p:not(.news-card-date) {
  margin: 0 0 30px;
  color: var(--muted);
  font-size: 0.96rem;
  line-height: 1.66;
}

.article-detail-page {
  min-height: 100vh;
  overflow-x: hidden;
  background: linear-gradient(180deg, #fffaf0 0%, #ffffff 34%, #f8fafc 100%);
  color: var(--ink);
}

.article-detail-hero {
  padding: 156px 0 72px;
  color: #ffffff;
  background:
    linear-gradient(90deg, rgba(8, 24, 60, 0.96), rgba(8, 24, 60, 0.76), rgba(8, 24, 60, 0.54)),
    url("${heroBanner}");
  background-size: cover;
  background-position: center top;
}

.article-detail-kicker {
  margin: 0 0 18px;
  color: var(--gold);
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.22em;
  line-height: 1.4;
  text-transform: uppercase;
}

.article-detail-hero h1 {
  max-width: 980px;
  margin: 0;
  color: #ffffff;
  font-family: var(--heading-font);
  font-size: clamp(2.5rem, 4vw, 4.15rem);
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0;
  overflow-wrap: anywhere;
  text-wrap: balance;
}

.article-detail-subtitle {
  width: 100%;
  max-width: 760px;
  margin: 22px 0 0;
  color: rgba(255, 255, 255, 0.84);
  font-size: clamp(1rem, 1.25vw, 1.13rem);
  line-height: 1.78;
  overflow-wrap: anywhere;
}

.article-detail-body {
  padding: 0 0 104px;
}

.article-detail-shell {
  width: 100%;
  max-width: 100%;
  min-width: 0;
  margin-top: -42px;
  overflow: hidden;
  border-radius: 28px;
  background: #ffffff;
  border: 1px solid rgba(8, 24, 60, 0.08);
  box-shadow: 0 30px 86px rgba(8, 24, 60, 0.16);
}

.article-detail-image {
  margin: 0;
  border-bottom: 6px solid var(--gold);
  background: #eef2f7;
}

.article-detail-image.focus-top-image {
  width: 100%;
  height: min(42vw, 560px);
  min-height: 360px;
  overflow: hidden;
}

.article-detail-image img {
  width: 100%;
  height: min(64vw, 620px);
  min-height: 340px;
  display: block;
  object-fit: cover;
  object-position: center;
}

.article-detail-image.focus-top-image img {
  width: 100%;
  height: 100%;
  min-height: 0;
  object-fit: cover;
  object-position: center top;
}

.article-detail-content {
  width: 100%;
  max-width: min(820px, 100%);
  min-width: 0;
  box-sizing: border-box;
  margin: 0 auto;
  padding: clamp(34px, 6vw, 72px) clamp(22px, 5vw, 58px) clamp(42px, 6vw, 78px);
}

.article-detail-content p {
  margin: 0 0 28px;
  color: var(--muted);
  font-size: clamp(1rem, 1.25vw, 1.13rem);
  line-height: 1.78;
  overflow-wrap: anywhere;
}

.article-detail-gallery {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin: 44px 0 0;
}

.article-detail-gallery figure {
  margin: 0;
  overflow: hidden;
  border-radius: 18px;
  aspect-ratio: 4 / 5;
  background: #eef2f7;
  box-shadow: 0 18px 42px rgba(8, 24, 60, 0.12);
}

.article-detail-gallery img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
  transition: transform 620ms ease;
}

.article-detail-gallery figure:hover img {
  transform: scale(1.055);
}

.article-detail-verse {
  margin: 42px 0 0;
  padding: 26px 0 0;
  border-top: 1px solid rgba(242, 193, 78, 0.46);
  color: var(--navy);
  font-family: var(--heading-font);
  font-size: clamp(1.3rem, 2.2vw, 2rem);
  line-height: 1.32;
  letter-spacing: 0;
}

.article-detail-actions {
  margin-top: 38px;
}

.article-not-found {
  min-height: 70vh;
  display: grid;
  place-items: center;
  padding: 160px 24px 80px;
  background: #fffaf0;
  color: var(--navy);
  text-align: center;
}

.article-not-found h1 {
  margin: 0 0 18px;
  font-family: var(--heading-font);
  font-size: clamp(2rem, 4vw, 4rem);
  letter-spacing: 0;
}

.news-card .premium-button {
  margin-top: auto;
  align-self: flex-start;
  min-height: 48px;
  padding: 13px 20px;
  font-size: 0.82rem;
}

@media (max-width: 1080px) {
  .news-hero {
    height: 340px;
  }

  .news-hero-content {
    padding: 0 18px;
    transform: translateY(50px);
  }

  .news-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 760px) {
  .news-events-page .news-container {
    width: min(100% - 30px, 1320px);
  }

  .news-hero {
    height: 320px;
    max-height: none;
  }

  .news-hero-content {
    width: min(100% - 30px, 900px);
    padding: 0 12px;
    transform: translateY(48px);
  }

  .news-header h1 {
    font-size: clamp(2rem, 8vw, 2.75rem);
    line-height: 1;
  }

  .news-tagline {
    font-size: clamp(0.62rem, 1.6vw, 0.74rem);
    letter-spacing: 0.18em;
  }

  .news-subtitle {
    max-width: 38ch;
    font-size: clamp(0.62rem, 1.6vw, 0.74rem);
    letter-spacing: 0.18em;
  }

  .news-editorial {
    padding: 38px 0 78px;
  }

  .featured-story {
    min-height: 420px;
    border-radius: 22px;
  }

  .featured-story::before {
    background-size: cover;
    background-position: center 16%;
  }

  .featured-content {
    width: 100%;
    padding: 28px 22px 30px;
  }

  .featured-content h2,
  .news-section-heading h2,
  .article-detail-hero h1 {
    font-size: clamp(2rem, 8vw, 2.75rem);
    line-height: 1;
  }

  .featured-content p,
  .news-card-body > p:not(.news-card-date),
  .news-card-subtitle,
  .article-detail-subtitle,
  .article-detail-content p {
    font-size: 1rem;
    line-height: 1.78;
  }

  .news-grid-section {
    padding-top: 54px;
  }

  .news-section-heading {
    grid-template-columns: 1fr;
    gap: 18px;
    margin-bottom: 26px;
  }

  .news-grid {
    grid-template-columns: 1fr;
    gap: 22px;
  }

  .news-card {
    border-radius: 20px;
  }

  .news-card-body {
    padding: 24px 22px 26px;
  }

  .news-card h3 {
    font-size: clamp(1.34rem, 5vw, 1.72rem);
    line-height: 1.08;
  }

  .article-detail-hero {
    padding: 136px 0 58px;
  }

  .article-detail-shell {
    margin-top: -26px;
    border-radius: 22px;
  }

  .article-detail-image img {
    height: 62vw;
    min-height: 250px;
  }

  .article-detail-image.focus-top-image {
    height: 62vw;
    min-height: 250px;
  }

  .article-detail-image.focus-top-image img {
    height: 100%;
    min-height: 0;
    object-position: center top;
  }

  .article-detail-gallery {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }
}

@media (max-width: 480px) {
  .news-hero {
    height: 290px;
  }

  .news-hero-content {
    padding: 0 8px;
    transform: translateY(46px);
  }

  .news-header h1 {
    font-size: clamp(1.85rem, 9vw, 2.45rem);
    line-height: 1;
  }

  .news-gold-divider {
    width: 70px;
    margin-top: 14px;
  }

  .news-tagline {
    margin-top: 14px;
    font-size: 0.56rem;
    letter-spacing: 0.14em;
    line-height: 1.45;
  }

  .news-subtitle {
    margin-top: 12px;
    font-size: 0.56rem;
    letter-spacing: 0.14em;
    line-height: 1.45;
  }

  .featured-story {
    min-height: 430px;
  }

  .featured-story::before {
    background-size: cover;
    background-position: center 12%;
  }

  .featured-content h2 {
    font-size: clamp(1.85rem, 9vw, 2.45rem);
  }

  .news-section-heading h2,
  .article-detail-hero h1 {
    font-size: clamp(1.85rem, 9vw, 2.45rem);
  }

  .news-card h3 {
    font-size: clamp(1.32rem, 6vw, 1.62rem);
  }

  .featured-content p,
  .news-card-body > p:not(.news-card-date),
  .news-card-subtitle,
  .article-detail-subtitle,
  .article-detail-content p {
    font-size: 16px;
    line-height: 1.72;
  }

  .featured-badge,
  .article-detail-kicker {
    font-size: 0.7rem;
    letter-spacing: 0.16em;
  }

  .premium-button {
    width: 100%;
  }

  .news-card .premium-button {
    width: auto;
  }
}

@media (prefers-reduced-motion: reduce) {
  .featured-story::before,
  .news-card,
  .news-card-image img,
  .premium-button {
    transition: none;
  }
}
`;

const revealProps = (delay = 0) => ({
  initial: { opacity: 0, y: 34 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.7, ease: 'easeOut', delay },
});

const newsStories = [
  {
    slug: 'friendship-day-2026',
    date: 'February 12, 2026',
    category: 'School Event',
    title: 'Philippians Academy Celebrates Friendship Day 2026',
    subtitle: 'Promoting Kindness, Unity, and Meaningful Friendships',
    preview: 'Philippians Academy joyfully celebrated Friendship Day, creating a fun and wholesome atmosphere centered on kindness, appreciation, and genuine connection.',
    image: friendshipDayImage,
    galleryImages: [
      friendshipDayGallery1,
      friendshipDayGallery2,
      friendshipDayGallery3,
    ],
    fullStory: [
      'Last Thursday, February 12, 2026, Philippians Academy of Parañaque Inc. joyfully celebrated Friendship Day, creating a fun and wholesome atmosphere centered on kindness, appreciation, and genuine connection among students and teachers.',
      'As a simple yet meaningful alternative to Valentine\'s Day, the school chose to focus on celebrating friendship - appreciating classmates, schoolmates, teachers, and friends through acts of kindness, respect, gratitude, and teamwork.',
      'The celebration became a memorable day filled with laughter, bonding, and positive experiences as students participated in various enjoyable activities prepared by the school. Learners spent time together through fun and friendly board games, encouraging teamwork and camaraderie among peers.',
      'Students also watched an inspiring film presentation about friendship, reminding everyone of the importance of loyalty, compassion, understanding, and supporting one another both inside and outside the classroom.',
      'Another highlight of the celebration was the creative card-making activity, where students expressed their appreciation and gratitude through heartfelt messages for their friends and teachers. The sharing of sweet treats also added excitement and joy to the event, making the day even more special for everyone.',
      'The Friendship Day celebration served as a beautiful reminder that love within the school community goes beyond romance - it is also found in genuine friendships, unity, encouragement, and caring relationships built through shared experiences and mutual respect.',
      'Philippians Academy expressed its gratitude to the teachers, parents, and students who helped make the celebration meaningful, enjoyable, and memorable for the entire school community.',
      'Through activities like Friendship Day, the academy continues to promote a Christ-centered environment where students grow not only academically, but also socially, emotionally, and spiritually through positive relationships and shared values.',
    ],
  },
  {
    slug: 'promotional-talk-grade-6-san-agustin',
    date: '',
    category: 'Promotional Talk',
    title: 'Philippians Academy Conducts Promotional Talk for Grade 6 Learners of San Agustin Elementary School',
    subtitle: 'Encouraging Future Learners to Pursue Christ-Centered Education',
    preview: 'Philippians Academy conducted a promotional talk for Grade 6 learners of San Agustin Elementary School, introducing academic opportunities for incoming Grade 7 students.',
    image: promotionalTalkImage,
    galleryImages: [
      promotionalTalkGallery0,
      promotionalTalkGallery1,
      promotionalTalkGallery2,
      promotionalTalkGallery3,
    ],
    fullStory: [
      'Philippians Academy of Parañaque Inc., managed by Regis Marie College, successfully conducted a promotional talk for the Grade 6 learners of San Agustin Elementary School as part of its outreach and enrollment campaign for School Year 2026-2027.',
      'The activity was led by the Marketing Team of Regis Marie College to introduce the academic opportunities available for incoming Grade 7 students, particularly the various discounts, scholarship opportunities, and enrollment benefits that may be availed by public school graduates.',
      'During the orientation, learners were introduced to the school\'s academic programs, student-centered learning environment, and Christ-centered approach to education. The team also shared the importance of holistic development, encouraging students to pursue academic excellence while strengthening their values, discipline, and personal growth.',
      'Philippians Academy expressed its heartfelt gratitude to Dr. Antonio B. Dorado, School Principal, and Ma\'am Cherry Forcadas, Assistant to the Principal, for warmly welcoming the team and providing the opportunity to connect with the learners. Their support and cooperation played an important role in helping students explore their educational opportunities for junior high school.',
      'The activity became a meaningful opportunity for Grade 6 learners to gain insights about their future academic journey and discover a school community committed to nurturing students academically, socially, and spiritually.',
      'As enrollment for School Year 2026-2027 officially continues, Philippians Academy warmly invites incoming Grade 7 students and their families to become part of a growing academic community that values small class sizes, quality education, and holistic student development.',
      'With faith and excellence as its foundation, Philippians Academy continues its mission of guiding learners toward a brighter and purpose-driven future.',
    ],
    verse: '"Commit to the Lord whatever you do, and He will establish your plans." - Proverbs 16:3',
  },
  {
    slug: 'sm-city-bf-enrollment-campaign',
    date: 'May 2, 2026',
    category: 'Enrollment Campaign',
    title: 'Philippians Academy Participates in Community Enrollment Campaign at SM City BF Parañaque',
    subtitle: 'Bringing Quality Christian Education Closer to Families',
    preview: 'Philippians Academy proudly participated in a community enrollment campaign at SM City BF Parañaque, bringing Christ-centered and quality education closer to Filipino families.',
    image: enrollmentCampaignImage,
    imageFit: 'focusTop',
    fullStory: [
      'On May 2, 2026, Philippians Academy of Parañaque Inc. proudly participated in a community enrollment campaign held at SM City BF Parañaque, strengthening its mission of bringing Christ-centered and quality education closer to Filipino families.',
      'The event became an opportunity for parents, students, and mall visitors to personally meet representatives of the academy and learn more about the school\'s academic programs, values, and enrollment offerings for the upcoming school year.',
      'The booth featured the school\'s enrollment information, academic offerings, and student development programs designed to nurture learners spiritually, academically, and socially. Visitors were warmly welcomed by the Philippians Academy team, who answered inquiries regarding admissions, curriculum, and student life.',
      'The activity also gained recognition online after being featured in a social media post by Eric L. Olivarez, recognizing the participation of local educational institutions during the community event at SM City BF Parañaque.',
      'Philippians Academy continues to expand its presence within the community by participating in outreach and public engagement activities that reflect its commitment to educational excellence and Christian values.',
      'As enrollment for School Year 2026-2027 continues, the academy invites aspiring students and families to become part of a growing academic community dedicated to molding young minds towards Christ.',
    ],
    verse: '"I can do all things through Christ who strengthens me." - Philippians 4:13',
  },
  {
    slug: 'recognition-moving-up-2026',
    date: 'April 8, 2026',
    category: 'Recognition Ceremony',
    title: 'Philippians Academy Celebrates Recognition, Moving-Up, and Completion Ceremony 2026',
    subtitle: 'Rooted in Faith, Rising in Excellence',
    preview: 'Philippians Academy of Parañaque Inc. proudly conducted its Recognition, Moving-Up, and Completion Ceremony, honoring learners as they rose in faith, competence, and character.',
    image: recognitionCeremonyImage,
    imageFit: 'focusTop',
    hideDetailImage: true,
    galleryImages: [
      recognitionCeremonyImage,
      recognitionCeremonyGallery1,
      recognitionCeremonyGallery2,
      recognitionCeremonyGallery3,
      recognitionCeremonyGallery4,
      recognitionCeremonyGallery5,
      recognitionCeremonyGallery6,
      recognitionCeremonyGallery7,
      recognitionCeremonyGallery8,
      recognitionCeremonyGallery9,
      recognitionCeremonyGallery10,
      recognitionCeremonyGallery11,
    ],
    fullStory: [
      'On April 8, 2026, Philippians Academy of Parañaque Inc., managed by Regis Marie College, proudly conducted its Recognition, Moving-Up, and Completion Ceremony with the inspiring theme:',
      '"Rooted in Faith, Rising in Excellence," in celebration of the Department of Education\'s theme, "Filipino Graduates: Prepared to Lead with Competence and Character."',
      'The ceremony became a meaningful and memorable milestone for students, parents, teachers, and school administrators as the school community gathered together to honor the achievements and growth of the learners throughout the academic year.',
      'Awards, certificates, and recognitions were presented to students who demonstrated excellence in academics, leadership, character, and participation in various school activities. The Moving-Up and Completion rites also symbolized the students\' readiness to advance toward the next chapter of their educational journey with confidence, faith, and determination.',
      'More than celebrating academic success, the event highlighted the learners\' growth in character, resilience, discipline, and spiritual maturity. Each proud smile, every achievement received, and every step taken on stage reflected the hard work and perseverance of the students, the unwavering support of parents and families, and the dedication of teachers who continuously guided and inspired them.',
      'School officials expressed their gratitude to the parents and guardians for their trust and partnership in nurturing the students\' future. Teachers likewise encouraged the graduates and completers to continue pursuing excellence while remaining grounded in Christian values and faith in God.',
      'To the dear Philippians learners, the ceremony served as both a celebration and a reminder to continue rising with faith, pursuing excellence with passion, and leading with competence and character wherever life may lead them.',
      'Philippians Academy remains committed to providing Christ-centered and quality education that develops learners into responsible, compassionate, and future-ready individuals prepared to make a positive impact in society.',
    ],
  },
];

const newsGridStories = newsStories.filter((story) => story.slug !== 'recognition-moving-up-2026');

function SchoolEvents() {
  return (
    <>
      <style>{schoolEventsStyles}</style>
      <section className="news-events-page">
        <header className="news-hero">
          <div className="news-hero-content">
            <motion.div className="news-header" {...revealProps()}>
              <h1>News &amp; Events</h1>
              <div className="news-gold-divider" />
              <p className="news-tagline">Campus News &bull; Events &bull; Student Life</p>
            </motion.div>
          </div>
        </header>

        <main className="news-editorial">
          <div className="news-container">
            <motion.article className="featured-story" {...revealProps(0.05)}>
              <div className="featured-content">
                <span className="featured-badge">Recognition Ceremony</span>
                <h2>Philippians Academy Celebrates Recognition, Moving-Up, and Completion Ceremony 2026</h2>
                <p>
                  Rooted in faith and rising in excellence as learners celebrate achievement, completion, competence, and character.
                </p>
                <Link className="premium-button gold" to="/school-events/recognition-moving-up-2026">Read Featured Story</Link>
              </div>
            </motion.article>

            <section className="news-grid-section" aria-labelledby="news-grid-title">
              <motion.div className="news-section-heading" {...revealProps()}>
                <div>
                  <p className="news-tagline">Stories From Our Academy</p>
                  <h2 id="news-grid-title">Campus Highlights</h2>
                </div>
                <div className="news-gold-divider" />
              </motion.div>

              <div className="news-grid">
                {newsGridStories.map((story, index) => (
                  <motion.article
                    className="news-card"
                    id={story.slug}
                    key={story.title}
                    {...revealProps(index * 0.05)}
                  >
                    <div className="news-card-image">
                      <img src={story.image} alt={`${story.title} at Philippians Academy`} />
                    </div>
                    <div className="news-card-body">
                      {story.date ? <p className="news-card-date">{story.date}</p> : null}
                      <h3>{story.title}</h3>
                      {story.subtitle ? <div className="news-card-subtitle">{story.subtitle}</div> : null}
                      <div className="news-card-accent" />
                      <p>{story.preview}</p>
                      <Link className="premium-button" to={`/school-events/${story.slug}`}>
                        Read Story
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>
          </div>
        </main>
      </section>
      <Footer />
    </>
  );
}

function ArticleNotFound() {
  return (
    <>
      <style>{schoolEventsStyles}</style>
      <section className="news-events-page article-not-found">
        <div>
          <h1>Story Not Found</h1>
          <p className="news-subtitle" style={{ color: '#5f6878', margin: '0 auto 28px' }}>
            The article you are looking for is not available.
          </p>
          <Link className="premium-button" to="/school-events">Back to News &amp; Events</Link>
        </div>
      </section>
      <Footer />
    </>
  );
}

export function SchoolEventArticle() {
  const { slug } = useParams();
  const article = newsStories.find((story) => story.slug === slug);

  if (!article) {
    return <ArticleNotFound />;
  }

  return (
    <>
      <style>{schoolEventsStyles}</style>
      <section className="news-events-page article-detail-page">
        <header className="article-detail-hero">
          <div className="news-container">
            <p className="article-detail-kicker">{article.category}</p>
            <h1>{article.title}</h1>
            {article.subtitle ? <p className="article-detail-subtitle">{article.subtitle}</p> : null}
          </div>
        </header>

        <main className="article-detail-body">
          <div className="news-container">
            <article className="article-detail-shell">
              {!article.hideDetailImage ? (
                <figure className={`article-detail-image${article.imageFit === 'focusTop' ? ' focus-top-image' : ''}`}>
                  <img src={article.image} alt={`${article.title} at Philippians Academy`} />
                </figure>
              ) : null}
              <div className="article-detail-content">
                {article.fullStory.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {article.verse ? <div className="article-detail-verse">{article.verse}</div> : null}
                {article.galleryImages?.length ? (
                  <div className="article-detail-gallery" aria-label={`${article.title} photo gallery`}>
                    {article.galleryImages.map((image, index) => (
                      <figure key={image}>
                        <img src={image} alt={`${article.title} gallery photo ${index + 1}`} />
                      </figure>
                    ))}
                  </div>
                ) : null}
                <div className="article-detail-actions">
                  <Link className="premium-button" to="/school-events">Back to News &amp; Events</Link>
                </div>
              </div>
            </article>
          </div>
        </main>
      </section>
      <Footer />
    </>
  );
}

export default SchoolEvents;

