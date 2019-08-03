import React from 'react';
import PropTypes from 'prop-types';

import Product from '../Product/Product';

const ProductList = ({ products }) => (
    products.map(product => (
        <Product
            key={product.id}
            title={product.title}
            price={product.price}
            pictures={product.pictures}
        />
    ))
);

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductList;
