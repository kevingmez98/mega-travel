// Atomo de Input básico
import { Form } from "react-bootstrap";

const Input = ({ type = "text", ...rest }) => {
    return (
        <Form.Control
            type={type}
            {...rest}
        />
    );
};

export default Input;
