import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState.jsx";
import { Link } from "react-router-dom"; 

const MovieControls = ({ movie, type }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeMovieFromWatched,
  } = useContext(GlobalContext);
  console.log(movie.id);
  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
         add watched   
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            x
          </button>
          <button
            className="ctrl-btn"
            onClick={() =>  console.log(movie)}
          >
             <Link   style={{ textDecoration:"none" }} to={`https://www.themoviedb.org/movie/${movie.id}`} className="ctrl-btn">
            Watch!
           </Link> 
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button className="ctrl-btn" onClick={() => moveToWatchlist(movie)}>
          Move watchlist
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatched(movie.id)}
          >
             x
          </button>
          <button
            className="ctrl-btn"
            onClick={() =>  console.log(movie)}
          >
             <Link   style={{ textDecoration:"none" }} to={`https://www.themoviedb.org/movie/${movie.id}`} className="ctrl-btn">
            Watch!
           </Link> 
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;
