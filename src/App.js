import * as React from "react";
import { Container, Pagination, Stack } from "@mui/material";
import SearchProject from "./components/SearchProject";
import Projects from "./components/Projects";
import ProjectLayout from "./components/ProjectLayout";
import ProjectHeader from "./components/ProjectHeader";
import AddProjectDialog from "./components/AddProjectDialog";
import { projects } from "./data";
import { useApp } from "./hooks/useApp";

function AppContent() {
  const { openAddDialog, handleOpenAddDialog, handleCloseAddDialog } = useApp();

  return (
    <ProjectLayout>
      <Container maxWidth="md" component="main" sx={{ mt: 4, mb: 4 }}>
        <Stack spacing={2}>
          <AddProjectDialog
            open={openAddDialog}
            onClose={handleCloseAddDialog}
          />
          <ProjectHeader onOpenAddDialog={handleOpenAddDialog} />
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
