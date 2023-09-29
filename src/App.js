import React, { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import Nav from "./components/Nav";
import Account from "./components/Account";
import Cart from "./components/Cart";
import Shop from "./components/Shop";
import OrdersOverview from "./components/OrdersOverview";
import Order from "./components/Order";
import LinkButtons from "./components/LinkButtons";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TokenContext } from "./contexts/TokenContext";
import { Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [token, setToken] = useState(localStorage.token || "");

  const saveToken = (token) => {
    localStorage.token = token;
    setToken(token);
  };

  document.body.dataset.bsTheme = "dark";

  const logout = () => saveToken("");

  return (
    <div className="App">
      <TokenContext.Provider value={token}>
        <Router>
          <LinkButtons />
          <ToastContainer />
          <div className="pages">
            <Nav logout={logout}></Nav>
            <main>
              <Routes>
                <Route path="/" element={<Navigate to="/shop" />} />
                <Route
                  path="/login"
                  element={<LoginForm setToken={saveToken} />}
                />
                <Route path="/register" element={<RegistrationForm />} />
                <Route path="/account" element={<Account />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/orders" element={<OrdersOverview />} />
                <Route path="/order/:orderId" element={<Order />} />
              </Routes>
            </main>
          </div>
        </Router>
      </TokenContext.Provider>
    </div>
  );
}

export default App;
