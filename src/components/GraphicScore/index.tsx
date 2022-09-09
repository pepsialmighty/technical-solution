import React from "react";
import { motion } from "framer-motion";
import SemiCircleProgressBar from "react-progressbar-semicircle";

import "./GraphicScore.scss";
import { generalVariant } from "../../utils/variants/generalVariant";

const GraphicScore = () => {
  return (
    <motion.div
      className="graphic-score-container"
      variants={generalVariant}
      initial="hidden"
      animate="visible"
    >
      <p>GRAPHIC SCORE</p>
      <div className="chart-container">
        <SemiCircleProgressBar
          percentage={80}
          strokeWidth={18}
          stroke="#8ed1fc"
        />
        <span className="sc-value">3541</span>
      </div>
    </motion.div>
  );
};

export default GraphicScore;
