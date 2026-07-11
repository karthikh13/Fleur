import { motion } from 'framer-motion';
import { FiGlobe, FiSend, FiHeart } from 'react-icons/fi';
import styles from './Features.module.css';

const FEATURES = [
  {
    icon: <FiGlobe />,
    title: "Discover What's Possible",
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis.',
  },
  {
    icon: <FiSend />,
    title: 'People Really Matter',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis.',
  },
  {
    icon: <FiHeart />,
    title: 'Having A Plan Feels Good',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

export default function Features() {
  return (
    <section className={styles.features} id="features">
      <div className={styles.grid}>
        {FEATURES.map((feature, i) => (
          <motion.div
            key={feature.title}
            className={styles.card}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className={styles.icon}>{feature.icon}</div>
            <h3 className={styles.cardTitle}>{feature.title}</h3>
            <p className={styles.cardText}>{feature.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
