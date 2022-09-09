import React from "react";
import { Divider, Grid } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import { motion } from "framer-motion";

import "./CpuInfo.scss";
import testJson from "../../test.json";
import InfoItem from "../InfoItem/InfoItem";
import { infoVariant } from "../../utils/variants/infoVariant";
import { Box } from "@mui/system";

const InfoTable = () => {
  const arrLength = Object.keys(testJson.systemInfo.cpu[0]).length;

  return (
    <motion.div
      className="info-table-container"
      variants={infoVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Box sx={{ p: 4, mb: 4, mt: { md: 1, sm: 2, xs: 2 } }}>
        <Grid container spacing={0.5}>
          <div className="table-heading">
            <GridViewIcon />
            <span>&nbsp;CPU</span>
          </div>
          <Divider style={{ width: "100%" }} />
          <Grid item lg={6} md={12} sm={12} xs={12}>
            {Object.keys(testJson.systemInfo.cpu[0])
              .map((itemKey, i) => (
                <InfoItem
                  itemKey={itemKey}
                  key={itemKey}
                  value={`${testJson.systemInfo.cpu[0][`${itemKey}`]}`}
                />
              ))
              .slice(0, arrLength / 2)}
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            {Object.keys(testJson.systemInfo.cpu[0])
              .map((itemKey, i) => (
                <InfoItem
                  itemKey={itemKey}
                  key={itemKey}
                  value={`${testJson.systemInfo.cpu[0][`${itemKey}`]}`}
                />
              ))
              .slice(arrLength / 2, arrLength)}
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  );
};

export default InfoTable;
