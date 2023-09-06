import React, { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import Nav from "./components/Nav";
import Account from "./components/Account";
import Cart from "./components/Cart";
import Shop from "./components/Shop";
import Orders from "./components/Orders";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TokenContext } from "./contexts/TokenContext";

function App() {
  const [token, setToken] = useState(localStorage.token);

  const saveToken = (token) => {
    localStorage.token = token;
    setToken(token);
  }

  return (
    <div className="App">
      <TokenContext.Provider value={token}>
        <Router>
          <Nav></Nav>
          <Routes>
            <Route path="/login" element={<LoginForm setToken={saveToken} />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/account" element={<Account />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </Router>
      </TokenContext.Provider>
    </div>
  );
}

export default App;
