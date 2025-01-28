import React from "react";
import "./home.css";
import Button from "./button/Button";

import Footer from "../assets/footer/footer";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import Block from "./Block/Block";
import Featured from "./featured/Featured";
import Subscriber from "./subscriber/subscriber";
import Counter from "./Counter/Counter";
import Recent from "./recentblogs/Recent";
import Maincard from "./maincard/Maincard";
import { motion } from "framer-motion";
import Transition from "../transition/Transition";

function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, translateY: "100%" }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{  duration: 1 ,delay: 2 }}
        viewport={{ once: true }}
        className="home-container"
      >
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img1} className="d-block w-100  home-img" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img2} className="d-block w-100 home-img" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img1} className="d-block w-100 home-img" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </motion.div>
      {/* <Maincard/> */}
      <div className="browse">
        <motion.h1
          initial={{ opacity: 1, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          BROWSE BY <span class="BROWSE">CATEGORY</span>
        </motion.h1>
      </div>
      <div>
        <Block />
      </div>
      <div className="buttons-section">
        <Button />
      </div>

      <div className="card-container">
        <Featured />
      </div>
      <div className="subscriber-margin">
        <Subscriber />
      </div>
      <div class="fun-facts">
        <motion.h1
           initial={{ opacity: 1, scale: 0 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.5 }}
           viewport={{ once: true }}
          className="fun-head"
        >
          Fun <span>Facts</span>
        </motion.h1>
        <motion.p
          className="fun-para"
          initial={{ opacity: 1, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          Some Stats of us
        </motion.p>
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <motion.h1  initial={{ opacity: 1, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }} className="fun-head">
          Recent <span className="recentblogs">Blogs</span>
        </motion.h1>
        <motion.p  initial={{ opacity: 1, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }} className="fun-para">Be Connected with Us By Read these article</motion.p>
        <Recent />
      </div>
      <motion.div className="fooetrs" >
        <Footer />
      </motion.div>
    </>
  );
}

export default Transition(Home);
