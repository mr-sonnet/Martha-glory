import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Martha Glory Kartaoui | Author, Speaker & Trauma-Informed Facilitator",
  description:
    "Meet Martha Glory Kartaoui—cult survivor, bestselling author, keynote speaker, and founder of Trauma-X and the Unbound movement.",
};

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Martha Glory home">
          <span>Martha</span> Glory
        </a>
        <nav aria-label="Main navigation">
          <a href="#story">Her story</a>
          <a href="#work">Work with Martha</a>
          <a href="#unbound">Unbound</a>
          <a href="#book">Book</a>
        </nav>
        <a className="button button-small" href="mailto:martha@letgloryshine.com">
          Book Martha <Arrow />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-photo" role="img" aria-label="Martha overlooking the Blue Ridge Mountains" />
        <div className="hero-wash" />
        <div className="hero-copy">
          <p className="eyebrow">Cult survivor · Author · Speaker · Facilitator</p>
          <h1>
            Your past is part
            <br />
            of your story.
            <br />
            <em>It is not your ending.</em>
          </h1>
          <p className="hero-intro">
            Martha Glory Kartaoui walks alongside survivors and freedom-seekers
            as they reclaim identity, reconnect with purpose, and rise into a
            life that feels fully their own.
          </p>
          <div className="hero-actions">
            <a className="button" href="#work">
              Find your next step <Arrow />
            </a>
            <a className="text-link" href="#story">
              Meet Martha <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <p className="hero-side-note">From surviving to living unbound</p>
      </section>

      <section className="marquee" aria-label="Martha's focus areas">
        <div>
          <span>Feel.</span><i>✦</i><span>Release.</span><i>✦</i><span>Heal.</span><i>✦</i>
          <span>Reclaim.</span><i>✦</i><span>Rise.</span>
        </div>
      </section>

      <section className="story section" id="story">
        <div className="section-kicker">
          <span>01</span>
          <p>Meet Martha Glory</p>
        </div>
        <div className="story-grid">
          <div className="story-lede">
            <p className="display-quote">
              “You don’t heal in isolation.
              <br />
              <em>You heal in community.”</em>
            </p>
          </div>
          <div className="story-body">
            <p className="lead">
              Martha knows what it means to rebuild a life after control,
              secrecy, and trauma.
            </p>
            <p>
              After escaping a cult at 25, she spent years reclaiming her own
              identity and learning how trauma can live across mind, body, and
              spirit. That lived experience now meets professional training in
              her work as a certified life, health, and spiritual coach,
              trauma-informed event facilitator, and dynamic speaker.
            </p>
            <p>
              Her work is candid, faith-rooted, and deeply human. She creates
              spaces where people can feel seen without judgment, reconnect to
              their own wisdom, and take the next courageous step.
            </p>
            <div className="credentials">
              <span>Amazon bestselling international author</span>
              <span>Keynote & motivational speaker</span>
              <span>Trauma-informed facilitator</span>
              <span>Nervous system + energy regulation</span>
            </div>
          </div>
        </div>
      </section>

      <section className="work section dark" id="work">
        <div className="section-kicker light">
          <span>02</span>
          <p>Ways to work together</p>
        </div>
        <div className="work-heading">
          <h2>Healing takes courage.<br /><em>You don’t have to do it alone.</em></h2>
          <p>
            Choose the room, rhythm, and level of support that meets you where
            you are now.
          </p>
        </div>
        <div className="service-list">
          <a href="mailto:martha@letgloryshine.com?subject=Keynote%20Speaking%20Inquiry">
            <span className="service-number">01</span>
            <span>
              <strong>Keynote Speaking</strong>
              <small>Stories that move audiences from pain toward possibility.</small>
            </span>
            <b>↗</b>
          </a>
          <a href="mailto:martha@letgloryshine.com?subject=Workshop%20Facilitation%20Inquiry">
            <span className="service-number">02</span>
            <span>
              <strong>Healing Workshops</strong>
              <small>Trauma-informed experiences built around safety, expression, and connection.</small>
            </span>
            <b>↗</b>
          </a>
          <a href="https://unboundcommunity.com/" target="_blank" rel="noreferrer">
            <span className="service-number">03</span>
            <span>
              <strong>Group Coaching + Mentorship</strong>
              <small>Consistent support inside Unbound — The Collective.</small>
            </span>
            <b>↗</b>
          </a>
          <a href="mailto:martha@letgloryshine.com?subject=Event%20Collaboration%20Inquiry">
            <span className="service-number">04</span>
            <span>
              <strong>Panels, Fireside Chats + Retreats</strong>
              <small>A grounded voice and skilled guide for meaningful gatherings.</small>
            </span>
            <b>↗</b>
          </a>
        </div>
      </section>

      <section className="unbound section" id="unbound">
        <div className="section-kicker">
          <span>03</span>
          <p>The movement</p>
        </div>
        <div className="unbound-title">
          <p>Presented by Martha Glory</p>
          <h2>UNBOUND</h2>
          <div>
            <strong>Feel.</strong><strong>Release.</strong><strong>Heal.</strong>
          </div>
        </div>
        <div className="unbound-layout">
          <div className="event-card">
            <img src="/unbound-audience.webp" alt="A speaker addressing the Unbound community" />
            <div className="event-date">
              <span>AUG</span>
              <strong>21—23</strong>
              <span>2026</span>
            </div>
          </div>
          <div className="event-copy">
            <p className="eyebrow">Raleigh, North Carolina</p>
            <h3>Three unforgettable days. One room built for transformation.</h3>
            <p>
              Unbound is more than an event. It is an immersive movement of
              healing, faith, freedom, and becoming—with soul-stirring speakers,
              transformative workshops, shared meals, and experiences that
              invite you back into your own power.
            </p>
            <ul>
              <li>Dynamic speakers and intimate conversations</li>
              <li>Trauma-informed workshops and immersive experiences</li>
              <li>Friday evening dinner + show</li>
              <li>One month inside Unbound — The Collective included</li>
            </ul>
            <a className="button coral" href="https://unboundcommunity.com/nc" target="_blank" rel="noreferrer">
              Explore Unbound NC <Arrow />
            </a>
          </div>
        </div>
        <div className="community-strip">
          <img src="/unbound-panel.webp" alt="Martha facilitating a panel at Unbound" />
          <img src="/unbound-sign.jpg" alt="Unbound event sign reading Feel, Release, Heal" />
          <img src="/unbound-community.jpg" alt="Members of the Unbound community together" />
        </div>
        <div className="collective-callout">
          <p className="eyebrow">Between the gatherings</p>
          <h3>Unbound — The Collective</h3>
          <p>
            A year-round online community with live group sessions, grounding
            practices, encouragement, event preparation, and post-event
            integration. Because freedom is not a moment—it is a movement.
          </p>
          <a className="text-link" href="https://unboundcommunity.com/" target="_blank" rel="noreferrer">
            Join the Collective <Arrow />
          </a>
        </div>
      </section>

      <section className="book section" id="book">
        <div className="book-image">
          <img src="/martha-book-signing.webp" alt="Martha signing copies of Glory: Going All In" />
        </div>
        <div className="book-copy">
          <p className="eyebrow">The bestselling memoir</p>
          <h2>GLORY:<br /><em>Going All In</em></h2>
          <p className="subtitle">Cult Survivor to Courageous Warrior</p>
          <blockquote>
            “Our trauma doesn’t have to define us. We get to rewrite our story
            at any time—but it is a choice, and it has to be intentional.”
          </blockquote>
          <p>
            In her deeply personal story, Martha traces the road from
            oppression and silence to healing, self-worth, and purpose—a
            reminder that no one is alone in their pain.
          </p>
          <div className="book-actions">
            <a className="button" href="https://amzn.to/3AvHcUi" target="_blank" rel="noreferrer">
              Get the book <Arrow />
            </a>
            <a className="text-link" href="https://journeysdream.org/martha-glory-kartaoui-author-of-glory-going-all-in-cult-survivor-to-courageous-warrior/" target="_blank" rel="noreferrer">
              Watch Martha’s interview <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section className="testimonials section">
        <div className="section-kicker">
          <span>04</span>
          <p>In their words</p>
        </div>
        <div className="testimonial-grid">
          <blockquote>
            <span>“</span>
            <p>
              Martha’s ability to create a safe space and allow for healing and
              sharing was nothing short of amazing. I feel like I began a
              deeper healing than I knew possible.
            </p>
            <cite>— A.W., workshop attendee</cite>
          </blockquote>
          <blockquote>
            <span>“</span>
            <p>
              I walked into Unbound carrying pieces of myself I had kept
              hidden. I left them there in that room. I am leaving lighter,
              braver, and whole.
            </p>
            <cite>— Joyce B., Unbound attendee</cite>
          </blockquote>
          <blockquote>
            <span>“</span>
            <p>
              It’s been life-changing getting to work with Martha. She meets
              you where you are and becomes your biggest cheerleader.
            </p>
            <cite>— Alex N., coaching client</cite>
          </blockquote>
        </div>
      </section>

      <section className="cta">
        <div>
          <p className="eyebrow">Your next chapter can start here</p>
          <h2>Ready to move from<br /><em>surviving to rising?</em></h2>
        </div>
        <div className="cta-actions">
          <a className="button cream" href="mailto:martha@letgloryshine.com">
            Start a conversation <Arrow />
          </a>
          <a href="https://www.instagram.com/marthatripp79" target="_blank" rel="noreferrer">
            Follow Martha on Instagram <Arrow />
          </a>
        </div>
      </section>

      <footer>
        <a className="wordmark footer-mark" href="#top"><span>Martha</span> Glory</a>
        <p>Author · Speaker · Cult Survivor · Trauma-Informed Facilitator</p>
        <div>
          <a href="mailto:martha@letgloryshine.com">Email</a>
          <a href="https://www.instagram.com/marthatripp79" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.linkedin.com/in/martha-kartaoui-44318893" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://trauma-x.org/" target="_blank" rel="noreferrer">Trauma-X</a>
        </div>
        <small>© 2026 Martha Glory Kartaoui. All rights reserved.</small>
      </footer>
    </main>
  );
}
