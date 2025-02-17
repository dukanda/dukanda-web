"use client";
import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Image from "next/image";
// import headerData from "@/data/headerData";
import logo from "@/assets/images/resources/logo-1.png";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";
import React from "react";

// import logo from "@/images/resources/logo-1.png";
// import logo2 from "@/images/resources/logo-2.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Login com:", { email, password });
  };

  const handleGoogleLogin = () => {
    console.log("Login com Google");
  };

  return (
    <div className="min-h-screen flex items-center bg-gray-100">
      <div className="flex w-full h-full">
        {/* Coluna da Imagem */}
        <div className="w-1/2 h-screen relative hidden md:block">
          <Image
            width={500}
            height={500}
            src={"/ducanda.jpg"}
            alt="Imagem de fundo"
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* Coluna do Login */}
        <div className="w-full md:w-1/2 h-screen flex items-center justify-center bg-white">
          <div className="w-full max-w-md p-6">
            <div className="text-center mb-6">
              <Image
                src={logo}
                alt="Logo"
                className="mb-4 mx-auto"
                priority
              />
            </div>
            <h2 className="text-center text-green-600 text-2xl mb-2">Bem-vindo de volta</h2>
            <p className="text-center text-gray-500 mb-6">Faça login para continuar</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Digite seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="password" className="text-sm font-medium text-gray-700">Senha</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <button type="submit" className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition duration-300">
                Entrar
              </button>

              <button
                type="button"
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center border border-red-500 text-red-500 py-3 rounded-md hover:bg-red-100 transition duration-300"
              >
                <FaGoogle className="mr-2" />
                Entrar com Google
              </button>
            </form>

            <p className="mt-4 text-center text-gray-500">
              Não tem uma conta? <Link href="/auth/register" className="text-yellow-500">Cadastre-se</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
