import * as React from "react";
import { Container, Pagination, Stack } from "@mui/material";
import SearchProject from "./components/SearchProject";
import Projects from "./components/Projects";
import ProjectLayout from "./components/ProjectLayout";
import ProjectHeader from "./components/ProjectHeader";

const projects = [
  {
    title: "Wall construction",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
  },
  {
    title: "Foundation preparation",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
  },
  {
    title: "Ground floor",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
  },
  {
    title: "Partitioning",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
  },
  {
    title: "Curing",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
  },
  {
    title: "Finishing",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
  }
];

function AppContent() {
  return (
    <ProjectLayout>
      <Container maxWidth="md" component="main" sx={{ mt: 4, mb: 4 }}>
        <Stack spacing={2}>
          <ProjectHeader />
          <SearchProject />
          <Projects projects={projects} />
          <Pagination count={10} showFirstButton showLastButton />
        </Stack>
      </Container>
    </ProjectLayout>
  );
}

export default function App() {
  return <AppContent />;
}
