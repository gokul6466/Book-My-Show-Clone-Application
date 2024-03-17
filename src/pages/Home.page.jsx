import React, { useEffect, useState } from "react";
import axios from "axios";
// layout Hoc
import DefaultLayoutHoc from "../layout/Default.layout";

//Components
import EntertainmentCardComponent from "../Components/Entertainments/EntertainmentCardComponent";
import HeroCarousel from "../Components/HeroCarousel/HeroCarousel.Component";
import PosterSlider from "../Components/PosterSlider/PosterSlider.Component";

const HomePage = ()=>{
    const [recommendedmovies,setRecommendedMovies] = useState([]);
    const [premieremovies,setPremiereMovies] = useState([]);
    const [onlinestreamevents,setOnlineStreamEvents] = useState([]);

//get api name
useEffect(()=>{
    const requestTopRatedMovies = async () => {
        const getTopRatedMovies = await axios.get(
            "https://api.themoviedb.org/3/movie/top_rated?api_key=8cf42451638ab8be2b0ec80366b79445"
        );
        setRecommendedMovies(getTopRatedMovies .data.results);
    };
    requestTopRatedMovies();
},[]);






    return <>
    <HeroCarousel/>

    <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">The best of entertainment </h1>
        <EntertainmentCardComponent/>
    </div>
    <div className="containervmx-auto px-4 md:px-12 my-8">
        <PosterSlider
        title="Recommended Movies"
        subtitle="List of recommended movies"
        posters={recommendedmovies}
        isDark={false}
        />
    </div>

    <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
            <div className="hidden md:flex">
                <img src="" className="w-full h-full"/>
            </div>
        <PosterSlider
            title="Premiers"
            subtitle="Brand new releases every friday"
            posters={premieremovies}
            isDark={true}
        />
            
        </div>
    </div>
    <div className="container mx-auto px-4 md:px-12 my-8"> 
        <PosterSlider
            title="Online streaming Events"
            subtitle="Online stream events"
            posters={onlinestreamevents}
            isDark={true}
        />
        </div>
    
    </>
}

export default DefaultLayoutHoc(HomePage);

