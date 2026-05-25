import React from "react";
import { GeoAlt, Clock } from "react-bootstrap-icons";

const categoryStyles = {
  Engineering: { border: "#4f46e5", bg: "#dbeafe", color: "#2563eb" },
  Design: { border: "#7c3aed", bg: "#ede9fe", color: "#7c3aed" },
  "Product Management": { border: "#db2777", bg: "#fce7f3", color: "#db2777" },
  Marketing: { border: "#ea580c", bg: "#ffedd5", color: "#ea580c" },
  Analytics: { border: "#0d9488", bg: "#ccfbf1", color: "#0d9488" },
  "Data Science": { border: "#0d9488", bg: "#ccfbf1", color: "#0d9488" },
};
const defaultStyle = { border: "#4f46e5", bg: "#dbeafe", color: "#2563eb" };

const JobCard = ({ job }) => {
  const style = categoryStyles[job.category] || defaultStyle;
  const shortDesc =
    job.description?.length > 110
      ? job.description.slice(0, 110) + "..."
      : job.description;

  return (
    <div
      className="card shadow-sm h-100"
      style={{
        border: "1px solid #e2e8f0",
        borderLeft: `6px solid ${style.border}`,
        borderRadius: 12,
        overflow: "hidden",
      }}
    >
      <div className="card-body p-4 d-flex flex-column">
        <span
          className="badge align-self-start mb-3 px-2 py-1"
          style={{
            backgroundColor: style.bg,
            color: style.color,
            fontWeight: 700,
            fontSize: 11,
          }}
        >
          {job.category?.toUpperCase()}
        </span>

        <h5 className="fw-bold mb-3 text-dark">{job.title}</h5>

        <div className="d-flex align-items-center flex-wrap gap-3 mb-3 small text-secondary">
          <span>
            <GeoAlt className="me-1" /> {job.location}
          </span>
          <span>
            <Clock className="me-1" /> Posted recently
          </span>
          <span
            className="badge rounded-pill"
            style={{
              backgroundColor: "white",
              border: "1.2px solid #059669",
              color: "#059669",
              fontWeight: 600,
            }}
          >
            {job.employmentType}
          </span>
        </div>

        <p className="text-secondary small mb-3">{shortDesc}</p>

        <div className="d-flex flex-wrap gap-2 mb-3">
          {job.skills?.map((s) => (
            <span
              key={s}
              className="badge fw-normal"
              style={{ backgroundColor: "#f1f5f9", color: "#475569" }}
            >
              {s}
            </span>
          ))}
        </div>

        <hr className="my-2" style={{ borderColor: "#f1f5f9" }} />

        <a
          href="#"
          className="text-decoration-none fw-semibold mt-2"
          style={{ color: "#4f46e5" }}
        >
          View Details →
        </a>
      </div>
    </div>
  );
};

export default JobCard;
