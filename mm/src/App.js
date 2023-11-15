import React, {useEffect, useState} from 'react';
import data from './sot.json';
import './App.css';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        {data?.length && data.map(card => {
          return <p>{card?.name}</p>
        })}
      </header>
    </div>
  );
}

export default App;
