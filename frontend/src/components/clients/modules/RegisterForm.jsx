// Formulario de registro
import { useState } from "react";
import { Row, Col } from "react-bootstrap"
import { FaUser, FaEnvelope } from 'react-icons/fa';
import Box from "../../common/elements/Box";
import CustomButton from "../../common/elements/Button";
import LabeledInput from "../../common/widgets/LabeledInput";
import LabeledInputIcon from "../../common/widgets/LabeledInputIcon";


const RegisterForm = ({ onCrearCliente }) => {
    // Al ser solo 3 datos no amerita tener un contexto
    const [clientData, setClientData] = useState({
        fullName: "",
        email: "",
        address: "",
    });

    // Logica para manejar el submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Verificar campos
        const missingFields = []; // Campos requeridos

        if (!clientData.fullName) missingFields.push('Nombre completo');
        if (!clientData.address) missingFields.push('dirección');
        if (!clientData.email) missingFields.push('email');

        if (missingFields.length > 0) {
            alert(`Faltan los siguientes campos: ${missingFields.join(', ')}`);
            return;
        }
        // Enviar los datos a la funcion
        await onCrearCliente({
            fullName: clientData.fullName,
            email: clientData.email,
            address: clientData.address,
        });
    };

    // Logica para manejar el cambio de algun input
    const handleChange = (e) => {
        console.log("???");
        const { id, value } = e.target;

        setClientData((prev) => ({
            ...prev,
            [id]: value, // Modificar solo el value
        }));
    };

    return (
        <Box
            title={"Nuevo cliente"}
            subtitle={"Registrar nuevos clientes en el sistema, ingresando información básica como nombre, contacto y dirección"}>
            <form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <LabeledInputIcon
                            icon={FaUser}
                            id={"fullName"} onChange={handleChange} value={clientData.fullName} label={"Nombre completo"} required
                        />
                    </Col>
                    <Col>
                        <LabeledInputIcon
                            icon={FaEnvelope}
                            id={"email"} type="email" onChange={handleChange} value={clientData.email} label={"E-mail"} required
                        />

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <LabeledInput id={"address"} onChange={handleChange} value={clientData.address} label={"Dirección"} required />
                    </Col>
                </Row>
                <div className="d-flex gap-3 buttons-margin buttons-center">
                    <CustomButton className="btn-custom-green">Agregar cliente</CustomButton>
                    <CustomButton className="btn-custom-white">Cancelar</CustomButton>
                </div>
            </form>
        </Box>
    );
};

export default RegisterForm;