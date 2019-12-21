import axios from 'axios';
const restclient = axios.create({
  baseURL: 'https://api.imgur.com/3',
});

const sucessfulRequestHandler = request => request.data;
const errorRequestHandler = (error) => {
  const { response } = error;
  if (response) {
    throw response.data;
  }
  throw error;
};
export default class Restclient {
  static getHeaders(opts = {}) {
    return { ...opts.headers, Authorization: `Client-ID 9b87a12d99179f5` };
  }

  static get(url, opts) {
    return restclient
      .get(url, { ...opts, headers: this.getHeaders(opts) })
      .then(sucessfulRequestHandler)
      .catch(errorRequestHandler);
  }

}