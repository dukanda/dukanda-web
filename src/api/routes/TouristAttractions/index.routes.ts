import { api } from "@/api/axios.config";


class TouristAttractionsRoutes {

  async getAllTouristAttractions() {
    const response = await api.get<TouristAttraction>("/TouristAttractions" );
    return response.data;
  }
}

export const touristAttractions = new TouristAttractionsRoutes();