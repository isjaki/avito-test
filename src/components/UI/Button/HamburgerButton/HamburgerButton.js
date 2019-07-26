import React from 'react';
import PropTypes from 'prop-types';

import styles from './HamburgerButton.css';

const HamburgerButton = ({ onClick }) => (
    <div
        className={styles.hamburgerButton}
        onClick={onClick}
        onKeyUp={onClick}
        role="button"
        tabIndex={0}
    >
        <div />
        <div />
        <div />
    </div>
);

HamburgerButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default HamburgerButton;
