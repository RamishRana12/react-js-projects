import React from 'react';
import '../pagecards/pagecard.css';
import {motion} from 'framer-motion'
function Card({ item }) {
  return (
    <motion.div className="imagecontainer" initial={{opacity:0,y:200}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
      {/* Image Hover Section */}
      <div className="imagehover" >
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

      {/* Description Section */}
      <p className="para">{item.para}</p>
      <p className="threed">{item.threed}</p>
    </motion.div>
  );
}

export default Card;

