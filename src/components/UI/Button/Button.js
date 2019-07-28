import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Button.css';

const Button = ({ children, buttonType }) => {
    const classes = classNames({
        [styles.button]: true,
        [styles.favorites]: buttonType === 'favorites',
        [styles.sorting]: buttonType === 'sorting',
    });

    let buttonContent = null;
    switch (buttonType) {
        case 'favorites':
            buttonContent = <span><i className="fas fa-heart" /> Только избранное</span>;
            break;
        default:
            buttonContent = children;
    }

    return (
        <button
            type="button"
            className={classes}
        >
            {buttonContent}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
    ]).isRequired,
    buttonType: PropTypes.string.isRequired,
};

export default Button;
