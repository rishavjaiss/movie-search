import React, {useEffect, useState} from "react";
import "./SearchMovie.css";
import MovieCard from "../MovieCard/MovieCard.js";
import Loader from "../Loader/Loader.js";

export default function SearchMovie() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLodaing] = useState(false);
  const [message, setMessage] = useState("Let's Go!");
  const [filter, setFilter] = useState('')
  const [moviesForUI, setMoviesForUI] = useState([])
  const [sort, setSort] = useState('ASC')

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  useEffect(()=> {
    if (filter) {
      const filteredMovies = movies.filter(({title}) => title.toLowerCase().includes(filter.toLowerCase()))
      return setMoviesForUI(filteredMovies) // We want to retain the original list in the event the filter is cleared
    }
  }, [filter, movies])


  const toggleSort  = (direction) => {
      const moviesToSort = moviesForUI.length > 0 ? moviesForUI : movies
      let sortedMovies
      if (direction === 'ASC') {
        sortedMovies = moviesToSort.sort((a, b) => a.title.localeCompare(b.title))
        return moviesForUI.length > 0 ? setMoviesForUI(sortedMovies) : setMovies(sortedMovies)
      } else if (direction === 'DESC') {
        sortedMovies = moviesToSort.reverse()
        return moviesForUI.length > 0 ? setMoviesForUI(sortedMovies) : setMovies(sortedMovies)
      }
  }

  const searchMovies = async (e, milliseconds = 1000) => {
    e.preventDefault();
    setLodaing(true);
    await sleep(milliseconds);

    const API_KEY = process.env.REACT_APP_API_KEY;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      const sortedMovies = data.results.sort((a, b) => a.title.localeCompare(b.title)) // establish an alphabetical list for sorting
      setMovies(sortedMovies);
      setLodaing(false);
      if (data.results.length === 0) {
        setMessage("Oops! No Results Found");
      }
      document.getElementById("form").reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form className="form" id="form" onSubmit={searchMovies}>
        <label htmlFor="query" className="label">
          Movie Name
        </label>
        <input
          type="text"
          className="input"
          name="query"
          placeholder="i.e Jurassic Park"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      <span className="filter-group">
        <span>
          <label htmlFor="filter" className="label">
            Filter list:
          </label>
          <input
            type="text"
            className="input"
            name="filter"
            placeholder="Filter list"
            onChange={(e) => setFilter(e.target.value)}
          />
        </span>
        <span className="sort-group">
          <span className="label">Sort By: </span>
          <span className={`label sort-button ${sort === 'ASC' ? "highlight":""}`} onClick={()=> {
            const direction = 'ASC'
            setSort(direction)
            toggleSort(direction)
          }}>ASC</span>
          <span className={`label sort-button ${sort === 'DESC' ? "highlight" : ""}`} onClick={()=> {
            const direction = 'DESC'
            setSort(direction)
            toggleSort(direction)
          }}>DESC</span>
        </span>
      </span>
      {loading  && <Loader /> }
      { movies.length > 0 && !filter ? (
        <div className="card-list">
          {movies
            .filter((movie) => movie.poster_path)
            .map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
      ) : moviesForUI.length > 0 && filter ? (
        <div className="card-list">
          {moviesForUI
            .filter((movie) => movie.poster_path)
            .map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
      ) : (
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            marginTop: "10%",
            color: "#fcefbf",
          }}
        >
          {message}
        </h2>
      )}
    </>
  );
}
