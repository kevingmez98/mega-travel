// Middleware para centralizar el control de errores
import { ApiError } from '../utils/ApiError.js';
import { NODE_ENV } from '../config/env.js';

export const errorHandler = (err, req, res, next) => {
    // Si el error es ApiError enviarlo con el código definido y el mensaje
    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({ error: err.message });
    }

    // Si está en desarrollo se muestra el error en consola
    if (NODE_ENV === 'development') {
        console.error('[ERROR]:', err); // Para depuración
    }
    // Enviar por defecto error interno del servidor
    return res.status(500).json({ error: 'Error interno del servidor' });
};