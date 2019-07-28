import React, { Component } from 'react';

import FiltersWidget from '../../components/FiltersWidget/FiltersWidget';
import Selector from '../../components/UI/Selector/Selector';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import HamburgerButton from '../../components/UI/Button/HamburgerButton/HamburgerButton';
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
                <Selector
                    value="laptops"
                    options={[
                        { value: 'byPopularity', displayValue: 'По популярности' },
                        { value: 'byPrice', displayValue: 'По возрастанию цены' },
                    ]}
                />
            </header>
        );
    }
}

export default Header;
