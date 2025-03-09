import axios from "axios";

export const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}`, // URL base da API
  // timeout: 10000, // Timeout de requisição
  headers: {
    "Content-Type": "application/json",
  },
});



// Funções genéricas para chamada de API
// export const apiGet = async (endpoint, params = {}) => {
//   try {
//     console.log(`API:`,api);
//     const response = await api.get(endpoint, { params });
//     return response.data;
//   } catch (error) {
//     handleApiError(error);
//   }
// };

// const handleApiError = (error) => {
//   if (error.response) {
//     console.error(`API Error: ${error.response.status} - ${error.response.statusText}`);
//   } else if (error.request) {
//     console.error("No response received:", error.request);
//   } else {
//     console.error("Request error:", error.message);
//   }
//   throw error;
// };

// export default {api, apiGet};
