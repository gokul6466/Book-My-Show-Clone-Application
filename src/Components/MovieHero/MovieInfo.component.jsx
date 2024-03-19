import React, { useState } from 'react'
import { useContext } from 'react';
import { MovieContext } from '../../Context/Movie.Context';

const MovieInfo = () => {
    const [isopen,setIsopen]=useState(false);
    const [price,setPrice]=useState(0);

    const {movie} = useContext(MovieContext);

    const genres = movie.genres?.map(({name})=>name).join(",");

    const rentMovie = () =>{
        setIsopen(true);
        setPrice(149);
    };

  return (
    <>
    {/* <paymentModel setIsopen={setIsopen} isopen={isOpen} price={price}/>;
     */}
     <div className='flex flex-col gap-8'>
        <h1 className='text-white text-5xl font-bold'>
            {movie.original_title}
        </h1>
        <div className='text-white flex flex-col gap-2'>
        <h4>4.4k rating</h4>
            <h4>English</h4>
            <h4>
              {movie.runtime} min | {genres}
            </h4>
          </div>
        
        <div className='flex items-center gap-4 md:px-4 md:w-screen text-xl px-4'>
          <button className='bg-red-500  py-3 text-white font-semibold rounded-lg'>
            Rent $149
          </button>
          <button className='bg-red-500  py-3 text-white font-semibold rounded-lg'>
           Buy $999
          </button>
        </div>
      </div> 


    </>
    
  );
};

export default MovieInfo;