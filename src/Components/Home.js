import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
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
        className="sidebar d-flex flex-column  align-items-center"
        vertical
        btn-group
      >
        <FontAwesomeIcon className="icon" icon={faGithub} />
        <FontAwesomeIcon className="icon" icon={faCodepen} />
        <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
      </ButtonGroup>
      <Container
        fluid
        className="main d-flex flex-column align-items-center justify-content-start"
      >
        <Container>
          <h1>Hi, I'm Anna</h1>
          <p>
            an aspiring
            <span className="sub-text"> front-end web developer</span>
          </p>
        </Container>
        <Link to="/about">
          <FontAwesomeIcon className="arrowBtn" icon={faAngleDoubleDown} />
        </Link>
      </Container>
    </Container>
  );
}
