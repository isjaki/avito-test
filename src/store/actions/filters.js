import * as actionTypes from '../actionTypes';

export const updateCategoryFilter = categoryType => ({
    type: actionTypes.UPDATE_CATEGORY_FILTER,
    categoryType,
});

export const updatePriceFilter = (priceFrom, priceTo) => ({
    type: actionTypes.UPDATE_PRICE_FILTER,
    priceFrom,
    priceTo,
});

export const updateFavoritesOnlyFilter = () => ({
    type: actionTypes.UPDATE_FAVORITES_ONLY_FILTER,
});
