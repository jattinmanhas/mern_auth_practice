import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Customers from "./components/customers/Customers";
import Navbar from "./components/layout/Navbar";
import AuthContext from "./context/AuthContext";

function Router() {
  const { loggedIn } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              Home
            </>
          }
        ></Route>
        {!loggedIn && (
          <>
            <Route
              path="/register"
              element={
                <>
                  <Navbar />
                  <Register />
                </>
              }
            ></Route>
            <Route
              path="/login"
              element={
                <>
                  <Navbar />
                  <Login />
                </>
              }
            ></Route>
          </>
        )}

        {loggedIn && (
          <>
            <Route
              path="/customer"
              element={
                <>
                  <Navbar />
                  <Customers/>
                </>
              }
            ></Route>
          </>
        )}

      </Routes>
    </BrowserRouter>
  );
}

export default Router;
