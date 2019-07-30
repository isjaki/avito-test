import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import advertListReducer from './store/reducers/advertList';

import App from './App';
import './index.css';

const rootReducer = advertListReducer;

const store = createStore(rootReducer);

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
