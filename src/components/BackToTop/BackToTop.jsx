import { useState, useEffect } from 'react';
import { FiChevronUp } from 'react-icons/fi';
import styles from './BackToTop.module.css';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`${styles.backToTop} ${visible ? styles.visible : styles.hidden}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <FiChevronUp />
    </button>
  );
}
