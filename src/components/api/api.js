import axios from 'axios';
const baseUrl = 'http://localhost:3002';

const api = {
  blogs: {
    getBlogs() {
      const response = axios.get('http://localhost:3002/blogs');
      return response;
    },
    async postBlogs(data) {
      const response = axios.post('http://localhost:3002/blogs', data);
      return response;
    },
    async deleteBlogs(id) {
      fetch(`${baseUrl}/blogs/${id}`, {
        method: 'DELETE',
      }).then(function (res) {
        return res.status;
      });
    },
  },
};

export default api;
