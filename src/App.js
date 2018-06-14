import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './redux/reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBxICwFfzLTlVKOlUGsc0L1STwCzM2y6Kk',
      authDomain: 'manager-7a15b.firebaseapp.com',
      databaseURL: 'https://manager-7a15b.firebaseio.com',
      projectId: 'manager-7a15b',
      storageBucket: 'manager-7a15b.appspot.com',
      messagingSenderId: '116718784829'
    };

    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}


export default App;
