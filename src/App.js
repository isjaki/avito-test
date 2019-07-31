import React, { Fragment } from 'react';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import AdvertController from './containers/AdvertController/AdvertController';
import FiltersWidget from './components/FiltersWidget/FiltersWidget';

const App = () => (
    <Fragment>
        <Header />
        <AdvertController />
        <Sidebar>
            <FiltersWidget />
        </Sidebar>
    </Fragment>
);

export default App;
