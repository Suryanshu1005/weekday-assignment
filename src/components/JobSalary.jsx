import {Typography} from "@mui/material";
import React from "react";

const JobSalary = ({job}) => {
  return (
    <Typography
      variant="h6"
      fontWeight={500}
      gap={10}
      color={"grey"}
      fontFamily={"Lexend"}
      // ml={2}
      letterSpacing={1}
      fontSize={16}
    >
      {/* if the value of minimum or max salary is null, the case is handled accordingly */}
      Estimated Salary: ₹
      {job.minJdSalary !== null
        ? job.maxJdSalary !== null
          ? `${job.minJdSalary} - ${job.maxJdSalary} LPA ✅`
          : `${job.minJdSalary} LPA onwards ✅`
        : job.maxJdSalary !== null
        ? `${job.maxJdSalary} LPA ✅`
        : "Not Specified ✅"}
    </Typography>
  );
};

export default JobSalary;
