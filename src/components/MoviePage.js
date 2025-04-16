import React from "react";
import MovieCard from "./MovieCard";

function MoviePage({
    viewMode,
    setViewMode,
    timeWindow,
    setTimeWindow,
    categories,
    changeCategory,
    movies,
    handleMovieClick,
    handleTrailerRequest,
    isLoading,
    currentPage,
    totalPages,
    handlePageChange,
    getViewModeTitle,
    filterYear,
    setFilterYear,
    filterCountry,
    setFilterCountry,
    sortBy,
    setSortBy,
    countries,
    years,
    resetFilters
  }) {
    return (
      <div className="movie-page">
        <section className="movie-page-header">
          <h1>Movies</h1>
          <p>Discover the best films from around the world</p>
        </section>
        <section className="movie-filters-container">
        <div className="movie-filters">
          <div className="view-modes movie-view-modes">
            <button 
              className={viewMode === "trending" ? "active" : ""} 
              onClick={() => { setViewMode("trending"); }}
            >
              Trending
            </button>
            <button 
              className={viewMode === "popular" ? "active" : ""} 
              onClick={() => { setViewMode("popular"); }}
            >
              Popular
            </button>
            <button 
              className={viewMode === "nowPlaying" ? "active" : ""} 
              onClick={() => { setViewMode("nowPlaying"); }}
            >
              Now Playing
            </button>
            <button 
              className={viewMode === "topRated" ? "active" : ""} 
              onClick={() => { setViewMode("topRated"); }}
            >
              Top Rated
            </button>
            <button 
              className={viewMode === "upcoming" ? "active" : ""} 
              onClick={() => { setViewMode("upcoming"); }}
            >
              Upcoming
            </button>
          </div>

          {viewMode === "trending" && (
            <div className="time-filter">
              <button 
                className={timeWindow === "day" ? "active" : ""} 
                onClick={() => setTimeWindow("day")}
              >
                Today
              </button>
              <button 
                className={timeWindow === "week" ? "active" : ""} 
                onClick={() => setTimeWindow("week")}
              >
                This Week
              </button>
            </div>
          )}
        </div>