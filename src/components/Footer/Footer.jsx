import { FiTwitter, FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';
import styles from './Footer.module.css';

const FOOTER_LINKS = ['Home', 'Pages', 'Portfolio', 'Blog', 'Shop', 'Elements'];

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <a href="#" className={styles.logo}>
        fleur<span className={styles.logoFlower}>✿</span>
      </a>

      <nav className={styles.footerLinks}>
        {FOOTER_LINKS.map((link) => (
          <a key={link} href="#" className={styles.footerLink}>{link}</a>
        ))}
      </nav>

      <p className={styles.copyright}>
        © 2024 <a href="#" className={styles.copyrightLink}>Qode Interactive</a>, All Rights Reserved
      </p>

      <div className={styles.socials}>
        <a href="#" className={styles.socialIcon} aria-label="Twitter"><FiTwitter /></a>
        <a href="#" className={styles.socialIcon} aria-label="Facebook"><FiFacebook /></a>
        <a href="#" className={styles.socialIcon} aria-label="Instagram"><FiInstagram /></a>
        <a href="#" className={styles.socialIcon} aria-label="LinkedIn"><FiLinkedin /></a>
      </div>
    </footer>
  );
}
