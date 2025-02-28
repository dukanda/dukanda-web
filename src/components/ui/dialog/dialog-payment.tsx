"use client";
import { useState } from "react";
import { Image } from "react-bootstrap";
import MultiStepForm from "./multi-step";
import {
  DialogHeader,
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "./radix-dialog";
import { formatCurrency } from "@/_utils/formatCurrency";
import Select from "react-select";
import { Check, MoveUpRight, Users2Icon } from "lucide-react";
import { SelectDemo } from "../select/select";
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "../card/radix-card";


const StepOneForm = ({ onSubmit, selectedPackage, description }: { onSubmit: (data: any) => void, selectedPackage: Package | null, description: string }) => {
  return (
<form onSubmit={(e) => e.preventDefault()} className="w-full h-full space-y-6 px-4">
      {/* Header */}
      <header className="w-full mt-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Data e quantidade de pessoas */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 px-3 py-2 border rounded-md bg-gray-50/80 min-w-[200px] sm:min-w-[220px]">
              <span className="font-medium text-gray-700">12 Março 2025</span>
              <span className="text-gray-500">• quarta-feira</span>
            </div>
            <div className="flex items-center px-3 py-2 border rounded-md w-24">
              <Users2Icon className="text-gray-700" size={20} />
              <input
                type="number"
                defaultValue={1}
                className="w-full text-center border-none bg-transparent focus:outline-none"
                min={1}
              />
            </div>
          </div>
          <SelectDemo />
        </div>
      </header>

      {/* Main */}
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Benefícios */}
        <div className="bg-[#f6ae5c1e] shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Benefícios do Pacote</h2>
          <ul className="space-y-2 text-gray-700">
            {["Translado incluso", "Hospedagem 5 estrelas", "Passeios guiados", "Refeições inclusas"].map((item, index) => (
              <li key={index} className="flex gap-2 items-center">
                <Check size={16} className="text-green-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Card Principal */}
        <div className="w-full">
          <Card className="shadow-sm border border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center gap-2 hover:underline">
                Descoberta do Maracanã 
                <MoveUpRight size={18} />
              </CardTitle>
              <CardDescription className="text-gray-600">Aproveite essa experiência única</CardDescription>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-4 w-full text-start ">
              <p>
                O pacote grupo, desfrute de uma viagem inesquecível ao Maracanã, com direito a visita guiada e refeições inclusas.
              </p>
              <p className="font-semibold w-full text-start">
                5x {formatCurrency(selectedPackage?.price || 1000)}
                <br />
                <span className="text-sm font-light text-gray-800">(Incluindo impostos)</span>
              </p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-800">Total:</span>
              <span className="text-lg font-medium text-gray-800 border border-green-500 rounded-md p-2">
                {formatCurrency(selectedPackage?.price || 5000)}
              </span>
            </CardFooter>
          </Card>
        </div>
      </main>
    </form>
  );
};

const StepTwoForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <h2 className="text-md">Método de Pagamento</h2>
        <div className="w-full flex flex-col items-center p-0 md:px-5 gap-3 mt-5">
          <button
            className={`flex flex-row items-center px-4 py-3 gap-2 border rounded-lg thm-btn-pay`}
          >
            <Image
              src="/express.jpg"
              alt="Multicaixa Express"
              width={50}
              height={50}
              className="rounded-md object-cover"
            />
            <span>Multicaixa Express</span>
          </button>

          <button
            className={`flex flex-row items-center px-4 py-3 gap-2 border rounded-lg thm-btn-pay`}
          >
            <Image
              src="/visa.png"
              alt="Visa"
              width={50}
              height={50}
              className="rounded-md object-cover"
            />
            <span>Visa</span>
          </button>

          <button
            className={`flex flex-row items-center px-4 py-3 gap-2 border rounded-lg thm-btn-pay`}
          >
            <Image
              src="/mastercard.png"
              alt="Mastercard"
              width={50}
              height={50}
              className="rounded-md object-cover"
            />
            <span>Mastercard</span>
          </button>
        </div>
      </div>
    </form>
  );
};

const StepThreeForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  return (
    <div>
      <h2>Finalizar Pagamento</h2>
    </div>
  );
};

export function DialogPayment({ selectedPackage, description }: { selectedPackage: Package | null, description: string }) {
  const steps = [
    { label: "Step 1", form: (props: any) => <StepOneForm {...props} selectedPackage={selectedPackage} description={description} /> },
    { label: "Step 2", form: StepTwoForm },
    { label: "Step 3", form: StepThreeForm },
  ];

  const handleFinished = (formData: any) => {
    console.log("Final form data:", formData);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className=" h-[50px] w-full bg-[#F7931E] rounded-lg text-white mt-3 ">Reservar</button>
      </DialogTrigger>
      <DialogContent className="h-full w-full  md:w-[90%] sm:max-w-[65%] md:h-[90%] bg-white overflow-y-auto [&::-webkit-scrollbar]:hidden rounded-[18px]">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription className="h-full">
            <MultiStepForm steps={steps} onFinished={handleFinished} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
