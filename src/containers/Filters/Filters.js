import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { debounce } from '../../helpers/helpers';

import * as filterActions from '../../store/actions/filters';

import FormElementContainer from '../../components/UI/FormElementContainer/FormElementContainer';
import Selector from '../../components/UI/Selector/Selector';
import PriceFilter from '../../components/UI/PriceFilter/PriceFilter';
import Button from '../../components/UI/Button/Button';

const selectorOptions = [
    { value: 'all', displayValue: 'Все' },
    { value: 'immovable', displayValue: 'Недвижимость' },
    { value: 'cameras', displayValue: 'Фотоаппараты' },
    { value: 'auto', displayValue: 'Автомобили' },
    { value: 'laptops', displayValue: 'Ноутбуки' },
];

const Filters = ({
    setCategoryFilter,
    setPriceFilter,
    setFavoritesOnlyFilter,
    isFavoritesOnly,
}) => (
    <Fragment>
        <FormElementContainer label="По категории:">
            <Selector
                options={selectorOptions}
                initialValue="all"
                onSelectorChange={setCategoryFilter}
            />
        </FormElementContainer>
        <FormElementContainer label="По цене:">
            <PriceFilter onPriceChange={debounce(setPriceFilter, 800)} />
        </FormElementContainer>
        <FormElementContainer>
            <Button
                buttonType="pickFavorites"
                onClick={setFavoritesOnlyFilter}
                isActive={isFavoritesOnly}
            />
        </FormElementContainer>
    </Fragment>
);

Filters.propTypes = {
    setCategoryFilter: PropTypes.func.isRequired,
    setPriceFilter: PropTypes.func.isRequired,
    setFavoritesOnlyFilter: PropTypes.func.isRequired,
    isFavoritesOnly: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
    isFavoritesOnly: state.filters.isFavoritesOnly,
});

const mapDispatchToProps = dispatch => ({
    setCategoryFilter: categoryType => dispatch(filterActions.setCategoryFilter(categoryType)),
    setPriceFilter: (priceFrom, priceTo) => dispatch(filterActions.setPriceFilter(priceFrom, priceTo)),
    setFavoritesOnlyFilter: () => dispatch(filterActions.setFavoritesOnlyFilter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
