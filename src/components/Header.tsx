import React from "react";
import { Button, Grid, Typography, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "@/redux/hook";
import { login } from "@/redux/global/slice";

const Header = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const globalStates = useSelector(state => state.global);

  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <Grid
      container
      justifyContent={"space-between"}
      alignItems={"center"}
      style={{ height: "4rem", padding: "0 2rem" }}
    >
      <Grid item>
        <Typography style={{ color: theme.palette.text.primary }}>
          Logo
        </Typography>
      </Grid>
      <Button onClick={handleLogin} style={{ width: "10rem" }}>
        <Typography style={{ color: theme.palette.text.primary }}>
          {globalStates.address
            ? `${globalStates.address.slice(
                0,
                6,
              )}...${globalStates.address.slice(
                globalStates.address.length - 4,
                globalStates.address.length,
              )}`
            : "Connect"}
        </Typography>
      </Button>
    </Grid>
  );
};

export default React.memo(Header);
