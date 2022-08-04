import { Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";

export default function Projects({ projects }) {
  return (
    <Grid container rowSpacing={2}>
      {projects.map(({ title, description }) => (
        <Grid item sm={12}>
          <ProjectCard key={title} title={title} description={description} />
        </Grid>
      ))}
    </Grid>
  );
}
