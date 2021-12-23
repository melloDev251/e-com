import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import ProductList from "./pages/ProductList";
import ProductPg from "./pages/ProductPg";
import Pay from "./pages/Pay";
import Success from "./pages/Success";

const App = () => {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route path="/" caseSensitive={true} element={<Home />} />
        <Route
          path="/login"
          caseSensitive={false}
          element={user ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/register"
          caseSensitive={false}
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/cart" caseSensitive={false} element={<Cart />} />
        <Route
          path="/product-list/:category"
          caseSensitive={false}
          element={<ProductList />}
        />
        <Route
          path="/product-page/:id"
          caseSensitive={false}
          element={<ProductPg />}
        />
        <Route path="/pay" caseSensitive={false} element={<Pay />} />
        <Route path="/success" caseSensitive={false} element={<Success />} />
      </Routes>
    </Router>
  );
};

export default App;
