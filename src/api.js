import axios from 'axios';

const baseURL = 'https://nc-news-example-seminar-3-19.herokuapp.com/api';

export const getArticles = (topicSlug) => {
  if (!topicSlug) {
    return axios.get(`${baseURL}/articles`).then(({ data }) => {
     return data.articles;
    });
  }
    return axios.get(`${baseURL}/articles?topic=${topicSlug}`).then(({ data }) => {
     return data.articles;
  }) //// refactor with axios params /////
  
};

export function fetchTopics() {
  return axios.get(`${baseURL}/topics`).then(({data: {topics}}) => {
    return topics;
  })
}

export function getArticlesById(article_id) {
  return axios.get(`${baseURL}/articles/${article_id}`).then(({ data: {article} }) => {
    return article;
  })
}




