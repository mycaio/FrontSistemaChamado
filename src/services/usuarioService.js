import api from "./api";

export const listarUsuarios = async () => {
  const response = await api.get("/usuarios");
  return response.data;
};

export const buscarUsuarioPorId = async (id) => {
  const response = await api.get(`/usuarios/${id}`);
  return response.data;
};

export const criarUsuario = async (dados) => {
  const response = await api.post("/usuarios", dados);
  return response.data;
};

export const atualizarUsuario = async (id, dados) => {
  const response = await api.put(`/usuarios/${id}`, dados);
  return response.data;
};

export const deletarUsuario = async (id) => {
  await api.delete(`/usuarios/${id}`);
};
