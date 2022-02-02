import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import "../styles/NavBarStyle.css";
import {
  deepPurple,
  deepOrange,
  grey,
  teal,
  orange,
  amber,
  brown,
} from "@mui/material/colors";
const textColorLight = grey[100],
  textColor = grey[900],
  textColorGrey = grey[600];
const primaryColor = teal[800],
  secondaryColor = orange[1000];

export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      id="appBar"
      position="static"
      sx={{ color: grey[100], background: primaryColor }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* LOGO para grandes pantallas */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            id="logo"
            sx={{
              mr: 2,
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            Dactilosaurio
          </Typography>
          {/* menu responsivo con items de pestañas */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              aria-controls="menu-appbar"
              size="large"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon></MenuIcon>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Inicio</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Multijugador</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Practicar</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Sala</Typography>
              </MenuItem>
            </Menu>
          </Box>
          {/* Logo para pantallas pequeñas */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            id="logo"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            Dactilosario
          </Typography>
          {/* Contenendor de pestañas/pagesLinks */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <NavLink className="navLink" to="/">
                Inicio
              </NavLink>
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <NavLink className="navLink" to="/multiplayer">
                Multijugador
              </NavLink>
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <NavLink className="navLink" to="/practice">
                Practicar
              </NavLink>
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <NavLink className="navLink" to="/room">
                Sala
              </NavLink>
            </Button>
          </Box>
          {/*Contenedor UserAcount */}
          <Box>
            <Tooltip title="Cronosaurio">
              <IconButton>
                <Avatar
                  alt="Cronosaurio" /* segun avatar cambiar nombre e imagen */
                  src="/static/images/avatar/2.jpg"
                ></Avatar>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
