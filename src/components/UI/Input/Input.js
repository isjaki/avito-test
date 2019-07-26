import React from 'react';
import PropTypes from 'prop-types';

import './Input.css';

const Input = ({ type }) => (
    <input
        type={type}
    />
);

Input.propTypes = {
    type: PropTypes.string.isRequired,
};

export default Input;
