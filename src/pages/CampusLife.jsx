import Footer from '../components/Footer.jsx';
import heroBanner from '../assets/hero banner.png';
import kindergartenImage from '../assets/Kindergarten.png';
import gradeSchoolImage from '../assets/Grade School.png';
import juniorHighImage from '../assets/Junior High School.png';
import seniorHighImage from '../assets/Senior High School.png';
import personalityDevelopmentImage from '../assets/Personality Development.png?version=20260515-refresh';

const campusLifeStyles = `
.campus-life-page { min-height: 100vh; padding: 168px 0 96px; background: linear-gradient(180deg, #ffffff 0%, #f8fafc 56%, #fffaf0 100%); color: #08183c; }
.campus-life-page .container { max-width: 1320px; margin: 0 auto; padding: 0 24px; }
.campus-hero { display: grid; grid-template-columns: minmax(0, 0.92fr) minmax(360px, 1.08fr); gap: clamp(30px, 5vw, 72px); align-items: center; margin-bottom: 68px; }
.campus-label { color: #b98416; font-size: 0.78rem; font-weight: 900; letter-spacing: 0.2em; text-transform: uppercase; margin: 0 0 16px; }
.campus-hero h1 { color: #08183c; font-family: Georgia, 'Times New Roman', serif; font-size: clamp(2.7rem, 5vw, 5rem); line-height: 0.98; margin: 0 0 20px; }
.campus-hero p { color: #465268; font-size: clamp(1rem, 1.45vw, 1.18rem); line-height: 1.72; margin: 0; max-width: 680px; }
.campus-hero-image { min-height: 440px; border-radius: 30px; overflow: hidden; box-shadow: 0 24px 64px rgba(8, 24, 60, 0.16); }
.campus-hero-image img { width: 100%; height: 100%; min-height: 440px; display: block; object-fit: cover; }
.campus-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; }
.campus-card { min-width: 0; overflow: hidden; border-radius: 22px; background: #ffffff; border: 1px solid rgba(8, 24, 60, 0.08); box-shadow: 0 16px 42px rgba(8, 24, 60, 0.08); transition: transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease; }
.campus-card:hover { transform: translateY(-6px); border-color: rgba(214, 155, 20, 0.34); box-shadow: 0 26px 58px rgba(8, 24, 60, 0.13); }
.campus-card-image { aspect-ratio: 16 / 10; overflow: hidden; background: #eef2f7; }
.campus-card-image img { width: 100%; height: 100%; display: block; object-fit: cover; transition: transform 460ms ease; }
.campus-card:hover img { transform: scale(1.035); }
.campus-card-body { padding: 24px 24px 28px; }
.campus-card h2 { color: #08183c; font-family: Georgia, 'Times New Roman', serif; font-size: clamp(1.35rem, 2vw, 1.8rem); line-height: 1.08; margin: 0 0 12px; }
.campus-accent { width: 46px; height: 2px; border-radius: 999px; background: #d69b14; margin-bottom: 14px; }
.campus-card p { color: #5b6577; font-size: 0.96rem; line-height: 1.66; margin: 0; }

@media (max-width: 992px) {
  .campus-life-page { padding-top: 148px; }
  .campus-hero { grid-template-columns: 1fr; margin-bottom: 46px; }
  .campus-hero-image,
  .campus-hero-image img { min-height: 360px; }
  .campus-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 640px) {
  .campus-life-page { padding: 132px 0 68px; }
  .campus-life-page .container { padding: 0 15px; }
  .campus-grid { grid-template-columns: 1fr; }
  .campus-hero-image,
  .campus-hero-image img { min-height: 300px; border-radius: 22px; }
  .campus-card { border-radius: 18px; }
}
`;

const campusSections = [
  {
    title: 'Student Activities',
    description: 'Engaging activities help students discover gifts, build confidence, and enjoy meaningful friendships within a caring school community.',
    image: gradeSchoolImage,
    alt: 'Philippians Academy students participating in school activities',
  },
  {
    title: 'School Programs',
    description: 'Programs are designed to support academic growth, creativity, communication, technology readiness, and practical life skills.',
    image: personalityDevelopmentImage,
    alt: 'Philippians Academy student development program',
  },
  {
    title: 'Christian Formation',
    description: 'Faith is nurtured through prayerful routines, values formation, service, and Christ-centered guidance across school life.',
    image: heroBanner,
    alt: 'Philippians Academy Christian formation moments',
  },
  {
    title: 'Classroom Moments',
    description: 'Learners grow through guided instruction, collaboration, discovery, and classroom experiences that build curiosity and discipline.',
    image: kindergartenImage,
    alt: 'Philippians Academy classroom moments',
  },
  {
    title: 'Celebrations & Events',
    description: 'School celebrations bring families and students together through performances, ceremonies, presentations, and milestone gatherings.',
    image: seniorHighImage,
    alt: 'Philippians Academy celebration and event',
  },
  {
    title: 'Community and Service',
    description: 'Students are encouraged to live with compassion, responsibility, and service as part of a community shaped by faith and character.',
    image: juniorHighImage,
    alt: 'Philippians Academy community and service',
  },
];

function CampusLife() {
  return (
    <>
      <style>{campusLifeStyles}</style>
      <section className="campus-life-page">
        <div className="container">
          <div className="campus-hero">
            <div>
              <p className="campus-label">Faith • Friendship • Leadership • Service</p>
              <h1>Campus Life at Philippians</h1>
              <p>
                Student life at Philippians Academy nurtures joyful learning, Christ-centered values, meaningful friendships, and purposeful experiences beyond the classroom.
              </p>
            </div>
            <div className="campus-hero-image">
              <img src={heroBanner} alt="Campus life at Philippians Academy" />
            </div>
          </div>

          <div className="campus-grid">
            {campusSections.map((section) => (
              <article className="campus-card" key={section.title}>
                <div className="campus-card-image">
                  <img src={section.image} alt={section.alt} />
                </div>
                <div className="campus-card-body">
                  <h2>{section.title}</h2>
                  <div className="campus-accent" />
                  <p>{section.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default CampusLife;
