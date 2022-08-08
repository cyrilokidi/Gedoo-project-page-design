import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  description: Yup.string()
});

const initialValues = {
  name: "",
  description: ""
};

export const useApp = () => {
  const [openAddDialog, setOpenDialog] = useState(false);
  const handleOpenAddDialog = () => setOpenDialog(true);
  const handleCloseAddDialog = () => setOpenDialog(false);
  const [project, setProject] = useState({
    name: "",
    description: ""
  });
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log("Values: ", values);
    }
  });

  return {
    openAddDialog,
    handleOpenAddDialog,
    handleCloseAddDialog,
    project,
    formik
  };
};
