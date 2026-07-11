import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './Carousel.module.css';

const CAROUSEL_ITEMS = [
  {
    image: 'https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?w=600&q=80',
    title: 'Connect Your Worlds',
  },
  {
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
    title: 'Choose Your Style',
  },
  {
    image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600&q=80',
    title: 'Wedding Lists',
  },
  {
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80',
    title: 'Something Special',
  },
  {
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80',
    title: 'Dream Wedding',
  },
];

export default function Carousel() {
  const [offset, setOffset] = useState(0);
  const maxOffset = Math.max(0, CAROUSEL_ITEMS.length - 3);

  const next = () => setOffset((prev) => Math.min(prev + 1, maxOffset));
  const prev = () => setOffset((prev) => Math.max(prev - 1, 0));

  const translateValue = offset * (100 / 3 + 2.6);

  return (
    <section className={styles.carousel} id="carousel">
      <div className={styles.carouselBg} />
      <div className={styles.carouselInner}>
        <SectionTitle
          title="We're Sharing Everything"
          subtitle="Lorem ipsum dolor sit amet, consectetuer a gravida nibhumus vel velit auctor aliquet aenean sollicitudin lorem."
        />

        <div className={styles.sliderWrapper}>
          <button
            className={`${styles.arrowButton} ${styles.arrowLeft}`}
            onClick={prev}
            aria-label="Previous"
          >
            <FiArrowLeft />
          </button>

          <div
            className={styles.sliderTrack}
            style={{ transform: `translateX(-${translateValue}%)` }}
          >
            {CAROUSEL_ITEMS.map((item, i) => (
              <motion.div
                key={item.title}
                className={styles.slideItem}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className={styles.slideImageWrapper}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={styles.slideImage}
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <button
            className={`${styles.arrowButton} ${styles.arrowRight}`}
            onClick={next}
            aria-label="Next"
          >
            <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
