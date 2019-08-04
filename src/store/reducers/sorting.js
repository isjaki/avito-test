import * as actionTypes from '../actionTypes';

const initialState = {
    sortingOption: 'byDefault',
};

const updateSortingOption = (state, action) => ({
    ...state,
    sortingOption: action.sortingOption,
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_SORTING_OPTION:
            return updateSortingOption(state, action);
        default:
            return state;
    }
};

export default reducer;
