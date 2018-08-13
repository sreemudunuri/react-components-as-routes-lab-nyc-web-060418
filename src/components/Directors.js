import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const renderDirectors = () => {
    return directors.map((director) => {
      const dmovies = () => {
        return director.movies.map((movie) => {
          return <li key={movie}>{movie}</li>
        })
      }
      return (<div key={director.name}>
        <p>{director.name}</p>
        <ul>
          {dmovies()}
        </ul>
      </div>)

    })
  }
  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}

export default Directors
