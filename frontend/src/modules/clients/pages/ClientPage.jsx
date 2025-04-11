import PageContainer from "../../../components/common/templates/PageContainer";
import ClientList from "../../../components/clients/modules/ClientList";
import RegisterForm from "../../../components/clients/modules/RegisterForm";
import clientService from "../services/clientService";
import Swal from "sweetalert2";
import Paginator from "../../../components/common/widgets/Paginator";
import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

const ClientPage = () => {

    const [clients, setClients] = useState([]); // Lista de clientes
    const [currentPage, setcurrentPage] = useState(1); // Pagina actual del paginador
    const [totalPages, setTotalPages] = useState(1); // Total de paginas del paginador
    const [loading, setLoading] = useState(true); // estado de carga de la lista

    const clientsPerPage = 3;

    // Cargar clientes, permite colocar decidir desde que pagina hacerlo
    const loadClients = async (newPage) => {
        if (newPage) {
            setcurrentPage(newPage);
        }
        setLoading(true);

        const { success, data, message } = await clientService.getClients(clientsPerPage,
            (currentPage - 1) * clientsPerPage);

        setLoading(false);
        if (!success) {
            Swal.fire("Error", message, "error");
            return;
        }

        // Usar data.clients o lo que venga de la API
        setClients(data.clients || []);
        // Colocar el total
        setTotalPages(Math.ceil(data.total / clientsPerPage) || 1); // Total de páginas
    };


    useEffect(() => {
        loadClients();
    }, [currentPage]);

    // Crear el cliente, recibe un callback para notificar al componente si fue exitosa la creación
    const createClient = async (dataClient, onSuccessReset) => {
        // Mostrar alerta de carga
        Swal.fire({
            title: "Creando cliente...",
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });
        const { success, message } = await clientService.createClient(dataClient);

        Swal.close(); // cerrar loading
        if (success) {
            await loadClients(1); // Recarga lista al registrar
            Swal.fire("¡Éxito!", "Cliente registrado correctamente", "success");
            onSuccessReset(); // Solo si fue exitoso
        } else {
            Swal.fire("Error", message || "Hubo un problema", "error");
        }
    };

    return (
        <>
            <PageContainer
                title="Módulo Clientes"
                subtitle="
                El Módulo Cliente gestiona la información de los clientes existentes, permitiendo consultar, editar y organizar sus datos de forma eficiente.
                Facilita la búsqueda y filtrado de clientes por distintos criterios.
                "
            >
                <Row>
                    <Col xs={12} md={6} lg={8}>
                        <RegisterForm onCrearCliente={createClient}></RegisterForm>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <ClientList
                            clients={clients}
                            paginator={
                                <div className="d-flex justify-content-center mt-4">
                                    <Paginator
                                        currentPage={currentPage}
                                        totalPages={totalPages}
                                        onPageChange={setcurrentPage}
                                    />
                                </div>
                            }
                            onReload={loadClients}
                            loading={loading}

                        />
                    </Col>
                </Row>
            </PageContainer>


        </>
    )
}

export default ClientPage
