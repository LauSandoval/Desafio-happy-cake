import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Navigation() {
  return (
    <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Agrega tu email...</Form.Label>
      <Form.Control type="email" placeholder="name@example.com" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Escribe tu consulta...</Form.Label>
      <Form.Control as="textarea" rows={3} />
    </Form.Group>
    <div className="d-flex justify-content-center">
    <Button  variant="danger">Enviar</Button>{' '}
    </div>
    </Form>
)
}
