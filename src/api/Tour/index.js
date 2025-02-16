import api from "../api";

class TourRoute {
  /**
   * Obtém todos os tours disponíveis da API
   * @returns {Promise<Tour[]>} 
   */
  async getAllTours() {
    // try {
    /** @type {Promise<{ data: Tour[] }>} */
    // const response = await apiGet("/tours", { populate: "Midias" });
    const response = await api.get("/tours");
    /** @type {Tour[]} */
    const tours = response.data;

    // const tourData = tours.map((tour) => ({
    //   id: tour.id,
    //   title: tour.title || "Título padrão",
    //   description: tour.description || "Descrição padrão",
    //   images: tour.cover.url,
    // }));
    // //Midias?.map((media) => media?.formats?.large?.url) || []
    // // const tourData = tours.map((tour) => ({
    // //   id: tour.id,
    // //   title: tour.title || "Título padrão",
    // //   description: tour.description || "Descrição padrão",
    // //   images: tour.Midias?.map((media) => media?.formats?.large?.url) || [],
    // // }));

    //   return tours;
    // } catch (error) {
    //   console.error("Erro ao buscar os dados do tour:", error);
    //   return [];
    // }
  }
}

export const tourRoutes = new TourRoute();
