import React from 'react';
import PropTypes from 'prop-types';

import RatingWidget from '../../UI/RatingWidget/RatingWidget';
import styles from './ProductSellerInfo.css';

const ProductSellerInfo = ({ name, rating }) => (
    <p className={styles.productSellerInfo}>
        {name} <RatingWidget rating={rating} />
    </p>
);

ProductSellerInfo.propTypes = {
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
};

export default ProductSellerInfo;
