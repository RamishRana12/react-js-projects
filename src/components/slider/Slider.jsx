import React from "react";
import "./slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const data=[
  
  {
  p:'She focused on the project with remarkable patience and attention to detail.She focused on the project with remarkable patience and attention to detail.remarkable patience and attention to detailremarkable patience and attention to detail',
    title:'Jane Smith',
  },
  
  {
  p:'She focused on the project with remarkable patience and attention to detail.She focused on the project with remarkable patience and attention to detail.remarkable patience and attention to detailremarkable patience and attention to detail',
    title:'Jane Smith',
  },
  
  {
  p:'She focused on the project with remarkable patience and attention to detail.She focused on the project with remarkable patience and attention to detail.remarkable patience and attention to detailremarkable patience and attention to detail',
    title:'Jane Smith',
  },
  
  {
  p:'She focused on the project with remarkable patience and attention to detail.She focused on the project with remarkable patience and attention to detail.remarkable patience and attention to detailremarkable patience and attention to detail',
    title:'Jane Smith',
  },
  
  {
  p:'She focused on the project with remarkable patience and attention to detail.She focused on the project with remarkable patience and attention to detail.remarkable patience and attention to detailremarkable patience and attention to detail',
    title:'Jane Smith',
  }
]

function AboutSlider() {

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024, // For medium screens
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint:1200, // For medium screens
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint:1400, // For medium screens
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768, // For small screens
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],};

  return (
    <div  className='h-screen bg-slate-600 pt-10'>

      <div className='w-3/4 m-auto '>
      <Slider {...settings}>
        {
          data.map((item,index)=>{
            return(
              <div  className="slider-container">
              <div className="slider-data">
              <div key={index} className='bg-white column-slider' >
                <div>
                <p className="slider-para">{item.p}</p>
                </div>

                <div className='p-6 bg-blue-600'>
                  <h4>{item.title}</h4>
                  <p className="light text-center">light studio</p>
                 
                </div>
              </div>
              </div>
              </div>
            )
          })
        }
      </Slider>
      </div>
    </div>
  )};
  export default AboutSlider;
