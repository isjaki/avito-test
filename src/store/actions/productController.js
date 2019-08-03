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
