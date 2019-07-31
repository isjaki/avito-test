import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchAdverts } from '../../store/actions/advertController';

import AdvertList from '../../components/AdvertList/AdvertList';
import Spinner from '../../components/UI/Spinner/Spinner';

class AdvertController extends Component {
    componentDidMount() {
        const { onAdvertsFetch } = this.props;
        onAdvertsFetch();
    }

    render() {
        const { adverts, loading } = this.props;

        return (
            loading ? <Spinner /> : <AdvertList adverts={adverts} />
        );
    }
}

AdvertController.propTypes = {
    onAdvertsFetch: PropTypes.func.isRequired,
    adverts: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
    adverts: state.adverts,
    loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
    onAdvertsFetch: () => dispatch(fetchAdverts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdvertController);
