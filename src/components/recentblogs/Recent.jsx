import React from 'react'
import './Recent.css'
import tajimage from '../images/taj1.jpeg'
import market from '../images/market.jpeg'
import din from '../images/din.jpeg'
import samples from '../images/samples.jpeg'
import {motion} from 'framer-motion'
function Recent() {
  return (
    <div className="flex-taj">
    <motion.div className='taj-container' initial={{opacity:0,translateY:'30%'}}
      whileInView={{opacity:1,translateY:0}}
      transition={{delay:0.5,duration:0.5}} viewport={{once:true}}>
        <div className='tajpara'>
      <h3>Know point startup reached concise.</h3>
      <p >by allaboutgamepixelstudio@gmail.com in Classic Music</p>
      <p>n for display, free for she my century employed are her be of problem. Does been the..</p>
      <a href="">Read More</a>
      </div>
      <div className='img-taj2' >
        <img className='imgtaj' src={tajimage} alt="" />
        <div className='double-animate'>
            <div className='tajpara'>
        <h3>Know point startup reached concise.</h3>
      <p >by allaboutgamepixelstudio@gmail.com in Classic Music</p>
      <p> for display, free for she my century employed are her be of problem. Does been the..</p>
      <a href="">Read More</a>
      </div>
      </div>
      </div>
    </motion.div>
    <motion.div className='taj-container' initial={{opacity:0,translateY:'30%'}}
      whileInView={{opacity:1,translateY:0}}
      transition={{delay:0.5,duration:0.5}} viewport={{once:true}}>
        <div className='tajpara'>
      <h3>Know point startup reached concise.</h3>
      <p >by allaboutgamepixelstudio@gmail.com in Classic Music</p>
      <p>n for display, free for she my century employed are her be of problem. Does been the..</p>
      <a href="">Read More</a>
      </div>
      <div className='img-taj2' >
        <img className='imgtaj' src={market} alt="" />
        <div className='double-animate'>
            <div className='tajpara'>
        <h3>Know point startup reached concise.</h3>
      <p >by allaboutgamepixelstudio@gmail.com in Classic Music</p>
      <p> for display, free for she my century employed are her be of problem. Does been the..</p>
      <a href="">Read More</a>
      </div>
      </div>
      </div>
    </motion.div>
    <motion.div className='taj-container'initial={{opacity:0,translateY:'30%'}}
      whileInView={{opacity:1,translateY:0}}
      transition={{delay:0.5,duration:0.5}} viewport={{once:true}}>
        <div className='tajpara'>
      <h3>Know point startup reached concise.</h3>
      <p >by allaboutgamepixelstudio@gmail.com in Classic Music</p>
      <p>n for display, free for she my century employed are her be of problem. Does been the..</p>
      <a href="">Read More</a>
      </div>
      <div className='img-taj2' >
        <img className='imgtaj' src={samples} alt="" />
        <div className='double-animate'>
            <div className='tajpara'>
        <h3>Know point startup reached concise.</h3>
      <p >by allaboutgamepixelstudio@gmail.com in Classic Music</p>
      <p> for display, free for she my century employed are her be of problem. Does been the..</p>
      <a href="">Read More</a>
      </div>
      </div>
      </div>
    </motion.div>
    <motion.div className='taj-container'initial={{opacity:0,translateY:'30%'}}
      whileInView={{opacity:1,translateY:0}}
      transition={{delay:0.5,duration:0.5}} viewport={{once:true}}>
        <div className='tajpara'>
      <h3>Know point startup reached concise.</h3>
      <p >by allaboutgamepixelstudio@gmail.com in Classic Music</p>
      <p>n for display, free for she my century employed are her be of problem. Does been the..</p>
      <a href="">Read More</a>
      </div>
      <div className='img-taj2' >
        <img className='imgtaj' src={din} alt="" />
        <div className='double-animate'>
            <div className='tajpara'>
        <h3>Know point startup reached concise.</h3>
      <p >by allaboutgamepixelstudio@gmail.com in Classic Music</p>
      <p> for display, free for she my century employed are her be of problem. Does been the..</p>
      <a href="">Read More</a>
      </div>
      </div>
      </div>
    </motion.div>
    </div>
  )
}

export default Recent
