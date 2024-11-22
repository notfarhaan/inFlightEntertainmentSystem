import React, { useState, useEffect } from 'react';
import { songContext } from './pages/Context';

// Components
import MusicPlayer from './components/MusicPlayer';
import Header from './components/Header';

// Song Files
import Blues from './music/HoundDog.mp3';
import Rock from './music/Pyro.mp3';
import Trending from './music/Oliver-Tree.mp3';
import Hiphop from './music/Lucid_Dreams.mp3';

// CSS
import './css/Header.css';
import './App.css';
import './css/Movies-Kids.css';
import './css/Music.css';
import './css/Home.css';
import './css/HeroSlider.css';
import './css/FilterButton.css';
import './css/MusicPlayer.css';
import './css/maps.css';

// Pages
import Home from './pages/Home';
import Kids from './pages/Kids';
import Movies from './pages/Movies';
import Maps from './pages/Maps'; 
import Login from './pages/login';
import AboutUs from './pages/aboutus';
import Orders from './pages/Orders';

const lazyMusic = React.lazy(() => import('./pages/Music'));

// Songs array
const songs = [
  { artist: 'Blues Mix', songName: 'Blues Mix', poster: 'Blues', songFile: Blues },
  { artist: 'Rock Mix', songName: 'Rock Mix', poster: 'Rock', songFile: Rock },
  { artist: 'Top-Trending Mix', songName: 'Top-Trending Mix', poster: 'Top Trending', songFile: Trending },
  { artist: 'Hip-Hop Mix', songName: 'Hip-Hop Mix', poster: 'Hip-Hop Mix', songFile: Hiphop },
];

function App() {
  // MOVIE API 


  const [movies, setMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [kidsMovies, setKidsMovies] = useState([]);
  const [kidsTvSeries, setKidsTvSeries] = useState([]);

  const url = 'https://api.themoviedb.org/3/discover/movie?api_key=1f7c961ae4f02a23e0968d449c15bc98&with_genres=28/';
  const topPicks = 'https://api.themoviedb.org/3/movie/top_rated?api_key=1f7c961ae4f02a23e0968d449c15bc98&language=en-US&page=1';
  const kidsMovieURL = 'https://api.themoviedb.org/3/discover/movie?api_key=1f7c961ae4f02a23e0968d449c15bc98&certification_country=US&certification.lte=G&with_genres=16&include_adult=false&sort_by=popularity.desc';
  const kidsSeries = 'https://api.themoviedb.org/3/discover/tv?api_key=1f7c961ae4f02a23e0968d449c15bc98&with_genres=10762';

  useEffect(() => {
    const getMoviesData = async () => {
      await fetch(url).then((res) => res.json()).then((data) => setMovies(data.results));
      await fetch(topPicks).then((res) => res.json()).then((data) => setTopMovies(data.results));
      await fetch(kidsMovieURL).then((res) => res.json()).then((data) => setKidsMovies(data.results));
      await fetch(kidsSeries).then((res) => res.json()).then((data) => setKidsTvSeries(data.results));
    };
    getMoviesData();
  }, [url, topPicks, kidsMovieURL, kidsSeries]);

  const [songClicked, setSongClicked] = useState({});

  return (
    <songContext.Provider value={{ songClicked, setSongClicked }}>
      <div className="app">
        <Header 
          Home={Home} 
          Movies={Movies} 
          Kids={Kids} 
          Music={lazyMusic} 
          Maps={Maps}
          Orders={Orders}
          AboutUs={AboutUs}
          Login={Login}
          movies={movies} 
          topMovies={topMovies} 
          kidsMovies={kidsMovies} 
          kidsTvSeries={kidsTvSeries} 
          songs={songs} 
          setSongClicked={setSongClicked} 
        />

        <div className="music-player">
          <MusicPlayer songs={songs} songClicked={songClicked} />
        </div>
      </div>
    </songContext.Provider>
  );
}

export default App;
