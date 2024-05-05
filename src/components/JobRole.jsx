import {Typography} from "@mui/material";
import React from "react";

const JobRole = ({job}) => {
  return (
    <Typography
      fontSize={18}
      gap={10}
      color={"black"}
      ml={2}
      fontFamily={"Lexend"}
      fontWeight={300}
    >
      {job.jobRole}
    </Typography>
  );
};

export default JobRole;
