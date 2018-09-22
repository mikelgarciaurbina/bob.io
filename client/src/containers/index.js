import React, { Fragment } from 'react';
import {
  applyMiddleware, createStore, combineReducers, compose,
} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Footer, Header } from '../components';
import rootReducer from '../reducers';
import Users from './Users';
import NewUser from './NewUser';

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
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Users} />
          <Route path="/new" component={NewUser} />
        </Switch>
        <Footer />
      </Fragment>
    </BrowserRouter>
  </Provider>
);

export default App;
