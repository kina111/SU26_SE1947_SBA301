import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import GeneralHeader from "@/shared/components/GeneralHeader";
import GereralNavBar from "@/shared/components/GereralNavBar";
import { Outlet } from "react-router-dom";

const ManagementLayout = () => {
  return (
    <Container fluid>
      <Row className="border-1">
        <Col
          md={12}
          className="d-flex align-items-center justify-content-center"
        >
          <GeneralHeader />
        </Col>
      </Row>
      <Row className="border-1">
        <Col
          md={3}
          className="d-flex align-items-center justify-content-center"
        >
          <GereralNavBar />
        </Col>
        <Col md={8} className="border-1">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default ManagementLayout;
