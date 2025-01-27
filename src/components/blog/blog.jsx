import React from 'react'
import './blog.css'
import image from '../images/din.jpeg'
import Footer from '../../assets/footer/footer'
import Link from './linktags/Link'
import {delay, motion} from 'framer-motion'
import Transition from '../../transition/Transition'
function Blog() {
  const data=[
    {
      img:'https://unitycodemarket.com/wp-content/uploads/2020/06/pexels-brayden-law-1738986.jpg',
      h1:'Back sleep that back for our girl I but rather',
      p:'Contrast, should little and the hard the Mr. Diesel so warned and who to earnestly be any would steps with be the we come she distinct her...',
    },
    {
      img:'https://unitycodemarket.com/wp-content/uploads/2020/06/pexels-indra-gunawan-398154.jpg',
      h1:'Back sleep that back for our girl I but rather',
      p:'Contrast, should little and the hard the Mr. Diesel so warned and who to earnestly be any would steps with be the we come she distinct her...',
    },
    {
      img:'https://unitycodemarket.com/wp-content/uploads/2022/11/pexels-anthony-133079.jpg',
      h1:'Back sleep that back for our girl I but rather',
      p:'Contrast, should little and the hard the Mr. Diesel so warned and who to earnestly be any would steps with be the we come she distinct her...',
    },
    {
      img:'https://unitycodemarket.com/wp-content/uploads/2020/06/pexels-eberhard-grossgasteiger-12600611.jpg',
      h1:'Back sleep that back for our girl I but rather',
      p:'Contrast, should little and the hard the Mr. Diesel so warned and who to earnestly be any would steps with be the we come she distinct her...',
    },
  ]
  return (
    <>
    <div className='blog-container'>
      <div className='blog-h1'>
        <motion.h1 className='blog-h1' initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2}} viewport={{once:true}}>Blog</motion.h1></div>
      <motion.p className="blog-p" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2,delay:0.6}} viewport={{once:true}}>home</motion.p>
    </div>
    <div className='display-column' >
    <div className='blog-post'>
     <motion.div className='icons-blog' initial={{opacity:0,y:200}} whileInView={{opacity:1,y:0}} transition={{duration:1,delay:1}} viewport={{once:true}}>
      <div className='hello2'>
      <p className='icons-para'>showing 4 of 4 blog post</p>
      </div>
      <div className='hello2'>
      <p>
      <i class="fa-solid fa-bars"></i>
      <i class="fa-solid fa-bolt"></i>
      </p>
      </div>   
     </motion.div>
     <div>
      <div className='data-container'>
        <div className='data-col'>
          {
            data.map((value)=>{
return        <motion.div className='data-flex' initial={{opacity:0,y:200}} whileInView={{opacity:1,y:0}} transition={{delay:0.5}} viewport={{once:true}}>
  <div className='blog-image'>
              <img src={value.img} alt="" />
              <div className='view-btn '>
                <button className=''>view btn</button>
              </div>
              </div>
              <div className='data-blog'>
                 <h3>{value.h1}</h3>
                 <p>allaboutgamepixelstudio@gmail.com</p>
                 <p> June 11, 2020</p>
                 <p>{value.p}</p>
              </div>

</motion.div> 
            })
     
          }
          
        </div>
      </div>
      
     </div>
     </div>
     <div className='link-div'>
     <Link/>
     </div>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  )
}

export default Blog
