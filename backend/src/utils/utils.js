/**
 * Filtra campos permitidos de un objeto dejando solo los permitidos.
 * @param {Object} sourceData - Datos recibidos a filtrar.
 * @param {Array} allowedFields - Lista de campos permitidos.
 * @returns {Object} - Objeto con solo los campos permitidos.
 */
const filterFields = (sourceData, allowedFields) => {
    const filteredData = {};
    allowedFields.forEach((field) => {
        if (sourceData[field] !== undefined) {
            filteredData[field] = sourceData[field];
        }
    });
    return filteredData;
};

/**
 * Utiliza expresiones regulares para verificar que un correo sea valido.
 * @param {String} email - Email para verificar.
 * @returns {boolean} - validacion del correo ingresado.
 */
const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  

export default {
    filterFields, isValidEmail
}
