const API_KEY = 'asdhasjkfhasjkfhaskjfla12312jkfahklkaj'; // ПРИМЕР!!

class Api {
  constructor({ baseUrl, apiKey }) {
    this._baseUrl = baseUrl;
    this._apiKey = apiKey;
  }

  search(query) {}
}

const api = new Api({
  baseUrl: 'https://developers.giphy.com/', // ПРИМЕР!!!
  apiKey: API_KEY,
});

export default api;
