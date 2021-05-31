import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Row.css"

const baseImgUrl = "https://image.tmdb.org/t/p/original";

// destructuring with props
const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  // Snipet of code which runs based on specific condition
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.log(request.data.results)
      setMovies(request.data.results);
      return request;
    }
    fetchData();
    // if [], run once when row loads, and dont run again
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className="row">
      {/** title */}
      <h2>{title}</h2>

      {/** container with several row posters */}
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${baseImgUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      {/* */}
    </div>
  );
};

export default Row;