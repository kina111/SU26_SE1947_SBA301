package org.ats.config;

import org.ats.features.department.repository.DepartmentRepository;
import org.ats.features.entities.Department;
import org.ats.features.entities.Job;
import org.ats.features.job.repository.JobRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Component
public class DataSeeder implements CommandLineRunner {

    private final DepartmentRepository departmentRepository;
    private final JobRepository jobRepository;

    public DataSeeder(DepartmentRepository departmentRepository, JobRepository jobRepository) {
        this.departmentRepository = departmentRepository;
        this.jobRepository = jobRepository;
    }

    @Override
    public void run(String... args) {
        seedDepartments();
        seedJobs();
    }

    private void seedDepartments() {
        if (departmentRepository.count() > 0) {
            System.out.println(">>> Departments already seeded. Skipping...");
            return;
        }

        System.out.println(">>> Seeding departments...");

        List<Department> departments = List.of(
                Department.builder()
                        .departmentName("Software Development")
                        .description("Develops and maintains software applications and systems.")
                        .build(),
                Department.builder()
                        .departmentName("Design")
                        .description("Focuses on UI/UX design, user research, branding, and product experience optimization.")
                        .build(),
                Department.builder()
                        .departmentName("Infrastructure")
                        .description("Manages cloud infrastructure, DevOps, and system reliability.")
                        .build(),
                Department.builder()
                        .departmentName("Quality Assurance")
                        .description("Ensures software quality through manual testing, automation testing, and performance testing.")
                        .build(),
                Department.builder()
                        .departmentName("Data Analytics")
                        .description("Analyzes business data and generates actionable insights for strategic decision-making.")
                        .build(),
                Department.builder()
                        .departmentName("Project Management")
                        .description("Coordinates project planning, execution, delivery, and stakeholder communication.")
                        .build(),
                Department.builder()
                        .departmentName("Cybersecurity")
                        .description("Protects systems, networks, and applications against cyber threats and security vulnerabilities.")
                        .build(),
                Department.builder()
                        .departmentName("Artificial Intelligence")
                        .description("Builds machine learning models, AI solutions, and intelligent business applications.")
                        .build(),
                Department.builder()
                        .departmentName("Human Resources")
                        .description("Handles recruitment, employee engagement, training, and company culture development.")
                        .build(),
                Department.builder()
                        .departmentName("Marketing")
                        .description("Develops marketing strategies, manages campaigns, and promotes company products and services.")
                        .build()
        );

        departmentRepository.saveAll(departments);
        System.out.println(">>> Seeded " + departments.size() + " departments successfully!");
    }

