import { useEffect, useState } from "react";
import heroImage from "./assets/wedding-hero.png";
import logoImage from "./assets/logo-sb.png";
import weddingLoop from "./assets/wedding-loop.mp4";
import gallery01 from "./assets/gallery/couple-01.jpeg";
import gallery02 from "./assets/gallery/couple-02.jpeg";
import gallery03 from "./assets/gallery/couple-03.jpeg";
import gallery04 from "./assets/gallery/couple-04.jpeg";
import gallery05 from "./assets/gallery/couple-05.jpeg";
import gallery06 from "./assets/gallery/couple-06.jpeg";
import gallery07 from "./assets/gallery/couple-07.jpeg";
import gallery08 from "./assets/gallery/couple-08.jpeg";
import gallery09 from "./assets/gallery/couple-09.jpg";
import gallery10 from "./assets/gallery/couple-10.jpeg";
import gallery11 from "./assets/gallery/couple-11.jpeg";
import gallery12 from "./assets/gallery/couple-12.jpeg";
import gallery13 from "./assets/gallery/couple-13.jpeg";
import gallery14 from "./assets/gallery/couple-14.jpeg";
import bhaskar01 from "./assets/gallery/bhaskar-01.jpg";
import bhaskar02 from "./assets/gallery/bhaskar-02.jpg";
import bhaskar03 from "./assets/gallery/bhaskar-03.jpg";
import sayli01 from "./assets/gallery/sayli-01.jpg";
import sayli02 from "./assets/gallery/sayli-02.jpg";
import "./App.css";

const rsvpUrl = "https://sayliandbhaskarwedding.rsvpify.com";

const events = [
  {
    date: "20 Aug",
    theme: "Mehendi",
    time: "4:30 PM onward",
    place: "Garden Courtyard",
    mood: "An intimate evening of henna, family games, folk music, and dinner.",
    accent: "henna",
  },
  {
    date: "21 Aug",
    theme: "Phoolon Ki Haldi",
    time: "11:00 AM onward",
    place: "Poolside Pavilion",
    mood: "A floral celebration with lunch, playful rituals, dance, and dinner.",
    accent: "haldi",
  },
  {
    date: "22 Aug",
    theme: "Traditional Wedding",
    time: "8:30 AM",
    place: "Mandap Terrace",
    mood: "Hindu rituals, family blessings, lunch, and quiet ceremonial moments.",
    accent: "wedding",
  },
  {
    date: "22 Aug",
    theme: "Sangeet & Reception",
    time: "7:00 PM onward",
    place: "Royal Ballroom",
    mood: "Performances, DJ, dinner, reception toasts, and the after party.",
    accent: "sangeet",
  },
];

const highlights = [
  "Curated rituals across three days",
  "Floral, candlelit, and palace-inspired styling",
  "Music, games, dance, dinner, and after party",
];

const gallery = [
  {
    image: gallery03,
    title: "City lights and rain",
    caption: "A cinematic evening portrait under the umbrella.",
  },
  {
    image: gallery01,
    title: "Ceremony warmth",
    caption: "Soft lamps, ivory outfits, and the first glow of celebration.",
  },
  {
    image: gallery02,
    title: "Garden day out",
    caption: "Greenhouse colors, laughter, and a travel-story mood.",
  },
  {
    image: gallery04,
    title: "Quiet bridge moment",
    caption: "A relaxed portrait with soft light and wooden textures.",
  },
  {
    image: gallery05,
    title: "Giant chair smiles",
    caption: "A playful stop with bright color and easy laughter.",
  },
  {
    image: gallery06,
    title: "Blossom heart",
    caption: "A sunny spring memory framed by flowers.",
  },
  {
    image: gallery07,
    title: "Bridge daydream",
    caption: "A wide, quiet moment with sky, wood, and open air.",
  },
  {
    image: gallery08,
    title: "Blossom selfie",
    caption: "A close spring moment with sunshine and soft petals.",
  },
  {
    image: gallery09,
    title: "Dance floor smiles",
    caption: "A casual rehearsal memory full of movement and warmth.",
  },
  {
    image: gallery10,
    title: "Balcony afternoon",
    caption: "Fresh greens, easy smiles, and a calm pause.",
  },
  {
    image: gallery11,
    title: "Open-road selfie",
    caption: "A breezy travel memory with a little adventure.",
  },
  {
    image: gallery12,
    title: "Evening sparkle",
    caption: "A dressed-up night with lights made for celebration.",
  },
  {
    image: gallery13,
    title: "Together, simply",
    caption: "A close portrait with warmth and softness.",
  },
  {
    image: gallery14,
    title: "Festive colors",
    caption: "A joyful traditional look for the wedding weekend story.",
  },
  {
    image: sayli01,
    title: "Sayli",
    caption: "A quiet portrait among blossoms and pages.",
  },
  {
    image: sayli02,
    title: "Sayli in bloom",
    caption: "A soft floral portrait with a city-stroll feeling.",
  },
  {
    image: bhaskar01,
    title: "Bhaskar outdoors",
    caption: "A clean daytime portrait surrounded by greenery.",
  },
  {
    image: bhaskar02,
    title: "Bhaskar after dark",
    caption: "A sharp night portrait with neon and rain-glow drama.",
  },
  {
    image: bhaskar03,
    title: "Bhaskar traditional",
    caption: "A traditional portrait with a regal touch.",
  },
];

