import React, { Fragment } from "react";
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography
} from "@mui/material";

export default function ProjectLayout({ children }) {
  return (
    <Fragment>
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
      {children}
    </Fragment>
  );
}
