import styles from './FooterWidgets.module.css';

const INSTAGRAM_IMAGES = [
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=150&q=80',
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=150&q=80',
  'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=150&q=80',
  'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=150&q=80',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=150&q=80',
  'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=150&q=80',
];

export default function FooterWidgets() {
  return (
    <section className={styles.footerWidgets} id="footer-widgets">
      <div className={styles.grid}>
        {/* About Widget */}
        <div>
          <h4 className={styles.widgetTitle}>About</h4>
          <p className={styles.widgetText}>
            Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis
            sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus.
          </p>
          <a href="#" className={styles.widgetLink}>Read More →</a>
        </div>

        {/* Newsletter Widget */}
        <div>
          <h4 className={styles.widgetTitle}>Newsletter</h4>
          <p className={styles.widgetText}>
            Subscribe to our newsletter and stay updated on the latest developments.
          </p>
          <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className={styles.emailInput}
              aria-label="Email address"
            />
            <button type="submit" className={styles.submitBtn}>Subscribe</button>
          </form>
        </div>

        {/* Tweets Widget */}
        <div>
          <h4 className={styles.widgetTitle}>Latest Tweets</h4>
          <div className={styles.tweet}>
            <p className={styles.tweetText}>
              Check out our latest project at <a href="#" className={styles.tweetLink}>@fleur</a> — beautiful wedding designs!
            </p>
            <span className={styles.tweetDate}>2 hours ago</span>
          </div>
          <div className={styles.tweet}>
            <p className={styles.tweetText}>
              New blog post about wedding planning tips is now live. <a href="#" className={styles.tweetLink}>#wedding</a>
            </p>
            <span className={styles.tweetDate}>1 day ago</span>
          </div>
        </div>

        {/* Instagram Widget */}
        <div>
          <h4 className={styles.widgetTitle}>Instagram</h4>
          <div className={styles.instagramGrid}>
            {INSTAGRAM_IMAGES.map((img, i) => (
              <div key={i} className={styles.instagramItem}>
                <img
                  src={img}
                  alt={`Instagram ${i + 1}`}
                  className={styles.instagramImage}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
