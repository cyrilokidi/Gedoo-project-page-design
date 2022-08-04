import { Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";

export default function Projects({ projects }) {
  return (
    <Grid container spacing={2}>
      {projects.map(({ title, coverImage, description }) => (
        <Grid item sm={12}>
          <ProjectCard
            key={title}
            title={title}
            coverImage={coverImage}
            description={description}
          />
        </Grid>
      ))}
    </Grid>
  );
}
