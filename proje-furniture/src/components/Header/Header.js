import React, { useEffect, useRef } from "react";
import { Container, NavLink, Row } from "react-bootstrap";
import {
  AiOutlineHeart,
  AiOutlineMenu,
  AiOutlineShopping,
} from "react-icons/ai";
import userIcon from "../../assets/images/user-icon.png";
import "./header.scss";

import logo from "../../assets/images/eco-logo.png";
import { motion } from "framer-motion";

// const nav__links = [
//   {
//     path: "home",
//     display: "Home",
//   },
//   {
//     path: "shop",
//     display: "Shop",
//   },
//   {
//     path: "cart",
//     display: "Cart",
//   },
// ];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const stickyheaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };
  useEffect(() => {
    stickyheaderFunc();
    return () => window.removeEventListener("scroll", stickyheaderFunc);
  });

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />

              <div>
                <h1>Pultimart</h1>
                {/* <p>Since 2000</p>  */}
              </div>
            </div>
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {/* {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))} */}
                <li className="nav__item">
                  <NavLink to="home">Home</NavLink>
                </li>
                <li className="nav__item">
                  <NavLink to="shop">Shop</NavLink>
                </li>
                <li className="nav__item">
                  <NavLink to="cart">Cart</NavLink>
                </li>
              </ul>
            </div>
            <div className="nav__icons">
              <span className="fav__icon">
                <AiOutlineHeart />
                <span className="badge">1</span>
              </span>
              <span className="cart__icon">
                <AiOutlineShopping />
                <span className="badge">1</span>
              </span>
              <span>
                <motion.img whileTap={{ scale: 1.2 }} src={userIcon} alt="" />
              </span>
              <div className="mobile__menu">
                <span onClick={menuToggle}>
                  <AiOutlineMenu />
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
