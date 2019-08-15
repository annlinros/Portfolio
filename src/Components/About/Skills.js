import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHtml5,
  faCss3Alt,
  faJs,
  faBootstrap,
  faReact
} from "@fortawesome/free-brands-svg-icons";

export default function Skills() {
  return (
    <Container fluid className="about d-flex">
      <Container
        className="sidebar d-flex flex-column  align-items-center"
        vertical
      />
      <Container
        fluid
        className="skills d-flex flex-column  align-items-center justify-content-center"
      >
        <h1 className="sub-heading ">Skills</h1>
        <Row>
          <Col className="text-center">
            <FontAwesomeIcon className="skills-icon html" icon={faHtml5} />
            <FontAwesomeIcon
              className="skills-icon css"
              icon={faCss3Alt}
            />{" "}
            <FontAwesomeIcon className="skills-icon js" icon={faJs} />{" "}
            <FontAwesomeIcon
              className="skills-icon bootstrap"
              icon={faBootstrap}
            />{" "}
            <FontAwesomeIcon className="skills-icon react" icon={faReact} />{" "}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
