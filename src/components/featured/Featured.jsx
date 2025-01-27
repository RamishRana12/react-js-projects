import React, { useState } from "react";
import "./featured.css";
import { motion } from "framer-motion";

function Featured() {
  const array = [
    { title: "Most Popular", slug: "These Items Are Extraordinary" },
    { title: "Featured", slug: "These Are Featured Items" },
  ];
  const category = [
    {
      title: "woodblock sort",
      price: "15",
      image:
        "https://unitycodemarket.com/wp-content/uploads/edd/2025/01/61W97NnyaL.webp",
      category: "Most Popular",
      para: "by info@innomaxdigital",
      para2: "3d",
    },
    {
      title: "woodblock sort",
      price: "15",
      image:
        "https://unitycodemarket.com/wp-content/uploads/edd/2025/01/61W97NnyaL.webp",
      category: "Most Popular",
      para: "by info@innomaxdigital",
      para2: "3d",
    },
    {
      title: "woodblock sort",
      price: "15",
      image:
        "https://unitycodemarket.com/wp-content/uploads/edd/2025/01/61W97NnyaL.webp",
      category: "Most Popular",
      para: "by info@innomaxdigital",
      para2: "3d",
    },
    {
      title: "woodblock sort",
      price: "15",
      image:
        "https://unitycodemarket.com/wp-content/uploads/edd/2025/01/61W97NnyaL.webp",
      category: "Most Popular",
      para: "by info@innomaxdigital",
      para2: "3d",
    },
    {
      title: "woodblock sort",
      price: "15",
      image:
        "https://unitycodemarket.com/wp-content/uploads/edd/2025/01/61W97NnyaL.webp",
      category: "Most Popular",
      para: "by info@innomaxdigital",
      para2: "3d",
    },
    ,
    {
      title: "woodblock sort",
      price: "15",
      image:
        "https://unitycodemarket.com/wp-content/uploads/edd/2025/01/61cLMLZlfGL.png",
      category: "Most Popular",
      para: "by info@innomaxdigital",
      para2: "3d",
    },
    {
      title: "woodblock sort",
      price: "15",
      image:
        "https://unitycodemarket.com/wp-content/uploads/edd/2025/01/61cLMLZlfGL.png",
      category: "Most Popular",
      para: "by info@innomaxdigital",
      para2: "3d",
    },
    {
      title: "woodblock sort",
      price: "15",
      image:
        "https://unitycodemarket.com/wp-content/uploads/edd/2025/01/61cLMLZlfGL.png",
      category: "Most Popular",
      para: "by info@innomaxdigital",
      para2: "3d",
    },

    {
      title: "woodblock sort",
      price: "15",
      category: "Featured",
      para: "by info@innomaxdigital",
      image:
        "https://unitycodemarket.com/wp-content/uploads/edd/2025/01/61cLMLZlfGL.png",
      para2: "3d",
    },
    {
      title: "woodblock sort",
      price: "15",
      category: "Featured",
      para: "by info@innomaxdigital",
      image:
        "https://unitycodemarket.com/wp-content/uploads/edd/2025/01/61cLMLZlfGL.png",
      para2: "3d",
    },
    {
      title: "woodblock sort",
      price: "15",
      category: "Featured",
      para: "by info@innomaxdigital",
      image:
        "https://unitycodemarket.com/wp-content/uploads/edd/2025/01/61cLMLZlfGL.png",
      para2: "3d",
    },
    {
      title: "woodblock sort",
      price: "15",
      category: "Featured",
      para: "by info@innomaxdigital",
      image:
        "https://unitycodemarket.com/wp-content/uploads/edd/2025/01/61cLMLZlfGL.png",
      para2: "3d",
    },
    {
      title: "woodblock sort",
      price: "15",
      category: "Featured",
      para: "by info@innomaxdigital",
      image:
        "https://unitycodemarket.com/wp-content/uploads/edd/2025/01/61W97NnyaL.webp",
      para2: "3d",
    },
    {
      title: "woodblock sort",
      price: "15",
      category: "Featured",
      para: "by info@innomaxdigital",
      image:
        "https://unitycodemarket.com/wp-content/uploads/edd/2025/01/61W97NnyaL.webp",
      para2: "3d",
    },
    {
      title: "woodblock sort",
      price: "15",
      category: "Featured",
      para: "by info@innomaxdigital",
      image:
        "https://unitycodemarket.com/wp-content/uploads/edd/2025/01/61W97NnyaL.webp",
      para2: "3d",
    },
    {
      title: "woodblock sort",
      price: "15",
      category: "Featured",
      para: "by info@innomaxdigital",
      image:
        "https://unitycodemarket.com/wp-content/uploads/edd/2025/01/61W97NnyaL.webp",
      para2: "3d",
    },
  ];
  return (
    <div className="parent-container">
      {array.map((arrItem, index) => {
        // Filter category items where category matches array.title
        const matchingCategories = category.filter(
          (catItem) => catItem.category === arrItem.title
        );

        return (
          <motion.div
            className="child-container"
            key={index}
          >
            <motion.h2
              initial={{ opacity: 1, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className=" features-heading"
            >
              {arrItem.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 1, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="features-para"
            >
              {arrItem.slug}
            </motion.p>
            <div
              className="featured-row"
              style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}
            >
              {matchingCategories.map((item, catIndex) => (
                <motion.div
                initial={{opacity:0,translateY:'30%'}}
                whileInView={{opacity:1,translateY:0}}
                transition={{duration:0.7}} viewport={{once:true}}
                  className="imagecontainer"
                >
                  {/* Image Hover Section */}
                  <div className="imagehover">
                    <img className="image" src={item.image} alt={item.title} />
                    <div className="btndiv">
                      <button className="imagehoverbutton">Download</button>
                    </div>
                  </div>

                  {/* Title and Price Section */}
                  <div className="titlediv-2">
                    <h5 className="feature-title">{item.title}...</h5>
                    <h6 className="price">${item.price}</h6>
                  </div>
                  <div className="decription-session">
                    {/* Description Section */}
                    <p className="para">{item.para}</p>
                    <p className="para2">{item.para2}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default Featured;
