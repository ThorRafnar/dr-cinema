import React from 'react';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './src/reducers';
import AppContainer from './src/routes';

export default () => (
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
      <AppContainer />
    </Provider>
);
