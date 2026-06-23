import { Routes, Route, Navigate } from "react-router-dom";

// CHAMADOS
import ListarChamados from "./pages/chamados/ListarChamados";
import CriarChamado from "./pages/chamados/CriarChamado";
import EditarChamado from "./pages/chamados/EditarChamado";

// USUÁRIOS
import ListarUsuarios from "./pages/usuarios/ListarUsuarios";
import CriarUsuario from "./pages/usuarios/CriarUsuario";
import EditarUsuario from "./pages/usuarios/EditarUsuario";

function App() {
  return (
    <Routes>
      {/* Redirecionamento inicial */}
      <Route path="/" element={<Navigate to="/chamados" replace />} />

      {/* Chamados */}
      <Route path="/chamados" element={<ListarChamados />} />
      <Route path="/chamados/criar" element={<CriarChamado />} />
      <Route path="/chamados/editar/:id" element={<EditarChamado />} />

      {/* Usuários */}
      <Route path="/usuarios" element={<ListarUsuarios />} />
      <Route path="/usuarios/criar" element={<CriarUsuario />} />
      <Route path="/usuarios/editar/:id" element={<EditarUsuario />} />

      {/* Rota inválida */}
      <Route path="*" element={<Navigate to="/chamados" replace />} />
    </Routes>
  );
}

export default App;
