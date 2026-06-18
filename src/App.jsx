import { Routes, Route, Navigate } from "react-router-dom";
import ListarChamados from "./pages/chamados/ListarChamados";
import CriarChamado from "./pages/chamados/CriarChamado";
import EditarChamado from "./components/chamados/EditarChamado";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/chamados" replace />} />
      <Route path="/chamados" element={<ListarChamados />} />
      <Route path="/chamados/criar" element={<CriarChamado />} />
      <Route path="/chamados/editar/:id" element={<EditarChamado />} />
      <Route path="*" element={<Navigate to="/chamados" replace />} />
    </Routes>
  );
}

export default App;
