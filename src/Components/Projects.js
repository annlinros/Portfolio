import React from "react";
import { Container,Card } from "react-bootstrap";

export default function Projects() {
  return (
    <Container fluid className="projects d-flex">
      <Container className="sidebar" />
      <Container
        fluid
        className="d-flex  flex-wrap justify-content-center align-items-center mt-5"
      >
        {/* Project 3 */}
        <Card className="project-card">
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
        {/* Project 4 */}
        <Card className="project-card">
          <Card.Img variant="top" src="img/giphy.png" />
          <Card.ImgOverlay className="card-img-overlay">
            <Card.Text>A mini GIPHY clone.</Card.Text>
            <Card.Text>HTML, CSS, JavaScript</Card.Text>
            <Container>
              <Card.Link href="https://gifsie.netlify.com/" target="_blanc">
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
        {/* Project 5 */}
        <Card className="project-card">
          <Card.Img variant="top" src="img/tip-calculator.png" />
          <Card.ImgOverlay className="card-img-overlay">
            <Card.Text>A tip calculator.</Card.Text>
            <Card.Text>HTML, CSS, JavaScript</Card.Text>
            <Container>
              <Card.Link href="https://tipsie.netlify.com/" target="_blanc">
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
        {/* Project 6 */}
        <Card className="project-card">
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
      </Container>
    </Container>
  );
}
