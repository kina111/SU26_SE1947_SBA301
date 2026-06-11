package org.ats.features.department.controller;

import jakarta.validation.Valid;
import jakarta.validation.ValidationException;
import lombok.RequiredArgsConstructor;
import org.ats.features.department.dto.DepartmentRequest;
import org.ats.features.department.service.DepartmentService;
import org.ats.features.entities.Department;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController // Spring Bean --> Container
@RequestMapping("/api/v1/departments")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class DepartmentController {
    private final DepartmentService departmentService;

    @GetMapping
    public ResponseEntity<Page<Department>> getDepartment(@RequestParam(name = "pageIndex", required = false, defaultValue = "1") Integer pageIndex,
                                                          @RequestParam(name = "pageSize", required = false, defaultValue = "5") Integer pageSize
                                                          ){
        Page<Department> page = departmentService.findAll(pageSize, pageIndex);

        return ResponseEntity.ok(page);
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody @Valid DepartmentRequest departmentRequest,
                                      BindingResult bindingResult
                                    ){

        if(bindingResult.hasErrors()){
            throw new ValidationException(bindingResult.getFieldError().getDefaultMessage());
        }



        return ResponseEntity.ok(Map.of("message", "Create a new department successful!"));
    }

}
