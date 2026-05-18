import { Col, Container, Row } from "react-bootstrap";

const HeroSection = () => {
  return (
    <Container fluid>
      <Row
        className="justify-content-center align-items-center pt-5 pb-5"
        style={{ height: "auto", backgroundColor: "#4238C3"}}>
        <Col md={12}>
            <h1 className="text-center text-white display-4">Join Our Team</h1>
            <p className="text-center text-white lead">Discover exciting career opportunities and be part of our innovative team.</p>

        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
