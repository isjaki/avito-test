import React from 'react';
import PropTypes from 'prop-types';

import './Selector.css';

const Selector = ({ options, value }) => (
    <select value={value}>
        {options.map(option => (
            <option value={option.value}>
                {option.displayValue}
            </option>
        ))}
    </select>
);

Selector.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
    value: PropTypes.string.isRequired,
};

export default Selector;
