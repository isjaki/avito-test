import React from 'react';

import Products from '../../containers/Products/Products';
import styles from './ProductWrapper.css';

const ProductWrapper = () => (
    <main className={styles.productWrapper}>
        <Products />
    </main>
);

export default ProductWrapper;
