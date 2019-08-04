import React from 'react';

import ProductController from '../../containers/ProductController/ProductController';
import styles from './ProductContainer.css';

const ProductContainer = () => (
    <main className={styles.productContainer}>
        <ProductController />
    </main>
);

export default ProductContainer;
