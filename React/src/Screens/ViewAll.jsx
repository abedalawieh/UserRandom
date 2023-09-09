import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useContext, useEffect, useState, useCallback } from "react";
import axios from "axios";
import { RecoveryContext } from "../App";
import Header from "../Components/Header";
import SavedUserCard from "../Components/SvedUserCards";
import DateComp from "../Components/DateComp";
const defaultTheme = createTheme();
const id = sessionStorage.getItem("id");
const ViewAll = () => {
  const { keyword, setKeyword, low, high, setLow, setHigh } =
    useContext(RecoveryContext);
  const fetchSavedUsers = () => {
    try {
      fetch(
        `http://localhost:8800/api/getAll?userid=${id}&low=${low}&high=${high}`
      )
        .then((response) => response.json())
        .then((data) => {
          setNewUsers(data.data);
        });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchSavedUsers(); // Fetch data when the component mounts
  }, [low, high]); // Empty dependency array to run the effect only once
  const [newUsers, setNewUsers] = useState([]);
  const [user, setUser] = useState({});

  const [savedUsers, setSavedUsers] = useState([]);

  const itemsPerRow = window.innerWidth < 600 ? 1 : 3; // Display 1 item on small screens
  // const isoStr = '1980-04-17T07:06:56.348Z';

  // const date = new Date(isoStr);
  // const datenew = date.toISOString().slice(0, 19).replace('T', ' ');

  // console.log(datenew); // 👉️ 165839613182

  const onUpdateUser = (updatedUser) => {
    if (!updatedUser) return;

    const updatedNewUsers = [...newUsers];
    const index = updatedNewUsers.findIndex((user) => {
      return user.uuid === updatedUser.uuid;
    });
    if (index !== -1) {
      updatedNewUsers[index] = updatedUser;

      setNewUsers(updatedNewUsers);
    }
  };
  const removeSavedUser = (userToRemove) => {
    // Use filter to create a new array without the saved user
    const updatedNewUsers = newUsers.filter(
      (user) => user.uuid !== userToRemove.uuid
    );
    setNewUsers(updatedNewUsers);
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />

      <Container component="main" maxWidth="md">
        <div style={{ marginBottom: "20px" }}>
          <DateComp /> {/* DateComp component */}
        </div>
        {/* Adjust maxWidth as needed */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {keyword
            ? newUsers
                .filter((user) =>
                  user.name.toLowerCase().includes(keyword.toLowerCase())
                )
                .map((user) => (
                  <SavedUserCard
                    key={user.uuid}
                    user={user}
                    onUpdateUser={onUpdateUser}
                    onRemoveSavedUser={removeSavedUser}
                  />
                ))
            : newUsers.map((user) => (
                <SavedUserCard
                  key={user.uuid}
                  user={user}
                  onUpdateUser={onUpdateUser}
                  onRemoveSavedUser={removeSavedUser}
                />
              ))}
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default ViewAll;
