import * as React from "react";
import {
  Button,
  Card,
  Box,
  CardContent,
  Typography,
  AvatarGroup,
  Avatar,
  Stack
} from "@mui/material";

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

export default function Project({ title, description }) {
  return (
    <Card>
      <CardContent>
        <Box sx={(theme) => ({ mb: theme.spacing(3) })}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Box>
        <Stack direction="row">
          <Stack direction="row" sx={{ flexGrow: 1 }}>
            <ProjectStakeholders />
          </Stack>
          <Button sx={{ ml: 2 }}>more</Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
