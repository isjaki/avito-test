import React from 'react';

import styles from './Advert.css';

const Advert = () => (
    <div className={styles.advert}>
        <h2 className={styles.title}>Title</h2>
        <div className={styles.image}>Image</div>
        <p className={styles.price}>Price</p>
        <p className={styles.sellerInfo}>Seller Info</p>
    </div>
);

export default Advert;
