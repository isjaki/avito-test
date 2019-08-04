import * as actionTypes from '../actionTypes';

const initialState = {
    products: [],
    sellers: {},
    favoriteProductIds: {},
    loading: false,
    error: false,
};

const fetchProductInfoStart = state => ({
    ...state,
    loading: true,
    error: false,
});

const fetchProductInfoFail = state => ({
    ...state,
    loading: false,
    error: true,
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
