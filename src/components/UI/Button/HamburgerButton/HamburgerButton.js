import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './HamburgerButton.css';

const HamburgerButton = ({ isOpened, onClick }) => {
    const classes = classNames({
        [styles.hamburgerButton]: true,
        [styles.opened]: isOpened,
    });

    return (
        <div
            className={classes}
            onClick={onClick}
            role="button"
            tabIndex={0}
        >
            <div />
            <div />
            <div />
        </div>
    );
};

HamburgerButton.propTypes = {
    isOpened: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default HamburgerButton;
