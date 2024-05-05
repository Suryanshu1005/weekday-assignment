import {Typography} from "@mui/material";
import React from "react";

const JobExperience = ({job}) => {
  return (
    <>
      <Typography fontSize={18} fontWeight={500} gap={10} color={"grey"}>
        Minimum Experience: <br />
      </Typography>
      <Typography
        fontSize={18}
        fontWeight={400}
        gap={10}
        color={"#393939"}
        mb={2}
      >
        {job.minExp ? `${job.minExp} years` : "Not Specified"}
      </Typography>
    </>
  );
};

export default JobExperience;
