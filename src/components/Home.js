import React from "react";
import { Container, Carousel, Row, Col, Card } from "react-bootstrap";
import Carousel1 from "../images/carousel1.jpg";
import { Link } from "react-router-dom";
import Carousel2 from "../images/carousel2.jpg";
import Adidas from "../images/adidas.jpg";
import Badminton from "../images/badminton.jpg";
import Bola from "../images/bola.jpg";

function Home() {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img src={Carousel1} className="w-100 h-75" alt="foto" text="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Carousel2} className="w-100" alt="foto" text="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Bola} className="w-100" alt="foto" text="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Card for Category */}
      <Container className="mt-3">
        <h2 className="text-center">Category Of Product</h2>
        <Row className="mt-3">
          <Col md>
            <Card  style={{ width: "18rem" }}>
              <Card.Body>
                <Link to="/sepatu-lari">
                  <Card.Img variant="top" src={Adidas} />
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md>
            <Card  style={{ width: "18rem" }}>
              <Card.Body>
                <Link to="/sepatu-bola">
                  <Card.Img variant="top" src={Adidas} />
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Link to="/sepatu-badminton">
                  <Card.Img variant="top" src={Badminton} />
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Link to="/sepatu-voli">
                  <Card.Img variant="top" src={Adidas} />
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
