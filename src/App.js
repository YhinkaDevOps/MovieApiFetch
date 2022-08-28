import React, {useEffect} from 'react'
import "./App.css"


const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=c3fe43d9"
    function App() {
      const searchMovies = async(title) =>{
        const response = await fetch(`${API_URL}&s={title}`)
        const data = await response.json()
          console.log(data.Search)
      }
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
    <div className="App">

    </div>
  );
}

export default App;
