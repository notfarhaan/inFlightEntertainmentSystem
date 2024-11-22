import React from 'react'


import '../css/SongSlider.css'

function SongSlider({songs}) {

    return (

        <>
    
        <div className="media-scrollers snaps-inline">
            
            {songs.map((song) => (    
    
                <div className='main-container'>
                    <div className="media-element">
                        <img src={song.poster} />
                    </div>
    
                    <div className="details">
                         <h4>{song.artist}</h4>
                        <p>{song.songName}</p>
                    </div>
                </div>
            ))}
        
        
        </div>
    
        </>
      )
    }
    

export default SongSlider