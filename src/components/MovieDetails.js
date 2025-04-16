import React from "react";

function MovieDetail({ movie, trailerKey, onClose, onPlayTrailer }) {
  return (
    <div className="movie-detail-overlay">
      <div className="movie-detail">
        <button className="close-btn" onClick={onClose}>×</button>
      </div>
    </div>
  );
}

export default MovieDetail;