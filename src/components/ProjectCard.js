import * as React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from "@mui/material";

export default function ProjectCard() {
  return (
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
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">more</Button>
      </CardActions>
    </Card>
  );
}
