import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const renderMovies = () => {
    return movies.map((movie) => {
      const genres = () => {
        return movie.genres.map((genre) => {
          return <li key={genre}>{genre}</li>
        })
      }
      return(
        <div key={movie.title}>
        <p>Title: {movie.title}</p>
        <p>Time: {movie.time}</p>
        <ul>
          {genres()}
        </ul>
        </div>
      )
    })
  }
  return (
    <div>
        <h1>Movies Page</h1>
        {renderMovies()}
    </div>
  );
};

export default Movies;
