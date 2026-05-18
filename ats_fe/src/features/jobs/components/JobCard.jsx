const JobCard = ({ job }) => {
  // Logic
  // Call API, create function for eventd handlers, etc.


  // UI 

  return (
    <div className="card rounded border-start border-5 border-info border-0 shadow pb-3 px-3" style={{ width: "90%" }, { height: "400px" } }>
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
      </div>
      <hr/>
        <a href="#" className="text-decoration-none text-info fw-bold">      
        View Details 
        </a>
    </div>
  );
};

export default JobCard;
