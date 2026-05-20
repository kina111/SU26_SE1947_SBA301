import { Form, Button, Card } from "react-bootstrap";
import authService from "../services/auth.service";
import { useContext, useState } from "react";
import { AuthContext } from "../../../app/providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const CandidateLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {email, password};

        const response = await authService.login(payload);

        console.log("Login response:", response);

        alert("Login successful! Welcome, " + response.name);

        // Store user data into context
        login(response);
        navigate('/view-job-list-posting');
    };

    return (
        <Card className="p-4 shadow-sm border rounded-4" style={{ width: "500px" }}>
            <h1 className="text-center">Welcome Back</h1>
            <h4 className="text-center text-muted fs-6 pb-3">Sign in to track your application and interviews</h4>

            <Button variant="outline-dark" className="w-100 mb-3 d-flex align-items-center justify-content-center">Sign in with Google</Button>
            <Button variant="primary" className="w-100 mb-3 d-flex align-items-center justify-content-center">Continue with LinkedIn</Button>

            <div className="text-center mb-3 ">Or sign in with email</div>

            <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email Address" onChange={(e) => { setEmail(e.target.value) }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                </Form.Group>
                <Button type="submit" variant="success" className="w-100 d-flex align-items-center justify-content-center">Sign In</Button>
                <div className="text-center mt-3">Don't have an account? <a href="/register">Register</a></div>
            </Form>
        </Card>
    );
}

export default CandidateLogin;