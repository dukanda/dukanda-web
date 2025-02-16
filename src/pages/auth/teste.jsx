import { api } from "@/api/api";
import { useState, useEffect } from "react";

export default function Teste() {
  const [tours, setTours] = useState([]);

  async function tourRoutesData() {
    const response = await api.get("/tours");
    return response.data;
  }

  useEffect(() => {
    tourRoutesData().then(data => {
      setTours(data.data); // Removendo `data.data`, pois `data` já parece ser o array correto
      console.log("tourRoutesData", data.data);
    });
  }, []); // O array de dependências vazio garante que o efeito rode apenas uma vez

  return (
    <div>
      <h1>Teste</h1>
      <p>Quantidade de tours: {tours.length}</p>
    </div>
  );
}
