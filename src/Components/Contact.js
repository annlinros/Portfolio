import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Contact() {
  return (
    <Container fluid className="contact d-flex">
      <Container
        className="sidebar d-flex flex-column  align-items-center"
        vertical
      />
      <Container
        fluid
        className="contact d-flex flex-column  align-items-center justify-content-center"
      >
        <Row>
          <Col xs={10} className="mx-auto" sm={12}>
            <h1 className="sub-heading mb-5">Contact Me!</h1>

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
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control required as="textarea" rows="3" name="message" />
              </Form.Group>
              <Button variant="secondary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
