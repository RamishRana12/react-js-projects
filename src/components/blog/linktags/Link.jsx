import React from 'react'
import './link.css'
import {motion} from 'framer-motion'
function Link() {
    const li=[
        {
            a:'ambient music'
        },
        {
            a:'ambient music'
        },
        {
            a:'ambient music'
        },
        {
            a:'ambient music'
        },
        {
            a:'ambient music'
        },
        {
            a:'ambient music'
        },
        {
            a:'ambient music'
        },
        {
            a:'ambient music'
        },
        {
            a:'ambient music'
        },
        {
            a:'ambient music'
        },
        {
            a:'ambient music'
        },
        {
            a:'ambient music'
        },
        {
            a:'ambient music'
        },
        {
            a:'ambient music'
        },
        {
            a:'ambient music'
        },
        {
            a:'ambient music'
        },
        {
            a:'ambient music'
        },
        
        {
            a:'ambient music'
        },
    ]
  return (
    <div className='link-col'>
        <motion.div className='input-link' initial={{opacity:0,y:200}} whileInView={{opacity:1,y:0}} transition={{duration:1,delay:1}} viewport={{once:true}}>
            <input type="text"  placeholder='search with in the block'/>
            <div className='search-link'>
             <i class="fa-solid fa-magnifying-glass"></i>
             </div>
        </motion.div>
      <motion.div className='categories'  initial={{opacity:0,y:200}} whileInView={{opacity:1,y:0}} transition={{delay:0.5}} viewport={{once:true}}>
        <p className='categories-headings'> <i class="fa-solid fa-folder"></i> CATEGORIES</p>
      <p>Classic Movie</p>
      <p>music</p>
      <p>pop music</p>
      </motion.div>
      <motion.div className='blog-tags' initial={{opacity:0,y:200}} whileInView={{opacity:1,y:0}} transition={{delay:0.5}} viewport={{once:true}} >
       <h5><i class="fa-solid fa-tag"></i> Blog Tags</h5>
       <div className='blogs-flex'>
          {
            li.map((value)=>{
   return  <ul  className='blogs-ul'>
   <motion.li initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.5}} viewport={{once:true}}>{value.a}</motion.li>
  
</ul>
               
            })
          }
       </div>
      </motion.div>
    </div>
  )
}

export default Link
