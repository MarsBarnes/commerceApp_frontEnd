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

function App() {
  const [token, setToken] = useState("");

  return (
    <div className="App">
      <Router>
        <Nav></Nav>
        <Routes>
          <Route path="/login" element={<LoginForm setToken={setToken} />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/account" element={<Account token={token} />} />
          <Route path="/shop" element={<Shop token={token} />} />
          <Route path="/cart" element={<Cart token={token} />} />
          <Route path="/orders" element={<Orders token={token} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
