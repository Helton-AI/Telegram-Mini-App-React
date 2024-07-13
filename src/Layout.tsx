import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Grid } from "@mui/material";

const Layout: React.FC = () => {
  return (
    <Grid
      container
      direction={"column"}
      sx={{
        height: "auto",
      }}
    >
      <Grid
        container
        sx={{
          zIndex: 1,
          flex: 1,
          height: "100%",
        }}
      >
        <Grid style={{ width: "100%" }}>
          <Header />
          <Grid item container xs={12}>
            <Outlet />
          </Grid>
          <Footer />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Layout;
