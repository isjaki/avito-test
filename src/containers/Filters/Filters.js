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
    updateCategoryFilter,
    updatePriceFilter,
    updateFavoritesOnlyFilter,
    isFavoritesOnly,
}) => (
    <Fragment>
        <FormElementContainer label="По категории:">
            <Selector
                options={selectorOptions}
                initialValue="all"
                onSelectorChange={updateCategoryFilter}
            />
        </FormElementContainer>
        <FormElementContainer label="По цене:">
            <PriceFilter onPriceChange={debounce(updatePriceFilter, 800)} />
        </FormElementContainer>
        <FormElementContainer>
            <Button
                buttonType="pickFavorites"
                onClick={updateFavoritesOnlyFilter}
                isActive={isFavoritesOnly}
            />
        </FormElementContainer>
    </Fragment>
);

Filters.propTypes = {
    updateCategoryFilter: PropTypes.func.isRequired,
    updatePriceFilter: PropTypes.func.isRequired,
    updateFavoritesOnlyFilter: PropTypes.func.isRequired,
    isFavoritesOnly: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
    isFavoritesOnly: state.filters.isFavoritesOnly,
});

const mapDispatchToProps = dispatch => ({
    updateCategoryFilter: categoryType => dispatch(filterActions.updateCategoryFilter(categoryType)),
    updatePriceFilter: (priceFrom, priceTo) => dispatch(filterActions.updatePriceFilter(priceFrom, priceTo)),
    updateFavoritesOnlyFilter: () => dispatch(filterActions.updateFavoritesOnlyFilter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
