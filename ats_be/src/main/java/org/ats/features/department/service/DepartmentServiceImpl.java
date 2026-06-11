package org.ats.features.department.service;

import lombok.RequiredArgsConstructor;
import org.ats.exception.DepartmentInvalidException;
import org.ats.features.department.dto.DepartmentRequest;
import org.ats.features.department.repository.DepartmentRepository;
import org.ats.features.entities.Department;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class DepartmentServiceImpl implements DepartmentService {

    private final DepartmentRepository departmentRepository;

    @Transactional
    @Override
    public Long create(DepartmentRequest departmentRequest) {
        //Validate
        if (departmentRepository.existsByDepartmentName(departmentRequest.getDepartmentName())) {
            throw new DepartmentInvalidException("Department name is existing!"); // Checked - compile-time
        }

        return departmentRepository.save(fromDto(departmentRequest)).getId();
    }

    @Transactional
    @Override
    public Department update(DepartmentRequest departmentRequest) {
        Department department = departmentRepository.findByDepartmentName(departmentRequest.getDepartmentName());

        if ((department != null) && (department.getId() != departmentRequest.getId())) {
            throw new DepartmentInvalidException("Department name is existing!");
        }

        return departmentRepository.save(fromDto(departmentRequest));
    }

    @Override
    public Department findById(Long id) {
        return departmentRepository.findById(id).orElseThrow(()->{
            return new DepartmentInvalidException("Department not found!");
        });
    }

    @Override
    @Transactional
    public Page<Department> findAll(Integer size, Integer index) {
        Pageable pageable = PageRequest.of(index, size, Sort.by(Sort.Direction.ASC, "departmentName"));

        return departmentRepository.findAll(pageable);
    }

    private Department fromDto(DepartmentRequest departmentRequest) {
        return Department.builder()
                .id(departmentRequest.getId())
                .departmentName(departmentRequest.getDepartmentName())
                .description(departmentRequest.getDescription())
                .build();

    }
}
