function PageButtons({ handlePageChange, currentPageNumber }) {
  return (
    <>
      <i
        className="fa fa-caret-square-o-left"
        onClick={() => handlePageChange(false)}
        aria-label="Previous Page"
        title="Previous Page"
      ></i>
      <p>{currentPageNumber}</p>
      <i
        className="fa fa-caret-square-o-right"
        onClick={() => handlePageChange(true)}
        aria-label="Next Page"
        title="Next Page"
      ></i>
    </>
  );
}

export default PageButtons;
