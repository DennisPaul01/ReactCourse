import React, { useState } from "react";
import { Button, Typography, Box, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "../../redux/operations";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);

    dispatch(login({ email: email, password: password }));
    navigate("/universities");
  };

  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      sx={{
        margin: "auto",
        width: "100%",
        maxWidth: "300px",
        backgroundColor: "white",
        padding: "20px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Typography variant="h4" sx={{ fontSize: "30px", color: "blue" }}>
        Login
      </Typography>
      <TextField
        type="email"
        name="email"
        id="outlined-basic"
        placeholder="Email"
        variant="outlined"
        fullWidth
        onChange={handleChangeInput}
      />
      <TextField
        type="password"
        name="password"
        id="outlined-basic"
        placeholder="Password"
        variant="outlined"
        fullWidth
        onChange={handleChangeInput}
      />
      <Button type="submit" variant="contained">
        Login
      </Button>
    </Box>
  );
}
