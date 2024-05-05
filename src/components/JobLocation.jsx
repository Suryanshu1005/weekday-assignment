import {Typography} from "@mui/material";
import React from "react";

const JobLocation = ({job}) => {
  return (
    <Typography fontSize={14} fontWeight={400} gap={10} color={"black"} ml={2}>
      {job.location}
    </Typography>
  );
};

export default JobLocation;
