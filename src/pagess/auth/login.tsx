import { useState } from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import headerData from "@/data/headerData";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";
import React from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //@ts-ignore
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login com:", { email, password });
  };

  const handleGoogleLogin = () => {
    console.log("Login com Google");
  };

  const { logo } = headerData;
  return (
    <Container fluid className="vh-100 d-flex align-items-center bg-light">
      <Row className="vw-100 h-100 d-flex align-items-center">
        {/* Coluna da Imagem */}
        <Col  className="d-flex justify-content-center align-items-center bg-white p-0" style={{ height: "100vh", width: "100%" }}>
          <Image
            src={"/ducanda.jpg"}
            alt="Imagem de fundo"
            className="img-fluid w-100 h-100"
            style={{ objectFit: "cover" }}
          />
        </Col>
        {/* Coluna do Login */}
        <Col md={6} className="d-flex justify-content-center align-items-center h-100 bg-white">
          <div  style={{ width: "100%", maxWidth: "400px" }}>
            <div className="text-center mb-3">
              <Image src={logo.src} alt="Logo" className="mb-4" />
            </div>
            <h2 className="text-center text-success">Bem-vindo de volta</h2>
            <p className="text-center text-muted">Faça login para continuar</p>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3 d-flex flex-column gap-0">
                <Form.Label className="fs-6">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Digite seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="fs-6">Senha</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Button variant="success" type="submit" className="w-100 bg-success text-white border-0 mb-4 mt-2">
                Entrar
              </Button>
              <Button variant="outline-danger" className="w-100 d-flex align-items-center justify-content-center" onClick={handleGoogleLogin}>
                <FaGoogle className="me-2" /> Entrar com Google
              </Button>
            </Form>
            <p className="mt-3 text-center text-muted">
              Não tem uma conta? <Link href="/auth/signup" className="text-warning">Cadastre-se</Link>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
