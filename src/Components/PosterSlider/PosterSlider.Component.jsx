import React from 'react'
import Slider from 'react-slick';
import Poster from '../Poster/Poster.Components';
import { PrevArrow } from '../HeroCarousel/Arrows.Component';

const PosterSlider = (props) => {
  const {posters,title,subtitle,isdark} = props;
  const settings = {
    infinite:true,
    speed:500,
    slidesToShow:7,
    slidesToScroll:4,
    responsive:[
      {
        breakpoint:1024,
        settings:{
          slidesToShow:3,
          slidesToScroll:2,
        },
      },
      {
        breakpoint:600,
        settings:{
          slidesToShow:3,
          slidesToScroll:2,
        },
      },
      {
        breakpoint:400,
        settings:{
          slidesToShow:3,
          slidesToScroll:1,
        },
      },
    
    ],
  };
  return (
    <>
    <div className='flex flex-col items-start sm:ml-3 my-2'>
      <h3
      className={`text-2xl font-bold ${
        isdark ? "text-white":"text-black"
      }`}
      >
        {title}
      </h3>
      <p className={`text-sm ${isdark ? "text-white" : "text-gray-800"}`}>
        {subtitle}
      </p>
    </div>
    <Slider {
      ...settings
    }>
      {posters.map((each,index)=>(
        <Poster {...each} isdark={isdark} key={index}/>
      ))}
    </Slider>
    
    
    </>
    
  );
};

export default PosterSlider;