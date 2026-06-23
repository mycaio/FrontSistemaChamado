import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

// Dashboard
import Dashboard from "./pages/Dashboard";

// Chamados
import ListarChamados from "./pages/chamados/ListarChamados";
import CriarChamado from "./pages/chamados/CriarChamado";
import EditarChamado from "./pages/chamados/EditarChamado";

// Usuários
import ListarUsuarios from "./pages/usuarios/ListarUsuarios";
import CriarUsuario from "./pages/usuarios/CriarUsuario";
import EditarUsuario from "./pages/usuarios/EditarUsuario";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/chamados" element={<ListarChamados />} />
        <Route path="/chamados/criar" element={<CriarChamado />} />
        <Route path="/chamados/editar/:id" element={<EditarChamado />} />

        <Route path="/usuarios" element={<ListarUsuarios />} />
        <Route path="/usuarios/criar" element={<CriarUsuario />} />
        <Route path="/usuarios/editar/:id" element={<EditarUsuario />} />
      </Route>

      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

export default App;
