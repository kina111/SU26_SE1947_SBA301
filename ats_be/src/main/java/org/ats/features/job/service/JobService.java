package org.ats.features.job.service;

import org.ats.features.department.dto.PageResponse;
import org.ats.features.job.dto.JobSearchRequest;
import org.ats.features.job.dto.JobSearchResponse;

public interface JobService {
    PageResponse<JobSearchResponse> searchJobs(JobSearchRequest request);
}
