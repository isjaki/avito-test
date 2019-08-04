import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as productActions from '../../store/actions/products';

import ErrorMessage from '../../components/UI/ErrorMessage/ErrorMessage';
import ProductList from '../../components/ProductList/ProductList';
import Spinner from '../../components/UI/Spinner/Spinner';

class Products extends Component {
    constructor(props) {
        super(props);
        this.applyFiltersToProducts = this.applyFiltersToProducts.bind(this);
        this.sortProducts = this.sortProducts.bind(this);
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

    sortProducts(products) {
        const { sortingOption, sellers } = this.props;

        switch (sortingOption) {
            case 'byPopularity':
                products.sort(
                    (a, b) => sellers[b.relationships.seller].rating - sellers[a.relationships.seller].rating,
                );
                break;
            case 'byPrice':
                products.sort((a, b) => a.price - b.price);
                break;
            default:
                return products;
        }

        return products;
    }

    render() {
        const {
            products,
            sellers,
            loading,
            error,
            favoriteProductIds,
            addProductToFavorites,
            removeProductFromFavorites,
        } = this.props;

        if (error) return <ErrorMessage />;

        const filteredProducts = this.applyFiltersToProducts(products);

        this.sortProducts(filteredProducts);

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

Products.propTypes = {
    fetchProductInfo: PropTypes.func.isRequired,
    retrieveFavoritesFromLocalStorage: PropTypes.func.isRequired,
    addProductToFavorites: PropTypes.func.isRequired,
    removeProductFromFavorites: PropTypes.func.isRequired,
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
    sellers: PropTypes.objectOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.shape({
        from: PropTypes.number,
        to: PropTypes.number,
    }).isRequired,
    isFavoritesOnly: PropTypes.bool.isRequired,
    favoriteProductIds: PropTypes.objectOf(PropTypes.bool).isRequired,
    sortingOption: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
    products: state.products.products,
    sellers: state.products.sellers,
    loading: state.products.loading,
    error: state.products.error,
    favoriteProductIds: state.products.favoriteProductIds,
    category: state.filters.category,
    price: state.filters.price,
    isFavoritesOnly: state.filters.isFavoritesOnly,
    sortingOption: state.sorting.sortingOption,
});

const mapDispatchToProps = dispatch => ({
    fetchProductInfo: () => dispatch(productActions.fetchProductInfo()),
    retrieveFavoritesFromLocalStorage: () => dispatch(productActions.retrieveFavoritesFromLocalStorage()),
    addProductToFavorites: productId => dispatch(productActions.addProductToFavorites(productId)),
    removeProductFromFavorites: productId => dispatch(productActions.removeProductFromFavorites(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
