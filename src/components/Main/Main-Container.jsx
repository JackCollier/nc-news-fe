import { useEffect, useState } from "react";
import Article from "./Article";
import { getArticles } from "../utils/Api-Util";

function MainContainer(params) {
  useEffect(() => {
    getArticles().then((articleData) => {
      console.log(articleData);
    });
  }, []);

  return (
    <div className="main-container">
      <Article />
    </div>
  );
}

export default MainContainer;
