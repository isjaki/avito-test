import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.css';

const Button = ({ children }) => (
    <button
        type="button"
        className={styles.button}
    >
        {children}
    </button>
);

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
    ]).isRequired,
};

export default Button;
