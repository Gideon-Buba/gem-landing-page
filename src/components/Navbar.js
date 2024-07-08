import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Logo from "../assets/logo.png";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1.5 }}
    >
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "transparent",
          height: 80,
          px: { xs: 2, sm: 3 },
          py: 1,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={Logo}
              alt="Logo"
              style={{
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
    </motion.div>
  );
}

export default Navbar;
