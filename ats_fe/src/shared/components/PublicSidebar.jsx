import React, { useContext } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { AuthContext } from '../../app/providers/AuthProvider';

const PublicSidebar = () => {
    const { user } = useContext(AuthContext);

    return (
        <Navbar expand="lg" bg="white" className="border-bottom py-3">
            <Container>
                <Navbar.Brand href="#" className="d-flex align-items-center fw-bold text-dark gap-2">
                    <span className="d-inline-flex align-items-center justify-content-center text-white rounded"
                        style={{ width: '32px', height: '32px', backgroundColor: '#4A3AFF' }}
                    >T</span>
                    TechCorp
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav" className="justify-content-between">
                    <Nav className="mx-auto gap-2">
                        <Nav.Link href="#" className="text-secondary">Home</Nav.Link>
                        <Nav.Link href="#" className="text-secondary">About Us</Nav.Link>
                        <Nav.Link href="#"
                            className="fw-semibold px-0 active text-dark border-bottom border-2"
                            style={{ borderColor: '#4A3AFF' }}
                        >Careers</Nav.Link>
                        <Nav.Link href="#" className="text-secondary">Culture</Nav.Link>
                        <Nav.Link href="#" className="text-secondary">Benefits</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <div className="d-flex align-items-center gap-3">
                    {user ? (<span>Welcome, {user.email}</span>) : 
                        (<>
                            <Nav.Link href="#" className="text-secondary fw-medium">Login</Nav.Link>
                            <Button
                                className="text-white px-4 py-2 rounded-2 fw-medium"
                                style={{ backgroundColor: '#4A3AFF' }}>
                                Sign Up
                            </Button>
                        </>)
                    }

                </div>
            </Container>
        </Navbar>
    );
}

export default PublicSidebar;