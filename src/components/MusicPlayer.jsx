import React, { useState, useEffect, useRef, useCallback } from 'react'

// ICONS
import { Slider } from '@mui/material';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import IconButton from '@mui/material/IconButton'
import {songContext} from '../pages/Context'
import { useContext } from 'react';



function MusicPlayer({songs}) {


    const songFiles = songs.map(song => song.songFile)


    const audioPlayer = useRef()


    const [index, setIndex] = useState(0);
    const {songClicked} = useContext(songContext)
    const [currentSong, setCurrentSong] = useState(songClicked);
    const [isPlaying, setisPlaying] = useState(false);
    const [volume, setVolume] = useState(30);
    const [mute, setMute] = useState(false);


    const togglePlay = useCallback(() => {
        
        if(!isPlaying) {
                     audioPlayer.current.play()
                 } else {
                     audioPlayer.current.pause()
                 }
                 setisPlaying(isPlaying => !isPlaying)

     }, [isPlaying]);
    

    useEffect(() => {
        if (currentSong !== songClicked) {
          setCurrentSong(songClicked)
        }
         
    }, [songClicked, togglePlay, currentSong]);
    
 

    useEffect(() => {
        if(audioPlayer) {
            audioPlayer.current.volume = volume / 100;
        }
    }, [volume]);




    function toggleSkipForward() {

        if(index >= songFiles.length - 1) {
            setIndex(0);
            audioPlayer.current.src = songFiles[0];
            audioPlayer.current.play();
        } else {
            setIndex(prev => prev + 1);
            audioPlayer.current.src = songFiles[index + 1];
            audioPlayer.current.play();
        }
    }


    function toggleSkipBackward() {

        if(index > 0) {
            setIndex(prev => prev -1);
            audioPlayer.current.src = songFiles[index -1];
            audioPlayer.current.play();
        } 
    }
    
    

    function VolumeBtns() {

        return mute
            ? <VolumeOffIcon sx={{color: 'lime', '&:hover': {color: 'white'}}} onClick={() => setMute(!mute)} />
            : volume <= 20 ? <VolumeMuteIcon sx={{color: 'lime', '&:hover': {color: 'white'}}} onClick={() => setMute(!mute)} />
            : volume <= 75 ? <VolumeDownIcon sx={{color: 'lime', '&:hover': {color: 'white'}}} onClick={() => setMute(!mute)} />
            : <VolumeUpIcon sx={{color: 'lime', '&:hover': {color: 'white'}}} onClick={() => setMute(!mute)} />
            }



  return (


    <div className='music-player-container'>

        <audio src={currentSong} ref={audioPlayer} muted={mute} webkit-playsinline="true" playsInline="true" autoplay="" />   

        <div className="controls">

            <div className="volume">

                <IconButton>
                    <VolumeBtns />
                </IconButton>

                 <Slider min={0} max={100} value={volume} onChange={(e,v) => setVolume(v)}
                defaultValue={50}
                    sx={{
                    width: 100,
                    color: 'success.main',
                    margin: '20px',
                    }} /> 
            </div>

            <div className="control-panel">

                    <IconButton onClick={toggleSkipBackward}>
                        <SkipPreviousIcon
                        sx={{
                            margin: '10px',
                            cursor: 'pointer',
                            color: 'silver', '&:hover': {color: 'blue'}
                        }} />
                    </IconButton>

                    {/* Play/Pause */}
                
                {!isPlaying
                  ?  <IconButton onClick={togglePlay}>
                        <PlayArrowIcon sx={{ margin: '10px', cursor: 'pointer', color: 'silver', '&:hover': {color: 'blue'} }} />
                    </IconButton>
                    
                   : <IconButton onClick={togglePlay}>
                        <PauseIcon sx={{ margin: '10px', cursor: 'pointer', color: 'silver', '&:hover': {color: 'blue'} }} />
                    </IconButton>
                }
                    
                    {/* Play/Pause */}


                    <IconButton onClick={toggleSkipForward}>
                        <SkipNextIcon
                        sx={{
                            margin: '10px',
                            cursor: 'pointer',
                            color: 'silver', '&:hover': {color: 'blue'}
                        }} />
                    </IconButton>

            </div>
        </div>
                         
            
    </div>


  )
}

export default MusicPlayer