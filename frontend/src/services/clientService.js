// Maneja la lógica intermedia, validaciones y posibles errores del api/client.js
import clientApi from "../api/clientApi";

/* Trae una cantidad de clientes publicados segun una cantidad solicitada */
const getClients = async (limit, offset) => {
    try {
        // Hacer la petición
        const response = await clientApi.getClients({ limit, offset });

        if (!response.data) {
            throw new Error("No se recibieron datos de la API.");
        }

        return { success: true, data: response.data };
    } catch (error) {
        const msg = error.response?.data?.error || error.message; // El backend puede retornar un mensaje
        return { success: false, message: msg || "Ocurrió un error inesperado." };
    }
}

export default {
    getClients
}