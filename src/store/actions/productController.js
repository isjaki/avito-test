import { normalize, schema } from 'normalizr';

import * as actionTypes from '../actionTypes';

export const fetchProductInfoStart = () => ({
    type: actionTypes.FETCH_PRODUCT_INFO_START,
});

export const fetchProductInfoFail = error => ({
    type: actionTypes.FETCH_PRODUCT_INFO_FAIL,
    error,
});

export const fetchProductsSuccess = products => ({
    type: actionTypes.FETCH_PRODUCTS_SUCCESS,
    products,
});

export const fetchSellersSuccess = sellers => ({
    type: actionTypes.FETCH_SELLERS_SUCCESS,
    sellers,
});

export const fetchProductInfo = () => dispatch => {
    // добавил прокси url к эндпоинтам, поскольку время от времени браузер ругается и блокирует запрос
    // из за политики CORS, особенно после очистки кэша и перезагрузки
    const proxyURL = 'https://cors-anywhere.herokuapp.com/';
    dispatch(fetchProductInfoStart());

    fetch(`${proxyURL}http://avito.dump.academy/sellers`)
        .then(res => res.json())
        .then(res => {
            const sellerSchema = new schema.Entity('sellers', {}, {
                processStrategy: value => ({
                    name: value.name,
                    rating: value.rating,
                }),
            });
            const sellerListSchema = new schema.Array(sellerSchema);
            const normalizedSellersData = normalize(res.data, sellerListSchema);

            dispatch(fetchSellersSuccess(normalizedSellersData.entities.sellers));
        })
        .then(() => fetch(`${proxyURL}http://avito.dump.academy/products`))
        .then(res => res.json())
        .then(res => {
            dispatch(fetchProductsSuccess(res.data));
        })
        .catch(error => {
            dispatch(fetchProductInfoFail(error));
        });
};

export const setFavoritesToState = favoriteProductIds => ({
    type: actionTypes.SET_FAVORITES_TO_STATE,
    favoriteProductIds,
});

export const addProductToFavorites = productId => dispatch => {
    const favoriteProductIds = JSON.parse(localStorage.getItem('favoriteProductIds'));
    favoriteProductIds[productId] = true;
    localStorage.setItem('favoriteProductIds', JSON.stringify(favoriteProductIds));

    dispatch(setFavoritesToState(favoriteProductIds));
};

export const removeProductFromFavorites = productId => dispatch => {
    const favoriteProductIds = JSON.parse(localStorage.getItem('favoriteProductIds'));
    delete favoriteProductIds[productId];
    localStorage.setItem('favoriteProductIds', JSON.stringify(favoriteProductIds));

    dispatch(setFavoritesToState(favoriteProductIds));
};

export const retrieveFavoritesFromLocalStorage = () => dispatch => {
    let favoriteProductIds = localStorage.getItem('favoriteProductIds');
    if (favoriteProductIds === null) {
        localStorage.setItem('favoriteProductIds', '{}');
        favoriteProductIds = {};
    } else {
        favoriteProductIds = JSON.parse(favoriteProductIds);
    }

    dispatch(setFavoritesToState(favoriteProductIds));
};
