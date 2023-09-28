import React from "react";
import Menu from "../Menu";
import { BiSolidUserCircle } from "react-icons/bi";
import "./Sidebar.css";
import { Button, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuthenticated } from "../../redux/selectors";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/operations";

function Sidebar() {
  const isAuth = useSelector(selectIsAuthenticated);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="sidebar">
      {isAuth ? (
        <>
          <div className="sidebar__block" />
          <Menu />
          <Button variant="contained" onClick={handleLogout}>
            Logout
          </Button>
        </>
      ) : (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          <div className="sidebar__block" />
          <Button variant="contained" onClick={() => navigate("/")}>
            Login
          </Button>
          <Button variant="contained" onClick={() => navigate("/register")}>
            Register
          </Button>
        </Box>
      )}

      {/* <div className="username">
        <BiSolidUserCircle className="username__icon" />
        <p className="username__text">Bill Gates</p>
      </div> */}
    </div>
  );
}

export default Sidebar;
