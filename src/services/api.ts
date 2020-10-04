import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api/',
});

export default api;
/* const params = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

interface News {
  id: string;
}

const apiUrl = 'http://localhost:3000/api';

function getNews(subject: string) {
  return fetch(`${apiUrl}/${subject}`, params)
    .then(response => response.json())
    .catch(err => console.error(`Ocorreu um erro, ${err}`));
}

function getNewsById(subject: string, id: string) {
  return fetch(`${apiUrl}/${subject}/${id}`, params)
    .then(response => response.json())
    .catch(err => console.error(`Ocorreu um erro, ${err}`));
}

export default {
  getNews,
  getNewsById,
};
 */
