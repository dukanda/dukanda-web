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
import { ChevronLeft } from "lucide-react";

export default function Register() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");

  const register = useMutation({
    mutationKey: ["register"],
    mutationFn: async (data: IUser) => {
      return await authRoutes.registerUser(data);
    },
    onSuccess: (data) => console.log("Sucesso", data),
    onError: (error) => console.log("Erro", error)
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formatted = {
      firstName: name,
      lastName,
      email,
      phoneNumber: tel,
      password
    };
    await register.mutateAsync(formatted);
  };

  const handleGoogleSignup = () => {
    console.log("Cadastro com Google");
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Coluna Esquerda Fixa com Imagem */}
      <div className="hidden md:block md:w-1/2 h-screen sticky top-0 left-0">
        <Image
          src="/ducanda.jpg"
          alt="Imagem de fundo"
          width={1000}
          height={1000}
          className="object-cover w-full h-full"
          priority
        />
      </div>

      {/* Coluna Direita com Scroll */}
      <div className="w-full md:w-1/2 h-screen overflow-y-auto flex items-center justify-center bg-white relative">
      <Button variant={"outline"} className="mt-5 w-max text-center absolute top-0 left-5 z-10">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-gray-500 hover:text-green-600 transition"
            passHref
          >
            <ChevronLeft className="mr-2" />
            Voltar
          </Link>
        </Button>
        <div className="w-full max-w-md p-6">
          <div className="text-center mb-6">
            <Image src={logo} alt="Logo" className="mb-4 mx-auto" priority />
          </div>
          <h2 className="text-center text-green-600 text-2xl mb-2">Crie sua conta</h2>
          <p className="text-center text-gray-500 mb-6">Cadastre-se para começar</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <InputField
              id="name"
              label="Nome"
              value={name}
              onChange={setName}
              type="text"
              placeholder="Digite seu nome"
            />

            <InputField
              id="lastName"
              label="Sobrenome"
              value={lastName}
              onChange={setLastName}
              type="text"
              placeholder="Digite seu sobrenome"
            />

            <InputField
              id="email"
              label="Email"
              value={email}
              onChange={setEmail}
              type="email"
              placeholder="Digite seu e-mail"
            />

            <InputField
              id="tel"
              label="Telefone"
              value={tel}
              onChange={setTel}
              type="tel"
              placeholder="Digite seu telefone"
            />

            <InputField
              id="password"
              label="Senha"
              value={password}
              onChange={setPassword}
              type="password"
              placeholder="Digite sua senha"
            />

            <Button
              type="submit"
              disabled={register.isPending}
              className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition duration-300"
            >
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
            Já tem uma conta?{" "}
            <Link href="/auth/login" className="text-yellow-500">Faça login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

// Componentização para limpar código
type InputFieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type: string;
  placeholder: string;
};

function InputField({ id, label, value, onChange, type, placeholder }: InputFieldProps) {
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">{label}</label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
  );
}
