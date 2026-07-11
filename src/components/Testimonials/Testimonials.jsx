import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './Testimonials.module.css';

const TESTIMONIALS = [
  {
    quote: '"Lorem ipsum dolor sit amet, consectetuer gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem niuis sed odio sit amet nibh vulputate cursus a sit amet mauris."',
    author: 'SARAH JOHNSON',
    role: 'Wedding Planner',
  },
  {
    quote: '"Lorem ipsum dolor sit amet, consectetuer gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem niuis sed odio sit amet nibh vulputate cursus a sit amet mauris."',
    author: 'DANIEL MITCHELL',
    role: 'Google Analytics',
  },
  {
    quote: '"Lorem ipsum dolor sit amet, consectetuer gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem niuis sed odio sit amet nibh vulputate cursus a sit amet mauris."',
    author: 'EMILY CLARK',
    role: 'Creative Director',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.testimonials} id="testimonials">
      <SectionTitle title="Testimonials" />
      <div className={styles.inner}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
          >
            <p className={styles.quote}>{TESTIMONIALS[current].quote}</p>
            <p className={styles.author}>{TESTIMONIALS[current].author}</p>
            <p className={styles.role}>{TESTIMONIALS[current].role}</p>
          </motion.div>
        </AnimatePresence>
        <div className={styles.dots}>
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
