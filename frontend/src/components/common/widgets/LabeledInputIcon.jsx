// Molecula de un input con icono
import React from 'react';
import { Form } from 'react-bootstrap';
import Input from "../elements/Input";


const LabeledInputIcon = ({ label, id, type = "text", icon: Icon = MailIcon, ...rest }) => {
  return (
    <Form.Group className="mb-3">
      {label && <Form.Label className="small text-muted mx-auto">{label}</Form.Label>}
      <div className="input-icon-wrapper">
        {Icon && <span className="input-icon"><Icon /></span>}
        <Input
          id={id}
          type={type}
          className="input-with-icon"
          {...rest}>

        </Input>
      </div>
    </Form.Group>
  );
};

export default LabeledInputIcon;
