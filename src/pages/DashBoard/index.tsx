import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import "./DashBoard.scss";
import CpuScore from "../../components/CpuScore";
import GraphicScore from "../../components/GraphicScore";
import TimeSpyExtremeScore from "../../components/TimeSpyExtremeScore";
import ImgBander from "../../components/ImgBander";
import Monitoring from "../../components/Monitoring";
import CpuInfo from "../../components/CpuInfo";
import GpuInfo from "../../components/GpuInfo";
import StorageInfo from "../../components/StorageInfo";

const DashBoard = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        px: { xl: 8, lg: 8, md: 6, sm: 4, xs: 4 },
        py: { xl: 8, lg: 8, md: 6, sm: 4, xs: 4 },
      }}
      className="dashboard-container"
    >
      <Grid container spacing={0.5}>
        <Grid
          item
          xl={3}
          lg={3}
          md={4}
          sm={12}
          xs={12}
          sx={{ paddingRight: { sm: 0, md: 1, lg: 3 }, mb: { xs: 2, sm: 2 } }}
        >
          <TimeSpyExtremeScore />
        </Grid>
        <Grid item xl={9} lg={9} md={8} sm={12} xs={12}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { md: "row", sm: "column", xs: "column" },
              width: "100%",
            }}
          >
            <Grid
              item
              lg={3}
              md={6}
              sm={12}
              xs={12}
              sx={{
                paddingRight: { sm: 0, md: 1, lg: 3 },
                mb: { sm: 2, xs: 2 },
              }}
            >
              <GraphicScore />
            </Grid>
            <Grid
              item
              lg={3}
              md={6}
              sm={12}
              xs={12}
              sx={{
                paddingRight: { sm: 0, md: 1, lg: 3 },
                mb: { sm: 2, xs: 2 },
              }}
            >
              <CpuScore />
            </Grid>
            <Grid
              item
              lg={6}
              sm={12}
              xs={12}
              sx={{
                display: { sm: "none", md: "none", xs: "none", lg: "block" },
              }}
            >
              <ImgBander />
            </Grid>
          </Box>
          <Grid
            item
            lg={12}
            sm={12}
            xs={12}
            sx={{ paddingRight: { sm: 0, md: 0, lg: 0 } }}
          >
            <Monitoring />
          </Grid>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <CpuInfo />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <GpuInfo />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <StorageInfo />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashBoard;
