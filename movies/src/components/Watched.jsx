import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState.jsx";
import MovieCard from "./MovieCard.jsx";

const Watched = () => {
  const { watched } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">İzlenen Filmler</h1>
          <div className="count-pill">
            {watched.length} {watched.length < 2 ? "Movie" : "Movies"}
          </div>
        </div>

        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No Movies on Your List...</h2>
        )}
      </div>
    </div>
  );
};

export default Watched;
