"use client";
import { useState } from "react";
import Image from "next/image";
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
import { Check, Copy, MoveUpRight, Users2Icon } from "lucide-react";
import { SelectDemo } from "../select/select";
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "../card/radix-card";
import { Label } from "../label";
import { Input } from "../input";
import { Button } from "../button";
import UploadArea from "../upload-area";
import { formatDateRange } from "@/_utils/calculateDuration";


const StepOneForm = ({ onSubmit, selectedPackage, description, packages, onSelect, startDate, endDate }: { onSubmit: (data: any) => void, selectedPackage: Package | null, description: string, packages: Package[], startDate: string, endDate: string, onSelect: (selectedPackage: Package | null) => void }) => {

  return (
    <form onSubmit={(e) => e.preventDefault()} className="w-full h-full space-y-6">
      {/* <h2>Reservar</h2> */}
      {/* Header */}
      <header className="w-full mt-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Data e quantidade de pessoas */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 px-3 py-2 border rounded-md bg-gray-50/80 min-w-[200px] sm:min-w-[220px]">
              <span className="font-medium text-gray-700">
                {formatDateRange(new Date(startDate), new Date(endDate))}
              </span>
              {/* <span className="font-medium text-gray-700"> - 15 de Março</span> */}
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
          <SelectDemo packages={packages} onSelect={onSelect} />
        </div>
      </header>

      {/* Main */}
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Benefícios */}
        <div className="bg-[#f6ae5c1e] shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Benefícios do Pacote</h2>
          <ul className="space-y-2 text-gray-700">
            {selectedPackage?.benefits.map((benefit) => (
              <li key={benefit.id} className="flex gap-2 items-center">
               
                <Check size={16} className="text-green-600" />
                {benefit.name}
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
        {/* <h2 className="text-md">Método de Pagamento</h2> */}
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
              priority
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
              priority
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
              priority
            />
            <span>Pagamento por referência</span>
          </button>
        </div>
      </div>
    </form>
  );
};

const StepThreeForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const iban = "AO006.0000.0590.3409.8500";
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(iban);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <Card className="w-full h-max shadow-none p-0 ">
      <CardHeader>
        <CardTitle className="text-xl">Finalizar Pagamento</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-row gap-4 justify-between w-full h-full">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const data = Object.fromEntries(formData.entries());
            onSubmit(data);
          }}
          className=" w-full h-full text-start flex flex-col space-y-2 lg:flex-row md:gap-4 items-start justify-between"
        >
          <div className="flex flex-col gap-3 text-start w-full">
            <div className="flex flex-col gap-2 text-start w-full">
              <label className="text-sm"></label>
              <div className="flex flex-col gap-2">
                <label className="text-sm">Nome</label>
                <Input type="text" className="focus-visible:ring-0 h-11 text-md w-full" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm">Email</label>
                <Input type="email" className="focus-visible:ring-0 h-11 text-md w-full" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm">Telefone</label>
              <Input type="tel" className="focus-visible:ring-0 h-11 text-md w-full" />
            </div>
          </div>


          <div className="flex flex-col gap-3 text-start w-full">
            <div className="flex flex-col gap-2 text-start w-full">
              <label className="text-sm">Coordenadas Bancárias</label>
              <div className="flex items-center gap-2 w-full ">
                <Input type="text" value={iban} className="focus-visible:ring-0 h-11 text-md w-full " disabled />
                <div
                  className="cursor-pointer flex items-center gap-1 text-gray-500 hover:bg-gray-100  rounded-md p-2 text-sm w-full flex-1"
                  onClick={handleCopy}
                >
                  <Copy size={14} />
                  {copied ? <span className="text-green-500">Copiado!</span> : "Copiar"}
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full ">
                <label className="text-sm">Total a pagar</label>
                <Input type="text" value={"25.000" + " kz"} className="focus-visible:ring-0 h-11 text-md  w-full" />
              </div>
            </div>
            <div className="flex flex-col gap-2 text-start w-full h-full">
              <label className="text-sm">Comprovativo</label>
              <UploadArea />
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export function DialogPayment({ selectedPackage, description, packages, startDate, endDate }: { selectedPackage: Package | null, description: string, packages: Package[], startDate: string, endDate: string }) {
  const [selectedPackageState, setSelectedPackageState] = useState<Package | null>(selectedPackage);

  const handleSelectPackage = (selectedPackage: Package | null) => {
    setSelectedPackageState(selectedPackage);
  };

  const steps = [
    { label: "Step 1", form: (props: any) => <StepOneForm {...props} selectedPackage={selectedPackageState} description={description} packages={packages} onSelect={handleSelectPackage} startDate={startDate} endDate={endDate} /> },
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
