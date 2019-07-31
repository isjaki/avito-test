import React, { Fragment } from 'react';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import AdvertContainer from './components/AdvertContainer/AdvertContainer';
import FiltersWidget from './components/FiltersWidget/FiltersWidget';

const App = () => (
    <Fragment>
        <Header />
        <AdvertContainer />
        <Sidebar>
            <FiltersWidget />
        </Sidebar>
    </Fragment>
);

export default App;
