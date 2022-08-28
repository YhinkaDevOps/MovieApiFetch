import React, {useEffect, useState} from 'react'
import "./App.css"
import searchIcon from '../src/search.svg'
import MovieCard from './MovieCard'


const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=c3fe43d9"


    function App() {
      const [movies, setMovies] = useState([]);
      const [searchTerm, setSearchTerm] = useState("");

      const searchMovies = async(title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
           setMovies(data.Search);
      };
      useEffect(()=>{
        searchMovies('thor')
      },[])
      // fetch(API_URL)
      // .then((response)=>{
      //     return response.json()
      // }).then((response)=>{
      //   console.log(response)
      // })

  return (
    <div className="app">
       <h1>MovieWorld</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
        
    </div>
  );
}

export default App;
