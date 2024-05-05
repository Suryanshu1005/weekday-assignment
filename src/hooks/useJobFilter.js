import {useState, useEffect} from "react";

// creating a custom hook to handle the job filters

const useJobFilter = (jobs, initialFilters) => {
  const [filters, setFilters] = useState(initialFilters);
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  useEffect(() => {
    // using roles, name of the company, experience, base pay salary,
    //and Company name to filter jobs as they are provided in the api

    const filtered = jobs.filter((job) => {
      const roleFilter = filters.roles ? filters.roles.toLowerCase() : "";
      const searchFilter = filters.search ? filters.search.toLowerCase() : "";
      const experienceFilter = filters.exp;
      const basePayFilter = filters.basePay;

      //   handling the case where the minJdSalary could be null
      const isMinJdSalaryValid =
        job.minJdSalary !== null && job.minJdSalary !== undefined;

      return (
        (!roleFilter || job.jobRole.toLowerCase().includes(roleFilter)) &&
        (!searchFilter ||
          job.companyName.toLowerCase().includes(searchFilter)) &&
        (experienceFilter === null || job.minExp === experienceFilter) &&
        (basePayFilter === null ||
          (isMinJdSalaryValid &&
            job.minJdSalary >= 0 &&
            job.minJdSalary <= basePayFilter))
      );
    });

    setFilteredJobs(filtered);
  }, [jobs, filters]);

  const handleFilterChange = (filterName, value) => {
    setFilters({...filters, [filterName]: value});
  };

  return {filteredJobs, filters, handleFilterChange};
};

export default useJobFilter;
