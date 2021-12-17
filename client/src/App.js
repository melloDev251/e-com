import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Switch, Route } from "react-router-dom";
// import { Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import ProductList from "./pages/ProductList";
import ProductPg from "./pages/ProductPg";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" caseSensitive={false} element={<Home />} />
        <Route path="/login" caseSensitive={false} element={<Login />} />
        <Route path="/register" caseSensitive={false} element={<Register />} />
        <Route path="/cart" caseSensitive={false} element={<Cart />} />
        <Route
          path="/product-list"
          caseSensitive={false}
          element={<ProductList />}
        />
        <Route
          path="/product-page"
          caseSensitive={false}
          element={<ProductPg />}
        />
        {/* <Redirect to="/" /> */}
      </Routes>
    </Router>
  );
};

export default App;
