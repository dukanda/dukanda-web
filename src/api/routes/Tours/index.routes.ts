import { api } from "@/api/axios.config";

class ToursRoutes {
  public static TOURS = "/Tours";
  async getFeaturedTours() {
    const response = await api.get<ITours[]>(`${ToursRoutes.TOURS}/featured`);
    return response;
  }
  async getPublishedTours(filters: Record<string, any>) {
    const response = await api.get<IPublishedTours>(`${ToursRoutes.TOURS}/published`, {
      params: filters,
    });
    return response;
  }

  async getTourById(id: string) {
    const response = await api.get<ITour>(`${ToursRoutes.TOURS}/${id}`);
    return response;
  }

}

export const toursRoutes = new ToursRoutes();