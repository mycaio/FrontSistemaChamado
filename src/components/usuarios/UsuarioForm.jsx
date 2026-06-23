import { useEffect, useState } from "react";
import { PERFIS_USUARIO } from "../../utils/enums";

function UsuarioForm({ onSubmit, usuario }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [perfil, setPerfil] = useState("SOLICITANTE");

  useEffect(() => {
    if (usuario) {
      setNome(usuario.nome || "");
      setEmail(usuario.email || "");
      setSenha(usuario.senha || "");
      setPerfil(usuario.perfil || "SOLICITANTE");
    }
  }, [usuario]);

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit({
      nome,
      email,
      senha,
      perfil,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className="w-full border p-3 rounded"
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border p-3 rounded"
      />

      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        className="w-full border p-3 rounded"
      />

      <select
        value={perfil}
        onChange={(e) => setPerfil(e.target.value)}
        className="w-full border p-3 rounded"
      >
        {PERFIS_USUARIO.map((perfil) => (
          <option key={perfil} value={perfil}>
            {perfil}
          </option>
        ))}
      </select>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {usuario ? "Atualizar Usuário" : "Criar Usuário"}
      </button>
    </form>
  );
}

export default UsuarioForm;
