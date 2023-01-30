import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Helmet from "../components/Helmet/Helmet";
import heroImg from "../assets/images/hero-img.png";
import { motion } from "framer-motion";
import "../styles/home.scss";
import { Link } from "react-router-dom";
import Services from "../services/Services";
import ProductList from "../components/UI/ProductList";

const Home = () => {
  const year = new Date().getFullYear();
  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle"> Trending product in 2023</p>
                <h2>Make Your Interior More Minimalist & Modern</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Facilis nisi, temporibus doloribus vero magnam voluptates
                  placeat delectus nulla sunt quaerat!
                </p>

                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/shop"></Link> SHOP NOW
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text__contect">
              <h2 className="section__title">Trending Products</h2>
            </Col>
            <ProductList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
