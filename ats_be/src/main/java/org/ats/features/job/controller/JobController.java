package org.ats.features.job.controller;

import lombok.RequiredArgsConstructor;
import org.ats.features.department.dto.PageResponse;
import org.ats.features.job.dto.JobSearchRequest;
import org.ats.features.job.dto.JobSearchResponse;
import org.ats.features.job.service.JobService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;

@RestController
@RequestMapping("/api/v1/jobs")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class JobController {

    private final JobService jobService;

    /**
     * Search jobs với dynamic filters sử dụng Criteria API.
     * Tất cả params đều optional — nếu không truyền sẽ trả tất cả jobs.
     *
     * Ví dụ:
     * GET /api/v1/jobs/search?title=React&location=Ha
     * Noi&status=PUBLISHED&page=0&size=5
     */
    @GetMapping("/search")
    public ResponseEntity<PageResponse<JobSearchResponse>> searchJobs(
            @RequestParam(required = false) String title,
            @RequestParam(required = false) String location,
            @RequestParam(required = false) BigDecimal salaryMin,
            @RequestParam(required = false) BigDecimal salaryMax,
            @RequestParam(required = false) String status,
            @RequestParam(required = false) Long departmentId,
            @RequestParam(required = false, defaultValue = "0") Integer page,
            @RequestParam(required = false, defaultValue = "10") Integer size,
            @RequestParam(required = false, defaultValue = "id") String sortBy,
            @RequestParam(required = false, defaultValue = "ASC") String sortDir) {
        JobSearchRequest request = JobSearchRequest.builder()
                .title(title)
                .location(location)
                .salaryMin(salaryMin)
                .salaryMax(salaryMax)
                .status(status)
                .departmentId(departmentId)
                .page(page)
                .size(size)
                .sortBy(sortBy)
                .sortDir(sortDir)
                .build();

        PageResponse<JobSearchResponse> result = jobService.searchJobs(request);
        return ResponseEntity.ok(result);
    }
}
