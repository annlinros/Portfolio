import React from "react";
import { Link } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";

export default function MainProjects() {
  return (
    <Container fluid className="projects d-flex">
      <Container className="sidebar" />
      <Container
        fluid
        className="d-flex flex-column justify-content-start align-items-center mt-5"
      >
        {/* Project 1 */}
        <Card className="main-projects-card">
          <Card.Img
            className="main-project-img"
            src="img/coffee.png"
            alt="coffee"
          ></Card.Img>
          <Card.ImgOverlay className="card-img-overlay">
            <Card.Text>A static e-commerce site to purchase coffee.</Card.Text>
            <Card.Text>made with - HTML, CSS, React JS</Card.Text>
            <Card.Text>
              Other libraries - Bootstrap, Styled Components, Font Awesome{" "}
            </Card.Text>
            <Container>
              <Card.Link
                href="https://flying-squirrel-coffee.netlify.com/"
                target="_blanc"
              >
                VIEW DEMO
              </Card.Link>
              <Card.Link
                href="https://github.com/annlinros/Flying-Squirrel-Coffee"
                target="_blanc"
              >
                VIEW CODE
              </Card.Link>
            </Container>
          </Card.ImgOverlay>
        </Card>
        {/* Project 2 */}
        <Card className="main-projects-card">
          <Card.Img
            className="main-project-img"
            src="img/movie-library.png"
            alt="movie-app"
          ></Card.Img>
          <Card.ImgOverlay className="card-img-overlay">
            <Card.Text>
              A movie search app where you can search for movies and add
              favorite movies to a library
            </Card.Text>
            <Card.Text>made with - HTML, CSS, React JS, React-bootstrap</Card.Text>
            <Container>
              <Card.Link
                href="https://personal-movie-library.netlify.com/"
                target="_blanc"
              >
                VIEW DEMO
              </Card.Link>
              <Card.Link
                href="https://github.com/annlinros/Personal-Movie-Library"
                target="_blanc"
              >
                VIEW CODE
              </Card.Link>
            </Container>
          </Card.ImgOverlay>
        </Card>
        <Link to="/projects">
          <Button variant="danger">More Projects</Button>
        </Link>
      </Container>
    </Container>
  );
}
