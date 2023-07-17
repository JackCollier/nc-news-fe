function PageButtons({ handlePageChange }) {
  return (
    <>
      <i
        className="fa fa-caret-square-o-left"
        onClick={() => handlePageChange(false)}
      ></i>
      <p>1</p>
      <i
        className="fa fa-caret-square-o-right"
        onClick={() => handlePageChange(true)}
      ></i>
    </>
  );
}

export default PageButtons;
