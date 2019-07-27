import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './HamburgerButton.css';

class HamburgerButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpened: false,
        };

        this.toggleButton = this.toggleButton.bind(this);
    }

    toggleButton() {
        // const { onClick } = this.props;

        this.setState(prevState => ({
            isOpened: !prevState.isOpened,
        }));

        // onClick();
    }

    render() {
        const { isOpened } = this.state;
        const classes = [styles.hamburgerButton];

        if (isOpened) {
            classes.push(styles.opened);
        }

        return (
            <div
                className={classes.join(' ')}
                onClick={this.toggleButton}
                onKeyUp={this.toggleButton}
                role="button"
                tabIndex={0}
            >
                <div />
                <div />
                <div />
            </div>
        );
    }
}

HamburgerButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default HamburgerButton;
