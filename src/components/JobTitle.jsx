import {Typography} from "@mui/material";
import React from "react";

const JobTitle = ({job}) => {
  return (
    <Typography
      fontSize={16}
      fontFamily={"Lexend"}
      fontWeight={500}
      letterSpacing={1}
      gap={10}
      color={"darkgray"}
      ml={2}
    >
      {job.companyName !== null ? job.companyName : "Company Name"}
    </Typography>
  );
};

export default JobTitle;
