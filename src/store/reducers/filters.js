import * as actionTypes from '../actionTypes';

const initialState = {
    category: 'all',
    price: {
        from: 0,
        to: Infinity,
    },
    isFavoritesOnly: false,
};

const setCategoryFilter = (state, action) => ({
    ...state,
    category: action.categoryType,
});

const setPriceFilter = (state, action) => ({
    ...state,
    price: {
        ...state.price,
        from: action.priceFrom,
        to: action.priceTo,
    },
});

const setFavoritesOnlyFilter = state => ({
    ...state,
    isFavoritesOnly: !state.isFavoritesOnly,
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CATEGORY_FILTER:
            return setCategoryFilter(state, action);
        case actionTypes.SET_PRICE_FILTER:
            return setPriceFilter(state, action);
        case actionTypes.SET_FAVORITES_ONLY_FILTER:
            return setFavoritesOnlyFilter(state, action);
        default:
            return state;
    }
};

export default reducer;
