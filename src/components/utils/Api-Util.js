import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-kwsf.onrender.com/api",
});

export const getArticles = (pageNum, topics, sortby) => {
  const params = {
    limit: 5,
    page: pageNum,
    topic: topics,
    sort_by: sortby,
  };

  return newsApi.get("/articles", { params }).then((res) => {
    return res.data.articles.articles;
  });
};

export const getTopics = () => {
  return newsApi.get("/topics").then((res) => {
    return res.data.topics;
  });
};
