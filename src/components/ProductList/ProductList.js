import React from 'react';
import PropTypes from 'prop-types';

import Product from '../Product/Product';

const ProductList = ({
    products,
    sellers,
    addProductToFavorites,
    removeProductFromFavorites,
    favoriteProductIds,
}) => (
    products.map(product => {
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
                sellerInfo={sellers[product.relationships.seller]}
                onAddToFavoritesButtonClick={() => onAddToFavoritesButtonClick(product.id)}
            />
        );
    })
);

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
    sellers: PropTypes.objectOf(PropTypes.object).isRequired,
    favoriteProductIds: PropTypes.objectOf(PropTypes.bool).isRequired,
    addProductToFavorites: PropTypes.func.isRequired,
    removeProductFromFavorites: PropTypes.func.isRequired,
};

export default ProductList;
