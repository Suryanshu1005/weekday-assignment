// components/JobsList.js
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchJobs} from "../features/jobs/jobSlice";
import JobFilter from "./JobFilter";
import useJobFilter from "../hooks/useJobFilter";
import JobCard from "./JobCard";

const AllJobs = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobs);
  const loading = useSelector((state) => state.jobs.loading);
  const limit = 10;

  const {filteredJobs, filters, handleFilterChange} = useJobFilter(jobs, {
    roles: "",
    basePay: null,
    location: "",
    exp: null,
    search: "",
  });

  //using dispatch to fetch the data from the redux store,
  //when the component mounts or when the dispatch function changes.

  useEffect(() => {
    dispatch(fetchJobs({limit: limit, offset: 0}));
  }, [dispatch]);

  const fetchMore = () => {
    // Calculate the offset for the next page based on the current jobs length
    //using setTimeout as the API call was too fast and it was upable to show the infitine scroll.
    setTimeout(() => {
      const offset = jobs.length;
      dispatch(fetchJobs({...filters, limit: limit + 10, offset: offset}));
    }, 1500);
  };

  return (
    <div className="container">
      <JobFilter filters={filters} onFilterChange={handleFilterChange} />
      {filteredJobs.length > 0 ? (
        <JobCard
          jobs={filteredJobs}
          loading={loading}
          fetchMore={fetchMore}
          filter={filters}
        />
      ) : (
        <p>No Jobs available for this category at the moment</p>
      )}
    </div>
  );
};

export default AllJobs;
