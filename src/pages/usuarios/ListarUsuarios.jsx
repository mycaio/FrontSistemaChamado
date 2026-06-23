import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import UsuarioTable from "../../components/usuarios/UsuarioTable";

import { listarUsuarios, deletarUsuario } from "../../services/usuarioService";

function ListarUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    carregarUsuarios();
  }, []);

  async function carregarUsuarios() {
    try {
      const data = await listarUsuarios();
      setUsuarios(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDelete(id) {
    const confirmar = window.confirm(
      "Tem certeza que deseja excluir este usuário?",
    );

    if (!confirmar) {
      return;
    }

    try {
      await deletarUsuario(id);
      carregarUsuarios();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="p-8">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">Lista de Usuários</h1>

        <button
          onClick={() => navigate("/usuarios/criar")}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Novo Usuário
        </button>
      </div>

      <UsuarioTable usuarios={usuarios} onDelete={handleDelete} />
    </div>
  );
}

export default ListarUsuarios;
