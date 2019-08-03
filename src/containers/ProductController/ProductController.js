import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as productControllerActions from '../../store/actions/productController';

import ProductList from '../../components/ProductList/ProductList';
import Spinner from '../../components/UI/Spinner/Spinner';

class ProductController extends Component {
    componentDidMount() {
        const { fetchProducts, retrieveFavoritesFromLocalStorage } = this.props;
        fetchProducts();
        retrieveFavoritesFromLocalStorage();
    }

    // applyFilters() {
    //     const { category, price, isFavoritesOnly, products } = this.props;

    //     return products.filter(product => {

    //     })
    // }

    render() {
        const { products, loading } = this.props;

        return (
            loading ? <Spinner /> : <ProductList products={products} />
        );
    }
}

ProductController.propTypes = {
    fetchProducts: PropTypes.func.isRequired,
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.shape({
        priceFrom: PropTypes.number,
        priceTo: PropTypes.number,
    }).isRequired,
    isFavoritesOnly: PropTypes.bool.isRequired,
    retrieveFavoritesFromLocalStorage: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    products: state.productController.products,
    loading: state.productController.loading,
    category: state.filters.category,
    price: state.filters.price,
    isFavoritesOnly: state.filters.isFavoritesOnly,
});

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(productControllerActions.fetchProducts()),
    retrieveFavoritesFromLocalStorage: () => dispatch(productControllerActions.retrieveFavoritesFromLocalStorage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductController);
