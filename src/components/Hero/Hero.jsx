import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import styles from './Hero.module.css';

const SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80',
    heading: 'THIS IS BEAUTY',
    subtitle: 'Designed with love & care, Fleur is all you ever wanted',
    description: 'Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor elit. Duis sed odio sit amet nibh',
  },
  {
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1920&q=80',
    heading: 'SIMPLY CHARMING',
    subtitle: 'Full of amazing templates and layouts',
    description: 'Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor elit. Duis sed odio sit amet nibh',
  },
  {
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1920&q=80',
    heading: 'PURE ELEGANCE',
    subtitle: 'Make your special day truly unforgettable',
    description: 'Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor elit. Duis sed odio sit amet nibh',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slide = SLIDES[current];

  return (
    <section className={styles.hero} id="hero">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className={styles.slide}
          style={{ backgroundImage: `url(${slide.image})` }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className={styles.slideOverlay} />
        </motion.div>
      </AnimatePresence>

      <div className={styles.content}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className={styles.heading}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {slide.heading}
            </motion.h1>
            <motion.p
              className={styles.subtitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {slide.subtitle}
            </motion.p>
            <motion.p
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {slide.description}
            </motion.p>
            <motion.button
              className={styles.ctaButton}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              PURCHASE
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className={styles.sliderArrows}>
        <button className={styles.arrowBtn} onClick={prevSlide} aria-label="Previous slide">
          <FiChevronLeft />
        </button>
        <button className={styles.arrowBtn} onClick={nextSlide} aria-label="Next slide">
          <FiChevronRight />
        </button>
      </div>

      <div className={styles.sliderNav}>
        <span className={styles.sliderFraction}>{current + 1} / {SLIDES.length}</span>
      </div>
    </section>
  );
}
