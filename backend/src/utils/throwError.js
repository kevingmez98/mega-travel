// src/utils/error.utils.js
import { ApiError } from "./ApiError.js";
/**
 * Lanza un error con un mensaje personalizado y un código de estado HTTP opcional.
 * @param {string} message - Mensaje del error.
 * @param {number} statusCode - Código HTTP del error.
 */
export const throwError = (message, statusCode = 400) => {
  throw new ApiError(message, statusCode);
};
