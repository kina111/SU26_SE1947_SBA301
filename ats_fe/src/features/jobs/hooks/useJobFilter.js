import { useReducer } from "react";

const initialState = {
    keyword: "",
    department: "ALL",
    location: "ALL",
    jobType: "ALL"
};

const jobReducer = (state, action) => {
    switch (action.type) {
        case "SET_KEYWORD":
            return {...state, keyword: action.payload}; // {department: "ALL", location: "ALL",jobType: "ALL"}
        case "SET_DEPARTMENT":
            return {...state, department: action.payload};
        case "SET_LOCATION":
            return {...state, location: action.payload};
        case "SET_JOB_TYPE":
            return {...state, jobType: action.payload};
        case "RESET":
            return initialState;
        default:
            return state;
    }

}

const useJobFilter = () => {
    const [state, dispatch] = useReducer(jobReducer, initialState);

    return {filters: state, dispatch};
};

export default useJobFilter;
