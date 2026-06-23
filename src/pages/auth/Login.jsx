import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authService";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await login(email, senha);

      localStorage.setItem("token", response.token);

      navigate("/dashboard");
    } catch (error) {
      console.error("Erro no login", error);
      alert("Email ou senha inválidos");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow w-full max-w-md"
      >
        <h1 className="text-3xl font-bold mb-6">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          className="w-full border p-3 rounded mb-4"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button className="w-full bg-sky-600 text-white py-3 rounded-xl">
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
