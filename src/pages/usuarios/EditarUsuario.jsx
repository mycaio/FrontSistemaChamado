import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UsuarioForm from "../../components/usuarios/UsuarioForm";
import { buscarUsuarioPorId, atualizarUsuario } from "../../services/usuarioService";

function EditarUsuario() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function carregarUsuario() {
      try {
        const data = await buscarUsuarioPorId(id);
        setUsuario(data);
      } catch (err) {
        console.error("Erro ao carregar usuário", err);
        setError("Não foi possível carregar o usuário.");
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      carregarUsuario();
    }
  }, [id]);

  async function handleUpdate(dados) {
    try {
      await atualizarUsuario(id, dados);
      navigate("/usuarios");
    } catch (err) {
      console.error("Erro ao atualizar usuário", err);
      alert("Falha ao atualizar usuário. Tente novamente.");
    }
  }

  if (loading) {
    return <div className="p-8">Carregando usuário...</div>;
  }

  if (error) {
    return (
      <div className="p-8">
        <p className="text-red-600 mb-4">{error}</p>
        <button
          type="button"
          onClick={() => navigate("/usuarios")}
          className="bg-gray-300 px-3 py-1 rounded"
        >
          Voltar para lista
        </button>
      </div>
    );
  }

  if (!usuario) {
    return null;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Editar Usuário</h1>
      <UsuarioForm usuario={usuario} onSubmit={handleUpdate} />
    </div>
  );
}

export default EditarUsuario;
