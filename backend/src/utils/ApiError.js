// Clase de API que hereda de Error con códigos personalizados
export class ApiError extends Error {
    constructor(message, statusCode = 400) {
        super(message);
        this.name = 'ApiError';
        this.statusCode = statusCode;
    }
}