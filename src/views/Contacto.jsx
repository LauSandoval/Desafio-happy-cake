import { Container } from "react-bootstrap";

import Contacto from "../components/Contacto";

export default () => {
  return (
    <Container className="pt-5">
      <h1 className="d-flex justify-content-center"> Cuentános, ¿En que podemos ayudarte? </h1>
      <Contacto />
    </Container>
  );
};
