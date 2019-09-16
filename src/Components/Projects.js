import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function Projects() {
  return (
    <Container fluid className="projects d-flex">
      <Container className="sidebar" />
      <Container fluid>
        <h1 className="sub-heading mt-5">Projects</h1>
        <Container className="d-flex flex-column align-items-center">
          <Row>
            {/* Project 1 */}
            <Col xs={10} mx-auto lg={6}>
              <Card>
                <Card.Img variant="top" src="img/coffee.png" />
                <Card.ImgOverlay>
                  <Card.Text>A shopping site to buy coffee.</Card.Text>
                  <Card.Text>React/Context API</Card.Text>
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
            </Col>
            <Col xs={10} mx-auto lg={6}>
              <Card>
                <Card.Img variant="top" src="img/movie-library.png" />
                <Card.ImgOverlay className="card-img-overlay">
                  <Card.Text>A movie library.</Card.Text>
                  <Card.Text>React/Context API</Card.Text>
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
            </Col>

            {/* Project 3 */}
            <Col xs={10} mx-auto lg={6}>
              <Card>
                <Card.Img variant="top" src="img/weather.png" />
                <Card.ImgOverlay className="card-img-overlay">
                  <Card.Text>A weather app.</Card.Text>
                  <Card.Text>HTML, CSS, JavaScript</Card.Text>
                  <Container>
                    <Card.Link
                      href="https://the-weather.netlify.com/"
                      target="_blanc"
                    >
                      VIEW DEMO
                    </Card.Link>
                    <Card.Link
                      href="https://github.com/annlinros/Weather-App"
                      target="_blanc"
                    >
                      VIEW CODE
                    </Card.Link>
                  </Container>
                </Card.ImgOverlay>
              </Card>
            </Col>

            {/* Project 4 */}
            <Col xs={10} mx-auto lg={6}>
              <Card>
                <Card.Img variant="top" src="img/giphy.png" />
                <Card.ImgOverlay className="card-img-overlay">
                  <Card.Text>A mini GIPHY clone.</Card.Text>
                  <Card.Text>HTML, CSS, JavaScript</Card.Text>
                  <Container>
                    <Card.Link
                      href="https://gifsie.netlify.com/"
                      target="_blanc"
                    >
                      VIEW DEMO
                    </Card.Link>
                    <Card.Link
                      href="https://github.com/annlinros/GIPHY-Clone"
                      target="_blanc"
                    >
                      VIEW CODE
                    </Card.Link>
                  </Container>
                </Card.ImgOverlay>
              </Card>
            </Col>

            {/* Project 5 */}
            <Col xs={10} mx-auto lg={6}>
              <Card>
                <Card.Img variant="top" src="img/tip-calculator.png" />
                <Card.ImgOverlay className="card-img-overlay">
                  <Card.Text>A tip calculator.</Card.Text>
                  <Card.Text>HTML, CSS, JavaScript</Card.Text>
                  <Container>
                    <Card.Link
                      href="https://tipsie.netlify.com/"
                      target="_blanc"
                    >
                      VIEW DEMO
                    </Card.Link>
                    <Card.Link
                      href="https://github.com/annlinros/Tip-Calculator"
                      target="_blanc"
                    >
                      VIEW CODE
                    </Card.Link>
                  </Container>
                </Card.ImgOverlay>
              </Card>
            </Col>

            {/* Project 6 */}
            <Col xs={10} mx-auto lg={6}>
              <Card>
                <Card.Img variant="top" src="img/palindrome.png" />
                <Card.ImgOverlay className="card-img-overlay">
                  <Card.Text>A palindrome checker.</Card.Text>
                  <Card.Text>HTML, CSS, JavaScript</Card.Text>
                  <Container>
                    <Card.Link
                      href="https://palindromes.netlify.com/"
                      target="_blanc"
                    >
                      VIEW DEMO
                    </Card.Link>
                    <Card.Link
                      href="https://github.com/annlinros/Palindrome"
                      target="_blanc"
                    >
                      VIEW CODE
                    </Card.Link>
                  </Container>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
}
