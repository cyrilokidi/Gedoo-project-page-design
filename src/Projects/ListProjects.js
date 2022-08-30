import { Grid } from "@mui/material";
import Project from "./Project";

export default function ListProjects({ projects }) {
  return (
    <Grid container rowSpacing={2}>
      {projects.map(({ title, description }) => (
        <Grid item sm={12}>
          <Project key={title} title={title} description={description} />
        </Grid>
      ))}
    </Grid>
  );
}
