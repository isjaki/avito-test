import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './RatingWidget.css';

const RatingWidget = ({ rating }) => {
    const classes = classNames({
        [styles.ratingWidget]: true,
        [styles.high]: rating >= 4,
        [styles.medium]: rating >= 3 && rating < 4,
        [styles.low]: rating < 3,
    });

    return (
        <span className={classes}>
            <i className="fas fa-star" />&nbsp;{rating}
        </span>
    );
};

RatingWidget.propTypes = {
    rating: PropTypes.number.isRequired,
};

export default RatingWidget;
