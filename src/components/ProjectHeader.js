import { Button, Stack, Typography } from "@mui/material";
import { AddOutlined as AddOutlinedIcon } from "@mui/icons-material";

export default function ProjectHeader(params) {
  return (
    <Stack direction="row">
      <Typography component="h2" variant="h4" sx={{ flexGrow: 1 }}>
        Projects
      </Typography>
      <Button variant="contained" startIcon={<AddOutlinedIcon />}>
        add project
      </Button>
    </Stack>
  );
}
