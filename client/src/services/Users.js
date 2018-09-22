import axios from 'axios';

import { C } from '../constants';

const { API_URL } = C;

export default {
  getAll() {
    const url = `${API_URL}/api/users`;

    return axios.get(url);
  },
};
