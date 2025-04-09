//Rutas para acceder a las consultas
import { Router } from "express";
import clientController from "../controllers/client.controller.js";

const router = Router();

/* Rutas consulta*/
/**
 * @route GET /clients
 * @description Trae todos los clientes registrados
 * @query {Object} - Atributos extra relacionados a clientes (idClient, fullName, email, createdAt, updatedAt).
 * @query {number} [Limit] -Indica cuantos registros traer en una consulta. De no especificar se traen todos
 * @query {number} [Offset] - Indica desde que posicion empezar a devolver datos.
 * @returns {Array<Object>} Datos de los clientes encontrados.
 */
router.get('/', clientController.getclients);

/* Rutas creacion*/

/**
 * @route POST /clients
 * @description Permite registrar un cliente en el sistema
 * @param {Object} req.body - Datos del cliente. 
 * @param {Object} req.body.fullName -  Nombre completo del cliente. 
 * @param {Object} req.body.email - Email del cliente. 
 * @returns {Object} - Respuesta con el cliente creado y un mensaje
 * @returns {string} - res.message - Mensaje de respuesta
 * @returns {Object} - res.client - Cliente creado
*/
router.post('/', clientController.createClient);

export default router;