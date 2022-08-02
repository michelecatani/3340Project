/**
 * This file is the navigation bar component added to _app.js file
 * Not a page
 */

import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";

// Icons
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import InfoIcon from "@mui/icons-material/Info";
import LoginIcon from "@mui/icons-material/Login";

// Search Bar style
// create new Search element styling
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

// create new SearchIconWrapper element styling
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

// create new StyledInputBase element styling
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "23ch",
    },
  },
}));

export default function navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [loginStatus, setLoginStatus] = React.useState();

  // login and logout tokens
  React.useEffect(() => {
    localStorage.getItem("token") || localStorage.getItem("Atoken")
      ? setLoginStatus("Logout")
      : setLoginStatus("Login");
  }, []);

  // function that sets boolean of side bar menu
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // create new component for sidebar called drawer
  const drawer = (
    // contained in box
    <Box
      style={{ background: "#1D1B27" }}
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", height: "100vh" }}
    >
      {/* heading name */}
      <Typography
        color="white"
        variant="h4"
        sx={{ pt: 3, m: 2, fontWeight: "bold" }}
      >
        NeoBay
      </Typography>
      {/* Home button */}
      <Button
        sx={{ p: 2 }}
        style={{
          color: "#D5D5D5",
          fontSize: "120%",
        }}
        href="/"
        startIcon={<HomeIcon />}
      >
        Home
      </Button>
      <Divider />
      {/* About button */}
      <Button
        sx={{ p: 2 }}
        style={{
          color: "#D5D5D5",
          fontSize: "120%",
        }}
        startIcon={<InfoIcon />}
        href="/about"
      >
        About
      </Button>
      <Divider />
      {/* Item button */}
      <Button
        sx={{ p: 2 }}
        style={{
          color: "#D5D5D5",
          fontSize: "120%",
        }}
        href="/items/items"
        startIcon={<StoreIcon />}
      >
        Items
      </Button>
      <Divider />
      {/* Login button */}
      <Button
        sx={{ p: 2 }}
        style={{
          color: "#D5D5D5",
          fontSize: "120%",
        }}
        startIcon={<LoginIcon />}
        href="/auth/login"
      >
        {loginStatus}
      </Button>
      <Divider />
    </Box>
  );

  return (
    // navigation bar enclosed in nav tags
    <nav>
      {/* contain navbar in box */}
      <Box sx={{ flexGrow: 1 }}>
        {/* App bar displays information and actions relating to the current screen */}
        <AppBar position="static" style={{ background: "#1D1B27" }}>
          <Toolbar>
            {/* icon button for side menu toggle */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              // set to not display at medium size screens
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            {/* our logo */}
            <Typography>
              <img src="/tpLogo.png" alt="NeoBay" width="190px" />
            </Typography>
            {/* add search compontents */}
            {/* doesn't actually work though */}
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            {/* display buttons in own box */}
            <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
              {/* BUTTONS */}
              <Button sx={({ mr: 2 }, { ml: 2 })} color="inherit" href="/">
                Home
              </Button>
              <Button sx={({ mr: 2 }, { ml: 2 })} color="inherit" href="/about">
                About
              </Button>
              <Button
                sx={({ mr: 2 }, { ml: 2 })}
                color="inherit"
                href="/items/items"
              >
                Items
              </Button>
              <Button
                sx={({ mr: 2 }, { ml: 2 })}
                startIcon={<LoginIcon />}
                variant="contained"
                color="primary"
                href="/auth/login"
                // login stuff
                onClick={() => {
                  //alert('clicked');
                  if (loginStatus === "Logout") {
                    //alert("click")
                    localStorage.removeItem("token");
                    localStorage.removeItem("User");
                    localStorage.removeItem("Atoken");
                    localStorage.removeItem("Admin");
                    setLoginStatus("Login");
                  }
                }}
              >
                {loginStatus}
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        {/* display temporary drawer component outside AppBar */}
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "50%",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </nav>
  );
}
