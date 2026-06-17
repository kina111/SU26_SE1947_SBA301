package org.ats.features.job.repository;

import org.ats.features.entities.Job;
import org.ats.features.entities.Job_;
import org.ats.features.job.dto.JobSearchRequest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Repository;

import static org.ats.features.job.repository.JobSpecification.*;

@Repository
public class JobCriteriaRepository {

    private final JobRepository jobRepository;

    public JobCriteriaRepository(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    /**
     * Tìm kiếm Job sử dụng Spring Data JPA Specification.
     *
     * Thay vì dùng EntityManager + CriteriaBuilder thủ công,
     * ta compose các Specification nhỏ lại với nhau bằng .and().
     * Spring Data JPA tự động xử lý query + count + pagination.
     */
    public Page<Job> searchJobs(JobSearchRequest request) {

        // ========== 1. Compose các Specification ==========
        Specification<Job> spec = Specification
                .where(titleContains(request.getTitle()))
                .and(locationContains(request.getLocation()))
                .and(salaryMinGreaterThanOrEqual(request.getSalaryMin()))
                .and(salaryMaxLessThanOrEqual(request.getSalaryMax()))
                .and(statusEquals(request.getStatus()))
                .and(departmentIdEquals(request.getDepartmentId()));

        // ========== 2. Sorting ==========
        String sortBy = request.getSortBy() != null ? request.getSortBy() : Job_.ID;
        Sort sort = "DESC".equalsIgnoreCase(request.getSortDir())
                ? Sort.by(Sort.Direction.DESC, sortBy)
                : Sort.by(Sort.Direction.ASC, sortBy);

        // ========== 3. Pagination ==========
        int page = request.getPage() != null ? request.getPage() : 0;
        int size = request.getSize() != null ? request.getSize() : 10;
        Pageable pageable = PageRequest.of(page, size, sort);

        // ========== 4. Thực thi query ==========
        // Spring Data JPA tự động chạy count query + data query
        return jobRepository.findAll(spec, pageable);
    }
}
