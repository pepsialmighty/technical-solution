import React from "react";
import SemiCircleProgressBar from "react-progressbar-semicircle";
import { motion } from "framer-motion";

import "./CpuScore.scss";
import { generalVariant } from "../../utils/variants/generalVariant";

const CpuScore = () => {
  return (
    <motion.div
      className="graphic-score-container"
      variants={generalVariant}
      initial="hidden"
      animate="visible"
    >
      <p>CPU SCORE</p>
      <div className="chart-container">
        <SemiCircleProgressBar
          percentage={80}
          strokeWidth={18}
          stroke="#00d084"
        />
        <span className="sc-value">2915</span>
      </div>
    </motion.div>
  );
};

export default CpuScore;
