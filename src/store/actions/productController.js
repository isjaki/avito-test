import * as actionTypes from '../actionTypes';

export const fetchProductsStart = () => ({
    type: actionTypes.FETCH_PRODUCTS_START,
});

export const fetchProductsSuccess = products => ({
    type: actionTypes.FETCH_PRODUCTS_SUCCESS,
    products,
});

export const fetchProductsFail = error => ({
    type: actionTypes.FETCH_PRODUCTS_FAIL,
    error,
});

export const fetchProducts = () => (dispatch) => {
    dispatch(fetchProductsStart());
    fetch('http://avito.dump.academy/products')
        .then(res => res.json())
        .then((res) => {
            console.log(res);
            dispatch(fetchProductsSuccess(res.data));
        })
        .catch((error) => {
            console.log(error);
            dispatch(fetchProductsFail(error));
        });
};

export const setFavoritesToState = favoriteProductIds => ({
    type: actionTypes.SET_FAVORITES_TO_STATE,
    favoriteProductIds,
});

export const addProductToFavorites = productId => (dispatch) => {
    const favoriteProductIds = JSON.parse(localStorage.getItem('favoriteProductIds'));
    favoriteProductIds[productId] = true;
    localStorage.setItem('favoriteProductIds', JSON.stringify(favoriteProductIds));

    dispatch(setFavoritesToState(favoriteProductIds));
};

export const removeProductFromFavorites = productId => (dispatch) => {
    const favoriteProductIds = JSON.parse(localStorage.getItem('favoriteProductIds'));
    delete favoriteProductIds[productId];
    localStorage.setItem('favoriteProductIds', JSON.stringify(favoriteProductIds));

    dispatch(setFavoritesToState(favoriteProductIds));
};

export const retrieveFavoritesFromLocalStorage = () => (dispatch) => {
    let favoriteProductIds = localStorage.getItem('favoriteProductIds');
    if (favoriteProductIds === null) {
        localStorage.setItem('favoriteProductIds', '{}');
        favoriteProductIds = {};
    } else {
        favoriteProductIds = JSON.parse(favoriteProductIds);
    }

    dispatch(setFavoritesToState(favoriteProductIds));
};
