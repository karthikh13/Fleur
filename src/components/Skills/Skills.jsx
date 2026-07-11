import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import styles from './Skills.module.css';

const SKILLS = [
  { label: 'Design', percent: 65 },
  { label: 'Marketing', percent: 90 },
  { label: 'Development', percent: 87 },
  { label: 'User Experience', percent: 70 },
];

export default function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <section className={styles.skills} id="skills" ref={ref}>
      <div className={styles.grid}>
        <motion.div
          className={styles.textBlock}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className={styles.heading}>
            Engaging, Creative Page<br />
            And Purposeful Theme.
          </h2>
          <p className={styles.subtitle}>
            Express yourself and your business through this amazing theme
          </p>
          <p className={styles.description}>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis
            dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut
            imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra,
            erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam
            exam.
          </p>
        </motion.div>

        <motion.div
          className={styles.barsBlock}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {SKILLS.map((skill, i) => (
            <div key={skill.label} className={styles.barItem}>
              <div className={styles.barHeader}>
                <span className={styles.barLabel}>{skill.label}</span>
                <span className={styles.barPercent}>{skill.percent}%</span>
              </div>
              <div className={styles.barTrack}>
                <div
                  className={styles.barFill}
                  style={{
                    width: isInView ? `${skill.percent}%` : '0%',
                    transitionDelay: `${i * 0.2}s`,
                  }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
