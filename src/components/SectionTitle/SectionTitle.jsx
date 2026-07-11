import { motion } from 'framer-motion';
import styles from './SectionTitle.module.css';

export default function SectionTitle({ title, subtitle, white = false, className = '' }) {
  return (
    <div className={`${styles.title} ${white ? styles.white : ''} ${className}`}>
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>
      <motion.div
        className={styles.divider}
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span className={styles.dividerLine}></span>
        <span className={styles.dividerDiamond}></span>
        <span className={styles.dividerLine}></span>
      </motion.div>
      {subtitle && (
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
