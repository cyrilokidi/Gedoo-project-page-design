import { Box, Button, Grid, TextField } from "@mui/material";

export default function ProjectDetailsForm({ formik }) {
  return (
    <Box
      component="form"
      noValidate
      sx={{ mt: 3 }}
      onSubmit={formik.handleSubmit}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12}>
          <TextField
            fullWidth
            id="name"
            name="name"
            placeholder="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <TextField
            fullWidth
            multiline
            id="description"
            name="description"
            placeholder="Description"
            rows={4}
            value={formik.values.description}
            onChange={formik.handleChange}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
          />
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button type="submit" fullWidth variant="contained">
          save
        </Button>
      </Box>
    </Box>
  );
}
