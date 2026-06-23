import { useNavigate } from "react-router-dom";

function UsuarioTable({ usuarios, onDelete }) {
  const navigate = useNavigate();

  return (
    <table className="w-full border border-gray-300">
      <thead className="bg-gray-200">
        <tr>
          <th className="p-3 border">ID</th>
          <th className="p-3 border">Nome</th>
          <th className="p-3 border">Email</th>
          <th className="p-3 border">Perfil</th>
          <th className="p-3 border">Ações</th>
        </tr>
      </thead>

      <tbody>
        {usuarios.map((usuario) => (
          <tr key={usuario.id}>
            <td className="p-3 border">{usuario.id}</td>
            <td className="p-3 border">{usuario.nome}</td>
            <td className="p-3 border">{usuario.email}</td>
            <td className="p-3 border">{usuario.perfil}</td>

            <td className="p-3 border flex gap-3 justify-center">
              <button
                onClick={() => navigate(`/usuarios/editar/${usuario.id}`)}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Editar
              </button>

              <button
                onClick={() => onDelete(usuario.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UsuarioTable;
