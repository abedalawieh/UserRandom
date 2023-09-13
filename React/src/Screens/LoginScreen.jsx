import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useContext } from "react";
import { RecoveryContext } from "../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

// TODO remove, this demo shouldn't need to reset the theme.

const LoginScreen = () => {
  const { loggedin, setLoggedIn, setToken, token } =
    useContext(RecoveryContext);

  const defaultTheme = createTheme();
  const [message, setMessage] = useState("");

  const [valuesLogin, setValuesLogin] = useState({
    username: "",

    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8800/api/login", { valuesLogin })
      .then((res) => {
        if (res.data.Status === "Success") {
          const id = res.data.id;
          const token = res.data.token;
          setToken(token);
          sessionStorage.setItem("loggedin", true);
          sessionStorage.setItem("id", id);
          sessionStorage.setItem("token", token);

          setLoggedIn(true);

          navigate("/");
        } else {
          setMessage(res.data.Message);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "dark" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) =>
                setValuesLogin({ ...valuesLogin, username: e.target.value })
              }
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) =>
                setValuesLogin({ ...valuesLogin, password: e.target.value })
              }
            />

            <Button
              type="submit"
              fullWidth
              sx={{ mt: 3, mb: 2, backgroundColor: "black", color: "white" }}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
            {message && (
              <div className="login-message">
                <FaExclamationTriangle className="message-icon" />
                <p className="message-text">{message}</p>
              </div>
            )}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default LoginScreen;
