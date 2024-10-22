// src/fourth/movie.jsx
import React, { useEffect, useState } from 'react';
import './Movie.css';

const MovieDatabase = () => {
    const [movies, setMovies] = useState([]);
    const [expandedMovieId, setExpandedMovieId] = useState(null);
    console.log(movies)

    useEffect(() => {
        fetch('http://localhost:5000/api/movies')
            .then((response) => response.json())
            .then((data) => {
                setMovies(data); 
            })
            .catch((error) => console.error('Error fetching movie data:', error));
    }, [movies]);

    
    const handleMovieClick = (movieId) => {
        setExpandedMovieId(expandedMovieId === movieId ? null : movieId);
    };

   
    return (
        <>
        <div className="movie-database-container">
            <h1>Static Movie Database</h1>
            <div className="movie-list">
                {movies.map((movie) => (
                    <div
                        key={movie.id}
                        className="movie-item"
                        onClick={() => handleMovieClick(movie.id)}
                    >
                        <h3 style={{color : '#6498f8'}}>{movie.title} ({movie.year})</h3>
                        <p><b>Genre:</b> {movie.genre}</p>
                        <p><b>Rating:</b> {movie.rating}</p>

                        
                       
                        {expandedMovieId === movie.id && (
                            <div className="movie-description">
                                <p><strong>Description:</strong> {movie.description}</p>
                                <p><b>Reviews : </b> {movie.reviews}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default MovieDatabase;
