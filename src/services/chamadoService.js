import api from "./api";

export const listarChamados = async () => {
  const response = await api.get("/chamados");
  return response.data;
};
