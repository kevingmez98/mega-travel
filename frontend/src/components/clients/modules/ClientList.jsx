// Lista para mostrar clientes, puede recibir un paginador
import Box from "../../common/elements/Box";
import { Table } from "react-bootstrap";
import CustomButton from "../../common/elements/Button";

// Puede recibir un paginador personalizado, una lissta de clientes, una acción para actualizar desde acá a los clientes y un estado de loading
const ClientList = ({ clients, paginator = null, onReload, loading=true }) => {

    return (
        <Box
            title={"Clientes"}
            subtitle={"Visualiza todos nuestros clientes, por nombre completo y dirección"}
            className="client-box">
            <Table bordered={false} className="table-borderless table-sm text-client custom-table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Dirección</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        [...Array(3)].map((_, i) => (
                            <tr key={i}>
                                <td><div className="skeleton skeleton-text" /></td>
                                <td><div className="skeleton skeleton-text" /></td>
                            </tr>
                        ))
                    ) : (
                        clients.map((c) => (
                            <tr key={c.idClient}>
                                <td className="align-middle">{c.fullName}</td>
                                <td className="align-middle">{c.address}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>
            {paginator}
            <div className="d-flex gap-3 buttons-margin buttons-center">
                <CustomButton className="btn-custom-green" onClick={() => onReload(1)}>Listar clientes</CustomButton>
            </div>
        </Box >
    );
};

export default ClientList;