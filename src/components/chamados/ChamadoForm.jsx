import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function ChamadoForm({ chamado: chamadoProp, onSubmit }) {
  const navigate = useNavigate();
  const location = useLocation();
  const chamadoState = location.state?.chamado;
  const inicial = chamadoProp || chamadoState || {};

  const [form, setForm] = useState({
    titulo: inicial.titulo || "",
    descricao: inicial.descricao || "",
    prioridade: inicial.prioridade || "",
    status: inicial.status || "",
  });

  useEffect(() => {
    // se prop mudar ou vier via location, atualiza o form
    setForm({
      titulo: inicial.titulo || "",
      descricao: inicial.descricao || "",
      prioridade: inicial.prioridade || "",
      status: inicial.status || "",
    });
  }, [inicial.titulo, inicial.descricao, inicial.prioridade, inicial.status]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (onSubmit) {
      await onSubmit(form);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Título</label>
        <input
          name="titulo"
          value={form.titulo}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Descrição</label>
        <textarea
          name="descricao"
          value={form.descricao}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Prioridade</label>
        <input
          name="prioridade"
          value={form.prioridade}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Status</label>
        <input
          name="status"
          value={form.status}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      <div className="flex items-center">
        <button
          type="button"
          onClick={() => navigate("/chamados")}
          className="mr-2 bg-gray-300 px-3 py-1 rounded"
        >
          Voltar
        </button>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-1 rounded"
        >
          Salvar
        </button>
      </div>
    </form>
  );
}

export default ChamadoForm;
