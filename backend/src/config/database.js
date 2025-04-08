// Archivo de configuración de la conexión de la base de datos usando sequelize
import Sequelize from 'sequelize';

import { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, NODE_ENV } from './env.js';

const sequelize = new Sequelize(
    DB_NAME, // Nombre de la BD
    DB_USER, // Nombre del usuario de la BD
    DB_PASSWORD, // Pass del usuario de la BD
    {
        host: DB_HOST, // Host de donde está la BD
        dialect: 'mysql',
        logging: NODE_ENV === 'development' ? console.log : false, // Logs solo en desarrollo
        define: {
            // Opciones globales
            freezeTableName: true, // Esto desactiva la pluralización
        },
        timezone: '-05:00', // establecer zona horaria
    }
);




// Probar la conexión
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión a la base de datos establecida con éxito.');
    } catch (error) {
        console.log(DB_USER);
        console.error('No se pudo conectar a la base de datos:', error);
    }
})();

export default sequelize; // Exportar la instancia de Sequelize