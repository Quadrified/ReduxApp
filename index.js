import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import reducer from './src/reducer/counterReducer';

const rootReducer = combineReducers({reducer});
const store = createStore(rootReducer);

const AppContainer = () => {
  <Provider store={store}>
    <App />
  </Provider>;
};

AppRegistry.registerComponent(appName, () => AppContainer);
