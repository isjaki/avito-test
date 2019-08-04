import React from 'react';
import PropTypes from 'prop-types';

import { formatPrice } from '../../../helpers/helpers';

import styles from './ProductPrice.css';

const ProductPrice = ({ price }) => (
    <p className={styles.price}>{formatPrice(price.toString())} &#8381;</p>
);

ProductPrice.propTypes = {
    price: PropTypes.number.isRequired,
};

export default ProductPrice;
