import { api } from "@/api/axios.config";


class TourTypesRoutes {

  async getToursTypes() {
    const response = await api.get("/TourTypes")
    return response.data;
  }
}

export const tourTypesRoutes = new TourTypesRoutes();