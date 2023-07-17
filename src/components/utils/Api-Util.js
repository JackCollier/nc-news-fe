import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-kwsf.onrender.com/api",
});

export const getArticles = (pageNum) => {
  const params = {
    limit: 5,
    page: pageNum,
  };

  return newsApi.get("/articles", { params }).then((res) => {
    return res.data.articles.articles;
  });
};
