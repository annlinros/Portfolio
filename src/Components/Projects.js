import React from "react";
import { Container, Row, Col, Card} from "react-bootstrap";

export default function Projects() {
  return (
    <Container fluid className="projects d-flex">
      <Container className="sidebar" />
      <Container fluid>
        <h1 className="sub-heading mt-5">Projects</h1>
        <Container className="d-flex flex-column align-items-center">
          <Row>
            <Col xs={10} mx-auto lg={6}>
              <Card>
                <Card.Img variant="top" src="img/coffee.png" />
                <Card.ImgOverlay className="card-img-overlay">
                  <Card.Link
                    className="card-link"
                    href="https://flying-squirrel-coffee.netlify.com/"
                  >
                    VIEW DEMO
                  </Card.Link>
                  <Card.Link
                    className="card-link"
                    href="https://github.com/annlinros/Flying-Squirrel-Coffee"
                  >
                    VIEW CODE
                  </Card.Link>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col xs={10} mx-auto lg={6}>
              <Card>
                <Card.Img variant="top" src="img/movie-library.png" />
                <Card.ImgOverlay className="card-img-overlay">
                  <Card.Link href="https://personal-movie-library.netlify.com/">
                    VIEW DEMO
                  </Card.Link>
                  <Card.Link href="https://github.com/annlinros/Personal-Movie-Library">
                    VIEW CODE
                  </Card.Link>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col xs={10} mx-auto lg={6}>
              <Card>
                <Card.Img variant="top" src="img/weather.png" />
                <Card.ImgOverlay className="card-img-overlay">
                  <Card.Link href="https://the-weather.netlify.com/">
                    VIEW DEMO
                  </Card.Link>
                  <Card.Link href="https://github.com/annlinros/Weather-App">
                    VIEW CODE
                  </Card.Link>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col xs={10} mx-auto lg={6}>
              <Card>
                <Card.Img variant="top" src="img/giphy.png" />
                <Card.ImgOverlay className="card-img-overlay">
                  <Card.Link href="https://gifsie.netlify.com/">
                    VIEW DEMO
                  </Card.Link>
                  <Card.Link href="https://github.com/annlinros/GIPHY-Clone">
                    VIEW CODE
                  </Card.Link>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col xs={10} mx-auto lg={6}>
              <Card>
                <Card.Img variant="top" src="img/tip-calculator.png" />
                <Card.ImgOverlay className="card-img-overlay">
                  <Card.Link href="https://tipsie.netlify.com/">
                    VIEW DEMO
                  </Card.Link>
                  <Card.Link href="https://github.com/annlinros/Tip-Calculator">
                    VIEW CODE
                  </Card.Link>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col xs={10} mx-auto lg={6}>
              <Card>
                <Card.Img variant="top" src="img/palindrome.png" />
                <Card.ImgOverlay className="card-img-overlay">
                  <Card.Link href="https://palindromes.netlify.com/">
                    VIEW DEMO
                  </Card.Link>
                  <Card.Link href="https://github.com/annlinros/Palindrome">
                    VIEW CODE
                  </Card.Link>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
}
