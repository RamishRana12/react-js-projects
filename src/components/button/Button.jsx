import React, { useState } from "react";
import {motion} from 'framer-motion'
import './button.css'
const ProductList = () => {
  const Data = [
    {
      img: "https://unitycodemarket.com/wp-content/uploads/edd/2025/01/81glwmnt28L.png",
      title: "Nike Air Monarch IV",
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "200",
      company: "Nike",
      color: "white",
      category: "3d",
    },
    {
      img: "https://unitycodemarket.com/wp-content/uploads/edd/2025/01/81X0rGw8sJL.png",
      title: "Nike Air Vapormax Plus",
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "200",
      company: "Nike",
      color: "red",
      category: "3d",
    },
  
    {
      img: "https://unitycodemarket.com/wp-content/uploads/edd/2025/01/71LeWWK6r1L.png",
      title: "Nike Waffle One Sneaker",
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "200",
      company: "Nike",
      color: "green",
      category: "3d",
    },
    {
      img: "https://unitycodemarket.com/wp-content/uploads/edd/2025/01/61cLMLZlfGL.png",
      title: "Nike Running Shoe",
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "200",
      company: "Adidas",
      color: "black",
      category: "3d",
    },
    {
      img: "https://unitycodemarket.com/wp-content/uploads/edd/2025/01/71vUrhcAyHL.png",
      title: "Flat Slip On Pumps",
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "200",
      company: "Vans",
      color: "green",
      category: "animation",
    },
    {
      img: "https://unitycodemarket.com/wp-content/uploads/edd/2025/01/71YefOw7VJL.png",
      title: "Knit Ballet Flat",
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "50",
      company: "Adidas",
      color: "black",
      category: "animation",
    },
  
    {
      img: "https://unitycodemarket.com/wp-content/uploads/edd/2025/01/71YefOw7VJL.png",
      title: "Loafer animation",
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "50",
      company: "Vans",
      color: "white",
      category: "animation",
    },
  
    {
      img: "https://unitycodemarket.com/wp-content/uploads/edd/2025/01/71iAvuTCFZL.png",
      title: "Nike Zoom Freak",
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "200",
      company: "Nike",
      color: "green",
      category: "3d",
    },
  
    {
      img: "https://unitycodemarket.com/wp-content/uploads/edd/2025/01/71WvC01RHOL.webp",
      title: "Nike Men's Sneaker",
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "200",
      company: "Adidas",
      color: "blue",
      category: "3d",
    },
  
    {
      img: "https://unitycodemarket.com/wp-content/uploads/edd/2025/01/71WvC01RHOL.webp",
      title: "PUMA BLACK-OCE",
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "150",
      company: "Puma",
      color: "green",
      category: "3d",
    },
    {
      img: "https://unitycodemarket.com/wp-content/uploads/edd/2025/01/61W97NnyaL.webp",
      title: "Pacer Future Sneaker",
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "150",
      company: "Puma",
      color: "red",
      category: "3d",
    },
    {
      img: "https://unitycodemarket.com/wp-content/uploads/edd/2024/12/71p1yGJrSaL.webp",
      title: "Unisex-Adult Super",
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "150",
      company: "Puma",
      color: "black",
      category: "3d",
    },
    {
      img: "https://unitycodemarket.com/wp-content/uploads/edd/2024/12/71AuzCwJqZL_1.webp",
      title: "Roma Basic Sneaker",
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "150",
      company: "Puma",
      color: "white",
      category: "3d",
    },
    {
      img: "https://unitycodemarket.com/wp-content/uploads/edd/2025/01/71vUrhcAyHL.png",
      title: "Pacer Future Doubleknit",
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "150",
      company: "Puma",
      color: "black",
      category: "3d",
    },
  
    {
      img: "https://unitycodemarket.com/wp-content/uploads/edd/2025/01/71vUrhcAyHL.png",
      title: "Fusion Evo Golf Shoe",
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "100",
      company: "Puma",
      color: "green",
      category: "3d",
    },
    {
      img: "https://unitycodemarket.com/wp-content/uploads/edd/2025/01/61W97NnyaL.webp",
      title: "Rainbow Chex Skate",
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "100",
      company: "Vans",
      color: "red",
      category: "animation",
    },
    {
      img: "https://unitycodemarket.com/wp-content/uploads/edd/2025/01/61W97NnyaL.webp",
      title: "Low-Top Trainers",
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "100",
      company: "Vans",
      color: "white",
      category: "templates",
    },
    {
      img: "https://unitycodemarket.com/wp-content/uploads/edd/2025/01/61W97NnyaL.webp",
      title: "Vans Unisex Low-Top",
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "100",
      company: "Vans",
      color: "blue",
      category: "templates",
    },
    {
      img: "https://unitycodemarket.com/wp-content/uploads/edd/2025/01/61W97NnyaL.webp",
      title: "Classic Bandana Sneakers",
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "50",
      company: "Nike",
      color: "black",
      category: "templates",
    },
    {
      img: "https://unitycodemarket.com/wp-content/uploads/edd/2025/01/61W97NnyaL.webp",
      title: "Chunky High Heel",
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "50",
      company: "Vans",
      color: "black",
      category: "Gui",
    },
    {
      img: "https://unitycodemarket.com/wp-content/uploads/edd/2025/01/61W97NnyaL.webp",
      title: "Slip On Stiletto High Heel",
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "100",
      company: "puma",
      color: "black",
      category: "Gui",
    },
    {
      img: "https://m.media-amazon.com/images/I/61men05KRxL._AC_UY625_.jpg",
      title: "DREAM PAIRS Court Shoes",
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "150",
      company: "Nike",
      color: "red",
      category: "Gui",
    },
    {
      img: "https://unitycodemarket.com/wp-content/uploads/edd/2025/01/61cLMLZlfGL.png",
      title: "Nike Air Vapormax Plus",
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "200",
      company: "Nike",
      color: "red",
      category: "3d",
    },
  
    {
      img: "https://unitycodemarket.com/wp-content/uploads/edd/2025/01/61cLMLZlfGL.png",
      title: "Low Mid Block Gui",
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "200",
      company: "Nike",
      color: "black",
      category: "Gui",
    },
    {
      img: "https://unitycodemarket.com/wp-content/uploads/edd/2025/01/61cLMLZlfGL.png",
      title: "Chunky High Heel",
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "50",
      company: "Adidas",
      color: "black",
      category: "Gui",
    },
    
  ];

  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState("3d");


  // Filter products based on the selected category
  const filteredProducts = Data.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <div  className="hello">
      {/* Buttons to select category */}
      <motion.div style={{ marginBottom: "16px" }} >
        <motion.button  className="onbutton"  initial={{opacity:0,translateY:'40%'}}
      whileInView={{opacity:1,translateY:0}}
      transition={{duration:0.5}} viewport={{once:true}}
          onClick={() => setSelectedCategory("3d")}
          style={{
            margin: "0 8px",
            padding: "8px 16px",
            backgroundColor: selectedCategory === "3d" ? "#007bff" : "#ccc",
            color:selectedCategory==='3d'?'white':'black',
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          3D
        </motion.button>
        <motion.button className="onbutton" initial={{opacity:0,translateY:'40%'}}
      whileInView={{opacity:1,translateY:0}}
      transition={{duration:0.6}} viewport={{once:true}}
          onClick={() => setSelectedCategory("animation")}
          style={{
            margin: "0 8px",
            padding: "8px 16px",
            backgroundColor: selectedCategory === "animation" ? "#007bff" : "#ccc",
            color:selectedCategory==='animation'?'white':'black',
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          animation
        </motion.button>
        <motion.button className="onbutton" initial={{opacity:0,translateY:'30%'}}
      whileInView={{opacity:1,translateY:0}}
      transition={{duration:0.7}} viewport={{once:true}}
          onClick={() => setSelectedCategory("Gui")}
          style={{
            margin: "0 8px",
            padding: "8px 16px",
            backgroundColor: selectedCategory === "Gui" ? "#007bff" : "#ccc",
            color:selectedCategory==='Gui'?'white':'black',
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Gui
        </motion.button>
      
        <motion.button className="onbutton" initial={{opacity:0,translateY:'40%'}}
      whileInView={{opacity:1,translateY:0}}
      transition={{duration:1}} viewport={{once:true}}
          onClick={() => setSelectedCategory("templates")}
          style={{
            margin: "0 8px",
            padding: "8px 16px",
            backgroundColor: selectedCategory === "templates" ? "#007bff" : "#ccc",
            color:selectedCategory==='templates'?'white':'black',
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          templates
        </motion.button>
      </motion.div>

      {/* Display filtered products */}
      <div className="display-container" >
      <div className="display2 " style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {filteredProducts.map((product, index) => (
    <motion.div className="imagecontainer"  initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}} viewport={{once:true}}>
    {/* Image Hover Section */}
    <div className="imagehover">
      <img className="image" src={product.img} alt={product.title} />
      <div className="btndiv">
        <button className="imagehoverbutton">Download</button>
      </div>
    </div>

    {/* Title and Price Section */}
    <div className="titlediv-2">
      <h5 className="feature-title">{product.title}...</h5>
      <h6 className="price">${product.price}</h6>
    </div>

   
  </motion.div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ProductList;
