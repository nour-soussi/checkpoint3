import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function FooterController() {
    return (
        <Card className="text-center">
        <Card.Header><h2>Velo</h2></Card.Header>
        <Card.Body>
            <Card.Title>Contact</Card.Title>
            <Card.Text>
            flen@hotmail.com
            003563980
            </Card.Text>
            <Card.Title>address</Card.Title>
            <Card.Text>
            89 rue des roses 
            </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">Velo © 2022 - All rights reserved</Card.Footer>
        </Card>
    );
    }

export default FooterController;