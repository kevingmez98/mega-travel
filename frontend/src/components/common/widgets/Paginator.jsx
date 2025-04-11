/* Paginador reutilizable */
import React from 'react';
import { Pagination } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

const Paginator = ({ currentPage, totalPages, onPageChange }) => {

    // Cantidad maxima de paginas, por defecto 5
    const MAX_PAGES_VISIBLE = 5;

    // Calcular paginas para mostrar
    const getPageNumbers = () => {
        const pages = [];

        // Si es menor a la cantidad maxima se muestran todas
        if (totalPages <= MAX_PAGES_VISIBLE) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
            // Si es mayor a la cantidad maxima
        } else {

            // Se coloca la primera por defecto
            pages.push(1);

            // Si se está en una pagina mayor a la 3 se agrega ...
            if (currentPage > 3) {
                pages.push("...");
            }

            // Mostrar páginas cercanas a la actual (ej: paginaActual 5, mostrar 4, 5, 6).
            // 2 como minimo, totalPages -1 como maximo
            const start = Math.max(2, currentPage - 1); // Asegura que no se muestren páginas antes de la 2

            const end = Math.min(totalPages - 1, currentPage + 1); // Asegura que no se muestren después de la penúltima

            // Se agregan las páginas alrededor de la actual
            for (let i = start; i <= end; i++) {
                pages.push(i);
            }

            // Si aún faltan páginas después de la actual, se agrega "..." antes de la última
            if (currentPage < totalPages - 2) {
                pages.push("...");
            }

            // Siempre se muestra la última página
            pages.push(totalPages);
        }

        return pages;
    };

    return (
        <Pagination className="custom-pagination">
            <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup className="me-2" aria-label="First group">
                    <button
                        className="pagination-arrow btn"
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        &lt;
                    </button>

                    {getPageNumbers().map((page, index) => (
                        <button
                            key={index}
                            className={`pagination-number btn ${currentPage === page ? "active" : ""
                                }`}
                            onClick={() => typeof page === "number" && onPageChange(page)}
                            disabled={page === "..."}
                        >
                            {page}
                        </button>
                    ))}

                    <button
                        className="pagination-arrow btn"
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        &gt;
                    </button>
                </ButtonGroup>
            </ButtonToolbar>
        </Pagination>
    );
};

export default Paginator;
