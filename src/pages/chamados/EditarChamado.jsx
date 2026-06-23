import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ChamadoForm from "../../components/chamados/ChamadoForm";
import {
  atualizarChamado,
  buscarChamadoPorId,
} from "../../services/chamadoService";

function EditarChamado() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const chamadoState = location.state?.chamado;
  const [chamado, setChamado] = useState(chamadoState || null);
  const [loading, setLoading] = useState(!chamadoState);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (chamadoState) {
      setChamado(chamadoState);
      setLoading(false);
      return;
    }

    async function carregarChamado() {
      try {
        setLoading(true);
        const data = await buscarChamadoPorId(id);
        setChamado(data);
      } catch (err) {
        console.error("Erro ao carregar chamado", err);
        setError("Não foi possível carregar o chamado.");
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      carregarChamado();
    }
  }, [id, chamadoState]);

  async function handleUpdate(dados) {
    try {
      await atualizarChamado(chamado.id, dados);
      navigate("/chamados");
    } catch (error) {
      console.error("Erro ao atualizar chamado", error);
      alert("Falha ao atualizar o chamado. Tente novamente.");
    }
  }

  if (loading) {
    return <div className="p-8">Carregando chamado...</div>;
  }

  if (error) {
    return (
      <div className="p-8">
        <p className="text-red-600 mb-4">{error}</p>
        <button
          type="button"
          onClick={() => navigate("/chamados")}
          className="bg-gray-300 px-3 py-1 rounded"
        >
          Voltar para lista
        </button>
      </div>
    );
  }

  if (!chamado) {
    navigate("/chamados");
    return null;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Editar Chamado</h1>
      <ChamadoForm chamado={chamado} onSubmit={handleUpdate} />
    </div>
  );
}

export default EditarChamado;
