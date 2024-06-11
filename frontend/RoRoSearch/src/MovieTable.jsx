import './MovieTable.css'
import { useEffect, useRef, useState } from 'react'

const MovieTable = ({ movies }) => {
    function calculateTime(runtime) {
        let num= parseInt(runtime)
        setCalculatedTime(calculatedTime + num)
        
      }
  const [calculatedTime, setCalculatedTime] = useState(0)

  useEffect(() => {
    movies.forEach(movie => {
      calculateTime(movie.Runtime);
    });
  }, [movies]); // This will run whenever the `movies` array changes.

    return (
        <table className='movie-table'>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Year</th>
                    <th>Runtime</th>
                    <th>Genre</th>
                    <th>Actors</th>
                    <th>imdbRating</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                {movies.map((movie) => (
                    <tr key={movie.Title}>
                        <td>{movie.Title}</td>
                        <td>{movie.Year}</td>
                        <td>{movie.Runtime}</td>
                        <td>{movie.Genre}</td>
                        <td>{movie.Actors}</td>
                        <td>{movie.imdbRating}</td>
                        <td>{movie.Type}</td>
                    </tr>
                ))}
                <tr>
                    <td colSpan={2}>Total runtime:</td>
                    <td colSpan={5}>{calculatedTime} min.</td>
                </tr>
            </tbody>
        </table>
    )
}

export default MovieTable