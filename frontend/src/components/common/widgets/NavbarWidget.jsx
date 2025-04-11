import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import CustomButton from '../elements/Button';

function NavbarWidget() {
  return (
    <Navbar className="custom-navbar">
      <Container>
        <Navbar.Brand href="#" className="d-flex flex-column lh-sm">
          <strong className="fs-4">Viajes</strong>
          <span className="text-success fs-5">Colombia</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <div className='d-flex gap-3 buttons-center'>
            <CustomButton className="btn-custom-green">Contáctanos</CustomButton>
            <CustomButton className="btn-custom-white">Iniciar sesión</CustomButton>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarWidget;