import React from "react";
import jobService from "../services/job.service";
import JobCard from "../components/JobCard";

const ViewJobListPosting = ({ jobs }) => {
  const addToMyFavourite = async (job) => {
    job.numberOfApplicants += 1;
    job.numberOfFavourites += 1;
    await jobService.addToMyFavourite(job.id);
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">
        <div className="d-flex align-items-center gap-2">
          <h3 className="m-0 fw-bold text-dark">Open Positions</h3>
          <span
            className="badge rounded-pill px-3 py-2"
            style={{
              backgroundColor: "#eef2ff",
              color: "#4f46e5",
              border: "1px solid #c7d2fe",
              fontWeight: 600,
            }}
          >
            {jobs.length} openings
          </span>
        </div>
        <select className="form-select w-auto" defaultValue="recent">
          <option value="recent">Sort by: Most Recent</option>
          <option value="oldest">Sort by: Oldest</option>
        </select>
      </div>

      <div className="row g-4">
        {jobs.map((job) => (
          <div className="col-md-6" key={job.id}>
            <JobCard job={job} addToMyFavourite={addToMyFavourite} />
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center my-5">
        <button
          className="btn rounded-pill px-4 py-2 fw-semibold"
          style={{
            backgroundColor: "white",
            border: "1.5px solid #4f46e5",
            color: "#4f46e5",
          }}
        >
          Load More Jobs
        </button>
      </div>
    </div>
  );
};

export default ViewJobListPosting;
