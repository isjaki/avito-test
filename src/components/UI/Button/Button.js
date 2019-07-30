import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Button.css';

const Button = ({ children, buttonType }) => {
    const classes = classNames({
        [styles.button]: true,
        [styles.active]: false,
        [styles.pickFavorites]: buttonType === 'pickFavorites',
        [styles.addToFavorites]: buttonType === 'addToFavorites',
    });

    let buttonContent = null;
    switch (buttonType) {
        case 'pickFavorites':
            buttonContent = <span><i className="fas fa-heart" /> Только избранное</span>;
            break;
        case 'addToFavorites':
            buttonContent = <i className="fas fa-heart" />;
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
