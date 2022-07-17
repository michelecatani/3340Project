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

// Search Bar
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

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

// SideMenu
const drawerWidth = 240;

export default function navbar(props) {
  // New
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <Box
      style={{ background: "#1D1B27" }}
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", height: "100vh" }}
    >
      <Typography color="white" variant="h5" sx={{ my: 2, fontWeight: "bold" }}>
        NeoBay
      </Typography>
      <Button
        style={{
          color: "#D5D5D5",
        }}
        href="./"
        startIcon={<HomeIcon />}
      >
        Home
      </Button>
      <Divider />
      <Button
        style={{
          color: "#D5D5D5",
        }}
        startIcon={<InfoIcon />}
        href="./about"
      >
        About
      </Button>
      <Divider />
      <Button
        style={{
          color: "#D5D5D5",
        }}
        href="./items"
        startIcon={<StoreIcon />}
      >
        Items
      </Button>
      <Divider />
      <Button
        style={{
          color: "#D5D5D5",
        }}
        startIcon={<LoginIcon />}
        href="./login"
      >
        Login
      </Button>
      <Divider />
    </Box>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  //

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#1D1B27" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block", fontWeight: "bold" } }}
          >
            NeoBay
          </Typography>
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

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {/* BUTTONS */}
            <Button sx={({ mr: 2 }, { ml: 2 })} color="inherit" href="./">
              Home
            </Button>
<<<<<<< HEAD
            <Button sx={({ mr: 2 }, { ml: 2 })} color="inherit" href="/about">
              About
            </Button>
            <Button sx={({ mr: 2 }, { ml: 2 })} color="inherit" href="items/items">
=======
            <Button sx={({ mr: 2 }, { ml: 2 })} color="inherit" href="./about">
              About
            </Button>
            <Button sx={({ mr: 2 }, { ml: 2 })} color="inherit" href="./items">
>>>>>>> e773056ddb74628584f47d97a44a0c9045e35ee8
              Items
            </Button>
            <Button
              sx={({ mr: 2 }, { ml: 2 })}
              startIcon={<LoginIcon />}
              variant="contained"
              color="primary"
              href="./login"
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      {/* new */}
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
