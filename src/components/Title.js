import { Typography } from "@mui/material";
import * as React from "react";

function TitleContent({ children }) {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {children}
    </Typography>
  );
}

export default function Title() {
  return <TitleContent />;
}
