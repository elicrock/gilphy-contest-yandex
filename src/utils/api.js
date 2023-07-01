function resStatus(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

function request(url, options) {
  return fetch(url, options).then(resStatus)
}

export const BASE_URL = 'http://api.giphy.com/v1/gifs';
export const API_KEY = 'SQHURABMQ01GCNGOXpzyEAxQu8ox3Rgw';

export const search = (query) => {
  return request(`${BASE_URL}/search?q=${query}&api_key=${API_KEY}&limit=9`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({query}),
  })
}

export const trending = () => {
  return request(`${BASE_URL}/trending&api_key=${API_KEY}&limit=9`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
  })
}

export const random = () => {
  return request(`${BASE_URL}/trending&api_key=${API_KEY}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
  })
}