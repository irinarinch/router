import axios from "axios";

export const PostService = {
  async getAll() {
    const response = await axios.get("https://router-crud-backend-ckx4.onrender.com/posts");
    return response.data;
  },

  async post(content: string) {
    await axios.post("https://router-crud-backend-ckx4.onrender.com/posts", {
      content,
    });
  },

  async getById(id: string) {
    const response = await axios.get(`https://router-crud-backend-ckx4.onrender.com/posts/${id}`);

    return response.data;
  },

  async remove(id: string) {
    const response = await axios.delete(`https://router-crud-backend-ckx4.onrender.com/posts/${id}`);

    return response.data;
  },

  async put(id: string, content: string) {
    const response = await axios.put(`https://router-crud-backend-ckx4.onrender.com/posts/${id}`, {
      content,
    });

    return response.data;
  },
};
