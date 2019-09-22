import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Contact() {
  return (
    <Container fluid className="contact d-flex">
      <Container className="sidebar" />
      <Container
        fluid
        className="contact d-flex flex-column  align-items-center justify-content-center"
      >
        <Row>
          <Col xs={10} className="mx-auto" sm={12}>
            <h1 className="section-title mb-5">Contact Me!</h1>
            <p>Have a question or want to work together?</p>
            <Form
              method="POST"
              action="https://formspree.io/annlinros@gmail.com"
            >
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  required
                  type="text"
                  name="name"
                  placeholder="Your name"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  required
                  type="email"
                  name="email"
                  placeholder="Your email"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control required as="textarea" rows="5" name="message" />
              </Form.Group>
              <Button variant="secondary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        {/* Resume link */}
        <Container className="resume">
          <a
            className="resume-link text-center"
            href="img/Anna_Nidhin_Resume.pdf"
            target="_blanc"
          >
            VIEW RESUME
          </a>
        </Container>
      </Container>
    </Container>
  );
}
