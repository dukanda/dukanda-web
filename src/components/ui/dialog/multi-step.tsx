"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { checkVariants, stepsVariants } from "@/lib/utils-multi-step";
import { Banknote, Check, CreditCard, TextSelect } from "lucide-react";
import { formatCurrency } from "@/_utils/formatCurrency";

const iconStep = [
  {
    icon: <TextSelect />,
  },
  {
    icon: <CreditCard />,
  },
  {
    icon: <Banknote />,
  },
];

export type Step<
  TPossibleFormData,
  TMultiStepFormData,
  TOtherData = unknown
> = {
  form: React.ComponentType<{
    onSubmit: (data: TPossibleFormData) => void;
    formData: TMultiStepFormData;
    useBackButton?: {
      onClick: () => void;
    };
    otherData?: TOtherData;
  }>;
  label: string;
};

export default function MultiStepForm<
  TPossibleFormData,
  TMultiStepFormData,
  TOtherData = unknown
>({
  onFinished,
  steps,
  otherData,
  total,
}: {
  onFinished: (formData: TMultiStepFormData) => void;
  steps: Step<TPossibleFormData, TMultiStepFormData, TOtherData>[];
  otherData?: TOtherData;
  total: number;
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setformData] = useState<TMultiStepFormData>(
    {} as TMultiStepFormData
  );

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      const confirmationMessage =
        "Você realmente quer recarregar a página? As mudanças podem ser perdidas.";
      event.preventDefault();
      event.returnValue = confirmationMessage;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const onStepSubmit = (data: TPossibleFormData) => {
    const updatedFormValues = { ...formData, ...data };
    setformData(updatedFormValues);
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onFinished(formData);
    }
  };

  const onBackStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const CurrentComponent = useMemo(
    () => steps[currentStep].form,
    [currentStep, steps]
  );

  return (
    <div className=" h-full">
      <div className="w-full h-full">
        <div className=" h-full flex flex-col justify-between">
          <div className="p-2 w-full flex flex-col items-center justify-center gap-2  ">
            <div className="flex gap-2">
              {steps.map((_, ind) => (
                <motion.span
                  key={ind}
                  className={clsx(
                    "select-none rounded-full border-2 h-10 w-10 flex items-center justify-center",
                    {
                      " border-[#F7931E]": ind <= currentStep,
                      "bg-[#F7931E]": ind < currentStep,
                    }
                  )}
                >
                  <AnimatePresence mode="popLayout">
                    {ind < currentStep ? (
                      <motion.span
                        key={`check-${ind}`}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={checkVariants}
                        transition={{ duration: 0.4 }}
                        className="text-white w-full h-full flex items-center justify-center  rounded-full"
                      >
                        <Check size={20} />
                      </motion.span>
                    ) : (
                      <motion.span
                        key={`number-${ind}`}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={checkVariants}
                        transition={{ duration: 0.4 }}
                        className={
                          ind === currentStep
                            ? "text-[#F7931E] font-semibold"
                            : "text-black"
                        }
                      >
                        {iconStep[ind]?.icon || <TextSelect size={16} />}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.span>
              ))}
            </div>

            <div className="w-full h-full flex flex-col items-center justify-center gap-2  ">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={currentStep}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={stepsVariants}
                  transition={{ duration: 0.5 }}
                  className="w-full  "
                >
                  <CurrentComponent
                    otherData={otherData}
                    formData={formData}
                    onSubmit={(data) => onStepSubmit(data)}
                    useBackButton={
                      currentStep > 0 ? { onClick: onBackStep } : undefined
                    }
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex justify-between items-center gap-3 mt-4 text-black">
            <span className="text-lg font-semibold">Total: {formatCurrency(total)}</span>
            <div className="flex gap-3">
              {currentStep > 0 && (
                <button
                  type="button"
                  onClick={onBackStep}
                  className="thm-btn h-10"
                >
                  Voltar
                </button>
              )}
              <button
                onClick={() => onStepSubmit({} as TPossibleFormData)}
                className="thm-btn h-10"
              >
                {currentStep < steps.length - 1 ? "Próximo" : "Concluir"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

