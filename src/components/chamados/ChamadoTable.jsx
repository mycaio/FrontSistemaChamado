function ChamadoTable({ chamados }) {
  return (
    <table className="w-full border border-gray-300">
      <thead className="bg-gray-200">
        <tr>
          <th className="p-3 border">ID</th>
          <th className="p-3 border">Título</th>
          <th className="p-3 border">Prioridade</th>
          <th className="p-3 border">Status</th>
        </tr>
      </thead>

      <tbody>
        {chamados.map((chamado) => (
          <tr key={chamado.id}>
            <td className="p-3 border">{chamado.id}</td>
            <td className="p-3 border">{chamado.titulo}</td>
            <td className="p-3 border">{chamado.prioridade}</td>
            <td className="p-3 border">{chamado.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ChamadoTable;
