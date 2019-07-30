import * as actionTypes from '../actionTypes';

export const fetchAdvertsStart = () => ({
    type: actionTypes.FETCH_ADVERTS_START,
});

export const fetchAdvertsFail = error => ({
    type: actionTypes.FETCH_ADVERTS_FAIL,
    error,
});
