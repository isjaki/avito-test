import React from 'react';
import PropTypes from 'prop-types';

import styles from './Input.css';

const Input = ({ type }) => (
    <input
        className={styles.Input}
        type={type}
    />
);

Input.propTypes = {
    type: PropTypes.string.isRequired,
};

export default Input;
