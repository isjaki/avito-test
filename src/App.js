import React from 'react';

import Header from './components/Header/Header';
import AdvertsList from './components/AdvertsList/AdvertsList';
import FiltersWidget from './components/FiltersWidget/FiltersWidget';
import styles from './App.css';

const App = () => (
    <div className={styles.app}>
        <Header />
        <AdvertsList />
        <FiltersWidget />
    </div>
);

export default App;
