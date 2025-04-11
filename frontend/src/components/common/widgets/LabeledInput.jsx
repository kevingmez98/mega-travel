import Input from "../elements/Input";
import { Form } from "react-bootstrap";

// Input con un label
const LabeledInput = ({ label, id, type = "text", ...rest }) => {
    return (
        <Form.Group className="mb-3">
            <Form.Label className="small text-muted mx-auto">{label}</Form.Label>
            <Input
                id={id}
                type={type}
                className="border px-2 py-1 rounded-md"
                {...rest}>

            </Input>
        </Form.Group>
    );
};

export default LabeledInput;
