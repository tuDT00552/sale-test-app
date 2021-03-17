import axios from 'axios';

export default {
  getAll: async () => {
    let res = await axios.get(`/api/sale/705977/0`);
    return res.data || [];
  }
}