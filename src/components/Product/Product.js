import React from 'react';
import PropTypes from 'prop-types';

import ProductPicture from './ProductPicture/ProductPicture';
import ProductPrice from './ProductPrice/ProductPrice';
import RatingWidget from '../UI/RatingWidget/RatingWidget';
import Button from '../UI/Button/Button';
import styles from './Product.css';

const Product = ({
    title,
    price,
    pictures,
    isProductFavorite,
    onAddToFavoritesButtonClick,
}) => (
    <div className={styles.product}>
        <ProductPicture pictures={pictures} />
        <div className={styles.mainInfo}>
            <h2 className={styles.title}>{title}</h2>
            <ProductPrice price={price} />
            <p className={styles.sellerInfo}>
                Вольво-центр Юг <RatingWidget rating={4.5} />
            </p>
        </div>
        <Button
            buttonType="addToFavorites"
            isActive={isProductFavorite}
            onClick={onAddToFavoritesButtonClick}
        />
    </div>
);

Product.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
    isProductFavorite: PropTypes.bool.isRequired,
    onAddToFavoritesButtonClick: PropTypes.func.isRequired,
};

export default Product;
