import axios from "axios";

export const NewsService = {
  async getData(token: string, url: string, id?: string) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.get(!id ? url : url + `/${id}`, config);
      return response.data;
    } catch (err) {
      return err;
    }
  },
};