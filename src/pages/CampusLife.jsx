import Footer from '../components/Footer.jsx';
import OptimizedImage from '../components/OptimizedImage.jsx';
import { optimizedImages } from '../assets/optimized-images.js';

const bibleMonthImage = optimizedImages['Bible Month Culmination Activity 2026/1111.png'];
const bibleMonthGallery1 = optimizedImages['Bible Month Culmination Activity 2026/2222.png'];
const bibleMonthGallery2 = optimizedImages['Bible Month Culmination Activity 2026/3333.png'];
const bibleMonthGallery3 = optimizedImages['Bible Month Culmination Activity 2026/4444.png'];
const bibleMonthGallery4 = optimizedImages['Bible Month Culmination Activity 2026/5555.png'];
const bibleMonthGallery5 = optimizedImages['Bible Month Culmination Activity 2026/6666.png'];
const unitedNationsImage = optimizedImages['United Nations Celebration 2025/1.png'];
const unitedNationsGallery1 = optimizedImages['United Nations Celebration 2025/2.png'];
const unitedNationsGallery2 = optimizedImages['United Nations Celebration 2025/3.png'];
const unitedNationsGallery3 = optimizedImages['United Nations Celebration 2025/4.png'];

const campusLifeStyles = `
.campus-life-page { min-height: 100vh; padding: 168px 0 96px; background: linear-gradient(180deg, #ffffff 0%, #f8fafc 56%, #fffaf0 100%); color: #08183c; }
.campus-life-page .container { max-width: 1320px; margin: 0 auto; padding: 0 24px; }
.campus-hero { max-width: 860px; margin: 0 auto 68px; text-align: center; }
.campus-label { color: #b98416; font-size: 0.78rem; font-weight: 900; letter-spacing: 0.2em; text-transform: uppercase; margin: 0 0 16px; }
.campus-hero h1 { color: #08183c; font-family: Georgia, 'Times New Roman', serif; font-size: clamp(2.7rem, 5vw, 5rem); line-height: 0.98; margin: 0 0 20px; }
.campus-hero p { color: #465268; font-size: clamp(1rem, 1.45vw, 1.18rem); line-height: 1.72; margin: 0 auto; max-width: 680px; }
.campus-stories { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: clamp(24px, 3vw, 34px); align-items: start; }
.campus-story { min-width: 0; overflow: hidden; border-radius: 24px; background: #ffffff; border: 1px solid rgba(8, 24, 60, 0.08); box-shadow: 0 24px 62px rgba(8, 24, 60, 0.11); transition: transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease; }
.campus-story:hover { transform: translateY(-7px); border-color: rgba(242, 193, 78, 0.34); box-shadow: 0 34px 78px rgba(8, 24, 60, 0.16); }
.campus-story-featured { position: relative; margin: 0; aspect-ratio: 16 / 10.5; overflow: hidden; background: #eef2f7; }
.campus-story-featured::after { content: ""; position: absolute; left: 0; right: 0; bottom: 0; height: 5px; background: linear-gradient(90deg, #08183c, #f2c14e, #08183c); }
.campus-story-featured img { width: 100%; height: 100%; display: block; object-fit: cover; object-position: center; transition: transform 520ms ease; }
.campus-story:hover .campus-story-featured img { transform: scale(1.03); }
.campus-story-content { box-sizing: border-box; padding: clamp(28px, 3vw, 38px); }
.campus-story-kicker { margin: 0 0 12px; color: #b98416; font-family: 'Montserrat', 'Poppins', Arial, sans-serif; font-size: 0.74rem; font-weight: 900; letter-spacing: 0.2em; line-height: 1.4; text-transform: uppercase; }
.campus-story h2 { margin: 0 0 14px; color: #08183c; font-family: 'Cinzel', Georgia, serif; font-size: clamp(1.75rem, 2.6vw, 2.75rem); line-height: 1.04; letter-spacing: -0.02em; }
.campus-story-subtitle { margin: 0 0 22px; color: #b98416; font-family: 'Montserrat', 'Poppins', Arial, sans-serif; font-size: 0.8rem; font-weight: 900; letter-spacing: 0.14em; line-height: 1.55; text-transform: uppercase; }
.campus-story p { color: #5b6577; font-family: 'Poppins', 'Inter', Arial, sans-serif; font-size: clamp(0.95rem, 1.05vw, 1.02rem); line-height: 1.78; margin: 0 0 18px; }
.campus-story-gallery { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; margin-top: 30px; padding-top: 24px; border-top: 1px solid rgba(8, 24, 60, 0.08); }
.campus-story-gallery figure { margin: 0; overflow: hidden; border-radius: 14px; aspect-ratio: 16 / 10; background: #eef2f7; box-shadow: 0 12px 30px rgba(8, 24, 60, 0.1); }
.campus-story-gallery img { width: 100%; height: 100%; display: block; object-fit: cover; transition: transform 520ms ease; }
.campus-story-gallery figure:hover img { transform: scale(1.035); }

@media (max-width: 992px) {
  .campus-life-page { padding-top: 148px; }
  .campus-hero { margin-bottom: 46px; }
  .campus-stories { grid-template-columns: 1fr; }
}

@media (max-width: 640px) {
  .campus-life-page { padding: 132px 0 68px; }
  .campus-life-page .container { padding: 0 15px; }
  .campus-story { border-radius: 22px; }
  .campus-story-content { padding: 24px 20px 28px; }
  .campus-story h2 { font-size: clamp(1.8rem, 8vw, 2.45rem); }
  .campus-story-gallery { grid-template-columns: 1fr; }
  .campus-story-gallery figure { border-radius: 14px; }
}
`;

