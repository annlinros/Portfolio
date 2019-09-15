import React from "react";
import { Container} from "react-bootstrap";
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
    <Container fluid className="skills d-flex">
      <Container className="sidebar"/>
      <Container
        fluid
        className="d-flex flex-column  align-items-center justify-content-center"
      >
        <h1 className="sub-heading mb-5">Skills</h1>
        <Container>
          <FontAwesomeIcon className="skills-icon html" icon={faHtml5} />
          <FontAwesomeIcon className="skills-icon css" icon={faCss3Alt} />{" "}
          <FontAwesomeIcon className="skills-icon js" icon={faJs} />{" "}
          <FontAwesomeIcon
            className="skills-icon bootstrap"
            icon={faBootstrap}
          />{" "}
          <FontAwesomeIcon className="skills-icon react" icon={faReact} />{" "}
        </Container>
      </Container>
    </Container>
  );
}
