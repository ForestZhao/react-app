import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import {logger} from 'redux-logger'

//import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import reducer from './reducers/index'


var devTools=window.devToolsExtension?window.devToolsExtension():null

var store;
if(window.devToolsExtension){
    store = createStore(reducer,compose(
        applyMiddleware(thunk,logger),
        devTools
    ))
}else{
    store = createStore(reducer,compose(
        applyMiddleware(thunk,logger)
    ))
}

ReactDOM.render(
   <Provider store={store}>
        <App/>
    </Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
