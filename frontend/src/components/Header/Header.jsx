import react, { useState } from "react";
import { ghostButton, solidButton } from "../../utils/CommonStyles";
import { useSelector } from "react-redux";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "../../assets/styles/theme.css";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import UserSettingsMenu from "./UserSettingsMenu";

const Header = () => {
  const pages = ["Products", "Pricing", "Blog"];
  const [anchorElNav, setAnchorElNav] = useState(null);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const userType = user ? user.user : null;
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const isOpen = Boolean(anchorElNav);
  return (
    <nav>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          color: "black",
          height: "88px",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: { xs: "1000px", md: "100%" },
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "Montserrat Alternates, sans-serif",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              EasyPark
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                {isOpen ? (
                  <CloseIcon sx={{ color: "#001e2b" }} />
                ) : (
                  <MenuIcon />
                )}
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={isOpen}
                onClose={handleCloseNavMenu}
                sx={{
                  fontFamily: "Montserrat Alternates, sans-serif",
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      color="black"
                      sx={{
                        "&:hover": {
                          cursor: "pointer",
                          color: "#00ed64",
                          borderBottom: "1px solid #00ed64",
                          margin: "0px 2px",
                        },
                      }}
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "Montserrat Alternates, sans-serif",
                fontWeight: 700,

                color: "inherit",
                textDecoration: "none",
              }}
            >
              EasyPark
            </Typography>
            {/*  */}
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  md: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    fontFamily: "Montserrat Alternates, sans-serif",
                    my: 2,
                    color: "black",
                    display: "block",
                    margin: "0 5%",
                    padding: "0 10px",
                    position: "relative", // Make sure the button is relatively positioned
                    "&:after": {
                      content: '" "', // Add double quotes around the content value
                      position: "absolute",
                      backgroundColor: "#00ed64",
                      height: "3px",
                      width: "100%",
                      left: "0",
                      bottom: "-10px",
                      transition: "0.3s",
                      transform: "scaleX(0)", // Start with the line hidden
                      transformOrigin: "left",
                    },
                    "&:hover:after": {
                      transform: "scaleX(1)", // Show the line on hover
                    },
                    "&:hover": {
                      backgroundColor: "transparent !important",
                      color: "#00ed64 !important",
                    },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            {/* changes */}
            {isAuthenticated ? (
              <UserSettingsMenu
                handleOpenUserMenu={handleOpenUserMenu}
                anchorElUser={anchorElUser}
                handleCloseUserMenu={handleCloseUserMenu}
                userType={userType}
              />
            ) : (
              <Box sx={{ display: "flex", flexGrow: "0" }}>
                <Link to="/user/login" style={{ color: "black" }}>
                  <Button
                    sx={{
                      width: "120px",
                      height: "50px",
                      margin: "0px 5px ",
                      fontFamily: "Montserrat Alternates, sans-serif",
                      fontWeight: "400",
                      color: "black",
                      fontWeight: "500",
                      "&:hover": {
                        transition: ".8s",
                        backgroundColor: "white",
                         color: "darkgreen",
                      },
                    }}
                  >
                    Sign Up
                  </Button>
                </Link>
                <Button
                  variant="contained"
                  sx={{ ...solidButton, width: "130px", height: "50px" }}
                >
                  <Link to="/user" style={{ color: "black" }}>
                    Sign In
                  </Link>
                </Button>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </nav>
  );
};

export default Header;
