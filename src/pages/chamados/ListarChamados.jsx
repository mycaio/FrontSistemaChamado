import { useEffect, useState } from "react";
import ChamadoTable from "../../components/chamados/ChamadoTable";
import { listarChamados, deletarChamado } from "../../services/chamadoService";

function ListarChamados() {
  const [chamados, setChamados] = useState([]);

  useEffect(() => {
    carregarChamados();
  }, []);

  async function carregarChamados() {
    try {
      const data = await listarChamados();
      setChamados(data);
    } catch (error) {
      console.error("Erro ao buscar chamados", error);
    }
  }

  async function handleDelete(id) {
    const confirmar = window.confirm(
      "Tem certeza que deseja excluir este chamado?",
    );

    if (!confirmar) {
      return;
    }

    try {
      await deletarChamado(id);
      carregarChamados();
    } catch (error) {
      console.error("Erro ao excluir chamado", error);
    }
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Lista de Chamados</h1>
      <ChamadoTable chamados={chamados} onDelete={handleDelete} />
    </div>
  );
}

export default ListarChamados;
