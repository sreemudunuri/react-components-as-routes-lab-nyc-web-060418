import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const renderActors = () => {
    return actors.map((actors) => {
      const amovies = () => {
        return actors.movies.map((movie) => {
          return <li key={movie}>{movie}</li>
        })
      }
      return (<div key={actors.name}>
        <p>{actors.name}</p>
        <ul>
          {amovies()}
        </ul>
      </div>)

    })
  }

  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

export default Actors;
