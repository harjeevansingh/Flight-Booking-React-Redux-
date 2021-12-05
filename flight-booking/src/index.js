import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.js';
import 'bootstrap/dist/js/bootstrap.min.js'
import './index.css';
import App from './App';

//Import necessary Redux modules
import {createStore} from 'redux';
import reducers from './reducers/index';
import {Provider} from 'react-redux';


// Creating a Redux store
const store = createStore(reducers);

//Pass store to the App component using Provider component
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));