import React from 'react'

const MovieCard = ({movie: {imdbID, Year, Poster, Title, Type}}) => {
  return (
    <div>
        <div className="movie" key={imdbID}>
          <div>
            <p>
              {Year}
            </p>
          </div>

          <div>
            <img src={Poster !== 'N/A'   ? Poster : 'https://via.placeholder.com/400'} alt="{movie1.title}" />
          </div>

          <div>
           <span>{Type}</span>
            <h3>{Title}</h3>
          </div>
        </div>
    </div>
  )
}

export default MovieCard