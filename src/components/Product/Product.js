import React from 'react';
import PropTypes from 'prop-types';

import RatingWidget from '../UI/RatingWidget/RatingWidget';
import Button from '../UI/Button/Button';
import styles from './Product.css';

const Product = ({ title, price, pictures }) => (
    <div className={styles.product}>
        <div className={styles.imageContainer}>
            <img
                alt="product"
                src={pictures[0]}
            />
            <div className={styles.additionalPhotos}><span>+{pictures.length - 1}</span></div>
        </div>
        <div className={styles.mainInfo}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.price}>{price} &#8381;</p>
            <p className={styles.sellerInfo}>
                Вольво-центр Юг <RatingWidget rating={4.5} />
            </p>
        </div>
        <Button buttonType="addToFavorites" />
    </div>
);

Product.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Product;
