"use client"

import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { FaGoogle } from "react-icons/fa"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import logo from "@/assets/images/resources/logo-1.png"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { authRoutes } from "@/api/routes/Auth/index.routes"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const login = useMutation({
    mutationKey: ["login"],
    mutationFn: async ({ email, password }: { email: string; password: string }) =>
      await authRoutes.loginUser(email, password),
    onSuccess: (data) => console.log("Sucesso", data),
    onError: (error) => console.log("Erro", error),
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await login.mutateAsync({ email, password })
  }

  const handleGoogleLogin = () => {
    console.log("Login com Google")
  }

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-12 bg-background">
  
      <div className="absolute top-4 left-4">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/" passHref>
            <ChevronLeft className="w-4 h-4 mr-1" />
            Voltar
          </Link>
        </Button>
      </div>

      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 space-y-6 border border-border">
        <div className="text-center space-y-2">
          <Image src={logo} alt="Logo" className="mx-auto h-12" priority />
          <h1 className="text-2xl font-bold text-foreground">Bem-vindo de volta</h1>
          <p className="text-sm text-muted-foreground">Faça login para continuar</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput
            id="email"
            label="Email"
            type="email"
            value={email}
            setValue={setEmail}
            placeholder="Digite seu e-mail"
          />
          <FormInput
            id="password"
            label="Senha"
            type="password"
            value={password}
            setValue={setPassword}
            placeholder="Digite sua senha"
          />

          <Button type="submit" className="w-full bg-green-700 hover:bg-green-600" disabled={login.isPending}>
            {login.isPending ? "Entrando..." : "Entrar"}
          </Button>

          <Button
            type="button"
            variant="outline"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-2 text-red-500 "
          >
            <FaGoogle className="h-4 w-4" />
            Entrar com Google
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground">
          Não tem uma conta?{" "}
          <Link href="/auth/register" className="text-primary underline">
            Cadastre-se
          </Link>
        </p>
      </div>
    </main>
  )
}

type FormInputProps = {
  id: string
  label: string
  value: string
  setValue: (val: string) => void
  type: string
  placeholder: string
}

function FormInput({ id, label, value, setValue, type, placeholder }: FormInputProps) {
  return (
    <div className="space-y-1">
      <Label htmlFor={id} className="text-sm">
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        required
        autoComplete="off"
      />
    </div>
  )
}
