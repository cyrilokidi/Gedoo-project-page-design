import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  CssBaseline,
  IconButton,
  Pagination,
  Stack,
  Toolbar,
  Tooltip,
  Typography
} from "@mui/material";
import SearchProject from "./components/SearchProject";
import Projects from "./components/Projects";

const theme = createTheme();

const projects = [
  {
    title: "Wall construction",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
  },
  {
    title: "Foundation preparation",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
  },
  {
    title: "Ground floor",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
  },
  {
    title: "Partitioning",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
  },
  {
    title: "Curing",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
  },
  {
    title: "Finishing",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
  }
];

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
      <Container maxWidth="md" component="main" sx={{ mt: 4, mb: 4 }}>
        <Stack spacing={2}>
          <SearchProject />
          <Projects projects={projects} />
          <Pagination count={10} showFirstButton showLastButton />
        </Stack>
      </Container>
    </ThemeProvider>
  );
}

export default function App() {
  return <AppContent />;
}
