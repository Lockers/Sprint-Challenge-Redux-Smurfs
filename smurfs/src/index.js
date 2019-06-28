import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { getSmurfReducer } from './reducers/index';


const store = createStore(
  getSmurfReducer,
  /* applyMiddleware goes here */
  compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
