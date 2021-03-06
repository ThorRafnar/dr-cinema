import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './src/reducers';
import AppContainer from './src/routes';

export default function () {
  return (
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
      <AppContainer />
    </Provider>
  );
}
