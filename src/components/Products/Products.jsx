import { motion } from 'framer-motion';
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './Products.module.css';

const PRODUCTS = [
  {
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=500&q=80',
    name: 'Bridal Bouquet',
    price: '$49.00',
    rating: 5,
  },
  {
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&q=80',
    name: 'Elegant Chair',
    price: '$129.00',
    rating: 4,
  },
  {
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&q=80',
    name: 'Hair Accessories',
    price: '$35.00',
    oldPrice: '$45.00',
    rating: 5,
  },
  {
    image: 'https://images.unsplash.com/photo-1594122230689-45899d9e6f69?w=500&q=80',
    name: 'Wedding Dress',
    price: '$299.00',
    rating: 4,
  },
];

function StarRating({ rating }) {
  return (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= rating ? styles.star : styles.starEmpty}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Products() {
  return (
    <section className={styles.products} id="products">
      <SectionTitle
        title="Recomended Products"
        subtitle="Lorem ipsum dolor sit amet, consectetuer gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem niuis sed odio sit amet nibh"
      />
      <div className={styles.grid}>
        {PRODUCTS.map((product, i) => (
          <motion.div
            key={product.name}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className={styles.imageWrapper}>
              <img
                src={product.image}
                alt={product.name}
                className={styles.image}
                loading="lazy"
              />
              <div className={styles.overlay}>
                <button className={styles.addToCart}>Add to Cart</button>
              </div>
            </div>
            <h3 className={styles.name}>{product.name}</h3>
            <StarRating rating={product.rating} />
            <p className={styles.price}>
              {product.oldPrice && (
                <span className={styles.oldPrice}>{product.oldPrice}</span>
              )}
              {product.price}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
