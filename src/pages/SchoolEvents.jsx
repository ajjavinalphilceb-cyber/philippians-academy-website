import Footer from '../components/Footer.jsx';
import heroBanner from '../assets/hero banner.png';
import gradeSchoolImage from '../assets/Grade School.png';
import seniorHighImage from '../assets/Senior High School.png';

const schoolEventsStyles = `
.school-events-page { min-height: 100vh; overflow: hidden; padding: 168px 0 96px; background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%); color: #08183c; }
.school-events-page .container { max-width: 1320px; margin: 0 auto; padding: 0 24px; }
.events-header { max-width: 820px; margin: 0 auto 52px; text-align: center; }
.events-label { color: #b98416; font-size: 0.78rem; font-weight: 900; letter-spacing: 0.2em; text-transform: uppercase; margin: 0 0 16px; }
.events-header h1 { color: #08183c; font-family: Georgia, 'Times New Roman', serif; font-size: clamp(2.75rem, 5vw, 5rem); line-height: 0.98; margin: 0 0 20px; }
.events-header p { color: #465268; font-size: clamp(1rem, 1.4vw, 1.16rem); line-height: 1.72; max-width: 700px; margin: 0 auto; }
.events-grid { display: grid; grid-template-columns: minmax(0, 1.08fr) minmax(360px, 0.92fr); gap: 30px; align-items: start; }
.events-side { display: grid; gap: 24px; }
.event-card { min-width: 0; display: grid; overflow: hidden; border-radius: 22px; background: #ffffff; border: 1px solid rgba(8, 24, 60, 0.09); box-shadow: 0 18px 46px rgba(8, 24, 60, 0.09); transition: transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease; }
.event-card:hover { transform: translateY(-6px); border-color: rgba(214, 155, 20, 0.34); box-shadow: 0 28px 62px rgba(8, 24, 60, 0.14); }
.event-card.featured { grid-template-rows: auto auto; }
.events-side .event-card { grid-template-rows: auto 1fr; }
.event-image { overflow: hidden; background: #eef2f7; }
.event-card.featured .event-image { aspect-ratio: 16 / 9; max-height: 330px; }
.events-side .event-image { aspect-ratio: 16 / 9; max-height: 192px; }
.event-image img { width: 100%; height: 100%; display: block; object-fit: cover; transition: transform 520ms ease; }
.event-card:hover img { transform: scale(1.03); }
.event-body { padding: 30px; }
.event-meta { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; margin-bottom: 16px; }
.event-date { color: #b98416; font-size: 0.78rem; font-weight: 900; letter-spacing: 0.12em; text-transform: uppercase; }
.event-category { display: inline-flex; align-items: center; min-height: 28px; padding: 5px 11px; border-radius: 999px; color: #08183c; background: rgba(242, 193, 78, 0.14); border: 1px solid rgba(214, 155, 20, 0.24); font-size: 0.72rem; font-weight: 850; letter-spacing: 0.07em; text-transform: uppercase; }
.event-card h2 { color: #08183c; font-family: Georgia, 'Times New Roman', serif; font-size: clamp(1.35rem, 2.35vw, 2.35rem); line-height: 1.08; margin: 0 0 14px; }
.events-side h2 { font-size: clamp(1.18rem, 1.55vw, 1.52rem); }
.event-accent { width: 48px; height: 2px; border-radius: 999px; background: #d69b14; margin-bottom: 16px; }
.event-card p { color: #5b6577; font-size: 0.96rem; line-height: 1.68; margin: 0 0 24px; }
.event-action { display: inline-flex; align-items: center; justify-content: center; border: 1px solid #08183c; border-radius: 999px; background: #08183c; color: #ffffff; padding: 11px 18px; font-size: 0.78rem; font-weight: 850; letter-spacing: 0.1em; text-transform: uppercase; text-decoration: none; transition: background 220ms ease, color 220ms ease, border-color 220ms ease, transform 220ms ease; }
.event-action:hover { background: #f2c14e; color: #08183c; border-color: #f2c14e; transform: translateX(3px); }

@media (max-width: 992px) {
  .school-events-page { padding-top: 148px; }
  .events-grid { grid-template-columns: 1fr; }
  .events-side { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 700px) {
  .school-events-page { padding: 132px 0 68px; }
  .school-events-page .container { padding: 0 15px; }
  .events-side { grid-template-columns: 1fr; }
  .event-card { border-radius: 18px; }
  .event-body { padding: 24px 20px 26px; }
  .events-side .event-image { max-height: none; }
}
`;

const stories = [
  {
    title: 'Philippians Academy Joins the PSAP School Fair 2026',
    category: 'School Event',
    date: 'May 2026',
    description: 'Philippians Academy proudly participated in the PSAP School Fair 2026 at SM BF Parañaque, welcoming parents and future students to explore Christ-centered education, academic programs, and the school community.',
    image: heroBanner,
    alt: 'Philippians Academy school fair event',
  },
  {
    title: 'Recognition & Moving-Up Ceremony 2026',
    category: 'Recognition Ceremony',
    date: 'April 2026',
    description: 'Philippians Academy celebrated the achievements and milestones of its learners, honoring academic excellence, perseverance, leadership, and faith-driven growth.',
    image: seniorHighImage,
    alt: 'Philippians Academy recognition ceremony',
  },
  {
    title: 'Foundation Day Celebration 2026',
    category: 'Student Life',
    date: 'March 2026',
    description: 'Students, teachers, and families came together to celebrate Foundation Day through performances, games, presentations, and activities that showcased unity, creativity, and joyful learning.',
    image: gradeSchoolImage,
    alt: 'Philippians Academy foundation day celebration',
  },
];

function SchoolEvents() {
  const [featuredStory, ...sideStories] = stories;

  return (
    <>
      <style>{schoolEventsStyles}</style>
      <section className="school-events-page">
        <div className="container">
          <div className="events-header">
            <p className="events-label">Campus News • Events • Student Life</p>
            <h1>News &amp; Events</h1>
            <p>Stay updated with stories, milestones, celebrations, and meaningful school activities from Philippians Academy.</p>
          </div>

          <div className="events-grid">
            <article className="event-card featured">
              <div className="event-image">
                <img src={featuredStory.image} alt={featuredStory.alt} />
              </div>
              <div className="event-body">
                <div className="event-meta">
                  <span className="event-date">{featuredStory.date}</span>
                  <span className="event-category">{featuredStory.category}</span>
                </div>
                <h2>{featuredStory.title}</h2>
                <div className="event-accent" />
                <p>{featuredStory.description}</p>
                <a href="#" className="event-action">Read More</a>
              </div>
            </article>

            <div className="events-side">
              {sideStories.map((story) => (
                <article className="event-card" key={story.title}>
                  <div className="event-image">
                    <img src={story.image} alt={story.alt} />
                  </div>
                  <div className="event-body">
                    <div className="event-meta">
                      <span className="event-date">{story.date}</span>
                      <span className="event-category">{story.category}</span>
                    </div>
                    <h2>{story.title}</h2>
                    <div className="event-accent" />
                    <p>{story.description}</p>
                    <a href="#" className="event-action">Read More</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default SchoolEvents;
