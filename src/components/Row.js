import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "../axios";
// import movieTrailer from "movie-trailer"
import "./Row.css"

const baseImgUrl = "https://image.tmdb.org/t/p/original/";

// destructuring with props
const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("")

  // Options for react-youtube
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  }

  const handleClick = async (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      let trailerurl = await axios.get(
        `/movie/${movie.id}/videos?api_key=fef477e98a8c4c16a65b4ca7186eb891`
      );
      setTrailerUrl(trailerurl.data.results[0]?.key);
      // movieTrailer(movie?.name || "")
      // .then((url) => {
      //   // https://www.youtube.com/watch?v=PPtVwZxdDc8 --> extracting 'v' from url
      //   const urlParams = new URLSearchParams(new URL(url).search)
      //   setTrailerUrl(urlParams.get("v"))
      // })
    }
  }

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

  // console.log(movies);

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
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;