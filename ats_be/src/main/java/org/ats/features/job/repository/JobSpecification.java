package org.ats.features.job.repository;

import jakarta.persistence.criteria.Join;
import jakarta.persistence.criteria.JoinType;
import org.ats.features.entities.Department;
import org.ats.features.entities.Department_;
import org.ats.features.entities.Job;
import org.ats.features.entities.Job_;
import org.springframework.data.jpa.domain.Specification;

import java.math.BigDecimal;

/**
 * Utility class chứa các static method trả về Specification<Job>.
 *
 * Mỗi method tương ứng với 1 điều kiện lọc:
 * - Nếu param null/blank → trả về Specification rỗng (không lọc)
 * - Nếu param có giá trị → trả về Specification với Predicate tương ứng
 *
 * Sử dụng: Specification.where(titleContains("dev")).and(locationContains("HN"))
 */
public final class JobSpecification {

    private JobSpecification() {
        // Utility class – không cho phép khởi tạo
    }

    /**
     * LIKE search cho title: WHERE LOWER(title) LIKE '%keyword%'
     */
    public static Specification<Job> titleContains(String title) {
        return (root, query, cb) -> {
            if (title == null || title.isBlank()) return cb.conjunction();
            return cb.like(
                    cb.lower(root.get(Job_.title)),
                    "%" + title.toLowerCase() + "%"
            );
        };
    }

    /**
     * LIKE search cho location: WHERE LOWER(location) LIKE '%keyword%'
     */
    public static Specification<Job> locationContains(String location) {
        return (root, query, cb) -> {
            if (location == null || location.isBlank()) return cb.conjunction();
            return cb.like(
                    cb.lower(root.get(Job_.location)),
                    "%" + location.toLowerCase() + "%"
            );
        };
    }

    /**
     * So sánh >= cho salaryMin: WHERE salary_min >= :value
     */
    public static Specification<Job> salaryMinGreaterThanOrEqual(BigDecimal salaryMin) {
        return (root, query, cb) -> {
            if (salaryMin == null) return cb.conjunction();
            return cb.greaterThanOrEqualTo(root.get(Job_.salaryMin), salaryMin);
        };
    }

    /**
     * So sánh <= cho salaryMax: WHERE salary_max <= :value
     */
    public static Specification<Job> salaryMaxLessThanOrEqual(BigDecimal salaryMax) {
        return (root, query, cb) -> {
            if (salaryMax == null) return cb.conjunction();
            return cb.lessThanOrEqualTo(root.get(Job_.salaryMax), salaryMax);
        };
    }

    /**
     * Equal cho status: WHERE status = :value
     */
    public static Specification<Job> statusEquals(String status) {
        return (root, query, cb) -> {
            if (status == null || status.isBlank()) return cb.conjunction();
            return cb.equal(root.get(Job_.status), status);
        };
    }

    /**
     * JOIN + Equal cho departmentId:
     * JOIN departments d ON j.department_id = d.id WHERE d.id = :value
     */
    public static Specification<Job> departmentIdEquals(Long departmentId) {
        return (root, query, cb) -> {
            if (departmentId == null) return cb.conjunction();
            Join<Job, Department> departmentJoin = root.join(Job_.department, JoinType.INNER);
            return cb.equal(departmentJoin.get(Department_.id), departmentId);
        };
    }
}
