import { useNavigate } from "react-router-dom";
import ChamadoForm from "../../components/chamados/ChamadoForm";
import { criarChamado } from "../../services/chamadoService";

function CriarChamado() {
  const navigate = useNavigate();

  async function handleCriarChamado(dados) {
    try {
      await criarChamado(dados);
      navigate("/chamados");
    } catch (error) {
      console.error("Erro ao criar chamado", error);
      alert("Falha ao criar chamado. Tente novamente.");
    }
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Novo Chamado</h1>
      <ChamadoForm onSubmit={handleCriarChamado} />
    </div>
  );
}

export default CriarChamado;
