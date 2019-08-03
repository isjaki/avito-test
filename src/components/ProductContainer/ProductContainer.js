import React from 'react';

import AdvertController from '../../containers/ProductController/ProductController';
import styles from './ProductContainer.css';

const ProductContainer = () => (
    <main className={styles.productContainer}>
        <AdvertController />
    </main>
);

export default ProductContainer;
