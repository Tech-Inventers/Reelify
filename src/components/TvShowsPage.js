// Base component structure || TVShowsPage 
function TVShowsPage({
    viewMode, 
    setViewMode, 
    timeWindow, 
    setTimeWindow, 
    shows = [], 
    handleShowClick, 
    handleTrailerRequest, 
    isLoading, 
    currentPage, 
    totalPages, 
    handlePageChange, 
    getViewModeTitle,
    changeCategory,
    resetFilters
  }) {
    return (
      <div className="tv-shows-page">
        <section className="tv-shows-page-header">
          <h1>TV Shows</h1>
          <p>Discover the best television series from around the world</p>
        </section>

        {/* View mode and time window controls */}
        <div className="tv-shows-filters-container">
          <div className="tv-shows-filters">
            <div className="view-modes tv-view-modes">
              <button className={viewMode === "tv_trending" ? "active" : ""} onClick={() => { setViewMode("tv_trending"); }}>
                Trending
              </button>
            </div>
            {viewMode === "tv_trending" && (
              <div className="time-filter">
                <button className={timeWindow === "day" ? "active" : ""} onClick={() => setTimeWindow("day")}>
                  Today
                </button>
              </div>
            )}
          </div>

          {/* Aadvanced filtering options */}
          <div className="advanced-filters">
            <h3>Filter & Sort</h3>
            <div className="filter-row">
              <div className="filter-group">
                <label>Genre</label>
                <select onChange={(e) => changeCategory(e.target.value)}>
               
                </select>
              </div>
            
            </div>
            <button className="reset-filters" onClick={resetFilters}>
              Reset Filters
            </button>
          </div>
        </div>
      </div>
    );
  }