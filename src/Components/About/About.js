import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Skills from './Skills';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <Container fluid className="about d-flex">
      <Container
        className="sidebar d-flex flex-column  align-items-center"
        vertical
      />
      <Container
        fluid
        className="about d-flex flex-column align-items-center justify-content-center"
      >
        <Row>
          <Col>
            <strong className="text">I </strong> completed my bachelors in
            Electronics and Communication Engineering from Calicut
            University,India. Thereafter for a year, I worked as an assistant
            PLC-programmer.And in year 2014, I relocated to Osnabrück, Germany
            since my husband worked there. After completing my German language
            studies, I completed an advanced training in SIEMENS S7
            PLC-Programming since I wanted to work in automation field. Right
            after that I got opportunities from different firms, which I had
            to refuse due to the mandatory travelling requirement that came
            with all the automation job offers. Then as I was thinking about
            my next options, a friend of mine, who is also a software
            developer, told me about the rising oppurtunities in software
            programming field. I figured since I like programming electronics
            machines, I might also like coding. I went home and as I
            researched I was clear, Javascript is the language I wanted to
            learn and Web development is the direction I wanted to go. And
            ever since I created my first plain html page, I wanted to learn
            more...
          </Col>
        </Row>
        <Link to="/skills" className="link">
          <Container className="d-flex flex-column align-items-center justify-content-center">
            <span className='p-2'>Skills</span>
            <FontAwesomeIcon className="arrowBtn" icon={faAngleDoubleDown} />
          </Container>
        </Link>
      </Container>
    </Container>
  );
}
