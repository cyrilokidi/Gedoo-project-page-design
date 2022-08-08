import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import ProjectDetailsForm from "../components/ProjectDetailsForm";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  description: Yup.string()
});

const initialValues = {
  name: "",
  description: ""
};

export const useAddProjectDialog = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const [project, setProject] = useState({
    name: "",
    description: ""
  });

  const handleSaveDetails = (details) => {
    setProject({ ...project, ...details });
    handleNext();
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => handleSaveDetails(values)
  });

  const steps = ["Details", "Stakeholders", "Review"];

  const renderStep = (activeStep) => {
    switch (activeStep) {
      case 0:
        return <ProjectDetailsForm formik={formik} />;

      default:
        return <>No step selected</>;
    }
  };

  return {
    activeStep,
    isStepOptional,
    isStepSkipped,
    handleNext,
    handleBack,
    handleSkip,
    handleReset,
    steps,
    renderStep
  };
};
