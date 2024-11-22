import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import FlightIcon from '@mui/icons-material/Flight';

// Components
import Timer from '../components/Timer';
import '/Users/farhaanarshad/Documents/flight-entertainment-system-main/src/css/loginbutton.css'; 

function Header({ Home, Movies, Kids, Music, Maps, AboutUs, Orders, Login, movies, kidsMovies, topMovies, kidsTvSeries, songs, setSongClicked }) {
    return (
        <>
            <Router>
                <div className="header-container">
                    {/* Navigation Links */}
                    <div className="header-links">
                        <div className="items"><Link to="/">Home</Link></div>
                        <div className="items"><Link to="/movies">Movies</Link></div>
                        <div className="items"><Link to="/kids">Kids</Link></div>
                        <div className="items"><Link to="/music">Music</Link></div>
                        <div className="items"><Link to="/maps">Maps</Link></div>
                        <div className="items"><Link to="/orders">Orders</Link></div>
                        <div className="items"><Link to="/aboutus">About Us</Link></div>
                    </div>

                    {/* Icons and Buttons */}
                    <div className="header-icons">
                        <div className="icons">
                            <Link to="/login">
                                <button className="login-button">Login</button> 
                            </Link>
                            <IconButton>
                                <FlightIcon fontSize="medium" />
                            </IconButton>
                            <Timer duration={5 * 60 * 30 * 1000} />
                        </div>
                    </div>
                </div>

                {/* Routes */}
                <Routes>
                    <Route path="/" element={<Home movies={movies} />} />
                    <Route path="/movies" element={<Movies movies={movies} topMovies={topMovies} />} />
                    <Route path="/kids" element={<Kids kidsMovies={kidsMovies} kidsTvSeries={kidsTvSeries} />} />
                    <Route path="/music" element={<React.Suspense fallback="Loading..."><Music songs={songs} setSongClicked={setSongClicked} /></React.Suspense>} />
                    <Route path="/maps" element={<Maps />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </>
    );
}

export default Header;