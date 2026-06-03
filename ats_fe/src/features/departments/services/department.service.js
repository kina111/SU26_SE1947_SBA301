import axiosClient from "../../../shared/services/axiosClient";

const departmentService = {
    createDepartment: async (departmentData) => {
        const response = await fetch("http://localhost:8080/departments", {
            method: "POST",
            body: JSON.stringify(departmentData),
        });
        return response;
    },
    updateDepartment: async (departmentData) => {

    },
    deleteDepartment: async (departmentId) => {
        return axiosClient.delete(`/departments/${departmentId}`);
    },

    findById: async (departmentId) => {
        console.log("Finding department by ID:", `/departments/${departmentId}`);
        return axiosClient.get(`/departments/${departmentId}`);
    },
}

export default departmentService;