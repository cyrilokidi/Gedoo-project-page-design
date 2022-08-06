import { Box, Button, Grid, TextField } from "@mui/material";

export default function ProjectDetailsForm({ activeStep, onSubmit }) {
  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12}>
          <TextField fullWidth id="name" name="name" placeholder="Name" />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <TextField
            fullWidth
            multiline
            id="description"
            name="description"
            placeholder="Description"
            rows={4}
          />
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button onClick={onSubmit} fullWidth variant="contained">
          save
        </Button>
      </Box>
    </form>
  );
}
