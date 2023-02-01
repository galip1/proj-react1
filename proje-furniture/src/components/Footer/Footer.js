import React from "react";
import { Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import "./footer.scss";
import logo from "../../assets/images/eco-logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg={4}>
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>Pultimart</h1>
              </div>
            </div>
            <p className="footer__text mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
              doloribus quam modi alias voluptatem, nihil eum ullam quidem nisi
              aut distinctio praesentium iste excepturi et veritatis
              voluptatibus minima explicabo ipsa.
            </p>
          </Col>
          <Col lg={3}>
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Top Categories</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Mobile Phones</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Modern Sofa</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Arm Chair</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg={2}></Col>
          <Col lg={3}></Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
