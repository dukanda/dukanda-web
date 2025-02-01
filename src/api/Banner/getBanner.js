import { apiGet } from "@/api/api.js";

const fetchBannerData = async () => {
  try {
    const response = await apiGet("/banner", { populate: "Midias" });
    const banner = response.data;

    // Extração de dados do endpoint
    const subTitle = banner.subTitle || "Subtítulo padrão";
    const title = banner.title || "Título padrão";
    const bottomText = banner.CallToAction || "Texto padrão";
    const slides = banner.Midias.map((media) => media.formats.large.url);

    // Retornando o objeto final
    return {
      subTitle,
      title,
      bottomText,
      slides,
    };
  } catch (error) {
    console.error("Erro ao buscar os dados do banner:", error);
    return {
      subTitle: "Erro ao carregar",
      title: "Erro ao carregar",
      bottomText: "Erro ao carregar",
      slides: [],
    };
  }
};

export default fetchBannerData;
