import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
const defaultTheme = createTheme();
const token = sessionStorage.getItem("token");

const ManuelRecords = () => {
  const navigate = useNavigate();
  const itemsPerRow = 1; // Display 1 item on small screens
  const [messager, setMessager] = useState("");
  const id = sessionStorage.getItem("id");
  const [values, setValues] = useState({
    userid: id,
    uuid: "",
    picture:
      "https://st2.depositphotos.com/51220114/50642/v/450/depositphotos_506425834-stock-illustration-network-man-avatar-icon.jpg",
    name: "",
    location: "",
    email: "",
    phone: "",
    nationality: "",
    dob: "",
  });
  const handleSave = () => {
    try {
      axios
        .post("http://localhost:8800/api/createUser", values, {
          headers: {
            // Include the token in the request headers
            Authorization: token,
          },
        })
        .then((res) => {
          if (res.data.Status === "Successs") {
            setMessager("User Saved Successfully");
            navigate("/newUsers");
          } else {
            setMessager(res.data.Message);
          }
        })
        .catch((err) => {
          console.error("Axios error:", err);
          // Handle the error as needed, e.g., display an error message
          setMessager("An error occurred while saving the user.");
        });
    } catch (error) {
      console.error("Error in handleSave:", error);
      // Handle the error as needed, e.g., display an error message
      setMessager("An error occurred while saving the user.");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Container component="main" maxWidth="md">
        <Card sx={{ width: `${100 / itemsPerRow}%`, marginBottom: "20px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="500"
              alt="Profile Image"
              image="https://st2.depositphotos.com/51220114/50642/v/450/depositphotos_506425834-stock-illustration-network-man-avatar-icon.jpg"
            />
            <CardContent>
              <TextField
                label="UUID"
                margin="normal"
                required
                fullWidth
                autoFocus
                onChange={(e) => setValues({ ...values, uuid: e.target.value })}
              />
              <TextField
                label="Name"
                margin="normal"
                required
                fullWidth
                autoFocus
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              />
              <TextField
                label="Location"
                margin="normal"
                required
                fullWidth
                onChange={(e) =>
                  setValues({ ...values, location: e.target.value })
                }
              />
              <TextField
                label="Emai"
                margin="normal"
                required
                fullWidth
                onChange={(e) =>
                  setValues({ ...values, location: e.target.value })
                }
              />
              <TextField
                label="Phone"
                margin="normal"
                required
                fullWidth
                onChange={(e) =>
                  setValues({ ...values, phone: e.target.value })
                }
              />

              <TextField
                label="Nationality"
                margin="normal"
                required
                fullWidth
                onChange={(e) =>
                  setValues({ ...values, nationality: e.target.value })
                }
              />

              <TextField
                label="Date Of birth"
                margin="normal"
                type="text"
                required
                fullWidth
                onChange={(e) => setValues({ ...values, dob: e.target.value })}
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
          </Box>
        </Card>
      </Container>
    </ThemeProvider>
  );
};

export default ManuelRecords;