const campusStories = [
  {
    title: 'Philippians Academy Celebrates Bible Month Culmination Activity 2026',
    subtitle: "Growing in Faith Through God's Word",
    category: 'Bible Month Culmination',
    image: bibleMonthImage,
    galleryImages: [
      bibleMonthGallery1,
      bibleMonthGallery2,
      bibleMonthGallery3,
      bibleMonthGallery4,
      bibleMonthGallery5,
    ],
    paragraphs: [
      'Last February 4, 2026, Philippians Academy of Parañaque Inc. joyfully celebrated its Bible Month Culmination Activity, bringing together students, teachers, and the school community in a meaningful celebration centered on faith, unity, and the Word of God.',
      'The event became a vibrant and inspiring occasion as students came dressed as their chosen Bible characters, confidently presenting meaningful Bible verses and personal reflections inspired by Scripture. Through their participation, learners expressed creativity while deepening their understanding of biblical teachings and values.',
      'The celebration was filled with songs of praise and worship that created an atmosphere of gratitude and faith within the school community. Students and teachers also listened to the inspiring story of the Prodigal Son, reflecting on important lessons about forgiveness, humility, love, repentance, and God\'s unconditional grace.',
      'Throughout the activity, learners were reminded of how God\'s Word serves as a guide in their daily lives - helping them become responsible students, compassionate individuals, and faithful members of the community.',
      'To conclude the celebration, simple Bible bookmarks were distributed to all Philippians learners as a meaningful reminder to continue reading, reflecting on, and living out the Word of God each day.',
      'The event also highlighted the school\'s commitment to unity and mutual respect among students coming from different Christian denominations. Despite differences in traditions and backgrounds, the school community stood together in believing in one God who teaches love, faith, forgiveness, humility, unity, and compassion.',
      'More than just a school activity, the Bible Month Culmination became a meaningful opportunity for students to strengthen their faith, appreciate shared Christian values, and grow together spiritually as one school community.',
    ],
  },
  {
    title: 'Philippians Academy Celebrates United Nations Celebration 2025',
    subtitle: 'Showcasing Unity, Culture, and Global Friendship',
    category: 'United Nations Celebration',
    image: unitedNationsImage,
    galleryImages: [
      unitedNationsGallery1,
      unitedNationsGallery2,
      unitedNationsGallery3,
    ],
    paragraphs: [
      'Philippians Academy of Parañaque Inc. proudly celebrated its United Nations Celebration 2025, a joyful and colorful event that highlighted cultural diversity, global unity, and the beauty of nations around the world.',
      'The celebration was filled with excitement, creativity, and pride as students showcased different countries through their vibrant costumes, cultural performances, and informative presentations. Learners confidently represented various nations, demonstrating not only their talents and creativity but also their appreciation for the rich cultures and traditions of the world.',
      'Students from different grade levels actively participated in the event, bringing the celebration to life through music, dances, speeches, and cultural displays. The school campus was transformed into a lively and meaningful showcase of international unity, friendship, and understanding.',
      'More than just a cultural presentation, the activity reminded students of the importance of peace, respect, cooperation, and compassion among people of different backgrounds and nationalities. Through the celebration, learners gained a deeper appreciation of diversity while recognizing that despite cultural differences, people can stand together in harmony and mutual respect.',
      'The event also reflected the school\'s Christian values by emphasizing God\'s love for all nations and encouraging students to become compassionate, open-minded, and globally aware individuals.',
      'Teachers, parents, and school administrators proudly witnessed the confidence, creativity, and enthusiasm of every Philippians learner throughout the celebration. Each student truly shone brightly as they celebrated unity, peace, and cultural appreciation together as one school community.',
      'Philippians Academy continues to provide meaningful learning experiences that help students grow academically, socially, spiritually, and culturally while preparing them to become responsible citizens of the world.',
    ],
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
              <p className="campus-label">Faith &bull; Friendship &bull; Leadership &bull; Service</p>
              <h1>Campus Life at Philippians</h1>
              <p>
                Student life at Philippians Academy nurtures joyful learning, Christ-centered values, meaningful friendships, and purposeful experiences beyond the classroom.
              </p>
            </div>
          </div>

          <div className="campus-stories">
            {campusStories.map((story) => (
              <article className="campus-story" key={story.title}>
                <figure className="campus-story-featured">
                  <OptimizedImage
                    image={story.image}
                    alt={`${story.title} at Philippians Academy`}
                    sizes="(max-width: 760px) 100vw, 50vw"
                  />
                </figure>
                <div className="campus-story-content">
                  <p className="campus-story-kicker">{story.category}</p>
                  <h2>{story.title}</h2>
                  <p className="campus-story-subtitle">{story.subtitle}</p>
                  {story.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <div className="campus-story-gallery" aria-label={`${story.title} photo gallery`}>
                    {story.galleryImages.map((image, index) => (
                      <figure key={image.src}>
                        <OptimizedImage
                          image={image}
                          alt={`${story.title} gallery photo ${index + 1}`}
                          sizes="(max-width: 760px) 50vw, 25vw"
                        />
                      </figure>
                    ))}
                  </div>
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
