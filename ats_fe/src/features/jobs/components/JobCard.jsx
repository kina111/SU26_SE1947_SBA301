import React from 'react';
import { HeartFill } from 'react-bootstrap-icons';
import jobService from '../services/job.service';
const JobCard = ({ job, addToMyFavourite }) => {
  const [numberOfApplicants, setNumberOfApplicants] = React.useState(job.numberOfApplicants);
  const [numberOfFavourites, setNumberOfFavourites] = React.useState(job.numberOfFavourites);
  // Logic
  // Call API, create function for eventd handlers, etc.

  // UI 


  const addToMyFavourite2 = async (job) => {
    // Implementation for adding job to favourites
    setNumberOfFavourites(numberOfFavourites + 1); // Update UI immediately

    await jobService.addToMyFavourite(job.id);
  }

  return (
    <div className="card rounded border-start border-5 border-info border-0 shadow pb-3 px-3" style={{ width: "90%" }, { height: "480px" }}>
      <div className="card-body">
        <h3 className="card-title">{job.title}</h3>
        <h6 className="card-subtitle mb-2 text-muted">{job.location}</h6>
        <p className="card-text">
          {job.description}
        </p>
        <a href="#" className="card-link">
          Card link
        </a>
        <a href="#" className="card-link">
          Another link
        </a>
        <p className="card-text">
          <strong>Skills:</strong> {job.skills.join(", ")}
        </p>
        <p className="card-text">
          <strong>Employment Type:</strong> {job.employmentType}
        </p>
        <p className="card-text">
          <strong>Salary:</strong> {job.salary}
        </p>
        <div className='d-flex justify-content-between align-items-center'>

          <p className="card-text">
            <strong>Number of Applicants: {numberOfApplicants}</strong>
          </p>

          <p className="card-text">
            <strong>Number of Favourites: {numberOfFavourites}</strong>
          </p>

        </div>

      </div>

      <hr />
      <div className="d-flex justify-content-between align-items-center px-3">

        <a href="#" className="text-decoration-none text-info fw-bold">
          View Details
        </a>

        <a href="#" className={`btn btn-info text-white fw-bold ${numberOfApplicants>0?'disabled':''}`} onClick={() => { setNumberOfApplicants(numberOfApplicants + 1) }}>
          Apply Now
        </a>

        <HeartFill style={{ color: "red" }} onClick={() => addToMyFavourite2(job)} />

      </div>
    </div>
  );
};

export default JobCard;
