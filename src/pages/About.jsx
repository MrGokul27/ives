import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={12} className="text-center mb-4">
          <h1>About Us</h1>
          <p>Learn more about our company and what we stand for.</p>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>
                Our mission is to provide top-notch e-commerce solutions and services to enhance your shopping experience. We are dedicated to delivering quality products and exceptional customer service.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Our Vision</Card.Title>
              <Card.Text>
                We envision becoming a leader in the e-commerce industry by continuously innovating and adapting to the changing market demands. Our goal is to make online shopping accessible, convenient, and enjoyable for everyone.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="text-center">
          <h2>Contact Us</h2>
          <p>If you have any questions or need further information, please feel free to reach out to us through our contact page.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
