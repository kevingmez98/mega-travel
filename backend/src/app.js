// Configurar la aplicación express
import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/database.js'; // importar conexión a la BD

dotenv.config();
const app = express();

// Middlewares
app.use(express.json());

// Ruta base de prueba
app.get('/', (req, res) => {
    res.send('Hola, backend funcionando!');
  });

export default app;