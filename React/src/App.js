import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import LoginScreen from "./Screens/LoginScreen";
import GetUsers from "./Components/GetUsers";
import { createContext, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ViewAll from "./Screens/ViewAll";
import ManuelRecords from "./Screens/ManuelRecords";
import FirstComponent from "./Components/DateComp";

export const RecoveryContext = createContext();

function App() {
  const [number, setNumber] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [newUsers, setNewUsers] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [low, setLow] = useState("");
  const [high, setHigh] = useState("");
  const [token, setToken] = useState("");

  const [loggedin, setLoggedIn] = useState(false);

  const status = sessionStorage.getItem("loggedin");
  useEffect(() => {
    if (status == "true") {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, status);
  return (
    <RecoveryContext.Provider
      value={{
        number,
        newUsers,
        setNewUsers,
        setNumber,
        submitted,
        setSubmitted,
        keyword,
        setKeyword,
        loggedin,
        setLoggedIn,
        setLow,
        low,
        setHigh,
        high,
        token,
        setToken,
      }}
    >
      <Router>
        <Routes>
          <Route
            path="/"
            element={loggedin ? <ViewAll /> : <Navigate to="/login" />}
          />
          <Route
            path="/newUsersRequest"
            element={loggedin ? <GetUsers /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={loggedin ? <Navigate to="/" /> : <LoginScreen />}
          />
          <Route
            path="/addManuel"
            element={loggedin ? <ManuelRecords /> : <Navigate to="/login" />}
          />
        </Routes>

        <Footer />
      </Router>
    </RecoveryContext.Provider>
  );
}

export default App;
