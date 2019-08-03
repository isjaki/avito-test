import * as actionTypes from '../actionTypes';

const initialState = {
    products: [],
    favoriteProductIds: {},
    loading: false,
    error: null,
};

const fetchProductsStart = state => ({
    ...state,
    loading: true,
});

const fetchProductsSuccess = (state, action) => ({
    ...state,
    loading: false,
    products: action.products,
});

const fetchProductsFail = (state, action) => ({
    ...state,
    loading: false,
    error: action.error,
});

const setFavoritesToState = (state, action) => ({
    ...state,
    favoriteProductIds: action.favoriteProductIds,
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PRODUCTS_START:
            return fetchProductsStart(state, action);
        case actionTypes.FETCH_PRODUCTS_SUCCESS:
            return fetchProductsSuccess(state, action);
        case actionTypes.FETCH_PRODUCTS_FAIL:
            return fetchProductsFail(state, action);
        case actionTypes.SET_FAVORITES_TO_STATE:
            return setFavoritesToState(state, action);
        default:
            return state;
    }
};

export default reducer;
