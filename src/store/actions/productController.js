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

export const setFavoritesToState = favorites => ({
    type: actionTypes.SET_FAVORITES_TO_STATE,
    favorites,
});

export const addProductToFavorites = productId => (dispatch) => {
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    favorites[productId] = true;
    localStorage.setItem('favorites', JSON.stringify(favorites));

    dispatch(setFavoritesToState(favorites));
};

export const removeProductFromFavorites = productId => (dispatch) => {
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    delete favorites[productId];
    localStorage.setItem('favorites', JSON.stringify(favorites));

    dispatch(setFavoritesToState(favorites));
};

export const retrieveFavoritesFromLocalStorage = () => (dispatch) => {
    let favorites = localStorage.getItem('favorites');
    if (favorites === null) {
        favorites = {};
    } else {
        favorites = JSON.parse(favorites);
    }

    dispatch(setFavoritesToState(favorites));
};
