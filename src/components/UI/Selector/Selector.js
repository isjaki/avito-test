import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Selector.css';

class Selector extends Component {
    constructor(props) {
        super(props);
        const { initialValue } = this.props;

        this.state = {
            value: initialValue,
        };

        this.handleSelectorChange = this.handleSelectorChange.bind(this);
    }

    handleSelectorChange(event) {
        this.setState({ value: event.target.value }, () => {
            this.forwardSelectorValue();
        });
    }

    forwardSelectorValue() {
        const { value } = this.state;
        const { onSelectorChange } = this.props;
        onSelectorChange(value);
    }

    render() {
        const { options } = this.props;
        const { value } = this.state;

        return (
            <select value={value} className={styles.selector} onChange={this.handleSelectorChange}>
                {options.map(option => (
                    <option key={option.value} value={option.value}>{option.displayValue}</option>
                ))}
            </select>
        );
    }
}

Selector.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
    initialValue: PropTypes.string.isRequired,
    onSelectorChange: PropTypes.func.isRequired,
};

export default Selector;
