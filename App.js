import React from 'react';
import { Provider } from 'react-redux';
import Gameboard from './Components/Gameboard';



export default function App() {
  return (
    <Provider>
      <Gameboard/>
    </Provider>
    );
}

