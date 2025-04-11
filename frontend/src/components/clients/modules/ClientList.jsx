// Formulario de registro
import Box from "../../common/elements/Box";
import { Table } from "react-bootstrap";


const ClientList = ({ clientes }) => {

    return (
        <Box
        title={"Clientes"}
        subtitle={"Visualiza todos nuestros clientes, por nombre completo y dirección"}>
            <Table bordered={false} className="table-borderless">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Dirección</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map((c) => (
                        <tr key={c.idClient}>
                            <td className="align-middle">{c.fullName}</td>
                            <td className="align-middle">{c.address}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Box >
    );
};

export default ClientList;