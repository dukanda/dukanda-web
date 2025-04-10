import { api } from "@/api/axios.config";



class NewsRoutes {

  async getNews() {
    const response = await api.get<News[]>("/News");
    return response.data;
  }

  async getNewsById(id: string) {
    const response = await api.get<NewsDetails>(`/News/${id}`);
    return response.data;
  }

}

export const newsRoutes = new NewsRoutes();