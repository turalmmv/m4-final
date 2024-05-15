 


import React, { useState } from "react";
import ResultCart from "./ResultCart.jsx";

const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiKey = '0aaded33ddcd1d154602092ac0de7c63';

  function onChange(e) {
    const value = e.target.value;
    setQuery(value);
    if (value.trim() === "") {
      setResults([]);
      return;
    }

    setLoading(true);
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${value}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setResults([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <img className="add-content-img" src="https://assets.aboutamazon.com/dims4/default/a5426fd/2147483647/strip/true/crop/1066x600+67+0/resize/1320x743!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F6e%2F65%2F8beecded4f798e2d6d77c650b27b%2Frday-movie-poster.jpg" alt="" />
          <div className="input-wrapper">
            <input
              type="text"
              value={query}
              onChange={onChange}
              placeholder="Search movies or tv show"
            />
          </div>

          {loading && <p>Loading...</p>}

          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCart movie={movie} />
                </li>
              ))}
            </ul>
          )}

          {results.length === 0 && !loading && <p>No results found.</p>}
        </div>
      </div>
    </div>
  );
};

export default Add;
