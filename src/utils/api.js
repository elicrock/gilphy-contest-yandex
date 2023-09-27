const apiKey = process.env.REACT_APP_API_KEY;

function resStatus(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

function request(url, options) {
  return fetch(url, options).then(resStatus);
}

export const BASE_URL = 'https://api.giphy.com/v1/gifs';
export const API_KEY = apiKey;

export const search = (query, page) => {
  const offset = (page - 1) * 9;
  return request(`${BASE_URL}/search?q=${query}&api_key=${API_KEY}&limit=9&offset=${offset}`);
};

export const trending = (page) => {
  const offset = (page - 1) * 9;
  return request(`${BASE_URL}/trending?&api_key=${API_KEY}&limit=9&offset=${offset}`);
};

export const random = () => {
  return request(`${BASE_URL}/random?&api_key=${API_KEY}`);
};
