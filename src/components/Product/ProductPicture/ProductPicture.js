import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductPicture.css';

const ProductPicture = ({ pictures }) => (
    <div className={styles.productPicture}>
        <img
            alt="product"
            src={pictures[0]}
        />
        <div className={styles.additionalPicturesNumber}><span>+{pictures.length - 1}</span></div>
    </div>
);

ProductPicture.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProductPicture;
