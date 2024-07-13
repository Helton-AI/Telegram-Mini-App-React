import { createTheme, ThemeOptions } from "@mui/material";

const themeOptions: Partial<ThemeOptions> = {
  palette: {
    background: {
      default: "#111",
    },
    text: {
      primary: "#fff",
    },
  },
  typography: {
    h1: {
      fontSize: "2.5rem",
    },
    h2: {
      fontSize: "2rem",
    },
    h3: {
      fontSize: "1.5rem",
    },
    h4: {
      fontSize: "1.25rem",
    },
    h5: {
      fontSize: "1rem",
    },
    h6: {
      fontSize: "0.75rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          padding: "0.5rem 2rem",
          backgroundColor: "#333",
          ":hover": {
            backgroundColor: "#222",
          },
        },
      },
    },
  },
};

export default createTheme(themeOptions);
