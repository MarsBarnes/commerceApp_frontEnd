import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import {Tile} from './components/Tile'
// import {GetData} from './components/GetData'

function App() {
  return (
    <div className="App">
      {/* <p>blah blah blah</p>
      <span className="material-symbols-outlined">comment</span>
      <span className="material-symbols-outlined">filter_list</span>
      <span className="material-symbols-outlined">search</span>
      <span className="material-symbols-outlined">arrow_upward</span>
      <span className="material-symbols-outlined">arrow_downward</span> */}
      <Tile />
      {/* <Tile /> */}
      {/* <GetData></GetData> */}
      {/* <footer>
        <Counter />
      </footer> */}
    </div>
  );
}

export default App;


// copy and paste the following to use the icons

//   <span className="material-symbols-outlined">comment</span>
//   <span className="material-symbols-outlined">filter_list</span>
//   <span className="material-symbols-outlined">search</span>
//   <span className="material-symbols-outlined">arrow_upward</span>
//   <span className="material-symbols-outlined">arrow_downward</span>
