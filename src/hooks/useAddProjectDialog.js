import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  description: Yup.string()
});

const initialValues = {
  name: "",
  description: ""
};

export const useAddProjectDialog = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => console.log(values)
  });

  return {
    formik
  };
};
