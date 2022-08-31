import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Link,
  Drawer as MuiDrawer,
  Box,
  AppBar as MuiAppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  Badge,
  Container,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Grid,
  Card,
  CardContent,
  Stack,
  Button,
  Paper
} from "@mui/material";
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  Notifications as NotificationsIcon,
  DashboardOutlined as DashboardOutlinedIcon,
  HandymanOutlined as HandymanOutlinedIcon,
  PeopleOutlined as PeopleOutlinedIcon,
  TaskAltOutlined as TaskAltOutlinedIcon,
  AddOutlined as AddOutlinedIcon,
  EditOutlined as EditOutlinedIcon
} from "@mui/icons-material";

const activities = [
  { name: "Prepare foundation" },
  { name: "Erect first half of wall" },
  { name: "Erect second half of wall" }
];

const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <HandymanOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Activities" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Stakeholders" />
    </ListItemButton>
  </React.Fragment>
);

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9)
      }
    })
  }
}));

function ProjectDetails() {
  return (
    <Paper sx={(theme) => ({ p: theme.spacing(2) })}>
      <Box sx={(theme) => ({ mb: theme.spacing(2) })}>
        <Typography gutterBottom variant="h5" component="div">
          Wall construction
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Home compound perimeter wall construction
        </Typography>
      </Box>
      <Stack direction="row">
        <Stack direction="row" sx={{ flexGrow: 1 }}>
          <Typography color="text.secondary">15 March, 2019</Typography>
        </Stack>
        <Button startIcon={<EditOutlinedIcon />} sx={{ ml: 2 }}>
          edit
        </Button>
      </Stack>
    </Paper>
  );
}

function ActivitiesHeader() {
  return (
    <Stack spacing={2}>
      <Stack direction="row">
        <Typography component="h4" variant="h5" sx={{ flexGrow: 1 }}>
          Activities
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddOutlinedIcon />}
          onClick={() => console.log("Add activity")}
        >
          add activity
        </Button>
      </Stack>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        58 total activities
      </Typography>
    </Stack>
  );
}

function Activity({ name }) {
  return (
    <Card>
      <CardContent>
        <Box sx={(theme) => ({ mb: theme.spacing(2) })}>
          <Typography variant="body2" color="text.secondary">
            {name}
          </Typography>
        </Box>
        <Stack direction="row">
          <Stack direction="row" sx={{ flexGrow: 1 }}>
            <Badge badgeContent={12} color="primary">
              <TaskAltOutlinedIcon color="action" />
            </Badge>
          </Stack>
          <Button sx={{ ml: 2 }}>more</Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

function ListActivities({ activities }) {
  return (
    <Grid container rowSpacing={2}>
      {activities.map(({ name }, i) => (
        <Grid key={i} item sm={12}>
          <Activity name={name} />
        </Grid>
      ))}
    </Grid>
  );
}

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="absolute" open={open}>
        <Toolbar
          sx={{
            pr: "24px" // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" })
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1]
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">{mainListItems}</List>
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto"
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <ProjectDetails />
            </Grid>
            <Grid item xs={12} md={6} lg={8}>
              <Stack spacing={2}>
                <ActivitiesHeader />
                <ListActivities activities={activities} />
              </Stack>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              Activity tasks
            </Grid>
          </Grid>
          <Copyright sx={{ pt: 4 }} />
        </Container>
      </Box>
    </Box>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
