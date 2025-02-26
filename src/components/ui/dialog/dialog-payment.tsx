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

const StepOneForm = ({ onSubmit, selectedPackage, description }: { onSubmit: (data: any) => void, selectedPackage: Package | null, description: string }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="w-full">
        <h2 className="w-full p-2">Visão Geral da Reserva</h2>
        <p className="w-full pl-4 text-start">{description}</p>
        {selectedPackage && (
          <>
            <section className="w-full px-4 text-start ">
              <h3 className="text-start text-[12px]">Detalhes da Reserva</h3>
              <article className="flex flex-col">
                <p><strong className="mr-1">Pacote:</strong>{selectedPackage.name}</p>
                <p><strong className="mr-1">Preço:</strong>{formatCurrency(selectedPackage.price)}</p>
              </article>
            </section>
            <div className="">
              <div className="flex flex-col md:flex-row justify-between px-4 gap-4">
                <div className="flex flex-col text-start">
                  <h3 className="tour-details-two-overview__title">Benefícios</h3>
                  <ul className="list-unstyled tour-details-two__overview-bottom-list">
                    {selectedPackage.benefits.map((benefit) => (
                      <li key={benefit.id}>
                        <div className="icon">
                          <i className="fa fa-check"></i>
                        </div>
                        <div className="text">
                          <p>{benefit.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </form>
  );
};

const StepTwoForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <h2>Selecionar Método de Pagamento</h2>
        <div className="w-full flex flex-col items-center p-0 md:px-5 gap-3  ">
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
        {
          selectedPackage ? (
            <button className="thm-btn tour-details-two__sidebar-btn">Reservar</button>
          ) : (
            <button className="thm-btn tour-details-two__sidebar-btn" disabled>Reservar</button>
          )
        }
        {/* <button className="thm-btn tour-details-two__sidebar-btn">Reservar</button> */}
      </DialogTrigger>
      <DialogContent className="w-[90%] sm:max-w-[800px] h-[70%] bg-white overflow-y-auto [&::-webkit-scrollbar]:hidden">
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
