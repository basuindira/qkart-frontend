import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import "./Header.css";
import Login from "./Login";
import {Link,useHistory} from "react-router-dom";
import {useState} from "react";
const Header = ({ children, hasHiddenAuthButtons }) => {
const history= useHistory();
  const handleRegister=(e)=>{
    history.push("/register");
  }
  const handleLogin=()=>{
    history.push("/login");
  }
  const handleLogout=()=>{
    localStorage.removeItem("username");
    localStorage.removeItem("balance");
    localStorage.removeItem("token");
    history.push("/");
    window.location.reload();
  }
  if (hasHiddenAuthButtons) {
    return (
      <Box className="header">
        <Box className="header-title">
          <Link to="/">
            <img src="logo_light.svg" alt="Qkart-icon" />
          </Link>
        </Box>
        {children}
        <Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
          onClick={() => history.push("/")}
        >
          Back to explore
        </Button>
      </Box>
    );
  }
  return (
    <Box className="header">
      <Box className="header-title">
        <Link to="/">
          <img src="logo_light.svg" alt="QKart-icon"></img>
        </Link>
      </Box>
      {children}
      {localStorage.getItem("username") ? (
        <Stack direction="row" spacing={1} alignItems="center">
          <Avatar
            src="/public/avatar.png"
            alt={`${localStorage.getItem("username")}`}
          />
          <p className="username-text">{localStorage.getItem("username")}</p>
          <Button type="primary" onClick={() => handleLogout()}>
            Logout
          </Button>
        </Stack>
      ) : (
        <Stack direction="row" spacing={1} alignItems="center">
          <Button onClick={() => handleLogin()}>Login</Button>
          <Button variant="contained" onClick={() => handleRegister()}>
            Register
          </Button>
        </Stack>
      )}
    </Box>
  );
};

export default Header;
