import React, { useState } from 'react'
import './counter.css'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import {motion} from 'framer-motion'
function Counter() {
    const[count,setcount]=useState(false);
  return (
    <>
        <ScrollTrigger onEnter={()=>setcount(true)}  onExit={()=>setcount(false)}> 
        <div className='displaycounter'>
   <div class=" counter-container">
    <motion.div className="count1"  initial={{opacity:0,translateY:'30%'}}
      whileInView={{opacity:1,translateY:0}}
      transition={{duration:0.5}} viewport={{once:true}}>
        <h1>{ count && <CountUp start={0}  end={100} duration={1}  delay={0}/>}</h1>
        <p>
            total sales
        </p>
    </motion.div>
    <motion.div className="count1"  initial={{opacity:0,translateY:'30%'}}
      whileInView={{opacity:1,translateY:0}}
      transition={{duration:0.7}} viewport={{once:true}}>
        <h1>{  count && <CountUp start={0}  end={200} duration={1}  delay={0}/>}</h1>
        <p>total sales</p>
    </motion.div>
    <motion.div className="count1"  initial={{opacity:0,translateY:'30%'}}
      whileInView={{opacity:1,translateY:0}}
      transition={{duration:1}} viewport={{once:true}}>
        <h1>{ count && <CountUp start={0}  end={300} duration={1}  delay={0}/>}</h1>
        <p>total sales</p>
    </motion.div>
    <motion.div className="count1"  initial={{opacity:0,translateY:'30%'}}
      whileInView={{opacity:1,translateY:0}}
      transition={{duration:1.3
      }} viewport={{once:true}}>
        <h1>{ count && <CountUp start={0}  end={100} duration={1}  delay={0}/>}</h1>
        <p>total sales</p>
    </motion.div>
 </div>
 </div>
 </ScrollTrigger>
   </>
  )
}

export default Counter
