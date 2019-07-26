import React from 'react';

import AdvertsList from './components/AdvertsList/AdvertsList';
import FiltersWidget from './components/FiltersWidget/FiltersWidget';
import styles from './App.css';

const App = () => (
    <div className={styles.app}>
        <AdvertsList />
        <FiltersWidget />
    </div>
);

export default App;
