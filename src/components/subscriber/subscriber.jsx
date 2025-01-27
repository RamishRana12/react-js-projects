import React from 'react'
import './subscriber.css'
import  Image  from './imagessubs/subs.png'
import {motion} from 'framer-motion'
function Subscriber() {
  return (
    <>
    <motion.section class="subscriber" initial={{opacity:0,translateY:'100%'}}
              whileInView={{opacity:1,translateY:0}}
              transition={{duration:1}} viewport={{once:true}} >
  <div class="sect-items">
<div class="sub-headings">
  <h1>Subscribe And <br/>Be Updated</h1>
  <p>We Dont send Spam Emails.No Need To Worry About That</p>
  <input type="text" placeholder="Search" id="input-bar" />
  <button class="btn-arrow"><i class="fa-solid fa-arrow-right"></i></button>
  </div>
  <div class="img-subs">
    <img src={Image} alt=""/>
  </div>
</div>

</motion.section>
</>
   
  )
}

export default Subscriber
