import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>blah blah blah</p>
      <span class="material-symbols-outlined">comment</span>
      <span class="material-symbols-outlined">filter_list</span>
      <span class="material-symbols-outlined">search</span>
      <span class="material-symbols-outlined">arrow_upward</span>
      <span class="material-symbols-outlined">arrow_downward</span>
      <footer>
        <Counter />
      </footer>
    </div>
  );
}

export default App;


// copy and paste the following to use the icons

//   <span class="material-symbols-outlined">comment</span>
//   <span class="material-symbols-outlined">filter_list</span>
//   <span class="material-symbols-outlined">search</span>
//   <span class="material-symbols-outlined">arrow_upward</span>
//   <span class="material-symbols-outlined">arrow_downward</span>
