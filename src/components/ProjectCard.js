import * as React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from "@mui/material";

export default function ProjectCard({ title, coverImage, description }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        alt="Project image"
        src={coverImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">more</Button>
      </CardActions>
    </Card>
  );
}
