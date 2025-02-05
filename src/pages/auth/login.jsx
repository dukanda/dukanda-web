import { useState } from "react";
import { Container, Form, Button, Card, Image } from "react-bootstrap";
import headerData from "@/data/headerData";
import { FaGoogle } from "react-icons/fa";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login com:", { email, password });
  };

  const handleGoogleLogin = () => {
    console.log("Login com Google");
  };

  const { logo } = headerData;
  return (
    <Container className="d-flex vh-100 w-100 justify-content-center align-items-center bg-light">
      <Card className="p-4 shadow-lg rounded-10" style={{ width: "100%", maxWidth: "400px" }}>
        <div className="text-center mb-3">
          <Image
            src={logo.src}
            alt="Logo"
            className="mb-4"
          />
        </div>
        <h2 className="text-center text-success">Bem-vindo de volta</h2>
        <p className="text-center text-muted">Faça login para continuar</p>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="success" type="submit" className="w-100 bg-success text-white border-0 mb-3">
            Entrar
          </Button>
          <Button variant="outline-danger" className="w-100 d-flex align-items-center justify-content-center" onClick={handleGoogleLogin}>
            <FaGoogle className="me-2" /> Entrar com Google
          </Button>
        </Form>
        <p className="mt-3 text-center text-muted">
          Não tem uma conta? <a href="/register" className="text-warning">Cadastre-se</a>
        </p>
      </Card>
    </Container>
  );
}
