// Lista para mostrar clientes, puede recibir un paginador
import Box from "../../common/elements/Box";
import { Table } from "react-bootstrap";
import CustomButton from "../../common/elements/Button";

const ClientList = ({ clients, paginator = null, onReload }) => {

    return (
        <Box
            title={"Clientes"}
            subtitle={"Visualiza todos nuestros clientes, por nombre completo y dirección"}
            className="client-box">
            <Table bordered={false} className="table-borderless table-sm text-client">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Dirección</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map((c) => (
                        <tr key={c.idClient}>
                            <td className="align-middle text-muted">{c.fullName}</td>
                            <td className="align-middle text-muted">{c.address}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {paginator}
            <div className="d-flex gap-3 buttons-margin buttons-center">
                <CustomButton className="btn-custom-green" onClick={()=>onReload(1)}>Listar clientes</CustomButton>
            </div>
        </Box >
    );
};

export default ClientList;