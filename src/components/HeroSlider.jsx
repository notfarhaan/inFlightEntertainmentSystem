
import React from 'react';


function HeroSlider({selectMovie}) {
      
    return (

        <>

            {/* Hero Section */}

                
            <div className="hero">
                <div className="bg-image">
                    <img src={'https://image.tmdb.org/t/p/w500' + selectMovie.backdrop_path} className="banner-img" alt='' />
                </div>

                <div className="movie-details">
                    <h1>{selectMovie.original_title}</h1>
                    <p>{selectMovie.overview}</p> 
                </div>

            </div>

        </>

    );
}


export default HeroSlider;