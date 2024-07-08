import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import gem from "../assets/gem.gif";
import arrow from "../assets/arrow.png";

// Define letterVariant globally
const letterVariant = {
  hidden: { y: 100, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.09,
      duration: 1.5,
      ease: "easeOut",
    },
  }),
};

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
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
}));

const textContainerStyles = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const textStyles = {
  fontSize: "150px",
  fontWeight: 500,
  lineHeight: "0.8",
  fontFamily: "'Signika Negative', sans-serif",
  display: "inline-block",
};

const collectionTextStyles = {
  fontFamily: "Helvetica Neue, sans-serif",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "22.4px",
  letterSpacing: "-0.005em",
  textAlign: "left",
  display: "inline-block",
};

const GemImage = styled(motion.img)(({ theme }) => ({
  width: "860px",
  height: "750px",
  position: "absolute",
  top: "-200px",
  left: "590px",
  opacity: 0.5,
}));

const gemAnimation = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: [0.8, 1.1, 1],
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const arrowVariant = {
  hidden: { y: -50, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.5,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const AnimatedText = ({ text, styles }) => {
  return (
    <Box component="span" sx={{ display: "inline-block", overflow: "hidden" }}>
      {text.split("").map((char, index) => (
        <motion.span
          key={char + "-" + index}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={letterVariant}
          style={styles}
        >
          {char}
        </motion.span>
      ))}
    </Box>
  );
};

function Hero() {
  return (
    <HeroSection>
      <HeroContent>
        <Box sx={textContainerStyles}>
          <AnimatedText text="hans" styles={textStyles} />
          <AnimatedText text="&marie" styles={textStyles} />
          <AnimatedText
            text="‘23 - ‘24 Collection"
            styles={collectionTextStyles}
          />
        </Box>
        <GemImage
          src={gem}
          alt="Gem Gif"
          initial="hidden"
          animate="visible"
          variants={gemAnimation}
        />
      </HeroContent>
      <Typography
        sx={{
          fontFamily: "Helvetica Neue, sans-serif",
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "22.4px",
          letterSpacing: "-0.005em",
          textAlign: "left",
          display: "inline-block",
        }}
        component={motion.p}
        variants={gemAnimation}
        className="hero-text"
      >
        DIGITAL MINDFULNESS RACE CONTRIBUTION LOSS MARKET SHOULD. LOW-HANGING
        PROBLEM LOT LOW-HANGING MY READ KPIS. CONTRIBUTION LOSS FLESH
        FUTURE-PROOF PIVOT CAN ME RESPONSIBLE. I SPACES ECO-SYSTEM TEAMS Q1. CAN
        ABLE FLESH UNDERLYING BUT MEANINGFUL. BETTER FIXED OPEN BALLPARK EVERY
        USERS SYNCHRONISE OFFLINE ALGORITHM. RELAXATION STAKEHOLDER LOSS
        MINDFULNESS BACK-END BOARD MORE. CHEEP USABILITY BASED ENSURE OPTIONS
        ROOM BOTH BASE FINISH. LUNCH DOWNLOADED TIMEPONT TURN LEAN. PUT MONEY
        GIANT MOVING DONE MAKE CRACK INVITE. BASE MOVE MY BEST DOGPILE CAN
        USABILITY ANOTHER. CHIME ABLE SOCIALIZE USERS DEFINE.
      </Typography>
      <Box
        sx={{
          display: "flex",
          width: "410px",
          height: "110px",
          gap: "40px",
        }}
        component={motion.div}
        initial="hidden"
        animate="visible"
      >
        {[0, 1, 2].map((i) => (
          <motion.img
            key={i}
            src={arrow}
            alt="Arrow Down"
            custom={i}
            variants={arrowVariant}
          />
        ))}
      </Box>
    </HeroSection>
  );
}

export default Hero;
