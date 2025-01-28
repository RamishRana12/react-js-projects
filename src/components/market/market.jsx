import React from "react";
import "./market.css";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";
function Market() {
  return (
    <motion.div className="about-us">
      <motion.div
        className="about-heading "
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1.2, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Want To Know <span className="about-span"> More About Us?</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1.2 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          It is a marketing term used extensively in advertising and selling. It
          refers to any device designed to prompt an immediate response or
          encourage an immediate sale a CTA most often refers to the use of
          words or phrases that can be incorporated into sales scripts{" "}
        </motion.p>
        <motion.span
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1.2, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Button variant="primary btn-about">Contact us</Button>
        </motion.span>
      </motion.div>
      <motion.div
        className="about-heading "
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1.2, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {" "}
          <span className="about-span"> Our Mission</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1.2 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          UnityCodeMarket’s mission is to empower Unity developers around the
          globe by providing high-quality, customizable game assets, scripts,
          and tools. We want to make sure that developers can focus on what
          matters most – creating amazing games – while we take care of the
          rest.{" "}
        </motion.p>
      </motion.div>

      <motion.div
        className="about-heading "
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1.2, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          What We Offer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1.2 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Our platform provides high-quality scripts and code solutions, helping
          you implement complex mechanics such as player controls, AI systems,
          multiplayer setups, and game logic without the hassle of starting from
          scratch. We also offer a wide array of Unity-ready assets, including
          3D models, textures, animations, and sound effects, all optimized for
          seamless integration into Unity.{" "}
        </motion.p>
      </motion.div>
      <motion.div
        className="about-heading "
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1.2, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Why Choose Us?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1.2 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Our marketplace offers a carefully curated selection of Unity assets,
          scripts, and tools that are tested and optimized for seamless
          integration, ensuring that you save valuable development time and
          avoid unnecessary complications. With a fair revenue-sharing model,
          UnityCodeMarket supports creators, allowing them to monetize their
          work while contributing to a thriving ecosystem.{" "}
        </motion.p>
      </motion.div>
      <motion.div
        className="about-heading "
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1.2, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.h1
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Why Choose Us?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1.2 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Our marketplace offers a carefully curated selection of Unity assets,
          scripts, and tools that are tested and optimized for seamless
          integration, ensuring that you save valuable development time and
          avoid unnecessary complications. With a fair revenue-sharing model,
          UnityCodeMarket supports creators, allowing them to monetize their
          work while contributing to a thriving ecosystem.{" "}
        </motion.p>
        <motion.span
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1.2, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Button variant="primary btn-about">Explore More</Button>
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
export default Market;
