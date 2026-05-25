import React, { useEffect, useState } from "react";
import HeroSection from "../../../shared/components/HeroSection";
import ViewJobListPosting from "./ViewJobListPosting";
import jobService from "../services/job.service";

const ViewJobListPage = () => {
  const [keyword, setKeyword] = useState("");
  const [jobs, setJobs] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await jobService.findAll();
      setJobs(response);
      setSearchResults(response);
    }
    fetchData();
  }, []);


  useEffect(() => {
    if (!keyword) {
      setSearchResults(jobs);
      return;
    }
    const lower = keyword.toLowerCase();
    setSearchResults(
      jobs.filter(
        (j) =>
          j.title.toLowerCase().includes(lower) ||
          j.category.toLowerCase().includes(lower) ||
          j.skills.some((s) => s.toLowerCase().includes(lower))
      )
    );
  }, [keyword, jobs]);

  return (
    <>
      <HeroSection setKeyword={setKeyword} />
      <ViewJobListPosting jobs={searchResults} />
    </>
  );
};

export default ViewJobListPage;
