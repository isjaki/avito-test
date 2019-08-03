import React, { Fragment } from 'react';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import ProductContainer from './components/ProductContainer/ProductContainer';
import FiltersWidget from './components/FiltersWidget/FiltersWidget';

const App = () => (
    <Fragment>
        <Header />
        <ProductContainer />
        <Sidebar>
            <FiltersWidget />
        </Sidebar>
    </Fragment>
);

export default App;
