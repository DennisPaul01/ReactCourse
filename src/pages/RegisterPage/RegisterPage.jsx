import React, { useEffect, useState } from "react";
import { Button, Typography, Box, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/operations";
import { useNavigate } from "react-router-dom";
import { selectIsAuthenticated } from "../../redux/selectors";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuth = useSelector(selectIsAuthenticated);

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
    dispatch(register({ email: email, password: password }));
  };

  useEffect(() => {
    if (isAuth) navigate("/universities");
  }, [isAuth, navigate]);

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
      <Typography variant="h4" sx={{ fontSize: "30px", color: "red" }}>
        Register
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
        Register
      </Button>
    </Box>
  );
}
