import React from "react";
import { Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import gem from "../assets/gem.gif";
import arrow from "../assets/arrow.png";

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
  fontWeight: 550,
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
  width: "700px",
  height: "700px",
  position: "absolute",
  top: "-180px",
  left: "700px",
  opacity: 0.5,
  mixBlendMode: "multiply",
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
  hidden: {
    clipPath: "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)",
    opacity: 0,
  },
  visible: (i) => ({
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    opacity: 1,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: "easeOut",
      type: "tween",
    },
  }),
};

const sentenceVariant = {
  hidden: {
    opacity: 0,
    translateY: "100%",
  },
  visible: {
    opacity: 1,
    translateY: "0%",
    transition: {
      duration: 1.5,
      ease: "easeOut",
      type: "tween", // Ensure type is set to 'tween'
    },
  },
};

const letterVariant = {
  hidden: { y: 100, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.09,
      duration: 1.5,
      ease: "easeOut",
      type: "tween",
    },
  }),
};

const lineVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 1,
      ease: "easeOut",
      type: "tween",
    },
  }),
};

const AnimatedText = ({ text, styles }) => {
  if (text === "‘23 - ‘24 Collection") {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sentenceVariant}
        style={{ ...styles, overflow: "hidden" }}
      >
        {text}
      </motion.div>
    );
  }

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

const AnimatedLines = ({ text }) => {
  return (
    <Box sx={{ marginTop: "20px" }}>
      {text.split("|").map((line, index) => (
        <motion.p
          key={index}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={lineVariant}
          style={{
            width: "100%",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "0.4em",
            letterSpacing: "-0.005em",
            textAlign: "left",
          }}
        >
          {line.trim()}
        </motion.p>
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
      <Box
        sx={{
          position: "absolute",
          top: "550px",
          left: "50%",
          transform: "translateX(5%)",
        }}
      >
        <AnimatedLines
          text={`DIGITAL MINDFULNESS RACE CONTRIBUTION LOSS MARKET SHOULD. LOW-HANGING |
              PROBLEM LOT LOW-HANGING MY READ KPIS. CONTRIBUTION LOSS FLESH FUTURE- |
              PROOF PIVOT CAN ME RESPONSIBLE. I SPACES ECO-SYSTEM TEAMS Q1. CAN ABLE |
              FLESH UNDERLYING BUT MEANINGFUL. BETTER FURED OPEN BALLPARK EVERY USERS |
              SYNCHRONISE OFFLINE ALGORITHM. RELAXATION STAKEHOLDER LOSS MINDFULNESS |
              BACK-END BOARD MORE. CREEP USABILTIY BASED ENSURE OPTIONS ROOM BOTH |
              BASE FINISH. LUNCH DOWNLOADED TIMEPOINT TURN LEAN. PUT MONEY GIANT |
              MOVING DONE MAKE CRACK INVITE. BASE MOVE MY BEST DOGPILE CAN USABILTIY |
              ANOTHER. CHIME ABLE SOCIALIZE USERS DEFINE.`}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "410px",
          height: "110px",
          gap: "40px",
          marginTop: "150px",
          justifyContent: "center",
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
