import React, { useContext, useEffect, useState } from "react";
import MovieLayoutHoc from "../layout/Movie.layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MovieContext } from "../Context/Movie.Context";
import {FaCcVisa,FaCcApplePay} from "react-icons/fa";
import Slider from "react-slick";
import PosterSlider from "../Components/PosterSlider/PosterSlider.Component";


const MoviePage = ()=>{
   const{id} = useParams();

   const {movie,setMovie} = useContext(MovieContext);

   const [cast,setCast] = useState([]);
   const [similarMovies,setSimilarMovies] = useState([]);
   const [recommendedMovies,setRecommendedMovies] = useState([]);

   useEffect(()=>{
    const requestCast = async () =>{
        const getCast = await axios.get(`/movie/${id}/credits`);
        setCast(getCast.data.cast);
    };
    requestCast();
   },[id]);

   useEffect(()=>{
    const requestSimilarMovies = async () =>{
        const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
        setSimilarMovies(getSimilarMovies.data.results);
    };
    requestSimilarMovies();
   },[id]);

   useEffect(()=>{
    const requestRecommendedMovies = async ()=>{
        const getRecommendedMovies = await axios.get(`/movie/${id}/recommendations`);
        setRecommendedMovies(getRecommendedMovies.data.results);
    };
    requestRecommendedMovies();
   },[id]);

   useEffect(()=>{
    const requestMovie = async()=>{
        const getMovieDate = await axios.get(`/movie/${id}`);
        setMovie(getMovieDate.data);
    };
    requestMovie();
   },[id]);

   const settingsCast={};

   const settings = {};


   return (
    <>
    <div className="my-12 container px-4 lg-ml-20 lg:w-2/1">
        <div className="flex flex-col items-start gap-3">
            <h1 className="text-gray-800 font-bold gap-3 text-2xl">
                About the Movie
            </h1>
            <p>{movie.overview}</p>
        </div>

        <div className="my-8">
            <hr />
        </div>

        <div className="my-8">
            <h2 className="text-gray-800 font-bold text-2xl mb-3">
                Applicable offers
            </h2>
            <div className="flex flex-col gap-3 lg:flex-row">
                <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
                    <div className="w-8 h-8">
                        <FaCcVisa classname="w-full h-full"/>
                    </div>
                    <div className="flex flex-col items-start">
                        <h3 className="text-gray-700 text-xl font-bold">
                            Visa Stream offer
                        </h3>
                        <p className="text-gray-600">
                            Get 75% off up to INR 200 on all rupay card on BookMyShow stream
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
                    <div className="w-8 h-8">
                        <FaCcApplePay className="w-full h-full"/>
                    </div>
                    <div className="flex flex-col items-start">
                        <h3 className="text-gray-700 text-xl font-bold">Film Pass</h3>
                        <p className="text-gray-600">
                            Get 75% off upto INR 200 on all Rupay Card* on BookMyShow stream
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="my-8">
            <hr/>
        </div>


            {/* cast Sliders */}
            <div className="my-8">
                <PosterSlider
                config={settings}
                title="Recommended Movies"
                posters={recommendedMovies}
                isDark={false}
                />
            </div>
            {/* recommended movies Slider */}
            <div className="my-8">
                <hr/>
            </div>
            <PosterSlider
            config={settings}
            title="BMS XCLUSIVE Movies"
            posters={recommendedMovies}
            isDark={false}
            />

            
        {/* Cast Slider
        <div className="my-8">
          <PosterSlider
            config={settings}
            title="Cast"
            posters={cast}
            isDark={false}
          />
        </div>

        {/* Similar Movies Slider */}
        {/* <div className="my-8">
          <PosterSlider
            config={settings}
            title="Similar Movies"
            posters={similarMovies}
            isDark={false}
          />
        </div> */} 

            
        
    </div>

    
    
    </>

    
   );
};
export default MovieLayoutHoc(MoviePage);