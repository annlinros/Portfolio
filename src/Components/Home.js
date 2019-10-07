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
      <Navbar className="sidebar d-flex justify-content-center">
        <Nav className="d-flex flex-column  align-items-center">
          <Nav.Link href="https://github.com/annlinros" target="_blanc">
            <FontAwesomeIcon className="icon" icon={faGithub} />
          </Nav.Link>
          <Nav.Link href="https://codepen.io/annlina" target="_blanc">
            <FontAwesomeIcon className="icon" icon={faCodepen} />
          </Nav.Link>
          <Nav.Link
            href="https://www.xing.com/profile/Anna_Nidhin/cv"
            target="_blanc"
          >
            <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
          </Nav.Link>
        </Nav>
      </Navbar>
      <Container
        fluid
        className="home-main d-flex flex-column align-items-center justify-content-center"
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
