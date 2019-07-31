import * as actionTypes from '../actionTypes';

export const fetchAdvertsStart = () => ({
    type: actionTypes.FETCH_ADVERTS_START,
});

export const fetchAdvertsSuccess = adverts => ({
    type: actionTypes.FETCH_ADVERTS_SUCCESS,
    adverts,
});

export const fetchAdvertsFail = error => ({
    type: actionTypes.FETCH_ADVERTS_FAIL,
    error,
});

export const fetchAdverts = () => (dispatch) => {
    dispatch(fetchAdvertsStart());
    fetch('http://avito.dump.academy/products')
        .then(res => res.json())
        .then((json) => {
            dispatch(fetchAdvertsSuccess(json.data));
        })
        .catch((error) => {
            dispatch(fetchAdvertsFail(error));
        });
};
