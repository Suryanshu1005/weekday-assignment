import {createTheme} from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Lexend", // Specify the "Lexend" font family
      "Arial",
      "sans-serif",
    ].join(","),
    // Other typography settings
  },
  // Other theme configurations
});

export default theme;
