import * as actionTypes from '../actionTypes';

const initialState = {
    products: [],
    sellers: {},
    favoriteProductIds: {},
    loading: false,
    error: null,
};

const fetchProductInfoStart = state => ({
    ...state,
    loading: true,
});

const fetchProductInfoFail = (state, action) => ({
    ...state,
    loading: false,
    error: action.error,
});

const fetchProductsSuccess = (state, action) => ({
    ...state,
    loading: false,
    products: action.products,
});

const fetchSellersSuccess = (state, action) => ({
    ...state,
    sellers: action.sellers,
});

const setFavoritesToState = (state, action) => ({
    ...state,
    favoriteProductIds: action.favoriteProductIds,
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PRODUCT_INFO_START:
            return fetchProductInfoStart(state, action);
        case actionTypes.FETCH_PRODUCT_INFO_FAIL:
            return fetchProductInfoFail(state, action);
        case actionTypes.FETCH_PRODUCTS_SUCCESS:
            return fetchProductsSuccess(state, action);
        case actionTypes.FETCH_SELLERS_SUCCESS:
            return fetchSellersSuccess(state, action);
        case actionTypes.SET_FAVORITES_TO_STATE:
            return setFavoritesToState(state, action);
        default:
            return state;
    }
};

export default reducer;
