import { api } from "@/api/axios.config";

export interface TourType {
  id: number;
  name: string;
  icon: string;
}

export interface TourTypesResponse {
  items: TourType[];
  pageNumber: number;
  totalPages: number;
  totalCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

class TourTypesRoutes {
  async getToursTypes(): Promise<TourTypesResponse> {
    const response = await api.get("/TourTypes");
    return response.data;
  }
}

export const tourTypesRoutes = new TourTypesRoutes();