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
import DateComp from "./DateComp";

import Header from "./Header";
import UserCard from "./UserCard";
import { useMemo } from "react";
import { RecoveryContext } from "../App";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();
const id = sessionStorage.getItem("id");

const GetUsers = () => {
  const { keyword, setKeyword, low, high, setLow, setHigh } =
    useContext(RecoveryContext);
  const [messager, setMessager] = useState("");
  const [number, setNumber] = useState(1);
  const [newUsers, setNewUsers] = useState([]);
  const [user, setUser] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `https://randomuser.me/api/?results=${number}`
      );
      const users = response.data.results.map((user) => ({
        uuid: user.login.uuid,
        picture: user.picture.large,
        name: `${user.name.title}. ${user.name.first} ${user.name.last}`,
        location: `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}`,
        email: user.email,
        phone: user.phone,
        nationality: user.nat,
        dob: user.dob.date,
      }));

      setNewUsers(users);
    } catch (err) {
      console.log(err);
    }
  };

  const [savedUsers, setSavedUsers] = useState([]);

  const itemsPerRow = window.innerWidth < 600 ? 1 : 3; // Display 1 item on small screens
  // const isoStr = '1980-04-17T07:06:56.348Z';

  // const date = new Date(isoStr);
  // const datenew = date.toISOString().slice(0, 19).replace('T', ' ');

  // console.log(datenew); // 👉️ 165839613182
  const [file, setFile] = useState(null);

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
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

  const handleSaveAll = () => {
    // Send a POST request to your Node.js server to save the users
    axios
      .post("http://localhost:8800/api/saveAll", {
        users: newUsers,
        userid: id,
      })
      .then((response) => {
        if (response.status === 200) {
          // Users saved successfully, remove them from the display
          setNewUsers([]);
        }
      })
      .catch((error) => {
        console.error("Error saving users:", error);
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Container component="main" maxWidth="md">
        {" "}
        {/* Adjust maxWidth as needed */}
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h5>Enter the number of random users you wish to request for:</h5>
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
            onSubmit={handleSubmit}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="number"
              name="number"
              type="number"
              autoFocus
              defaultValue={1}
              onChange={(e) => setNumber(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              sx={{ mt: 3, mb: 2, backgroundColor: "black", color: "white" }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <Button
              href="/addManuel"
              fullWidth
              sx={{ mt: 3, mb: 2, backgroundColor: "black", color: "white" }}
            >
              Add Own Records
            </Button>
          </Box>
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSaveAll}
          disabled={newUsers.length === 0} // Disable the button if there are no users
        >
          Save All
        </Button>
        <div style={{ marginBottom: "20px" }}>
          <DateComp /> {/* DateComp component */}
        </div>
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
                .filter((user) => {
                  if (low && high) {
                    // Filter users based on both low and high date of birth
                    return user.dob >= low && user.dob <= high;
                  } else if (low) {
                    // Filter users based on low date of birth only
                    return user.dob >= low;
                  } else if (high) {
                    // Filter users based on high date of birth only
                    return user.dob <= high;
                  } else {
                    // No date filter applied
                    return true;
                  }
                })
                .map((user) => (
                  <UserCard
                    key={user.uuid}
                    user={user}
                    onUpdateUser={onUpdateUser}
                    onRemoveSavedUser={removeSavedUser}
                  />
                ))
            : newUsers
                .filter((user) => {
                  if (low && high) {
                    // Filter users based on both low and high date of birth
                    return user.dob >= low && user.dob <= high;
                  } else if (low) {
                    // Filter users based on low date of birth only
                    return user.dob >= low;
                  } else if (high) {
                    // Filter users based on high date of birth only
                    return user.dob <= high;
                  } else {
                    // No date filter applied
                    return true;
                  }
                })
                .map((user) => (
                  <UserCard
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

export default GetUsers;
