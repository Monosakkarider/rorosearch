import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './MovieCard'
import MovieTable from './MovieTable'

function App() {
  function incrementCount() {
    setCount(count + 1)
  }
  
  async function searchMovie(movieTitle) {
    const url = `http://127.0.0.1:8000/getMovie?movie_name=${movieTitle}`
    console.log(url)
    const response = await fetch(url)
    const data = await response.json()
    addMovie(data)
    console.log(data)
    incrementCount()
  }


  const [count, setCount] = useState(0)
  const [movieTitle, setMovieTitle] = useState('')
  const [movies, setMovies] = useState([])
  const addMovie = (movie) => {
    setMovies([...movies, movie])
  }
  const buttonRef = useRef(null)
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        buttonRef.current.click()
      }
    }
    document.addEventListener('keydown', handleKeyPress)
    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  })
  return (
    <>
      <div>
        <h1>RoRo Search Ma'fakka..</h1>
        <input type="text" placeholder="HERE!!!! u blind fuck" value={movieTitle} onChange={(e) => setMovieTitle(e.target.value)} />
        <button ref={buttonRef} onClick={() => searchMovie(movieTitle)}>
          Search
        </button>
      </div>
      <div className="card">
          count is {count}
          
            <div className="movie-card">
              <MovieTable movies={movies}/>
            </div>
      </div>
      <div>
        
      </div>
    </>
  )
}

export default App
