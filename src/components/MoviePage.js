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