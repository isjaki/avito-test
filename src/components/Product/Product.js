import React from 'react';
import PropTypes from 'prop-types';

import ProductSellerInfo from './ProductSellerInfo/ProductSellerInfo';
import ProductPicture from './ProductPicture/ProductPicture';
import ProductPrice from './ProductPrice/ProductPrice';
import Button from '../UI/Button/Button';
import styles from './Product.css';

const Product = ({
    title,
    price,
    pictures,
    sellerInfo,
    isProductFavorite,
    onAddToFavoritesButtonClick,
}) => (
    <div className={styles.product}>
        <ProductPicture pictures={pictures} />
        <div className={styles.mainInfo}>
            <h2 className={styles.title}>{title}</h2>
            <ProductPrice price={price} />
            <ProductSellerInfo name={sellerInfo.name} rating={sellerInfo.rating} />
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
    sellerInfo: PropTypes.shape({
        name: PropTypes.string,
        rating: PropTypes.number,
    }).isRequired,
    isProductFavorite: PropTypes.bool.isRequired,
    onAddToFavoritesButtonClick: PropTypes.func.isRequired,
};

export default Product;
