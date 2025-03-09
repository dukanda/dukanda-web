"use client";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import logo from "@/assets/images/resources/logo-1.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { authRoutes } from "@/api/routes/Auth/index.routes";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tel, setTel] = useState("");
  const [lastName, setLastName] = useState("");

  const register = useMutation({
    mutationKey: ["register"],
    mutationFn: async (data: IUser) => {
      return await authRoutes.registerUser(data);
    },
    onSuccess: (data) => {
      console.log("Sucesso", data);
    },
    onError: (error) => {
      console.log("Erro", error);
    }
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const formatted = {
    //   email: email,
    //   password: password,
    //   name: name,
    //   phoneNumber: tel
    // }

    const formatted = {
      email: email,
      password: password,
      firstName: name,
      lastName: lastName,
      phoneNumber: tel
    }

    console.log("Cadastro com:", formatted);
    await register.mutate(formatted)
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
            <div className="text-center mb-6">
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
                <Input
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
                <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Sobrenome</label>
                <Input
                  type="text"
                  id="lastName"
                  placeholder="Digite seu sobrenome"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 "
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                <Input
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
                <label htmlFor="tel" className="text-sm font-medium text-gray-700">Telefone</label>
                <Input
                  type="tel"
                  id="tel"
                  placeholder="Digite seu telefone"
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="password" className="text-sm font-medium text-gray-700">Senha</label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <Button type="submit" disabled={register.isPending} className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition duration-300">
                {register.isPending ? "Cadastrando..." : "Cadastrar"}
              </Button>

              <Button
                type="button"
                onClick={handleGoogleSignup}
                className="w-full flex items-center justify-center bg-white border border-red-500 text-red-500 py-3 rounded-md hover:bg-red-100 transition duration-300"
              >
                <FaGoogle className="mr-2" />
                Cadastrar com Google
              </Button>
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
