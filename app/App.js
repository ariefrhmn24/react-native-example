/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import MainRoutes from './config/router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import reducer from './state/reducers/index';

const client = axios.create({
  baseURL: 'https://kina.asia',
  responseType: 'json'
});

// const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, axiosMiddleware(client)),
  // other store enhancers if any
);
const store = createStore(reducer, enhancer);

// ===========================================
// CONFIG FOR MAKING NETWORK REQUEST SHOW UP
// ON DEBUGGER
// ===========================================
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
GLOBAL.FormData = GLOBAL.originalFormData || GLOBAL.FormData;
window.__REDUX_DEVTOOLS_EXTENSION__
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
window.__REDUX_DEVTOOLS_EXTENSION__.connect
// ===========================================

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainRoutes />
      </Provider>
    );
  }
}

export default App;

