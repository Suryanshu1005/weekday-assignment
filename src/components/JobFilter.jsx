import Select from "react-select";
import React from "react";
import {Input} from "@mui/material";
import {exp, minBasePay, numberOfEmployees, remote, roles} from "../constants";
import useFilterHandlers from "../hooks/useFilterHandlers";

const JobFilter = ({filters, onFilterChange}) => {
  // creating custom styling for the filter dropdowns
  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: 200,
    }),
    menu: (provided) => ({
      ...provided,
      width: 200,
    }),
  };

  //calling custom hook to handle the filter change
  const {
    handleRoleChange,
    handleExpChange,
    handleMinBasePayChange,
    handleSearchChange,
  } = useFilterHandlers(onFilterChange);

  return (
    <div className="filter-container">
      <Select
        isClearable={true}
        styles={customStyles}
        placeholder="Roles"
        options={roles}
        onChange={handleRoleChange}
        value={roles.filter((role) => role.value === filters.roles)}
      />
      <Select
        isClearable={true}
        placeholder="No. of Employees"
        options={numberOfEmployees}
        styles={customStyles}
      />
      <Select
        isClearable={true}
        styles={customStyles}
        placeholder="Experience"
        options={exp}
        onChange={handleExpChange}
        value={exp.filter((exp) => exp.value === filters.exp)}
      />
      <Select
        isClearable={true}
        styles={customStyles}
        placeholder="Remote"
        options={remote}
      />
      <Select
        isClearable={true}
        styles={customStyles}
        placeholder="Min Base Pay Salary"
        options={minBasePay}
        onChange={handleMinBasePayChange}
        value={minBasePay.filter(
          (basePay) => basePay.value === filters.basePay
        )}
      />
      <Input
        placeholder="Search Company name"
        onChange={handleSearchChange}
        sx={{
          border: "1px solid grey",
          paddingLeft: "10px",
          borderRadius: "6px",
          width: "200px",
        }}
      />
    </div>
  );
};

export default JobFilter;
