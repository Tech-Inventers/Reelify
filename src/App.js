import './App.css';

function App() {
  const movies = [
    {
      title: "Inception",
      year: 2010,
      poster: "https://m.media-amazon.com/images/I/51s+O7UQVAL._AC_SY679_.jpg",
    },
    {
      title: "The Matrix",
      year: 1999,
      poster: "https://m.media-amazon.com/images/I/51EG732BV3L.jpg",
    },
    {
      title: "Interstellar",
      year: 2014,
      poster: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg",
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>🎬 Reelify</h1>
        <p>Discover and explore your favorite movies</p>
      </header>

      <div className="movie-container">
        {movies.map((movie, index) => (
          <div className="movie-card" key={index}>
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
