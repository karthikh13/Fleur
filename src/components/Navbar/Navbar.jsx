import { useState, useEffect } from 'react';
import { FiShoppingCart, FiSearch } from 'react-icons/fi';
import styles from './Navbar.module.css';

const NAV_ITEMS = ['Home', 'Pages', 'Portfolio', 'Blog', 'Shop', 'Elements'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#" className={styles.logo}>
        fleur<span className={styles.logoFlower}>✿</span>
      </a>

      <ul className={styles.navLinks}>
        {NAV_ITEMS.map((item) => (
          <li key={item}>
            <a href="#" className={styles.navLink}>{item}</a>
          </li>
        ))}
      </ul>

      <div className={styles.navRight}>
        <span className={styles.navIcon}>
          <FiShoppingCart />
          <span className={styles.cartBadge}>0</span>
        </span>
        <span className={styles.navIcon}>
          <FiSearch />
        </span>
        <div className={styles.menuIcon}>
          <span className={styles.menuLine}></span>
          <span className={styles.menuLine}></span>
          <span className={styles.menuLine}></span>
        </div>
      </div>
    </nav>
  );
}
