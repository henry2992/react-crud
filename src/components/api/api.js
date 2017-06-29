const baseUrl = 'http://localhost:3002';

const api = {
  blogs: {
    async getBlogs() {
      const response = await fetch(`${baseUrl}/blogs`);
      const data = await response.json();
      return data;
    },
    async postBlogs(data) {
      const response = await fetch(`${baseUrl}/blogs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: data,
      });
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
