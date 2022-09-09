import React, { useState, useEffect } from "react";
import { Button, Divider } from "@mui/material";
import { motion } from "framer-motion";

import "./TimeSpyExtremeScore.scss";
import { generalVariant } from "../../utils/variants/generalVariant";

const TimeSpyExtremeScore = () => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    setPercent(80);
  }, []);

  return (
    <motion.div
      className="time-spy-container"
      variants={generalVariant}
      initial="hidden"
      animate="visible"
    >
      <p>TIME SPY EXTREME SCORE</p>
      <div className="sc-gauge">
        <div className="sc-background">
          <div
            className="sc-percentage"
            style={{ transform: `rotate(${(percent / 100) * 180}deg)` }}
          ></div>
          <div className="sc-mask"></div>
          <span className="sc-value">{percent}</span>
        </div>
        <span className="sc-status">Excellent</span>
      </div>

      <div className="component-name-container">
        <span className="component-name">Intel Core i5-9600k</span>
        <span className="component-name">NVIDIA GeForce RTX 2060</span>
      </div>

      <Divider />
      <div className="score-range">
        <div className="score-range-item">
          <p>Your score</p>
          <p>3430</p>
        </div>
        <div className="score-range-item">
          <p>Average</p>
          <p>3430</p>
        </div>
        <div className="score-range-item">
          <p>Best</p>
          <p>3430</p>
        </div>
      </div>

      <Divider />

      <div className="button-container">
        <Button variant="contained" sx={{ width: "100%" }}>
          Contained
        </Button>
        <div className="button-row">
          <Button variant="outlined">Contained</Button>
          <Button variant="outlined">Contained</Button>
        </div>
      </div>
    </motion.div>
  );
};

export default TimeSpyExtremeScore;
