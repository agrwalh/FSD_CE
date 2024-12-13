import React from "react";
import movies from "./movies";
import "./Movies.css"; 

const MovieList = () => {
  return (
    <div className="movie-container">
      {movies.map((movie) => (
        <div className="movie-card" key={movie.id}>
          <img className="movie-image" src={movie.image} alt={movie.title} />

          <h3>{movie.title}</h3>
          <p>Language: {movie.language}</p>
          <p>Price: ₹{movie.cost}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;