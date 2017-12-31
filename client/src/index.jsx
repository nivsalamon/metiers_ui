import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { loadState, saveState } from './localStorage';
import thunk from 'redux-thunk';
import App from './components/App';
import allReducers from './reducers/allReducers';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import { setCurrentUser } from './actions/authActions';

const store = createStore(allReducers, 
  compose( applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f 
  )
);

if(localStorage.jwtToken) {
  setAuthorizationToken(localStorage.token);
  store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>, 
  document.getElementById('app'));