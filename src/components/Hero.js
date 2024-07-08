import React from "react";
import { Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import gem from "../assets/GemGif.png"; // Import the gem image correctly
import { motion } from "framer-motion";

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundColor: "#ffffff",
  padding: theme.spacing(4),
}));

const HeroContent = styled(Container)(({ theme }) => ({
  width: "100%",
  maxWidth: "1440px",
  height: "385px",
  paddingTop: "40px",
  marginLeft: "-10px",
  gap: "24px",
  display: "flex",
  justifyContent: "space-between", // Align items with space between them
  alignItems: "center", // Center align vertically
}));

const textStyles = {
  fontSize: "150px",
  fontWeight: 500,
  opacity: 1,
  lineHeight: "0.8",
};

const GemImage = styled(motion.img)({
  maxWidth: "100%",
  height: "auto",
  paddingRight: "20px",
  marginTop: "50px",
});

function Hero() {
  return (
    <HeroSection>
      <HeroContent>
        <Box>
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            style={textStyles}
          >
            hans
          </motion.h1>
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={textStyles}
          >
            &marie
          </motion.h1>
        </Box>
        <GemImage
          src={gem}
          alt="Gem Gif"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      </HeroContent>
    </HeroSection>
  );
}

export default Hero;
