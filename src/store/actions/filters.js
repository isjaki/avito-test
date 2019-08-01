import * as actionTypes from '../actionTypes';

export const setCategoryFilter = (categoryType) => {
    console.log(categoryType);
    return {
        type: actionTypes.SET_CATEGORY_FILTER,
        categoryType,
    };
};

export const setPriceFilter = (priceFrom, priceTo) => {
    console.log(priceFrom, priceTo);
    return {
        type: actionTypes.SET_PRICE_FILTER,
        priceFrom,
        priceTo,
    };
};

export const setFavoritesOnlyFilter = () => ({
    type: actionTypes.SET_FAVORITES_ONLY_FILTER,
});
