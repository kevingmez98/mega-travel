import PageContainer from "../../../components/common/templates/PageContainer";
import ClientList from "../../../components/clients/modules/ClientList";
import RegisterForm from "../../../components/clients/modules/RegisterForm";
import clientService from "../services/clientService";
import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

const ClientPage = () => {

    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadClients = async () => {
        setLoading(true);
        const { success, data, message } = await clientService.getClients(20, 0);
        if (!success) {
            // Swal.fire("Error", message, "error");
            alert(message);
            return;
        }

        // Usar data.clients o lo que venga de la API
        console.log("Clientes:", data.clients);
        setClients(data.clients || []);
        setLoading(false);
    };


    useEffect(() => {
        loadClients();
    }, []);

    const createClient = async (dataClient) => {
        console.log("data");
        console.log(dataClient);
        const { success, message } = await clientService.createClient(dataClient);
        if (success) {
            await loadClients(); // Recarga lista al registrar
        } else {
            alert(message);
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
                    <Col xs={8}>
                        <RegisterForm onCrearCliente={createClient}></RegisterForm>
                    </Col>
                    <Col>
                        <ClientList clientes={clients}></ClientList>
                    </Col>
                </Row>
            </PageContainer>


        </>
    )
}

export default ClientPage
