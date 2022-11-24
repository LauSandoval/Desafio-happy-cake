import { Container } from "react-bootstrap";

export default () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">
        Bienvenido a <span className="fw-bold">Happy Cake</span> 🎂
      </h1>
      <h6> El lugar de los pasteles felices </h6>
      <img src="https://img.freepik.com/vector-gratis/tarta-chocolate-fresas_1067-124.jpg?w=2000" height="500" width="500"/>
    </Container>
  );
};
