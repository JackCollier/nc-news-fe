function Error({ message }) {
  if (message === "Bad Request") message = "Article Not Found";
  return <div className="main-container">{message}</div>;
}

export default Error;
