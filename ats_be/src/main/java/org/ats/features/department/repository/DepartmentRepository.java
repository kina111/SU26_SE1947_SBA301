package org.ats.features.department.repository;

import org.ats.features.entities.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, Long> {
    boolean existsByDepartmentName(String name);

    Department findByDepartmentName(String name);
}
