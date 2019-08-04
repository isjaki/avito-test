import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazy-load';

import styles from './ProductPicture.css';

const ProductPicture = ({ pictures }) => (
    <div className={styles.productPicture}>
        <LazyLoad offsetVertical={document.documentElement.clientHeight}>
            <img alt="product" src={pictures[0]} />
        </LazyLoad>
        <div className={styles.additionalPicturesNumber}><span>+{pictures.length - 1}</span></div>
    </div>
);

ProductPicture.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProductPicture;
