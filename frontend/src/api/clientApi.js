/* Utiliza la instancia de axios para realizar las peticiones */

import axiosInstance from "./axiosInstance";

// Ruta para registrar un cliente
const postClient = (data) => axiosInstance.post("/clients", data);

// Ruta para traer clientes segun unos parametros
const getClients = (params) => axiosInstance.get("/clients", { params });

export default {
    postClient, getClients
}

