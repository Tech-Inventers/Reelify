import React from "react";
import MovieCard from "./MovieCard";

function AnimationPage({
  viewMode, 
  setViewMode, 
  timeWindow, 
  setTimeWindow, 
  animationGenres, 
  changeAnimationGenre, 
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
    <div className="animation-page">
      <section className="animation-page-header">
        <h1>Animations</h1>
        <p>Discover the best animated films from around the world</p>
      </section>

      <section className="animation-filters-container">
        <div className="animation-filters">
          <div className="view-modes animation-view-modes">
            <button 
              className={viewMode === "animation_trending" ? "active" : ""} 
              onClick={() => { setViewMode("animation_trending"); }}
            >
              Trending
            </button>
            <button 
              className={viewMode === "animation_popular" ? "active" : ""} 
              onClick={() => { setViewMode("animation_popular"); }}
            >
              Popular
            </button>
            <button 
              className={viewMode === "animation_topRated" ? "active" : ""} 
              onClick={() => { setViewMode("animation_topRated"); }}
            >
              Top Rated
            </button>
            <button 
              className={viewMode === "animation_upcoming" ? "active" : ""} 
              onClick={() => { setViewMode("animation_upcoming"); }}
            >
              Upcoming
            </button>
          </div>

          {viewMode === "animation_trending" && (
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
      </section>
    </div>
  );
}

export default AnimationPage;