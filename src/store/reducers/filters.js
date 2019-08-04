import * as actionTypes from '../actionTypes';

const initialState = {
    category: 'all',
    price: {
        from: 0,
        to: Infinity,
    },
    isFavoritesOnly: false,
};

const updateCategoryFilter = (state, action) => ({
    ...state,
    category: action.categoryType,
});

const updatePriceFilter = (state, action) => ({
    ...state,
    price: {
        ...state.price,
        from: action.priceFrom,
        to: action.priceTo,
    },
});

const updateFavoritesOnlyFilter = state => ({
    ...state,
    isFavoritesOnly: !state.isFavoritesOnly,
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_CATEGORY_FILTER:
            return updateCategoryFilter(state, action);
        case actionTypes.UPDATE_PRICE_FILTER:
            return updatePriceFilter(state, action);
        case actionTypes.UPDATE_FAVORITES_ONLY_FILTER:
            return updateFavoritesOnlyFilter(state, action);
        default:
            return state;
    }
};

export default reducer;
