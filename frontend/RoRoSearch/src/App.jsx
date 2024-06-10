import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  async function searchMovie(movieTitle) {
    const url = `http://127.0.0.1:8000/getMovie?movie_name=${movieTitle}`
    console.log(url)
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
  }
  const [count, setCount] = useState(0)
  const [movieTitle, setMovieTitle] = useState('')

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo react" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div>
        <h1>RoRO Search here MF..</h1>
        <input type="text" placeholder="HERE!!!! u blind fuck" value={movieTitle} onChange={(e) => setMovieTitle(e.target.value)} />
        <button onClick={() => searchMovie(movieTitle)}>
          Knapp
        </button>
      </div>
    </>
  )
}

export default App
