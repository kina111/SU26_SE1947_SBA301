package org.ats.features.department.service;

import org.ats.features.department.dto.DepartmentRequest;
import org.ats.features.entities.Department;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface DepartmentService {
    Long create(DepartmentRequest departmentRequest);
    Department update(DepartmentRequest departmentRequest);

    Department findById(Long id);
    Page<Department> findAll(Integer size, Integer index);
}
