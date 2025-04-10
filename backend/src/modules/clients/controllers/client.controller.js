//Manejar las solicitudes HTTP. Llama al servicio correspondiente.
import ClientService from '../services/client.service.js';

/* Metodos de consulta*/

/**
 * @description Obtiene la lista de clientes según los filtros enviados en la query.
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} req.query - Filtros opcionales para la consulta.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @returns {Object} - Lista de clientes obtenidos de la base de datos junto con la cantidad encontrada.
 */
const getclients = async (req, res, next) => {
    try {
        const results = await ClientService.getClients(req.query);
        res.status(200).json(results); //Se retornan los clientes
    } catch (err) {
       next(err); // Enviar error al middleware
    }
}

/* Metodos de creacion*/
/**
 * @description Registra un cliente en la base de datos.
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} req.body - Datos del cliente a registrar.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @returns {Object} - datos del cliente registrado junto con un mensaje.
 */
const createClient = async (req, res, next) => {
    try {
        // Enviar el cuerpo de la solicitud para registrar el client
        const response = await ClientService.createClient(req.body);
        res.status(201).json(response); //Se retornan los datos
    } catch (error) {
        next(error); // Enviar error al middleware
    }
}

export default {
    createClient, getclients
}

