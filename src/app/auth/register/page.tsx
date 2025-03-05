"use client";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import logo from "@/assets/images/resources/logo-1.png";  
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //@ts-ignore
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Cadastro com:", { name, email, password });
  };

  const handleGoogleSignup = () => {
    console.log("Cadastro com Google");
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

        {/* Coluna do Signup */}
        <div className="w-full md:w-1/2 h-screen flex items-center justify-center bg-white">
          <div className="w-full max-w-md p-6">
            <div className="text-center mb-6 ">
              <Image
                src={logo}
                alt="Logo"
                className="mb-4 mx-auto"
                priority
              />
            </div>
            <h2 className="text-center text-green-600 text-2xl mb-2">Crie sua conta</h2>
            <p className="text-center text-gray-500 mb-6">Cadastre-se para começar</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">Nome</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Digite seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 "
                />
              </div>

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
                Cadastrar
              </button>

              <button
                type="button"
                onClick={handleGoogleSignup}
                className="w-full flex items-center justify-center border border-red-500 text-red-500 py-3 rounded-md hover:bg-red-100 transition duration-300"
              >
                <FaGoogle className="mr-2" />
                Cadastrar com Google
              </button>
            </form>

            <p className="mt-4 text-center text-gray-500">
              Já tem uma conta? <Link href="/auth/login" className="text-yellow-500">Faça login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
