import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as advertControllerActions from '../../store/actions/advertController';

import AdvertList from '../../components/AdvertList/AdvertList';
import Spinner from '../../components/UI/Spinner/Spinner';

class AdvertController extends Component {
    componentDidMount() {
        const { fetchAdverts } = this.props;
        fetchAdverts();
    }

    // applyFilters() {
    //     const { category, price, isFavoritesOnly, adverts } = this.props;

    //     return adverts.filter(advert => {

    //     })
    // }

    render() {
        const { adverts, loading } = this.props;

        return (
            loading ? <Spinner /> : <AdvertList adverts={adverts} />
        );
    }
}

AdvertController.propTypes = {
    fetchAdverts: PropTypes.func.isRequired,
    adverts: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.shape({
        priceFrom: PropTypes.number,
        priceTo: PropTypes.number,
    }).isRequired,
    isFavoritesOnly: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
    adverts: state.advertController.adverts,
    loading: state.advertController.loading,
    category: state.filters.category,
    price: state.filters.price,
    isFavoritesOnly: state.filters.isFavoritesOnly,
});

const mapDispatchToProps = dispatch => ({
    fetchAdverts: () => dispatch(advertControllerActions.fetchAdverts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdvertController);
