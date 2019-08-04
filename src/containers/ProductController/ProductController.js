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
        const { fetchProductInfo, retrieveFavoritesFromLocalStorage } = this.props;
        fetchProductInfo();
        retrieveFavoritesFromLocalStorage();
    }

    applyFiltersToProducts(products) {
        const { category, price, isFavoritesOnly, favoriteProductIds } = this.props;

        return products.filter(product => {
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
            sellers,
            loading,
            favoriteProductIds,
            addProductToFavorites,
            removeProductFromFavorites,
        } = this.props;

        const filteredProducts = this.applyFiltersToProducts(products);

        console.log('filteredProducts', filteredProducts);

        return loading ? <Spinner />
            : (
                <ProductList
                    products={filteredProducts}
                    sellers={sellers}
                    addProductToFavorites={addProductToFavorites}
                    removeProductFromFavorites={removeProductFromFavorites}
                    favoriteProductIds={favoriteProductIds}
                />
            );
    }
}

ProductController.propTypes = {
    fetchProductInfo: PropTypes.func.isRequired,
    retrieveFavoritesFromLocalStorage: PropTypes.func.isRequired,
    addProductToFavorites: PropTypes.func.isRequired,
    removeProductFromFavorites: PropTypes.func.isRequired,
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
    sellers: PropTypes.objectOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.shape({
        from: PropTypes.number,
        to: PropTypes.number,
    }).isRequired,
    isFavoritesOnly: PropTypes.bool.isRequired,
    favoriteProductIds: PropTypes.objectOf(PropTypes.bool).isRequired,
};

const mapStateToProps = state => ({
    products: state.productController.products,
    sellers: state.productController.sellers,
    loading: state.productController.loading,
    favoriteProductIds: state.productController.favoriteProductIds,
    category: state.filters.category,
    price: state.filters.price,
    isFavoritesOnly: state.filters.isFavoritesOnly,
});

const mapDispatchToProps = dispatch => ({
    fetchProductInfo: () => dispatch(productControllerActions.fetchProductInfo()),
    retrieveFavoritesFromLocalStorage: () => dispatch(productControllerActions.retrieveFavoritesFromLocalStorage()),
    addProductToFavorites: productId => dispatch(productControllerActions.addProductToFavorites(productId)),
    removeProductFromFavorites: productId => dispatch(productControllerActions.removeProductFromFavorites(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductController);
