import React, { useEffect, useState } from "react";
import jobService from "../services/job.service";
import JobCard from "../components/JobCard";

const ViewJobListPosting = () => {
  // React Hooks
  const [jobs, setJobs] = useState([]); // [], null, undefined, 0, false, ''

  // Mounting --> Call API to get all job postings
  // Param 1: callback function to execute
  // Param 2: [] --> only execute callback function when component is mounted (first time render)
  useEffect(() => {
    async function fetchData() {
      // Call service to get all job postings
      const response = await jobService.findAll();
      console.log(response);

      // Change state
      setJobs(response);
      // ...
    }
    fetchData();
  }, []);

  return (
    <div className="container" style={{ height: "100vh" }}>
      <h3 className="my-3">Open Positions</h3>
      <div
        className="row d-flex justify-content-start align-items-start">
        {jobs.map((job) => (
          <div className="col-md-6 g-3 my-3" key={job.id}>
            <JobCard job={job} />
          </div>
        ))}
      </div>
      <div className="row d-flex justify-content-start align-items-start"></div>
    </div>
  );
};

export default ViewJobListPosting;
