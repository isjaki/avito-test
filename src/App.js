import React, { Fragment } from 'react';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import ProductWrapper from './components/ProductWrapper/ProductWrapper';
import FiltersWidget from './components/FiltersWidget/FiltersWidget';

const App = () => (
    <Fragment>
        <Header />
        <ProductWrapper />
        <Sidebar>
            <FiltersWidget />
        </Sidebar>
    </Fragment>
);

export default App;
