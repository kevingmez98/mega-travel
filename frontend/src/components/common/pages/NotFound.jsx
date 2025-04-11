import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: "70vh" }}>
      <h1 style={{ fontSize: "4rem", color: "#3AAA1A" }}>404</h1>
      <p className="text-muted mb-3">La página que buscas no existe.</p>
      <Link to="/" className="btn btn-custom-green">Volver al inicio</Link>
    </div>
  );
};

export default NotFound;
