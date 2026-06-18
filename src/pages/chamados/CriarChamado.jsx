import ChamadoForm from "../../components/chamados/ChamadoForm";
import { criarChamado } from "../../services/chamadoService";

function CriarChamado() {
  async function handleCriarChamado(dados) {
    try {
      const response = await criarChamado(dados);
      console.log("Chamado criado:", response);
      alert("Chamado criado com sucesso!");
    } catch (error) {
      console.error("Erro ao criar chamado", error);
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
