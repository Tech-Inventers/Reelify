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
    getViewModeTitle
  }) {
    return (
      <div className="tv-shows-page">
        <section className="tv-shows-page-header">
          <h1>TV Shows</h1>
          <p>Discover the best television series from around the world</p>
        </section>
      </div>
    );
  }