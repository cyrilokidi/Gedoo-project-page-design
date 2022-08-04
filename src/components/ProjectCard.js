import * as React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  AvatarGroup,
  Avatar,
  Chip,
  Stack
} from "@mui/material";
import {
  DashboardOutlined as DashboardOutlinedIcon,
  ExtensionOutlined as ExtensionOutlinedIcon
} from "@mui/icons-material";

function ProjectStakeholders() {
  return (
    <AvatarGroup max={3}>
      <Avatar alt="Stakeholder" src="https://random.imagecdn.app/500/150" />
      <Avatar alt="Stakeholder" src="https://random.imagecdn.app/500/150" />
      <Avatar alt="Stakeholder" src="https://random.imagecdn.app/500/150" />
      <Avatar alt="Stakeholder" src="https://random.imagecdn.app/500/150" />
    </AvatarGroup>
  );
}

function ProjectStats() {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        flexGrow: 1
      }}
    >
      <Chip
        icon={<DashboardOutlinedIcon />}
        label="36"
        color="warning"
        variant="filled"
      />
      <Chip
        icon={<ExtensionOutlinedIcon />}
        label="4"
        color="info"
        variant="filled"
      />
    </Stack>
  );
}

export default function ProjectCard({ title, description }) {
  return (
    <Card elevation={0} sx={{ borderRadius: 0, boxShadow: 3 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <ProjectStakeholders />
        <ProjectStats />
        <Button sx={{ ml: 2 }}>more</Button>
      </CardActions>
    </Card>
  );
}
