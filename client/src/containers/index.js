import React from 'react';
import {
  applyMiddleware, createStore, combineReducers, compose,
} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import rootReducer from '../reducers';
import Dashboard from './Dashboard';

const store = createStore(
  combineReducers(rootReducer),
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line
  ),
);

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
