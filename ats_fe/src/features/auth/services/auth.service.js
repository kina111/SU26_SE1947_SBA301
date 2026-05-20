const authService = {
    login: async (payload) => {

        console.log("Login payload:", payload);
        if(payload.email === "candidate@gmail.com" && payload.password === "123456") {
            const response = {
                id: 1,
                name: "Candidate User",
                email: payload.email,
                accessToken: "fake-jwt-token"
            };

            return response;
        }

        // Implementation for login
    },
    register: async (payload) => {
        // Implementation for registration
    },
    logout: async () => {
        // Implementation for logout
    }
}

export default authService;