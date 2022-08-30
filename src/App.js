import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import * as React from "react";
import Projects from "./Projects";
import Project from "./Project";

const theme = createTheme({
  palette: {
    primary: {
      light: "#ffd44f",
      main: "#fca311",
      dark: "#c37400",
      contrastText: "#000"
    },
    secondary: {
      light: "#3e4868",
      main: "#14213d",
      dark: "#000018",
      contrastText: "#fff"
    }
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif"
  }
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Projects /> */}
      <Project />
    </ThemeProvider>
  );
}
