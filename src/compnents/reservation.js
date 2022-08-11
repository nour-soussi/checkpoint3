import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Reserver(){
return(
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
        
            <Form.Group className="mb-3" controlId="formBasicCin">
                <Form.Label>CIN</Form.Label>
                <Form.Control type="Number"  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="jour">
                <Form.Label>Jour de reservation</Form.Label>
                <Form.Control type="date"  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Reserver
            </Button>
            </Form>
        );}

export default Reserver;
