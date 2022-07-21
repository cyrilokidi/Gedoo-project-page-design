import { Typography } from "@mui/material";
import { Fragment } from "react";
import Title from "./Title";

function TotalProjectStatContent() {
  return (
    <Fragment>
      <Title>Total</Title>
      <Typography component="p" variant="h4">
        4
      </Typography>
    </Fragment>
  );
}

export default function TotalProjectStat() {
  return <TotalProjectStatContent />;
}
