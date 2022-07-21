import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  Toolbar,
  Tooltip,
  Typography
} from "@mui/material";

const theme = createTheme();

export default function App() {
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
            <Card>
              <CardMedia
                component="img"
                height="140"
                alt="Project image"
                src="https://random.imagecdn.app/500/150"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Wall construction
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">more</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
