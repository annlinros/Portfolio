import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHtml5,
  faCss3Alt,
  faJs,
  faBootstrap,
  faReact,
  faGit,
  faGithub,
  faNpm
} from "@fortawesome/free-brands-svg-icons";

export default function Skills() {
  return (
    <Container fluid className="skills d-flex">
      <Container className="sidebar" />
      <Container
        fluid
        className="d-flex flex-column align-items-center justify-content-center"
      >
        <Row className="skills-section d-flex flex-column align-items-center justify-content-center">
          <h1 className="section-title mb-5 align-self-start">My skills...</h1>
          <Col className="skill">
            <p className="skill-title">Technologies/Languages:</p>
            <p className="skill-items">
              <FontAwesomeIcon className="skills-icon html" icon={faHtml5} />{" "}
              HTML5,
              <FontAwesomeIcon
                className="skills-icon css"
                icon={faCss3Alt}
              />{" "}
              CSS3/SASS,
              <FontAwesomeIcon className="skills-icon js" icon={faJs} />{" "}
              JavaScript
            </p>
            <p className="skill-items">ECMAScript (ES6-ES10)</p>
          </Col>
          <Col className="skill">
            <p className="skill-title">Libraries/Frameworks:</p>
            <p className="skill-items">
              <FontAwesomeIcon className="skills-icon react" icon={faReact} />{" "}
              React,
              <FontAwesomeIcon
                className="skills-icon bootstrap"
                icon={faBootstrap}
              />{" "}
              Bootstrap, jQuery, Styled Components
            </p>
          </Col>
          <Col className="skill">
            <p className="skill-title">Version control:</p>
            <p className="skill-items">
              <FontAwesomeIcon className="skills-icon git" icon={faGit} /> ,
              <FontAwesomeIcon
                className="skills-icon github"
                icon={faGithub}
              />{" "}
              , GitHub Desktop
            </p>
          </Col>
          <Col className="skill">
            <p className="skill-title">Others:</p>
            <p className="skill-items">
              Package manager:{" "}
              <FontAwesomeIcon className="skills-icon npm" icon={faNpm} />
            </p>
            <p className="skill-items">
              Deployment &amp; Hosting: GitHub Pages, Netlify
            </p>
            <p className="skill-items">IDE: VSCode</p>
            <p className="skill-items">
              Debugging: Chrome DevTools, React developer tools
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
