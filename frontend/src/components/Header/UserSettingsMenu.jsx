import {
  Box,
  IconButton,
  Typography,
  Menu,
  Avatar,
  Tooltip,
  MenuItem,
  Button,
} from "@mui/material";
import React from "react";
import "../../assets/styles/theme.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../main";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { login } from "../../store/reducer/AuthSlice";
import { logout } from "../../store/reducer/AuthSlice";

const UserSettingsMenu = ({
  handleOpenUserMenu,
  anchorElUser,
  handleCloseUserMenu,
  userType,
}) => {
  const navigation = useNavigate();
  const settings = ["Account","Slots","Vehicle",  "Dashboard", "Logout"];
    const filteredSettings =
    userType === 'Vender'
      ? settings.filter((setting) => setting !== 'Vehicle')
      : userType === 'Customer'
      ? settings.filter((setting) => setting !== 'Slots')
      : [];

  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      dispatch(login());
      const logoutUser = await axios.post(`${server}/user/logout`, {
        headers: { "Content-type": "application/json", withCredentials: true },
      });
      const message = logoutUser.data.message;

      navigation("/");
      toast.success(message);
      dispatch(logout());
    } catch (error) {
      dispatch(logout());
      console.log(error);
      toast.error(message);
    }
  };
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {filteredSettings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography sx={{padding:'0' ,width:'100%'}} textAlign="center">
              {userType === "Vender" ? (
                <>
                  {setting === "Slots" && (
                    <Link to="/Vender/SlotsDashbord" style={{width:'100% !important',margin:'0'}}>Slots</Link>
                  )}
                  {setting === "Account" && (
                    <Link to="/Vender/account">Account</Link>
                  )}
                  {setting === "Dashboard" && (
                    <Link to="/Vender/dashbord">Dashboard</Link>
                  )}
                  {setting === "Logout" && (
                    <Button onClick={handleLogout}>Logout</Button>
                  )}
               
                </>
              ) : userType === "Customer" ? (
                <>
                  {setting === "Vehicle" && (
                    <Link to="/account/Customer/slots">Slots</Link>
                  )}
                  {setting === "Account" && (
                    <Link to="/account/Customer/account">Account</Link>
                  )}
                  {setting === "Dashboard" && (
                    <Link to="/user/Customer/dashboard">Dashboard</Link>
                  )}
                  {setting === "Logout" && (
                    <Button onClick={handleLogout}>Logout</Button>
                  )}
                </>
              ) : null}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default UserSettingsMenu;
