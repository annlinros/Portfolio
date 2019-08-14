import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown, faCode } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faCodepen,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";
import { Container, ButtonGroup } from "react-bootstrap";

export default function Home() {
  return (
    <Container fluid className="home d-flex">
      <ButtonGroup
        className="home-sidebar d-flex flex-column  align-items-center"
        vertical
        btn-group
      >
        <FontAwesomeIcon className="icon" icon={faGithub} />
        <FontAwesomeIcon className="icon" icon={faCodepen} />
        <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
      </ButtonGroup>
      <Container
        fluid
        className="home-main d-flex flex-column align-items-center justify-content-start"
      >
        <Container>
          <h1>Hi, I'm Anna</h1>
          <p>
            an aspiring
            <span className="sub-text"> front-end web developer</span>
          </p>
        </Container>
        <FontAwesomeIcon className="arrowBtn" icon={faAngleDoubleDown} />
      </Container>
    </Container>
  );
}