function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isInviteOpen, setIsInviteOpen] = useState(true);
  const activePhoto = gallery[activeSlide];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % gallery.length);
    }, 4800);

    return () => window.clearInterval(timer);
  }, []);

  const showNextSlide = () => {
    setActiveSlide((current) => (current + 1) % gallery.length);
  };

  const showPreviousSlide = () => {
    setActiveSlide(
      (current) => (current - 1 + gallery.length) % gallery.length,
    );
  };

  return (
    <main>
      {isInviteOpen && (
        <section className="invite-modal" aria-label="Wedding invitation">
          <div className="invite-modal__backdrop" />
          <div
            className="invite-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="invite-title"
          >
            <img
              className="invite-card__logo"
              src={logoImage}
              alt="Sayli and Bhaskar wedding logo"
            />
            <p className="eyebrow">20-22 August</p>
            <h2 id="invite-title">You're Invited!</h2>
            <p>
              Join us in celebrating Sayli and Bhaskar as they begin their
              forever together.
            </p>
            <span>#FromCampusToMandap</span>
            <button
              type="button"
              className="button button--primary"
              onClick={() => setIsInviteOpen(false)}
            >
              Discover the details
            </button>
          </div>
        </section>
      )}

      <section
        className="hero"
        id="top"
        aria-label="Wedding celebration introduction"
      >
        <img
          src={heroImage}
          className="hero__image"
          alt="A flower-filled Indian wedding courtyard at sunset"
        />
        <div className="hero__shade" />
        <a
          className="hero__logo"
          href="#top"
          aria-label="Sayli and Bhaskar wedding home"
        >
          <img src={logoImage} alt="" />
        </a>
        <nav className="nav" aria-label="Primary navigation">
          <a href="#events">Events</a>
          <a href="#story">Story</a>
          <a href="#gallery">Gallery</a>
          <a href="#rsvp">RSVP</a>
          <a href="#location">Location</a>
        </nav>
        <div className="hero__content">
          <p className="eyebrow">20-22 August</p>
          <h1>Sayli & Bhaskar</h1>
          <p className="lede">
            A three-day celebration of color, ritual, music, and family moments,
            imagined with a warmer, more cinematic wedding experience.
          </p>
          <div className="hero__actions" aria-label="Wedding actions">
            <a className="button button--primary" href="#events">
              View events
            </a>
            <a className="button button--ghost" href="#rsvp">
              Save the date
            </a>
          </div>
        </div>
        <div className="hero__strip" aria-label="Celebration highlights">
          {highlights.map((highlight) => (
            <span key={highlight}>{highlight}</span>
          ))}
        </div>
      </section>

      <section className="intro" id="experience">
        <div>
          <p className="eyebrow">The experience</p>
          <h2>A wedding weekend that moves from intimate to unforgettable.</h2>
        </div>
        <div
          className="intro-video"
          aria-label="Wedding celebration video preview"
        >
          <video autoPlay loop muted playsInline>
            <source src={weddingLoop} type="video/mp4" />
          </video>
          <p>
            Celebrate every ritual, dance, and family moment with us.
            #FriendshipToForever
          </p>
        </div>
      </section>

      <section
        className="story"
        id="story"
        aria-label="Sayli and Bhaskar love story"
      >
        <div className="story__mark">
          <img src={logoImage} alt="" />
        </div>
        <div>
          <p className="eyebrow">Love story</p>
          <h2>Across oceans, into the same forever.</h2>
        </div>
        <p>
          She grew up in Pune, and he called Andhra Pradesh home. Though they
          came from different places and different backgrounds, they shared one
          common dream: to build a future filled with opportunities. That dream
          brought them across oceans to the same city, where an unexpected
          meeting turned into friendship, countless conversations, coffee dates,
          and unforgettable memories. What started as a chance encounter slowly
          grew into a beautiful love story, proving that sometimes the longest
          journeys lead us exactly where we're meant to be. And now, as they
          begin their forever together, they invite you to celebrate the next
          chapter of their story.
        </p>
      </section>

      <section
        className="gallery"
        id="gallery"
        aria-label="Sayli and Bhaskar photo slideshow"
      >
        <div className="gallery__copy">
          <p className="eyebrow">Their story</p>
          <h2>Real moments, styled like a keepsake.</h2>
          <p>
            A soft editorial slideshow for Sayli and Bhaskar, blending candid
            travel memories, festive portraits, and little pauses that feel like
            them.
          </p>
        </div>
        <div className="slideshow">
          <div className="slideshow__stage">
            {gallery.map((photo, index) => (
              <img
                className={
                  index === activeSlide
                    ? "slideshow__image is-active"
                    : "slideshow__image"
                }
                src={photo.image}
                alt={`${photo.title} - ${photo.caption}`}
                key={photo.title}
              />
            ))}
            {/* <div className="slideshow__caption">
              <span>
                {String(activeSlide + 1).padStart(2, "0")} /{" "}
                {String(gallery.length).padStart(2, "0")}
              </span>
              <h3>{activePhoto.title}</h3>
              <p>{activePhoto.caption}</p>
            </div> */}
            <div className="slideshow__controls">
              <button
                type="button"
                aria-label="Show previous photo"
                onClick={showPreviousSlide}
              >
                {"<"}
              </button>
              <button
                type="button"
                aria-label="Show next photo"
                onClick={showNextSlide}
              >
                {">"}
              </button>
            </div>
          </div>
          <div className="slideshow__dots" aria-label="Choose a photo">
            {gallery.map((photo, index) => (
              <button
                className={index === activeSlide ? "is-active" : ""}
                type="button"
                aria-label={`Show ${photo.title}`}
                aria-current={index === activeSlide}
                onClick={() => setActiveSlide(index)}
                key={photo.title}
              />
            ))}
          </div>
          <div className="filmstrip" aria-label="Photo preview strip">
            {gallery.slice(0, 6).map((photo, index) => (
              <button
                className={index === activeSlide ? "is-active" : ""}
                type="button"
                onClick={() => setActiveSlide(index)}
                key={`preview-${photo.title}`}
              >
                <img src={photo.image} alt="" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="events" id="events" aria-label="Wedding schedule">
        <div className="section-heading">
          <p className="eyebrow">Ceremony schedule</p>
          <h2>Four celebrations, each with its own rhythm.</h2>
        </div>
        <div className="event-grid">
          {events.map((event, index) => (
            <article
              className={`event-card event-card--${event.accent}`}
              key={event.theme}
            >
              <div className="event-card__number">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <p className="event-card__date">{event.date}</p>
                <h3>{event.theme}</h3>
              </div>
              <dl>
                <div>
                  <dt>Time</dt>
                  <dd>{event.time}</dd>
                </div>
                <div>
                  <dt>Venue</dt>
                  <dd>{event.place}</dd>
                </div>
              </dl>
              <p>{event.mood}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="timeline" aria-label="Wedding journey">
        <div className="section-heading">
          <p className="eyebrow">Guest journey</p>
          <h2>From mehendi laughter to the reception dance floor.</h2>
        </div>
        <ol>
          {events.map((event) => (
            <li key={`${event.date}-${event.theme}`}>
              <span>{event.date}</span>
              <strong>{event.theme}</strong>
              <p>{event.mood}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="details">
        <div className="details__panel">
          <p className="eyebrow">Dress code</p>
          <h2>Festive Indian, floral, and evening formal.</h2>
          <p>
            Choose joyful colors for daytime ceremonies and jewel tones for the
            evening reception. Comfortable footwear is recommended for dance and
            garden venues.
          </p>
        </div>

        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSd1Fv40AE3-zchKNV2CHQBMfo6pK0SGAEcm3w6uzzeMt_eBXg/viewform?embedded=true"
          height="627"
          frameborder="0"
          width="100%"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </section>
      <section className="details" id="rsvp">
        <div className="details__panel details__panel--dark details__panel--rsvp">
          <p className="eyebrow">RSVP</p>
          <h2>Join us for the wedding weekend.</h2>
          <p>
            Share your attendance for each event, meal preferences, and song
            requests so every moment feels considered.
          </p>
          <div className="rsvp-embed">
            <iframe
              title="Sayli and Bhaskar wedding RSVP"
              src={rsvpUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            />
          </div>
          <a
            className="button button--light"
            href={rsvpUrl}
            target="_blank"
            rel="noreferrer"
          >
            Open full RSVP
          </a>
        </div>
      </section>
      <section
        className="details"
        id="location"
        style={{ display: "flex", width: "80%", justifyContent: "center" }}
      >
        {/* <h2>Location</h2> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12435.537472643906!2d-77.64662380229538!3d38.812202717900774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b66613e8cbf987%3A0xf898225f4997dc7c!2sHaymarket%2C%20VA!5e0!3m2!1sen!2sus!4v1782244819848!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </section>
    </main>
  );
}

export default App;
