import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function About() {
  return (
    <Container fluid className="about d-flex">
      <Container className="sidebar" />
      <Container
        fluid
        className="d-flex align-items-center justify-content-center"
      >
        <Row className="about-me">
          <Col>
            <h1 className="section-title mb-5">A bit about me...</h1>I completed
            my bachelors in Electronics and Communication Engineering from
            Calicut University,India. Thereafter for a year, I worked as an
            assistant PLC-programmer.And in year 2014, I relocated to Osnabrück,
            Germany since my husband worked there. After completing my German
            language studies, I did an advanced training in SIEMENS S7
            PLC-Programming since I wanted to work in automation field. Right
            after that I got opportunities from different firms, which I had to
            refuse due to the mandatory travelling requirement that came with
            all the automation job offers. <br></br>
            <br></br>Then as I was thinking about my next options, a friend of
            mine, who is a software developer, told me about the rising
            oppurtunities in software programming field. I figured since I like
            programming electronics machines, I might also like coding. I went
            home and as I researched I was clear, Javascript is the language I
            want to learn and web development is the direction I want to go.{" "}
            <br></br>
            <br></br>And ever since I created my first plain html page, I wanted
            to learn more...
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
