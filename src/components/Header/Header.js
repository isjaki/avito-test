import React from 'react';

import Selector from '../UI/Selector/Selector';
import HamburgerButton from '../UI/Button/HamburgerButton/HamburgerButton';
import styles from './Header.css';

const Header = () => (
    <header className={styles.header}>
        <HamburgerButton />
        <h1>Найдено объявлений: 1</h1>
        <Selector
            value="laptops"
            options={[
                { value: 'all', displayValue: 'Все' },
                { value: 'immobile', displayValue: 'Недвижимость' },
                { value: 'laptops', displayValue: 'Ноутбуки' },
            ]}
        />
    </header>
);

export default Header;
