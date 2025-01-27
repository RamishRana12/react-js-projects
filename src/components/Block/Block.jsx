import React from 'react'
import './block.css'
import { NavLink } from 'react-router-dom'
import {motion} from 'framer-motion'
function Block() {
  return (
    <motion.div >
      <div className="wrapper">
      <NavLink  to="/3d">
      <motion.a className="anchor-one" initial={{opacity:0,translateY:'30%'}}
      whileInView={{opacity:1,translateY:0}}
      transition={{duration:0.7}} viewport={{once:true}}> 
        <div className="icon">
          <i className="fa-solid fa-house"></i>
        
        </div>
        <div className="para-one"><p>3D</p></div>
      
        </motion.a>
        </NavLink>
        <NavLink  to="/Gui">
      <motion.a  className="anchor-one" initial={{opacity:0,translateY:'30%'}}
      whileInView={{opacity:1,translateY:0}}
      transition={{duration:1}} viewport={{once:true}}>
        <div className="icon">
          <i className="fa-brands fa-twitter"></i>
        </div>
        <div className="para-one">
          <p>GUI</p>
        </div>
          

        </motion.a>
        </NavLink>
        <NavLink  to="/template">
      <motion.a className="anchor-one" initial={{opacity:0,translateY:'30%'}}
      whileInView={{opacity:1,translateY:0}}
      transition={{duration:1.5}} viewport={{once:true}}>
        <div className="icon">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="para-one"> 
          <p>Template</p>
        </div>
        </motion.a>
        </NavLink>
 <NavLink to="/animation">
      <motion.a  className="anchor-one" initial={{opacity:0,translateY:'30%'}}
      whileInView={{opacity:1,translateY:0}}
      transition={{duration:1.8}} viewport={{once:true}}>
        <div className="icon">
          <i className="fa-solid fa-check"></i>
        </div>
        <div className="para-one">
        <p>Animation</p>
        </div>
        </motion.a>

        </NavLink>
      <motion.a  className="anchor-one" initial={{opacity:0,translateY:'30%'}}
      whileInView={{opacity:1,translateY:0}}
      transition={{duration:2}} viewport={{once:true}}>
        <div className="icon">
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className="para-one"> 
          <p>3D</p>
        </div>
        </motion.a>
        <NavLink  to="/3d">
      <motion.a  className="anchor-one" initial={{opacity:0,translateY:'30%'}}
      whileInView={{opacity:1,translateY:0}}
      transition={{duration:2.3}} viewport={{once:true}}>
        <div className="icon">
          <i className="fa-solid fa-location-dot"></i>
        </div>
        <div className="para-one"> 
          <p>3D</p>
        </div>
        </motion.a>
        </NavLink>
    </div>
    </motion.div>
  )
}

export default Block
