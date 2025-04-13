import React, { useEffect, useState } from 'react';
import { searchMovies } from '../services/movieApi';
import '../styles/Home.css';

function Home() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('inception');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchMovies(query);
  }, []);

  async function fetchMovies(searchTerm) {
    setLoading(true);
    setError('');
    try {
      const results = await searchMovies(searchTerm);
      if (results.length === 0) {
        setError('No results found.');
      }
      setMovies(results);
    } catch (err) {
      setError('Failed to fetch movies. Please try again later.');
    }
    setLoading(false);
  }

  function handleSearch(e) {
    e.preventDefault();
    if (query.trim() !== '') {
      fetchMovies(query);
    }
  }

  return (
    <div className="home-page">
      <h2>Search Movies</h2>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Enter movie title..."
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}

      <div className="movie-grid">
        {movies.map(movie => (
          <div key={movie.imdbID} className="movie-card">
            <img
              src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/180x270?text=No+Image'}
              alt={movie.Title}
            />
            <div className="movie-info">
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
