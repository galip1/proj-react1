import React from "react";
import { Container, NavLink, Row } from "react-bootstrap";
import "./header.scss";

import logo from "../../assets/images/eco-logo.png";
const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div>
              <h1>Our Multimart</h1>
              <p>Since 2000</p>
            </div>

            <div className="navigation">
              <ul className="menu">
                <li className="nav__item">
                  <NavLink>Home</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
