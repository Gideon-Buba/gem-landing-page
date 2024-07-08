import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Logo from "../assets/logo.png";

function Navbar() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "transparent",
        height: 80,
        px: { xs: 2, sm: 3 }, // Adjust padding-left and padding-right for different screen sizes
        py: 1, // Adjust padding-top and padding-bottom
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={Logo}
            alt="Logo"
            style={{
              height: 40,
              filter: "grayscale(100%) brightness(0%)",
              width: "48px",
              height: "20px",
            }}
          />
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button sx={{ color: "black" }}>WORK</Button>
          <Button sx={{ color: "black" }}>ABOUT</Button>
          <Button sx={{ color: "black" }}>CONTACT</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
