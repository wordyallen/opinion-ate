import axios from 'axios';

const client = axios.create({
  baseURL: `https://outside-in-dev-api.herokuapp.com/ONazNJ6yl0lzfBrO0EdQ0ahaFLxRXNlF`,
});

const api = {
  loadRestaurants() {
    return client.get('/restaurants').then(res => res.data);
  },
};

export default api;
