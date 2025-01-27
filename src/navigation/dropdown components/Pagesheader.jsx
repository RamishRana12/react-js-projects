import React from 'react'
import './agesheader.css'
import {motion} from 'framer-motion'
function Pagesheader({title,p}) {
  return (
    <motion.div className='pagesheader-header' >
      <div >
        <motion.h1 className='' initial={{opacity:0,y:200}} whileInView={{opacity:1,y:0}} viewport={{once:true}} >{title}</motion.h1>
        <motion.p className='' initial={{opacity:0,y:200}} whileInView={{opacity:1,y:0}} transition={{delay:0.5}} viewport={{once:true}}>home/downloads/{p}</motion.p>
      </div>
    </motion.div>
  )
}

export default Pagesheader
