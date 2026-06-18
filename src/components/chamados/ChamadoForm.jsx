import { useState } from "react";

function ChamadoForm({ onSubmit }) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [prioridade, setPrioridade] = useState("BAIXA");

  function handleSubmit(e) {
    e.preventDefault();

    const novoChamado = {
      titulo,
      descricao,
      prioridade,
    };

    onSubmit(novoChamado);

    setTitulo("");
    setDescricao("");
    setPrioridade("BAIXA");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        className="w-full border p-3 rounded"
      />

      <textarea
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        className="w-full border p-3 rounded"
      />

      <select
        value={prioridade}
        onChange={(e) => setPrioridade(e.target.value)}
        className="w-full border p-3 rounded"
      >
        <option value="BAIXA">Baixa</option>
        <option value="MEDIA">Média</option>
        <option value="ALTA">Alta</option>
        <option value="CRITICA">Crítica</option>
      </select>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Criar Chamado
      </button>
    </form>
  );
}

export default ChamadoForm;
