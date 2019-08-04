import React, { Component } from 'react';

import FiltersWidget from '../FiltersWidget/FiltersWidget';
import Sorting from '../../containers/Sorting/Sorting';
import SideDrawer from '../SideDrawer/SideDrawer';
import HamburgerButton from '../UI/Button/HamburgerButton/HamburgerButton';
import styles from './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSideDrawerOpened: false,
        };

        this.toggleSideDrawerVisibility = this.toggleSideDrawerVisibility.bind(this);
    }

    toggleSideDrawerVisibility() {
        this.setState(prevState => ({
            isSideDrawerOpened: !prevState.isSideDrawerOpened,
        }));
    }

    render() {
        const { isSideDrawerOpened } = this.state;

        return (
            <header className={styles.header}>
                <SideDrawer
                    isSideDrawerOpened={isSideDrawerOpened}
                    onClick={this.toggleSideDrawerVisibility}
                >
                    <FiltersWidget />
                </SideDrawer>
                <HamburgerButton
                    isOpened={isSideDrawerOpened}
                    onClick={this.toggleSideDrawerVisibility}
                />
                <Sorting />
            </header>
        );
    }
}

export default Header;
