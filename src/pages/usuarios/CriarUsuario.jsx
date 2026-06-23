import { useNavigate } from "react-router-dom";
import UsuarioForm from "../../components/usuarios/UsuarioForm";
import { criarUsuario } from "../../services/usuarioService";

function CriarUsuario() {
  const navigate = useNavigate();

  async function handleCriarUsuario(dados) {
    try {
      await criarUsuario(dados);
      navigate("/usuarios");
    } catch (error) {
      console.error("Erro ao criar usuário", error);
      alert("Falha ao criar usuário.");
    }
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Novo Usuário</h1>

      <UsuarioForm onSubmit={handleCriarUsuario} />
    </div>
  );
}

export default CriarUsuario;
