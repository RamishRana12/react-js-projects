import React from "react";
import imagemarket from "./images/market.jpeg";
import "./about.css";
import Button from "react-bootstrap/Button";
import Market from "./market/market";
import Footer from "../assets/footer/footer";
import AboutSlider from "./slider/Slider";
import { delay, motion } from "framer-motion";
import Transition from "../transition/Transition";
const Variants = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay:1,
      duration: 2,
    },
  },
};

function About() {
  return (
    <>
      <motion.div
        className="about-container"
        variants={Variants}
        initial="hidden"
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{duration:0.5}}
        viewport={{ once: true }}
      >
        <motion.div>
          <h1 className="about-title">About us</h1>
        </motion.div>
      </motion.div>
      <motion.div
        className="about-data"
        variants={Variants}
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
      >
        <motion.div
          className="about-headings "
          variants={Variants}
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
        >
          <h1>
            Welcome To Our <span className="about-span"> Market Place</span>
          </h1>
          <p>
            It is a marketing term used extensively in advertising and
            selling.Phosfluorescently initiate leading-edge networks after
            professional results. Competently unleash diverse e-commerce without
            high-quality collaboration and idea-sharing. Monotonectally
            negotiate premier functionalities and principle-centered testing It
            refers to any device designed to prompt an immediate response or
            encourage an immediate sale a CTA most often refers to the use of
            words or phrases that can be incorporated into sales scripts{" "}
          </p>
          <Button variant="primary about-btn">Primary</Button>
        </motion.div>

        <div className="about-img ">
          <img src={imagemarket} alt="" />
        </div>
      </motion.div>
      <div>
        <AboutSlider />
      </div>
      <div className="market-about">
        <Market />
      </div>
      <div className="footer-about">
        <Footer />
      </div>
    </>
  );
}

export default About;
