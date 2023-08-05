import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-kwsf.onrender.com/api",
});

export const getArticles = (pageNum, topics, sortby, orderBy) => {
  const params = {
    limit: 5,
    page: pageNum,
    topic: topics,
    sort_by: sortby,
    order: orderBy,
  };

  return newsApi.get("/articles", { params }).then((res) => {
    return res.data.articles;
  });
};

export const getTopics = () => {
  return newsApi.get("/topics").then((res) => {
    return res.data.topics;
  });
};

export const getArticleById = (id) => {
  return newsApi.get(`/articles/${id}`).then((res) => {
    return res.data.article;
  });
};

export const getCommentsByID = (id) => {
  return newsApi.get(`/articles/${id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const patchArticleVotes = (id, vote) => {
  return newsApi.patch(`/articles/${id}`, { inc_votes: vote }).then((res) => {
    return res.data;
  });
};

export const postComment = (id, body, username) => {
  return newsApi
    .post(`/articles/${id}/comments`, { username: username, body: body })
    .then((res) => {
      return res.data;
    });
};

export const deleteComment = (id) => {
  return newsApi.delete(`/comments/${id}`).then((res) => {
    return res.data;
  });
};

export const getUsers = () => {
  return newsApi.get("/users").then((res) => {
    return res.data.users;
  });
};

export const patchCommentVote = (id, vote) => {
  return newsApi.patch(`/comments/${id}`, { inc_votes: vote }).then((res) => {
    return res.data;
  });
};
