import { motion } from 'framer-motion';
import { FiTwitter, FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './Team.module.css';

const TEAM = [
  {
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    name: 'CYNTHIA FOWLER',
    role: 'Senior Designer',
    bio: '"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt itudin, lorem quis bibendum auctor, nisi elit consequat ipsutis sem nibh id elit."',
  },
  {
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    name: 'CYNTHIA FOWLER',
    role: 'Marketing Manager',
    bio: '"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt itudin, lorem quis bibendum auctor, nisi elit consequat ipsutis sem nibh id elit."',
  },
  {
    avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&q=80',
    name: 'CYNTHIA FOWLER',
    role: 'PR Manager',
    bio: '"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt itudin, lorem quis bibendum auctor, nisi elit consequat ipsutis sem nibh id elit."',
  },
];

export default function Team() {
  return (
    <section className={styles.team} id="team">
      <SectionTitle
        title="Our Amazing Team"
        subtitle="Lorem ipsum dolor sit amet, consectetuer gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem niuis sed odio sit amet nibh"
      />
      <div className={styles.grid}>
        {TEAM.map((member, i) => (
          <motion.div
            key={`${member.name}-${member.role}`}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <img
              src={member.avatar}
              alt={member.name}
              className={styles.avatar}
              loading="lazy"
            />
            <h3 className={styles.name}>{member.name}</h3>
            <p className={styles.role}>{member.role}</p>
            <p className={styles.bio}>{member.bio}</p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialIcon} aria-label="Twitter"><FiTwitter /></a>
              <a href="#" className={styles.socialIcon} aria-label="Facebook"><FiFacebook /></a>
              <a href="#" className={styles.socialIcon} aria-label="Instagram"><FiInstagram /></a>
              <a href="#" className={styles.socialIcon} aria-label="LinkedIn"><FiLinkedin /></a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
