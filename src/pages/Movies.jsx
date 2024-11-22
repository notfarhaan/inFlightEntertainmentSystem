import React, { useState } from 'react'
import HeroSlider from '../components/HeroSlider';
import Slider from '../components/Slider'

function Movies({movies, topMovies, TvShows}) {

const [selectMovie, setSelectMovie] = useState(movies[3]);

let latestMovies = 'Latest Movies';
let PickedForYou = 'Picked for you';

    return (

        <>

            <HeroSlider items={movies} selectMovie={selectMovie} />
            <Slider items={movies} selectMovie={selectMovie} setSelectMovie={setSelectMovie} movieGenre={latestMovies} />
            <Slider items={topMovies} selectMovie={selectMovie} setSelectMovie={setSelectMovie} movieGenre={PickedForYou}/>
           
        </>
    );
  }

  export default Movies


