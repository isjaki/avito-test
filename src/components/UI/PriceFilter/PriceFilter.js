import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './PriceFilter.css';

class PriceFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            priceFrom: '',
            priceTo: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.forwardInputValues = this.forwardInputValues.bind(this);
    }

    handleInputChange(event) {
        const inputValue = event.target.value;

        if (!/^[0-9]*\.?[0-9]*$/.test(inputValue)) return;

        this.setState({ [event.target.id]: inputValue }, () => {
            this.forwardInputValues();
        });
    }

    forwardInputValues() {
        const { onPriceChange } = this.props;
        let { priceFrom, priceTo } = this.state;

        priceFrom = parseFloat(priceFrom) || 0;
        priceTo = parseFloat(priceTo) || Infinity;

        onPriceChange(priceFrom, priceTo);
    }

    render() {
        const { priceFrom, priceTo } = this.state;

        return (
            <div className={styles.priceFilter}>
                <label htmlFor="priceFrom" className={styles.priceLabel}>
                    <span>С</span>
                    <input
                        type="text"
                        id="priceFrom"
                        value={priceFrom}
                        className={styles.priceInput}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label htmlFor="priceTo" className={styles.priceLabel}>
                    <span>До</span>
                    <input
                        type="text"
                        id="priceTo"
                        value={priceTo}
                        className={styles.priceInput}
                        onChange={this.handleInputChange}
                    />
                </label>
            </div>
        );
    }
}

PriceFilter.propTypes = {
    onPriceChange: PropTypes.func.isRequired,
};

export default PriceFilter;