    private void seedJobs() {
        if (jobRepository.count() > 0) {
                System.out.println(">>>  Count: " + jobRepository.count());
            System.out.println(">>>  Jobs already seeded. Skipping...");
            return;
        }

        System.out.println(">>> Seeding jobs...");

        // Lấy departments từ DB để link với jobs
        Department softwareDev = departmentRepository.findByDepartmentName("Software Development");
        Department design = departmentRepository.findByDepartmentName("Design");
        Department infrastructure = departmentRepository.findByDepartmentName("Infrastructure");
        Department qa = departmentRepository.findByDepartmentName("Quality Assurance");
        Department data = departmentRepository.findByDepartmentName("Data Analytics");
        Department pm = departmentRepository.findByDepartmentName("Project Management");
        Department security = departmentRepository.findByDepartmentName("Cybersecurity");
        Department ai = departmentRepository.findByDepartmentName("Artificial Intelligence");

        List<Job> jobs = List.of(
                Job.builder()
                        .title("Frontend React Developer")
                        .description("Develop scalable and responsive web applications using ReactJS and TypeScript. Collaborate closely with backend teams and UI/UX designers.")
                        .location("Ha Noi, Vietnam")
                        .salaryMin(new BigDecimal("20000000"))
                        .salaryMax(new BigDecimal("35000000"))
                        .status("PUBLISHED")
                        .department(softwareDev)
                        .publishedAt(LocalDateTime.of(2026, 5, 18, 0, 0))
                        .deadline(LocalDateTime.of(2026, 6, 20, 23, 59))
                        .build(),
                Job.builder()
                        .title("UI/UX Designer")
                        .description("Create intuitive and visually stunning user interfaces. Conduct user research and usability testing to deliver delightful product experiences.")
                        .location("Ho Chi Minh City, Vietnam")
                        .salaryMin(new BigDecimal("18000000"))
                        .salaryMax(new BigDecimal("30000000"))
                        .status("PUBLISHED")
                        .department(design)
                        .publishedAt(LocalDateTime.of(2026, 5, 20, 0, 0))
                        .deadline(LocalDateTime.of(2026, 6, 25, 23, 59))
                        .build(),
                Job.builder()
                        .title("Backend Java Developer")
                        .description("Build and maintain enterprise-grade backend services using Spring Boot and Microservices architecture.")
                        .location("Da Nang, Vietnam")
                        .salaryMin(new BigDecimal("25000000"))
                        .salaryMax(new BigDecimal("40000000"))
                        .status("PUBLISHED")
                        .department(softwareDev)
                        .publishedAt(LocalDateTime.of(2026, 5, 19, 0, 0))
                        .deadline(LocalDateTime.of(2026, 6, 22, 23, 59))
                        .build(),
                Job.builder()
                        .title("DevOps Engineer")
                        .description("Manage cloud infrastructure, automate deployments, and optimize CI/CD pipelines.")
                        .location("Ha Noi, Vietnam")
                        .salaryMin(new BigDecimal("30000000"))
                        .salaryMax(new BigDecimal("50000000"))
                        .status("PUBLISHED")
                        .department(infrastructure)
                        .publishedAt(LocalDateTime.of(2026, 5, 17, 0, 0))
                        .deadline(LocalDateTime.of(2026, 6, 18, 23, 59))
                        .build(),
                Job.builder()
                        .title("QA Automation Engineer")
                        .description("Design and execute automated test cases to ensure software quality and reliability.")
                        .location("Can Tho, Vietnam")
                        .salaryMin(new BigDecimal("15000000"))
                        .salaryMax(new BigDecimal("28000000"))
                        .status("PUBLISHED")
                        .department(qa)
                        .publishedAt(LocalDateTime.of(2026, 5, 21, 0, 0))
                        .deadline(LocalDateTime.of(2026, 6, 24, 23, 59))
                        .build(),
                Job.builder()
                        .title("Data Analyst")
                        .description("Analyze business data and provide insights through dashboards and reports.")
                        .location("Ho Chi Minh City, Vietnam")
                        .salaryMin(new BigDecimal("18000000"))
                        .salaryMax(new BigDecimal("32000000"))
                        .status("PUBLISHED")
                        .department(data)
                        .publishedAt(LocalDateTime.of(2026, 5, 22, 0, 0))
                        .deadline(LocalDateTime.of(2026, 6, 26, 23, 59))
                        .build(),
                Job.builder()
                        .title("Mobile Android Developer")
                        .description("Develop modern Android applications with Kotlin and Jetpack Compose.")
                        .location("Ha Noi, Vietnam")
                        .salaryMin(new BigDecimal("22000000"))
                        .salaryMax(new BigDecimal("38000000"))
                        .status("PUBLISHED")
                        .department(softwareDev)
                        .publishedAt(LocalDateTime.of(2026, 5, 23, 0, 0))
                        .deadline(LocalDateTime.of(2026, 6, 28, 23, 59))
                        .build(),
                Job.builder()
                        .title("Project Manager")
                        .description("Lead software projects, coordinate teams, and ensure timely delivery.")
                        .location("Da Nang, Vietnam")
                        .salaryMin(new BigDecimal("35000000"))
                        .salaryMax(new BigDecimal("60000000"))
                        .status("PUBLISHED")
                        .department(pm)
                        .publishedAt(LocalDateTime.of(2026, 5, 24, 0, 0))
                        .deadline(LocalDateTime.of(2026, 6, 29, 23, 59))
                        .build(),
                Job.builder()
                        .title("Cybersecurity Specialist")
                        .description("Protect enterprise systems and applications against cyber threats and vulnerabilities.")
                        .location("Ha Noi, Vietnam")
                        .salaryMin(new BigDecimal("28000000"))
                        .salaryMax(new BigDecimal("48000000"))
                        .status("PUBLISHED")
                        .department(security)
                        .publishedAt(LocalDateTime.of(2026, 5, 25, 0, 0))
                        .deadline(LocalDateTime.of(2026, 6, 30, 23, 59))
                        .build(),
                Job.builder()
                        .title("AI Engineer")
                        .description("Develop AI models and deploy intelligent systems for business applications.")
                        .location("Ho Chi Minh City, Vietnam")
                        .salaryMin(new BigDecimal("35000000"))
                        .salaryMax(new BigDecimal("70000000"))
                        .status("PUBLISHED")
                        .department(ai)
                        .publishedAt(LocalDateTime.of(2026, 5, 26, 0, 0))
                        .deadline(LocalDateTime.of(2026, 7, 1, 23, 59))
                        .build()
        );

        jobRepository.saveAll(jobs);
        System.out.println(">>> Seeded " + jobs.size() + " jobs successfully!");
    }
}
