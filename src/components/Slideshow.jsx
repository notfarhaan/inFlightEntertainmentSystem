import React, { useState, useEffect } from 'react'

const delay = 10000;


function Slideshow({movies}) {


  const [index, setIndex] = useState(0)

  let posters = movies.map(m => m.poster_path)



  useEffect(() => {
      setTimeout(
        () =>
          setIndex((prevIndex) => prevIndex === posters.length - 1 ? 0 : prevIndex + 1), delay
      );

      return () => {};
    }, [index]);


    return (

      <div className="slideshow">
        <div className="slideshowSlider"  style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
          {posters.map((poster, index) => (
            <img src={'https://image.tmdb.org/t/p/w500' + poster} className="slide" key={index} style={{ poster }}/>
          ))}
        </div> 
      </div>
      
    );
}

export default Slideshow