import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {legacy_createStore as createStore} from 'redux'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import {devToolsEnhancer} from 'redux-devtools-extension'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './style/custom.css'

import { cartReducer } from './reducers/cartReducer'

const store = createStore(cartReducer ,devToolsEnhancer())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


