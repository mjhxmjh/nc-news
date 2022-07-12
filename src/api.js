import axios from "axios";

const baseURL = "https://nc-news-example-seminar-3-19.herokuapp.com/api";

const api = {
  getArticles: (topicSlug) => {
    if (!topicSlug) {
      return axios.get(`${baseURL}/articles`).then(({ data }) => {
        return data.articles;
      });
    }
    return axios
      .get(`${baseURL}/articles`, {
        params: {
          topic: topicSlug,
        },
      })
      .then(({ data }) => {
        return data.articles;
      });
  },
  fetchTopics: () => {
    return axios.get(`${baseURL}/topics`).then(({ data: { topics } }) => {
      return topics;
    });
  },
  getArticlesById: (article_id) => {
    return axios
      .get(`${baseURL}/articles/${article_id}`)
      .then(({ data: { article } }) => {
        return article;
      });
  },
  patchArticle: (articleId, votes) => {
    return axios
      .patch(`${baseURL}/articles/${articleId}`, { inc_votes: votes })
      .then((res) => {
        return res.data.article;
      });
  },
  getComments: (articleId) => {
    return axios
      .get(`${baseURL}/articles/${articleId}/comments`)
      .then((response) => {
        return response.data.comments;
      });
  },
  postComment: (articleId, username, body) => {
    return axios
      .post(`${baseURL}/articles/${articleId}/comments`, {
        username,
        body,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

// api.postComment(8, "jessjelly", "interesting article");

export default api;

// export const getArticles = (topicSlug) => {
//   if (!topicSlug) {
//     return axios.get(`${baseURL}/articles`).then(({ data }) => {
//      return data.articles;
//     });
//   }
//     return axios.get(`${baseURL}/articles`, {
//       params: {
//         topic: topicSlug
//       }
//     }).then(({ data }) => {
//      return data.articles;
//   })

// };

// export function fetchTopics() {
//   return axios.get(`${baseURL}/topics`).then(({data: {topics}}) => {
//     return topics;
//   })
// }

// export function getArticlesById(article_id) {
//   return axios.get(`${baseURL}/articles/${article_id}`).then(({ data: {article} }) => {
//     return article;
//   })
// }

// export function patchArticle(articleId, votes) {
//   return axios.patch(`${baseURL}/articles/${articleId}`, {inc_votes: votes}).then((res) => {
//     console.log(res.data.article.votes);
//     return res.data.article;
//   })
// }

// export function getComments(articleId) {
//   return axios.get(`${baseURL}/articles/${articleId}/comments`).then((response) => {
//     console.log(response.data.comments)
//     return response.data.comments

//   })
// }

// getComments(4)
