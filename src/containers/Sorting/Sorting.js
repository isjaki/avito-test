import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as sortingActions from '../../store/actions/sorting';

import Selector from '../../components/UI/Selector/Selector';

const Sorting = ({ updateSortingOption }) => (
    <Selector
        initialValue="byDefault"
        onSelectorChange={updateSortingOption}
        options={[
            { value: 'byDefault', displayValue: 'По умолчанию' },
            { value: 'byPopularity', displayValue: 'По популярности' },
            { value: 'byPrice', displayValue: 'По возрастанию цены' },
        ]}
    />
);

Sorting.propTypes = {
    updateSortingOption: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
    updateSortingOption: sortingOption => dispatch(sortingActions.updateSortingOption(sortingOption)),
});

export default connect(null, mapDispatchToProps)(Sorting);
