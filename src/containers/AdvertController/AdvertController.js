import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchAdverts } from '../../store/actions/advertController';

import AdvertList from '../../components/AdvertList/AdvertList';

class AdvertController extends Component {
    componentDidMount() {
        const { onAdvertsFetch } = this.props;
        onAdvertsFetch();
    }

    render() {
        const { adverts } = this.props;
        return (
            <AdvertList adverts={adverts} />
        );
    }
}

AdvertController.propTypes = {
    onAdvertsFetch: PropTypes.func.isRequired,
    adverts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
    adverts: state.adverts,
});

const mapDispatchToProps = dispatch => ({
    onAdvertsFetch: () => dispatch(fetchAdverts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdvertController);
