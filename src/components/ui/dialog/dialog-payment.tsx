"use client";
import { tourDetailsLeft } from "@/data/tourDetailsPage";
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
import { useState } from "react";
import { Image } from "react-bootstrap";

const { overviewList } = tourDetailsLeft;

const StepOneForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="w-full">
        <h2 className="w-full p-2">Visão Geral da Reserva</h2>
        <p className="w-full pl-4 text-start">
          Aproveite um dia inesquecível na paradisíaca Ilha do Mussulo, onde águas cristalinas e praias de areia branca proporcionam o cenário perfeito para relaxamento e diversão.
        </p>
        <section className="w-full px-4 text-start ">
          <h3 className="text-start text-[12px]">Detalhes da Reserva</h3>
          <article className="flex gap-2">
            <p><strong>Ticket:</strong>Aventura</p>
            <p><strong>Preço:</strong>5000 kz</p>
          </article>
        </section>
        <div className="tour-details-two__overview-bottom">
          <div className="flex flex-col md:flex-row justify-between px-4 gap-4">
            <div className="flex flex-col text-start">
              <h3 className="tour-details-two-overview__title">Incluído</h3>
              <ul className="list-unstyled tour-details-two__overview-bottom-list">
                {overviewList.slice(0, 4).map((over, index) => (
                  <li key={index}>
                    <div className="icon">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="text">
                      <p>{over}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col text-start h-full">
              <h3 className="tour-details-two-overview__title">Não incluído</h3>
              <ul className="list-unstyled tour-details-two__overview-bottom-right-list">
                {overviewList.slice(4).map((over, index) => (
                  <li key={index}>
                    <div className="icon">
                      <i className="fa fa-times"></i>
                    </div>
                    <div className="text">
                      <p>{over}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

const StepTwoForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const [paymentMethod, setPaymentMethod] = useState("");
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <h2>Selecionar Método de Pagamento</h2>
        <div className="w-full flex flex-col items-center p-5 gap-3">
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

export function DialogPayment() {
  const steps = [
    { label: "Step 1", form: StepOneForm },
    { label: "Step 2", form: StepTwoForm },
    { label: "Step 3", form: StepThreeForm },
  ];

  const handleFinished = (formData: any) => {
    console.log("Final form data:", formData);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="thm-btn tour-details-two__sidebar-btn">Reservar</button>
      </DialogTrigger>
      <DialogContent className="w-[90%] sm:max-w-[800px] h-[70%] bg-white overflow-y-auto [&::-webkit-scrollbar]:hidden">
        <DialogHeader>
          <DialogDescription>
            <MultiStepForm steps={steps} onFinished={handleFinished} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
