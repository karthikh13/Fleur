import { motion } from 'framer-motion';
import styles from './Blog.module.css';

const POSTS = [
  {
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80',
    title: 'Choose Your Style',
    excerpt: 'Proin gravida nibh vel veliauctor aliquenean sollicitudiem quis bibendum auctor, nisi elit consequat ipsutis sem...',
    category: 'Decoration',
    date: 'February 24, 2016',
  },
  {
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
    title: 'Wedding Lists',
    excerpt: 'Proin gravida nibh vel veliauctor aliquenean sollicitudiem quis bibendum auctor, nisi elit consequat ipsutis sem...',
    category: 'Design',
    date: 'March 24, 2016',
  },
  {
    image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600&q=80',
    title: 'Something Special',
    excerpt: 'Proin gravida nibh vel veliauctor aliquenean sollicitudiem quis bibendum auctor, nisi elit consequat ipsutis sem...',
    category: 'Planning',
    date: 'April 24, 2016',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

export default function Blog() {
  return (
    <section className={styles.blog} id="blog">
      <div className={styles.grid}>
        {POSTS.map((post, i) => (
          <motion.article
            key={post.title}
            className={styles.card}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className={styles.imageWrapper}>
              <img
                src={post.image}
                alt={post.title}
                className={styles.image}
                loading="lazy"
              />
            </div>
            <div className={styles.content}>
              <h3 className={styles.title}>{post.title}</h3>
              <p className={styles.excerpt}>{post.excerpt}</p>
              <div className={styles.meta}>
                <span className={styles.category}>
                  <span className={styles.categoryDot} />
                  {post.category}
                </span>
                <span className={styles.date}>{post.date}</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
