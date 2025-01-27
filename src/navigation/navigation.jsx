import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./navigation.css";
import { useState } from "react";
import img from "./images/mainlog.png";
import Gui from "./dropdown components/Gui";
import { motion } from "framer-motion";
const Navigation = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);

  const navigate = useNavigate();
  function handleclick() {
    navigate("/");
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar">
      <Container className="nav-container">
        <motion.div
          initial={{ opacity: 0, translateX: "-40%" }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ delay: 2 }}
        >
          <Navbar.Brand onClick={handleclick}>
            <img className="img-nav" src={img} alt="Logo" />
          </Navbar.Brand>
        </motion.div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2,delay: 2 }}
                viewport={{ once: true }}
                className="link"
              >
                <NavLink activeClassName="active" to="/" className="link-text">
                  Home
                </NavLink>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2,delay: 2 }}
              viewport={{ once: true }}
              className="link"
            >
              {" "}
              <NavLink to="/about" className="link-text">
                About
              </NavLink>
            </motion.div>
            <div className="dropdown link" id="unity-dropdown">
              <motion.span
                className="dropdown-title unity"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2,delay: 2 }}
                viewport={{ once: true }}
              >
                Unity
              </motion.span>
              <div className="dropdown-menu">
                <NavLink className="dropdown-item" to="/gui">
                  Gui
                </NavLink>
                <NavLink className="dropdown-item" to="/template">
                  Templates
                </NavLink>

                <NavLink className="dropdown-item" to="/animation">
                  Animation
                </NavLink>
                <NavLink className="dropdown-item" to="/3d">
                  3D
                </NavLink>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 ,delay: 2 }}
              viewport={{ once: true }}
              className="link"
            >
              {" "}
              <NavLink to="/blog" className="link-text">
                Blog
              </NavLink>
            </motion.div>
          </Nav>
        </Navbar.Collapse>

        <motion.div
          className="sm-btn"
          initial={{ opacity: 0, translateX: "-30%" }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ delay: 2  }}
          viewport={{ once: true }}
        >
          <Button variant="outline-light" className="nav-btn">
            Secondary
          </Button>
        </motion.div>
      </Container>
    </Navbar>
  );
};
export default Navigation;
