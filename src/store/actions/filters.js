import * as actionTypes from '../actionTypes';

export const setCategoryFilter = categoryType => ({
    type: actionTypes.SET_CATEGORY_FILTER,
    categoryType,
});

export const setPriceFilter = (priceFrom, priceTo) => ({
    type: actionTypes.SET_PRICE_FILTER,
    priceFrom,
    priceTo,
});

export const setFavoritesOnlyFilter = () => ({
    type: actionTypes.SET_FAVORITES_ONLY_FILTER,
});
