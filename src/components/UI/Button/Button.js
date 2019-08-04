import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Button.css';

const Button = ({
    children, buttonType, isActive, onClick, tooltip,
}) => {
    const classes = classNames({
        [styles.button]: true,
        [styles.active]: isActive,
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
            onClick={onClick}
            title={tooltip}
        >
            {buttonContent}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
    ]),
    buttonType: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    tooltip: PropTypes.string,
};

Button.defaultProps = {
    isActive: false,
    children: '',
    tooltip: null,
};

export default Button;
