import React from "react";
import { Grid, Typography, useTheme } from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      style={{ height: "4rem" }}
    >
      <Grid item>
        <Typography style={{ color: theme.palette.text.primary }}>Footer</Typography>
      </Grid>
    </Grid>
  );
};

export default React.memo(Footer);
