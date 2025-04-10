"use client";

import { useState } from "react";
import { FaGoogle, FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/resources/logo-1.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { authRoutes } from "@/api/routes/Auth/index.routes";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = useMutation({
    mutationKey: ["login"],
    mutationFn: async ({ email, password }: { email: string; password: string }) => {
      return await authRoutes.loginUser(email, password);
    },
    onSuccess: (data) => {
      console.log("Sucesso", data);
    },
    onError: (error) => {
      console.log("Erro", error);
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login.mutateAsync({ email, password });
  };

  const handleGoogleLogin = () => {
    console.log("Login com Google");
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
      <div className="w-full md:w-1/2 h-screen overflow-y-auto flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-6">
          <div className="text-center mb-6">
            <Image src={logo} alt="Logo" className="mb-4 mx-auto w-24 h-auto" priority />
          </div>

          <h2 className="text-center text-green-600 text-2xl mb-2">Bem-vindo de volta</h2>
          <p className="text-center text-gray-500 mb-6">Faça login para continuar</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <InputField
              id="email"
              label="Email"
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={setEmail}
            />

            <InputField
              id="password"
              label="Senha"
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={setPassword}
            />

            <Button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition duration-300"
            >
              {login.isPending ? "Entrando..." : "Entrar"}
            </Button>

            <Button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center bg-white border border-red-500 text-red-500 py-3 rounded-md hover:bg-red-100 transition duration-300"
            >
              <FaGoogle className="mr-2" />
              Entrar com Google
            </Button>
          </form>

          <p className="mt-4 text-center text-gray-500">
            Não tem uma conta?{" "}
            <Link href="/auth/register" className="text-yellow-500">
              Cadastre-se
            </Link>
          </p>

          {/* Botão Voltar para Home */}
          <Button variant={"outline"} className="mt-6 text-center w-full">
            <Link
              href="/"
              className="inline-flex items-center text-sm text-gray-500 hover:text-green-600 transition"
            >
              {/* <FaArrowLeft className="mr-2" /> */}
              Voltar para inicio
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

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
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        autoComplete="off"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
  );
}
