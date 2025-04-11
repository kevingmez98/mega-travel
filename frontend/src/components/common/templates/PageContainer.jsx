import React from 'react';
import { Container } from 'react-bootstrap';
/*Contenedor para darle estilo a las paginas que ocupen un titulo y un subtitulo */
const PageContainer = ({ title, subtitle, children }) => {
  return (
    <Container className="py-5">
      <h2 className="text-center fw-bold">{title}</h2>
      {subtitle && (
        <p className="text-muted mx-auto" style={{ maxWidth: '750px' }}>
          {subtitle}
        </p>
      )}
      <div className="mt-5">
        {children}
      </div>
    </Container>
  );
};

export default PageContainer;
