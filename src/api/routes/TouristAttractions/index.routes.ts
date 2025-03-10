import { api } from "@/api/axios.config";


class TouristAttractionsRoutes {
  public static TOURS = "/TouristAttractions";

  async getAllTouristAttractions() {
    const response = await api.get<TouristAttraction>(`${TouristAttractionsRoutes.TOURS}`);
    return response.data;
  }
  async getTouristAttractionsById(id:string) {
    const response= await api.get<ITouristAttraction>(`${TouristAttractionsRoutes.TOURS}/${id}`);
    return response.data;
  }
}

export const touristAttractions = new TouristAttractionsRoutes();