import { motion } from 'framer-motion';
import styles from './Clients.module.css';

const CLIENT_NAMES = [
  'BRAND ONE',
  'BRAND TWO',
  'BRAND THREE',
  'BRAND FOUR',
  'BRAND FIVE',
];

export default function Clients() {
  return (
    <section className={styles.clients} id="clients">
      <motion.div
        className={styles.track}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {CLIENT_NAMES.map((name) => (
          <span key={name} className={styles.logo}>{name}</span>
        ))}
      </motion.div>
    </section>
  );
}
