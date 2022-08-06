import http from "../http-config";

const getAll = () => {
  return http.get("/clients");
};

const getById = (id) => {
  return http.get(`/clients/${id}`);
};

const create = (data) => {
  return http.post("/clients", data);
};

const update = (id, data) => {
  return http.patch(`/clients/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/clients/${id}`);
};

const ClientActions = {
  getAll,
  getById,
  create,
  update,
  remove,
};

export default ClientActions;