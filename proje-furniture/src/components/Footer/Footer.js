import React from "react";
import { Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import "./footer.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg={4}>
            <div className="logo">
              <div>
                <h1 className="text-white">Pultimart</h1>
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
          <Col lg={2}>
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Useful Links</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="cart">Cart</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="login">Login</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="privary policy">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg={3}>
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0  d-flex align-items-center gap-2 ">
                  <span>
                    <i className="ri-map-pin-line"></i>
                  </span>
                  <p>123,Bazar</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2 ">
                  <span>
                    <i className="ri-phone-line"></i>
                  </span>
                  <p>+445646545645646</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2 ">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  <p>example@example.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg={12}>
            <p className="footer__copyright">
              Copyright {year} developed by GP. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
