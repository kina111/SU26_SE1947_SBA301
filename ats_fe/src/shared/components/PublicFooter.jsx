import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PublicFooter() {
  return (
    <footer className="bg-dark text-light mt-5 pt-5 pb-3">
        <Container fluid>
              <Row className="px-5">

                    <Col md={4}>

                        <h5 className="fw-bold">
                            TechCorp
                        </h5>

                        <p className="text-secondary">
                            Building the future of technology.
                        </p>

                        <p className="text-secondary">
                            Ho Chi Minh City, Vietnam
                        </p>

                    </Col>

                    <Col md={2}>

                        <h6 className="fw-bold mb-3">
                            Company
                        </h6>

                        <p>About Us</p>

                        <p>Culture</p>

                        <p>Benefits</p>

                    </Col>

                    <Col md={3}>

                        <h6 className="fw-bold mb-3">
                            Careers
                        </h6>

                        <p>Open Positions</p>

                        <p>Internships</p>

                        <p>Life at TechCorp</p>

                    </Col>

                    <Col md={3}>

                        <h6 className="fw-bold mb-3">
                            Contact
                        </h6>

                        <p>careers@techcorp.com</p>

                        <p>+84 28 1234 5678</p>

                    </Col>

                </Row>

                <hr className="border-secondary" />

                <div className="text-center text-secondary">

                    2026 TechCorp. All rights reserved.

                </div>

        </Container>
    </footer>
  );
}
export default PublicFooter;
