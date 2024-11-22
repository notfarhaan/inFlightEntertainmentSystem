import React, { useState } from 'react'
import HeroSlider from '../components/HeroSlider';
import Slider from '../components/Slider'


function Kids({kidsMovies, kidsTvSeries, TvShows}) {

const [selectMovie, setSelectMovie] = useState(kidsTvSeries[18]);

let latestKidsMovies = 'Latest Kids Movies'
let pickedForKids = 'Kids Picks'


    
return (
      
   <>
    
    <HeroSlider items={kidsMovies} selectMovie={selectMovie} setSelectMovie={setSelectMovie} />
    <Slider items={kidsMovies} selectMovie={selectMovie} setSelectMovie={setSelectMovie} movieGenre={latestKidsMovies} />
    <Slider items={kidsTvSeries} selectMovie={selectMovie} setSelectMovie={setSelectMovie} movieGenre={pickedForKids} />
   </>
      
    );
  }

  export default Kids