import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './PriceFilter.css';

class PriceFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            priceFrom: 0,
            priceTo: Infinity,
        };
    }

    render() {
        return (
            <div className={styles.priceFilter}>
                <label htmlFor="priceFrom" className={styles.priceLabel}>
                    <span>С</span>
                    <input
                        type="text"
                        id="priceFrom"
                        className={styles.priceInput}
                    />
                </label>
                <label htmlFor="priceTo" className={styles.priceLabel}>
                    <span>До</span>
                    <input
                        type="text"
                        id="priceTo"
                        className={styles.priceInput}
                    />
                </label>
            </div>
        );
    }
}

PriceFilter.propTypes = {

};

export default PriceFilter;
