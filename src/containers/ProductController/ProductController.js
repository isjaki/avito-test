import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as productControllerActions from '../../store/actions/productController';

import ProductList from '../../components/ProductList/ProductList';
import Spinner from '../../components/UI/Spinner/Spinner';

class ProductController extends Component {
    constructor(props) {
        super(props);
        this.applyFiltersToProducts = this.applyFiltersToProducts.bind(this);
    }

    componentDidMount() {
        const { fetchProducts, retrieveFavoritesFromLocalStorage } = this.props;
        fetchProducts();
        retrieveFavoritesFromLocalStorage();
    }

    applyFiltersToProducts(products) {
        const { category, price, isFavoritesOnly, favoriteProductIds } = this.props;

        return products.filter((product) => {
            let isVisible = true;

            if (category !== 'all') {
                isVisible = product.category === category;
            }

            isVisible = product.price >= price.from
                && product.price <= price.to
                && isVisible;

            if (isFavoritesOnly === true) {
                isVisible = (favoriteProductIds[product.id] === true) && isVisible;
            }

            return isVisible;
        });
    }

    render() {
        const {
            products,
            loading,
            addProductToFavorites,
            removeProductFromFavorites,
            favoriteProductIds,
        } = this.props;

        const filteredProducts = this.applyFiltersToProducts(products);

        console.log('filteredProducts', filteredProducts);

        return loading ? <Spinner />
            : (
                <ProductList
                    products={filteredProducts}
                    addProductToFavorites={addProductToFavorites}
                    removeProductFromFavorites={removeProductFromFavorites}
                    favoriteProductIds={favoriteProductIds}
                />
            );
    }
}

ProductController.propTypes = {
    fetchProducts: PropTypes.func.isRequired,
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.shape({
        from: PropTypes.number,
        to: PropTypes.number,
    }).isRequired,
    isFavoritesOnly: PropTypes.bool.isRequired,
    retrieveFavoritesFromLocalStorage: PropTypes.func.isRequired,
    favoriteProductIds: PropTypes.objectOf(PropTypes.bool).isRequired,
    addProductToFavorites: PropTypes.func.isRequired,
    removeProductFromFavorites: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    products: state.productController.products,
    loading: state.productController.loading,
    favoriteProductIds: state.productController.favoriteProductIds,
    category: state.filters.category,
    price: state.filters.price,
    isFavoritesOnly: state.filters.isFavoritesOnly,
});

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(productControllerActions.fetchProducts()),
    retrieveFavoritesFromLocalStorage: () => dispatch(productControllerActions.retrieveFavoritesFromLocalStorage()),
    addProductToFavorites: productId => dispatch(productControllerActions.addProductToFavorites(productId)),
    removeProductFromFavorites: productId => dispatch(productControllerActions.removeProductFromFavorites(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductController);
