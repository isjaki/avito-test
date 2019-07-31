import React, { Fragment } from 'react';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import AdvertList from './components/AdvertList/AdvertList';
import FiltersWidget from './components/FiltersWidget/FiltersWidget';

const App = () => (
    <Fragment>
        <Header />
        <AdvertList />
        <Sidebar>
            <FiltersWidget />
        </Sidebar>
    </Fragment>
);

export default App;
