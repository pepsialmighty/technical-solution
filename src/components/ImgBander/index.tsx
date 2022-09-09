import React from "react";
import { motion } from "framer-motion";

import "./ImgBander.scss";
import TimeSpyImg from "../../assets/img/time_spy_extreme_heroimage_1920x1080.jpg";
import { generalVariant } from "../../utils/variants/generalVariant";

const ImgBander = () => {
  return (
    <motion.div
      className="img-bander-container"
      variants={generalVariant}
      initial="hidden"
      animate="visible"
    >
      <img src={TimeSpyImg} alt="" />
      <span>TIME SPY EXTREME</span>
    </motion.div>
  );
};

export default ImgBander;
