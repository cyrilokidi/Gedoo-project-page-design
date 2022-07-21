import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  Toolbar,
  Tooltip,
  Typography
} from "@mui/material";
import ProjectCard from "./components/ProjectCard";

const theme = createTheme();

function AppContent() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Gedoo
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Tooltip title="Open settings">
              <IconButton onClick={() => "Opening settings."} sx={{ p: 0 }}>
                <Avatar>CO</Avatar>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      <Container component="main">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <ProjectCard />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default function App() {
  return <AppContent />;
}