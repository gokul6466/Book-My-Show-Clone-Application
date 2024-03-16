import React from 'react'
import Slider from 'react-slick';
import Poster from '../Poster/Poster.Components';

const PosterSlider = (props) => {
  const {posters,title,subtitle,isdark} = props;
  const settings = {};
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
      {posters.map((each)=>(
        <Poster {...each} isdark={isdark}/>
      ))}
    </Slider>
    
    
    </>
    
  );
};

export default PosterSlider;