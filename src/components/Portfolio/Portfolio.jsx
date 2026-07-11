import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './Portfolio.module.css';

const FILTERS = ['All', 'Artistic', 'Modern', 'Photography', 'Print'];

const PORTFOLIO_ITEMS = [
  { image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&q=80', title: 'Elegant Bride', category: 'Artistic' },
  { image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=500&q=80', title: 'Flower Decor', category: 'Modern' },
  { image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=500&q=80', title: 'Wedding Bouquet', category: 'Photography' },
  { image: 'https://images.unsplash.com/photo-1594122230689-45899d9e6f69?w=500&q=80', title: 'Lace Detail', category: 'Print' },
  { image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=500&q=80', title: 'Outdoor Setup', category: 'Modern' },
  { image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=500&q=80', title: 'Blue Fabric', category: 'Artistic' },
  { image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=500&q=80', title: 'White Ruffles', category: 'Photography' },
  { image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80', title: 'Chair Decor', category: 'Print' },
];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');

  const filtered =
    filter === 'All'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === filter);

  return (
    <section className={styles.portfolio} id="portfolio">
      <div className={styles.portfolioBg} />
      <div className={styles.inner}>
        <SectionTitle
          title="Our Amazing Work"
          subtitle="Lorem ipsum dolor sit amet, consectetuer gravida nibh vel velit auctor aliquel. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem niuis sed odio sit amet nibh"
        />

        <div className={styles.filters}>
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`${styles.filterBtn} ${filter === f ? styles.filterBtnActive : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div className={styles.grid} layout>
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.div
                key={item.title}
                className={styles.item}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.itemImage}
                  loading="lazy"
                />
                <div className={styles.itemOverlay}>
                  <span className={styles.itemTitle}>{item.title}</span>
                  <span className={styles.itemCategory}>{item.category}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
