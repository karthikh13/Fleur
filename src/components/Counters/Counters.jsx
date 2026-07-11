import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiSend, FiHeart, FiTarget } from 'react-icons/fi';
import { useInView } from '../../hooks/useInView';
import styles from './Counters.module.css';

const COUNTERS = [
  { icon: <FiStar />, target: 168, label: 'Design' },
  { icon: <FiSend />, target: 2590, label: 'Marketing' },
  { icon: <FiHeart />, target: 347, label: 'Development' },
  { icon: <FiTarget />, target: 191, label: 'User Experience' },
];

function AnimatedCounter({ target, isInView }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!isInView || started.current) return;
    started.current = true;

    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span>{count}</span>;
}

export default function Counters() {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <section className={styles.counters} id="counters" ref={ref}>
      <div className={styles.grid}>
        {COUNTERS.map((counter, i) => (
          <motion.div
            key={counter.label}
            className={styles.item}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className={styles.icon}>{counter.icon}</div>
            <div className={styles.number}>
              <AnimatedCounter target={counter.target} isInView={isInView} />
            </div>
            <div className={styles.label}>{counter.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
