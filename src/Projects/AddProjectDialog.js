import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Grid,
  TextField,
  DialogTitle
} from "@mui/material";
import { useAddProjectDialog } from "../hooks/useAddProjectDialog";

export default function BasicModal({ open, onClose }) {
  const { formik } = useAddProjectDialog();

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Project</DialogTitle>
      <DialogContent>
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
                required
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
                  formik.touched.description &&
                  Boolean(formik.errors.description)
                }
                helperText={
                  formik.touched.description && formik.errors.description
                }
              />
            </Grid>
          </Grid>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button type="submit" fullWidth variant="contained">
              save
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
