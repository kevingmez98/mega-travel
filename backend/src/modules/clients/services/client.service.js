/*Se aplica la lógica de negocio a los datos traidos por el repositorio o enviarle datos al repositorio del controlador*/
import ClientRepository from "../repositories/client.repository.js";
import utils from "../../../utils/utils.js";
import { throwError } from "../../../utils/throwError.js";
/* Metodos de lectura */

/**
 * @description Obtiene los clientes aplicando filtros opcionales.
 * @param {Object} query - Datos provenientes del query de la solicitud.
 * @returns {Object} - Lista de clientes encontrados en la base de datos junto con el total.
 * @throws {Error} - Lanza un error en caso de fallo.
 */
const getClients = async (query) => {
    try {
        /// Los datos llegan asi del query: ids=1,2,3
        const { limit = null, offset = 0 } = query; // Si no hay limit, se traerán todos
        // Filtrar posibles filtros permitidos 
        const filter = utils.filterFields(query, ["idClient", "fullName", "address", "email", "createdAt", "updatedAt"])
        const responseData = ClientRepository.getClients(filter, limit, offset);
        return responseData;
    } catch (err) {
        throw err;
    }
}

/* Metodos de creacion*/
/**
 * @description Registra un nuevo cliente en la base de datos
 * @param {Object} datosBlog - Datos provenientes del body de la solicitud.
 * @returns {Object} - Blog recien creado junto con un mensaje
 * @throws {Error} - Lanza un error en caso de fallo.
 */
const createClient = async (dataClient) => {
    try {
        // Verificar campos
        const missingFields = []; // Campos requeridos

        if (!dataClient.fullName) missingFields.push('Nombre completo');
        if (!dataClient.address) missingFields.push('dirección');
        if (!dataClient.email) missingFields.push('email');

        if (missingFields.length > 0) {
            throwError(`Faltan los siguientes campos: ${missingFields.join(', ')}`,400);
        }
        // Verificar que el correo sea valido
        if(!utils.isValidEmail(dataClient.email)){
            throwError(`El correo ingresado no es valido`,400);
        }

        // Verificar que el correo no exista
        const existing = await ClientRepository.getClients({email:dataClient.email});
        if(existing && existing.total>0){
            throwError("El correo ya se encuentra registrado.",409)
        }

        // Filtrar campos permitidos 
        const data = utils.filterFields(dataClient, ["fullName", "address", "email"])
        let client = await ClientRepository.createClient(data);
        const response = {
            client: client,
            message: "Cliente creado correctamente"
        }
        return response;
    } catch (error) {
        throw error;
    }
}

export default{
    createClient,
    getClients
}