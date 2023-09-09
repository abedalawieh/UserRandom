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
  useNavigate,
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
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/abc" element={<FirstComponent />} />

          <Route
            path="/newUsersRequest"
            element={loggedin ? <GetUsers /> : <LoginScreen />}
          />
          <Route
            path="/newUsers"
            element={loggedin ? <ViewAll /> : <LoginScreen />}
          />
          <Route
            path="/addManuel"
            element={loggedin ? <ManuelRecords /> : <LoginScreen />}
          />
        </Routes>

        <Footer />
      </Router>
    </RecoveryContext.Provider>
  );
}

export default App;
