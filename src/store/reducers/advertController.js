import * as actionTypes from '../actionTypes';

const initialState = {
    adverts: [],
    loading: false,
    error: null,
};

const fetchAdvertsStart = state => ({
    ...state,
    loading: true,
});

const fetchAdvertsSuccess = (state, action) => ({
    ...state,
    loading: false,
    adverts: action.adverts,
});

const fetchAdvertsFail = (state, action) => ({
    ...state,
    loading: false,
    error: action.error,
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ADVERTS_START:
            return fetchAdvertsStart(state, action);
        case actionTypes.FETCH_ADVERTS_SUCCESS:
            return fetchAdvertsSuccess(state, action);
        case actionTypes.FETCH_ADVERTS_FAIL:
            return fetchAdvertsFail(state, action);
        default:
            return state;
    }
};

export default reducer;
