import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faCodepen,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";

export default function Home() {
  return (
    <Container fluid className="home d-flex">
      <Navbar className="sidebar">
        <Nav className="d-flex flex-column  align-items-center">
          <Nav.Link href="https://github.com/annlinros" target="_blanc">
            <FontAwesomeIcon className="icon" icon={faGithub} />
          </Nav.Link>
          <Nav.Link href="https://codepen.io/annlina" target="_blanc">
            <FontAwesomeIcon className="icon" icon={faCodepen} />
          </Nav.Link>
          <Nav.Link
            href="https://www.linkedin.com/in/anna-nidhin-2912046b/"
            target="_blanc"
          >
            <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
          </Nav.Link>
        </Nav>
      </Navbar>
      <Container
        fluid
        className="main d-flex flex-column align-items-center justify-content-center"
      >
        <Container>
          <Row>
            <Col>
              <h1 className="main-text">Hi, I'm Anna!</h1>
              <p>
                <i className="sub-text-italics"> an aspiring</i>
                <span className="sub-text"> front-end web developer</span>
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
}
