import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useContext, useEffect, useState, useRef } from "react";
import { RecoveryContext } from "../App";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;
const token = sessionStorage.getItem("token");
const SavedUserCard = ({ user, onUpdateUser, onRemoveSavedUser }) => {
  const itemsPerRow = window.innerWidth < 600 ? 1 : 3; // Display 1 item on small screens
  const [name, setName] = useState(user.name);
  const [location, setLocation] = useState(user.location);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [nationality, setNationality] = useState(user.nationality);
  const [dob, setDob] = useState(user.dob);
  const picture = useRef(user.picture);
  const uuid = useRef(user.uuid);
  const id = sessionStorage.getItem("id");
  const [saved, setSaved] = useState(false);
  const handleNameChange = ({ target: { value } }) => {
    setName(value);
  };

  const handleLocationChange = ({ target: { value } }) => {
    setLocation(value);
  };
  const handleEmailChange = ({ target: { value } }) => {
    setEmail(value);
  };
  const handlePhoneChange = ({ target: { value } }) => {
    setPhone(value);
  };
  const handleNationalityChange = ({ target: { value } }) => {
    setNationality(value);
  };
  const handleDobChange = ({ target: { value } }) => {
    setDob(value);
  };

  const updateUser = () => {
    onUpdateUser(getUpdatedUser());
  };
  const [messager, setMessager] = useState("");
  useEffect(updateUser, [
    uuid,
    picture,
    name,
    location,
    email,
    phone,
    nationality,
    dob,
    onUpdateUser,
  ]);
  const getUpdatedUser = () => ({
    uuid: uuid.current,
    picture: picture.current,
    name,
    location,
    email,
    phone,
    nationality,
    dob,
  });

  const handleSave = () => {
    try {
      axios
        .post(
          "http://localhost:8800/api/updateUser",
          {
            data: getUpdatedUser(),
            userid: id,
          },
          {
            headers: {
              // Include the token in the request headers
              Authorization: token,
            },
          }
        )
        .then((res) => {
          if (res.data.Status === "Successs") {
            setMessager("User Saved Successfully");
          } else {
            setMessager(res.data.Message);
          }
        })
        .catch((err) => {
          console.error("Axios error in handleSave:", err);
          // Handle the error as needed, e.g., display an error message
          setMessager("An error occurred while saving the user.");
        });
    } catch (error) {
      console.error("Error in handleSave:", error);
      // Handle the error as needed, e.g., display an error message
      setMessager("An error occurred while saving the user.");
    }
  };

  const deleteUser = async () => {
    try {
      const response = await axios
        .post(
          "http://localhost:8800/api/deleteUser",
          {
            data: getUpdatedUser(),
            userid: id,
          },
          {
            headers: {
              // Include the token in the request headers
              Authorization: token,
            },
          }
        )
        .then((resp) => {
          console.log(resp);
          onRemoveSavedUser(user);
        })
        .catch((err) => console.log(err));
    } catch (e) {
      console.log("Error", e);
    }
  };
  return (
    <Card sx={{ width: `${100 / itemsPerRow}%`, marginBottom: "20px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={user.picture}
          alt="Profile Image"
        />
        <CardContent>
          <TextField
            label="Name"
            margin="normal"
            required
            fullWidth
            autoFocus
            onChange={handleNameChange}
            value={name}
          />
          <TextField
            label="Location"
            margin="normal"
            required
            fullWidth
            onChange={handleLocationChange}
            value={location}
          />
          <TextField
            label="Email"
            margin="normal"
            required
            fullWidth
            onChange={handleEmailChange}
            value={email}
          />
          <TextField
            label="Phone"
            margin="normal"
            required
            fullWidth
            onChange={handlePhoneChange}
            value={phone}
          />

          <TextField
            label="Nationality"
            margin="normal"
            required
            fullWidth
            onChange={handleNationalityChange}
            value={nationality}
          />
          {/* <Typography variant="h6">Date of Birth</Typography> */}
          <TextField
            label="Date Of birth"
            margin="normal"
            type="text"
            pattern="\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z"
            required
            fullWidth
            onChange={handleDobChange}
            value={dob}
          />
        </CardContent>
      </CardActionArea>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "16px",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleSave()}
        >
          Save
        </Button>

        <Button variant="contained" color="error" onClick={() => deleteUser()}>
          Delete
        </Button>
      </Box>
    </Card>
  );
};

export default SavedUserCard;
