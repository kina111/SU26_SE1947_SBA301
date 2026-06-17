package org.ats.features.job.service;

import lombok.RequiredArgsConstructor;
import org.ats.features.department.dto.PageResponse;
import org.ats.features.entities.Job;
import org.ats.features.job.dto.JobSearchRequest;
import org.ats.features.job.dto.JobSearchResponse;
import org.ats.features.job.repository.JobCriteriaRepository;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class JobServiceImpl implements JobService {

    private final JobCriteriaRepository jobCriteriaRepository;

    @Override
    @Transactional(readOnly = true)
    public PageResponse<JobSearchResponse> searchJobs(JobSearchRequest request) {
        Page<Job> page = jobCriteriaRepository.searchJobs(request);

        List<JobSearchResponse> content = page.getContent().stream()
                .map(this::toResponse)
                .collect(Collectors.toList());

        PageResponse<JobSearchResponse> response = new PageResponse<>();
        response.setCurrentPage(page.getNumber());
        response.setTotalPages(page.getTotalPages());
        response.setContent(content);

        return response;
    }

    private JobSearchResponse toResponse(Job job) {
        return JobSearchResponse.builder()
                .id(job.getId())
                .title(job.getTitle())
                .description(job.getDescription())
                .location(job.getLocation())
                .salaryMin(job.getSalaryMin())
                .salaryMax(job.getSalaryMax())
                .status(job.getStatus())
                .departmentName(job.getDepartment() != null ? job.getDepartment().getDepartmentName() : null)
                .publishedAt(job.getPublishedAt())
                .deadline(job.getDeadline())
                .build();
    }
}
