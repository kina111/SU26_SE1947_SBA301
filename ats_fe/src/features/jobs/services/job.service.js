const jobs = [
    {
        id: 1,
        title: "Software Engineer",
        category: "Engineering",
        location: "Mountain View, CA",
        salary: "$120,000 - $150,000",
        skills: ["Java", "Python", "C++", "AWS"],
        employmentType: "Full-time",
        description: "We are looking for a Software Engineer to join our team. You will be responsible for developing high-quality software solutions that meet our customers' needs.",
        requirements: [
            "Bachelor's degree in Computer Science or related field",
            "3+ years of experience in software development",
            "Proficiency in Java, Python, or C++",
            "Experience with cloud technologies (AWS, Azure, GCP) is a plus"
        ],
        numberOfApplicants: 0,
        numberOfFavourites: 0
    },
    {
        id: 2,
        title: "Data Scientist",
        category: "Data Science",
        location: "Menlo Park, CA",
        salary: "$110,000 - $140,000",
        skills: ["Python", "R", "SQL"],
        employmentType: "Full-time",
        description: "We are seeking a Data Scientist to analyze large datasets and provide insights that will help drive our business decisions. You will work closely with cross-functional teams to identify opportunities for leveraging data to drive business solutions.",
        requirements: [
            "Master's degree in Data Science, Statistics, or related field",
            "2+ years of experience in data science or analytics",
            "Proficiency in Python, R, or SQL",
            "Experience with machine learning algorithms and techniques"
        ],
        numberOfApplicants: 0,
        numberOfFavourites: 0
    },
    {
        id: 3,
        title: "Product Manager",
        category: "Product Management",
        location: "San Francisco, CA",
        salary: "$100,000 - $130,000",
        skills: ["Agile", "Scrum", "JIRA"],
        employmentType: "Full-time",
        description: "We are looking for a Product Manager to lead the development and launch of new products. You will work closely with engineering, design, and marketing teams to ensure successful product delivery.",
        requirements: [
            "Bachelor's degree in Business, Computer Science, or related field",
            "5+ years of experience in product management",
            "Strong understanding of Agile methodologies and tools (Scrum, JIRA)",
            "Excellent communication and leadership skills"
        ],
        numberOfApplicants: 0,
        numberOfFavourites: 0
    }
];

const jobService = {
    findAll: async () => {
        // call api to get all 

        return jobs;
    },
    addToMyFavourite: async (id) => {
        // call api to add job to my favourite list
        localStorage.setItem("favouriteJobs", JSON.stringify([...JSON.parse(localStorage.getItem("favouriteJobs") || "[]"), id]));
    },

    viewMyFavourite: async () => {

    }



}
export default jobService;