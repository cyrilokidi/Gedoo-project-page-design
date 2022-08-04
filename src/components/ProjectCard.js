import * as React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  AvatarGroup,
  Avatar,
  Chip
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

export default function ProjectCard({ title, coverImage, description }) {
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
        <Button size="small">more</Button>
      </CardActions>
    </Card>
  );
}
