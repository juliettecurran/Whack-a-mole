import React from 'react';
import Gameboard from './Components/Gameboard';
import { Provider } from 'react-redux';
import store from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <Gameboard />
    </Provider>
  );
}
