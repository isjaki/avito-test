import React from 'react';
import PropTypes from 'prop-types';

import Product from '../Product/Product';

const ProductList = ({
    products,
    addProductToFavorites,
    removeProductFromFavorites,
    favoriteProductIds,
}) => (
    products.map((product) => {
        const isProductFavorite = favoriteProductIds[product.id] === true;
        const onAddToFavoritesButtonClick = isProductFavorite
            ? removeProductFromFavorites
            : addProductToFavorites;

        return (
            <Product
                key={product.id}
                title={product.title}
                price={product.price}
                pictures={product.pictures}
                isProductFavorite={isProductFavorite}
                onAddToFavoritesButtonClick={() => onAddToFavoritesButtonClick(product.id)}
            />
        );
    })
);

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
    addProductToFavorites: PropTypes.func.isRequired,
    removeProductFromFavorites: PropTypes.func.isRequired,
    favoriteProductIds: PropTypes.func.isRequired,
};

export default ProductList;
