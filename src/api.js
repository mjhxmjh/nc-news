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
    console.log(topics) 
    return topics;
  })
}






