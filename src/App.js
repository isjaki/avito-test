import React from 'react';

import Header from './containers/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import AdvertList from './components/AdvertList/AdvertList';
import FiltersWidget from './components/FiltersWidget/FiltersWidget';
import styles from './App.css';

const App = () => (
    <div className={styles.app}>
        <Header />
        <AdvertList />
        <Sidebar>
            <FiltersWidget />
        </Sidebar>
    </div>
);

export default App;
