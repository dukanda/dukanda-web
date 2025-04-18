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

export default function Register() {
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [tel, setTel] = useState("")
  const [password, setPassword] = useState("")

  const register = useMutation({
    mutationKey: ["register"],
    mutationFn: async (data: IUser) => await authRoutes.registerUser(data),
    onSuccess: (data) => console.log("Sucesso", data),
    onError: (error) => console.log("Erro", error),
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formatted = {
      firstName: name,
      email,
      phoneNumber: tel,
      password,
    }
    await register.mutateAsync(formatted)
  }

  const handleGoogleSignup = () => {
    console.log("Cadastro com Google")
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
          <h1 className="text-2xl font-bold text-foreground">Crie sua conta</h1>
          <p className="text-sm text-muted-foreground">Preencha os dados para começar</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput id="name" label="Nome" value={name} setValue={setName} />
          {/* <FormInput id="lastName" label="Sobrenome" value={lastName} setValue={setLastName} /> */}
          <FormInput id="email" label="Email" value={email} setValue={setEmail} type="email" />
          <FormInput id="tel" label="Telefone" value={tel} setValue={setTel} type="tel" />
          <FormInput id="password" label="Senha" value={password} setValue={setPassword} type="password" />

          <Button type="submit" disabled={register.isPending} className="w-full bg-green-700 hover:bg-green-600">
            {register.isPending ? "Cadastrando..." : "Cadastrar"}
          </Button>

          {/* <Button
            type="button"
            variant="outline"
            onClick={handleGoogleSignup}
            className="w-full flex items-center justify-center gap-2"
          >
            <FaGoogle className="h-4 w-4" />
            Cadastrar com Google
          </Button> */}
        </form>

        <p className="text-center text-sm text-muted-foreground">
          Já tem uma conta?{" "}
          <Link href="/auth/login" className="text-primary underline">
            Faça login
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
  type?: string
}

function FormInput({ id, label, value, setValue, type = "text" }: FormInputProps) {
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
        required
      />
    </div>
  )
}
