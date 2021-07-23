import React from 'react';
import { Provider } from 'react-redux';
import Gameboard from './Components/Gameboard';
import store from './Redux/store'


export default function App() {
  return (
    <Provider store={store}>
      <Gameboard/>
    </Provider>
    );
}

