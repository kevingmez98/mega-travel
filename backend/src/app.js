// Configurar la aplicación express
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { errorHandler } from './middlewares/errorHandler.js';
import ClientRoutes from "./modules/clients/routes/clients.routes.js";


dotenv.config();
const app = express();

// Middlewares
app.use(express.json());

// Permitir solicitudes desde el frontend
app.use(cors({
  origin: process.env.URL_FRONTEND, // Reemplazar con el origen del frontend
  methods: ["GET", "POST", "PUT", "DELETE"], // Métodos HTTP permitidos
  credentials: true, // enviar cookies o autenticación
}));



// Ruta base de prueba
app.get('/', (req, res) => {
    res.send('Hola, backend funcionando!');
   
  });

// Registrar otras rutas
app.use('/clients', ClientRoutes);

// Manejo de rutas no encontradas (404)
app.use((req, res, next) => {
  res.status(404).json({ error: {message: "404.Recurso no encontrado" }});
});

// Middleware general de errores (al final siempre)
app.use(errorHandler);





export default app;