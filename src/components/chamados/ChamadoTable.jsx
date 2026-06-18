import { Link } from "react-router-dom";

function ChamadoTable({ chamados = [], onDelete }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Chamados</h2>
        <Link
          to="/chamados/criar"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Criar Chamado
        </Link>
      </div>

      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">ID</th>
            <th className="p-2 text-left">Título</th>
            <th className="p-2 text-left">Descrição</th>
            <th className="p-2 text-left">Ações</th>
          </tr>
        </thead>
        <tbody>
          {chamados.length === 0 ? (
            <tr>
              <td colSpan="4" className="p-4 text-center">
                Nenhum chamado.
              </td>
            </tr>
          ) : (
            chamados.map((c) => (
              <tr key={c.id} className="border-t">
                <td className="p-2">{c.id}</td>
                <td className="p-2">{c.titulo}</td>
                <td className="p-2">{c.descricao}</td>
                <td className="p-2">
                  <Link
                    to={`/chamados/editar/${c.id}`}
                    state={{ chamado: c }}
                    className="mr-2 bg-yellow-400 px-3 py-1 rounded inline-block"
                  >
                    Editar
                  </Link>
                  <button
                    type="button"
                    onClick={() => onDelete?.(c.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ChamadoTable;
