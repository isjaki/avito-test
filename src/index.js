import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import appReducer from './store/reducers/app';

import App from './App';
import './index.css';

const rootReducer = appReducer;

const store = createStore(rootReducer, applyMiddleware(thunk));

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
