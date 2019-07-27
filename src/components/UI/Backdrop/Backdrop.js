import React from 'react';
import PropTypes from 'prop-types';

import styles from './Backdrop.css';

const Backdrop = ({ isVisible, onClick }) => (
    isVisible && <div className={styles.backdrop} onClick={onClick} role="presentation" />
);

Backdrop.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Backdrop;
