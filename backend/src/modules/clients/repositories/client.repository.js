// Se interactua con la base de datos haciendo uso de sequelize o consultas personalizadas
import Client from '../models/client.model.js';

/* Metodos de consulta*/
/**
 * @description Obtiene todos los clientes según los filtros aplicados.
 * @param {Object} [condiciones=null] - Condiciones de búsqueda (ejemplo: `{ idCliente: 5 }`).
 * @param {number} [limit=null] - Cantidad de registros en la consulta.
 * @param {number} [offset=null] - Offset o pagina de la consulta.
 * @returns {Object} - Lista de clientes encontrados en la base de datos junto con la cantidad total.
 * @throws {Error} - Lanza un error en caso de fallo.
 */
const getClients = async (conditions = null, limit = null, offset = 0) => {
    const filter = { ...conditions || {} } // Generar objeto para la búsqueda
    try {
        // Obtener el conteo correcto aplicando el filtro pero sin relaciones
        const total = await Client.count({
            where: filter
        });
        const clients = await Client.findAll({
            where: filter,
            order: [['created_at', 'DESC']], //Organizar por fecha de creación
            limit: limit ? parseInt(limit) : undefined, // Si limit es null, no se aplica
            offset: offset ? parseInt(offset) : 0, // Si offset es null iniciar la búsqueda en 0
        });
        return { clients, total };
    } catch (err) {
        throw err;
    }
}


/*Metodos de inserción */
/**
 * @description Crea un cliente nuevo.
 * @returns {Object} - Cliente recien creado.
 * @throws {Error} - Lanza un error en caso de fallo.
 */
const createClient = async (clientData) => {
    return Client.create(clientData);
};

export default{
    getClients,
    createClient,
};

