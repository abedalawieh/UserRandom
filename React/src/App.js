import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import LoginScreen from "./Screens/LoginScreen";
// import GetUsers from "./Components/GetUsers";
import { createContext, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
// import ViewAll from "./Screens/ViewAll";
import Loader from "./Components/Loader";
// import ManuelRecords from "./Screens/ManuelRecords";
import FirstComponent from "./Components/DateComp";
const LazyGetUsers = React.lazy(() => import("./Components/GetUsers"));
const LazyViewAll = React.lazy(() => import("./Screens/ViewAll"));
const LazyManuel = React.lazy(() => import("./Screens/ManuelRecords"));

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
            element={
              loggedin ? (
                <React.Suspense fallback={<Loader />}>
                  <LazyViewAll />{" "}
                </React.Suspense>
              ) : (
                <LoginScreen />
              )
            }
          />
          <Route
            path="/newUsersRequest"
            element={
              loggedin ? (
                <React.Suspense fallback={<Loader />}>
                  <LazyGetUsers />{" "}
                </React.Suspense>
              ) : (
                <LoginScreen />
              )
            }
          />
          <Route
            path="/login"
            element={
              loggedin ? (
                <React.Suspense fallback={<Loader />}>
                  <LazyViewAll />{" "}
                </React.Suspense>
              ) : (
                <LoginScreen />
              )
            }
          />
          <Route
            path="/addManuel"
            element={
              loggedin ? (
                <React.Suspense fallback={<Loader />}>
                  <LazyManuel />{" "}
                </React.Suspense>
              ) : (
                <LoginScreen />
              )
            }
          />
        </Routes>

        <Footer />
      </Router>
    </RecoveryContext.Provider>
  );
}

export default App;
