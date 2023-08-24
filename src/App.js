import React from "react";
// import { Counter } from './features/counter/Counter';
import "./App.css";
import LoginForm from "./components/LoginForm";
import DarkModeToggle from "./components/DarkModeToggle"


function App() {
  return (
    <div className="App" data-bs-theme="dark">
      <DarkModeToggle/>
      <LoginForm></LoginForm>
    </div>
  );
}

export default App;