import { useEffect, useState } from "react";

import DashboardCard from "../components/ui/DashboardCard";

import { listarChamados } from "../services/chamadoService";
import { listarUsuarios } from "../services/usuarioService";

function Dashboard() {
  const [totalChamados, setTotalChamados] = useState(0);
  const [totalUsuarios, setTotalUsuarios] = useState(0);
  const [abertos, setAbertos] = useState(0);
  const [fechados, setFechados] = useState(0);

  useEffect(() => {
    carregarDashboard();
  }, []);

  async function carregarDashboard() {
    try {
      const chamados = await listarChamados();
      const usuarios = await listarUsuarios();

      setTotalChamados(chamados.length);
      setTotalUsuarios(usuarios.length);

      const chamadosAbertos = chamados.filter(
        (c) => c.status === "ABERTO",
      ).length;

      const chamadosFechados = chamados.filter(
        (c) => c.status === "FECHADO",
      ).length;

      setAbertos(chamadosAbertos);
      setFechados(chamadosFechados);
    } catch (error) {
      console.error("Erro ao carregar dashboard", error);
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard titulo="Total Chamados" valor={totalChamados} />

        <DashboardCard titulo="Total Usuários" valor={totalUsuarios} />

        <DashboardCard titulo="Chamados Abertos" valor={abertos} />

        <DashboardCard titulo="Chamados Fechados" valor={fechados} />
      </div>
    </div>
  );
}

export default Dashboard;
