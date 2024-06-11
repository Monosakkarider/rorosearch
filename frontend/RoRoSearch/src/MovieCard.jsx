function MovieCard({movie}) {
    const divStyle= {
        border: "1px solid red"
    }
  return (
    <div className="movie-card" style={divStyle}>
      <h2>{movie.Title}</h2>
      <p>{movie.Year}</p>
      <p>{movie.Runtime}</p>
      <p>{movie.Genre}</p>
      <p>{movie.Actors}</p>
      <p>{movie.imdbRating}</p>
      <p>{movie.Type}</p>
    </div>
  );
}

export default MovieCard