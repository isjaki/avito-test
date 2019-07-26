import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ children }) => (
    <button
        type="button"
    >
        {children}
    </button>
);

Button.propTypes = {
    children: PropTypes.string.isRequired,
};

export default Button;
