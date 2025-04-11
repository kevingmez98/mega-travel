// components/footer/FooterWidget.jsx
import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const FooterWidget = () => {
    return (
        <footer className="footer mt-auto py-4 text-center custom-footer">
            <Container>
                <p>Síguenos en</p>

                <div className="d-flex justify-content-center gap-4 mb-2">
                    <a href="https://twitter.com" className="icon-circle" target="_blank" rel="noreferrer">
                        <FaTwitter size={20} />
                    </a>
                    <a href="https://facebook.com" className="icon-circle" target="_blank" rel="noreferrer">
                        <FaFacebookF size={20} />
                    </a>
                    <a href="https://linkedin.com" className="icon-circle" target="_blank" rel="noreferrer">
                        <FaLinkedin size={20} />
                    </a>
                    <a href="https://instagram.com" className="icon-circle" target="_blank" rel="noreferrer">
                        <FaInstagram size={20} />
                    </a>
                </div>
            </Container>
        </footer>
    );
};

export default FooterWidget;
