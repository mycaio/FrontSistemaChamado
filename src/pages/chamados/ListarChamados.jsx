import { useEffect, useState } from "react";
import { listarChamados } from "../../services/chamadoService";
import ChamadoTable from "../../components/chamados/ChamadoTable";

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

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Lista de Chamados</h1>

      <ChamadoTable chamados={chamados} />
    </div>
  );
}

export default ListarChamados;
