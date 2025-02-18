

export const TourManagementTable = () => {
  return (
    <div className="container mx-auto p-6">
    <h2 className="text-2xl font-bold mb-4">Gestão de Passeios</h2>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Nome</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Local</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Data</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Passeio na Montanha</td>
            <td className="border border-gray-300 px-4 py-2">Serra Azul</td>
            <td className="border border-gray-300 px-4 py-2">12/03/2025</td>
            <td className="border border-gray-300 px-4 py-2"><span className="text-green-500">Publicado</span></td>
            <td className="border border-gray-300 px-4 py-2">
              <button className="bg-blue-500 text-white px-3 py-1 rounded">Editar</button>
              <button className="bg-red-500 text-white px-3 py-1 rounded ml-2">Excluir</button>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Trilha na Floresta</td>
            <td className="border border-gray-300 px-4 py-2">Parque Nacional</td>
            <td className="border border-gray-300 px-4 py-2">25/04/2025</td>
            <td className="border border-gray-300 px-4 py-2"><span className="text-yellow-500">Rascunho</span></td>
            <td className="border border-gray-300 px-4 py-2">
              <button className="bg-blue-500 text-white px-3 py-1 rounded">Editar</button>
              <button className="bg-green-500 text-white px-3 py-1 rounded ml-2">Publicar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  
  )
}