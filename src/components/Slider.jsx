import React from 'react';


function Slider ({items,setSelectMovie,movieGenre}) {


return (

     <>
                
        <h3 className='movie-genre'>{movieGenre}</h3>

        <div className="media-scroller snaps-inline">
                    
            {items.map((image, index) => (

                <div className="media-element">
                    <img src={'https://image.tmdb.org/t/p/w500' + image.poster_path} onClick={()=>{setSelectMovie(image)}} alt='' />
                </div>

            ))}
                
        </div>



    </>

        );
}


export default Slider;