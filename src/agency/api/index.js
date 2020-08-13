import axios from 'axios';

const baseUrl =
  'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices';

export default (method, url, data, headers) => {
  return axios({
    baseURL: baseUrl,
    method,
    url,
    data,
    headers: {
      'x-rapidapi-host':
        'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
      'x-rapidapi-key': 'ae742d38b2msh95f0b884a394ce6p1b077cjsn23242e36af6e',
      useQueryString: true,
      ...headers,
    },
  });
};
