import React from "react";

function MovieDetail({ movie, trailerKey, onClose, onPlayTrailer }) {
  return (
    <div className="movie-detail-overlay">
      <div className="movie-detail">
        <button className="close-btn" onClick={onClose}>×</button>
        
        <div className="movie-detail-content">
          <div className="movie-poster-detail">
            {movie.poster_path ? (
              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title} 
              />
            ) : (
              <div className="no-poster-detail">No Image</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;